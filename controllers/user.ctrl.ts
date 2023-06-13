import { NextApiRequest } from "next";
import { BadRequestError } from "./error/error";
import { createUser } from "@/lib/user.service";

async function add(req: NextApiRequest) {
  const { uid, displayName, photoURL, email } = req.body;
  if (uid === undefined || uid === null) {
    throw new BadRequestError("uid가 누락되었습니다.");
  }
  if (email === undefined || email === null) {
    throw new BadRequestError("email이 누락되었습니다.");
  }
  const addResult = await createUser({ uid, displayName, photoURL, email });

  return addResult;
}
const UserCtrl = {
  add,
};
export default UserCtrl;
