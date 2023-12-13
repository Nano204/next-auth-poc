'use client'
import LogoutButton from "@/app/components/logout-button.comoponent";
import { useSession } from "next-auth/react";

export default function BothRoles() {
    const { status } = useSession();
    if (status === "authenticated") {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Both Roles</h5>
                <p className="card-text">Visible for both roles after login.</p>
                <LogoutButton />
            </div>
        </div>
    ) } else {
        return (
            <div className="alert alert-warning" role="alert">
                Not authorized
            </div>
        );
    }
}
