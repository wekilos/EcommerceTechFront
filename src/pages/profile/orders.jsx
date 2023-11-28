import React, { useState } from "react";
import {
  RightOutlined,
  LeftOutlined,
  UpOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import user from "../../images/user.svg";
import favarite from "../../images/favarite.svg";
import orders from "../../images/orders.svg";
import logout from "../../images/logout.svg";

import OrderCard from "../../components/orderCard";

const Orders = (props) => {
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
      <div className="w-full flex justify-start gap-2 items-center my-4 py-4">
        <div
          onClick={() => history.push({ pathname: "/" })}
          className="text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Baş sahapa
        </div>
        <RightOutlined className="text-[14px] font-[500] text-[#888888]" />
        <div
          onClick={() => history.push({ pathname: "/orders" })}
          className="text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Sargytlarym
        </div>
      </div>

      <div className="w-full mb-4 pb-4 flex justify-between">
        <h1 className="text-[40px] font-[600] text-black">Sargytlarym</h1>
      </div>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        width={400}
        className="rounded-[32px] p-6"
        footer={false}
        closable={false}
      >
        <div className="w-full">
          <h1 className="text-[20px] font-[500] m-2 pb-4 border-b-[1px]  text-black">
            Hasapdan çyk
          </h1>
          <p className="text-[16px] m-2 my-4 font-[400] text-black">
            Hasapdan çykmak isleýärsiňizmi?
          </p>
          <div className="w-full mt-4 pt-4 flex justify-between items-center">
            <button
              onClick={() => setOpen(false)}
              className="h-[50px] px-6 rounded-[43px] bg-[#F9F9F9] text-[14px] font-[600] text-black"
            >
              Hasapda gal
            </button>
            <button
              onClick={() => setOpen(false)}
              className="h-[50px] px-6 rounded-[43px] bg-[#F14343] text-[14px] font-[600] text-white"
            >
              Hasapdan çyk
            </button>
          </div>
        </div>
      </Modal>
      <div className="w-full flex pb-12  justify-start gap-12">
        <div className="min-w-[235px] h-fit cursor-pointer rounded-[20px] p-4 border-[1px] border-[#E2E2E2]">
          <div
            onClick={() => history.push({ pathname: "/profile" })}
            className={
              location.pathname == "/profile"
                ? "w-full my-2 text-[14px] font-[500] text-black h-[40px] px-4 flex gap-3 justify-start items-center hover:bg-[#F9F9F9] bg-[#F9F9F9] rounded-[10px]"
                : "w-full my-2 text-[14px] font-[500] text-black h-[40px] px-4 flex gap-3 justify-start items-center hover:bg-[#F9F9F9] bg-white rounded-[10px]"
            }
          >
            <img className="w-[24px] object-contain" src={user} alt="" />
            Hasap
          </div>
          <div
            onClick={() => history.push({ pathname: "/favorites" })}
            className={
              location.pathname == "/favorites"
                ? "w-full my-2 text-[14px] font-[500] text-black h-[40px] px-4 flex gap-3 justify-start items-center hover:bg-[#F9F9F9] bg-[#F9F9F9] rounded-[10px]"
                : "w-full my-2 text-[14px] font-[500] text-black h-[40px] px-4 flex gap-3 justify-start items-center hover:bg-[#F9F9F9] bg-white rounded-[10px]"
            }
          >
            <img className="w-[24px] object-contain" src={favarite} alt="" />
            Halanlarym
          </div>
          <div
            onClick={() => history.push({ pathname: "/orders" })}
            className={
              location.pathname.includes("/orders")
                ? "w-full my-2 text-[14px] font-[500] text-black h-[40px] px-4 flex gap-3 justify-start items-center hover:bg-[#F9F9F9] bg-[#F9F9F9] rounded-[10px]"
                : "w-full my-2 text-[14px] font-[500] text-black h-[40px] px-4 flex gap-3 justify-start items-center hover:bg-[#F9F9F9] bg-white rounded-[10px]"
            }
          >
            <img className="w-[24px] object-contain" src={orders} alt="" />
            Sargytlarym
          </div>
          <div className=" w-full my-2 h-[1px] bg-[#E2E2E2]  " />
          <div
            onClick={() => setOpen(true)}
            className="w-full cursor-pointer my-2 text-[14px] font-[500] text-[#F14343] h-[40px] px-4 flex gap-3 justify-start items-center hover:bg-[#F9F9F9] bg-white rounded-[10px]"
          >
            <img className="w-[24px] object-contain" src={logout} alt="" />
            Hasapdan çyk
          </div>
        </div>

        <div className="w-full min-w-[400px] flex flex-wrap justify-start gap-8">
          <OrderCard type={"Kabul edildi"} color={"#37C760"} />
          <OrderCard type={"Kabul edilmedi"} color={"#F14343"} />
          <OrderCard type={"Garaşylýar"} color={"#FFA826"} />
          <OrderCard type={"Kabul edilmedi"} color={"#F14343"} />
          <OrderCard type={"Garaşylýar"} color={"#FFA826"} />
        </div>
      </div>
    </div>
  );
};

export default Orders;
