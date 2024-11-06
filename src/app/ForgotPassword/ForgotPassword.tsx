"use client";
import { Input, Button, Link } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { gmailPassword } from "@/validation/gmailForgotPassword";
import { onForgotSubmitService } from "./ForgotPasswordService";
import toast from "react-hot-toast";
import { useState } from "react";
import { ModalPrivacyPolicy } from "@/components/ModalPrivacyPolicy";
import ModalTermsOfService from "@/components/ModalTermsOfService";

export default function ForgotPassword() {
  
  const [isModalPrivacyPolicyOpen, setModalPrivacyPolicyOpen] = useState(false);
  const [isModalTermsOpen, setModalTermsOpen] = useState(false);

  function openModal(tittle: 'PrivacyPolicy' | 'ModalTerms'){
    if(tittle === "PrivacyPolicy"){
      setModalPrivacyPolicyOpen(true);
    }else if (tittle === "ModalTerms"){
      setModalTermsOpen(true);
    }
  }
  function closeModal(tittle: 'PrivacyPolicy' | 'ModalTerms'){
    if(tittle === "PrivacyPolicy"){
      setModalPrivacyPolicyOpen(false);
    }else if (tittle === "ModalTerms"){
      setModalTermsOpen(false);
    }
  }

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
        toast.error(result.message);
      } else {
        toast.success("Check your gmail");
        forgotPasswordReset();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1 className="text-blue-500 mb-5 text-center font-InterBold sm:text-3xl">FORGOT PASSWORD</h1>
      <form
        onSubmit={handleForgotSubmit(onForgotSubmit)}
        className="gap-0 w-full"
      >
        <h1 className="pt-2 pl-1">Forgot Password</h1>
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
      <div className="flex flex-col justify-center items-center mt-3 p-5 sm:flex-row sm:justify-between">
        <h1>© 2024 Skylight Lending, LLC</h1>
        <div className="cursor-pointer">
        <Link onClick={()=>openModal('PrivacyPolicy')}>Privacy Policy</Link> |{" "}
        <Link onPress={()=>openModal('ModalTerms')}>Terms of Service</Link>
        </div>
      </div>
        <ModalPrivacyPolicy 
        isOpen={isModalPrivacyPolicyOpen} 
        onClose={()=>closeModal('PrivacyPolicy')} 
        />
        <ModalTermsOfService 
          isOpen={isModalTermsOpen} 
          onClose={()=>closeModal('ModalTerms')} 
        />
    </>
  );
}
