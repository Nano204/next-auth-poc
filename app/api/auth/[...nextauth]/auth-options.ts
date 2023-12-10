import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

type AuthUser = {
    id: string;
    role: string;
    tokenJSON: { jwt: string };
};

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

                // const token = "222";
                // This is where the call to backend authentication should be to retrieve
                // a user the should by type { id: string, ...}
                const user01 = { id: "01", role: "role01", tokenJSON };
                const user02 = { id: "02", role: "role02", tokenJSON };
                let user: AuthUser | null = null;
                if (credentials?.role == user01.role) user = user01;
                if (credentials?.role == user02.role) user = user02;
                return user;
            },
        }),
    ],
};

export { authOptions };
