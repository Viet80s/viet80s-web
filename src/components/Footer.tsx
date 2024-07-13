import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-xanh flex flex-col text-primary py-3 justify-center items-center text-center">
        <div className="text-center">
          <p>57-67 Friar Lane, Nottingham NG1 6DH</p>
          <p>
            &copy; {new Date().getFullYear()} Viet80s LTD. All Rights Reserved.
          </p>
        </div>
        <div className="text-right py-2 flex items-center text-white text-sm">
          <div className="mr-2">Powered by KITE</div>
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
