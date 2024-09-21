"use client";
import Layout from "../../components/Layout";
import BackgrounImg from "../../assets/FondoFormInstaller.jpg";
import { Input, Button, Link } from "@nextui-org/react";
import { useState } from "react";
import { ModalLogin } from "../../components/Modal";
import { useDisclosure } from "@nextui-org/react";
import Image from "next/image";

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = useState(false);
  const [view, setView] = useState("login"); // Puede ser 'login', 'forgotPassword', 'register'

  function estado() {
    setState(true);
    onOpen();
  }
  function estado2() {
    setState(false);
    onOpen();
  }

  const handleForgotPassword = () => {
    setView("ForgotPassword");
  };
  const handleRegister = () => {
    setView("register");
  };
  const handleLogin = () => {
    setView("login");
  };

  return (
    <Layout>
      <div className="w-full h-auto flex flex-col items-center justify-center relative">
        <Image
          src={BackgrounImg}
          alt=""
          className="absolute object-cover w-full h-full -z-10"
        />
        <div
          className={`w-full h-auto p-5 bg-background text-foreground mt-40 mb-20 rounded-3xl flex flex-col justify-start sm:w-4/5 md:max-w-5xl xl:mt-52 `}
        >
          <div className="w-full flex items-center mb-5 justify-end">
            <h1 className="pr-10">FAQs</h1>
            <Button variant="shadow" radius="full" color="primary">
              Get in touch
            </Button>
          </div>
          {view === "ForgotPassword" ? (
            //forgot password
            <div>
              <div id="ForgotPassword" className="gap-0 w-full">
                <div className="flex py-2 px-1 items-center justify-between">
                  <h1>Reset Password</h1>
                  <Button
                    className="w-1/6"
                    variant="shadow"
                    radius="full"
                    color="primary"
                    onClick={handleLogin}
                  >
                    back
                  </Button>
                </div>
                <Input
                  autoFocus
                  placeholder="Enter your email"
                  variant="underlined"
                />
                <p className="pt-4">
                  {" "}
                  Please enter your email address to reset your password.
                </p>
                <div className="w-full flex justify-center">
                  <Button
                    className="mt-10 w-full sm:max-w-xl"
                    radius="full"
                    color="primary"
                    variant="shadow"
                    onClick={handleForgotPassword}
                  >
                    Send reset code
                  </Button>
                </div>
              </div>
            </div>
          ) : view === "register" ? (
            <div id="register">
              <form>
                <div className="flex py-2 px-1 items-center justify-between">
                  <h1>Create Account</h1>
                  <Button
                    className="w-1/6"
                    variant="shadow"
                    radius="full"
                    color="primary"
                    onClick={handleLogin}
                  >
                    back
                  </Button>
                </div>
                <h1 className="pt-2 pl-1">Name</h1>
                <Input autoFocus placeholder="Name" variant="underlined" />
                <h1 className="pt-2 pl-1">Last name</h1>
                <Input autoFocus placeholder="Last name" variant="underlined" />
                <h1 className="pt-2 pl-1">Email</h1>
                <Input autoFocus placeholder="Email" variant="underlined" />
                <h1 className="pt-2 pl-1">Password</h1>
                <Input
                  autoFocus
                  variant="underlined"
                  placeholder="........."
                  type="password"
                />

                <div className="w-full flex justify-center">
                  <Button
                    className="mt-10 w-full sm:max-w-xl"
                    radius="full"
                    color="primary"
                    variant="shadow"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            //login
            <div id="login">
              <h1 className="font-InterBold text-5xl ml-5 flex flex-col leading-none tracking-[-0.8px]">
                <span className="text-blue-600">For Solar!</span>
                Start here.
              </h1>
              <form className="bg-background text-foreground p-5 rounded-3xl ">
                <div id="Login" className=" w-full">
                  <div className="flex pt-10 py-2 px-1 justify-between">
                    <h1>Email Address</h1>
                    <Link
                      color="primary"
                      href="#"
                      onClick={handleRegister}
                      size="sm"
                    >
                      Create Account
                    </Link>
                  </div>
                  <Input
                    autoFocus
                    placeholder="Enter your email"
                    variant="underlined"
                  />
                  <div className="flex pt-10 py-2 px-1 justify-between">
                    <h1>Password</h1>
                    <Link
                      color="primary"
                      href="#"
                      onClick={handleForgotPassword}
                      size="sm"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    variant="underlined"
                    placeholder="........."
                    type="password"
                  />
                  <div className="w-full flex justify-center">
                    <Button
                      className="mt-10 w-full sm:max-w-xl"
                      radius="full"
                      color="primary"
                      variant="shadow"
                      type="submit"
                    >
                      {" "}
                      Login{" "}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}
          <div className="flex flex-col justify-center items-center mt-3 p-5 sm:flex-row sm:justify-between">
            <h1>© 2024 Skylight Lending, LLC</h1>
            <div className="cursor-pointer">
              <Link onClick={estado}>Privacy Policy</Link> |{" "}
              <Link onClick={estado2}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
      <ModalLogin isOpen={isOpen} onClose={onClose} state={state} />
    </Layout>
  );
}
