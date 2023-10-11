export { default } from "next-auth/middleware";
import { fallbackLng, locales, cookieName } from './app/i18n/settings'
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith(`/${fallbackLng}`) || pathname === `/${fallbackLng}`) {
    return NextResponse.redirect(
      new URL(
        pathname.replace(`/${fallbackLng}`,
          pathname === `/${fallbackLng}` ? '/' : ''
        ),
        request.url,
      ),
    );
  }

  const pathnameIsMissingLocale = locales.every(locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`)

  if (pathnameIsMissingLocale) {

    return NextResponse.rewrite(
      new URL(`/${fallbackLng}${pathname}`, request.url),
    );
  }

  return NextResponse.next()
}

export const config = {
  // matcher: ["/profile"],
  // matcher: ["/((?!register|api|login).*)"],
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
};