"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/localHome.module.css";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <nav className={styles.navbar}>
          <Image
            src="/pictures/logo.png"
            alt="Viet80s Logo"
            width={200}
            height={200}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {isOpen ? (
            <Menu
              isOpen={isOpen}
              onStateChange={({ isOpen }) => setIsOpen(isOpen)}
            >
              <Link href="/about-us">
                <Button onClick={() => setIsOpen(false)}>About Us</Button>
              </Link>
              <Link href="https://www.viet80sonline.co.uk/">
                <Button onClick={() => setIsOpen(false)}>
                  Click & Collect
                </Button>
              </Link>
              <Link href="https://www.viet80sonline.co.uk/s/appointments">
                <Button onClick={() => setIsOpen(false)}>Book a Table</Button>
              </Link>
              <Link href="/contact-us">
                <Button onClick={() => setIsOpen(false)}>Contact Us</Button>
              </Link>
            </Menu>
          ) : (
            <div className={styles.navLinks}>
              <Link href="/about-us">
                <Button>About Us</Button>
              </Link>
              <Link href="https://www.viet80sonline.co.uk/">
                <Button>Click & Collect</Button>
              </Link>
              <Link href="https://www.viet80sonline.co.uk/s/appointments">
                <Button>Book a Table</Button>
              </Link>
              <Link href="/contact-us">
                <Button>Contact Us</Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
      <div>
        <h1>Hello</h1>
      </div>
    </>
  );
}
