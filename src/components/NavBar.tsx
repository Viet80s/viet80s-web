import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/SideBar";

const NavBar = () => {
  return (
    <>
      <Sidebar />
      <div className="sticky top-0 z-50 flex flex-col items-center justify-center bg-black">
        <Link href="/" className="mt-5">
          <Image
            src="/pictures/logo.png"
            alt="Viet80s Logo"
            width={100}
            height={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <p style={{ color: "#F8C983", fontSize: "x-large", zIndex: 1 }}>
          A Culinary Journey to Vietnamese Soul
        </p>
      </div>
    </>
  );
};
export default NavBar;
