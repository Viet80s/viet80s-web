import { client } from "@/client";

export async function getPostList(category?: string | string[] | null) {
  let CONTENT_QUERY;
  let params = {};

  if (category) {
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
  } else {
    CONTENT_QUERY = `*[_type == "post"] {
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
  }

  const content = await client.fetch(CONTENT_QUERY, params);
  return content;
}