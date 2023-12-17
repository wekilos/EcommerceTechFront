import React, { useState } from "react";
import {
  RightOutlined,
  DownOutlined,
  UpOutlined,
  MinusOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import lang from "../lang/home.json";
const QuestionCard = (props) => {
  const [open, setOpen] = useState(props?.open ? props.open : false);
  return (
    <div onClick={() => setOpen(!open)} className="w-full md:mt-4 mt-2">
      <div
        className={`w-full cursor-pointer md:pb-4 pb-3 border-b-[1px] ${
          !open ? "border-[#E2E2E2] " : "border-white "
        } flex justify-between items-center`}
      >
        <h1 className="text-[16px] md:text-[18px] font-[600] txt-black">
          Sargytlar nädogry ýerine ýetirilende kime ýüz tutmaly?
        </h1>
        {!open ? (
          <RightOutlined className="text-[14px] md:text-[16px]" />
        ) : (
          <DownOutlined className="text-[14px] md:text-[16px]" />
        )}
      </div>
      {open && (
        <div className="w-full text-[14px] md:text-[16px] font-[400] text-black md:pt-4 pt-2 md:pb-12 pb-6 border-b-[1px] border-[#E2E2E2]">
          Sargytlaryňyz operator tarapyndan tassyklanandan soň, ertesi gün sagat
          10:00 bilen 12:00 aralygynda eltilýär.
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
