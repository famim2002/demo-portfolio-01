import React from 'react'

const FormCards = ({title, descript}) => {
  return (
    <div className="py-5 px-5 rounded-xl transition-all hover:shadow-2xl bg-white">
      <p className="text-[16px] text-secondary pb-2 max-w-sm">{title}:</p>
      <h3 className="text-[18px] text-primary  max-w-sm">{descript}</h3>
    </div>
  );
}

export default FormCards
