export async function GET(request: Request) {
    const url = process.env.EXTERNAL_API || "";
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            identifier: process.env.API_ID,
            password: process.env.API_PASS,
        }),
    };

    const response = await (await fetch(url, requestOptions)).json();

    return Response.json({ token: response.jwt });
}
