import { client } from "@/client";

export async function getCategory(category: string) {
  const CONTENT_QUERY = `*[_type == "category" && title == $category][0] {
   "categoriesTitle": title,
    "categoriesDescription": description}`;

  const params = { category };
  const content = await client.fetch(CONTENT_QUERY, params);
  console.log(content)
  return content;
}