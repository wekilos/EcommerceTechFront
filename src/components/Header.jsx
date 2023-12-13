import React, { useEffect, useRef, useState, useContext } from "react";
import { Context } from "../context/context";
import { useHistory, useLocation } from "react-router-dom";
import phone from "../images/phone.svg";
import arrowdown from "../images/arrowdown.svg";
import arrowdownblack from "../images/arrowdownblack.svg";
import user from "../images/user.svg";
import compare from "../images/compare.svg";
import favarite from "../images/favarite.svg";
import search from "../images/search.svg";
import basket from "../images/basket.svg";
import { axiosInstance } from "../utils/axiosIntance";

const Header = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  const [openCat2, setOpenCat2] = useState(false);
  const [market, setMarket] = useState([]);
  const path = useLocation();
  const [filter, setFilter] = useState({
    category: null,
    search: path.pathname.match("/search")
      ? path.pathname.split("/")[path.pathname.split("/") - 1]?.slice(2)
      : "",
  });
  const [categories, setCategories] = useState([]);
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
  function useOutsideAlerterCat2(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenCat2(false);
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
  const wrapperRefCat2 = useRef(null);
  useOutsideAlerter(wrapperRef);
  useOutsideAlerterCat(wrapperRefCat);
  useOutsideAlerterCat2(wrapperRefCat2);

  useEffect(() => {
    if (path.pathname.match("/search")) {
      let array = path.pathname.split("/");
      console.log("removed array:", array);
      let data = array[array.length - 1];
      console.log("removed:", data.slice(2));
      setFilter({ ...filter, search: data.slice(2) });
    } else {
      setFilter({
        ...filter,
        category: null,
        search: "",
      });
    }
  }, [path]);
  useEffect(() => {
    getCategories();
    getMarkets();
  }, []);
  const getMarkets = () => {
    axiosInstance
      .get("/api/market/all")
      .then((data) => {
        console.log(data.data);
        setMarket(data.data);
        data.data?.length > 0 &&
          localStorage.setItem("market", JSON.stringify(data.data[0]));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCategories = () => {
    axiosInstance
      .get("/api/category/all")
      .then((data) => {
        console.log(data.data);
        setCategories(data.data);
        if (path.pathname.match("/search")) {
          let array = path.pathname.split("/");
          let data2 = array[array.length - 2];
          console.log("header id", data2.slice(3));
          let cat = data.data.filter((item) => {
            return item.id == data2.slice(3);
          });
          setFilter({
            ...filter,
            category: path.pathname.match("/search") ? cat[0] : null,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full z-10 -top-[30px] bg-white sticky pb-2 md:pb-0  border-b-[2px] border-footerBackground">
      <div className="bg-black w-full">
        <div className="w-[90%] mx-auto h-[30px] flex justify-between">
          <div className="flex gap-2 justify-start items-center">
            <img
              src={phone}
              className="w-[16px] object-contain text-whitetext"
              alt="phone"
            />
            <p className="text-whitetext md:text-[12px] text-[10px] font-[500]">
              +993 62 123456
            </p>
          </div>
          <div className="hidden md:flex gap-2 justify-start items-center">
            <p className="text-whitetext text-[12px] font-[500]">
              Ähli harytlartda 10% arzaladyş !!!
            </p>
          </div>
          <div
            onClick={() => setOpen(!open)}
            ref={wrapperRef}
            className="flex cursor-pointer gap-[4px] justify-start items-center relative"
          >
            <p className="text-whitetext md:text-[12px] text-[10px] font-[500]">
              {dil == "TM" ? "Türkmen" : dil == "RU" ? "Rusiion" : "English"}
            </p>
            <img
              src={arrowdown}
              className="md:w-[9px] w-[6px] object-contain text-whitetext"
              alt="arrowdown"
            />
            {open && (
              <div className="absolute rounded-[4px] shadow-lg top-[30px] -right-[60px] w-[200px] bg-white p-2 z-10">
                <div
                  onClick={() => ChangeDil("TM")}
                  className={`w-full text-center ${
                    dil == "TM"
                      ? "bg-black text-white "
                      : "bg-white text-black "
                  } hover:bg-black  hover:text-white font-[600] mb-1 p-2 text-[14px] rounded-[6px]`}
                >
                  Turkmen
                </div>
                <div
                  onClick={() => ChangeDil("EN")}
                  className={`w-full text-center ${
                    dil == "EN"
                      ? "bg-black text-white "
                      : "bg-white text-black "
                  } hover:bg-black  hover:text-white font-[600] mb-1 p-2 text-[14px] rounded-[6px]`}
                >
                  English
                </div>
                <div
                  onClick={() => ChangeDil("RU")}
                  className={`w-full text-center ${
                    dil == "RU"
                      ? "bg-black text-white "
                      : "bg-white text-black "
                  } hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[6px]`}
                >
                  Russion
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-[90%] gap-2 bg-white  mx-auto md:h-[90px] h-[60px] justify-between flex items-center">
        <div
          onClick={() => history.push({ pathname: "/" })}
          className="text-[25px] whitespace-nowrap cursor-pointer font-[600] text-black"
        >
          E-commerce
        </div>

        <div className="w-[600px] md2:flex hidden justify-between items-center bg-[#F9F9F9] h-[40px] rounded-[6px] p-[3px]">
          <div
            onClick={() => setOpenCat(!openCat)}
            ref={wrapperRefCat}
            className="relative whitespace-nowrap cursor-pointer text-[14px] gap-4 text-black justify-between h-[34px] rounded-[4px] px-4  bg-[#E9E9E9] flex items-center"
          >
            {filter?.category?.name_tm ? (
              <div>
                {dil == "TM"
                  ? filter?.category?.name_tm
                  : dil == "RU"
                  ? filter?.category?.name_ru
                  : filter?.category?.name_en}
              </div>
            ) : (
              <div>Kategoriya</div>
            )}
            <img
              src={arrowdownblack}
              className="w-[10px] mr-2 z-10 text-black object-contain"
              alt="arrow"
            />
            {openCat && (
              <div className="absolute rounded-[4px] shadow-md top-[45px] left-0 w-[230px] bg-white p-2 z-10">
                {categories?.map((item, i) => {
                  return (
                    <div
                      key={"catfilter" + i}
                      onClick={() => setFilter({ ...filter, category: item })}
                      className="w-full px-4 text-left bg-white hover:bg-black text-black hover:text-white font-[600] p-2 text-[14px] rounded-[6px]"
                    >
                      {dil == "TM"
                        ? item?.name_tm
                        : dil == "RU"
                        ? item?.name_ru
                        : item?.name_en}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <input
            value={filter.search}
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                history.push({
                  pathname:
                    "/search/id=" +
                    (filter.category?.id ? filter.category?.id : 0) +
                    "/q=" +
                    filter.search,
                });
              }
            }}
            type="text"
            className="h-[39px] outline-none px-2 w-full bg-[#F9F9F9]"
          />
          <img
            onClick={() =>
              history.push({
                pathname:
                  "/search/id=" +
                  (filter.category?.id ? filter.category?.id : 0) +
                  "/q=" +
                  filter.search,
              })
            }
            src={search}
            className="w-[24px] cursor-pointer object-contain mr-2"
            alt="search"
          />
        </div>

        <div className="flex md:gap-5 gap-3 itemc-center justify-between">
          <div
            onClick={() => history.push({ pathname: "/compare" })}
            className="flex gap-2 cursor-pointer items-center"
          >
            <img
              className="w-[24px] object-contain"
              src={compare}
              alt="compare"
            />
            <h1 className="text-[14px] md:flex hidden font-[400] text-black">
              Deňeşdir
            </h1>
          </div>
          <div
            onClick={() => history.push({ pathname: "/favorites" })}
            className="flex gap-2 cursor-pointer items-center"
          >
            <img
              className="w-[24px] object-contain"
              src={favarite}
              alt="compare"
            />
            <h1 className="text-[14px] md:flex hidden font-[400] text-black">
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
            <h1 className="text-[14px] md:flex hidden font-[400] text-black">
              Hasap
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto md2:hidden flex  justify-between items-center bg-[#F9F9F9] h-[40px] rounded-[6px] p-[3px]">
        <div
          onClick={() => setOpenCat2(!openCat2)}
          ref={wrapperRefCat2}
          className="relative whitespace-nowrap cursor-pointer md:text-[14px] text-[10px] md:gap-4 gap-2 text-black justify-between h-[34px] rounded-[4px] md:px-4 px-2  bg-[#E9E9E9] flex items-center"
        >
          {filter?.category?.name_tm ? (
            <div>
              {dil == "TM"
                ? filter?.category?.name_tm
                : dil == "RU"
                ? filter?.category?.name_ru
                : filter?.category?.name_en}
            </div>
          ) : (
            <div>Kategoriya</div>
          )}
          <img
            src={arrowdownblack}
            className="md:w-[10px] w-[6px] mr-2 z-10 text-black object-contain"
            alt="arrow"
          />
          {openCat2 && (
            <div className="absolute rounded-[4px] shadow-md top-[45px] left-0 w-[230px] bg-white p-2 z-10">
              {categories?.map((item, i) => {
                return (
                  <div
                    key={"catfilter" + i}
                    onClick={() => setFilter({ ...filter, category: item })}
                    className="w-full px-4 text-left bg-white hover:bg-black text-black hover:text-white font-[600] p-2 text-[14px] rounded-[6px]"
                  >
                    {dil == "TM"
                      ? item?.name_tm
                      : dil == "RU"
                      ? item?.name_ru
                      : item?.name_en}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <input
          value={filter.search}
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          onKeyPress={(e) => {
            if (e.key == "Enter") {
              history.push({
                pathname:
                  "/search/id=" +
                  (filter.category?.id ? filter.category?.id : 0) +
                  "/q=" +
                  filter.search,
              });
            }
          }}
          type="text"
          className="h-[39px] outline-none px-2 w-full bg-[#F9F9F9]"
        />
        <img
          onClick={() =>
            history.push({
              pathname:
                "/search/id=" +
                (filter.category?.id ? filter.category?.id : 0) +
                "/q=" +
                filter.search,
            })
          }
          src={search}
          className="w-[24px] cursor-pointer object-contain mr-2"
          alt="search"
        />
      </div>
    </div>
  );
};

export default Header;
