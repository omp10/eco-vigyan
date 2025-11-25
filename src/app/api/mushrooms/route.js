import { mushrooms } from "@/data/mushrooms";

export function GET() {
  return Response.json(mushrooms);
}
