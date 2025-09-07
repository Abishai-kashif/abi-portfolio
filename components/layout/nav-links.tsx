"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import UseAnimationsWrapper from "../use-animations-wrapper";
import menu from "react-useanimations/lib/menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { links } from "@/data";

function NavLinks() {
  const [open, setOpen] = useState(false);
  

  return (
    <>
      {/* nav links desktop */}
      <nav className="hidden md:inline-block">
        <ul className="flex items-center gap-x-10 text-white/70 font-hind text-balance tracking-wide leading-none mt-0.5">
          {links.map((link) => (
            <Link href={link.path} key={link.path}>
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
      </nav>

      {/* mobile nav links */}
      <>
        <Button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          variant="ghost"
          size={"icon"}
        >
          <UseAnimationsWrapper animation={menu} size={25} strokeColor="#fff" />
        </Button>

        {/* custom nav links mobile that expands header */}
        {open && (
          <div className=" basis-full">
            <ul className="flex-center flex-col gap-y-2 text-white font-hind text-balance tracking-wide leading-none pb-4 pt-7 text-lg">
              {links.map((link) => (
                <Button
                  key={link.path}
                  asChild
                  variant={"ghost"}
                  size={"icon"}
                  className="w-full hover:bg-dark-purple/50 p-0"
                  onClick={() => setOpen(false)}
                >
                  <Link href={link.path} className="text-center">
                    <li>{link.name}</li>
                  </Link>
                </Button>
              ))}
            </ul>
          </div>
        )}
      </>
    </>
  );
}

export default NavLinks;
