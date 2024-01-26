"use client";
import { useMediaQuery } from "react-responsive";
import Footer from "@/components/Footer";
import DetailsFooter from "@/components/DetailsFooter";
import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/blog.module.css";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const fontSize = isMobile ? "35px" : "45px";
  return (
    <>
      <NavBar />
      <div className="bg-black">
        <h1
          style={{
            textAlign: "center",
            color: "#F8C983",
            fontSize: fontSize,
            marginBottom: "5px",
          }}
        >
          Viet80s Blog
        </h1>
        <div className={styles.container}>
          <Link href="/blog/banh-mi">
            <div className={styles.imageContainer}>
              <Image
                src="/pictures/banhMi.png"
                alt="Viet80s Street Food"
                fill
                style={{ objectFit: "cover" }}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className={styles.imageText}>Bánh Mì</p>
            </div>
          </Link>
          <Link href="/blog/pho-viet">
            <div className={styles.imageContainer}>
              <Image
                src="/pictures/phoViet.png"
                alt="Viet80s Restaurant"
                fill
                style={{ objectFit: "cover" }}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className={styles.imageText}>Phở Việt</p>
            </div>
          </Link>

          <Link href="/blog/ca-phe">
            <div className={styles.imageContainer}>
              <Image
                src="/pictures/caPhe.png"
                alt="Viet80s Coffee"
                fill
                style={{ objectFit: "cover" }}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className={styles.imageText}>Cà Phê Việt</p>
            </div>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="/blog/trau-nuoc">
            <div className={styles.imageContainer}>
              <Image
                src="/pictures/trauNuoc.png"
                alt="Viet80s Street Food"
                fill
                style={{ objectFit: "cover" }}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className={styles.imageText}>Con Trâu Nước</p>
            </div>
          </Link>
          <Link href="/blog/trong-dong">
            <div className={styles.imageContainer}>
              <Image
                src="/pictures/trongDong.png"
                alt="Viet80s Coffee"
                fill
                style={{ objectFit: "cover" }}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className={styles.imageText}>Trống Đồng Ngọc Lũ</p>
            </div>
          </Link>
          <Link href="/blog/non-la">
            <div className={styles.imageContainer}>
              <Image
                src="/pictures/nonLa.png"
                alt="Viet80s Restaurant"
                fill
                style={{ objectFit: "cover" }}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className={styles.imageText}>Nón Lá</p>
            </div>
          </Link>
        </div>
      </div>
      <DetailsFooter location="restaurant" />
      <Footer />
    </>
  );
}
