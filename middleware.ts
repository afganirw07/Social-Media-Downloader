import NextAuthMiddleware from "next-auth/middleware"

export default NextAuthMiddleware

export const config = {
    matcher: [
        "/home/:path*",
        "/profile/:path*",
        "/subscriber/:path*",
    ],
}