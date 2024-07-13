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
import { getCategoriesList } from "@/utils/getCategoriesList";

const Index = () => {
  return (
    <>
      <div className="bg-black">
        <NavBar />
        <div className="text-primary">
          <div className="flex flex-col justify-center items-center text-lg sm:text-2xl mt-7 mb-7">
            <h1>Welcome to Viet80s blog!</h1>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <BlogContent />
          </Suspense>
        </div>
        <DetailsFooter location="street-food" />
        <Footer />
      </div>
    </>
  );
};

const BlogContent = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const fetchCategories = async () => {
      const category = await getCategoriesList();
      setCategories(category);
    };
    fetchCategories();
  }, [isMobile]);

  return (
    <>
      {/* category section */}
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 flex flex-col justify-center items-center px-10">
        {categories.length > 0 &&
          categories.map(({ categoriesDescription, categoriesTitle, _id }) => (
            <Link href={`/blogs/${categoriesTitle}`} key={_id}>
              <div className="flex justify-center items-center h-full">
                <div className="relative flex justify-center items-center">
                  <div className="absolute z-10 w-full text-center flex-col p-2 text-lg sm:text-2xl text-primary">
                    <div className="sm:text-4xl text-2xl">
                      {categoriesTitle}
                    </div>
                    <div className="opacity-85 sm:text-lg text-md">
                      {categoriesDescription}
                    </div>
                  </div>
                  <Image
                    src={`/pictures/categories/${categoriesTitle}.jpeg`}
                    width={550}
                    height={550}
                    alt={`post picture`}
                    priority={true}
                    className="opacity-55 hover:opacity-80 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                  />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Index;
