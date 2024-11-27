"use client";
import React from "react";
import { Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import schema from "@/validation/installerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "emailjs-com";

export default function Installer() {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  emailjs.init("gcS1onDpwU1q5DDDP");

  const onSubmit = async (data: any) => {
    try {
      const result = await emailjs.send("service_6s6jz0t", "template_iatawok", {
        to_name: data.name,
        to_lastName: data.lastName,
        from_name: data.from_name,
        companyName: data.companyName,
        contactNumber: data.contactNumber,
        email: data.email,
        website: data.website,
        references: data.references,
        message: "I look forward to your response",
      });
      toast.success("Form submitted successfully.");
      reset();
    } catch (error: any) {
      toast.error("Form not submitted.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-5 rounded-3xl lg:min-w-[800px] dark:bg-black"
      >
        <h1 className="font-InterBold text-center text-black text-md sm:text-3xl pb-10 mb-5 border-b-1">
          <span className="text-blue-600 pr-1">Skylight Lending New</span>
          <span className="dark:text-white">Dealer Application</span>
        </h1>
        <div className="w-full grid sm:grid-cols-2  sm:grid-rows-4 gap-x-5 dark:bg-black">
          <div className="h-auto flex flex-col">
            <Input
              {...register("name")}
              radius="sm"
              variant="underlined"
              size="lg"
              label="Your Name "
              placeholder="First Name"
              className="w-full h-auto px-2 text-black"
              onBlur={() => trigger("name")}
            />
            {errors.name && (
              <p className="text-red-500 h-auto max-w-[350px] text-sm mt-1 px-2">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="h-auto flex flex-col">
            <Input
              {...register("lastName")}
              radius="sm"
              variant="underlined"
              size="lg"
              label="Last Name "
              placeholder="Last Name"
              className="w-full h-auto px-2 text-black"
              onBlur={() => trigger("lastName")}
            />
            {errors.lastName && (
              <p className="text-red-500 h-auto  max-w-[350px] text-sm mt-1 px-2">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div className="w-full h-auto flex flex-col">
            <Input
              {...register("companyName")}
              radius="sm"
              variant="underlined"
              size="lg"
              label="Company Name "
              placeholder="SkyLight"
              className="w-full h-auto px-2"
              onBlur={() => trigger("companyName")}
            />
            {errors.companyName && (
              <p className="text-red-500 h-auto max-w-[350px] text-sm mt-1 px-2">
                {errors.companyName.message}
              </p>
            )}
          </div>

          <div className="w-full h-auto flex flex-col">
            <Input
              {...register("contactNumber")}
              radius="sm"
              variant="underlined"
              size="lg"
              label="Contact Number "
              placeholder="(000) 000-0000"
              className="w-full h-auto px-2"
              onBlur={() => trigger("contactNumber")}
            />
            {errors.contactNumber && (
              <p className="text-red-500 h-auto max-w-[350px] text-sm mt-1 px-2">
                {errors.contactNumber.message}
              </p>
            )}
          </div>

          <div className="w-full h-auto flex flex-col">
            <Input
              {...register("email")}
              radius="sm"
              variant="underlined"
              size="lg"
              label="Email"
              placeholder="ex: myname@example.com"
              className="w-full h-auto px-2"
              onBlur={() => trigger("email")}
            />
            {errors.email && (
              <p className="text-red-500 max-w-[350px] text-sm mt-1 px-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="w-full h-auto flex flex-col">
            <Input
              {...register("website")}
              radius="sm"
              variant="underlined"
              size="lg"
              type="url"
              label="Company Website "
              placeholder="www.example.com"
              className="w-full h-auto px-2"
            />
          </div>

          <div className="w-full h-auto flex flex-col">
            <Input
              {...register("references")}
              radius="sm"
              variant="underlined"
              size="lg"
              type="text"
              label="References"
              placeholder="(i.e. Account Manager, Contacts, etc.)"
              className="w-full h-auto px-2"
            />
          </div>
        </div>

        <div className="mt-10 flex border-t-1 p-5 w-full items-end justify-end">
          <Button type="submit" radius="sm" color="primary">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
