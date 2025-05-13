import React from 'react'
import { TiArrowRightOutline } from "react-icons/ti";






const FormValid = () => {




    const handleSubmit = () => {
        console.log("mountain dew ,, voyer mare chudi");
        
    }




  return (
    <div>
      <p className="text-[16px] text-secondary pt-5 pb-10 max-w-sm">
        There are many variations of passages of Lorem Ipsu available. but the
        majority have suffered alte.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="name"
          className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2  focus:border-brand"
        />
        <input
          type="email"
          placeholder="email"
          className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2  focus:border-brand"
        />
        <input
          type="text"
          placeholder="location"
          className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2  focus:border-brand"
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="budget"
            className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2  focus:border-brand"
          />
          <input
            type="text"
            placeholder="subject"
            className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2  focus:border-brand"
          />
        </div>
        <input
          type="text"
          placeholder="massage"
          className="border-b border-stone-300 px-3 py-4  focus:outline-0 focus:border-b-2  focus:border-brand"
        />
      </form>
      <button className="btn_dark mt-8 flex items-center gap-3">
        submit <TiArrowRightOutline />
      </button>
    </div>
  );
}

export default FormValid
