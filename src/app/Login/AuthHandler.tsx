"use client";
import { useState } from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import ForgotPasswordFromLogin from "./Forms/ForgotPasswordFromLogin";
import RegisterForm from "./Forms/RegisterForm";
import LoginForm from "./Forms/LoginForm";
import { ModalLogin } from "@/components/Modal";
import toast, { Toaster } from "react-hot-toast";

const AuthHandler = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">();

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
  const [view, setView] = useState("login");
  const handleForgotPassword = () => {
    setView("forgotPassword");
  };
  const handleRegister = () => {
    setView("register");
  };
  const handleLogin = () => {
    setView("login");
  };
  const handleToast = (message: string, type: "success" | "error") => {
    setToastMessage(message);
    setToastType(type);
    if (type === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  return (
    <>
      <Toaster position="bottom-center" />
      {view === "forgotPassword" ? (
        <>
          <div className="flex py-2 px-1 items-center justify-between">
            <h1>Reset Password</h1>
            <Button
              className="w-1/6"
              variant="shadow"
              radius="full"
              color="primary"
              onPress={handleLogin}
            >
              back
            </Button>
          </div>
          <ForgotPasswordFromLogin onToast={handleToast} />
        </>
      ) : view === "register" ? (
        <>
          <div className="flex py-2 px-1 items-center justify-between">
            <h1>Create Account</h1>
            <Button
              className="w-1/6"
              variant="shadow"
              radius="full"
              color="primary"
              onPress={handleLogin}
            >
              back
            </Button>
          </div>
          <RegisterForm onToast={handleToast} />
        </>
      ) : (
        <>
          <LoginForm
            onToast={handleToast}
            onRegister={handleRegister}
            onForgotPassword={handleForgotPassword}
          />
        </>
      )}
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
};

export default AuthHandler;
