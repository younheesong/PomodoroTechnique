import checkSupportMethod from "@/firebase/error/check_method";
import { NextApiRequest, NextApiResponse } from "next";
import handlerError from "@/firebase/error/handle_error";
import FirebaseAdmin from "@/firebase/config/firebase_admin";
import { UnauthorizedError } from "@/firebase/error/error";

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
      console.log(decodedToken);
      console.log(11);
      res.status(200).json(decodedToken.uid);
    } else {
      const error = new UnauthorizedError();
      handlerError(error, res);
    }
  } catch (err) {
    handlerError(err, res);
  }
}
