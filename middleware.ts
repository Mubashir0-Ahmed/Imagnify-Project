// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server';
import { createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/api/webhooks/clerk',  // Public route
]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) {
    return; // Allow access to public routes
  }

  auth().protect(); // Protect all other routes
});

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)', // Matches all routes except static files
    '/(api|trpc)(.*)',
  ],
};
