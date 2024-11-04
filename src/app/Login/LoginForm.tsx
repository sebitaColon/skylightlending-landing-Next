"use client";
import { Input, Button, Link, useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "@/validation/loginValidation";
import { onLoginSubmitService } from "./loginService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ModalLogin from "@/components/Modal";
import { useState } from "react";

export default function LoginForm() {

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

  const router = useRouter();
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
    reset: loginReset,
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const onLoginSubmit = async (data: any) => {
    try {
      const result = await onLoginSubmitService(data);
      if (!result.success) {
        toast.error(result.message);
      } else {
        toast.success(result.message);
        loginReset();
        router.push(
          result.role === "ADMIN" || result.role === "MANAGER"
            ? "/admin"
            : "/HomeUser"
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1 className="font-InterBold text-5xl ml-5 flex flex-col leading-none tracking-[-0.8px]">
        <span className="text-blue-600">For Solar!</span>
        Start here.
      </h1>
      <form
        className="bg-background text-foreground p-5 rounded-3xl"
        onSubmit={handleLoginSubmit(onLoginSubmit)}
      >
        <div id="Login" className=" w-full">
          <div className="flex pt-10 py-2 px-1 justify-between">
            <h1>Email Address</h1>
            <Link color="primary" href="/Register"  size="sm">
              Create Account
            </Link>
          </div>
          <Input
            autoFocus
            placeholder="Enter your email"
            variant="underlined"
            {...loginRegister("email", {
              required: true,
            })}
          />
          {loginErrors.email && (
            <p className="text-red-500">{loginErrors.email.message}</p>
          )}
          <div className="flex pt-10 py-2 px-1 justify-between">
            <h1>Password</h1>
            <Link color="primary" href="/ForgotPassword" size="sm">
              Forgot password?
            </Link>
          </div>
          <Input
            variant="underlined"
            placeholder="........."
            type="password"
            {...loginRegister("password", {
              required: true,
            })}
          />
          {loginErrors.password && (
            <p className="text-red-500">{loginErrors.password.message}</p>
          )}
          <div className="w-full flex justify-center">
            <Button
              className="mt-10 w-full sm:max-w-xl"
              radius="full"
              color="primary"
              variant="shadow"
              type="submit"
            >
              Login
            </Button>
          </div>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center mt-3 p-5 sm:flex-row sm:justify-between">
        <h1>© 2024 Skylight Lending, LLC</h1>
        <div className="cursor-pointer">
          <Link onPress={estado}>Privacy Policy</Link> |{" "}
          <Link onPress={estado2}>Terms of Service</Link>
        </div>
      </div>
      <ModalLogin isOpen={isOpen} onClose={onClose} state={state} />
    </>
  );
}
