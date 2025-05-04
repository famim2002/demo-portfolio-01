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
      <section className="px-5 pt-[250px] bg-[#F0F1F3] pb-[200px]">
        <div className="container">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <div>
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
                />
                <ProcessCard
                  title="2. Analyze"
                  descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                  
                />
              </div>
              <div className="flex flex-col gap-4 justify-center sm:flex-row ">
                <ProcessCard
                  title="3. Design "
                  descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                />
                <ProcessCard
                  title="4. Launch"
                  descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
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
