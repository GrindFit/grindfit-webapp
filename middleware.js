import { NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { pathname, origin } = req.nextUrl;

  // Block unauthenticated users from /member/*
  if (pathname.startsWith("/member") && !session) {
    const redirect = encodeURIComponent(`${origin}${pathname}${req.nextUrl.search}`);
    return NextResponse.redirect(`${origin}/login?redirect=${redirect}`);
  }

  // Keep logged-in users out of login/signup
  if ((pathname === "/login" || pathname === "/signup") && session) {
    return NextResponse.redirect(`${origin}/member`);
  }

  return res;
}

export const config = { matcher: ["/member/:path*", "/login", "/signup"] };
