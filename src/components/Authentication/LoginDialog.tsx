"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { LogIn, Plus, Send } from "lucide-react";

import { DialogDescription } from "@radix-ui/react-dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { LoginForm } from "./LoginForm";
import { Input } from "../ui/input";
import { Form, Formik } from "formik";
import { sendResetEmail } from "@/firebase/login";
import toast from "react-hot-toast";

interface FormData {
  email: string;
}

export function Login({}: {}) {
  const [dialogOpened, setDialogOpened] = useState(false);
  const [lostPassword, setLostPassword] = useState(false);

  const handleSubmit = async (data: FormData) => {
    const sendResetEmailCommand = await sendResetEmail(data.email);
    if (sendResetEmailCommand.error) {
      toast.error(`Send reset password email failed.`);
      console.error(sendResetEmailCommand.error);
    } else {
      toast.success("Send reset password email successfully.");
    }
  };

  return (
    <Dialog open={dialogOpened} onOpenChange={setDialogOpened}>
      <DialogTrigger asChild>
        <div className="justify-center flex">
          <Button className="justify-center text-center items-center border-double border-primary border-4 flex">
            Log in <LogIn className="ml-2 h-4 w-4" />
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
        <DialogFooter>
          {!lostPassword && (
            <Button variant={"outline"} onClick={() => setLostPassword(true)}>
              Lost your password?
            </Button>
          )}

          {lostPassword && (
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={(data) => {
                handleSubmit(data);
              }}
            >
              {({ values, handleChange, handleSubmit }) => (
                <Form className="w-full" onSubmit={handleSubmit}>
                  <div className="justify-center text-center flex text-xanh text-lg">
                    {" "}
                    Lost password
                  </div>
                  <div className="justify-center text-center flex text-xanh text-sm">
                    {" "}
                    Please type the email that was registered with us to receive
                    the reset password email
                  </div>
                  <div className="flex flex-col gap-3 text-lg">
                    <div className="flex flex-col gap-2">
                      <h3 className="flex">Your email*</h3>
                      <Input
                        onChange={handleChange}
                        name="email"
                        className="text-lg text-carrot"
                        type="text"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <Button
                        type="submit"
                        className="px-4 py-2 mt-3 bg-carrot text-xanh rounded text-lg"
                        disabled={values.email === ""}
                      >
                        Send reset password email
                        <Send className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
