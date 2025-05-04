import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router'



const FormCards = ({title, descript}) => {
  return (
    <Link to="/">
    <div className="flex items-center py-5 px-5 rounded-xl transition-all hover:shadow-2xl bg-white cursor-pointer">
      <IoLocationOutline className="text-[45px] text-brand p-2 transition-all bg-light_brand rounded-md mr-3 hover:bg-brand hover:text-white" />
      <div>
        <p className="text-[16px] text-secondary pb-2 max-w-sm">{title}:</p>
        <h3 className="text-[18px] text-primary  max-w-sm">{descript}</h3>
      </div>
    </div>

    </Link>
  );
}

export default FormCards
