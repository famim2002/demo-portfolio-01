import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router'

const ProcessCard = ( {title, descript ,icon}) => {
  return (
    <>
      <div className="bg-white py-[30px] px-[30px] rounded-lg cursor-pointer transition-all hover:shadow-2xl ">
        {icon}

        <h2 className="text-[20px] text-primary font-semibold">{title}</h2>
        <p className="text-[16px] text-secondary pt-[15px] sm:w-[248px]">
          {descript}
        </p>
      </div>
    </>
  );
};

export default ProcessCard
