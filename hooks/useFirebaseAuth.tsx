import FirebaseClient from "@/firebase/config/firebase_client";
import { User } from "@/types/user";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import nookies from "nookies";
import { getUser } from "@/lib/user.service";
import { usePathname, useRouter } from "next/navigation";
const useFirebaseAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  async function signInWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    try {
      const signInResult = await signInWithPopup(
        FirebaseClient.getInstance().Auth,
        provider
      );
      if (signInResult.user) {
        await fetch("/api/users.add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: signInResult.user.uid,
            email: signInResult.user.email,
            displayName: signInResult.user.displayName,
            photoURL: signInResult.user.photoURL,
          }),
        });
        const user = await getUser({ _id: signInResult.user.uid });
        setUser(user[0]);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const clear = () => {
    setUser(null);
    setLoading(true);
  };
  const reload = () => {
    console.log("hihi");
    console.log(pathname);
    router.replace(pathname as string);
  };

  const signOut = () =>
    FirebaseClient.getInstance()
      .Auth.signOut()
      .then(() => {
        setUser(null);
        setLoading(false);
        nookies.set(undefined, "token", "", { path: "/" });
      });
  const authStateChanged = async (authUser: any) => {
    if (authUser === null) {
      setUser(null);
      setLoading(false);
      reload();
      return;
    }
    setLoading(true);
    //token 처리
    const token = await authUser.getIdToken();
    nookies.set(undefined, "token", token, { path: "/" });
    //setUser 처리
    console.log(authUser?.uid);
    const user = await getUser({ _id: authUser?.uid });
    setUser(user[0]);
    setLoading(false);
    reload();
  };
  useEffect(() => {
    const unsubscribe =
      FirebaseClient.getInstance().Auth.onIdTokenChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return { user, loading, signInWithGoogle, signOut };
};
export default useFirebaseAuth;
