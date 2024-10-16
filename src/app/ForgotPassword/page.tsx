import React from "react";
import Image from "next/image";
import BackgrounImg from "../../assets/FondoFormInstaller.jpg";
import ForgotPassword from "@/components/ForgotPassword";

export default function ForgotPasswordPage() {
  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center">
      <Image
        src={BackgrounImg}
        className="fixed w-full h-[100vh] object-cover"
        alt=""
      />
      <ForgotPassword />
    </div>
  );
}
