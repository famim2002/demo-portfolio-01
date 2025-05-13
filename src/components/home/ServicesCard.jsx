import React from "react";
import { Link } from "react-router";

const ServicesCard = ({ title, descript }) => {
  return (
    <Link
      to="/"
      className="flex flex-col gap-5 rounded-xl px-10 py-7 w-xl  bg-white  focus:border-l-4  focus:border-brand focus:outline-0  hover:bg-violet-100 group"
    >
      <h3 className="text-[25px] font-semibold text-primary ">{title}</h3>
      <p className="text-[18px] text-secondary mt-5 max-w-xl hidden transition-all group-focus:block">
        {descript}
      </p>
    </Link>
  );
};

export default ServicesCard;
