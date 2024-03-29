import { NextApiRequest, NextApiResponse } from "next";
import UserCtrl from "@/controllers/user.ctrl";
import checkSupportMethod from "@/controllers/error/check_method";
import handlerError from "@/controllers/error/handle_error";

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
