"use client";

import { SignUpButton } from "@clerk/nextjs";
import { Show, UserButton } from "@clerk/react";
import Image from "next/image";
import Link from "next/link";

const NavList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "document",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <nav className=" fixed top-0 w-full flex items-center justify-around p-6 bg-[#C9BEFF] shadow-md text-gray-700 z-1000">
      <div className="font-extrabold">SkillXChange</div>

      <div>
        <ul className="flex items-center justify-between gap-4">
          {NavList.map((item) => {
            return (
              <Link href={item.href} key={item.name} className="font-bold">
                {item.name}
              </Link>
            );
          })}

          <SignUpButton>
            <button className="  text-black rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
