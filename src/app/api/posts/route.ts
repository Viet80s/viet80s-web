import { client } from '@/client';

// Fetch content with GROQ
export async function getContent() {
  const CONTENT_QUERY = `*[_type == "post"] {
    ...,
    author->,
    mainImage {
      ...,
      asset->
    },
    categories[]->,
    body
  }`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}
