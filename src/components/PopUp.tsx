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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarCheck } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export function PopUp() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="w-[350px] h-[350px] md:w-[500px] md:h-[500px]"
        style={{
          backgroundColor: "#F8C983",
          borderRadius: "10px",
          color: "black",
          backgroundImage: isMobile
            ? "url('/pictures/pop-up.png')"
            : "url('/pictures/pop-up-laptop.png')",
        }}
      >
        <DialogFooter>
          <Link href="https://book.squareup.com/appointments/exxl3axffjaiyu/location/L8SDJBMG1NZDQ/services/D4BVADM33TXM7SFXI2YKDQFZ">
            {" "}
            <Button style={{ backgroundColor: "#6B1A26", color: "#F8C982" }}>
              Book a table today! <CalendarCheck className="ml-2" />
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
