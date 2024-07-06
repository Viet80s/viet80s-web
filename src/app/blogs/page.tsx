"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getPostList } from "@/utils/getPostList";
import { Categories, Posts } from "@/lib/types/posts";
import NavBar from "@/components/NavBar";
import DetailsFooter from "@/components/DetailsFooter";
import Footer from "@/components/Footer";
import Image from "next/image";
import { urlFor } from "@/client";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useMediaQuery } from "react-responsive";
import { getCategoriesList } from "@/utils/getCategoriesList";

const Index = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const fetchPosts = async () => {
      const content = await getPostList();
      const category = await getCategoriesList();
      const updatedContent = content.map((post: Posts) => ({
        ...post,
        isMobile: isMobile ? true : post.isMobile,
      }));
      setPosts(updatedContent);
      setCategories(category);
    };
    fetchPosts();
  }, [isMobile]);

  return (
    <>
      <div className="bg-black">
        <NavBar />
        <div className="text-primary">
          <div className="flex flex-col justify-center items-center text-lg sm:text-2xl mt-7 mb-7">
            <h1>Welcome to Viet80s blog!</h1>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 flex flex-col justify-center items-center px-10">
            {categories.length > 0 &&
              categories.map(({ description, title, _id }) => (
                <Link href={`/blogs/?${title}`} key={_id}>
                  <div
                    key={_id}
                    className="flex justify-center items-center h-full"
                  >
                    <div className="relative flex justify-center items-center">
                      <div className="absolute z-10 w-full text-center flex-col p-2 text-lg sm:text-2xl text-primary">
                        <div className="sm:text-4xl text-2xl">{title}</div>
                        <div className="opacity-85 sm:text-lg text-md">
                          {description}
                        </div>
                      </div>
                      <Image
                        src={`/pictures/categories/${title}.jpeg`}
                        width={550}
                        height={550}
                        alt={`post picture`}
                        priority={true}
                        className="opacity-65 hover:opacity-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                      />
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div className="container mx-auto">
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
