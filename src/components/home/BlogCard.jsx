import React from 'react'

const BlogCard = ({image , title , descript}) => {
    return (
      <div
        className="w-fit  flex flex-col rounded-t-xl my-16 mx-auto items-center rounded-b-2xl  m-auto cursor-pointer transition-all hover:shadow-xl
      "
      >
        <div>
          <img className="rounded-t-2xl" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-5 py-6 px-3  w-fit rounded-b-2xl   border border-t-0 border-zinc-300 ">
          <p className="text-[16px] text-stone-400">{title}</p>
          <h3 className="text-[18px] max-w-2xs ">{descript}</h3>
        </div>
      </div>
    );
}

export default BlogCard
