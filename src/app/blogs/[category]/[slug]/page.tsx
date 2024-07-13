"use client";
import React, { useEffect, useState } from "react"; // Ensure React is imported
import { Posts } from "@/lib/types/posts";
import { getPostContent } from "@/utils/getPostContent";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/client";
import NavBar from "@/components/NavBar";
import DetailsFooter from "@/components/DetailsFooter";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// export const runtime = "edge";

interface PostProps {
  params: {
    slug: string;
    category: string;
  };
}

const Post = ({ params: { slug, category } }: PostProps) => {
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ width: "100%", height: "auto" }}
            alt={`${authorName}'s picture`}
            priority={true}
          />
        );
      },
    },
  };

  return (
    <div className="bg-black">
      <NavBar />
      <div className="mt-5 sm:my-4 sm:ml-[100px] ml-10">
        {" "}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blogs">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/blogs/${category}`}>
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
      <div className="text-primary sm:px-[300px] px-0">
        <div className="flex flex-col justify-center items-center text-2xl sm:text-4xl mt-3 mb-3">
          <h1>{title}</h1>
        </div>
        <div className="px-10 sm:text-lg text-md mb-5">
          <PortableText value={body} components={ptComponents} />
        </div>
        <div className="flex text-primary items-center text-right gap-4 px-10">
          {/* {categoriesTitle && (
          <ul>
            Posted in
            {categoriesTitle.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        )} */}
          Written By: {"  "}
          {authorImage && (
            <div>
              <Image
                loader={({ width }) => urlFor(authorImage).width(width).url()}
                src={urlFor(authorImage).width(50).url()}
                width={50}
                height={50}
                alt={`picture`}
                priority={true}
              />
            </div>
          )}{" "}
          {authorName}
        </div>
      </div>

      <DetailsFooter location="street-food" />
      <Footer />
    </div>
  );
};

export default Post;
