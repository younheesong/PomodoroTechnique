import FirebaseClient from "@/firebase/config/firebase_client";
import { User } from "@/firebase/models/user.model";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import nookies from "nookies";
import { getUserData } from "@/firebase/db/client/users.service";
const useFirebaseAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

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
      }
    } catch (err) {
      console.error(err);
    }
  }

  const clear = () => {
    setUser(null);
    setLoading(true);
  };

  const signOut = () =>
    FirebaseClient.getInstance()
      .Auth.signOut()
      .then(() => {
        clear();
        nookies.set(undefined, "token", "", { path: "/" });
      });
  const authStateChanged = async (authUser: any) => {
    if (authUser === null) {
      setUser(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    //token 처리
    const token = await authUser.getIdToken();
    nookies.set(undefined, "token", token, { path: "/" });
    //setUser 처리
    const user = await getUserData(authUser?.uid);
    setUser(user);

    setLoading(false);
  };
  useEffect(() => {
    const unsubscribe =
      FirebaseClient.getInstance().Auth.onIdTokenChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return { user, loading, signInWithGoogle, signOut };
};
export default useFirebaseAuth;
