import imgPortada from "../assets/portada.png";
import Image from "next/image";

export default function Head() {
  return (
    <div className="relative h-screen w-full">
      <Image
        className="absolute inset-0 object-cover w-full h-full"
        src={imgPortada}
        alt="Portada"
      />

      <div className="flex justify-center items-center bg-blue-600 opacity-50 absolute inset-0 z-10"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center">
        <h2 className="text-white font-lato text-3xl">
          Environmentally Focused.
          <br />
          Purposeful Lending.
        </h2>
      </div>
    </div>
  );
}
