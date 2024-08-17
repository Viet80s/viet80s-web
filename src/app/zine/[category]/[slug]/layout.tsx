import { urlFor } from "@/client";
import { getPostContent } from "@/utils/getPostContent";
import type { Metadata, ResolvingMetadata } from "next";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400"] });
interface PostProps {
  params: {
    slug: string;
    category: string;
  };
}
export async function generateMetadata(
  { params }: PostProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;
  const content = await getPostContent(slug);

  return {
    title: content.title,
    // description: 'The React Framework for the Web',
    openGraph: {
      images: [
        {
          url: urlFor(content.postImage)?.width(800)?.url(), // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
