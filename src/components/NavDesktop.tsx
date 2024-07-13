import { routes } from "@/app/routes";
import Link from "next/link";
import Image from "next/image";

export const NavDesktop = () => {
  return (
    <div className="hidden lg:flex lg:items-center sticky top-0 z-50 backdrop-blur justify-between px-9 py-2 bg-primary">
      <div>
        <Link href="/">
          <Image
            src="/pictures/logo.png"
            priority
            alt="Viet80s Logo"
            width={80}
            height={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </div>

      <div>
        <ul className="lg:flex gap-5 text-xl">
          {routes.map((route) => {
            const { href, title } = route;
            return (
              <li key={title}>
                <a
                  href={href}
                  className="flex items-center gap-1 text-xanh font-extrabold opacity-85 hover:text-primary-foreground hover:opacity-100 transition-all"
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
