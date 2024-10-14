import Layout from "../../components/Layout";
import { Button } from "@nextui-org/react";
import imgBodyContactus from "../../assets/img-body-contactus.jpg"
import Image from "next/image";

function HomePage() {
    return (
      <Layout>
        <div className="w-full min-h-screen flex items-center justify-center">
        <Image className="w-full h-screen object-cover" src={imgBodyContactus} alt="imgBodyContatUs" />
        <div className=" text-white absolute text-center p-10">
          <p className="lg:text-xl">Contact Us</p>
          <p className="lg:text-xl">
            We are always looking to get in touch with those wanting to learn
            more about what we do at Skylight. Get in touch with us via the link
            below!
          </p>
          <Button className="my-4 p-8 text-xl rounded-2xl">Get In Touch</Button>
        </div>
      </div>
      </Layout>
    );
  }
  
  export default HomePage;
  