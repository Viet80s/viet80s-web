import Link from "next/link";
import Image from "next/image";
import styles from "@/app/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/street-food">
        <div className={styles.imageContainer}>
          <Image
            src="/pictures/2.png"
            alt="Viet80s Street Food"
            fill
            style={{ objectFit: "cover" }}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <p className={styles.imageText}>STREET FOOD</p>
        </div>
      </Link>
      <Link href="/restaurant">
        <div className={styles.imageContainer}>
          <Image
            src="/pictures/1.png"
            alt="Viet80s Restaurant"
            fill
            style={{ objectFit: "cover" }}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <p className={styles.imageText}>RESTAURANT</p>
        </div>
      </Link>
      <Link href="/coffee">
        <div className={styles.imageContainer}>
          <Image
            src="/pictures/3.png"
            alt="Viet80s Coffee"
            fill
            style={{ objectFit: "cover" }}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <p className={styles.imageText}>COFFEE</p>
        </div>
      </Link>
      <footer className={styles.footer}>
        <p>57-67 Friar Lane, Nottingham NG1 6DH</p>
        <p>&copy; {new Date().getFullYear()} Viet80s LTD</p>
      </footer>
    </div>
  );
}
