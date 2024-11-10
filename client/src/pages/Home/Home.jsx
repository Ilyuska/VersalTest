import { useEffect } from "react";
import AboutUs from "./AboutUs/AboutUs";
import OurServices from "./OurServices/OurServices";
import OurTrusts from "./OurTrusts/OurTrusts";
import OurProjects from "./OurProjects/OurProjects";
import ForCommunication from "./ForCommunication";

const Home = ({ setIsMainPage }) => {
  useEffect(() => {
    setIsMainPage(true);
  }, [setIsMainPage]);

  return (
    <>
      <div className="px-[7%] ">
        <AboutUs />
        <OurServices />
        <OurProjects />
        <OurTrusts />
      </div>
      <ForCommunication />
    </>
  );
};

export default Home;
