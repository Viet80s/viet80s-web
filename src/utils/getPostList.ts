import { client } from "@/client";

export async function getPostList(category: string ) {
  let CONTENT_QUERY;
  let params = {};

    CONTENT_QUERY = `*[_type == "post" && $category in categories[]->title] {
      ...,
      author->,
      "categoriesTitle": categories[]->title,
      "categoriesDescription": categories[]->description,
      "postImage": body[(_type == "image")][0] {
        ...,
        asset->
      }, 
      body
    }`;
    params = { category };

  const content = await client.fetch(CONTENT_QUERY, params);
  return content;
}