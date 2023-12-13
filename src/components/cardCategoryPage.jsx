import React, { useContext } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { BASE_URL } from "../utils/axiosIntance";
import { useHistory } from "react-router-dom";
import { Context } from "../context/context";

const CardCategory = (props) => {
  const history = useHistory();
  const { dil } = useContext(Context);
  const market = JSON.parse(localStorage.getItem("market"));
  return (
    <div
      onClick={() => history.push({ pathname: "/product/" + props?.data?.id })}
      className="cursor-pointer mb-8 min-w-[165px] md:min-w-[210px] w-[165px] md:w-[210px]"
    >
      <div className="w-full flex items-center justify-center h-[164px] md:h-[210px] rounded-[16px] bg-footerBackground">
        <LazyLoadImage
          className="h-[85%] object-contain"
          src={BASE_URL + "/" + props?.data?.ProductImgs[0]?.src}
          alt="product img"
        />
      </div>
      <p className="text-[12px] md:text-[14px] text-black font-[500] my-3 md:my-4 line-clamp-2">
        {dil == "TM"
          ? props?.data?.name_tm
          : dil == "RU"
          ? props?.data?.name_ru
          : props?.data?.name_en}
      </p>
      <div className="w-full flex md:gap-4 gap-2 items-end">
        <div className="text-black text-[14px] md:text-[16px] font-[700]">
          {props?.data?.is_valyuta
            ? (props?.data?.usd_price_discount * market.valyuta).toFixed(0) +
              " TMT"
            : props?.data?.discount_price + " TMT"}
        </div>
        <div className="text-[#9F9F9F] text-[10px] md:text-[12px] font-[700] line-through">
          {props?.data?.is_valyuta
            ? (props?.data?.usd_price * market.valyuta).toFixed(0) + " TMT"
            : props?.data?.price + " TMT"}
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
