"use client";
import LoginButton from "@/app/components/login-button.component";
import { useSession } from "next-auth/react";

export default function Login() {
    const { data: session, status } = useSession();
    if (status !== "authenticated") {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Login</h5>
                    <p className="card-text">Just visible if user is not logged.</p>
                    <LoginButton />
                </div>
            </div>
        );
    } else {
        return (
            <div className="alert alert-success" role="alert">
                Already signed in as <strong>{session.user.role}</strong>
            </div>
        );
    }
}
