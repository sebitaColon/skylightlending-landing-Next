
import imgAcme from "../../assets/logo-f-w.png";
import Image from "next/image";
export const AcmeLogo = () => (
  <Image
    className="max-w-[134px] min-w-[134px] rounded-2xl sm:w-1/5 md:w-1/4 lg:w-1/5"
    src={imgAcme}
    alt=""
    priority 
  />
);
