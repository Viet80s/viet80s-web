import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-xanh flex flex-col text-primary py-2 justify-center items-center text-center">
        <div className="text-center">
          <p>57-67 Friar Lane, Nottingham NG1 6DH</p>
          <p>
            &copy; {new Date().getFullYear()} Viet80s LTD. All Rights Reserved.
          </p>
        </div>
        <div className="text-right flex items-center text-white text-sm">
          <Link href={"https://kitebs.co.uk/"}>
            <div className="mr-2">Powered by KITE</div>
          </Link>
          <div>
            <Image
              src="/pictures/kite1.png"
              alt="Viet80s Logo"
              width={30}
              height={30}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
            />
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
