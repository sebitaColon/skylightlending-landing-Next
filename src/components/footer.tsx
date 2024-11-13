"use client"
import Image from "next/image";
import Acordion from "./UI/acordion-footer";
import logoFooter from "../assets/logo-footer.png";
import faceImg from "../assets/face.svg";
import instaImg from "../assets/instagram.svg";
import linkedinImg from "../assets/linkedin.svg";
import bbbLogo from "../assets/bbb.png";

export default function Footer() {
  return (
    <footer className="p-6 dark text-foreground white flex flex-col items-center w-full h-full bg-gradient-to-b from-blueFooter to-black">
      <div className="w-[90%]">
        <div className="flex justify-center">
          <Image className="max-w-48" src={logoFooter} alt="logo-footer" />
        </div>
        <div className="w-full my-4">
          <ul className="flex flex-col items-center sm:flex-row gap-2 justify-center md:justify-evenly">
            <li>
              <a href="#"></a>About Us
            </li>
            <li>
              <a href="#"></a>Press
            </li>
            <li>
              <a href="#"></a>Events
            </li>
            <li>
              <a href="#"></a>Solar Snacks(Blog)
            </li>
            <li>
              <a href="#"></a>Contact Us
            </li>
          </ul>
        </div>
        <Acordion />
        <div className="flex flex-col items-center w-full h-full">
          <h3 className="">Social Links</h3>
          <div className="flex w-full h-16 justify-evenly lg:px-20">
            <Image className="max-w-10" src={faceImg} alt="face" />
            <Image className="max-w-10" src={instaImg} alt="insta" />
            <Image className="max-w-10" src={linkedinImg} alt="face" />
          </div>
        </div>

        <hr className="w-full h-1 my-2 border-gray-500"></hr>

        <p>
          If you are having difficulty viewing the content on this website or
          navigating the site, please call our Customer Service Team toll-free
          at (866) 471-6595 or email our team at info@skylightlending.com and we
          will be happy to assist you.
        </p>

        <hr className="w-full h-1 my-2 border-gray-500"></hr>

        <div className="flex w-full h-16 justify-evenly md:justify-center">
          <Image
            className="w-auto h-16 rounded-xl"
            src={bbbLogo}
            alt="bbblogo"
          />
          <div className="flex mx-2 w-full justify-evenly items-center md:w-auto">
            <a className="md:mr-2" href="">
              Teams of Use
            </a>
            <a href="">Privacy Policy</a>
          </div>
        </div>

        <hr className="w-full h-1 my-2 border-gray-500"></hr>

        <p>
          Disclosures: Eligibility is subject to completion of an application
          and verification of home ownership, occupancy, title, income,
          employment, credit, and underwriting requirements. Loan program terms
          and conditions will depend on underwriting and consumer credit
          characteristics. Eligibility for Installer Partners are subject to the
          completion of an application and are subject to our underwriting
          requirements. Any descriptions or items are not a commitment to lend
          or offer of credit.
        </p>

        <hr className="w-full h-1 my-2 border-gray-500"></hr>

        <div className="flex flex-col items-center w-full md:flex-row md:justify-evenly">
          <p>2024 SKYLIGHT LENDING, ALL RIGHTS RESREVED</p>
          <p>800 Town & Country Blvd, Suite 500, Houston, TX 77024</p>
        </div>
      </div>
    </footer>
  );
}
