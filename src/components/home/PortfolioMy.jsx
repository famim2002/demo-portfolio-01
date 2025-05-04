import React from "react";
import PortfolioCards from "./PortfolioCards";

const PortfolioMy = () => {
  return (
    <section className="py-[100px] px-4">
      <div className="container">
        <h2 className="text-[48px] font-semibold text-primary text-center pb-[30px]">
          portfolio
        </h2>
        <p className="text-[18px] font-medium text-secondary text-center pb-[60px] max-w-lg m-auto">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className="flex flex-col gap-20 items-center">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <PortfolioCards
              image="/portfolio_img_1.png"
              title="UI-UX DESIGN"
              tag="Product Admin Dashboard"
              descript="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
              
            />
            <PortfolioCards
              image="/portfolio_img_2.png"
              title="UI-UX DESIGN"
              tag="Product Admin Dashboard"
              descript="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
            />
            <PortfolioCards
              image="/portfolio_img_3.png"
              title="UI-UX DESIGN"
              tag="Product Admin Dashboard"
              descript="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <PortfolioCards
              image="/portfolio_img_4.png"
              title="UI-UX DESIGN"
              tag="Product Admin Dashboard"
              descript="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
            />
            <PortfolioCards
              image="/portfolio_img_5.png"
              title="UI-UX DESIGN"
              tag="Product Admin Dashboard"
              descript="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
            />
            <PortfolioCards
              image="/portfolio_img_6.png"
              title="UI-UX DESIGN"
              tag="Product Admin Dashboard"
              descript="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMy;
