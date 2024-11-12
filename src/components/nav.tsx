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
import ThemeMode from "./ThemeMode";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Installer Dealer Application",
    "Our Story",
    "News",
    "Login",
    "Contact US",
  ];

  const menuItemsLink = ["installer", "ourStory", "news", "login", "contactUS"];

  return (
    <Navbar
      className="fixed z-50 p-1 bg-white top-10 dark:bg-black text-black dark:text-white"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden text-foreground"
      />
      <NavbarContent className="w-full">
        <NavbarBrand className="flex justify-center items-center lg:justify-start w-full">
          <a href="/" className="ml-10">
            <AcmeLogo />
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-1 lg:gap-3" justify="center">
        <NavbarItem>
          <Link
            className=" text-sm  lg:text-lg hover:bg-yellow-400 p-5 rounded-full"
            color="foreground"
            href="/installer"
          >
            Installer/Dealer Application
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-sm lg:text-lg  hover:bg-yellow-400 p-5 rounded-full"
            color="foreground"
            href="/ourStory"
          >
            Our Story
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-sm lg:text-lg hover:bg-yellow-400 p-5 rounded-full"
            href="/news"
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
            href="/login"
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-sm lg:text-lg  hover:bg-yellow-400 p-5 rounded-full"
            color="foreground"
            href="/contactUS"
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <ThemeMode />
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
