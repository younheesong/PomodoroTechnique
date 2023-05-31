import { NextResponse } from "next/server";

export async function withoutAuth(req, res, redirect = null) {
  let redirectUrl = new URL("/", req.url);
  if (redirect) {
    redirectUrl = new URL(redirect, req.url);
  }

  const token = req.cookies.get("token")?.value;

  if (!token) {
    return res.next();
  }
  let decodedToken;
  try {
    decodedToken = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    });

    if (decodedToken) {
      return res.redirect(redirectUrl);
    }
  } catch (e) {
    console.log(e);
    return res.next();
  }

  return res.next();
}
