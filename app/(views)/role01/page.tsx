export default function Role01() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Role 01</h5>
                <p className="card-text">Just visible if user has role01.</p>
                <button type="button" className="btn btn-danger">
                    Logout
                </button>
            </div>
        </div>
    );
}
