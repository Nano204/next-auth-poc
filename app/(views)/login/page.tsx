import LoginButton from "@/app/components/login-button";

export default function Login() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Login</h5>
                <p className="card-text">Should be visible just if there is no active sessions.</p>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword5" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="inputPassword5"
                        className="form-control"
                        aria-describedby="passwordHelpBlock"
                    />
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and
                        numbers, and must not contain spaces, special characters, or
                        emoji.
                    </div>
                </div>
                <LoginButton />
            </div>
        </div>
    );
}
