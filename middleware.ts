import type { NextRequest } from "next/server";
import { withoutAuth } from "./middlewares/withoutAuth";
import { withAuth } from "./middlewares/withAuth";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/accounts/login")) {
    console.log("middleware: withoutAuth");
    return withoutAuth(request);
  }
  if (
    request.nextUrl.pathname.startsWith("/users/profile") ||
    request.nextUrl.pathname.startsWith("/roadmaps/post-roadmap")
  ) {
    console.log("middleware: withAuth");
    return withAuth(request);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/accounts/login", "/users/profile", "/roadmaps/post-roadmap"],
};
