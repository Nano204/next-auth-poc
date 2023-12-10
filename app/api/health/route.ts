export async function GET(request: Request) {
  return new Response('API health check passed.', {
    status: 200,
    // headers: { referer: referer },
  })
}