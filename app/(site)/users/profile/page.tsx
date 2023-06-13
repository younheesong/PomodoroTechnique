import { getUsers } from "@/sanity/sanity-utils";

const Profile = async () => {
  const users = await getUsers();
  console.log(users);

  return <>{users[0].email}</>;
};
export default Profile;
