import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mushrooms } from "../src/data/mushrooms.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "..", ".env.local") });

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "eco-vigyan";

if (!uri) {
  console.error("❌  MONGODB_URI not set. Add it to .env.local before seeding.");
  process.exit(1);
}

async function seed() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("mushrooms");

    await collection.deleteMany({});
    await collection.insertMany(mushrooms);

    console.log(`✅  Inserted ${mushrooms.length} mushrooms into ${dbName}.mushrooms`);
  } catch (error) {
    console.error("❌  Failed to seed mushrooms:", error);
    process.exitCode = 1;
  } finally {
    await client.close();
  }
}

seed();

