import LogoutButton from "@/app/components/logout-button";

export default function BothRoles() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Both Roles</h5>
                <p className="card-text">Visible for both roles after login.</p>
                <LogoutButton />
            </div>
        </div>
    );
}
