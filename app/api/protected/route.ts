import { getServerSession } from "next-auth";

export async function GET(request: Request) {
    const session = await getServerSession();
    let message: string;
    if (session) {
        message =
            "This is protected content. You can access this content because you are signed in.";
    } else {
        message = "You must be signed in to view the protected content on this page.";
    }
    return Response.json({ message, session });
}
