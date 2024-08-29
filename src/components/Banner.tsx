import ImgBanner from "../assets/pexels-photo-8853502.jpeg";
import Logo from "../assets/logo_big.png";
import style  from "../styles/App.module.css"
import Image from "next/image";

function Banner() {
  return (
    <div className="w-full h-[30vh] bg-background relative sm:h-[40vh] lg:h-[50vh]">
      <div className={`${style.banner} absolute bg-background -bottom-1 w-full h-[30%] z-10`}>
        {" "}
      </div>
      <div className={`${style.banner} absolute rotate-180 bg-background -top-0 w-full h-[30%] z-10`} >
        {" "}
      </div>
      <Image className="h-full w-full object-cover" src={ImgBanner} alt="" />
      <div className="w-full h-full absolute top-0 bg-yellow-400 opacity-40"></div>
      <div className="w-full h-full absolute top-0 flex justify-center items-center flex-col">
        <Image
          src={Logo}
          alt=""
          className="h-[30%] w-auto sm:h-[40%] lg:h-[50%]"
        />
        <h1 className="text-2xl text-white mb-2 sm:text-4xl lg:text-5xl">
          Skylight Lending
        </h1>
      </div>
    </div>
  );
}

export default Banner;
