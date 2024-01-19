import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { Underline } from "lucide-react";

const DetailsFooter = () => {
  const divStyle: React.CSSProperties = {
    backgroundImage: 'url("/pictures/lua1.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    padding: "20px", // Adjust the padding as needed
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const overlayStyle: React.CSSProperties = {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const textColorStyle = {
    color: "#F8C983",
  };
  const logoSize = isMobile ? 100 : 150;

  return (
    <div className="bg-black" style={divStyle}>
      <div style={overlayStyle}></div>

      <Link
        href="/"
        className={!isMobile ? "mt-16 mb-10 z-10 mx-40" : "mb-2 z-10"}
      >
        <Image
          src="/pictures/logo.png"
          alt="Viet80s Logo"
          width={logoSize}
          height={logoSize}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      {/* Center Column - Useful Links */}
      <div
        className={
          !isMobile ? "text-white mx-40 z-10 text-xl" : "text-white z-10 "
        }
        style={textColorStyle}
      >
        <p style={{ textDecoration: "underline" }}>Useful links</p>
        <ul>
          <li>
            <Link href="#">Link 1</Link>
          </li>
          <li>
            <Link href="#">Link 2</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>

      {/* Right Column - Opening Hours and Address */}
      <div
        className={
          !isMobile ? "text-white mx-40 z-10 text-xl" : "text-white z-10"
        }
        style={textColorStyle}
      >
        <p style={{ textDecoration: "underline" }}>Opening Hours</p>
        <p>Viet80s Restaurant:</p>
        <p>Mondays - Sundays</p>
        <p>11:30 AM - 10:30 PM</p>
      </div>
    </div>
  );
};

export default DetailsFooter;
