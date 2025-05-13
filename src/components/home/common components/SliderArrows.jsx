import { LiaChevronLeftSolid } from "react-icons/lia";
import { LiaChevronRightSolid } from "react-icons/lia";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" absolute text-white slider_button  hover:shadow-2xl translate-x-[50px] translate-y-[-50px]  top-[50%] right-0"
      onClick={onClick}
    >
      <LiaChevronRightSolid />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-50  text-white slider_button hover:shadow-2xl  translate-x-[-50px] translate-y-[-50px] top-[50%] left-0"
      onClick={onClick}
    >
      <LiaChevronLeftSolid />
    </div>
  );
}

export { NextArrow, PrevArrow };
