import React from "react";
import ServicesCard from "./ServicesCard";

const ServicesMy = () => {
  return (
    <section className="px-3  py-[50px] md:py-[150px] bg-[#F0F1F3]">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col justify-center">
            <h2 className="text-[48px] font-semibold text-primary  lg:max-w-lg">
              What I Do?
            </h2>
            <p className="text-[18px] text-secondary font-medium lg:max-w-md pt-[35px] pb-[10 px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </p>
            <p className="text-[18px] text-secondary font-medium max-w-lg pt-[15px] pb-[30px]">
              Suspendis imperdiet, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nulla purus arcu, varius eget velit non.
            </p>
            <button className="btn_dark">Say hello!</button>
          </div>
          <div className="flex flex-col gap-10">
            <ServicesCard
              title="User Experience (UX)"
              descript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
                    arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
                    eget lorem ac vestibulum."
            />
            <ServicesCard
              title="User Interface (UI)"
              descript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
                      arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
                      eget lorem ac vestibulum."
            />
            <ServicesCard
              title="Web Development"
              descript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
                    arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
                    eget lorem ac vestibulum."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesMy;
