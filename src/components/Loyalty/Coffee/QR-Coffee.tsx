"use client";

import { useQRCode } from "next-qrcode";

export function QRCoffee({ uid }: { uid: string }) {
  const { Canvas } = useQRCode();
  return (
    <div className="flex flex-col text-center justify-center gap-2">
      {" "}
      <div className="text-2xl font-bold">Scan to collect stamps</div>
      <div className="flex justify-center">
        {/* TODO: have to check if UID is the database or not */}
        <Canvas
          text={uid}
          options={{
            errorCorrectionLevel: "M",
            margin: 3,
            scale: 4,
            width: 200,
            color: {
              dark: "#BA3026",
              light: "#F8C983",
            },
          }}
        />
      </div>
    </div>
  );
}
