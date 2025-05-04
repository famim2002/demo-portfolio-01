import React from "react";
import { GoDownload } from "react-icons/go";    
import { Link } from "react-router"
import SocialBar from "./SocialBar"





const AboutMe = () => {
  return (
    <>
      <section
        className="px-3 pb-[100px] pt-[100px]
                   lg:pt-[220px] overflow-hidden "
      >
        <div className="container">
          <div
            className="flex  flex-col 
                       lg:flex-row lg:justify-between 
                       xl:px-[100px] xl:py-[100px] bg-white rounded-2xl"
          >
            <h2
              className="text-[60px] font-semibold text-primary  text-center
            mb-[70px]  bg-light_brand lg:hidden"
            >
              about me
            </h2>
            <div
              className="hidden  
                         lg:w-1/2
                         lg:flex"
            >
              <img className="w-2/3" src="/about_img.png" alt="model_image" />
            </div>

            <div className="">
              <SocialBar />
            </div>

            <div className="flex justify- center lg:justify-end  lg:w-1/2">
              <div className=" flex  flex-col justify-center  ">
                <h2 className="text-[38px] font-semibold text-primary  lg:max-w-lg">
                  I am Professional User Experience Designer
                </h2>
                <p className="text-[18px] text-secondary font-medium lg:max-w-lg pt-[25px]">
                  I design and develop services for customers specializing
                  creating stylish, modern websites, web services and online
                  stores. My passion is to design digital user experiences.
                </p>
                <p className="text-[18px] text-secondary font-medium max-w-lg pt-[25px] pb-[30px]">
                  I design and develop services for customers specializing
                  creating stylish, modern websites, web services.
                </p>
                <div className="flex gap-2">
                  <button className="btn_dark">My Project</button>
                  <button className="btn_light flex items-center gap-4">
                    <GoDownload /> Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
