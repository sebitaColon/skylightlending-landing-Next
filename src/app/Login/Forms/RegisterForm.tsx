"use client";
import { Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidation } from "@/validation/resgisterValidation";
import { onRegisterSubmitService } from "../services/serviceRegister";

interface RegisterFormProps {
  onToast: (message: string, type: "success" | "error") => void;
}

export default function RegisterForm({ onToast }: RegisterFormProps) {
  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
    reset: resetRegister,
  } = useForm({
    resolver: yupResolver(registerValidation),
  });

  const onRegisterSubmit = async (data: any) => {
    try {
      const result = await onRegisterSubmitService(data);
      if (!result.success) {
        onToast(result.message, "error");
      } else {
        onToast(result.message, "success");
        resetRegister();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
      <h1 className="pt-2 pl-1">Name</h1>
      <Input
        autoFocus
        placeholder="Name"
        variant="underlined"
        {...registerRegister("name", {
          required: true,
        })}
      />
      {registerErrors.name && (
        <p className="text-red-500">{registerErrors.name.message}</p>
      )}
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
      {registerErrors.email && (
        <p className="text-red-500">{registerErrors.email.message}</p>
      )}
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
        {...registerRegister("confirmPassword", {
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
  );
}
