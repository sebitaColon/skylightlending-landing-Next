"use client"
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Head from "@/components/head";
import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Portales from "@/components/Portales";
import Information from "@/components/Information";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <Head />
      <AboutUs />
      <Banner />
      <Portales />
      <Information />
      <Footer></Footer>
    </>
  );
}
