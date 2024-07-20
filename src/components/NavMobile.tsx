import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import Image from "next/image";
import { useClickAway } from "react-use";
import { routes } from "@/app/routes";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div
      ref={ref}
      className="sticky top-0 z-50 backdrop-blur lg:hidden bg-primary"
    >
      <div className="flex items-center justify-between mx-5 text-xanh">
        {/*Burger menu */}
        <div className="my-5">
          <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-6 fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-5 bg-primary border-b border-b-white/20"
              >
                <ul className="grid gap-2">
                  {routes.map((route, idx) => {
                    // const { Icon } = route;

                    return (
                      <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + idx / 10,
                        }}
                        key={route.title}
                        className="w-full p-[0.08rem] rounded-xl bg-xanh"
                      >
                        <a
                          onClick={() => setOpen((prev) => !prev)}
                          className={
                            "flex items-center justify-between w-full p-3 rounded-xl bg-xanh"
                          }
                          href={route.href}
                        >
                          <span className="flex gap-1 text-lg text-primary">
                            {route.title}
                          </span>
                          {/* <Icon className="text-xl" /> */}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/*Title */}
        <div>
          <Link href="/" className="text-xl">
            <Image
              src="/pictures/logo.png"
              alt="Viet80s Logo"
              priority
              width={70}
              height={70}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
