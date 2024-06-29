"use client";
import React, { useEffect, useState } from "react"; // Ensure React is imported
import { Posts } from "@/lib/types/posts";
import { getPostContent } from "@/utils/getPostContent";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/client";

export const runtime = "edge";

interface PostProps {
  params: {
    slug: string;
  };
}

const Post = ({ params: { slug } }: PostProps) => {
  const [post, setPost] = useState<Posts>();

  useEffect(() => {
    const fetchPosts = async () => {
      const content = await getPostContent(slug);
      setPost(content);
    };
    fetchPosts();
  }, [slug]);

  const {
    title = "Missing title",
    authorName = "Missing name",
    categories,
    authorImage,
    body = [],
  } = post ?? {}; // Destructure the post object

  const ptComponents = {
    types: {
      image: ({ value }: { value: { asset: { _ref: string } } }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <Image
            loader={({ width }) => urlFor(value).width(width).url()}
            src={urlFor(value).width(50).url()}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt={`${authorName}'s picture`}
            priority={true}
          />
        );
      },
    },
  };

  return (
    <div>
      <h1>{title}</h1>
      {categories && (
        <ul>
          Posted in
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
      {authorImage && (
        <div>
          <Image
            loader={({ width }) => urlFor(authorImage).width(width).url()}
            src={urlFor(authorImage).width(50).url()}
            width={50}
            height={50}
            alt={`${name}'s picture`}
            priority={true}
          />
        </div>
      )}
      <PortableText value={body} components={ptComponents} />
    </div>
  );
};

export default React.memo(Post);
