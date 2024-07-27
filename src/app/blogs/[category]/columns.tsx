"use client";

import { Posts } from "@/lib/types/posts";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { urlFor } from "@/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns/format";
import { Calendar } from "lucide-react";

export const columns: ColumnDef<Posts>[] = [
  {
    accessorKey: "details",
    header: "",
    cell: ({ row }) => {
      const {
        title,
        body,
        slug,
        categoriesTitle,
        postImage,
        isMobile,
        _createdAt,
      } = row.original;
      const createDate = new Date(_createdAt);
      return (
        <div className="sm:px-[120px] sm:flex sm:flex-row sm:gap-5 flex flex-col gap-2">
          {" "}
          <div>
            <div className="sm:w-[320px] w-full">
              <Link href={`/blogs/${categoriesTitle}/${slug?.current}`}>
                {postImage ? (
                  <Image
                    loader={({ width }) =>
                      urlFor(postImage)?.width(width)?.url() || ""
                    }
                    src={urlFor(postImage)?.width(550)?.url() || ""}
                    width={isMobile ? 800 : 320}
                    height={isMobile ? 800 : 320}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={`post picture`}
                    priority={true}
                    className="rounded-2xl"
                  />
                ) : (
                  <div className="placeholder-image">Image not available</div>
                )}
              </Link>
            </div>
          </div>
          <div>
            {" "}
            <Link href={`/blogs/${categoriesTitle}/${slug?.current}`}>
              <h1 className="sm:text-2xl text-lg">{title}</h1>
            </Link>
            <div className="flex gap-3 items-center">
              <h1 className="sm:text-xl text-md flex items-center">
                <Calendar className="sm:mr-2 mr-1 size-4 sm:size-5 opacity-80" />
                {format(createDate, "MMM dd, yyyy")}
              </h1>
              <Button
                className="sm:text-lg text-sm h-5 sm:h-6"
                variant={"secondary"}
              >
                {categoriesTitle}
              </Button>
            </div>
            <div className="sm:text-lg text-md opacity-80 sm:my-2 my-1 overflow-hidden">
              <div className="line-clamp-4">
                <PortableText
                  value={body}
                  components={{
                    types: {
                      image: () => null,
                    },
                  }}
                />
              </div>
            </div>
            <div className="flex sm:justify-start justify-end">
              <Link href={`/blogs/${categoriesTitle}/${slug.current}`}>
                <Button className="sm:text-lg text-sm sm:h-10 h-6 mt-2">
                  Read more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      );
    },
  },
];
