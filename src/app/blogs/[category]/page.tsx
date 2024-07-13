"use client";
import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { getPostList } from "@/utils/getPostList";
import { Categories, Posts } from "@/lib/types/posts";
import NavBar from "@/components/NavBar";
import DetailsFooter from "@/components/DetailsFooter";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { getCategory } from "@/utils/getCategory";

interface CategoryProps {
  params: {
    category: string;
  };
}

interface BlogContentProps {
  category: string;
}

const Index = ({ params: { category } }: CategoryProps) => {
  return (
    <>
      <div className="bg-black">
        <NavBar />
        <div className="text-primary">
          <Suspense fallback={<div>Loading...</div>}>
            <BlogContent category={category} />
          </Suspense>
        </div>
        <DetailsFooter location="street-food" />
        <Footer />
      </div>
    </>
  );
};

const BlogContent = ({ category }: BlogContentProps) => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [categoryData, setCategoryData] = useState<Categories>();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const fetchPosts = async () => {
      const content = await getPostList(category);
      const categoryData = await getCategory(category);
      const updatedContent = content.map((post: Posts) => ({
        ...post,
        isMobile: isMobile ? true : post.isMobile,
      }));
      setPosts(updatedContent);
      setCategoryData(categoryData);
    };
    fetchPosts();
  }, [isMobile, category]);

  const { categoriesTitle, categoriesDescription } = categoryData ?? {};
  return (
    <>
      <div className="justify-center items-center px-10 mt-5 w-full bg-black">
        <Link href={`/blogs/${categoriesTitle}/`} key={categoriesTitle}>
          <div className="flex justify-center items-center h-full">
            <div className="relative flex justify-center items-center">
              <div className="absolute z-10 w-full text-center flex-col p-2 text-lg sm:text-2xl text-primary">
                <div className="sm:text-4xl text-2xl">{categoriesTitle}</div>
                <div className="opacity-85 sm:text-lg text-md">
                  {categoriesDescription}
                </div>
              </div>
              <Image
                src={`/pictures/categories/${categoriesTitle}.jpeg`}
                width={600}
                height={550}
                alt={`${categoriesTitle}'s picture`}
                priority={true}
                className="opacity-55 hover:opacity-80 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
              />
            </div>
          </div>
        </Link>
      </div>

      <div className="container mx-auto">
        <DataTable columns={columns} data={posts} />
      </div>
    </>
  );
};

export default Index;
