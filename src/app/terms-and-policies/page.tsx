"use client";
import { useMediaQuery } from "react-responsive";
import Footer from "@/components/Footer";
import DetailsFooter from "@/components/DetailsFooter";
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
      <div className="bg-[url('/pictures/bg1.svg')] bg-center bg-cover">
        <div className={styles1.paragraphApp}>
          <p>
            Below are documents related to our Privacy Policy and Term and
            Conditions when using our website and mobile app.
            <ul>
              <li>
                <a
                  className="underline"
                  href="/docs/Privacy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  - Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="/docs/Terms.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  - Terms and Conditions
                </a>
              </li>
            </ul>
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Link href="/">
            <div className={styles.imageContainer}>
              <Image
                src="/pictures/legals.jpg"
                alt="legals"
                priority={false}
                width={800}
                height={700}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
        </div>
        <div>
          {" "}
          <DetailsFooter location="restaurant" />
          <Footer />
        </div>
      </div>
    </>
  );
}
