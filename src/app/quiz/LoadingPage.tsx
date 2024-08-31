import React from "react";
import { Loader2 } from "lucide-react";

export function LoadingPage() {
  return (
    <div className="w-screen min-h-screen bg-[url('/pictures/bg1.svg')] bg-center bg-cover">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center text-2xl">
            <h1>Loading...</h1>
            <Loader2 className="h-10 w-10 animate-spin ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
