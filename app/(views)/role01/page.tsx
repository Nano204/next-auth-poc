"use client";
import LogoutButton from "@/app/components/logout-button.comoponent";
import { useSession } from "next-auth/react";

export default function Role01() {
    useSession({
        required: true,
    });
    const { data: session } = useSession();
    if (session?.user.role === "role01") {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Role 01</h5>
                    <p className="card-text">Just visible if user has role01.</p>
                    <LogoutButton />
                </div>
            </div>
        );
    } else {
        return (
            <div className="alert alert-warning" role="alert">
                Not authorized
            </div>
        );
    }
}
