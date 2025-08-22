// /middleware.js
import { NextResponse } from "next/server";

// TEMP: allow everything through (no redirects)
export function middleware() {
  return NextResponse.next();
}

// Disable middleware by matching nothing
export const config = {
  matcher: [],
};
