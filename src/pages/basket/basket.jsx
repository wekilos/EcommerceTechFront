import React, { useState, useRef, useContext, useEffect } from "react";
import {
  RightOutlined,
  LeftOutlined,
  UpOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import CardCategory from "../../components/cardCategoryPage";
import { useHistory } from "react-router-dom";
import checkbox from "../../images/checkbox.svg";
import checkboxborder from "../../images/checkboxborder.svg";
import BasketCard from "../../components/basketCard";
import Card from "../../components/card";
import { Context } from "../../context/context";
import { axiosInstance } from "../../utils/axiosIntance";

const Basket = (props) => {
  const history = useHistory();
  const { dil, countPro, incPro, decPro, basket } = useContext(Context);
  const refNewProduct = useRef(null);
  const market = JSON.parse(localStorage.getItem("market"));
  const [products, setProducts] = useState([]);
  const [filterOpen, setFilterOpen] = useState({
    category: true,
    brand: false,
    price: true,
    start: 0,
    end: 10000,
  });

  const ScroollRight = (refNewProduct) => {
    refNewProduct.current.scrollBy(200, 0);
  };
  const ScroollLeft = (refNewProduct) => {
    refNewProduct.current.scrollBy(-200, 0);
  };

  let sum = 0;
  basket?.map((item) => {
    if (item?.pro?.is_discount == true) {
      if (item?.pro?.is_valyuta == true) {
        // (item?.pro?.usd_price_discount * item?.quantity).toFixed(0) + " USD";
        sum =
          sum +
          +(
            item?.pro?.usd_price_discount *
            item?.quantity *
            market.valyuta
          ).toFixed(0);
      } else {
        // (item?.pro?.discount_price * item?.quantity).toFixed(0) + " TMT";
        sum = sum + +(item?.pro?.discount_price * item?.quantity).toFixed(0);
      }
    } else {
      if (item?.pro?.is_valyuta == true) {
        // (item?.pro?.usd_price * item?.quantity).toFixed(0) + " USD";
        sum =
          sum +
          +(item?.pro?.usd_price * item?.quantity * market.valyuta).toFixed(0);
      } else {
        // (item?.pro?.price * item?.quantity).toFixed(0) + " TMT";
        sum = sum + +(item?.pro?.price * item?.quantity).toFixed(0);
      }
    }
  });

  useEffect(() => {
    getSimilarPro();
  }, []);

  const getSimilarPro = async () => {
    axiosInstance
      .get("/api/product/all", {
        params: {
          is_selected: true,
        },
      })
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full md:pb-8 pb-5">
      <div className="w-full flex justify-start md:gap-2 gap-1 items-center md:my-4 my-2 md:py-4 py-2">
        <div
          onClick={() => history.push({ pathname: "/" })}
          className="text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Baş sahapa
        </div>
        <RightOutlined className="text-[12px] md:text-[14px] font-[500] text-[#888888]" />
        <div
          onClick={() => history.push({ pathname: "/basket" })}
          className="text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Sebet
        </div>
      </div>

      <div className="w-full md:mb-4 mb-3 flex justify-between">
        <div className="flex flex-start items-end gap-2">
          <h1 className="text-[20px] md:text-[25px] font-[700] text-black">
            Sebet
          </h1>
          <p className="text-[14px] font-[400]">(2)</p>
        </div>
      </div>

      <div className="w-full flex md:flex-nowrap flex-wrap justify-between md:gap-12 gap-8">
        {/* Products */}
        <div className="w-full">
          <div className="w-full md:mt-4 mt-2 flex justify-between items-center border-b-[1px] border-[#E2E2E2] pb-2">
            <h1 className="text-[12px] md:text-[16px] w-[55%] font-[400] text-[#868686]">
              Haryt
            </h1>
            <h1 className="text-[12px] md:text-[16px] md:w-[35%] w-fit pr-4 md:pr-0 font-[400] text-[#868686]">
              Mukdary
            </h1>
            <h1 className="text-[12px] md:text-[16px] hidden md:flex w-[10%] font-[400] text-[#868686]">
              Jemi
            </h1>
          </div>
          <div className="w-full md:py-8 py-4 flex flex-wrap justify-start md:gap-10 gap-5">
            {basket?.map((item) => {
              return <BasketCard data={item} />;
            })}
          </div>
        </div>

        {/* filter sidebar */}
        <div className="md:min-w-[400px] min-w-full h-fit bg-[#F9F9F9] border-[#E2E2E2] border-[1px] rounded-[20px] md:p-8 p-6">
          <div className="w-full border-b-[1px] border-[#E2E2E2] pb-4 flex justify-between items-center">
            <h1 className="text-[18px] md:text-[20px] font-[700] text-black ">
              Jemi
            </h1>
          </div>

          <div className="w-full md:pt-8 pt-6 flex justify-between items-center">
            <h1 className="text-[14px] md:text-[16px] font-[500] text-[#454545]">
              Harytlaryň jemi bahasy
            </h1>
            <h1 className="text-[14px] md:text-[16px] font-[600] whitespace-nowrap text-black">
              {sum} TMT
            </h1>
          </div>

          <div className="w-full mt-4 border-b-[1px] border-[#E2E2E2]  md:pb-8 pb-6 flex justify-between items-center">
            <h1 className="text-[14px] md:text-[16px] font-[500] text-[#454545]">
              Eltip berme
            </h1>
            <h1 className="text-[14px] md:text-[16px] font-[600] whitespace-nowrap text-black">
              {market?.dastavka} TMT
            </h1>
          </div>
          <div className="w-full py-4  flex justify-between items-center">
            <h1 className="text-[14px] md:text-[16px] font-[500] text-[#454545]">
              Jemi
            </h1>
            <h1 className="text-[14px] md:text-[16px] font-[700] whitespace-nowrap text-black">
              {+sum + +market?.dastavka} TMT
            </h1>
          </div>
          <button
            onClick={() => history.push({ pathname: "/order" })}
            className="w-full  rounded-[29px] bg-black text-white h-[40px] text-center text-[14px] md:text-[16px] font-[500]"
          >
            Dowam et
          </button>
        </div>
      </div>

      <div className="w-full flex md:mt-12 mt-10 my-4 justify-between items-center">
        <h1 className="text-[18px] md:text-[40px] font-[600] text-black">
          Siziň üçin saýlananlar
        </h1>
        <div className="flex gap-4">
          <div
            onClick={() => ScroollLeft(refNewProduct)}
            className="bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center"
          >
            <LeftOutlined className="text-black  text-[12px] md:text-[16px] font-[900]" />
          </div>
          <div
            onClick={() => ScroollRight(refNewProduct)}
            className="bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center"
          >
            <RightOutlined className="text-black text-[12px] md:text-[16px] font-[900]" />
          </div>
        </div>
      </div>
      <div
        ref={refNewProduct}
        className="flex gap-4 overflow-x-auto mb-8 pb-8 scrollbar-hide"
      >
        {products?.map((item) => {
          return <Card data={item} />;
        })}
      </div>
    </div>
  );
};

export default Basket;
