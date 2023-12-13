import { message } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
const OrderCard = (props) => {
  const history = useHistory();
  const market = JSON.parse(localStorage.getItem("market"));

  let sum = 0;
  props?.data?.OrderProducts?.map((item) => {
    if (item?.discount_price != 0) {
      sum = sum + item?.discount_price;
    } else {
      sum = sum + item?.price;
    }
  });
  console.log(props.status);
  return (
    <div
      onClick={() => history.push({ pathname: "/orders/" + props?.data?.id })}
      className="w-full md:min-w-[310px] h-fit cursor-pointer md:w-[310px] rounded-[10px] border-[1px] border-[#E2E2E2]"
    >
      <div className="w-full flex justify-between items-center p-4 border-b-[1px] border-[#E2E2E2]">
        <h1 className="text-[14px] font-[600] text-black">Ýagdaýy</h1>
        <div
          className={`h-[30px] rounded-[6px]  bg-opacity-10 flex items-center justify-center px-4 text-[12px] font-[600]   ${
            props?.status == 1
              ? "text-yellow bg-yellow"
              : props?.status == "2"
              ? "text-green bg-green"
              : props?.status == "3"
              ? "text-red bg-red"
              : "text-green bg-green"
          } `}
        >
          {props?.type}
        </div>
      </div>
      <div className="w-full px-4 py-2">
        <div className="w-full my-2 flex justify-between items-center ">
          <h1 className="text-[14px] font-[500] text-black">Sargyt belgisi</h1>
          <h1 className="text-[14px] font-[500] text-black">
            {props?.data?.code}
          </h1>
        </div>
        <div className="w-full my-2 flex justify-between items-center ">
          <h1 className="text-[14px] font-[500] text-black">Senesi</h1>
          <h1 className="text-[14px] font-[500] text-black">
            {props?.data?.createdAt?.slice(0, 10)} /{" "}
            {props?.data?.createdAt?.slice(11, 16)}
          </h1>
        </div>
        <div className="w-full my-2 flex justify-between items-center ">
          <h1 className="text-[14px] font-[500] text-black">Jemi</h1>
          <h1 className="text-[14px] font-[500] text-black">
            {(+sum + +props?.data?.delivery_price)?.toFixed(0)} TMT
          </h1>
        </div>
      </div>
    </div>
  );
};

export default React.memo(OrderCard);
