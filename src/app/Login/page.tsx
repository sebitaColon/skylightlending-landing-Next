"use client";
import Layout from "../../components/Layout";
import BackgrounImg from "../../assets/FondoFormInstaller.jpg";
import { Input, Button, Link } from "@nextui-org/react";
import { useState } from "react";
import { ModalLogin } from "../../components/Modal";
import { useDisclosure } from "@nextui-org/react";
import Image from "next/image";

import { loginValidation } from "../../validation/loginValidation";
import { registerValidation } from "../../validation/resgisterValidation";
import { yupResolver } from "@hookform/resolvers/yup"; // Importa yupResolver
import { useForm } from "react-hook-form"; // Importa useForm
import toast, { Toaster } from "react-hot-toast"; //Alertas flotantes

export default function Login() {
  //abrir modales
  const { isOpen, onOpen, onClose } = useDisclosure();
  function estado() {
    setState(true);
    onOpen();
  }
  function estado2() {
    setState(false);
    onOpen();
  }

  //cambiar estados
  const [view, setView] = useState("login"); // Puede ser 'login', 'forgotPassword', 'register'
  const handleForgotPassword = () => {
    setView("ForgotPassword");
  };
  const handleRegister = () => {
    setView("register");
  };
  const handleLogin = () => {
    setView("login");
  };

  // Configuración de react-hook-form con yup - login
  const [state, setState] = useState(false);
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  // Configuración de react-hook-form con yup - register
  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors},
    reset: resetRegister,
  } = useForm({
    resolver: yupResolver(registerValidation),
  });

  // Función para enviar los datos del formulario a la API
  const onLoginSubmit = async (data: any) => {
    // Aqui manejar el envío de datos, como hacer una llamada a la API para el login
    try {
      // Incluir el estado de view en el cuerpo de la solicitud
      const requestData = { ...data, view: "login" }; // Se agrega el estado `view` al body
      const response = await fetch("./api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData), // Se envían los datos y el view
      });
      const result = await response.json();
      if (!result.success) {
        toast.error(`${result.message}`);
      } else {
        toast.success(`Login successful`); //aca enviar a otra pagina
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onRegisterSubmit = async (data: any) => {
    // Aqui manejar el envío de datos, como hacer una llamada a la API para el login
    try {
      // Incluir el estado de view en el cuerpo de la solicitud
      const requestData = { ...data, view: "register" }; // Se agrega el estado `view` al body
      const response = await fetch("./api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData), // Se envían los datos y el view
      });
      const result = await response.json();
      if (!result.success) {
        toast.error(`${result.message}`);
      } else {
        toast.success(`Registro exitoso`);
        resetRegister();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Layout>
      <Toaster position="bottom-center" />
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
              <form onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
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
                <Input
                  autoFocus
                  placeholder="Name"
                  variant="underlined"
                  {...registerRegister("name", {
                    required: true,
                  })}
                />
                {registerErrors.name && <p className="text-red-500">{registerErrors.name.message}</p>}
                <h1 className="pt-2 pl-1">Last name</h1>
                <Input
                  autoFocus
                  placeholder="Last name"
                  variant="underlined"
                  {...registerRegister("last_name", {
                    required: true,
                  })}
                />
                {registerErrors.last_name && (
                  <p className="text-red-500">{registerErrors.last_name.message}</p>
                )}
                <h1 className="pt-2 pl-1">Email</h1>
                <Input
                  autoFocus
                  placeholder="Email"
                  variant="underlined"
                  {...registerRegister("email", {
                    required: true,
                  })}
                />
                {registerErrors.email && <p className="text-red-500">{registerErrors.email.message}</p>}
                <h1 className="pt-2 pl-1">Password</h1>
                <Input
                  autoFocus
                  variant="underlined"
                  placeholder="........."
                  type="password"
                  {...registerRegister("password", {
                    required: true,
                  })}
                />
                {registerErrors.password && (
                  <p className="text-red-500">{registerErrors.password.message}</p>
                )}
                <h1 className="pt-2 pl-1">Confirm Password</h1>
                <Input
                  type="password"
                  autoFocus
                  variant="underlined"
                  placeholder="........."
                  {...registerRegister("confirmPassword",{
                    required: true,
                  })} 
                />
                {registerErrors.confirmPassword && (
                  <p className="text-red-500">{registerErrors.confirmPassword.message}</p>
                )}

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
            <div id="login">
              <h1 className="font-InterBold text-5xl ml-5 flex flex-col leading-none tracking-[-0.8px]">
                <span className="text-blue-600">For Solar!</span>
                Start here.
              </h1>
              <form
                className="bg-background text-foreground p-5 rounded-3xl"
                onSubmit={handleLoginSubmit(onLoginSubmit)} // Asocia handleSubmit con el envío del formulario
              >
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
                    {...loginRegister("email", {
                      required: true,
                    })} // Asocia el input con react-hook-form
                    // Mostrar mensaje de error si lo hay
                  />
                  {loginErrors.email && (
                    <p className="text-red-500">{loginErrors.email.message}</p>
                  )}
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
                    {...loginRegister("password", {
                      required: true,
                    })} // Asocia el input con react-hook-form
                  />
                  {loginErrors.password && (
                    <p className="text-red-500">
                      {loginErrors.password.message}
                    </p>
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
