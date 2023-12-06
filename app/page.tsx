import Image from "next/image";

export default function Home() {
    const textContent = `Some quick example text to build on the card title and make up the
  bulk of the card's content.`;
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="card" style={{ width: "18rem" }}>
                {/* <Image src="" className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">{textContent}</p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </main>
    );
}
