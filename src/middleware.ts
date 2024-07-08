import authConfig from "../auth.config";
import NextAuth from "next-auth";
import { apiAuthPrefix, authRoutes, defaultRedirectPath, publicRoutes } from "./config/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  
  const isAPIAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isAPIAuthRoute) {
    return null;
  }

  if (isAuthRoute){
    if(isLoggedIn){
      return Response.redirect(new URL(defaultRedirectPath, nextUrl));
    }
    return null;
  }

  if(!isLoggedIn && !isPublicRoute){
    return Response.redirect(new URL("/auth/signin", nextUrl));
  }

  return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
