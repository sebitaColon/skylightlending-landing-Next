import { Button } from "@nextui-org/react";

function Portales() {
  return (
    <div className="w-full h-[30vh]  bg-background text-foreground flex justify-between py-5 px-10 items-center flex-col sm:flex-row ">
      <Button
        radius="full"
        variant="shadow"
        className="bg-yellow-400 m-1 hover:bg-yellow-200 sm:size-1/5 md:text-lg md:size-1/4 lg:size-1/3 lg:m-3 lg:text-2xl"
      >
        Borrower
      </Button>
      <Button
        radius="full"
        variant="shadow"
        className="bg-yellow-400 m-1 hover:bg-yellow-200 sm:size-1/5 md:text-lg md:size-1/4 lg:size-1/3 lg:m-3 lg:text-2xl"
      >
        Installer
      </Button>
      <Button
        radius="full"
        variant="shadow"
        className="bg-yellow-400 m-1 hover:bg-yellow-200 sm:size-1/5 md:text-lg md:size-1/4 lg:size-1/3 lg:m-3 lg:text-2xl"
      >
        Supplier
      </Button>
      <Button
        radius="full"
        variant="shadow"
        className="bg-yellow-400 m-1 hover:bg-yellow-200 sm:size-1/5 md:text-lg md:size-1/4 lg:size-1/3 lg:m-3 lg:text-2xl"
      >
        Salesperson
      </Button>
    </div>
  );
}

export default Portales;
