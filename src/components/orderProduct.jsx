import React, { useContext, useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { BASE_URL } from "../utils/axiosIntance";
import { useHistory } from "react-router-dom";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Delete from "../images/delete.svg";
import product from "../images/product.png";
import { Context } from "../context/context";

const OrderProduct = (props) => {
  const history = useHistory();
  const [count, setCount] = useState(1);
  const { dil } = useContext(Context);
  const market = JSON.parse(localStorage.getItem("market"));
  return (
    <div
      // onClick={() => history.push({ pathname: "/product/" + props?.data?.id })}
      className="cursor-pointer gap-3 md2:gap-4 flex justify-between  w-full border-b-[1px] pb-4  border-[#E2E2E2]        "
    >
      <div
        onClick={() =>
          history.push({ pathname: "/product/" + props?.data?.id })
        }
        className="w-[50px] md:w-[80px] h-[50px] md:h-[80px] flex items-center justify-center rounded-[8px] md:rounded-[16px] bg-footerBackground"
      >
        <LazyLoadImage
          className=" h-[80%] object-contain"
          src={BASE_URL + "/" + props?.data?.Product?.ProductImgs[0]?.src}
          // src={product}
          alt="product img"
        />
      </div>
      <div
        onClick={() =>
          history.push({ pathname: "/product/" + props?.data?.id })
        }
        className="flex w-full  md:w-[40%] flex-wrap items-center"
      >
        <p className="text-[12px] md:text-[16px] w-full text-black font-[500] m-0 line-clamp-1 md:line-clamp-2">
          {dil == "TM"
            ? props?.data?.Product?.name_tm
            : dil == "RU"
            ? props?.data?.Product?.name_ru
            : props?.data?.Product?.name_en}
        </p>
        <p className="text-[16px] md:flex hidden w-full text-[#868686] m-0 font-[400]  line-clamp-2">
          {dil == "TM"
            ? "Reňk: " + props?.data?.Product?.color_tm
            : dil == "RU"
            ? "Reňk: " + props?.data?.Product?.color_ru
            : "Reňk: " + props?.data?.Product?.color_en}
        </p>
        <div className="w-full flex justify-between">
          <p className="text-[12px] md:text-[16px] md:hidden flex w-full text-black font-[500] m-0 line-clamp-1">
            {props?.data?.quantity} sany
          </p>
          <p className="text-[12px] md:text-[16px] md:hidden flex w-full text-black font-[500] m-0 line-clamp-1">
            {props?.data?.discount_price != 0
              ? props?.data?.discount_price
              : props?.data?.price}{" "}
            TMT
          </p>
        </div>
      </div>
      <div className="hidden md:flex w-[15%] gap-4 justify-center items-center text-black text-[16px] font-[500]   h-[35px] px-3">
        {props?.data?.discount_price != 0
          ? props?.data?.discount_price / props?.data?.quantity
          : props?.data?.price / props?.data?.quantity}{" "}
        TMT
      </div>
      <div className="hidden md:flex w-[15%] gap-4 justify-center items-center text-black text-[16px] font-[500]   h-[35px] px-3">
        {props?.data?.quantity}
      </div>

      <div className="text-[16px] whitespace-nowrap w-[10%] hidden md:flex items-center h-[35px] font-[700]">
        {props?.data?.discount_price != 0
          ? props?.data?.discount_price
          : props?.data?.price}{" "}
        TMT
      </div>
    </div>
  );
};

export default OrderProduct;
