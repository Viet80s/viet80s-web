"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getPostList } from "@/utils/getPostList";
import { Posts } from "@/lib/types/posts";

const Index = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const content = await getPostList();
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
                <Link href={`/blogs/${slug.current}`}>{title}</Link> (
                {new Date(_createdAt).toDateString()})
              </li>
            )
        )}
    </div>
  );
};

export default Index;
