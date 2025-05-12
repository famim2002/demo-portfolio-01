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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center ">
          <img className="size-auto" src="/google.png" alt="" />
          <img className="size-auto" src="/dribbble.png" alt="" />

          <img className="size-auto" src="/linkedin.png" alt="" />
          <img className="size-auto" src="/amazon.png" alt="" />

          <img className="size-auto" src="/medium.png" alt="" />
          <img className="size-auto" src="/spotify.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
