import ImgPanel from "../assets/panel.png";
import Image from "next/image";

function Information() {
  return (
    <div className="w-full h-auto text-foreground bg-background flex flex-col lg:flex-row lg:h-[50vh]">
      <div className="w-full h-full">
        <Image
          src={ImgPanel}
          alt="imagenPanel"
          className="w-full lg:h-full lg:object-cover"
        />
      </div>
      <div className="w-full h-full bg-transparent p-10 text-foreground bg-background lg:p-6">
        <p className="text-sm md:text-xl lg:text-xl">
          Using solar panels is beneficial because solar energy is a renewable
          resource that won&apos;t run out as long as the sun exists it reduces
          environmental impact by producing clean energy without polluting the
          air or water it offers significant cost savings over time despite the
          initial investment since the electricity generated is free and many
          governments provide incentives and rebates it promotes energy
          independence by reducing reliance on the grid and external suppliers
          solar panels require minimal maintenance which keeps costs low and
          homes with solar systems often have higher property values
          advancements in technology are making solar panels more efficient and
          affordable
        </p>
      </div>
    </div>
  );
}

export default Information;
