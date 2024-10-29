"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { AcmeLogo } from "./UI/AcmeLogo";
import DarkMode from "./DarkMode";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Installer Dealer Application",
    "Our Story",
    "News",
    "Login",
    "Contact US",
  ];

  const menuItemsLink = ["Installer", "OurStory", "News", "Login", "ContactUS"];

  return (
    <Navbar
      className="fixed z-50 p-1 bg-white top-10 dark:bg-black text-black dark:text-white"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden text-foreground "
      />
      <NavbarContent className="w-full">
        <NavbarBrand className="flex justify-center items-center md:justify-start w-full ">
          <a href="/">
            <AcmeLogo />
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-1 lg:gap-3" justify="center">
        <NavbarItem>
          <Link
            className=" text-sm  lg:text-lg hover:bg-yellow-400 p-5 rounded-full"
            color="foreground"
            href="/Installer"
          >
            Installer/Dealer Application
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-sm lg:text-lg  hover:bg-yellow-400 p-5 rounded-full"
            color="foreground"
            href="/OurStory"
          >
            Our Story
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-sm lg:text-lg hover:bg-yellow-400 p-5 rounded-full"
            href="/News"
            color="foreground"
            aria-current="page"
          >
            News
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-sm  lg:text-lg hover:bg-yellow-400 p-5 rounded-full"
            color="foreground"
            href="/Login"
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-sm lg:text-lg  hover:bg-yellow-400 p-5 rounded-full"
            color="foreground"
            href="/ContactUS"
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <DarkMode />
      <NavbarMenu className="z-40">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="mt-20" key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={"/" + menuItemsLink[index]}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
