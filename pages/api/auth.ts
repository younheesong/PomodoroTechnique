import { NextApiRequest, NextApiResponse } from "next";
import FirebaseAdmin from "@/firebase/config/firebase_admin";
import { UnauthorizedError } from "@/controllers/error/error";
import handlerError from "@/controllers/error/handle_error";
import checkSupportMethod from "@/controllers/error/check_method";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supportMethod = ["POST"];
  try {
    checkSupportMethod(supportMethod, req.method);

    const decodedToken = await FirebaseAdmin.getInstance().Auth.verifyIdToken(
      req.body.token
    );
    if (decodedToken && decodedToken.uid) {
      res.status(200).json(decodedToken.uid);
    } else {
      const error = new UnauthorizedError();
      handlerError(error, res);
    }
  } catch (err) {
    handlerError(err, res);
  }
}
