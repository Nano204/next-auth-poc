import { NextAuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            credentials: { role: { label: "role", type: "text" } },
            async authorize(credentials) {
                const requestOptions = {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                };

                const token = await fetch(
                    "http://localhost:3000/api/one-use-token",
                    requestOptions
                );
                const tokenJSON = await token.json();

                const user01 = { id: "01", role: "role01", tokenJSON };
                const user02 = { id: "02", role: "role02", tokenJSON };
                let user: User | null = null;
                if (credentials?.role == user01.role) user = user01;
                if (credentials?.role == user02.role) user = user02;
                return user;
            },
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.role = user.role;
                token.id = user.id;
            }
            return token;
        },
        session({ session, token }) {
            session.user.role = token.role as string;
            session.user.id = token.id as string;
            return session;
        },
    },
};

export { authOptions };
