# Eco Vigyan – Mushroom Mapping

Next.js 16 app that visualizes community-sourced mushroom sightings across Shimla.  
The `/api/mushrooms` endpoint now reads data from MongoDB (with a static fallback for development).

## Development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## MongoDB Setup

1. Create a `.env.local` file in the project root:
   ```bash
   MONGODB_URI=mongodb+srv://username:password@cluster-url
   # optional, defaults to eco-vigyan
   MONGODB_DB=eco-vigyan
   ```
2. Seed the Atlas collection with the existing static data:
   ```bash
   npm run seed:mushrooms
   ```
   The script loads `MONGODB_URI`, wipes the `mushrooms` collection, and inserts the entries from `src/data/mushrooms.js`.
3. Insert additional documents shaped like:
   ```json
   {
     "latitude": 31.137226,
     "longitude": 77.709575,
     "category": "Decomposer/ parasitic",
     "contributor": "Prakash",
     "name": "Magic Mushroom",
     "use": "Edible"
   }
   ```
   Use the same script or Atlas UI to add more records.

If MongoDB is unreachable or empty, the API gracefully falls back to the static dataset so the UI continues to function.

## Deployment Checklist

- `MONGODB_URI` (and optionally `MONGODB_DB`) must be configured in the hosting provider.
- Ensure the `mushrooms` collection contains data; otherwise the static fallback will be returned.
