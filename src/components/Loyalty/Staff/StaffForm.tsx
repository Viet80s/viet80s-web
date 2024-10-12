"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, Eye, EyeOff, LogIn } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Form, Formik } from "formik";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import logIn from "@/firebase/login";
import { DocumentSnapshot } from "firebase/firestore";
import { getUser } from "@/firebase/storeFunctions";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface FormData {
  uid: string;
}

export function StaffForm() {
  const [error, setError] = useState<string | null>(null);
  const [loggedUser, setLoggedUser] = useState<DocumentSnapshot | null>(null);
  const [uid, setUid] = useState<string>("");
  const [dialogOpened, setDialogOpened] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (uid) {
        try {
          const fetchedUser = await getUser(uid);
          if (fetchedUser.result?.exists()) {
            setLoggedUser(fetchedUser.result);
            setError(null);
          } else {
            setLoggedUser(null);
            setError("User not found");
          }
        } catch (error) {
          console.error("Error fetching user:", error);
          setError("Failed to fetch user data");
        }
      }
    };
    fetchUser();
  }, [uid]);
  useEffect(() => {
    if (loggedUser) {
      setDialogOpened(true);
    }
  }, [loggedUser]);

  return (
    <>
      <Formik
        initialValues={{
          uid: "",
        }}
        onSubmit={(data) => {
          // handleSubmit(data);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form className="w-full px-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 text-lg">
              <div className="flex flex-col gap-2">
                <h3 className="flex">Scanned UID</h3>
                <div className="flex items-center gap-2">
                  <Input
                    onChange={(e) => {
                      handleChange(e);
                      setUid(e.target.value);
                    }}
                    value={values.uid}
                    name="uid"
                    className="text-lg text-primary-foreground bg-white"
                    type="text"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setUid("");
                      setLoggedUser(null);
                      handleChange({ target: { name: "uid", value: "" } });
                    }}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Clear
                  </button>
                </div>
              </div>
              <div>{values.uid}</div>
              {loggedUser && (
                <div className="mt-4">
                  <h4 className="text-xl font-bold">User Data:</h4>
                  <pre className="bg-gray-100 p-4 rounded">
                    {loggedUser.get("display_name")}
                  </pre>
                </div>
              )}
              {error && (
                <div className="mb-5 text-red-500">
                  <AlertCircle className="inline-block mr-2" />
                  {error}
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>

      <Dialog open={dialogOpened} onOpenChange={setDialogOpened}>
        <DialogContent className="w-full rounded-lg h-[700px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center">User Found</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
