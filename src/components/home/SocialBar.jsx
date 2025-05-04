import React from "react";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";


const SocialBar = () => {
  return (
    <div>
      <div
        className="w-fit max-w-xl hidden  sm:flex flex-col sm:flex-row bg-white rounded-xl shadow-2xl
              sm:translate-y-[400px]  sm:absolute
              md:translate-y-[320px] md:translate-x-[400px]
              lg:translate-y-[380px] lg:translate-x-[-500px] 
            2xl:translate-y-[430px] 2xl:translate-x-[-650px] 2xl:gap-5"
      >
        <Link to="/">
          <FaFacebookF className="text-[50px] text-brand  p-3 m-2 rounded-xl transition-all hover:bg-brand hover:text-white" />
        </Link>

        <Link to="/">
          <FaDribbble className="text-[50px] text-brand  p-3 m-2 rounded-xl transition-all hover:bg-brand hover:text-white" />
        </Link>

        <Link to="/">
          <FaInstagram className="text-[50px] text-brand  p-3 m-2 rounded-xl transition-all hover:bg-brand hover:text-white" />
        </Link>

        <Link to="/">
          <FaLinkedinIn className="text-[50px] text-brand  p-3 m-2 rounded-xl transition-all hover:bg-brand hover:text-white" />
        </Link>

        <Link to="/">
          <FaBehance className="text-[50px] text-brand  p-3 m-2 rounded-xl transition-all hover:bg-brand hover:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default SocialBar;
