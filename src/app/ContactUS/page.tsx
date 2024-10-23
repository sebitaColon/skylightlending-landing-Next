import Layout from "../../components/Layout";
import imgBodyContactus from "../../assets/img-body-contactus.jpg"
import Image from "next/image";
import ButtonContacUS from "@/components/UI/ButtonContacUS";

function ContactPage() {
    return (
      <Layout>
        <div className="w-full h-full max-h-screen flex items-center justify-center">
        <Image className="w-full h-[89vh] object-cover" src={imgBodyContactus} alt="imgBodyContatUs" />
        <div className=" text-white absolute text-center p-10">
          <p className="text-3xl md:text-5xl lg:text-5xl mb-10">Contact Us</p>
          <p className="lg:text-xl max-w-[48rem] mb-10 whitespace-pre-wrap">
            We are always looking to get in touch with those wanting to learn
            more about what we do at Skylight. Get in touch with us via the link
            below!
          </p>
          <ButtonContacUS/>
        </div>
      </div>
      </Layout>
    );
  }
  
  export default ContactPage;
