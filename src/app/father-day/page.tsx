"use client";
import DetailsFooter from "@/components/DetailsFooter";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { BookOpenCheck, CalendarCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Father() {
  return (
    <>
      <div className="bg-black">
        <NavBar />
        <div class="flex pt-12 px-6 md:px-20  items-center justify-center md:h-screen overflow-hidden">
          <div class="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
            <div class="w-full md:w-1/2 lg:pr-32">
              <h2 class="text-4xl lg:text-5xl text-center md:text-left text-primary leading-tight font-medium">
                There is a better way to talk with your customers.
              </h2>
              <h3 class="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-primary font-light tracking-wider leading-relaxed">
                Help Scout is designed with your customers in mind. Provide
                email and live chat with a personal touch, and deliver help
                content right where your customers need it, all in one place,
                all for one low price.
              </h3>
              <div class="mt-10 flex flex-row justify-center md:justify-start gap-3">
                <Link href="/menus">
                  <Button className="sm:text-lg text-md">
                    Have a look at our menus <BookOpenCheck className="ml-2" />
                  </Button>
                </Link>
                <Link href="https://book.squareup.com/appointments/exxl3axffjaiyu/location/L8SDJBMG1NZDQ/services/D4BVADM33TXM7SFXI2YKDQFZ">
                  <Button className="sm:text-lg text-md">
                    Book a table today! <CalendarCheck className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div class="w-full md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/pictures/1.png"
                alt="image"
                className="h-full w-full object-cover object-center"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <DetailsFooter location="street-food" />
        <Footer />
      </div>
    </>
  );
}
