import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import OurTrusts from "./OurTrusts";
import OurProjects from "./OurProjects";
import ForCommunication from "./ForCommunication";
import Footer from "../../components/Loyout/Footer";
import Header from "../../components/Loyout/Header";

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
