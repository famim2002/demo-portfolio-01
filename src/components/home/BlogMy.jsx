import React from 'react'
import BlogCard from './BlogCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const BlogMy = () => {
  const settings = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // screen width < 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640, // screen width < 640px
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

        <div className="px-6">
          <Slider {...settings} >
            <div className='grid grid-cols-2'>
              <BlogCard
                image="/blog_1.png"
                title="22 Oct, 2020 / 246"
                descript="Lorem ipsum dolor sit consea. Nulla purus arcu"
              />
            
              <BlogCard
                image="/blog_2.png"
                title="22 Oct, 2020 / 246"
                descript="Lorem ipsum dolor sit consea. Nulla purus arcu"
              />
            
              <BlogCard
                image="/blog_3.png"
                title="22 Oct, 2020 / 246"
                descript="Lorem ipsum dolor sit consea. Nulla purus arcu"
              />
          
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
