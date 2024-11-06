import imgAcme from "../../assets/logo-f-w.png";
import imgAcmeBlack from "../../assets/logo/logo-black.jpg";
import Image from "next/image";
export const AcmeLogo = () => (
  <div>
    <Image
      className="max-w-[134px] min-w-[134px] rounded-2xl sm:w-1/5 md:w-1/4 lg:w-1/5 dark:hidden shadow-xl"
      src={imgAcme}
      alt=""
      priority
    />
    <Image
      className="max-w-[134px] min-w-[134px] rounded-2xl sm:w-1/5 md:w-1/4 lg:w-1/5 hidden dark:block"
      src={imgAcmeBlack}
      alt=""
      priority
    />
  </div>
);
