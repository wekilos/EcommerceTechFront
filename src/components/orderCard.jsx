import React from "react";
import { useHistory } from "react-router-dom";
const OrderCard = (props) => {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push({ pathname: "/orders/id" })}
      className="min-w-[310px] h-fit cursor-pointer w-[310px] rounded-[10px] border-[1px] border-[#E2E2E2]"
    >
      <div className="w-full flex justify-between items-center p-4 border-b-[1px] border-[#E2E2E2]">
        <h1 className="text-[14px] font-[600] text-black">Ýagdaýy</h1>
        <div
          className={`h-[30px] rounded-[6px] bg-[${props.color}] bg-opacity-10 flex items-center justify-center px-4 text-[12px] font-[600] text-[${props.color}]`}
        >
          {props?.type}
        </div>
      </div>
      <div className="w-full px-4 py-2">
        <div className="w-full my-2 flex justify-between items-center ">
          <h1 className="text-[14px] font-[500] text-black">Sargyt belgisi</h1>
          <h1 className="text-[14px] font-[500] text-black">1213564</h1>
        </div>
        <div className="w-full my-2 flex justify-between items-center ">
          <h1 className="text-[14px] font-[500] text-black">Senesi</h1>
          <h1 className="text-[14px] font-[500] text-black">
            12.10.2023 / 14:12
          </h1>
        </div>
        <div className="w-full my-2 flex justify-between items-center ">
          <h1 className="text-[14px] font-[500] text-black">Jemi</h1>
          <h1 className="text-[14px] font-[500] text-black">14,000 TMT</h1>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
