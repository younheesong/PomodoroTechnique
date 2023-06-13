import { User } from "@/types/user";
import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/config/client-config";
import { client } from "@/sanity/utils/client";

export async function getUsers(): Promise<User[]> {
  return await createClient(clientConfig).fetch(
    groq`*[_type=="user"]{
        _id,
        _createdAt,
        username,
        email,
        profilePhoto,
        accountType,
        isUserActive,
    }`
  );
}

export async function getUser({ _id }: { _id: string }) {
  return await createClient(clientConfig).fetch(
    groq`*[_type=="user" && _id=="${_id}"]{
        _id,
        _createdAt,
        username,
        email,
        profilePhoto,
        accountType,
        isUserActive,
    }`
  );
}

export async function createUser({
  uid,
  email,
  photoURL,
  displayName,
}: {
  uid: string;
  email: string;
  photoURL: string;
  displayName: string;
}) {
  const resp = await getUser({ _id: uid });
  console.log(resp);
  if (resp?.result?.length > 0) return { status: 1 };

  const addData = {
    _id: uid,
    username: displayName,
    isUserActive: true,
    email: email,
    profilePhoto: photoURL,
    accountType: "google",
  };

  await client
    .create({ ...addData, _type: "user", _id: uid })
    .then((res) => console.log(res));

  return {
    status: 0,
    message: addData,
  };
}
