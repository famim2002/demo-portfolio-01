import React from "react";
import BannerCards from "./BannerCards";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="container">
          <div
            className="flex flex-col justify-between 
                       lg:flex-row  "
          >
            <div
              className=" pt-[70px]
                          md:pt-[178px] "
            >
              <h1
                className="text-[42px] font-semibold text-primary leading-[54px] max-w-lg 
                           sm:text-[54px] 
                           md:text-[72px] md:leading-[84px]"
              >
                Hello, I’m Danila Dani
              </h1>
              <p className="text-[18px] font-regular text-secondary  max-w-2xl py-[28px]">
                I'm a Freelance UI/UX Designer and Developer based in London,
                England. I strives to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </p>
              <button className="btn_dark">Say Hello!</button>

              <div
                className="flex flex-col lg:flex-row gap-1 pt-[60px]
                           lg:pt-[80px]
                           xl:pt-[160px] "
              >
                <BannerCards title={"15 Y."} descrip={"experience"} />
                <BannerCards title={"250+"} descrip={"projects completed"} />
                <BannerCards title={"58"} descrip={"happy clients"} />
              </div>
            </div>
            <div
              className="flex justify-center lg:justify-end items-center pt-[20px] 
                         md:pt-[86px] "
            >
              <img className="rounded-2xl"  src="/banner_img.png" alt="model_image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
