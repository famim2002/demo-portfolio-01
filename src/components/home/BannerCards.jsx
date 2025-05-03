import React from 'react'

const BannerCards = ({title , descrip}) => {
  return (
    <>
      <div className="px-[60px] py-[20px] bg-light_brand">
        <h2 className="text-[30px] font-semibold text-[#424E60] text-center">
          {title}
        </h2>
        <p className="text-[16px] font-medium text-secondary text-center">
          {descrip}
        </p>
      </div>
    </>
  );
}

export default BannerCards
