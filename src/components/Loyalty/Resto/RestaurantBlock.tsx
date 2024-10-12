"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QrCode } from "lucide-react";
import { QRResto } from "./QR-Resto";
import { RestoRewards } from "./RewardsResto";
import { point } from "drizzle-orm/pg-core";

export function RestaurantBlock({
  points,
  uid,
}: {
  points: number;
  uid: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="rounded-xl m-5 justify-center text-center items-center bg-yellow-200 border-double border-primary border-4 h-auto w-auto flex flex-col p-3">
          <div className="text-xanh text-3xl mb-3">RESTAURANT</div>
          <div className="flex justify-between items-center w-full px-4">
            <div className="">
              <span className="text-5xl text-red-700">{points}</span> points
            </div>
            <div className="w-[150px]">
              <h1>Tap to earn points, rewards and more</h1>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full rounded-lg h-[700px] overflow-y-auto py-5">
        <DialogHeader>
          <DialogTitle className="text-center mb-2">
            VIET80S RESTAURANT
          </DialogTitle>
          <div className="text-justify text-pretty mx-3">
            How it works: For every £1 spent, 1 point earned. Choose the reward
            you want to redeem and it will be automatically applied to your next
            purchase. Please SCAN BEFORE PAY.
          </div>
        </DialogHeader>
        <QRResto uid={uid} />
        <RestoRewards points={points} />
      </DialogContent>
    </Dialog>
  );
}
