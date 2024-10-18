"use client";
import { Input, Button, Link } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../validation/loginValidation";
import { onLoginSubmitService } from "@/services/userService";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  onRegister: () => void;
  onForgotPassword: () => void;
  onToast: (message: string, type: "success" | "error") => void;
}

export default function LoginForm({
  onRegister,
  onForgotPassword,
  onToast,
}: LoginFormProps) {
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
        onToast(result.message, "error");
      } else {
        onToast(result.message, "success");
        loginReset();
        router.push(
          result.rol === "ADMIN" || result.rol === "MANAGER"
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
            <Link color="primary" href="#" onPress={onRegister} size="sm">
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
            <Link color="primary" href="#" onPress={onForgotPassword} size="sm">
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
    </>
  );
}
