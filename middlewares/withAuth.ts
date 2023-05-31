export async function withAuth(req, res, redirect = null) {
  let redirectUrl = new URL("/accounts/login", req.url);
  if (redirect) {
    redirectUrl = new URL(redirect, req.url);
  }
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return res.redirect(redirectUrl);
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
    if (!decodedToken) return res.redirect(redirectUrl);
  } catch (e) {
    console.log(e);

    return res.redirect(redirectUrl);
  }
  return res.next();
}
