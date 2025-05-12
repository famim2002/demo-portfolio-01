import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router'

const ProcessCard = ( {title, descript ,icon}) => {
  return (
    <>
      <div className='group'>
        <div className="bg-white py-[30px] px-[30px] rounded-lg cursor-pointer transition-all group-hover:shadow-2xl ">
          {icon}

          <h2 className="text-[20px] text-primary font-semibold">{title}</h2>
          <p className="text-[16px] text-secondary pt-[15px] sm:w-[248px]">
            {descript}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProcessCard
