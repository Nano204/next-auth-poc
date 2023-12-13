"use client";
import { SessionProvider, useSession } from "next-auth/react";
import SessionStateBanner from "./components/session-state-banner.component";

export default function NextAuthProvider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <Auth>{children}</Auth>
        </SessionProvider>
    );
}

function Auth({ children }: { children: React.ReactNode }) {
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <SessionStateBanner />
            {children}
        </div>
    );
}
