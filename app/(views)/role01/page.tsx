"use client"
import LogoutButton from "@/app/components/logout-button";
import { useSession } from "next-auth/react";

export default function Role01() {
    useSession({
        required: true,
    });
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Role 01</h5>
                <p className="card-text">Just visible if user has role01.</p>
                <LogoutButton />
            </div>
        </div>
    );
}
