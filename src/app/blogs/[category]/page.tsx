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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// export const runtime = "edge";

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
      <div className="bg-[url('/pictures/bg1.svg')] bg-center bg-cover">
        <NavBar />
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <BlogContent category={category} />
          </Suspense>
        </div>
        <DetailsFooter location="restaurant" />
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
        categoriesTitle: post.categoriesTitle[0],
      }));
      setPosts(updatedContent);
      setCategoryData(categoryData);
    };
    fetchPosts();
  }, [isMobile, category]);

  const { categoriesTitle, categoriesDescription } = categoryData ?? {};

  return (
    <>
      <div className="justify-center items-center mt-5 w-full my-3 sm:my-4 text-xanh px-2">
        <div className="sm:pl-[130px] sm:mb-3 pl-2 mb-2">
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
                <BreadcrumbLink href={`/blogs/${categoriesTitle}`}>
                  {categoriesTitle}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div>
          <DataTable columns={columns} data={posts} />
        </div>
      </div>
    </>
  );
};

export default Index;
