import Layout from "../../components/Layout";
import imgOurStory from "../../assets/img-OurStory.jpg"
import Image from "next/image";

function OurStory() {
    return (
      <Layout>
        <div className="w-full min-h-screen flex items-center flex-col">
        
        <Image
          className="w-full h-screen object-cover"
          src={imgOurStory}
          alt="imgBodyContatUs"
        />
        <div className=" text-white absolute text-center pt-60">
          <p className="pb-10 text-4xl text-blueFooter">Our Story</p>
          <h3 className="bg-gray-500 bg-opacity-50 w-full px-10 py-4 mt-10 md:mt-28 lg:mt-40] text-justify">
            Our company maintains a straight-forward vision, Let’s Enable the
            Change we want to see in the World. From there we have framed our
            company and partnerships to ensure that we are making loans
            affordable and easy to manage for both installers and borrowers
            alike. With a strong focus on making sure we protect installers and
            borrowers, we incorporate industry-leading risk mitigation controls
            into our operations while maintaining an easy-to-use, real-time
            application, verification, and approval process.
          </h3>
        </div>

        <div className="bg-amarillo w-full lg:h-[50vh] py-4 flex items-center justify-center flex-col text-justify">
          <p className="text-white text-lg px-10 lg:w-[90%] dark:text-black">
            Skylights are a symbol of the space you are in and the potential of
            what the space can be. With light pouring in, it changes the space
            and brings energy to the home and people in it. Our mission as a
            company embraces the Skylight symbolism as we want to help
            homeowners finance and afford the potential they see in their homes
            and the impact it can make.
            </p>
            <p className="text-white text-xl px-10 py-4 lg:w-[90%]  dark:text-black">Whether is integrating solar and
            batteries for a fully renewable energy powered home or seeing your
            dreams come to life with home improvement projects, we are
            passionate about homeowners embracing the change they want to see.
            We also understand that to make it a reality, installation companies
            and suppliers are critical. Our team combines finance and solar
            installation backgrounds and embrace the importance of keeping an
            open line of communication between ourselves and the companies that
            make the projects come to life.
          </p>
        </div>
      </div>
      </Layout>
    );
  }
  
  export default OurStory;
  