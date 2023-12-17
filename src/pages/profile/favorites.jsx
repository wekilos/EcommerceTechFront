import React, { useContext, useEffect, useState } from "react";
import {
  RightOutlined,
  LeftOutlined,
  UpOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import lang from "../../lang/home.json";
import CardCategory from "../../components/cardCategoryPage";
import { useHistory } from "react-router-dom";
import checkbox from "../../images/checkbox.svg";
import checkboxborder from "../../images/checkboxborder.svg";
import BasketCard from "../../components/basketCard";
import Card from "../../components/card";
import { axiosInstance } from "../../utils/axiosIntance";
import { Context } from "../../context/context";

const Favorites = (props) => {
  const history = useHistory();
  const { dil } = useContext(Context);
  const [products, setProducts] = useState([]);
  const [filterOpen, setFilterOpen] = useState({
    category: true,
    brand: false,
    price: true,
    start: 0,
    end: 10000,
  });

  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axiosInstance
      .get("/api/favorite/all", {
        params: {
          UserId: userData.id,
        },
      })
      .then((data) => {
        console.log("favpro:", data.data);
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full pb-8">
      <div className="w-full flex justify-start gap-2 items-center md:my-4 my-2 md:py-4 py-2">
        <div
          onClick={() => history.push({ pathname: "/" })}
          className="text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Baş sahapa
        </div>
        <RightOutlined className="text-[12px] md:text-[14px] font-[500] text-[#888888]" />
        <div
          onClick={() => history.push({ pathname: "/favorites" })}
          className="text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Halanlarym
        </div>
      </div>

      <div className="w-full mb-4 pb-4 flex justify-between">
        <div className="flex flex-start items-end gap-2">
          <h1 className="text-[20px] md:text-[25px] font-[700] text-black">
            Halanlarym
          </h1>
          <p className="text-[14px] font-[400]">(2)</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 justify-start mb-8 pb-8 ">
        {products?.map((item) => {
          return <Card data={item?.Product} />;
        })}
      </div>
    </div>
  );
};

export default Favorites;
