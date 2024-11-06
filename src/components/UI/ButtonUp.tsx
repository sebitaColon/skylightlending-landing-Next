"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import imgButtonUp from "@/assets/buttonUp.svg";
import { Button } from "@nextui-org/react";

export default function ButtonUp() {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition > documentHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      color="warning"
      variant="shadow"
      onClick={scrollToTop}
      className={`min-w-0 min-h-0 fixed bottom-10 right-10 z-50 size-10 bg-yellow-400 rounded-full p-2 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Image src={imgButtonUp} alt="imgButton" />
    </Button>
  );
}
