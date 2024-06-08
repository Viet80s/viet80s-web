import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { ArrowBigDownDash } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function FatherDay({ disable }: { disable?: boolean }) {
  return (
    <div className="relative flex h-screen">
      <Image
        src="/pictures/1.png"
        alt="image"
        className="h-full w-full object-cover object-center"
        width={500}
        height={500}
      />
      <div className="absolute top-1/2 left-10 max-w-full md:left-20">
        <div className=" text-white md:text-5xl py-4">Transparent </div>
        <div className="bg-primary text-7xl font-bold text-black mix-blend-screen px-10 py-5 ">
          Text Example
        </div>
        <div className="opacity-95">
          <Link href={"/father-day"}>
            <Button
              className="rounded-none text-lg sm:text-2xl"
              variant={"secondary"}
            >
              Learn more
            </Button>
          </Link>
        </div>

        {!disable && (
          <div className="flex text-white py-4">
            <p className="flex">
              Regular links are down here <ArrowBigDownDash className="ml-2" />
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
