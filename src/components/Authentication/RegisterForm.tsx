"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Rocket } from "lucide-react";
import { Form, Formik, ErrorMessage } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import signUp from "@/firebase/signup";
import { addNewUser } from "@/firebase/storeFunctions";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

interface FormData {
  email: string;
  password: string;
  displayName: string;
  birthMonth: number;
  birthDay: number;
}

export function RegisterForm({
  setDialogOpened,
}: {
  setDialogOpened: (dialogOpened: boolean) => void;
}) {
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .password()
      .min(8, "Password must be at least 8 characters")
      .minLowercase(1, "Password must contain at least 1 lowercase letter")
      .minUppercase(1, "Password must contain at least 1 uppercase letter")
      .minNumbers(1, "Password must contain at least 1 number")
      .minSymbols(0)
      .required("Password is required"),
  });

  const handleSubmit = async (data: FormData) => {
    const signUpCall = await signUp(data.email ?? "", data.password ?? "");

    if (signUpCall.error) {
      toast.error(`Register failed.`);
      console.error(signUpCall.error);
    } else {
      toast.success(
        "Register successfully. Please verify your email to log in"
      );

      const addUserCall = await addNewUser(
        signUpCall.result?.user.uid ?? "",
        data.email ?? "",
        data.password ?? "",
        data.displayName ?? "",
        data.birthMonth ?? 0,
        data.birthDay ?? 0
      );

      if (addUserCall.error) {
        toast.error("Add new user failed");
        console.error(addUserCall.error);
      } else {
        console.log("Add new user successfully");
      }

      setDialogOpened(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          showPassword: false,
          displayName: "",
          birthMonth: 0,
          birthDay: 0,
        }}
        onSubmit={(data) => {
          handleSubmit(data);
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 text-lg px-4">
              <div className="flex flex-col gap-2">
                <h3 className="flex">Display name*</h3>
                <Input
                  onChange={handleChange}
                  name="displayName"
                  className="text-lg text-carrot"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="flex">Email*</h3>
                <Input
                  onChange={handleChange}
                  name="email"
                  className="text-lg text-carrot"
                  type="email"
                  required
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  {" "}
                  <div className="flex flex-col">
                    <h3>Password*</h3>{" "}
                    <h4 className="text-sm">
                      Password must contain at least 8 characters, 1 uppercase,
                      1 lowercase and 1 number
                    </h4>
                  </div>
                  <div>
                    <Button
                      size="icon"
                      variant={"outline"}
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff name="showPassword" onChange={handleChange} />
                      ) : (
                        <Eye name="showPassword" onChange={handleChange} />
                      )}
                    </Button>
                  </div>
                </div>
                <Input
                  onChange={handleChange}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="text-lg text-carrot"
                  required
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-5 flex items-center justify-center">
                <Button
                  type="submit"
                  className="px-4 py-2 mt-3 bg-carrot text-xanh rounded text-lg"
                  disabled={values.email === "" || values.password === ""}
                >
                  Sign up
                  <Rocket className="ml-2" />
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
