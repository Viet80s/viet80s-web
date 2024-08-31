"use client";
import React, { memo, useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, CornerLeftDown, CornerRightDown } from "lucide-react";
import { getPostReadMore } from "@/utils/getPostList";
import { Posts } from "@/lib/types/posts";
import { urlFor } from "@/client";
import Link from "next/link";
import { format } from "date-fns/format";
import { Button } from "./ui/button";
import { PortableText } from "@portabletext/react";

const ReadMore = ({ slug }: { slug: string }) => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const content = await getPostReadMore(slug);
      setPosts(content);
    };
    fetchPosts();
  }, [slug]);

  return (
    <div className="mt-10 sm:px-[300px] px-5">
      <div>
        <h3 className="flex text-center items-center justify-center mb-5 bg-primary-foreground text-primary sm:text-3xl text-xl font-bold sm:p-4 p-2">
          <CornerLeftDown size={24} className="mr-2 animate-bounce" /> More
          posts you may like{" "}
          <CornerRightDown size={24} className="ml-2 animate-bounce" />
        </h3>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4">
          {posts.length > 0 &&
            posts.map((post) => (
              <div key={post._id}>
                <Link
                  href={`/zine/${post.categoriesTitle}/${post.slug?.current}`}
                  key={post._id}
                >
                  <Image
                    loader={({ width }) =>
                      urlFor(post.postImage).width(width).url()
                    }
                    src={urlFor(post.postImage).width(500).url()}
                    width={500}
                    height={500}
                    alt={`picture`}
                    priority={true}
                    className="lg:rounded-3xl rounded-2xl"
                  />
                  <p className="text-left font-semibold text-pretty lg:text-xl text-sm">
                    {post.title}
                  </p>
                </Link>
                <div className="sm:text-lg text-md opacity-80 sm:my-2 my-1 overflow-hidden text-pretty">
                  <div className="line-clamp-3">
                    <PortableText
                      value={post.body}
                      components={{
                        types: {
                          image: () => null,
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between">
                  <h1 className="lg:text-lg text-xs flex items-center">
                    <Calendar className="lg:mr-2 mr-1 size-4 lg:size-5 opacity-80" />
                    {format(new Date(post._createdAt), "MMM dd, yyyy")}
                  </h1>
                  <Link href={`/zine/${post.categoriesTitle}`}>
                    <Button
                      className="lg:text-lg text-xs h-5 sm:h-6"
                      variant={"secondary"}
                    >
                      {post.categoriesTitle}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ReadMore);
