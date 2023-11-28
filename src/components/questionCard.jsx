import React, { useState } from "react";
import {
  RightOutlined,
  DownOutlined,
  UpOutlined,
  MinusOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
const QuestionCard = (props) => {
  const [open, setOpen] = useState(props?.open ? props.open : false);
  return (
    <div onClick={() => setOpen(!open)} className="w-full mt-4 ">
      <div
        className={`w-full cursor-pointer pb-4 border-b-[1px] ${
          !open ? "border-[#E2E2E2] " : "border-white "
        } flex justify-between items-center`}
      >
        <h1 className="text-[18px] font-[600] txt-black">
          Sargytlar nädogry ýerine ýetirilende kime ýüz tutmaly?
        </h1>
        {!open ? <RightOutlined /> : <DownOutlined />}
      </div>
      {open && (
        <div className="w-full text-[16px] font-[400] text-black pt-4 pb-12 border-b-[1px] border-[#E2E2E2]">
          Sargytlaryňyz operator tarapyndan tassyklanandan soň, ertesi gün sagat
          10:00 bilen 12:00 aralygynda eltilýär.
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
