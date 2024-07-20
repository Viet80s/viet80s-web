import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import styles from "@/app/menu.module.css";
import { Button } from "./ui/button";

type Props = { location: string };

const ButtonList = ({ location }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const fontSize = isMobile ? "medium" : "x-large";
  const paddingButton = isMobile ? "15px" : "20px";

  return (
    <>
      <div className="flex items-center text-center justify-center sm:gap-5 mt-5 sm:mb-0 mb-5 gap-3 sm:mx-0 sm-5">
        {location === "restaurant" && (
          <Link href="https://www.viet80sonline.co.uk/">
            <div>
              <Button
                style={{
                  textAlign: "center",
                  border: "double",
                  borderWidth: "6px",
                  padding: paddingButton,
                  fontSize: fontSize,
                }}
              >
                {" "}
                Full Restaurant Menu{" "}
              </Button>
            </div>
          </Link>
        )}
        {location === "street-food" && (
          <Link
            href="/docs/menugiaySF-pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Button
                style={{
                  textAlign: "center",
                  border: "double",
                  borderWidth: "6px",
                  padding: paddingButton,
                  fontSize: fontSize,
                }}
              >
                {" "}
                Full Street Food Menu{" "}
              </Button>
            </div>
          </Link>
        )}
        {location === "coffee" && (
          <Link
            href="/docs/Menu_Coffee.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Button
                style={{
                  textAlign: "center",
                  border: "double",
                  borderWidth: "6px",
                  padding: paddingButton,
                  fontSize: fontSize,
                }}
              >
                {" "}
                Full Coffee Menu{" "}
              </Button>
            </div>
          </Link>
        )}
        {location === "restaurant" && (
          <Link href="https://www.viet80sonline.co.uk/s/appointments">
            <div>
              <Button
                style={{
                  textAlign: "center",
                  border: "double",
                  borderWidth: "6px",
                  padding: paddingButton,
                  fontSize: fontSize,
                }}
              >
                {" "}
                Book a table today{" "}
              </Button>
            </div>
          </Link>
        )}
      </div>
    </>
  );
};
export default ButtonList;
