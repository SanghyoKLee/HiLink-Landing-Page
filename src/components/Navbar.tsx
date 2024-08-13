import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../../data";
import Button from "./Button";
import { UserRound } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 items-center">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-slate-700 flexCenter cursor-pointer pb-1.5 transition-all hover:text-slate-400"
          >
            {" "}
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flex-center">
        <Button className="bg-zinc-800" icon={<UserRound />} title={"Login"} />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      ></Image>
    </nav>
  );
};

export default Navbar;
