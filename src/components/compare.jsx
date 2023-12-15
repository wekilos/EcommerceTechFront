import React, { useContext, useEffect, useState } from "react";
import { axiosInstance, BASE_URL } from "../utils/axiosIntance";
import { Context } from "../context/context";
import { message } from "antd";
import {
  RightOutlined,
  PlusOutlined,
  LeftOutlined,
  MinusOutlined,
} from "@ant-design/icons";

const Compare = (props) => {
  const [data, setData] = useState({});
  const { dil, addPro, countPro, incPro, decPro } = useContext(Context);
  const market = JSON.parse(localStorage.getItem("market"));
  const [count, setCount] = useState(0);
  useEffect(() => {
    getCompare();
  }, [props]);
  const getCompare = () => {
    axiosInstance
      .get("/api/compare/allByPro", {
        params: {
          ProductId: props?.ProductId,
        },
      })
      .then((data) => {
        setData(data.data.length > 0 && data.data[0]);
        console.log("compare", data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addProToBasket = async (pro) => {
    if ((await countPro(props?.ProductId)) > 0) {
      if (pro?.stock > (await countPro(props?.ProductId))) {
        await addPro(pro);
        message.success("Sebede gosyldy");
        setCount(await countPro(props?.ProductId));
      } else {
        message.warning("Stockda ýok!");
      }
    } else {
      if (pro?.stock > 0) {
        await addPro(pro);
        message.success("Sebede gosyldy");
        setCount(await countPro(props?.ProductId));
      } else {
        message.warning("Stockda ýok!");
      }
    }
  };
  return (
    <div className="w-full">
      <h1 className="w-full md:my-[70px] my-[35px] text-[20px] md:text-[40px] font-[700] text-black text-center">
        {dil == "TM"
          ? data?.name_tm
          : dil == "RU"
          ? data?.name_ru
          : data?.name_en}
      </h1>
      <div className="w-full flex justify-center md:gap-5 gap-3">
        {data?.ComparePros?.map((item, i) => {
          return (
            <div
              key={"comproid" + i}
              className={`w-[300px] ${i == 2 ? "md:block hidden" : ""}`}
            >
              <div className="w-[150px] md:w-[300px] rounded-[6px] h-[150px] flex justify-center items-center md:h-[300px] bg-[#F9F9F9]">
                <img
                  className="h-[80%] object-contain"
                  src={
                    BASE_URL +
                    "/" +
                    (item?.Product?.ProductImgs.length > 0 &&
                      item?.Product?.ProductImgs[0].src)
                  }
                  alt=""
                />
              </div>
              <h1 className="w-full mt-2 md:mt-4 line-clamp-2 text-left text-[12px] md:text-[18px] font-[600] text-black">
                {dil == "TM"
                  ? item?.Product?.name_tm
                  : dil == "RU"
                  ? item?.Product?.name_ru
                  : item?.Product?.name_en}
              </h1>
              <h1 className="w-full my-2 md:my-6 text-left md:text-center text-[12px] md:text-[16px] font-[700] text-black">
                {item?.Product?.is_discount
                  ? item?.Product?.is_valyuta
                    ? (
                        market?.valyuta * item?.Product?.usd_price_discount
                      ).toFixed(0)
                    : item?.Product?.discount_price
                  : item?.Product?.is_valyuta
                  ? (market?.valyuta * item?.Product?.usd_price).toFixed(0)
                  : item?.Product?.price}{" "}
                TMT
              </h1>
              {count == 0 ? (
                <button
                  onClick={() => {
                    addProToBasket(item.Product);
                  }}
                  className="flex md:mx-auto px-3 md:px-6 h-[30px] md:h-[50px] bg-black text-white  text-[10px] md:text-[16px] font-[500] gap-2 md:gap-3 justify-center items-center rounded-[45px]"
                >
                  <svg
                    className="md:w-[24px] w-[15px] md:h-[24px] h-[15px]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 17.9927C9.672 17.9927 9 18.6647 9 19.4927C9 20.3207 9.672 20.9927 10.5 20.9927C11.328 20.9927 12 20.3207 12 19.4927C12 18.6647 11.328 17.9927 10.5 17.9927Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5 17.9927C16.672 17.9927 16 18.6647 16 19.4927C16 20.3207 16.672 20.9927 17.5 20.9927C18.328 20.9927 19 20.3207 19 19.4927C19 18.6647 18.328 17.9927 17.5 17.9927Z"
                      fill="white"
                    />
                    <path
                      d="M3 5H5.331C6.297 5 7.126 5.691 7.299 6.642L8.701 14.358C8.874 15.309 9.703 16 10.669 16H17.438C18.356 16 19.156 15.375 19.379 14.485L21 8"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 7.99268L14 10.9927L11 7.99268"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 10.9927V4.99268"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Sebede goş
                </button>
              ) : (
                <div className="flex md:mx-auto w-fit md:gap-6 gap-3 h-[50px] text-[14px] md:text-[22px] justify-center items-center">
                  <div
                    onClick={async () => {
                      if ((await countPro(item?.Product?.id)) > 1) {
                        decPro(item?.Product?.id);
                        setCount(await countPro(item?.Product?.id));
                      } else {
                        message.warning("Sebetden Aýyr!");
                      }
                    }}
                    className="bg-black cursor-pointer text-white h-[30px] md:h-[50px] w-[30px] md:w-[50px] rounded-[100%] flex justify-center items-center text-[14px] md:text-[22px]"
                  >
                    <MinusOutlined />
                  </div>
                  {count}
                  <div
                    onClick={async () => {
                      if (
                        item?.Product?.stock >
                        (await countPro(item?.Product?.id))
                      ) {
                        incPro(item?.Product?.id);
                        setCount(await countPro(item?.Product?.id));
                      } else {
                        message.warning("Stockda ýok!");
                      }
                    }}
                    className="bg-black cursor-pointer text-white h-[30px] md:h-[50px] w-[30px] md:w-[50px] rounded-[100%] flex justify-center items-center text-[14px] md:text-[22px]"
                  >
                    <PlusOutlined />
                  </div>
                </div>
              )}

              <div className='w-full"'>
                {item?.Product?.ProductParametrs?.map((element, k) => {
                  console.log("element", element);
                  return (
                    <div className="w-full" key={"parametrs" + k}>
                      <div className="w-full flex flex-wrap py-8">
                        {element?.ProductParametrItems?.map((itm, j) => {
                          console.log("itm", itm);
                          return (
                            <div key={"paramItem" + j} className="w-full my-3">
                              <h1 className="text-[12px] w-full md:text-center md:text-[18px] font-[600] text-black">
                                {/* {dil == "TM"
                                  ? itm?.name_tm
                                  : dil == "RU"
                                  ? itm?.name_ru
                                  : itm?.name_en} */}
                                {itm?.name_}
                              </h1>
                              <p className="text-[12px] w-full md:text-center md:text-[18px] font-[500] text-[#868686]">
                                {itm?.value}
                                {/* {dil == "TM"
                                  ? itm?.value_tm
                                  : dil == "RU"
                                  ? itm?.value_ru
                                  : itm?.value_en} */}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      <hr className="bg-footerBackground text-footerBackground text-[1px]" />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="w-full flex justify-center gap-5">
        {data?.ComparePros?.map((element, k) => {
          return <div key={"comproParametr" + k} className="w-[300px]"></div>;
        })}
      </div> */}
    </div>
  );
};

export default Compare;
