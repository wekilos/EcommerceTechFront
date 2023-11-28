import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { BASE_URL } from "../utils/axiosIntance";
import { useHistory } from "react-router-dom";

import product2 from "../images/product2.svg";
const Card = (props) => {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push({ pathname: "/product/" + props?.data?.id })}
      className="cursor-pointer min-w-[290px] w-[290px]"
    >
      <div className="w-full h-[290px] flex items-center justify-center rounded-[16px] bg-footerBackground">
        <LazyLoadImage
          className="h-[250px] object-contain"
          // src={BASE_URL + props?.data?.img}
          src={product2}
          alt="product img"
        />
      </div>
      <p className="text-[16px] text-black font-[500] my-4 line-clamp-2">
        LG WV10-1412B Series 10 12kg Kir yuwujy maşyn ( Gara )
      </p>
      <div className="w-full flex gap-4 items-end">
        <div className="text-black text-[18px] font-[700]">12000 TMT</div>
        <div className="text-[#9F9F9F] text-[14px] font-[700] line-through">
          15000 TMT
        </div>
      </div>
    </div>
  );
};

export default Card;
