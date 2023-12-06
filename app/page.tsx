import Image from "next/image";

export default function Home() {
    return (
        // <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="card" style={{ width: "18rem" }}>
            {/* <Image src="" className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">Nextauth.js POC</h5>
                <p className="card-text">
                    This is a small POC of Nextauth.js use for roles.
                </p>
                <a href="/login" className="btn btn-primary">
                    Go to login
                </a>
            </div>
        </div>
        // </main>
    );
}
