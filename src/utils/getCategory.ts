import { client } from "@/client";

export async function getCategory(category: string) {
  const CONTENT_QUERY = `*[_type == "post" && $category in categories[]->title][0] {
   "categoriesTitle": categories[]->title,
    "categoriesDescription": categories[]->description}`;

  const params = { category };
  const content = await client.fetch(CONTENT_QUERY, params);
  return content;
}