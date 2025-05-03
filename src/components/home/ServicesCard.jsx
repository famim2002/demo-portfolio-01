import React from 'react'
import { Link } from 'react-router'


const ServicesCard = ({title, descript}) => {
    return (
      
      <Link to="/" className="flex flex-col gap-5 rounded-xl px-10 py-7 bg-white focus:outline-2 focus:outline-violet-500  hover:bg-violet-100">
      <h3 className="text-[25px] font-semibold text-primary ">{title}</h3>
      <p className="text-[18px] text-secondary max-w-xl">{descript}</p>
      </Link>

  );
}

export default ServicesCard
