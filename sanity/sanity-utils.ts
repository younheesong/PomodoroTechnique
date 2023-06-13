import { User } from "@/types/user";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getUsers(): Promise<User[]> {
  return createClient(clientConfig).fetch(
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
