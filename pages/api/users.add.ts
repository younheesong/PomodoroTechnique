import checkSupportMethod from "@/firebase/error/check_method";
import { NextApiRequest, NextApiResponse } from "next";
import UserCtrl from "@/firebase/controllers/users.ctrl";
import handlerError from "@/firebase/error/handle_error";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supportMethod = ["POST"];
  try {
    checkSupportMethod(supportMethod, req.method);

    const resp = await UserCtrl.add(req);
    if (resp.status === 0) {
      res.status(200).json(resp);
    } else {
      res.status(500).json(resp);
    }
  } catch (err) {
    handlerError(err, res);
  }
}
