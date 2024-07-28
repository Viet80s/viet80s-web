import { client } from "@/client";

export async function getPostList(category: string ) {
  let CONTENT_QUERY;
  let params = {};

    CONTENT_QUERY = `*[_type == "post" && $category in categories[]->title] | order(_createdAt desc) {
      ...,
      author->,
      "categoriesTitle": categories[]->title,
      "categoriesDescription": categories[]->description,
      "postImage": mainImage, 
      body
    }`;
    params = { category };

  const content = await client.fetch(CONTENT_QUERY, params);
  return content;
}