import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";

export function PopUpMain() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-primary w-4/5 max-w-md flex sm:w-full sm:max-w-lg">
          <Link
            href={
              "https://viet80s.co.uk/zine/People/fundraising-to-support-the-people-of-northern-vietnam-in-overcoming-the-typhoon-yagi"
            }
          >
            <Image
              src="/pictures/Yagi.jpg"
              alt="food 1"
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
            />
          </Link>
        </DialogContent>
      </Dialog>
    </div>
  );
}
