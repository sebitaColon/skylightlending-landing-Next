"use client";

import Layout from "../../components/Layout";
import { Input, Button } from "@nextui-org/react";
import BackgrounImg from "../../assets/FondoFormInstaller.jpg";
import Image from "next/image";
import { useState } from "react";
import schema from "@/validation/installerSchema";
import toast, { Toaster } from "react-hot-toast";

function Installer() {
  // Estado para manejar el color del borde del input y los errores
  const [alerts, setAlerts] = useState(true);

  // Valores iniciales del formulario
  const initialFormValues = {
    name: "",
    lastName: "",
    companyName: "",
    contactNumber: "",
    email: "",
    website: "",
    references: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // Función para vaciar los campos del formulario
  const handleReset = () => {
    setFormValues(initialFormValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validar los valores del formulario
      await schema.validate(formValues, { abortEarly: false });
      // Si la validación pasa
      toast.success("Well done! All errors are fixed.");
      handleReset();
      setAlerts(true);

      // Aquí puedes manejar el envío de datos, si es necesario
    } catch (e) {
      toast.error(
        "There error on this page. Please correct it before moving on.."
      );
      setAlerts(false);
    }
  };

  // Contar los errores al renderizar
  return (
    <Layout>
      <div className="w-full h-auto flex flex-col items-center justify-center relative">
        <Image
          src={BackgrounImg}
          alt=""
          className="absolute object-cover w-full h-full -z-10"
        />
        <Toaster position="bottom-center" />
        <div
          className={`w-auto h-auto p-0.5 mt-40 mb-20 rounded-3xl transition-all duration-500 ease-in-out`}
        >
          <form onSubmit={handleSubmit} className="bg-white p-5 rounded-3xl ">
            <h1 className="font-InterBold text-center text-black text-md sm:text-3xl pb-10 mb-5 border-b-1">
              <span className="text-blue-600 pr-1">Skylight Lending New</span>
              Dealer Application
            </h1>
            <div className="w-full grid sm:grid-cols-2 sm:grid-rows-4 gap-5 bg-white">
              <div className="h-auto flex items-end">
                <Input
                  name="name"
                  radius="sm"
                  variant="underlined"
                  color={alerts ? "success" : "danger"}
                  size="lg"
                  value={formValues["name"]}
                  onChange={handleChange}
                  isRequired
                  type="text"
                  label="Your Name "
                  labelPlacement="outside"
                  placeholder="First Name"
                  className="w-full h-auto px-2 text-black"
                  isInvalid={!alerts}
                />
                <Input
                  name="lastName"
                  radius="sm"
                  variant="underlined"
                  color={alerts ? "success" : "danger"}
                  size="lg"
                  value={formValues["lastName"]}
                  onChange={handleChange}
                  isRequired
                  type="text"
                  label="Last name "
                  labelPlacement="outside"
                  placeholder="First Name"
                  className="w-full h-auto px-2 text-black"
                  isInvalid={!alerts}
                />
              </div>
              <div className="w-full">
                <Input
                  name="companyName"
                  radius="sm"
                  variant="underlined"
                  color={alerts ? "success" : "danger"}
                  size="lg"
                  onChange={handleChange}
                  value={formValues["companyName"]}
                  isRequired
                  type="text"
                  label="Company Name "
                  placeholder="SkyLight"
                  labelPlacement="outside"
                  className="w-full h-auto px-2"
                  isInvalid={!alerts}
                />
              </div>
              <div className="w-full">
                <Input
                  name="contactNumber"
                  radius="sm"
                  variant="underlined"
                  color={alerts ? "success" : "danger"}
                  size="lg"
                  onChange={handleChange}
                  value={formValues["contactNumber"]}
                  isRequired
                  type="number"
                  label="Contact Number "
                  placeholder="(000) 000-0000"
                  labelPlacement="outside"
                  className="w-full h-auto px-2"
                  isInvalid={!alerts}
                />
              </div>
              <div className="w-full">
                <Input
                  name="email"
                  radius="sm"
                  variant="underlined"
                  color={alerts ? "success" : "danger"}
                  onChange={handleChange}
                  value={formValues["email"]}
                  size="lg"
                  isRequired
                  type="email"
                  label="E-mail "
                  placeholder="ex: myname@example.com"
                  labelPlacement="outside"
                  className="w-full h-auto px-2"
                  isInvalid={!alerts}
                />
              </div>
              <div className="w-full">
                <Input
                  name="website"
                  radius="sm"
                  variant="underlined"
                  color="default"
                  size="lg"
                  onChange={handleChange}
                  value={formValues["website"]}
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">
                        https://
                      </span>
                    </div>
                  }
                  type="url"
                  label="Company Website "
                  placeholder="www.example.com"
                  labelPlacement="outside"
                  className="w-full h-auto px-2 sm:mb-4 lg:mb-0"
                />
              </div>
              <div className="h-0"></div>
              <div className="w-full">
                <Input
                  name="references"
                  radius="sm"
                  variant="underlined"
                  color="default"
                  size="lg"
                  onChange={handleChange}
                  value={formValues["references"]}
                  type="text"
                  label="References (i.e. Account Manager, Contacts, etc.) "
                  placeholder=" "
                  labelPlacement="outside"
                  className="w-full h-auto px-2"
                />
              </div>
              <div className=""></div>
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
