import { client } from "@/client";

export async function getPostList() {
  const CONTENT_QUERY = `*[_type == "post"] {
    ...,
    author->,
    "categoriesTitle": categories[]->title,
    "categoriesDescription": categories[]->description,
    "postImage": body[(_type == "image")][0] {
      ...,
      asset->
    }, body
  }`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}