"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { useState } from "react";
import NavLink from "./NavLink";
import { Menu, X } from "lucide-react";

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

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="hidden md:flex md:flex-row md:items-center md:gap-3 text-white">
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.title}>
                <NavLink item={link} />
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {open ? (
        <X
          className="md:hidden text-white mr-2"
          onClick={() => setOpen((prev) => !prev)}
        />
      ) : (
        <Menu
          className="md:hidden text-white mr-2"
          onClick={() => setOpen((prev) => !prev)}
        />
      )}

      {open && (
        <div className="absolute top-24 right-0 w-1/2 h-[calc(100vh-100px)] lg:hidden z-20 bg-white">
          <NavigationMenu className="h-full">
            <NavigationMenuList className="flex flex-col items-end justify-center gap-6">
              {links.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <NavLink item={link} open={open} setOpen={setOpen} />
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </div>
  );
};

export default Links;
