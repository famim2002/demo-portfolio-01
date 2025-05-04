import React from 'react'

const ProcessCard = ( {title, descript}) => {
  return (
    <>
      <div className="bg-white py-[30px] px-[30px] rounded-lg ">
        <h2 className='text-[20px] text-primary font-semibold'>{title}</h2>
        <p className="text-[16px] text-secondary pt-[15px] sm:w-[248px]">{descript}</p>
        
      </div>
    </>
  );
};

export default ProcessCard
