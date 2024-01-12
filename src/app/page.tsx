import Link from "next/link";
import Image from "next/image";
import styles from "@/app/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/page1">
        <Image
          src="/pictures/1.png"
          alt="Viet80s Restaurant"
          width={600}
          height={300}
        />
      </Link>
      <Link href="/page2">
        <Image
          src="/pictures/2.png"
          alt="Viet80s Street Food"
          width={600}
          height={300}
        />
      </Link>
      <Link href="/page3">
        <Image
          src="/pictures/3.png"
          alt="Viet80s Coffee"
          width={600}
          height={300}
        />
      </Link>
    </div>
  );
}
