import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/auth-options";

export default async function ServerPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/server");
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Server</h5>
                <p className="card-text">Showed when there is an active session.</p>
                <button type="button" className="btn btn-danger">
                    Logout
                </button>
            </div>
        </div>
    );
}
