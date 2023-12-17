import React, { useState } from "react";
import {
  RightOutlined,
  LeftOutlined,
  UpOutlined,
  MinusOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import lang from "../../lang/home.json";
import { useHistory, useLocation } from "react-router-dom";
import user from "../../images/user.svg";
import favarite from "../../images/favarite.svg";
import orders from "../../images/orders.svg";
import logout from "../../images/logout.svg";

import OrderCard from "../../components/orderCard";
import OrderProduct from "../../components/orderProduct";

const OrderInfo = (props) => {
  const history = useHistory();
  let location = useLocation();
  console.log(location.pathname);
  const [open, setOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState({
    category: true,
    brand: false,
    price: true,
    start: 0,
    end: 10000,
  });
  return (
    <div className="w-full md:pb-12 pb-6">
      <div className="w-full flex justify-start md:gap-2 gap-1 items-center md:my-4 my-2 md:py-4 py-2">
        <div
          onClick={() => history.push({ pathname: "/" })}
          className="text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Baş sahapa
        </div>
        <RightOutlined className="text-[12px] md:text-[14px] font-[500] text-[#888888]" />
        <div
          onClick={() => history.push({ pathname: "/orderinfo" })}
          className="text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Sargyt etmek hakynda
        </div>
      </div>

      <div className="w-full md:mb-4 mb-2 md:pb-4 pb-2 flex justify-between">
        <h1 className="text-[20px] md:text-[40px] font-[600] text-black">
          Sargyt etmek hakynda
        </h1>
      </div>
      <div className="w-full text-[14px] md:text-[16px] font-[400] text-black">
        Lorem ipsum dolor sit amet consectetur. Nunc odio a faucibus porttitor.
        Sapien convallis sed blandit vestibulum tortor commodo vitae. Ut laoreet
        tempus dignissim ac eu varius eleifend. Eget nunc eu orci eu mi enim id
        adipiscing mauris. Blandit tristique lacinia risus lacus. Integer
        eleifend senectus diam fames facilisis lacus risus curabitur lacus. Elit
        elit nibh nulla nascetur praesent tortor. Rhoncus a fringilla eget
        habitant sagittis libero. Adipiscing volutpat duis et in odio lacinia
        orci. Enim mauris vitae sagittis cursus viverra. Eget luctus nunc vitae
        proin. Pulvinar placerat pellentesque et ut. Ac donec maecenas morbi
        morbi tempus.
      </div>
    </div>
  );
};

export default OrderInfo;
