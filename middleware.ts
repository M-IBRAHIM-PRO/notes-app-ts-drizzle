import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in', '/sign-up'])

export default clerkMiddleware(async (auth, request) => {
  console.log("Middleware triggered for URL:", request.nextUrl.pathname);
  
  if (!isPublicRoute(request)) {
    console.log("Attempting to protect route:", request.nextUrl.pathname);
    await auth.protect();
  } else {
    console.log("Public route accessed:", request.nextUrl.pathname);
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}