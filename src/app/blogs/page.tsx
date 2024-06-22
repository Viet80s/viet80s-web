"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getContent } from "../api/posts/route";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  _createdAt: string;
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
