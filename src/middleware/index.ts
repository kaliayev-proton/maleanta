import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
	const { pathname } = context.url;
	console.log(`Middleware: ${pathname}`);

	// const isDev = import.meta.env.DEV;
	// if (pathname !== "/now" && !isDev) {
	// 	return Response.redirect(new URL("/now", context.url));
	// }

	return next();
});
