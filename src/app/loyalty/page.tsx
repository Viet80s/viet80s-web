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
import { addNewTransaction } from "@/firebase/storeFunctions";
import { Timestamp } from "firebase/firestore";
import { MyWalletComponent } from "@/components/Pass";

export default function Loyalty() {
  const auth = getAuth(firebase_app);
  const [user, loading, error] = useAuthState(auth);
  const { Canvas } = useQRCode();

  return (
    <>
      <NavBar />

      <div className="bg-[url('/pictures/bg2.svg')] bg-center bg-cover">
        <div className="flex gap-3 justify-center">
          <div>
            <Login />
          </div>
          <div>
            <Register />
          </div>
        </div>

        <div>
          <Button onClick={() => signOut(auth)}>Log out</Button>
        </div>
        {!user?.emailVerified && <div>please verify your email</div>}

        {user && <div>hello {user.email}</div>}
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
            <Button
              onClick={() =>
                addNewTransaction(
                  user.uid,
                  89,
                  "card",
                  Timestamp.fromDate(new Date())
                )
              }
            >
              Test add transaction
            </Button>
          </div>
        )}
        {/* <div>
          <MyWalletComponent />
        </div> */}
        <div>
          <form
            method="get"
            action="https://www.passsource.com/pass/create.php"
          >
            <input
              type="hidden"
              name="templateHash"
              value="eNortjIysVIqLA00jIiyyC0pMXKOcPYqyrIozC4ItLVVsgZcMKPxCfk,"
            />
            <label>Enter your member number:</label>
            <input type="text" name="barcode_message" />
            <input type="submit" value="Get Pass" />
          </form>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
