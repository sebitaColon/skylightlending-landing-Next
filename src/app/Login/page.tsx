import Layout from "../../components/Layout";
import BackgrounImg from "../../assets/FondoFormInstaller.jpg";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <Layout>
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
          <LoginForm/>
        </div>
      </div>
    </Layout>
  );
}
