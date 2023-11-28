import React, { useState } from "react";
import {
  RightOutlined,
  LeftOutlined,
  UpOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import orderdone from "../../images/orderdone.svg";
import Card from "../../components/card";

const OrderDone = (props) => {
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
      <div className="w-full flex items-center py-[60px] mb-[100px] justify-center">
        <div className="w-[478px] rounded-[20px] bg-footerBackground p-6 flex justify-center flex-wrap">
          <img src={orderdone} className="w-[70px] object-contain" alt="" />
          <h1 className="w-full text-center my-4 text-[25px] font-[600] text-black">
            Söwdaňyz üçin sag boluň!
          </h1>
          <p className="w-full text-center text-[14px] font-[400] text-[#454545]">
            Bellenen wagtyň dowamynda sargydyňyz gowuşar
          </p>
          <div className="w-full my-2 flex gap-3 justify-center items-center">
            <h1 className="text-[14px] font-[500] text-[#454545]">
              Sargyt belgisi:
            </h1>
            <h1 className="text-[14px] font-[500] text-black">46TTSIK</h1>
          </div>
          <button
            onClick={() => history.push({ pathname: "/" })}
            className="bg-black text-white h-[50px] rounded-[53px] px-12 my-4 text-[16px] font-[600]"
          >
            Söwda dowam et
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

export default OrderDone;
