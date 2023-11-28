import React, { useEffect, useRef, useState, useContext } from "react";
import { Context } from "../context/context";
import { useHistory } from "react-router-dom";
import phone from "../images/phone.svg";
import arrowdown from "../images/arrowdown.svg";
import arrowdownblack from "../images/arrowdownblack.svg";
import user from "../images/user.svg";
import compare from "../images/compare.svg";
import favarite from "../images/favarite.svg";
import search from "../images/search.svg";
import basket from "../images/basket.svg";

const Header = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  const { dil, ChangeDil } = useContext(Context);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  function useOutsideAlerterCat(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenCat(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  const wrapperRefCat = useRef(null);
  useOutsideAlerter(wrapperRef);
  useOutsideAlerterCat(wrapperRefCat);
  return (
    <div className="w-full z-10 -top-[30px] sticky  border-b-[2px] border-footerBackground">
      <div className="bg-black w-full">
        <div className="w-[90%] mx-auto h-[30px] flex justify-between">
          <div className="flex gap-2 justify-start items-center">
            <img
              src={phone}
              className="w-[16px] object-contain text-whitetext"
              alt="phone"
            />
            <p className="text-whitetext text-[12px] font-[500]">
              +993 62 123456
            </p>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <p className="text-whitetext text-[12px] font-[500]">
              Ähli harytlartda 10% arzaladyş !!!
            </p>
          </div>
          <div
            onClick={() => setOpen(!open)}
            ref={wrapperRef}
            className="flex cursor-pointer gap-[4px] justify-start items-center relative"
          >
            <p className="text-whitetext text-[12px] font-[500]">
              {dil == "TM" ? "Türkmen" : dil == "RU" ? "Rusiion" : "English"}
            </p>
            <img
              src={arrowdown}
              className="w-[9px] object-contain text-whitetext"
              alt="arrowdown"
            />
            {open && (
              <div className="absolute rounded-[4px] shadow-sm top-[30px] -right-[60px] w-[200px] bg-white p-2 z-10">
                <div
                  onClick={() => ChangeDil("TM")}
                  className="w-full text-center bg-white hover:bg-black text-black hover:text-white font-[600] p-2 text-[14px] rounded-[6px]"
                >
                  Turkmen
                </div>
                <div
                  onClick={() => ChangeDil("EN")}
                  className="w-full text-center bg-white hover:bg-black text-black hover:text-white font-[600] p-2 text-[14px] rounded-[6px]"
                >
                  English
                </div>
                <div
                  onClick={() => ChangeDil("RU")}
                  className="w-full text-center bg-white hover:bg-black text-black hover:text-white font-[600] p-2 text-[14px] rounded-[6px]"
                >
                  Russion
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-[90%] bg-white  mx-auto h-[90px] justify-between flex items-center">
        <div
          onClick={() => history.push({ pathname: "/" })}
          className="text-[25px] cursor-pointer font-[600] text-black"
        >
          E-commerce
        </div>

        <div className="w-[600px] flex justify-between items-center bg-[#F9F9F9] h-[40px] rounded-[6px] p-[3px]">
          <div
            onClick={() => setOpenCat(!openCat)}
            ref={wrapperRefCat}
            className="relative cursor-pointer text-[14px] gap-4 text-black justify-between h-[34px] rounded-[4px] px-4  bg-[#E9E9E9] flex items-center"
          >
            <div>Kategoriya</div>
            <img
              src={arrowdownblack}
              className="w-[10px] mr-2 z-10 text-black object-contain"
              alt="arrow"
            />
            {openCat && (
              <div className="absolute rounded-[4px] shadow-md top-[45px] left-0 w-[230px] bg-white p-2 z-10">
                <div
                  // onClick={() => ChangeDil("TM")}
                  className="w-full px-4 text-left bg-white hover:bg-black text-black hover:text-white font-[600] p-2 text-[14px] rounded-[6px]"
                >
                  Tozan sorujy
                </div>
                <div className="w-full px-4 text-left bg-white hover:bg-black text-black hover:text-white font-[600] p-2 text-[14px] rounded-[6px]">
                  Kondisonerler
                </div>
                <div className="w-full px-4 text-left bg-white hover:bg-black text-black hover:text-white font-[600] p-2 text-[14px] rounded-[6px]">
                  Gap-gaç ýuwujy maşyn
                </div>
                <div className="w-full px-4 text-left bg-white hover:bg-black text-black hover:text-white font-[600] p-2 text-[14px] rounded-[6px]">
                  Howa arassalaýjy
                </div>
                <div className="w-full px-4 text-left bg-white hover:bg-black text-black hover:text-white font-[600] p-2 text-[14px] rounded-[6px]">
                  Ojak
                </div>
                <div className="w-full px-4 text-left bg-white hover:bg-black text-black hover:text-white font-[600] p-2 text-[14px] rounded-[6px]">
                  Sowadyjy
                </div>
                <div className="w-full px-4 text-left bg-white hover:bg-black text-black hover:text-white font-[600] p-2 text-[14px] rounded-[6px]">
                  Kir ýuwujy maşyn
                </div>
                <div className="w-full px-4 text-left bg-white hover:bg-black text-black hover:text-white font-[600] p-2 text-[14px] rounded-[6px]">
                  Ütük
                </div>
              </div>
            )}
          </div>
          <input
            type="text"
            className="h-[39px] outline-none px-2 w-full bg-[#F9F9F9]"
          />
          <img
            onClick={() => history.push({ pathname: "/search" })}
            src={search}
            className="w-[24px] cursor-pointer object-contain mr-2"
            alt="search"
          />
        </div>

        <div className="flex gap-5 itemc-center justify-between">
          <div
            onClick={() => history.push({ pathname: "/compare" })}
            className="flex gap-2 cursor-pointer items-center"
          >
            <img
              className="w-[24px] object-contain"
              src={compare}
              alt="compare"
            />
            <h1 className="text-[14px] font-[400] text-black">Deňeşdir</h1>
          </div>
          <div className="flex gap-2 cursor-pointer items-center">
            <img
              className="w-[24px] object-contain"
              src={favarite}
              alt="compare"
            />
            <h1
              onClick={() => history.push({ pathname: "/favorites" })}
              className="text-[14px] font-[400] text-black"
            >
              Halanlarym
            </h1>
          </div>
          <div
            onClick={() => history.push({ pathname: "/basket" })}
            className="flex gap-2 cursor-pointer items-center"
          >
            <img
              className="w-[24px] object-contain"
              src={basket}
              alt="compare"
            />
          </div>
          <div
            onClick={() => history.push({ pathname: "/profile" })}
            className="flex gap-2 cursor-pointer items-center"
          >
            <img className="w-[24px] object-contain" src={user} alt="compare" />
            <h1 className="text-[14px] font-[400] text-black">Hasap</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
