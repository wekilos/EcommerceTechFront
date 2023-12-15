import React, { useContext, useEffect, useState } from "react";
import { axiosInstance, BASE_URL } from "../utils/axiosIntance";
import { useHistory, useParams } from "react-router-dom";
import { Context } from "../context/context";
import { message } from "antd";
import {
  RightOutlined,
  PlusOutlined,
  LeftOutlined,
  MinusOutlined,
} from "@ant-design/icons";

const Compare = (props) => {
  const [data, setData] = useState([]);
  const { dil, addPro, countPro, incPro, decPro } = useContext(Context);
  const history = useHistory();
  const { pro1, pro2, pro3 } = useParams();
  const market = JSON.parse(localStorage.getItem("market"));
  const [product1, setProduct1] = useState();
  const [product2, setProduct2] = useState();
  const [product3, setProduct3] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    getPro1();
    getPro2();
    getPro3();
  }, [pro1, pro2, pro3]);

  const getPro1 = () => {
    let id = pro1?.slice(5) ? pro1?.slice(5) : 0;
    id != 0
      ? axiosInstance
          .get("/api/product/" + id)
          .then((data) => {
            setProduct1([data.data]);
            console.log("pro1", data.data);
          })
          .catch((err) => {
            console.log(err);
          })
      : setProduct1([]);
  };
  const getPro2 = () => {
    let id = pro2?.slice(5) ? pro2?.slice(5) : 0;
    id != 0
      ? axiosInstance
          .get("/api/product/" + id)
          .then((data) => {
            setProduct2([data.data]);
            console.log("pro2", data.data);
          })
          .catch((err) => {
            console.log(err);
          })
      : setProduct2([]);
  };
  const getPro3 = () => {
    let id = pro3?.slice(5) ? pro3?.slice(5) : 0;
    id != 0
      ? axiosInstance
          .get("/api/product/" + id)
          .then((data) => {
            setProduct3([data.data]);
            console.log("pro3", data.data);
          })
          .catch((err) => {
            console.log(err);
          })
      : setProduct3([]);
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

  const goToComparePro = () => {
    history.push({
      pathname:
        "/compare/pro1=" +
        (pro1?.slice(5).length > 0 ? pro1?.slice(5) : "") +
        "/pro2=" +
        (pro2?.slice(5).length > 0 ? pro2?.slice(5) : "") +
        "/pro3=" +
        (pro3?.slice(5).length > 0 ? pro3?.slice(5) : ""),
    });
  };
  return (
    <div className="w-full">
      <div className="w-full flex justify-center md:gap-5 gap-3">
        {product1?.length > 0 ? (
          product1?.map((item, i) => {
            return (
              <div key={"comproid" + i} className={`w-[300px] `}>
                <div className="w-[150px] md:w-[300px] rounded-[6px] h-[150px] flex justify-center items-center md:h-[300px] bg-[#F9F9F9]">
                  <img
                    className="h-[80%] object-contain"
                    src={
                      BASE_URL +
                      "/" +
                      (item?.ProductImgs.length > 0 && item?.ProductImgs[0].src)
                    }
                    alt=""
                  />
                </div>
                <h1 className="w-full mt-2 md:mt-4 line-clamp-2 text-left text-[12px] md:text-[18px] font-[600] text-black">
                  {dil == "TM"
                    ? item?.name_tm
                    : dil == "RU"
                    ? item?.name_ru
                    : item?.name_en}
                </h1>
                <h1 className="w-full my-2 md:my-6 text-left md:text-center text-[12px] md:text-[16px] font-[700] text-black">
                  {item?.is_discount
                    ? item?.is_valyuta
                      ? (market?.valyuta * item?.usd_price_discount).toFixed(0)
                      : item?.discount_price
                    : item?.is_valyuta
                    ? (market?.valyuta * item?.usd_price).toFixed(0)
                    : item?.price}
                  TMT
                </h1>
                {count == 0 ? (
                  <button
                    onClick={() => {
                      addProToBasket(item);
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
                        if ((await countPro(item?.id)) > 1) {
                          decPro(item?.id);
                          setCount(await countPro(item?.id));
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
                        if (item?.stock > (await countPro(item?.id))) {
                          incPro(item?.id);
                          setCount(await countPro(item?.id));
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
                  {item?.ProductParametrs?.map((element, k) => {
                    console.log("element", element);
                    return (
                      <div className="w-full" key={"parametrs" + k}>
                        <div className="w-full flex flex-wrap py-8">
                          {element?.ProductParametrItems?.map((itm, j) => {
                            console.log("itm", itm);
                            return (
                              <div
                                key={"paramItem" + j}
                                className="w-full my-3"
                              >
                                <h1 className="text-[12px] w-full md:text-center md:text-[18px] font-[600] text-black">
                                  {dil == "TM"
                                    ? itm?.name_tm
                                    : dil == "RU"
                                    ? itm?.name_ru
                                    : itm?.name_en}
                                </h1>
                                <p className="text-[12px] w-full md:text-center md:text-[18px] font-[500] text-[#868686]">
                                  {dil == "TM"
                                    ? itm?.value_tm
                                    : dil == "RU"
                                    ? itm?.value_ru
                                    : itm?.value_en}
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
          })
        ) : (
          <div
            onClick={() => goToComparePro()}
            className="h-[300px] cursor-pointer flex justify-center items-center border-[#E2E2E2] border-[1px] w-[300px] rounded-[6px]"
          >
            <PlusOutlined className="text-[22px]" />
          </div>
        )}
        {product2?.length > 0 ? (
          product2?.map((item, i) => {
            return (
              <div key={"comproid" + i} className={`w-[300px] `}>
                <div className="w-[150px] md:w-[300px] rounded-[6px] h-[150px] flex justify-center items-center md:h-[300px] bg-[#F9F9F9]">
                  <img
                    className="h-[80%] object-contain"
                    src={
                      BASE_URL +
                      "/" +
                      (item?.ProductImgs.length > 0 && item?.ProductImgs[0].src)
                    }
                    alt=""
                  />
                </div>
                <h1 className="w-full mt-2 md:mt-4 line-clamp-2 text-left text-[12px] md:text-[18px] font-[600] text-black">
                  {dil == "TM"
                    ? item?.name_tm
                    : dil == "RU"
                    ? item?.name_ru
                    : item?.name_en}
                </h1>
                <h1 className="w-full my-2 md:my-6 text-left md:text-center text-[12px] md:text-[16px] font-[700] text-black">
                  {item?.is_discount
                    ? item?.is_valyuta
                      ? (market?.valyuta * item?.usd_price_discount).toFixed(0)
                      : item?.discount_price
                    : item?.is_valyuta
                    ? (market?.valyuta * item?.usd_price).toFixed(0)
                    : item?.price}
                  TMT
                </h1>
                {count == 0 ? (
                  <button
                    onClick={() => {
                      addProToBasket(item);
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
                        if ((await countPro(item?.id)) > 1) {
                          decPro(item?.id);
                          setCount(await countPro(item?.id));
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
                        if (item?.stock > (await countPro(item?.id))) {
                          incPro(item?.id);
                          setCount(await countPro(item?.id));
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
                  {item?.ProductParametrs?.map((element, k) => {
                    console.log("element", element);
                    return (
                      <div className="w-full" key={"parametrs" + k}>
                        <div className="w-full flex flex-wrap py-8">
                          {element?.ProductParametrItems?.map((itm, j) => {
                            console.log("itm", itm);
                            return (
                              <div
                                key={"paramItem" + j}
                                className="w-full my-3"
                              >
                                <h1 className="text-[12px] w-full md:text-center md:text-[18px] font-[600] text-black">
                                  {dil == "TM"
                                    ? itm?.name_tm
                                    : dil == "RU"
                                    ? itm?.name_ru
                                    : itm?.name_en}
                                </h1>
                                <p className="text-[12px] w-full md:text-center md:text-[18px] font-[500] text-[#868686]">
                                  {dil == "TM"
                                    ? itm?.value_tm
                                    : dil == "RU"
                                    ? itm?.value_ru
                                    : itm?.value_en}
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
          })
        ) : (
          <div
            onClick={() => goToComparePro()}
            className="h-[300px] cursor-pointer flex justify-center items-center border-[#E2E2E2] border-[1px] w-[300px] rounded-[6px]"
          >
            <PlusOutlined className="text-[22px]" />
          </div>
        )}
        {product3?.length > 0 ? (
          product3?.map((item, i) => {
            return (
              <div
                key={"comproid" + i}
                className={`w-[300px] md:block hidden `}
              >
                <div className="w-[150px] md:w-[300px] rounded-[6px] h-[150px] flex justify-center items-center md:h-[300px] bg-[#F9F9F9]">
                  <img
                    className="h-[80%] object-contain"
                    src={
                      BASE_URL +
                      "/" +
                      (item?.ProductImgs.length > 0 && item?.ProductImgs[0].src)
                    }
                    alt=""
                  />
                </div>
                <h1 className="w-full mt-2 md:mt-4 line-clamp-2 text-left text-[12px] md:text-[18px] font-[600] text-black">
                  {dil == "TM"
                    ? item?.name_tm
                    : dil == "RU"
                    ? item?.name_ru
                    : item?.name_en}
                </h1>
                <h1 className="w-full my-2 md:my-6 text-left md:text-center text-[12px] md:text-[16px] font-[700] text-black">
                  {item?.is_discount
                    ? item?.is_valyuta
                      ? (market?.valyuta * item?.usd_price_discount).toFixed(0)
                      : item?.discount_price
                    : item?.is_valyuta
                    ? (market?.valyuta * item?.usd_price).toFixed(0)
                    : item?.price}
                  TMT
                </h1>
                {count == 0 ? (
                  <button
                    onClick={() => {
                      addProToBasket(item);
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
                        if ((await countPro(item?.id)) > 1) {
                          decPro(item?.id);
                          setCount(await countPro(item?.id));
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
                        if (item?.stock > (await countPro(item?.id))) {
                          incPro(item?.id);
                          setCount(await countPro(item?.id));
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
                  {item?.ProductParametrs?.map((element, k) => {
                    console.log("element", element);
                    return (
                      <div className="w-full" key={"parametrs" + k}>
                        <div className="w-full flex flex-wrap py-8">
                          {element?.ProductParametrItems?.map((itm, j) => {
                            console.log("itm", itm);
                            return (
                              <div
                                key={"paramItem" + j}
                                className="w-full my-3"
                              >
                                <h1 className="text-[12px] w-full md:text-center md:text-[18px] font-[600] text-black">
                                  {dil == "TM"
                                    ? itm?.name_tm
                                    : dil == "RU"
                                    ? itm?.name_ru
                                    : itm?.name_en}
                                </h1>
                                <p className="text-[12px] w-full md:text-center md:text-[18px] font-[500] text-[#868686]">
                                  {dil == "TM"
                                    ? itm?.value_tm
                                    : dil == "RU"
                                    ? itm?.value_ru
                                    : itm?.value_en}
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
          })
        ) : (
          <div
            onClick={() => goToComparePro()}
            className="h-[300px] cursor-pointer md:flex hidden   justify-center items-center border-[#E2E2E2] border-[1px] w-[300px] rounded-[6px]"
          >
            <PlusOutlined className="text-[22px]" />
          </div>
        )}
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
