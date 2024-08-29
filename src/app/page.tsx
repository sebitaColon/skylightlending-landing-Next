"use client"
import Head from "@/components/head";
import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Portales from "@/components/Portales";
import Information from "@/components/Information";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head />
      <AboutUs />
      <Banner />
      <Portales />
      <Information />
    </Layout>
  );
}
