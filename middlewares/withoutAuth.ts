import { NextResponse } from "next/server";

export async function withoutAuth(req, redirect = null) {
  let redirectUrl = new URL("/", req.url);
  if (redirect) {
    redirectUrl = new URL(redirect, req.url);
  }

  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.next();
  }
  let decodedToken;
  try {
    decodedToken = await fetch(`${process.env.DOMAIN_URL}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    });

    if (decodedToken) {
      return NextResponse.redirect(redirectUrl);
    }
  } catch (e) {
    console.log(e);
    return NextResponse.next();
  }

  return NextResponse.next();
}
