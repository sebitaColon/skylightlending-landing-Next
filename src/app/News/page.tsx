import { Link } from "@nextui-org/link";
import Layout from "../../components/Layout";
import ImgOne from "../../assets/img-new.png";
import ImgTwo from "../../assets/new-2.jpg";
import Image from "next/image";
import BackgrounImg from "../../assets/FondoFormInstaller.jpg";

export default function News() {
  return (
    <Layout>
      <div className="h-full w-full relative">
        <Image
          src={BackgrounImg}
          alt=""
          className="absolute object-cover w-full h-full -z-10"
        />
        <div className="h-auto w-full pt-40 px-2 pb-5">
          <div className="w-auto h-auto pb-5 grid md:grid-cols-2 ">
            <div className="overflow-hidden w-full  md:w-auto">
              <Image
                src={ImgOne}
                alt=""
                className="w-full transition-all delay-200 hover:scale-110"
              />
            </div>
            <div className="bg-white h-full p-5 flex flex-col justify-center md:h-auto md:pl-5 dark:bg-black">
              <Link className="text-black dark:text-white">
                Announcement, Funding
                <li className="ml-2">5/28/19 </li>
              </Link>
              <Link className="text-3xl py-4 text-black dark:text-white">
                Skylight Lending Secures Large Credit Facility with M&T Bank to
                Fuel Expansion
              </Link>
              <Link className="dark:text-white" underline="always">Read More</Link>
            </div>
          </div>

          <div className="w-full h-auto pb-5 grid md:grid-cols-2">
            <div className="overflow-hidden w-full md:w-full">
              <Image
                src={ImgTwo}
                alt=""
                className=" w-full transition-all delay-200 hover:scale-110"
              />
            </div>
            <div className="bg-white h-full p-5 flex flex-col justify-center md:h-auto md:pl-5 dark:bg-black">
              <Link className="text-black dark:text-white">
                Partnership
                <li className="ml-2">5/28/19 </li>
              </Link>
              <Link className="text-3xl py-4 text-black dark:text-white">
                Skylight Lending and Fortress Power Partner to Offer Energy
                Storage with Financing
              </Link>
              <Link className="dark:text-white" underline="always">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
