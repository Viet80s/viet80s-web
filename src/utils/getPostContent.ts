import { client } from "@/client";

export async function getPostContent(slug: string) {
  const CONTENT_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "authorName": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;
  const params = { slug };
  const content = await client.fetch(CONTENT_QUERY, params);
  return content;
}