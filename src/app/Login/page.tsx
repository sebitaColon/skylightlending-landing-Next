"use client";
import Layout from "../../components/Layout";
import BackgrounImg from "../../assets/FondoFormInstaller.jpg";
import { Input, Button, Link } from "@nextui-org/react";
import { useState } from "react";
import { ModalLogin } from "../../components/Modal";
import { useDisclosure } from "@nextui-org/react";
import Image from "next/image";

export default function Login() {
  const [password, setPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = useState(false);

  function estado() {
    setState(true);
    onOpen();
  }
  function estado2() {
    setState(false);
    onOpen();
  }

  function ForgortPassword() {
    setPassword(!password);
  }

  return (
    <Layout>
      <div className="w-full h-auto flex flex-col items-center justify-center xl:h-[90vh] relative">
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
          </div>wq
          {password ? (
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
                    onClick={ForgortPassword}
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
                    onClick={ForgortPassword}
                  >
                    Send reset code
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            //login
            <div>
              <h1 className="font-InterBold text-5xl flex flex-col leading-none tracking-[-0.8px]">
                <span className="text-blue-600">For Solar!</span>
                Start here.
              </h1>
              <form
                action=""
                className="bg-background text-foreground p-5 rounded-3xl "
              >
                <div id="Login" className=" w-full">
                  <h1 className="flex py-2 px-1 justify-start ">
                    Email Address
                  </h1>
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
                      onClick={ForgortPassword}
                      size="sm"
                    >
                      Forgot password?
                    </Link>
                  </div>
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
            <h1>
              <Link onClick={estado}>Privacy Policy</Link> |{" "}
              <Link onClick={estado2}>Terms of Service</Link>
            </h1>
          </div>
        </div>
      </div>
      <ModalLogin isOpen={isOpen} onClose={onClose} state={state} />
    </Layout>
  );
}
