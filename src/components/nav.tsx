"use client"
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

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Installer Dealer Application",
    "Our Story",
    "News",
    "Login",
    "Contact US",
  ];


  const menuItemsLink = [
    "Installer",
    "OurStory",
    "News",
    "Login",
    "ContactUS",
  ];



  return (
    <Navbar
      className="fixed z-50 p-1 bg-white top-10"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="absolute md:hidden text-foreground"
        />
        <NavbarBrand className="flex justify-center md:justify-start">
          <a href="/">
            <AcmeLogo />
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4 " justify="center">
        <NavbarItem>
          <Link
            className="hover:bg-yellow-400 p-5 rounded-full"
            color="foreground"
            href="/Installer"
          >
            Installer/Dealer Application
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:bg-yellow-400 p-5 rounded-full"
            color="foreground"
            href="/OurStory"
          >
            Our Story
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:bg-yellow-400 p-5 rounded-full"
            href="/News"
            color="foreground"
            aria-current="page"
          >
            News
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:bg-yellow-400 p-5 rounded-full"
            color="foreground"
            href="/Login"
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:bg-yellow-400 p-5 rounded-full"
            color="foreground"
            href="/ContactUS"
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="z-40">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="mt-20" key={`${item}-${index}`}>
            <Link className="w-full" href={"/" + menuItemsLink[index]} size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
