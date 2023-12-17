import React from "react";

import instagram from "../images/instagram.svg";
import tiktok from "../images/tiktok.svg";
import telegram from "../images/telegram.svg";
import { useHistory } from "react-router-dom";
import lang from "../lang/home.json";
const Footer = () => {
  const history = useHistory();
  return (
    <div className="w-full pt-[50px] pb-[30px] h-auto bg-footerBackground">
      <div className="w-[90%] pb-[20px]  mx-auto flex flex-wrap justify-between">
        <div className="md:w-[300px] w-[100%] ">
          <div className="h-[30px] font-[700] md:text-[25px] text-[20px] md:my-4 my-3">
            E-commerce
          </div>
          <p className="text-[14px] font-[400] md:my-4 my-3 md:pr-0 pr-12">
            Lorem ipsum dolor sit amet consectetur. Ut nulla facilisi at et.
          </p>
          <div className="flex justify-start gap-4 items-center my-4">
            <div className="md:w-[38px] w-[33px] md:h-[38px] h-[33px] flex justify-center items-center rounded-[100%] bg-white">
              <img
                src={instagram}
                className="md:w-[24px] w-[21px] object-contain"
                alt="instagram"
              />
            </div>
            <div className="md:w-[38px] w-[33px] md:h-[38px] h-[33px] flex justify-center items-center rounded-[100%] bg-white">
              <img
                src={tiktok}
                className="md:w-[24px] w-[21px] object-contain"
                alt="tiktok"
              />
            </div>
            <div className="md:w-[38px] w-[33px] md:h-[38px] h-[33px] flex justify-center items-center rounded-[100%] bg-white">
              <img
                src={telegram}
                className="md:w-[24px] w-[21px] object-contain"
                alt="telegram"
              />
            </div>
          </div>
        </div>

        <div className="w-fit">
          <div className=" font-[600] text-[16px] my-4">Kompaniýa</div>
          <p
            onClick={() => history.push({ pathname: "/about" })}
            className="text-[12px] cursor-pointer font-[400] my-4"
          >
            Biz barada
          </p>
          <p
            onClick={() => history.push({ pathname: "/delivery" })}
            className="text-[12px] cursor-pointer font-[400] my-4"
          >
            Eltip bermek we töleg
          </p>
          <p
            onClick={() => history.push({ pathname: "/orderinfo" })}
            className="text-[12px] cursor-pointer font-[400] my-4"
          >
            Sargyt etmek hakynda
          </p>
        </div>
        <div className="w-fit">
          <div className=" font-[600] text-[16px] my-4">Ulanyş düzgünleri</div>
          <p
            onClick={() => history.push({ pathname: "/privacy" })}
            className="text-[12px] cursor-pointer font-[400] my-4"
          >
            Ulanyş düzgünleri
          </p>
          <p
            onClick={() => history.push({ pathname: "/sequrity" })}
            className="text-[12px] cursor-pointer font-[400] my-4"
          >
            Gizlinlik ýörelgesi
          </p>
        </div>
        <div className="w-fit mr-10">
          <div className=" font-[600] text-[16px] my-4">Kömek</div>
          <p
            onClick={() => history.push({ pathname: "/question" })}
            className="text-[12px] cursor-pointer font-[400] my-4"
          >
            Sorag - jogap
          </p>
          <p
            onClick={() => history.push({ pathname: "/contact" })}
            className="text-[12px] cursor-pointer font-[400] my-4"
          >
            Habarlaşmak
          </p>
        </div>
      </div>
      <hr className="w-[90%] mx-auto" />
      <div className="w-[90%] mx-auto pt-5 flex md:flex-nowrap flex-wrap justify-center md:justify-between items-center">
        <div className="md:text-[14px] text-[12px] font-[400] text-[#989898]">
          Made by sanlymerkez
        </div>
        <div className="md:text-[14px] text-[12px] font-[400] text-[#989898]">
          © 2023 ecommerce.com. Ähli hukuklary goraglydyr.
        </div>
      </div>
    </div>
  );
};

export default Footer;
