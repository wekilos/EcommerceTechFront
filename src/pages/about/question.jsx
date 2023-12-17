import React, { useState } from "react";
import {
  RightOutlined,
  DownOutlined,
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
import QuestionCard from "../../components/questionCard";

const Question = (props) => {
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
    <div className="w-full pb-12">
      <div className="w-full flex justify-start md:gap-2 gap-1 items-center md:my-4 my-2 md:py-4 py-2">
        <div
          onClick={() => history.push({ pathname: "/" })}
          className="text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Baş sahapa
        </div>
        <RightOutlined className="text-[12px] md:text-[14px] font-[500] text-[#888888]" />
        <div
          onClick={() => history.push({ pathname: "/question" })}
          className="text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Sorag - jogap
        </div>
      </div>

      <div className="w-full md:mb-4 mb-2 md:pb-4 pb-2 flex justify-between">
        <h1 className="text-[20px] md:text-[40px] font-[600] text-black">
          Sorag - jogap
        </h1>
      </div>
      <div className="md:w-[70%] w-[90%] mx-auto">
        <QuestionCard />
        <QuestionCard open={true} />
        <QuestionCard />
        <QuestionCard />
      </div>
    </div>
  );
};

export default Question;
