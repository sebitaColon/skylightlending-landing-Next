import { Link } from "@nextui-org/link";
import AccordionComponent from "./UI/Accordion";
import style from "../styles/App.module.css"

function AboutUs() {
  return (
    <div className="relative h-auto w-full  bg-background text-foreground">
      <div className={`z-10 ${style.poligono} w-full h-[100vh] bg-background absolute bottom-[100%]`}></div>
      <div className="w-full bg-background h-screen grid grid-rows-2  md:grid-rows-none md:grid-cols-2 md:h-[70vh] ">
        <div className="h-auto w-full bg-background flex justify-center items-center flex-col p-10">
          <h1 className="text-start text-xl w-full mb-2 sm:text-3xl lg:text-4xl ">
            Who are we?
          </h1>
          <p className="w-full h-auto text-tiny sm:h-2/4 sm:text-lg ">
            We are not just another financial lending company providing loans.
            Our mission and our business is aimed at helping consumers, via
            strong installer relationships, that want to make a statement with
            their homes. Whether that statement is a new renovation or going
            renewable with solar panels, we are here to provide the support and
            financing to make the dream a reality. <br></br>
            Embrace the changemaker mindset.{" "}
            <Link className="text-tiny  sm:text-lg" href="#">
              You’ve got this.
            </Link>
          </p>
        </div>

        <div className="h-full w-full px-10 bg-background flex justify-start items-center flex-col md:justify-center md:p-5">
          <h1 className="text-xl w-full mb-2 sm:text-3xl  lg:text-4xl lg:w-full">
            How we can help you?
          </h1>
          <div className="w-full h-2/4 p-0 lg:w-full">
            <AccordionComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
