import Link from "next/link";
import Image from "next/image";
import styles from "@/app/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/page1">
        <div className={styles.imageContainer}>
          <Image
            src="/pictures/1.png"
            alt="Viet80s Restaurant"
            layout="fill"
            objectFit="cover"
          />
          <p className={styles.imageText}>VIET80S RESTAURANT</p>
        </div>
      </Link>
      <Link href="/page2">
        <div className={styles.imageContainer}>
          <Image
            src="/pictures/2.png"
            alt="Viet80s Street Food"
            layout="fill"
            objectFit="cover"
          />
          <p className={styles.imageText}>VIET80S STREET FOOD</p>
        </div>
      </Link>
      <Link href="/page3">
        <div className={styles.imageContainer}>
          <Image
            src="/pictures/3.png"
            alt="Viet80s Coffee"
            layout="fill"
            objectFit="cover"
          />
          <p className={styles.imageText}>VIET80S COFFEE</p>
        </div>
      </Link>
    </div>
  );
}
