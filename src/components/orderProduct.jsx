import React, { useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { BASE_URL } from "../utils/axiosIntance";
import { useHistory } from "react-router-dom";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Delete from "../images/delete.svg";
import product from "../images/product.png";

const OrderProduct = (props) => {
  const history = useHistory();
  const [count, setCount] = useState(1);
  return (
    <div
      // onClick={() => history.push({ pathname: "/product/" + props?.data?.id })}
      className="cursor-pointer gap-4 flex justify-between  w-full border-b-[1px] pb-4 border-[#E2E2E2]        "
    >
      <div
        onClick={() =>
          history.push({ pathname: "/product/" + props?.data?.id })
        }
        className="w-[80px] h-[80px] flex items-center justify-center rounded-[16px] bg-footerBackground"
      >
        <LazyLoadImage
          className=" h-[70px] object-contain"
          // src={BASE_URL + props?.data?.img }
          src={product}
          alt="product img"
        />
      </div>
      <div
        onClick={() =>
          history.push({ pathname: "/product/" + props?.data?.id })
        }
        className="flex  w-[40%] flex-wrap items-center"
      >
        <p className="text-[16px] w-full text-black font-[500] m-0 line-clamp-2">
          LG WV10-1412B Series 10 12kg Kir yuwujy maşyn (Gara)
        </p>
        <p className="text-[16px] w-full text-[#868686] m-0 font-[400]  line-clamp-2">
          Reňk: Gara
        </p>
      </div>
      <div className="flex w-[15%] gap-4 justify-center items-center text-black text-[16px] font-[500]   h-[35px] px-3">
        12,000 TMT
      </div>
      <div className="flex w-[15%] gap-4 justify-center items-center text-black text-[16px] font-[500]   h-[35px] px-3">
        {count}
      </div>

      <div className="text-[16px] whitespace-nowrap w-[10%] flex items-center h-[35px] font-[700]">
        12,000 TMT
      </div>
    </div>
  );
};

export default OrderProduct;
