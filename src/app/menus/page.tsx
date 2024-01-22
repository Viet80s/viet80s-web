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
      <div className="bg-black">
        <div className={styles.container}>
          <Link href="https://www.viet80sonline.co.uk/">
            <div className={styles.imageContainer}>
              <Image
                src="/pictures/1.png"
                alt="Viet80s Restaurant"
                fill
                style={{ objectFit: "cover" }}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className={styles.imageText}>RESTAURANT MENU</p>
            </div>
          </Link>
          <Link
            href="/docs/menugiaySF-pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.imageContainer}>
              <Image
                src="/pictures/2.png"
                alt="Viet80s Street Food"
                fill
                style={{ objectFit: "cover" }}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className={styles.imageText}>STREET FOOD MENU</p>
            </div>
          </Link>
          <Link
            href="/docs/Menu_Coffee.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.imageContainer}>
              <Image
                src="/pictures/3.png"
                alt="Viet80s Coffee"
                fill
                style={{ objectFit: "cover" }}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className={styles.imageText}>COFFEE MENU</p>
            </div>
          </Link>
        </div>
        <div className={styles1.paragraph}>
          <p>
            <strong className="underline">Notice:</strong> We are no longer
            providing the “Click & Collect” service for Viet80s Street Food and
            Coffee stores. For delivery options, kindly check our partners’ apps
            (
            <a
              className="underline"
              href="https://www.ubereats.com/gb/store/viet-80s-coffee-and-streetfood/2ON1MRC3VsaDhvmJ_-vK7Q?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMk5HMyUyMDRHRiUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUp4NHI4bjRMQmVVZ1JUY3FqTlpqM3J3OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E1Mi45NjM2NjY4JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTEuMTUwMDc0OCU3RA%3D%3D"
            >
              Uber Eats
            </a>{" "}
            and{" "}
            <a
              className="underline"
              href="https://deliveroo.co.uk/menu/nottingham/nottingham-city-centre/viet80s-street-food?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share&fbclid=IwAR22fkFoStT8daR9cZ2K5nfcS9UAeYZp__SmuHTcKltpQzjYHwoPQyLsAOI"
            >
              Deliveroo
            </a>
            )
          </p>
        </div>
        <div className={styles1.paragraph}>
          <p>
            For our <strong className="underline">Allergen guides</strong>{" "}
            please check here:{" "}
            <a
              className="underline"
              href="/docs/allergies_new.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guide for Viet80s Restaurant Menu
            </a>{" "}
            and{" "}
            <a
              className="underline"
              href="/docs/Allergies_SF_CF_Newest.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guide for Viet80s Street Food & Coffee Menu
            </a>
          </p>
        </div>
      </div>
      <DetailsFooter />
      <Footer />
    </>
  );
}
