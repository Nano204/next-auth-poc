"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <button onClick={() => signOut()} type="button" className="btn btn-danger">
            Logout
        </button>
    );
}