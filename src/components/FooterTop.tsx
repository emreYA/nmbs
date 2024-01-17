"use client";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Diensten",
    path: "/diensten",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Over ons",
    path: "/about",
  },
];

const FooterTop = () => {
  const pathName = usePathname();
  return (
    <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between bg-[#262626] text-[#F2F2F2]">
      <div className="m-4 flex flex-col gap-4 lg:px-32 xl:px-56 lg:flex-row">
        <div className="lg:flex-1 lg:items-center">
          <h4 className="text-lg lg:mt-0 font-bold">NMBS</h4>
          <div>
            Met een streven naar uitmuntendheid en een team van bekwame
            professionals streven we ernaar om uw verwachtingen te overtreffen
            bij elk project dat we ondernemen.
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:flex-1 lg:items-start">
          <h4 className="text-lg lg:mt-0 text-amber-500">Menu</h4>
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className={`${"w-fit font-medium text-start"} ${
                pathName === link.path && "border-b-2"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 lg:flex-1 lg:items-start">
          <h4 className="text-lg lg:mt-0 text-amber-500">Contact</h4>
          <div className="flex flex-row gap-2">
            <Phone className="text-amber-500" />
            <Link href="tel:+31628217687" className="hover:underline">
              06 28217687
            </Link>
          </div>
          <div className="text-lg flex flex-row gap-2">
            <Mail className="text-amber-500" />
            <Link
              href="mailto:noordermultidiensten@gmail.com"
              className="hover:underline"
            >
              noordermultidiensten@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
