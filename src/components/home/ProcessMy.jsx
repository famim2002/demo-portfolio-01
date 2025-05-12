import React from "react";
import ProcessCard from "./ProcessCard";

import { FaCalendarAlt } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { FaLaptop } from "react-icons/fa";

{/* <FaCalendarAlt />
<IoAnalyticsSharp />
<LuPencil />
<FaLaptop /> */}

const ProcessMy = () => {
  return (
    <>
      <section
        className="px-5 py-[120px] bg-[#F0F1F3] 
      lg:py-[180px]"
      >
        <div className="container">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <div className="flex flex-col justify-center">
              <h2 className="text-[48px] font-semibold text-primary  lg:max-w-lg">
                Work Process
              </h2>
              <p className="text-[18px] text-secondary font-medium lg:max-w-md pt-[35px] pb-[10 px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum.
              </p>
              <p className="text-[18px] text-secondary font-medium max-w-lg pt-[15px] pb-[30px]">
                Suspendis imperdiet, Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nulla purus arcu, varius eget velit non.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 justify-center sm:flex-row ">
                <ProcessCard
                  title="1. Research"
                  descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                  icon={
                    <FaCalendarAlt className="text-[60px] text-brand mb-4 p-4 bg-light_brand rounded-xl transition-all group-hover:bg-brand  group-hover:text-white  " />
                  }
                />

                <ProcessCard
                  title="2. Analyze"
                  descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                  icon={
                    <IoAnalyticsSharp className="text-[60px] text-brand mb-4 p-4 bg-light_brand rounded-xl transition-all group-hover:bg-brand  group-hover:text-white  " />
                  }
                />
              </div>
              <div className="flex flex-col gap-4 justify-center sm:flex-row ">
                <ProcessCard
                  title="3. Design "
                  descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                  icon={
                    <LuPencil className="text-[60px] text-brand mb-4 p-4 bg-light_brand rounded-xl transition-all group-hover:bg-brand  group-hover:text-white  " />
                  }
                />
                <ProcessCard
                  title="4. Launch"
                  descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                  icon={
                    <FaLaptop className="text-[60px] text-brand mb-4 p-4 bg-light_brand rounded-xl transition-all group-hover:bg-brand  group-hover:text-white  " />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessMy;
