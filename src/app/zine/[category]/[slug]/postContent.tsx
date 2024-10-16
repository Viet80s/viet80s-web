"use client";
import React, { useEffect, useState } from "react"; // Ensure React is imported
import { Posts } from "@/lib/types/posts";
import { getPostContent } from "@/utils/getPostContent";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { RichTextComponent } from "@/components/RichTextComponent";
import { LoadingPage } from "@/app/quiz/LoadingPage";

export const PostContent = ({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) => {
  const [post, setPost] = useState<Posts>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const content = await getPostContent(slug);
      setPost(content);
      setLoading(false);
    };
    fetchPosts();
  }, [slug]);
  const {
    title = "Missing title",
    authorName = "Missing name",
    authorImage,
    body = [],
  } = post ?? {}; // Destructure the post object

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="mt-5 sm:my-4 sm:ml-[100px] ml-5">
        {" "}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/zine">Zine</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/zine/${category}`}>
                {category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="sm:px-[300px] px-0">
        <div className="flex flex-col justify-center items-center text-2xl sm:text-4xl mt-3 mb-3 px-5 font-semibold text-center">
          <h1>{title}</h1>
        </div>
        <div className="px-5 sm:text-lg text-md mb-5">
          <PortableText value={body} components={RichTextComponent} />
        </div>
        <div className="flex items-center text-right gap-4 pl-5">
          {authorImage ? (
            <Image
              loader={({ width }) => urlFor(authorImage).width(width).url()}
              src={urlFor(authorImage).width(50).url()}
              width={50}
              height={50}
              alt={`picture`}
              priority={true}
            />
          ) : null}{" "}
          {authorName}
        </div>
      </div>
    </>
  );
};
