"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Rocket } from "lucide-react";

import { DialogDescription } from "@radix-ui/react-dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export function Register({}: {}) {
  const [dialogOpened, setDialogOpened] = useState(false);

  return (
    <Dialog open={dialogOpened} onOpenChange={setDialogOpened}>
      <DialogTrigger asChild>
        <div className="justify-center flex">
          <Button className="justify-center text-center items-center border-double border-primary border-4 flex">
            Sign up <Rocket className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center">
            Register to Viet80s Dashboard
          </DialogTitle>
        </DialogHeader>
        <RegisterForm setDialogOpened={setDialogOpened} />
      </DialogContent>
    </Dialog>
  );
}
