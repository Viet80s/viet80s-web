import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QRCoffee } from "./QR-Coffee";
import { CoffeeRewards } from "./RewardsCoffee";

export function CoffeeBlock({ stamps, uid }: { stamps: number; uid: string }) {
  const totalCircles = 8;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="rounded-xl m-5 justify-center text-center items-center border-double border-primary border-4 h-auto w-auto flex flex-col bg-yellow-200 p-3">
          <div className="text-xanh text-3xl mb-3">COFFEE & STREETFOOD</div>
          <div className="flex justify-between items-center w-full">
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: totalCircles }).map((_, index) => (
                <div
                  key={index}
                  className={`w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center ${
                    index < stamps ? "bg-green-500" : "bg-gray-200"
                  }`}
                >
                  {index < stamps && (
                    <span className="text-white text-xl font-bold">✔</span>
                  )}
                </div>
              ))}
            </div>
            <div
              className={`w-16 h-16 rounded-full border-2 border-gray-400  items-center justify-center ml-2`}
            >
              <img src="/pictures/phinIcon.png" alt="phin icon" />
              <div className="text-primary-foreground text-lg">FREE</div>
            </div>
          </div>
          <div className="mt-2">
            <h1>Tap to collect stamps, rewards and more</h1>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full rounded-lg h-[700px] overflow-y-auto py-5">
        <DialogHeader>
          <DialogTitle className="text-center mb-2">
            VIET80S COFFEE & STREETFOOD
          </DialogTitle>
          <div className="text-justify text-pretty mx-3">
            How it works: For every drink item purchased, 1 stamp earned. Choose
            any drink for free when 8 stamps are collected. Please SCAN BEFORE
            PAY.
          </div>
        </DialogHeader>
        <QRCoffee uid={uid} />
        <CoffeeRewards stamps={stamps} />
      </DialogContent>
    </Dialog>
  );
}
