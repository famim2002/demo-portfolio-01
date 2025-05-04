import React from 'react'
 import { FaArrowRight } from "react-icons/fa6";

const Discuss = () => {
  return (
    <section className="bg-primary">
      <div className="container">
        <div
          className="flex flex-col gap-10 py-[60px]
        md:py-[100px]"
        >
          <h2
            className="text-[35px] text-white font-semibold text-center max-w-2xl m-auto
                   lg:text-[55px]"
          >
            Do you have Project Idia? Let's discuss your project!
          </h2>
          <p className="text-[20px] text-stone-200 max-w-lg text-center m-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <button className="btn_dark m-auto pt-[25px] flex items-center gap-3">Let’s work Together <FaArrowRight /></button>
        </div>
      </div>
    </section>
  );
}

export default Discuss
