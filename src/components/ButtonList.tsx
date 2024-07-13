import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import styles from "@/app/menu.module.css";
import { Button } from "./ui/button";

type Props = { location: string };

const ButtonList = ({ location }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const fontSize = isMobile ? "large" : "x-large";

  return (
    <>
      <div className={"mt-5 px-5 " + styles.imageWrapperList}>
        {location === "restaurant" && (
          <Link href="https://www.viet80sonline.co.uk/">
            <div className={styles.imageContainerApp}>
              <Button
                style={{
                  textAlign: "center",
                  border: "double",
                  borderWidth: "6px",
                  padding: "20px",
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
            <div className={styles.imageContainerApp}>
              <Button
                style={{
                  textAlign: "center",
                  border: "double",
                  borderWidth: "6px",
                  padding: "20px",
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
            <div className={styles.imageContainerApp}>
              <Button
                style={{
                  textAlign: "center",
                  border: "double",
                  borderWidth: "6px",
                  padding: "20px",
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
            <div className={styles.imageContainerApp}>
              <Button
                style={{
                  textAlign: "center",
                  border: "double",
                  borderWidth: "6px",
                  padding: "20px",
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
