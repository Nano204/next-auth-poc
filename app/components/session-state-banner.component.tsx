"use client";
import { useSession } from "next-auth/react";

export default function SessionStateBanner() {
    const { data: session, status } = useSession();
    let state = null;
    if (status === "authenticated") {
        state = (
            <span>
                <strong>Signed in as:</strong> {session.user.role}
            </span>
        );
    } else {
        state = <span>Unauthenticated</span>;
    }

    return (
        <div className="alert alert-primary" role="alert">
            {state}
        </div>
    );
}
