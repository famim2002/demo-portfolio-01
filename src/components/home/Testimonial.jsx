import React from "react";

const Testimonial = () => {
  return (
    <section className="px-3 py-[100px]">
      <div className="container">
        <div className="flex flex-col gap-10">
          <h2 className="text-[48px] font-semibold text-primary text-center pb-[30px]">
            Testimonial
          </h2>
          <p className="text-[18px] font-medium text-secondary text-center pb-[60px] max-w-lg m-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <p className="text-[20px] text-primary  text-center max-w-xl m-auto">
            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
            felis turpis, nec semper odio convallis at. Curabitur imperdiet
            semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh.
            Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
            Morbi ornare elit at libero suscipit porta.”
          </p>
          <h3 className="text-[20px] text-primary font-semibold text-center max-w-md m-auto">
            Esther Howard
          </h3>
          <p className="text-[20px] text-primary  text-center max-w-md m-auto">
            Managing Director, ABC company
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
