import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

type Props = { location: string };

const DetailsFooter = ({ location }: Props) => {
  const divStyle: React.CSSProperties = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    padding: "20px",
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
    width: "100%",
    height: "100%",
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const textColorStyle = {
    color: "#F8C983",
  };
  const logoSize = isMobile ? 75 : 150;
  const iconSize = isMobile ? "small" : "x-large";

  return (
    <div style={divStyle}>
      <div style={overlayStyle}></div>
      <div className={!isMobile ? "mt-2 mb-2 z-10 mx-20" : "mb-2 z-10"}>
        <div>
          <Image
            src="/pictures/logo.png"
            alt="Viet80s Logo"
            width={logoSize}
            height={logoSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div
          className="flex justify-between text-xanh"
          style={{ fontSize: iconSize }}
        >
          <Link href="https://www.facebook.com/Viet80s.Nott" className="mx-1">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link
            href="https://www.instagram.com/viet80s.nottingham/"
            className="mx-1"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            href="https://www.youtube.com/@viet80soficialuk"
            className="mx-1"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </div>
      </div>

      {/* Center Column - Useful Links */}
      <div
        className={
          !isMobile
            ? "text-xanh mx-20 z-10 text-xl"
            : "text-xanh ml-5 z-10 text-sm"
        }
      >
        <p style={{ fontWeight: "bolder" }}>Links</p>
        <ul>
          <li>
            <Link href="/mobile-app">- Mobile App</Link>
          </li>

          {location === "restaurant" && (
            <>
              <li>
                <Link href="/street-food">- Street Food</Link>
              </li>
              <li>
                <Link href="/coffee">- Coffee</Link>
              </li>
            </>
          )}
          {location === "street-food" && (
            <>
              <li>
                <Link href="/restaurant">- Restaurant</Link>
              </li>
              <li>
                <Link href="/coffee">- Coffee</Link>
              </li>
            </>
          )}
          {location === "coffee" && (
            <>
              <li>
                <Link href="/street-food">- Street Food</Link>
              </li>
              <li>
                <Link href="/restaurant">- Restaurant</Link>
              </li>
            </>
          )}
          <li>
            <Link href="/terms-and-policies">- Policy and Terms</Link>
          </li>
        </ul>
      </div>

      {/* Right Column - Opening Hours and Address */}
      <div
        className={
          !isMobile
            ? "text-xanh mx-20 z-10 text-xl"
            : "text-xanh mx-5 z-10 text-sm"
        }
      >
        <p style={{ fontWeight: "bolder" }}>Opening Hours</p>
        {location === "restaurant" && (
          <>
            <p style={{ textDecoration: "underline" }}>Restaurant</p>
            <p>Mondays - Sundays</p>
            <p>11:30 AM - 10:30 PM</p>
          </>
        )}
        {location === "street-food" && (
          <>
            <p style={{ textDecoration: "underline" }}>Street Food</p>
            <p>Mondays - Fridays</p>
            <p>8:30 AM - 6:00 PM</p>
            <p>Saturdays - Sundays</p>
            <p>9:00 AM - 6:00 PM</p>
          </>
        )}
        {location === "coffee" && (
          <>
            <p style={{ textDecoration: "underline" }}>Coffee</p>
            <p>Mondays - Fridays</p>
            <p>8:30 AM - 6:00 PM</p>
            <p>Saturdays - Sundays</p>
            <p>9:00 AM - 6:00 PM</p>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailsFooter;
