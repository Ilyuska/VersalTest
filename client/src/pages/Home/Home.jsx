import AboutUs from "./AboutUs/AboutUs";
import OurServices from "./OurServices/OurServices";
import OurTrusts from "./OurTrusts/OurTrusts";
import OurProjects from "./OurProjects/OurProjects";
import ForCommunication from "./ForCommunication";
import Footer from "@/components/Loyout/Footer";
import Header from "@/components/Loyout/Header";

const Home = () => {
  return (
    <>
      <Header isMainPage={true} />
      <div className="px-[7%] ">
        <AboutUs />
        <OurServices />
        <OurProjects />
        <OurTrusts />
      </div>
      <ForCommunication />
      <Footer />
    </>
  );
};

export default Home;
