export async function GET() {
  const response = await fetch("https://links.papareact.com/isz", {
    cache: "no-store",
  });

  if (!response.ok) {
    return Response.json(
      { error: `External request failed with status ${response.status}` },
      { status: response.status },
    );
  }

  const data = await response.json();
  return Response.json(data);
}
