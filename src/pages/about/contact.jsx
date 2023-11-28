import React, { useState } from "react";
import {
  RightOutlined,
  LeftOutlined,
  UpOutlined,
  MinusOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import instagramwhite from "../../images/instagramwhite.svg";
import telegramwhite from "../../images/telegramwhite.svg";
import tiktokwhite from "../../images/tiktokwhite.svg";
import locationwhite from "../../images/locationwhite.svg";
import mailwhite from "../../images/mailwhite.svg";
import phonewhite from "../../images/phonewhite.svg";
import mailblack from "../../images/mailblack.svg";

import OrderCard from "../../components/orderCard";
import OrderProduct from "../../components/orderProduct";

const Contact = (props) => {
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
    <div className="w-full pb-[100px]">
      <div className="w-full flex justify-start gap-2 items-center my-4 py-4">
        <div
          onClick={() => history.push({ pathname: "/" })}
          className="text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Baş sahapa
        </div>
        <RightOutlined className="text-[14px] font-[500] text-[#888888]" />
        <div
          onClick={() => history.push({ pathname: "/contact" })}
          className="text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Habarlaşmak
        </div>
      </div>

      <div className="w-full mb-4 pb-4 flex justify-between">
        <h1 className="text-[40px] font-[600] text-black">Habarlaşmak üçin</h1>
      </div>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        width={400}
        className="rounded-[32px] p-6"
        footer={false}
        closable={false}
      >
        <div className="w-full p-4">
          <div className="w-full flex justify-center">
            <img src={mailblack} className="w-[70px] object-contain" alt="" />
          </div>
          <h1 className="text-[25px] font-[600] my-2 text-center  text-black">
            Hat üstünlikli iberildi
          </h1>
          <p className="text-[14px] text-center my-4 font-[400] text-[#454545]">
            Biziň bilin habarlaşanyňyz üçin sag boluň
          </p>

          <button
            onClick={() => setOpen(false)}
            className="h-[50px] w-[270px] mt-3 px-6 rounded-[53px] bg-black text-[16px] font-[600] text-white"
          >
            Söwda dowam et
          </button>
        </div>
      </Modal>

      <div className="w-full flex justify-start gap-8 bp-10 ">
        <div className="min-w-[340px] h-fit overflow-hidden w-[340px] bg-black relative rounded-[13px] py-12 px-10">
          <div className="absolute -top-[120px] -right-[120px] rounded-[100%] w-[212px] h-[212px] border-white border-opacity-50 border-[1px]"></div>
          <div className="absolute -bottom-[50px] -right-[50px] rounded-[100%] w-[212px] h-[212px] bg-white bg-opacity-40 "></div>
          <div className="absolute bottom-[80px] right-[80px] rounded-[100%] w-[98px] h-[98px] bg-white bg-opacity-40  "></div>
          <h1 className="w-full  text-left text-[25px] font-[600] text-white">
            Biziň bilen habarlaşyň
          </h1>
          <div className="w-full mt-8 my-3 flex justify-start gap-2 items-center text-[14px] font-[400] text-white">
            <img src={phonewhite} className="w-[18px] object-contain" alt="" />
            +993 65 214542
          </div>
          <div className="w-full my-3 flex justify-start gap-2 items-center text-[14px] font-[400] text-white">
            <img src={phonewhite} className="w-[18px] object-contain" alt="" />
            +993 65 214542
          </div>
          <div className="w-full my-3 flex justify-start gap-2 items-center text-[14px] font-[400] text-white">
            <img src={mailwhite} className="w-[18px] object-contain" alt="" />
            ecommerce@info
          </div>
          <div className="w-full my-3 flex justify-start gap-2 items-start text-[14px] font-[400] text-white">
            <img
              src={locationwhite}
              className="w-[18px] object-contain"
              alt=""
            />
            Aşgabat şäheri, Bitarap şaýoly köçesi Plan dükany
          </div>

          <div className="w-full flex gap-4 justify-start mt-10 pt-[80px]">
            <img
              src={instagramwhite}
              className="w-[24px] object-contain"
              alt=""
            />
            <img src={tiktokwhite} className="w-[24px] object-contain" alt="" />
            <img
              src={telegramwhite}
              className="w-[24px] object-contain"
              alt=""
            />
          </div>
        </div>
        <div className="w-[50%] h-fit">
          <div className="w-full mb-3 flex flex-wrap justify-between">
            <input
              type="text"
              placeholder="At"
              className="text-[16px] font-[400] text-[#868686] w-[48%] outline-none h-[50px] rounded-[10px] border-[#E2E2E2] border-[1px] px-3"
            />
            <input
              type="text"
              placeholder="Familiýa"
              className="text-[16px] font-[400] text-[#868686] w-[48%] outline-none h-[50px] rounded-[10px] border-[#E2E2E2] border-[1px] px-3"
            />
          </div>

          <input
            type="text"
            placeholder="E-poçta"
            className="text-[16px] my-3 font-[400] text-[#868686] w-full outline-none h-[50px] rounded-[10px] border-[#E2E2E2] border-[1px] px-3"
          />
          <input
            type="text"
            placeholder="Telefon belgi"
            className="text-[16px] my-3 font-[400] text-[#868686] w-full outline-none h-[50px] rounded-[10px] border-[#E2E2E2] border-[1px] px-3"
          />
          <textarea
            type="text"
            placeholder="Tekst"
            className="text-[16px] p-3 min-h-[190px] my-3 font-[400] text-[#868686] w-full outline-none  rounded-[10px] border-[#E2E2E2] border-[1px]"
          />
          <button
            onClick={() => setOpen(true)}
            className="text-[16px] w-[160px] mt-3 font-[500] text-white h-[50px] rounded-[10px] bg-black border-[1px] border-[#E2E2E2] px-6 "
          >
            Ugrat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
