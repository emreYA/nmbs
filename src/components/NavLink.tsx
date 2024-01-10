"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item, setOpen }: any) => {
  const pathName = usePathname();

  return (
    <Link
      onClick={() => setOpen((prev: any) => !prev)}
      href={item.path}
      className={`${"p-2 font-medium text-center"} ${
        pathName === item.path && "text-white bg-[#f0220b] rounded-sm"
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
