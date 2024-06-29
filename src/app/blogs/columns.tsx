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
    accessorKey: "status",
    header: "",
    size: 27000,
    cell: ({ row }) => {
      const { postImage, slug } = row.original;
      return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {" "}
          {/* Flex container */}
          <Link href={`/blogs/${slug.current}`}>
            <div style={{ width: "fit-content", margin: "right" }}>
              <Image
                loader={({ width }) => urlFor(postImage).width(width).url()}
                src={urlFor(postImage).width(550).url()}
                width="0"
                height="0"
                sizes="70vw"
                style={{ width: "70%", height: "auto" }}
                alt={`post picture`}
                priority={true}
                layout="intrinsic"
              />
            </div>
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "",
    cell: ({ row }) => {
      const { title, body, slug } = row.original;
      return (
        <>
          <h1 className="text-2xl">{title}</h1>
          <div className="text-lg opacity-80 my-5">
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
          <Link href={`/blogs/${slug.current}`}>
            <Button>Continue reading ...</Button>
          </Link>
        </>
      );
    },
  },
];
