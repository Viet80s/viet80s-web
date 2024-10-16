"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, Eye, EyeOff, LogIn } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Form, Formik } from "formik";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";
// import { createDataset } from "@/api/datasets";
import toast from "react-hot-toast";
import logIn from "@/firebase/login";

interface FormData {
  email: string;
  password: string;
}

export function LoginForm({
  setDialogOpened,
}: {
  setDialogOpened: (dialogOpened: boolean) => void;
}) {
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (data: FormData) => {
    const response = await logIn(data.email, data.password);

    if (response.error) {
      console.error(response.error);
      toast.error("Login failed");
    } else {
      toast.success("Login successfully");
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
        }}
        onSubmit={(data) => {
          handleSubmit(data);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 text-lg px-4">
              <div className="flex flex-col gap-2">
                <h3 className="flex">Email</h3>
                <Input
                  onChange={handleChange}
                  name="email"
                  className="text-lg text-carrot"
                  type="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  {" "}
                  <div className="flex items-center">Password</div>{" "}
                  <div className="flex items-center">
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
              </div>
              <div className="mb-2 flex items-center justify-center">
                <Button
                  type="submit"
                  className="px-4 mt-3 bg-carrot text-xanh rounded text-lg"
                  disabled={values.email === "" || values.password === ""}
                >
                  Login
                  <LogIn className="ml-2" />
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
