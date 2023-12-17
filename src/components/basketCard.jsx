import React, { useContext, useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { BASE_URL } from "../utils/axiosIntance";
import { useHistory } from "react-router-dom";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Delete from "../images/delete.svg";
import lang from "../lang/home.json";
import product from "../images/product.png";
import { Context } from "../context/context";
import { message } from "antd";

const BasketCard = (props) => {
  const history = useHistory();
  const { dil, incPro, decPro, removePro, removeAll } = useContext(Context);
  const market = JSON.parse(localStorage.getItem("market"));
  const [count, setCount] = useState(
    props?.data?.quantity ? props?.data?.quantity : 1
  );
  return (
    <div
      // onClick={() => history.push({ pathname: "/product/" + props?.data?.id })}
      className="cursor-pointer md:gap-4 gap-2  flex flex-wrap w-full border-b-[1px] md:pb-4 pb-3 border-[#E2E2E2]        "
    >
      <div className="cursor-pointer md:gap-4 gap-2 flex flex-nowrap w-full       ">
        <div
          onClick={() =>
            history.push({ pathname: "/product/" + props?.data?.ProductId })
          }
          className="min-w-[50px] w-[50px] md:w-[80px] h-[50px] md:h-[80px] flex items-center justify-center md:rounded-[16px] rounded-[10px] bg-footerBackground"
        >
          <LazyLoadImage
            className=" h-[80%] object-contain"
            src={
              BASE_URL +
              "/" +
              (props?.data?.pro?.ProductImgs.length > 0 &&
                props?.data?.pro?.ProductImgs[0]?.src)
            }
            // src={product}
            alt="product img"
          />
        </div>
        <div
          onClick={() =>
            history.push({ pathname: "/product/" + props?.data?.ProductId })
          }
          className="flex flex-wrap md:w-[45%] w-[50%] md:h-auto h-[50px] items-center"
        >
          <p className="text-[12px] md:text-[16px] w-full text-black font-[500] m-0 line-clamp-1 md:line-clamp-2">
            {dil == "TM"
              ? props?.data?.pro?.name_tm
              : dil == "RU"
              ? props?.data?.pro?.name_ru
              : props?.data?.pro?.name_en}
          </p>
          <p className="text-[12px] md:text-[16px] w-full text-[#868686] m-0 font-[400]  line-clamp-1 md:line-clamp-2">
            {lang[dil].color}: Gara
          </p>
        </div>

        <div className="flex w-[25%] md:w-fit md:flex-nowrap flex-wrap items-start justify-between md:gap-8 gap-2">
          <div className="flex gap-4 w-fit justify-center items-center text-[#868686] text-[14px] md:text-[16px] font-[500] border-[#E2E2E2] border-[1px] rounded-[29px] h-[29px] md:h-[35px] px-2 md:px-3">
            <MinusOutlined
              onClick={() => {
                count > 1 && setCount(count - 1);
                decPro(props?.data?.ProductId);
              }}
            />
            {count}
            <PlusOutlined
              onClick={() => {
                if (props?.data?.pro?.stock > count) {
                  setCount(count + 1);
                  incPro(props?.data?.ProductId);
                } else {
                  message.warning(lang[dil]["Stockda ýok!"]);
                }
              }}
            />
          </div>

          <div className=" text-[14px] w-fit whitespace-nowrap md:text-[16px] md:flex hidden items-center h-[35px] font-[700]">
            {props?.data?.pro?.is_discount
              ? props?.data?.pro?.is_valyuta
                ? (
                    props?.data?.pro?.usd_price_discount *
                    props?.data?.quantity *
                    market?.valyuta
                  ).toFixed(0) + " TMT"
                : (
                    props?.data?.pro?.discount_price * props?.data?.quantity
                  ).toFixed(0) + " TMT"
              : props?.data?.pro?.is_valyuta
              ? (
                  props?.data?.pro?.usd_price *
                  props?.data?.quantity *
                  market.valyuta
                ).toFixed(0) + " TMT"
              : (props?.data?.pro?.price * props?.data?.quantity).toFixed(0) +
                " TMT"}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between md:gap-2 gap-1 items-center">
        <div
          onClick={() => removePro(props?.data?.ProductId)}
          className="w-fit flex md:gap-2 gap-1 items-center  text-[12px] md:text-[16px] font-[400] text-[#868686]"
        >
          <img
            src={Delete}
            className="w-[14px] md:w-[18px] object-contain"
            alt=""
          />
          {lang[dil].cancel}
        </div>
        <div className=" w-[30%] text-[14px] whitespace-nowrap md:text-[16px] flex md:hidden items-center font-[700]">
          {props?.data?.pro?.is_discount
            ? props?.data?.pro?.is_valyuta
              ? (
                  props?.data?.pro?.usd_price_discount *
                  props?.data?.quantity *
                  market.valyuta
                ).toFixed(0) + " TMT"
              : (
                  props?.data?.pro?.discount_price * props?.data?.quantity
                ).toFixed(0) + " TMT"
            : props?.data?.pro?.is_valyuta
            ? (
                props?.data?.pro?.usd_price *
                props?.data?.quantity *
                market.valyuta
              ).toFixed(0) + " TMT"
            : (props?.data?.pro?.price * props?.data?.quantity).toFixed(0) +
              " TMT"}
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
