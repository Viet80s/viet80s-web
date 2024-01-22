"use client";
import { useMediaQuery } from "react-responsive";
import Footer from "@/components/Footer";
import DetailsFooter from "@/components/DetailsFooter";
import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";
import Map from "@/components/Map";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <NavBar />
      <div className={"flex w-full bg-black"}>
        <ContactForm />
        {!isMobile && (
          <Link href="/" className="mt-5 mr-10">
            <Image
              src="/pictures/contact.jpeg"
              alt="Viet80s Logo"
              width={1200}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        )}
      </div>
      <DetailsFooter />
      <Footer />
    </>
  );
}
