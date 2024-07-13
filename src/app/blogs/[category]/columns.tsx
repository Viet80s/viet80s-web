"use client";

import { Posts } from "@/lib/types/posts";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { urlFor } from "@/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PortableText } from "@portabletext/react";

export const columns: ColumnDef<Posts>[] = [
  {
    accessorKey: "postImage",
    header: "",
    cell: ({ row }) => {
      const { postImage, slug, isMobile, categoriesTitle } = row.original;
      return (
        <div className="flex justify-end">
          {" "}
          <Link href={`/blogs/${categoriesTitle}/${slug.current}`}>
            <Image
              loader={({ width }) => urlFor(postImage).width(width).url()}
              src={urlFor(postImage).width(550).url()}
              width={isMobile ? 800 : 400}
              height={isMobile ? 800 : 400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={`post picture`}
              priority={true}
            />
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "details",
    header: "",
    cell: ({ row }) => {
      const { title, body, slug, categoriesTitle } = row.original;
      return (
        <div className="max-w-[600px]">
          {" "}
          {/* Limit the maximum width */}
          <h1 className="sm:text-2xl text-lg">{title}</h1>
          <div className="sm:text-lg text-md opacity-80 sm:my-5 my-1 overflow-hidden">
            <div className="line-clamp-3">
              {" "}
              {/* Limit to 3 lines */}
              <PortableText
                value={body}
                components={{
                  types: {
                    // Provide an empty component for "image" type blocks
                    image: () => null,
                  },
                }}
              />
            </div>
          </div>
          {/* <h3 className="sm:text-sm text-xs opacity-75">
            Posted in: {categoriesTitle}
          </h3> */}
          <div>
            <Link href={`/blogs/${categoriesTitle}/${slug.current}`}>
              <Button className="sm:text-lg text-sm sm:h-10 h-6 mt-2">
                Read more
              </Button>
            </Link>
          </div>
        </div>
      );
    },
  },
];
