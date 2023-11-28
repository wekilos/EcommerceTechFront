import React, { useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { BASE_URL } from "../utils/axiosIntance";
import { useHistory } from "react-router-dom";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Delete from "../images/delete.svg";
import product from "../images/product.png";

const BasketCard = (props) => {
  const history = useHistory();
  const [count, setCount] = useState(1);
  return (
    <div
      // onClick={() => history.push({ pathname: "/product/" + props?.data?.id })}
      className="cursor-pointer gap-4 flex flex-wrap w-full border-b-[1px] pb-4 border-[#E2E2E2]        "
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
        className="flex flex-wrap w-[55%] items-center"
      >
        <p className="text-[16px] w-full text-black font-[500] m-0 line-clamp-2">
          LG WV10-1412B Series 10 12kg Kir yuwujy maşyn (Gara)
        </p>
        <p className="text-[16px] w-full text-[#868686] m-0 font-[400]  line-clamp-2">
          Reňk: Gara
        </p>
      </div>

      <div className="flex items-start justify-between gap-8">
        <div className="flex gap-4 justify-center items-center text-[#868686] text-[16px] font-[500] border-[#E2E2E2] border-[1px] rounded-[29px] h-[35px] px-3">
          <MinusOutlined onClick={() => count > 1 && setCount(count - 1)} />
          {count}
          <PlusOutlined onClick={() => setCount(count + 1)} />
        </div>

        <div className="text-[16px] flex items-center h-[35px] font-[700]">
          12,000 TMT
        </div>
      </div>
      <div className="w-full flex gap-2 items-center text-[16px] font-[400] text-[#868686]">
        <img src={Delete} className="w-[18px] object-contain" alt="" />
        Aýyr
      </div>
    </div>
  );
};

export default BasketCard;
