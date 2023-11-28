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

const Favorites = (props) => {
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
          onClick={() => history.push({ pathname: "/favorites" })}
          className="text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Halanlarym
        </div>
      </div>

      <div className="w-full mb-4 pb-4 flex justify-between">
        <div className="flex flex-start items-end gap-2">
          <h1 className="text-[25px] font-[700] text-black">Halanlarym</h1>
          <p className="text-[14px] font-[400]">(2)</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 justify-start mb-8 pb-8 ">
        <Card />
        <Card />
        <Card />
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

export default Favorites;
