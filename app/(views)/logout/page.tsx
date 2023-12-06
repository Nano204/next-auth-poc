export default function Logout() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Logout</h5>
                <p className="card-text">
                    Should be visible just if there is an active sessions.
                </p>
                <button type="button" className="btn btn-danger">
                    Logout
                </button>
            </div>
        </div>
    );
}
