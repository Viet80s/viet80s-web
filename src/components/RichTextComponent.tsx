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
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => <h1 className="text-5xl">{children}</h1>,
    h2: ({ children }: any) => <h1 className="text-4xl">{children}</h1>,
    h3: ({ children }: any) => <h1 className="text-3xl">{children}</h1>,
    h4: ({ children }: any) => <h1 className="text-2xl">{children}</h1>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }: any) => (
      <h2 className="text-lg text-primary">{children}</h2>
    ),
  },
};
