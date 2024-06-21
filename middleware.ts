import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoutes = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/new-user',
]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoutes(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
