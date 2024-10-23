"use client";
import { Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { gmailPassword } from "@/validation/gmailForgotPassword";
import { onForgotSubmitService } from "../services/serviceForgotPasswordLogin";

interface ForgotFormProps {
  onToast: (message: string, type: "success" | "error") => void;
}

export default function ForgotPasswordFromLogin({ onToast }: ForgotFormProps) {
  const {
    register: forgotPassword,
    handleSubmit: handleForgotSubmit,
    formState: { errors: forgotErrors },
    reset: forgotPasswordReset,
  } = useForm({
    resolver: yupResolver(gmailPassword),
  });

  const onForgotSubmit = async (data: any) => {
    try {
      const result = await onForgotSubmitService(data);
      if (!result.success) {
        onToast(result.message, "error");
      } else {
        onToast("Check your gmail", "success");
        forgotPasswordReset();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleForgotSubmit(onForgotSubmit)}
      className="gap-0 w-full"
    >
      <Input
        autoFocus
        placeholder="Enter your email"
        variant="underlined"
        {...forgotPassword("email", {
          required: true,
        })}
      />
      {forgotErrors.email && (
        <p className="text-red-500">{forgotErrors.email.message}</p>
      )}
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
          type="submit"
        >
          Send reset code
        </Button>
      </div>
    </form>
  );
}
