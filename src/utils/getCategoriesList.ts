import { client } from "@/client";

export async function getCategoriesList() {
  const CONTENT_QUERY = `*[_type == "category"]`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}