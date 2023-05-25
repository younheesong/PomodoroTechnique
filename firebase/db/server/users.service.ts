import { CollectionNames } from "@/firebase/models/common.model";
import FirebaseAdmin from "../../config/firebase_admin";

const add = async (res) => {
  const { uid, email, photoURL, displayName } = res;
  const db = FirebaseAdmin.getInstance().Firebase;

  const docSnapshot = await FirebaseAdmin.getInstance()
    .Firebase.collection(CollectionNames.users)
    .doc(uid)
    .get();
  if (docSnapshot.exists) return { status: 1 };
  const addData = {
    userId: uid,
    username: displayName,
    isUserActive: true,
    email: email,
    photoURL: photoURL,
    signupSource: "google",
  };
  const batch = db.batch();
  batch.set(db.collection(CollectionNames.users).doc(uid), addData);
  await batch.commit();
  return {
    status: 0,
    message: addData,
  };
};

const UserModel = {
  add,
};
export default UserModel;
