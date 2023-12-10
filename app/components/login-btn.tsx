"use client";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
export default function LoginButton() {
    const { data: session } = useSession();
    if (session) {
        return (
            <SessionProvider session={session}>
                Signed in as {session.user?.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </SessionProvider>
        );
    }
    return (
        <SessionProvider session={session}>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </SessionProvider>
    );
}
