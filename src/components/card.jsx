import React, { useContext } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { BASE_URL } from "../utils/axiosIntance";
import { useHistory } from "react-router-dom";

import product2 from "../images/product2.svg";
import { Context } from "../context/context";
const Card = (props) => {
  const history = useHistory();
  const { dil } = useContext(Context);
  const market = JSON.parse(localStorage.getItem("market"));
  console.log(
    "bahaahhaah::::" +
      (props?.data?.usd_price_discount * market.valyuta).toFixed(0)
  );
  return (
    <div
      onClick={() => history.push({ pathname: "/product/" + props?.data?.id })}
      className="cursor-pointer min-w-[165px] md:min-w-[290px] w-[165px] md:w-[290px]"
    >
      <div className="w-full h-[164px] md:h-[290px] flex items-center justify-center rounded-[16px] bg-footerBackground">
        <LazyLoadImage
          className=" h-[104px] md:h-[250px] object-contain"
          // src={BASE_URL + props?.data?.img}
          src={BASE_URL + "/" + props?.data?.ProductImgs[0]?.src}
          alt="product img"
        />
      </div>
      <p className="text-[12px] md:text-[16px] text-black font-[500] my-4 line-clamp-2">
        {dil == "TM"
          ? props?.data?.name_tm
          : dil == "RU"
          ? props?.data?.name_ru
          : props?.data?.name_en}
      </p>
      <div className="w-full flex gap-4 items-end">
        <div className="text-black text-[14px] md:text-[18px] font-[700]">
          {props?.data?.is_valyuta
            ? (props?.data?.usd_price_discount * market?.valyuta).toFixed(0) +
              " TMT"
            : props?.data?.discount_price + " TMT"}
        </div>
        {props?.data?.is_discount && (
          <div className="text-[#9F9F9F] text-[12px] md:text-[14px] font-[700] line-through">
            {props?.data?.is_valyuta
              ? (props?.data?.price * market?.valyuta).toFixed(0) + " TMT"
              : props?.data?.price + " TMT"}
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Card);
