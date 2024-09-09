"use client";

import Layout from "../../components/Layout";
import { Input, Button } from "@nextui-org/react";
import BackgrounImg from "../../assets/FondoFormInstaller.jpg";
import DoneLogo from "../../assets/done.svg";
import DangerLogo from "../../assets/danger.svg";
import Image from "next/image";
import { useState } from "react";

function Installer() {
  // Estado para manejar el color del borde del input y los errores
  const [alerts, setAlerts] = useState(true);
  const [alertColor, setAlertColor] = useState("bg-white");
  const [BgAlertColorIcon, setBgAlertColorIcon] = useState("");
  const [alertHidden, setAlertHidden] = useState(true);

  // Estados para los errores de los campos
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [websiteError, setWebsiteError] = useState("");

  function validar() {
    setAlertHidden(true);
    setAlertColor("bg-white");
    setAlerts(true); // Asumir que la validación pasó
  }

  function searchError() {
    // Contar errores
    const errors = [nameError, lastNameError, companyNameError, contactNumberError, emailError, websiteError];
    const errorCount = errors.filter(error => error).length;

    if (errorCount > 0) {
      setAlertHidden(false);
      setAlertColor("bg-red-400");
      setBgAlertColorIcon("bg-red-500");
      setAlerts(false);
    } else {
      setAlertColor("bg-green-400");
      setBgAlertColorIcon("bg-green-500");
      setAlerts(true);
    }
  }
  // Función para manejar el evento onChange
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let errorMessage = "";
    if (value.length === 0) {
      errorMessage = "This field is required.";
    } else if (name === "contactNumber" && isNaN(Number(value))) {
      errorMessage = "Contact number must be a number.";
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      errorMessage = "Invalid email address.";
    }
    switch (name) {
      case "name":
        setNameError(errorMessage);
        break;
      case "lastName":
        setLastNameError(errorMessage);
        break;
      case "companyName":
        setCompanyNameError(errorMessage);
        break;
      case "contactNumber":
        setContactNumberError(errorMessage);
        break;
      case "email":
        setEmailError(errorMessage);
        break;
      case "website":
        setWebsiteError(errorMessage);
        break;
      default:
        break;
    }

    searchError(); // Llama a searchError para actualizar el estado del alert
  };

  // Contar los errores al renderizar
  const errorCount = [nameError, lastNameError, companyNameError, contactNumberError, emailError, websiteError].filter(error => error).length;

  return (
    <Layout>
      <div className="w-full h-auto flex flex-col items-center justify-center relative">
        <Image
          src={BackgrounImg}
          alt=""
          className="absolute object-cover w-full h-full -z-10"
        />
        <div
          className={`w-auto h-auto p-0.5 ${alertColor} mt-40 mb-20 rounded-3xl transition-all duration-500 ease-in-out`}
        >
          <div
            className={`${alertColor} w-full ${
              alertHidden ? "h-0" : "h-16"
            } flex overflow-hidden items-center justify-evenly rounded-3xl transition-all duration-500 ease-in-out `}
          >
            <div className="flex items-center text-black">
              <div className={`${BgAlertColorIcon} rounded-full h-auto mr-2`}>
                <img
                  className="w-8  h-auto"
                  src={alerts ? DoneLogo : DangerLogo}
                  alt=""
                />
              </div>
              <p>
                {alerts
                  ? "Well done! All errors are fixed."
                  : `There ${errorCount === 1 ? "is" : "are"} ${errorCount} ${errorCount === 1 ? "error" : "errors"} on this page. Please correct it before moving on.`}
              </p>
            </div>
            <Button
              color={alerts ? "success" : "danger"}
              className="text-white"
              onPress={alerts ? validar : searchError}
            >
              {alerts ? "Done" : "See Errors"}
            </Button>
          </div>
          <form action="" className="bg-white p-5 rounded-3xl ">
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
                  onChange={handleInputChange}
                  size="lg"
                  isRequired
                  type="text"
                  label="Your Name "
                  labelPlacement="outside"
                  placeholder="First Name"
                  className="w-full h-auto px-2 text-black"
                  isInvalid={!alerts && !!nameError}
                />
                <Input
                  name="lastName"
                  radius="sm"
                  variant="underlined"
                  color={alerts ? "success" : "danger"}
                  onChange={handleInputChange}
                  size="lg"
                  isRequired
                  type="text"
                  label="Last name "
                  labelPlacement="outside"
                  placeholder="First Name"
                  className="w-full h-auto px-2 text-black"
                  isInvalid={!alerts && !!lastNameError}
                />
              </div>
              <div className="w-full">
                <Input
                  name="companyName"
                  radius="sm"
                  variant="underlined"
                  color={alerts ? "success" : "danger"}
                  onChange={handleInputChange}
                  size="lg"
                  isRequired
                  type="text"
                  label="Company Name "
                  placeholder="SkyLight"
                  labelPlacement="outside"
                  className="w-full h-auto px-2"
                  isInvalid={!alerts && !!companyNameError}
                />
              </div>
              <div className="w-full">
                <Input
                  name="contactNumber"
                  radius="sm"
                  variant="underlined"
                  color={alerts ? "success" : "danger"}
                  onChange={handleInputChange}
                  size="lg"
                  isRequired
                  type="number"
                  label="Contact Number "
                  placeholder="(000) 000-0000"
                  labelPlacement="outside"
                  className="w-full h-auto px-2"
                  isInvalid={!alerts && !!contactNumberError}
                />
              </div>
              <div className="w-full">
                <Input
                  name="email"
                  radius="sm"
                  variant="underlined"
                  color={alerts ? "success" : "danger"}
                  onChange={handleInputChange}
                  size="lg"
                  isRequired
                  type="email"
                  label="E-mail "
                  placeholder="ex: myname@example.com"
                  labelPlacement="outside"
                  className="w-full h-auto px-2"
                  isInvalid={!alerts && !!emailError}
                />
              </div>
              <div className="w-full">
                <Input
                  name="website"
                  radius="sm"
                  variant="underlined"
                  color="default"
                  size="lg"
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
                  className="w-full h-auto px-2"
                  isInvalid={!alerts && !!websiteError}
                />
              </div>
              <div className=""></div>
              <div className="w-full">
                <Input
                  radius="sm"
                  variant="underlined"
                  color="default"
                  size="lg"
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
              <Button radius="sm" color="primary">
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
