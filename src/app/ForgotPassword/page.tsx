"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import BackgrounImg from "../../assets/FondoFormInstaller.jpg";
import { Input, Button } from "@nextui-org/react";
import { forgotPassword } from "../../validation/forgotPassword";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from 'react';

export default function page() {

  const [emailToken, setEmail] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      setEmail(token);
    }
  }, []);
  
  
  const {
    register: resetPassword,
    handleSubmit: resetPasswordSubmit,
    formState: { errors: passwordErrors },
  } = useForm({
    resolver: yupResolver(forgotPassword),
  });

  const onResetPassword = async (data: any) => {
    try {
      const requestData = { ...data, emailToken};
      const response = await fetch("./api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      if (!result.success) {
        toast.error(`${result.message}`);
      } else {
        router.push("/Login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center">
      <Toaster position="bottom-center" />
      <Image
        src={BackgrounImg}
        className="fixed w-full h-[100vh] object-cover"
        alt=""
      ></Image>
      <form
        onSubmit={resetPasswordSubmit(onResetPassword)}
        className="w-full max-w-[800px] h-auto absolute bg-white rounded-2xl pb-10"
      >
        <h1 className="font-InterBold text-center text-black text-md sm:text-3xl pt-10 pb-10 mb-5 border-b-1">
          <span className="text-blue-600 pr-2">Forgot</span>
          Password
        </h1>
        <div className="w-full h-auto px-10">
          <h1 className="pt-2 pl-1">Password</h1>
          <Input
            autoFocus
            variant="underlined"
            type="password"
            placeholder="........."
            {...resetPassword("password", {
              required: true,
            })}
          />
          {passwordErrors.password && (
            <p className="text-red-500">{passwordErrors.password.message}</p>
          )}

          <h1 className="pt-2 pl-1">Confirm Password</h1>
          <Input
            type="password"
            autoFocus
            variant="underlined"
            placeholder="........."
            {...resetPassword("confirmPassword", {
              required: true,
            })}
          />
          {passwordErrors.confirmPassword && (
            <p className="text-red-500">
              {passwordErrors.confirmPassword.message}
            </p>
          )}
        </div>
        <div className="w-full flex justify-center">
          <Button
            className="mt-10 w-11/12 sm:max-w-xl"
            radius="full"
            color="primary"
            variant="shadow"
            type="submit"
          >
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  );
}
