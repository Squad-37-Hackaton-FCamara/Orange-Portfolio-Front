import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("@nextauth.token")?.value;

  const signInURL = new URL("/login", req.url);

  const meusProjetosURL = new URL("/meus-projetos", req.url);

  if (!token) {
    if (
      req.nextUrl.pathname === "/login" ||
      req.nextUrl.pathname === "/cadastro"
    ) {
      return NextResponse.next();
    }
    return NextResponse.redirect(signInURL);
  }

  if (
    req.nextUrl.pathname === "/login" ||
    req.nextUrl.pathname === "/cadastro"
  ) {
    return NextResponse.redirect(meusProjetosURL);
  }
}

export const config = {
  matcher: ["/login", "/meus-projetos"],
};
