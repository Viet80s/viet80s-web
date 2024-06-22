"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/client";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  _createdAt: string;
}

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

const Index = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const content = await getContent();
      setPosts(content);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Welcome to a blog!</h1>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = "", slug = { current: "" }, _createdAt = "" }) =>
            slug &&
            slug.current && (
              <li key={_id}>
                <Link href={`/post/${slug.current}`}>{title}</Link> (
                {new Date(_createdAt).toDateString()})
              </li>
            )
        )}
    </div>
  );
};

export default Index;
