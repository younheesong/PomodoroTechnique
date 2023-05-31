import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { withoutAuth } from "./middlewares/withoutAuth";
import { withAuth } from "./middlewares/withAuth";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/accounts/login")) {
    console.log("middleware");
    return await withoutAuth(request, NextResponse);
  }
  if (request.nextUrl.pathname.startsWith("/users/profile")) {
    console.log("middleware");
    return await withAuth(request, NextResponse);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/accounts/login", "/users/profile"],
};
