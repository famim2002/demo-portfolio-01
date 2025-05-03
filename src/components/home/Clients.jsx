import React from "react";

const Clients = () => {
  return (
    <section className="px-3 pt-[120px] overflow-hidden">
      <div className="container">
        <div>
          <h2 className="text-[48px] font-semibold text-primary text-center pb-[30px]">
            Happy Clients
          </h2>
          <p className="text-[18px] font-medium text-secondary text-center pb-[60px] max-w-lg m-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="flex justify-center  items-center flex-col  xl:flex-row">
          <div className=" flex flex-col md:gap-30 xl:gap-0 md:flex-row ">
            <img className="size-auto" src="/google.png" alt="" />
            <img className="size-auto" src="/dribbble.png" alt="" />
          </div>
          <div className=" flex flex-col md:gap-30 xl:gap-0 md:flex-row ">
            <img className="size-auto" src="/linkedin.png" alt="" />
            <img className="size-auto" src="/amazon.png" alt="" />
          </div>
          <div className=" flex flex-col md:gap-30 xl:gap-0 md:flex-row ">
            <img className="size-auto" src="/medium.png" alt="" />
            <img className="size-auto" src="/spotify.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
