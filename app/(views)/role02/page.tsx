import LogoutButton from "@/app/components/logout-button";

export default function Role02() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Role 02</h5>
                <p className="card-text">Just visible if user has role02.</p>
                <LogoutButton />
            </div>
        </div>
    );
}