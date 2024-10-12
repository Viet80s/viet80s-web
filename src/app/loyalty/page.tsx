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
import { RestaurantBlock } from "@/components/Loyalty/Resto/RestaurantBlock";
import { CoffeeBlock } from "@/components/Loyalty/Coffee/CoffeeBlock";
import { LogOut } from "lucide-react";
import { StaffForm } from "@/components/Loyalty/Staff/StaffForm";

export default function Loyalty() {
  const auth = getAuth(firebase_app);
  const [user, loading, error] = useAuthState(auth);
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
          <div className="flex justify-between items-center px-5 text-xl text-xanh">
            Hello, {loggedUser?.get("display_name") || "Viet80s Customer"}!
            <Button
              className="justify-center text-center items-center border-double border-primary border-4 flex"
              onClick={() => signOut(auth)}
            >
              Log out <LogOut className="ml-2 size-4" />
            </Button>
          </div>
        )}
        {/* MAKE the notificaiton nicer */}
        {user && !user?.emailVerified && (
          <div>
            Thanks for registering. Please verify your email to continue using
            our services
          </div>
        )}

        {user &&
          user?.emailVerified &&
          loggedUser?.get("email") !== "viet80s.vn@gmail.com" && (
            <div className="flex flex-col">
              <RestaurantBlock
                points={loggedUser?.get("Point") || 0}
                uid={loggedUser?.get("uid")}
              />
              <CoffeeBlock
                stamps={loggedUser?.get("Stamp") || 0}
                uid={loggedUser?.get("uid")}
              />
            </div>
          )}

        {user &&
          user?.emailVerified &&
          loggedUser?.get("email") === "viet80s.vn@gmail.com" && (
            <div className="flex flex-col">
              <StaffForm />
            </div>
          )}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
