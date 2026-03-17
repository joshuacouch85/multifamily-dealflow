export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Submissions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: body.name,
              Email: body.email,
              "Parcel Number": body.parcel_number,
              Address: body.address,
              Notes: body.notes,
            },
          },
        ],
      }),
    }
  );

  return new Response(await response.text(), { status: 200 });
}