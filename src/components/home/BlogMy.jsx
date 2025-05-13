import React from 'react'
import BlogCard from './BlogCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from './common components/SliderArrows'

const BlogMy = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center gap-3"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="text-[0px] h-1 w-3 p-1 bg-brand rounded-full active:bg-primary transition-all  cursor-pointer">
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1440, // large desktops & laptops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // tablets & small desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // small tablets and landscape phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // mobile phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <section className="py-[50px] px-4">
      <div className="container">
        <h2 className="text-[48px] font-semibold text-primary text-center pb-[30px]">
          blog
        </h2>
        <p className="text-[18px] font-medium text-secondary text-center pb-[60px] max-w-lg m-auto">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>

        <div className=" px-6">
          <Slider {...settings}>
            <div className='px-4'>
              <BlogCard
                image="/blog_1.png"
                title="22 Oct, 2020 / 246"
                descript="Lorem ipsum dolor sit consea. Nulla purus arcu"
              />
            </div>
         <div>
          
              
            <BlogCard
              image="/blog_2.png"
              title="22 Oct, 2020 / 246"
              descript="Lorem ipsum dolor sit consea. Nulla purus arcu"
            />
          </div>     
 <div>


            <BlogCard
              image="/blog_3.png"
              title="22 Oct, 2020 / 246"
              descript="Lorem ipsum dolor sit consea. Nulla purus arcu"
            />
 </div>
 <div>


            <BlogCard
              image="/blog_4.png"
              title="22 Oct, 2020 / 246"
              descript="Lorem ipsum dolor sit consea. Nulla purus arcu"
            />
 </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};




export default BlogMy;
