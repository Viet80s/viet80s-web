"use client";
import { useMediaQuery } from "react-responsive";
import Footer from "@/components/Footer";
import DetailsFooter from "@/components/DetailsFooter";
import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/menu.module.css";
import styles1 from "@/app/localHome.module.css";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-black">
        <div className={styles1.paragraphApp}>
          <p>
            We are happy to have you as our new team member. Please follow this{" "}
            <a className="underline" href="https://forms.gle/MzsnDwU52ZeUCsqD6">
              link
            </a>{" "}
            to send your CV and apply today!
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Link href="/">
            <div className={styles.imageContainer}>
              <Image
                src="/pictures/team.jpg"
                alt="App Store"
                priority={false}
                width={600}
                height={900}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
        </div>
      </div>
      <DetailsFooter location="restaurant" />
      <Footer />
    </>
  );
}
