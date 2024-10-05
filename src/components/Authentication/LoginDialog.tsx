"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { LogIn, Plus } from "lucide-react";

import { DialogDescription } from "@radix-ui/react-dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { LoginForm } from "./LoginForm";

export function Login({}: {}) {
  const [dialogOpened, setDialogOpened] = useState(false);

  return (
    <Dialog open={dialogOpened} onOpenChange={setDialogOpened}>
      <DialogTrigger asChild>
        <div className="justify-center flex">
          <Button className="justify-center text-center items-center border-double border-primary border-4 flex">
            Login <LogIn className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle className="text-center">
            Login to Viet80s Dashboard
          </DialogTitle>
        </DialogHeader>
        {/* {description && (
          <DialogDescription className="justify-center items-center text-center">
            {" "}
            Notice: Data Partner is set as the chosen Data Partner in the
            previous form.
          </DialogDescription>
        )} */}
        <LoginForm setDialogOpened={setDialogOpened} />
      </DialogContent>
    </Dialog>
  );
}
