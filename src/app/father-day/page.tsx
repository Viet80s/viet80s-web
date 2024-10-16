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

        <div className="mt-5 flex flex-col sm:px-10 px-2 gap-6 justify-between md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl lg:text-4xl text-center md:text-center text-primary leading-tight font-medium px-7">
              Celebrate Father&apos;s Day 2024 at <br />
              Viet80s Restaurant
            </h2>
            <h3 className="mt-6 md:mt-10 text-md lg:text-lg text-justify md:text-justify text-primary font-light tracking-wider leading-tight px-7">
              This Father&apos;s Day, create cherished moments with Dad over a
              traditional Vietnamese lunch at Viet80s. On Sunday, June 16th,
              treat the family to a feast featuring our beloved slow-cooked beef
              noodle soup and a delectable Sunday sharing spread. Enjoy chicken
              wings, spring rolls, and other kid-friendly delights, or explore
              our Combo menu with Viet80s signature dishes for every taste.
              <br />
              <br /> Enhance the celebration with a thoughtful gift from our
              partner, Kite. Book a table online and use code &quot;DAD20&quot;
              for a 20% discount. Bring the family together for a heartwarming
              meal that Dad will treasure!
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-3">
              <Link href="https://www.viet80sonline.co.uk/">
                <Button className="sm:text-lg text-md" size={"lg"}>
                  Restaurant Menu <BookOpenCheck className="ml-2" />
                </Button>
              </Link>
              <Link href="https://book.squareup.com/appointments/exxl3axffjaiyu/location/L8SDJBMG1NZDQ/services/D4BVADM33TXM7SFXI2YKDQFZ">
                <Button className="sm:text-lg text-md" size={"lg"}>
                  <div className="flex items-center justify-center leading-none">
                    <div>
                      Book a table today!
                      <br />
                      (remember the promo code)
                    </div>{" "}
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center px-5">
            <Image
              src="/pictures/father-promo.png"
              alt="image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <DetailsFooter location="street-food" />
        <Footer />
      </div>
    </>
  );
}
