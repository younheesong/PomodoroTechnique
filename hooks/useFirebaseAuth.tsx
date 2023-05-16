import FirebaseClient from "@/firebase/config/firebase_client";
import { User } from "@/firebase/models/user.model";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import nookies from "nookies";
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
        console.info(signInResult.user);
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
    if (user === null) {
      setUser(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    const token = await authUser.getIdToken();
    nookies.set(undefined, "token", token, { path: "/" });
    //setUser 처리
    setLoading(false);
  };
  useEffect(() => {
    const unsubscribe =
      FirebaseClient.getInstance().Auth.onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return { user, loading, signInWithGoogle, signOut };
};
export default useFirebaseAuth;
