import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserLogin } from "@/services/User";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                try {
                    if (!credentials?.email || !credentials?.password) {
                        throw new Error("Please provide email and password")
                    }

                    const response = await UserLogin({
                        email: credentials.email,
                        password: credentials.password
                    })

                    if (!response?.status) {
                        return null
                    }

                    const user = response.data
                    // console.log("=====USER====",user)

                    return {
                        id: user.id,
                        email: user.email,
                        accessToken: user.token
                    }

                } catch (error) {
                    console.log(error)
                    return null
                }
            }
        }),
    ],

    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.email = user.email
                token.accessToken = user.accessToken
            }
            return token
        },

        async session({ session, token }) {
            session.user = {
                id: token.id,
                email: token.email,
                accessToken: token.accessToken
            }

            return session
        }
    },

    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/signin',
        error: '/signin',
    }
};
