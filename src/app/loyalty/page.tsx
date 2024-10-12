"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Login } from "@/components/Authentication/LoginDialog";
import { getAuth, signOut } from "firebase/auth";
import firebase_app from "@/firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "@/components/ui/button";
import { Register } from "@/components/Authentication/RegisterDialog";
import { useQRCode } from "next-qrcode";
import { addNewTransaction, getUser } from "@/firebase/storeFunctions";
import { Timestamp, DocumentSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Loyalty() {
  const auth = getAuth(firebase_app);
  const [user, loading, error] = useAuthState(auth);
  const { Canvas } = useQRCode();
  const [loggedUser, setLoggedUser] = useState<DocumentSnapshot | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (user) {
        const fetchedUser = await getUser(user.uid);
        setLoggedUser(fetchedUser.result);
      }
    };
    fetchUser();
  }, [user]);

  const handleAddTransaction = async () => {
    if (user) {
      await addNewTransaction(
        user.uid,
        89,
        "card",
        Timestamp.fromDate(new Date())
      );
    }
  };

  console.log(loggedUser);

  return (
    <>
      <NavBar />

      <div className="bg-[url('/pictures/bg2.svg')] bg-center bg-cover">
        <div className="flex flex-col gap-3 justify-center">
          <div>{!user && <Login />}</div>
          <div>
            {!user && (
              <div className="flex justify-center items-center gap-2">
                <h3 className="text-center">Don&apos;t have an account yet?</h3>
                <Register />
              </div>
            )}
          </div>
        </div>
        {user && (
          <div className="flex justify-between items-center px-5">
            Hello,{" "}
            {loggedUser?.get("firstName") || loggedUser?.get("display_name")}
            <Button
              className="justify-center text-center items-center border-double border-primary border-4 flex"
              onClick={() => signOut(auth)}
            >
              Log out
            </Button>
          </div>
        )}
        {user && !user?.emailVerified && <div>please verify your email</div>}

        {user?.emailVerified && (
          <div>
            <Canvas
              text={user.uid}
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
            <Button onClick={handleAddTransaction}>Test add transaction</Button>
          </div>
        )}
        {/* <div>
          <MyWalletComponent />
        </div> */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
