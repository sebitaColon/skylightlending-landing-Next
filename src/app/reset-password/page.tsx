import React from "react";
import Image from "next/image";
import BackgrounImg from "../../assets/FondoFormInstaller.jpg";
import ResetPassword from "./ResetPassword";

export default function page() {
  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center">
      <Image
        src={BackgrounImg}
        className="fixed w-full h-[100vh] object-cover"
        alt=""
      />
      <ResetPassword />
    </div>
  );
}
