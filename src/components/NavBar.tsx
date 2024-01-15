import Hamburger from "./Hamburger";
import { useState } from "react";
import styles from "@/app/navigation.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    document.body.style.setProperty(
      "--menu-display",
      hamburgerOpen ? "inline" : "none"
    );
  };

  return (
    <div>
      <div className={styles.navigation}>
        <ul>
          <li>
            {" "}
            <Link href="/about-us">
              <Button>About Us</Button>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="https://www.viet80sonline.co.uk/">
              <Button>Click & Collect</Button>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="https://www.viet80sonline.co.uk/s/appointments">
              <Button>Book a Table</Button>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/contact-us">
              <Button>Contact Us</Button>
            </Link>
          </li>
        </ul>
        <div className={styles.hamburger} onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>
    </div>
  );
}
