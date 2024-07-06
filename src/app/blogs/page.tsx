"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getPostList } from "@/utils/getPostList";
import { Posts } from "@/lib/types/posts";
import NavBar from "@/components/NavBar";
import DetailsFooter from "@/components/DetailsFooter";
import Footer from "@/components/Footer";
import Image from "next/image";
import { urlFor } from "@/client";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useMediaQuery } from "react-responsive";

const Index = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const fetchPosts = async () => {
      const content = await getPostList();
      const updatedContent = content.map((post: Posts) => ({
        ...post,
        isMobile: isMobile ? true : post.isMobile,
      }));
      setPosts(updatedContent);
    };
    fetchPosts();
  }, [isMobile]);
  console.log(posts);

  return (
    <>
      <div className="bg-black">
        <NavBar />
        <div className="text-primary">
          <div className="flex flex-col justify-center items-center text-lg sm:text-2xl mt-7 mb-7">
            <h1>Welcome to Viet80s blog!</h1>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 flex flex-col justify-center items-center px-10">
            {posts.length > 0 &&
              posts.map(
                ({ _id, title = "", slug = { current: "" }, postImage }) =>
                  slug &&
                  slug.current && (
                    <div
                      key={_id}
                      className="flex justify-center items-center h-full"
                    >
                      <Link href={`/blogs/${slug.current}`}>
                        <div className="relative flex justify-center items-center">
                          <div className="absolute z-10 w-full text-center p-2 text-lg sm:text-2xl text-primary">
                            {title}
                          </div>
                          <Image
                            loader={({ width }) =>
                              urlFor(postImage).width(width).url()
                            }
                            src={urlFor(postImage).width(550).url()}
                            width={550}
                            height={550}
                            alt={`post picture`}
                            priority={true}
                            className="opacity-90 hover:opacity-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                          />
                        </div>
                      </Link>
                    </div>
                  )
              )}
          </div>

          <div className="container mx-auto py-10">
            <DataTable columns={columns} data={posts} />
          </div>
        </div>
        <DetailsFooter location="street-food" />
        <Footer />
      </div>
    </>
  );
};

export default Index;
