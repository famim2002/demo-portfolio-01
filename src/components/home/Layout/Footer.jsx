import React from "react";
import { Link } from "react-router"

const Footer = () => {
  return (
    <footer className="px-3 py-25 bg-primary">
      <div className="container">
        <div className="flex flex-col justify-between  items-center  gap-15  xl:flex-row lg:gap-0">
          <div>
            <Link to="/">
              <img src="/Logo.png" alt="" />
            </Link>
          </div>
          <div>
            <ul className="flex flex-col gap-10 md:flex-row md:gap-0 text-center items-center">
              <li>
                <Link
                  className="px-[24px] py-[12px] font-[] text-white text-[20px] transition-all active:bg-light_brand active:rounded-lg "
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="px-[24px] py-[12px] font-[] text-white text-[20px] transition-all active:bg-light_brand active:rounded-lg "
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="px-[24px] py-[12px] font-[] text-white text-[20px] transition-all active:bg-light_brand active:rounded-lg "
                  to="/process"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  className="px-[24px] py-[12px] font-[] text-white text-[20px] transition-all active:bg-light_brand active:rounded-lg "
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="px-[24px] py-[12px] font-[] text-white text-[20px] transition-all active:bg-light_brand active:rounded-lg "
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="px-[24px] py-[12px] font-[] text-white text-[20px] transition-all active:bg-light_brand active:rounded-lg "
                  to="/services"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  className="px-[24px] py-[12px] font-[] text-white text-[20px] transition-all active:bg-light_brand active:rounded-lg "
                  to="/Contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <p className="px-[24px] py-[12px] font-[] text-white text-[20px]">
            Copyright © 2025 "famim hayat".
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
