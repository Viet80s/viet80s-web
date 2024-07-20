"use client";
import { useMediaQuery } from "react-responsive";
import Footer from "@/components/Footer";
import DetailsFooter from "@/components/DetailsFooter";
import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/menu.module.css";
import stylesPara from "@/app/localHome.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <NavBar />
      <div className="bg-[url('/pictures/bg1.svg')] bg-center bg-cover">
        <div className={stylesPara.paragraphApp}>
          <p>
            Download Viet80s app today to collect points and receive exclusive
            rewards! <FontAwesomeIcon icon={faGift} beat />
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Link href="https://apps.apple.com/gb/app/viet80s/id6450309686">
            <div className={styles.imageContainerApp}>
              <Image
                src="/pictures/AppStore.png"
                alt="App Store"
                priority={false}
                width={500}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.mycompany.viet80sapp">
            <div className={styles.imageContainerApp}>
              <Image
                src="/pictures/GGPlay.png"
                alt="Google Play"
                priority={false}
                width={500}
                height={600}
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
