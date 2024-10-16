"use client";
import React from "react"; // Ensure React is imported
import NavBar from "@/components/NavBar";
import DetailsFooter from "@/components/DetailsFooter";
import Footer from "@/components/Footer";
import { PostContent } from "./postContent";
import ReadMore from "@/components/ReadMore";

export const runtime = "edge";

interface PostProps {
  params: {
    slug: string;
    category: string;
  };
}

const Post = ({ params: { slug, category } }: PostProps) => {
  return (
    <div className="bg-[url('/pictures/bg1.svg')] bg-center bg-cover">
      <NavBar />
      <PostContent slug={slug} category={category} />
      <ReadMore slug={slug} />
      <div className="mt-7">
        <Footer />
      </div>
    </div>
  );
};

export default Post;
