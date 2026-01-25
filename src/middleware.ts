import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, next: () => void) {
  return NextResponse.redirect(new URL("/complex-dashboard", req.url));
  console.log(`Request URL: ${req.url}`);
  next();
}

export const config = {
  matcher: "/profile",
};
