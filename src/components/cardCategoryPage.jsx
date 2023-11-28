import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { BASE_URL } from "../utils/axiosIntance";
import { useHistory } from "react-router-dom";

const CardCategory = (props) => {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push({ pathname: "/product/" + props?.data?.id })}
      className="cursor-pointer mb-8 min-w-[210px] w-[210px]"
    >
      <div className="w-full h-[210px] rounded-[16px] bg-footerBackground">
        <LazyLoadImage
          className="w-full object-contain"
          src={BASE_URL + props?.data?.img}
          alt="product img"
        />
      </div>
      <p className="text-[14px] text-black font-[500] my-4 line-clamp-2">
        LG WV10-1412B Series 10 12kg Kir yuwujy maşyn ( Gara )
      </p>
      <div className="w-full flex gap-4 items-end">
        <div className="text-black text-[16px] font-[700]">12000 TMT</div>
        <div className="text-[#9F9F9F] text-[12px] font-[700] line-through">
          15000 TMT
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
