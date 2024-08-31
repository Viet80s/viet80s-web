"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Categories } from "@/lib/types/posts";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { getCategoriesList } from "@/utils/getCategoriesList";
import { LoadingPage } from "../quiz/LoadingPage";

const Index = () => {
  return (
    <>
      <div className="bg-[url('/pictures/bg1.svg')] bg-center bg-cover">
        <NavBar />
        <div className="text-xanh">
          <div className="flex flex-col justify-center items-center text-lg sm:text-2xl mt-7 mb-7">
            <h1>Welcome to Viet80s zine!</h1>
          </div>

          <BlogContent />
        </div>
        <div className="mt-7">
          <Footer />
        </div>
      </div>
    </>
  );
};

const BlogContent = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const category = await getCategoriesList();
      setCategories(category);
      setLoading(false);
    };
    fetchCategories();
  }, [isMobile]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      {/* category section */}
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 flex flex-col justify-center items-center px-10">
        {categories.length > 0 &&
          categories.map(({ categoriesDescription, categoriesTitle, _id }) => (
            <Link href={`/zine/${categoriesTitle}`} key={_id}>
              <div className="flex justify-center items-center h-full">
                <div className="relative flex justify-center items-center group">
                  <div className="absolute z-10 w-full text-center flex-col text-lg sm:text-2xl text-primary">
                    <div className="sm:text-4xl text-2xl leading-none sm:leading-none">
                      {categoriesTitle}
                    </div>
                    <div className="opacity-85 sm:text-lg text-md leading-none sm:leading-none">
                      {categoriesDescription}
                    </div>
                  </div>
                  <Image
                    src={`/pictures/categories/${categoriesTitle}.jpeg`}
                    width={550}
                    height={550}
                    alt={`post picture`}
                    priority={true}
                    className="transition duration-500 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105 cursor-pointer"
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
