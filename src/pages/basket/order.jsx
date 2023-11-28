import React, { useState } from "react";
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

const Order = (props) => {
  const history = useHistory();
  const [filterOpen, setFilterOpen] = useState({
    category: true,
    brand: false,
    price: true,
    start: 0,
    end: 10000,
  });
  return (
    <div className="w-full pb-8">
      <div className="w-full flex justify-start gap-2 items-center my-4 py-4">
        <div
          onClick={() => history.push({ pathname: "/" })}
          className="text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Baş sahapa
        </div>
        <RightOutlined className="text-[14px] font-[500] text-[#888888]" />
        <div
          onClick={() => history.push({ pathname: "/basket" })}
          className="text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Sebet
        </div>
      </div>

      <div className="w-full mb-4 flex justify-between">
        <div className="flex flex-start items-end gap-2">
          <h1 className="text-[25px] font-[700] text-black">Sebet</h1>
          <p className="text-[14px] font-[400]">(2)</p>
        </div>
      </div>
      <div className="w-full pb-8 mb-8 flex justify-between gap-12">
        {/* Products */}
        <div className="w-[50%]">
          <div className="w-full my-3 flex flex-wrap justify-between">
            <input
              type="text"
              placeholder="At"
              className="text-[16px] font-[400] text-[#868686] w-[48%] outline-none h-[50px] rounded-[10px] border-[#E2E2E2] border-[1px] px-3"
            />
            <input
              type="text"
              placeholder="Familiýa"
              className="text-[16px] font-[400] text-[#868686] w-[48%] outline-none h-[50px] rounded-[10px] border-[#E2E2E2] border-[1px] px-3"
            />
          </div>
          <input
            type="text"
            placeholder="Telefon belgi"
            className="text-[16px] my-3 font-[400] text-[#868686] w-full outline-none h-[50px] rounded-[10px] border-[#E2E2E2] border-[1px] px-3"
          />
          <input
            type="text"
            placeholder="Adres"
            className="text-[16px] my-3 font-[400] text-[#868686] w-full outline-none h-[50px] rounded-[10px] border-[#E2E2E2] border-[1px] px-3"
          />
          <textarea
            type="text"
            placeholder="Adres"
            className="text-[16px] p-3 min-h-[150px] my-3 font-[400] text-[#868686] w-full outline-none h-[50px] rounded-[10px] border-[#E2E2E2] border-[1px]"
          />
        </div>

        {/* filter sidebar */}
        <div className="min-w-[400px] h-fit bg-[#F9F9F9] border-[#E2E2E2] border-[1px] rounded-[20px] p-8">
          <div className="w-full border-b-[1px] border-[#E2E2E2] pb-4 flex justify-between items-center">
            <h1 className="text-[20px] font-[700] text-black ">Jemi</h1>
          </div>

          <div className="w-full py-4 pt-8 flex justify-between items-center">
            <h1 className="text-[16px] font-[500] text-[#454545]">
              Harytlaryň jemi bahasy
            </h1>
            <h1 className="text-[16px] font-[600] whitespace-nowrap text-black">
              24,000 TMT
            </h1>
          </div>
          <div className="w-full border-b-[1px] border-[#E2E2E2]  pb-8 flex justify-between items-center">
            <h1 className="text-[16px] font-[500] text-[#454545]">
              Eltip berme
            </h1>
            <h1 className="text-[16px] font-[600] whitespace-nowrap text-black">
              15 TMT
            </h1>
          </div>
          <div className="w-full py-4  flex justify-between items-center">
            <h1 className="text-[16px] font-[500] text-[#454545]">Jemi</h1>
            <h1 className="text-[20px] font-[700] whitespace-nowrap text-black">
              24,015 TMT
            </h1>
          </div>
          <button
            onClick={() => history.push({ pathname: "/orderdone" })}
            className="w-full  rounded-[29px] bg-black text-white h-[40px] text-center text-[16px] font-[500]"
          >
            Dowam et
          </button>
        </div>
      </div>

      <div className="w-full pt-8 flex mt-12 my-4 justify-between items-center">
        <h1 className="text-[40px] font-[600] text-black">
          Siziň üçin saýlananlar
        </h1>
        <div className="flex gap-4">
          <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[44px] h-[44px] flex justify-center items-center">
            <LeftOutlined className="text-black font-[900]" />
          </div>
          <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[44px] h-[44px] flex justify-center items-center">
            <RightOutlined className="text-black font-[900]" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto mb-8 pb-8 scrollbar-hide">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Order;
