import React from 'react'
import FormCards from './FormCards'
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from 'react-router'
import { FaFacebookF } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";

const FormMy = () => {
  return (
    <section className="px-3 py-[100px] overflow-hidden ">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-around bg-white gap-10 px-3 sm:px-10 py-10 shadow-2xl rounded-2xl">
          <div>
            <h2 className="text-[30px] text-primary font-semibold">
              Let’s discuss your Project
            </h2>
            <p className="text-[16px] text-secondary pt-5 pb-10 max-w-sm">
              There are many variations of passages of Lorem Ipsu available. but
              the majority have suffered alte.
            </p>
            <div className="flex flex-col gap-3">
              <FormCards title="Address" descript="New Mexico 31134 My" />
              <FormCards title="Email:" descript=" mymail@mail.com" />
              <FormCards title="Call Me Now:" descript="00-1234 00000" />
            </div>
            <div className="flex justify-between rounded-xl shadow-2xl mt-20">
              <Link to="/">
                <FaFacebookF className="text-[40px] sm:text-[50px] text-brand  p-2 m-2 rounded-xl transition-all hover:bg-brand hover:text-white" />
              </Link>

              <Link to="/">
                <FaDribbble className="text-[40px] sm:text-[50px] text-brand  p-2 m-2 rounded-xl transition-all hover:bg-brand hover:text-white" />
              </Link>

              <Link to="/">
                <FaInstagram className="text-[40px] sm:text-[50px] text-brand  p-2 m-2 rounded-xl transition-all hover:bg-brand hover:text-white" />
              </Link>

              <Link to="/">
                <FaLinkedinIn className="text-[40px] sm:text-[50px] text-brand  p-2 m-2 rounded-xl transition-all hover:bg-brand hover:text-white" />
              </Link>

              <Link to="/">
                <FaBehance className="text-[40px] sm:text-[50px] text-brand  p-2 m-2 rounded-xl transition-all hover:bg-brand hover:text-white" />
              </Link>
            </div>
          </div>
          <div className="">
            <p className="text-[16px] text-secondary pt-5 pb-10 max-w-sm">
              There are many variations of passages of Lorem Ipsu available. but
              the majority have suffered alte.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="name"
                className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2 focus:border-brand"
              />
              <input
                type="email"
                placeholder="email"
                className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2 focus:border-brand"
              />
              <input
                type="text"
                placeholder="location"
                className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2 focus:border-brand"
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="budget"
                  className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2 focus:border-brand"
                />
                <input
                  type="text"
                  placeholder="subject"
                  className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2 focus:border-brand"
                />
              </div>
              <input
                type="text"
                placeholder="massage"
                className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2 focus:border-brand"
              />
            </div>
            <button className="btn_dark mt-8 flex items-center gap-3">
              submit <TiArrowRightOutline />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormMy
