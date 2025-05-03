import React from 'react'

const PortfolioCards = ({image ,title, tag , descript}) => {
  return (
    <>
      <div className="flex flex-col rounded-xl w-fit">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col gap-5 border border-t-0 py-7 px-4  rounded-xl rounded-t-none border-stone-300">
          <h2 className="max-w-sm">UI-UX DESIGN</h2>
          <h3 className="max-w-sm"> Product Admin Dashboard</h3>
          <p className="max-w-sm">
            Vivamus eleifend convallis ante, non pharetra libero molestie
            laoreet. Donec id imperdiet lacus.
          </p>
          <button className="btn_light">Case Study</button>
        </div>
      </div>
    </>
  );
}

export default PortfolioCards
