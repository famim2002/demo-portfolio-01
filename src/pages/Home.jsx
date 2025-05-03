import React from "react";
import Banner from "../components/home/Banner"
import AboutMe from "../components/home/AboutMe"
import ProcessMy from "../components/home/ProcessMy"
import PortfolioMy from "../components/home/PortfolioMy"
import Discuss from "../components/home/Discuss"
import ServicesMy from "../components/home/ServicesMy"
import BlogMy from "../components/home/BlogMy"


const Home = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <ProcessMy />
      <PortfolioMy />
      <Discuss />
      <ServicesMy />
       <BlogMy/>
    </>
  );
};

export default Home;


