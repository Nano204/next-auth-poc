"use client";
import { Session } from "next-auth";
import { SessionProvider, signIn } from "next-auth/react";

export default function LoginButton() {
    return (
        <button onClick={() => signIn()} type="button" className="btn btn-primary">
            Login
        </button>
    );
}
