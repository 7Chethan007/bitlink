import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json(); // Parse the request body
    const client = await clientPromise;
    const db = client.db("bitlink");
    const collection = db.collection("url");

    // Insert the URL into the database
    const doc = await collection.findOne({ shortUrl: body.shortUrl })
    if (doc) {
        return new Response(JSON.stringify({ success: false, error: true, message: "Short URL already exists" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl,
    });

    return new Response(JSON.stringify({ success: true, error: false, message: "URL generated successfully" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}