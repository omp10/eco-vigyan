import { mushrooms as fallbackMushrooms } from "@/data/mushrooms";
import { getMongoDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";

function sanitizePayload(payload = {}) {
  const trimmed = {
    name: payload.name?.trim(),
    contributor: payload.contributor?.trim(),
    category: payload.category?.trim(),
    use: payload.use?.trim(),
    latitude: Number(payload.latitude),
    longitude: Number(payload.longitude)
  };

  const requiredText = ["name", "contributor", "category", "use"];
  for (const key of requiredText) {
    if (!trimmed[key]) {
      return { error: `${key} is required` };
    }
  }

  if (Number.isNaN(trimmed.latitude) || Number.isNaN(trimmed.longitude)) {
    return { error: "latitude and longitude must be valid numbers" };
  }

  return { data: trimmed };
}

export async function GET() {
  try {
    const db = await getMongoDb();
    const data = await db
      .collection("mushrooms")
      .find({})
      .project({ _id: 0 })
      .toArray();

    if (!data.length) {
      return NextResponse.json(fallbackMushrooms);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch mushrooms from MongoDB:", error);
    return NextResponse.json(fallbackMushrooms);
  }
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON payload" },
      { status: 400 }
    );
  }

  const { data, error } = sanitizePayload(payload);
  if (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }

  try {
    const db = await getMongoDb();
    await db.collection("mushrooms").insertOne({
      ...data,
      createdAt: new Date()
    });

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error("Failed to insert mushroom:", err);
    return NextResponse.json(
      { message: "Failed to save mushroom entry", detail: err?.message },
      { status: 500 }
    );
  }
}
