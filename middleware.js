// middleware.js  — DEV: allow all requests to pass (no auth redirect)
import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.next();
}

// Keep matcher so file only runs on member routes (optional for perf)
export const config = {
  matcher: ["/member/:path*"],
};
