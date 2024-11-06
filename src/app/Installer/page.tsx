import Layout from "../../components/Layout";
import BackgrounImg from "../../assets/FondoFormInstaller.jpg";
import Image from "next/image";
import Installer from "./Installer";

function InstallerPage() {
  return (
    <Layout>
      <div className="w-full h-auto flex flex-col items-center justify-center relative">
        <Image
          src={BackgrounImg}
          alt=""
          className="absolute object-cover w-full h-full -z-10"
        />
        <div className="w-auto h-auto flex justify-center items-center p-0.5 mt-40 mb-20 rounded-3xl">
            <Installer/>
        </div>
      </div>
    </Layout>
  );
}

export default InstallerPage;
