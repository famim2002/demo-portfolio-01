import React from 'react'
import BlogCard from './BlogCard'

const BlogMy = () => {
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

        <div className=" flex gap-3 flex-col sm:flex-row md:gap-8 justify-center">
          <div className="flex flex-col  gap-3 lg:flex-row  md:gap-8">
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
          </div>
          <div className="flex flex-col  gap-3 lg:flex-row  md:gap-8">
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
        </div>
      </div>
    </section>
  );
};




export default BlogMy;
