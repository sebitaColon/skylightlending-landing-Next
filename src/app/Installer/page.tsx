"use client"

import Layout from "../../components/Layout";
import { Input, Button } from "@nextui-org/react";
import BackgrounImg from "../../assets/FondoFormInstaller.jpg";
import DoneLogo from "../../assets/done.svg";
import DangerLogo from "../../assets/danger.svg";
import Image from "next/image";
import { useState } from "react";

function Installer() {
  // Estado para manejar el color del borde del input
  const [alerts, setAlerts] = useState(true);
  const [alertColor, setAlertColor] = useState("bg-white");
  const [BgAlertColorIcon, setBgAlertColorIcon] = useState("");
  const [alertHidden, setAlertHidden] = useState(true);

  function Validar() {
    setAlertHidden(true);
    setAlertColor("bg-white");
  }

  function searchError() {}

  // Función para manejar el evento onChange
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Lógica para cambiar el color según el valor
    if (value.length == 0) {
      setAlerts(false);
      setAlertColor("bg-red-400");
      setBgAlertColorIcon("bg-red-500");
      setAlertHidden(false);
    } else {
      setAlerts(true);
      setAlertColor("bg-green-400");
      setBgAlertColorIcon("bg-green-500");
    }
  };

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
                  : "There is 1 error on this page. Please correct it before moving on."}
              </p>
            </div>
            <Button
              color={alerts ? "success" : "danger"}
              className="text-white"
              onPress={alerts ? Validar : searchError}
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
                  isInvalid={!alerts}
                />
                <Input
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
                  isInvalid={!alerts}
                />
              </div>
              <div className="w-full">
                <Input
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
                  isInvalid={!alerts}
                />
              </div>
              <div className="w-full">
                <Input
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
                  isInvalid={!alerts}
                />
              </div>
              <div className="w-full">
                <Input
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
                  isInvalid={!alerts}
                />
              </div>
              <div className="w-full">
                <Input
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
