import Image from "next/image";
import { urlFor } from "@/client";

export const RichTextComponent = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string } } }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <Image
          loader={({ width }) => urlFor(value).width(width).url()}
          src={urlFor(value).width(50).url()}
          width="0"
          height="0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ width: "100%", height: "auto" }}
          alt={` picture`}
          priority={true}
        />
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-5 space-y-5 py-3">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal ml-5 space-y-5 py-3">{children}</ol>
    ),
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => (
      <h1 className="lg:text-5xl text-4xl mt-2">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h1 className="lg:text-4xl text-3xl mt-2">{children}</h1>
    ),
    h3: ({ children }: any) => (
      <h1 className="lg:text-3xl text-2xl mt-2">{children}</h1>
    ),
    h4: ({ children }: any) => (
      <h1 className="lg:text-2xl text-xl mt-2">{children}</h1>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
    customHeading: ({ children }: any) => (
      <h2 className="text-3xl mt-2">{children}</h2>
    ),
  },
  marks: {
    strong: ({ children }: { children: any }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children: any }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-blue-500 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};
