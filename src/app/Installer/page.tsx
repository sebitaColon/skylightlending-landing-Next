"use client";

import Layout from "../../components/Layout";
import { Input, Button } from "@nextui-org/react";
import BackgrounImg from "../../assets/FondoFormInstaller.jpg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function Installer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    toast.success("Formulario enviado correctamente.");
    console.log(data);
    reset();
  };

  return (
    <Layout>
      <div className="w-full h-auto flex flex-col items-center justify-center relative">
        <Image
          src={BackgrounImg}
          alt=""
          className="absolute object-cover w-full h-full -z-10"
        />
        <Toaster position="bottom-center" />
        <div className="w-auto h-auto p-0.5 mt-40 mb-20 rounded-3xl transition-all duration-500 ease-in-out">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-5 rounded-3xl lg:min-w-[800px] "
          >
            <h1 className="font-InterBold text-center text-black text-md sm:text-3xl pb-10 mb-5 border-b-1">
              <span className="text-blue-600 pr-1">Skylight Lending New</span>
              Dealer Application
            </h1>
            <div className="w-full grid sm:grid-cols-2  sm:grid-rows-4 gap-x-5  bg-white">
              <div className="h-auto flex flex-col">
                <Input
                  {...register("name", {
                    required: "El nombre es obligatorio",
                    minLength: {
                      value: 2,
                      message: "El nombre debe tener al menos 2 caracteres",
                    },
                  })}
                  radius="sm"
                  variant="underlined"
                  size="lg"
                  label="Your Name "
                  placeholder="First Name"
                  className="w-full h-auto px-2 text-black"
                  onBlur={() => trigger("name")} // Valida cuando el campo pierde el foco
                />
                -
                {errors.name && (
                  <p className="text-red-500 h-auto max-w-[350px] text-sm mt-1 px-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="h-auto flex flex-col">
                <Input
                  {...register("lastName", {
                    required: "El apellido es obligatorio",
                    minLength: {
                      value: 2,
                      message: "El apellido debe tener al menos 2 caracteres",
                    },
                  })}
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
                  {...register("companyName", {
                    required: "El nombre de la empresa es obligatorio",
                    minLength: {
                      value: 4,
                      message:
                        "El nombre de la empresa debe tener al menos 4 caracteres",
                    },
                  })}
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
                  {...register("contactNumber", {
                    required: "El número de contacto es obligatorio",
                    minLength: {
                      value: 10,
                      message:
                        "El número de contacto debe tener al menos 10 dígitos",
                    },
                  })}
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
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Ingrese un correo válido",
                    },
                  })}
                  radius="sm"
                  variant="underlined"
                  size="lg"
                  label="E-mail "
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
                  label="References (i.e. Account Manager, Contacts, etc.) "
                  className="w-full h-auto px-2"
                />
              </div>
            </div>

            <div className="mt-10 flex border-t-1 p-5 w-full items-end justify-end">
              <Button
                className="mr-2"
                radius="sm"
                color="default"
                variant="ghost"
              >
                Save
              </Button>
              <Button type="submit" radius="sm" color="primary">
                Next
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Installer;
