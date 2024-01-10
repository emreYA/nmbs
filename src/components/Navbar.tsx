import React from "react";
import Links from "./Links";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-24 flex flex-row items-center justify-between bg-black">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Noorder multidiensten bouw en schoonmaak logo"
          width={240}
          height={240}
        />
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
