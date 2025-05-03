import React from "react";
import Banner from "../components/home/Banner";
import AboutMe from "../components/home/AboutMe";
import ProcessMy from "../components/home/ProcessMy";
import PortfolioMy from "../components/home/PortfolioMy";
import Discuss from "../components/home/Discuss";
import ServicesMy from "../components/home/ServicesMy";
import BlogMy from "../components/home/BlogMy";
import Clients from "../components/home/Clients"
import Testimonial from "../components/home/Testimonial"

const Home = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <ProcessMy />
      <PortfolioMy />
      <Discuss />
      <BlogMy />
      <ServicesMy />
      <Clients />
      <Testimonial/>
    </>
  );
};

export default Home;
