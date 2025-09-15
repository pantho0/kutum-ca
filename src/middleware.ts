/* eslint-disable @typescript-eslint/ban-ts-comment */
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/auth";

const intlMiddleware = createMiddleware(routing);

const roleBasedRoutes = {
  admin: [/^(\/[a-z]{2})?\/admin-management(\/.*)?$/],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const i18nResponse = intlMiddleware(request);
  if (i18nResponse) {
    //@ts-ignore
    request = i18nResponse.request ?? request;
  }

  const isProtected = roleBasedRoutes.admin.some((p) => pathname.match(p));

  if (!isProtected) {
    return i18nResponse;
  }

  const accessToken = request.cookies.get("accessToken");
  if (!accessToken) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }

  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }

  if (user.role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return i18nResponse;
}

export const config = {
  matcher: [
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
    "/admin-management",
    "/admin-management/:page*",
    "/login",
  ],
};
