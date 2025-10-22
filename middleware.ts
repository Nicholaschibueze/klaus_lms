import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
	const sessionCookie = getSessionCookie(request);

	// Optimistic redirect for unauthenticated users
	// Note: This is for UX optimization only - always verify auth in your API routes/pages
	if (!sessionCookie) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/admin/:path*", // Protect all admin routes
		"/((?!api|_next/static|_next/image|favicon.ico|login|$).*)", // Exclude public routes and assets
	],
};