import React, { useContext } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { PlusOutlined } from "@ant-design/icons";
import { BASE_URL } from "../utils/axiosIntance";
import { useHistory, useParams, useLocation } from "react-router-dom";

import product2 from "../images/product2.svg";
import { Context } from "../context/context";
import { message } from "antd";
import lang from "../lang/home.json";

const Card = (props) => {
  const history = useHistory();
  const { dil } = useContext(Context);
  const { pro1, pro2, pro3 } = useParams();
  const location = useLocation();
  const market = JSON.parse(localStorage.getItem("market"));

  const goToCompare = () => {
    if (
      location?.pathname == "/compare" ||
      (pro1?.slice(5).length == 0 && location?.pathname != "/compare")
    ) {
      history.push({
        pathname:
          "/compare/pro1=" +
          props?.data?.id +
          "/pro2=" +
          (pro2?.slice(5).length > 0 ? pro2?.slice(5) : "") +
          "/pro3=" +
          (pro3?.slice(5).length > 0 ? pro3?.slice(5) : ""),
      });
    } else if (
      (pro1?.slice(5).length > 0 &&
        pro2?.slice(5).length == 0 &&
        location?.pathname != "/compare") ||
      (pro1?.slice(5).length > 0 &&
        pro2?.slice(5).length == 0 &&
        pro3?.slice(5).length > 0 &&
        location?.pathname != "/compare")
    ) {
      history.push({
        pathname:
          "/compare/pro1=" +
          (pro1?.slice(5).length > 0 ? pro1?.slice(5) : "") +
          // props?.data?.id +
          "/pro2=" +
          // (pro2?.slice(5).length > 0 ? props?.data?.id : "") +
          props?.data?.id +
          "/pro3=" +
          (pro3?.slice(5).length > 0 ? pro3?.slice(5) : ""),
      });
    } else if (
      (pro1?.slice(5).length > 0 &&
        pro2?.slice(5).length > 0 &&
        pro3?.slice(5).length == 0 &&
        location?.pathname != "/compare") ||
      (pro1?.slice(5).length > 0 &&
        pro2?.slice(5).length > 0 &&
        pro3?.slice(5).length == 0 &&
        location?.pathname != "/compare")
    ) {
      history.push({
        pathname:
          "/compare/pro1=" +
          (pro1?.slice(5).length > 0 ? pro1?.slice(5) : "") +
          // props?.data?.id +
          "/pro2=" +
          (pro2?.slice(5).length > 0 ? pro2?.slice(5) : "") +
          // props?.data?.id +
          "/pro3=" +
          // (pro3?.slice(5).length > 0 ? props?.data?.id : ""),
          props?.data?.id,
      });
    }
  };
  return (
    <div className="cursor-pointer relative min-w-[165px] md:min-w-[290px] w-[165px] md:w-[290px]">
      {props?.compare && (
        <div
          onClick={() => goToCompare()}
          className="w-fit cursor-pointer absolute top-[9px] md:top-[15px] right-[13px] md:right-[18px] flex gap-1  items-center text-blue text-[12px] md:text-[16px] font-[500]"
        >
          <PlusOutlined classID="font-[700]" />
          Deňeşdir
        </div>
      )}
      <div
        onClick={() =>
          history.push({ pathname: "/product/" + props?.data?.id })
        }
        className="w-full h-[164px] md:h-[290px] flex items-center justify-center rounded-[16px] bg-footerBackground"
      >
        <LazyLoadImage
          className=" h-[104px] md:h-[250px] object-contain"
          // src={BASE_URL + props?.data?.img}
          src={BASE_URL + "/" + props?.data?.ProductImgs[0]?.src}
          alt="product img"
        />
      </div>
      <p
        onClick={() =>
          history.push({ pathname: "/product/" + props?.data?.id })
        }
        className="text-[12px] md:text-[16px] text-black font-[500] my-4 line-clamp-2"
      >
        {dil == "TM"
          ? props?.data?.name_tm
          : dil == "RU"
          ? props?.data?.name_ru
          : props?.data?.name_en}
      </p>
      <div
        onClick={() =>
          history.push({ pathname: "/product/" + props?.data?.id })
        }
        className="w-full flex gap-4 items-end"
      >
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
