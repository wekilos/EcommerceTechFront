import React, { useContext, useEffect, useState } from "react";
import { Carousel, Modal, message } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useHistory, useParams } from "react-router-dom";
import { Context } from "../../context/context";
import { BASE_URL, axiosInstance } from "../../utils/axiosIntance";
import Card from "../../components/card";
import { CompareAll } from "..";

const ComparePro = () => {
  const history = useHistory();
  const { dil } = useContext(Context);
  const { pro1, pro2, pro3 } = useParams();
  const market = JSON.parse(localStorage.getItem("market"));
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [product1, setProduct1] = useState();
  const [product2, setProduct2] = useState();
  const [product3, setProduct3] = useState();

  useEffect(() => {
    getBanner();
    getCategories();
  }, []);

  useEffect(() => {
    getPro1();
    getPro2();
    getPro3();
  }, [pro1, pro2, pro3]);

  const getCategories = () => {
    axiosInstance
      .get("/api/category/all")
      .then((data) => {
        setCategories(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getBanner = () => {
    axiosInstance
      .get("/api/banner/all", {
        params: {
          type: 4,
        },
      })
      .then((data) => {
        console.log(data.data);
        setBanners(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ScroollRight = (refNewProduct) => {
    refNewProduct.current.scrollBy(200, 0);
  };
  const ScroollLeft = (refNewProduct) => {
    refNewProduct.current.scrollBy(-200, 0);
  };

  const getPro1 = () => {
    let id = pro1?.slice(5) ? pro1?.slice(5) : 0;
    id != 0
      ? axiosInstance
          .get("/api/product/" + id)
          .then((data) => {
            setProduct1(data.data);
            console.log("pro1", data.data);
          })
          .catch((err) => {
            console.log(err);
          })
      : setProduct1();
  };
  const getPro2 = () => {
    let id = pro2?.slice(5) ? pro2?.slice(5) : 0;
    id != 0
      ? axiosInstance
          .get("/api/product/" + id)
          .then((data) => {
            setProduct2(data.data);
            console.log("pro2", data.data);
          })
          .catch((err) => {
            console.log(err);
          })
      : setProduct2();
  };
  const getPro3 = () => {
    let id = pro3?.slice(5) ? pro3?.slice(5) : 0;
    id != 0
      ? axiosInstance
          .get("/api/product/" + id)
          .then((data) => {
            setProduct3(data.data);
            console.log("pro3", data.data);
          })
          .catch((err) => {
            console.log(err);
          })
      : setProduct3();
  };

  const remove1 = () => {
    history.push({
      pathname:
        "/compare/pro1=" +
        "/pro2=" +
        (pro2?.slice(5).length > 0 ? pro2?.slice(5) : "") +
        "/pro3=" +
        (pro3?.slice(5).length > 0 ? pro3?.slice(5) : ""),
    });
    setProduct1();
  };
  const remove2 = () => {
    history.push({
      pathname:
        "/compare/pro1=" +
        (pro1?.slice(5).length > 0 ? pro1?.slice(5) : "") +
        "/pro2=" +
        "/pro3=" +
        (pro3?.slice(5).length > 0 ? pro3?.slice(5) : ""),
    });
    setProduct2();
  };
  const remove3 = () => {
    history.push({
      pathname:
        "/compare/pro1=" +
        (pro1?.slice(5).length > 0 ? pro1?.slice(5) : "") +
        "/pro2=" +
        (pro2?.slice(5).length > 0 ? pro2?.slice(5) : "") +
        "/pro3=",
    });
    setProduct3();
  };

  const compareAll = () => {
    history.push({
      pathname:
        "/compareAll/pro1=" +
        (pro1?.slice(5).length > 0 ? pro1?.slice(5) : "") +
        "/pro2=" +
        (pro2?.slice(5).length > 0 ? pro2?.slice(5) : "") +
        "/pro3=" +
        (pro3?.slice(5).length > 0 ? pro3?.slice(5) : ""),
    });
  };

  const removeAll = () => {
    history.push({
      pathname: "/compare/pro1=" + "/pro2=" + "/pro3=",
    });
  };
  return (
    <div className="w-full">
      <h1 className="w-full my-[30px] md:my-11 text-[20px] md:text-[40px] font-[700] text-black">
        Deňeşdirme sahypasy
      </h1>
      <div className="w-full h-[125px] md:h-[330px] rounded-[6px] md:rounded-[10px] bg-footerBackground ">
        <Carousel
          slide="2"
          autoplay
          speed={1000}
          autoplaySpeed={5000}
          dots={false}
          fade={true}
          infinite={true}
        >
          {banners.map((item) => {
            console.log("banner", item);
            return (
              <div
                // onClick={() => history.push({ pathname: item?.link })}
                className="block w-full px-1 cursor-pointer"
              >
                <div className="!w-full flex justify-center rounded-[6px] md:rounded-[10px] items-center bg-footerBackground   h-[125px] md:h-[330px]">
                  <img
                    className=" h-[125px] md:h-[330px] rounded-[6px] md:rounded-[10px] w-full object-cover"
                    src={BASE_URL + "/" + item?.img}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="w-full">
        {categories?.map((category) => {
          return (
            category?.Products?.length > 0 && (
              <div className="w-full">
                <div className="w-full flex mt-8 my-4 justify-between items-center">
                  <h1 className="text-[18px] md:text-[40px] font-[600] text-black">
                    {dil == "TM"
                      ? category?.name_tm
                      : dil == "RU"
                      ? category?.name_ru
                      : category?.name_en}
                  </h1>
                  <div className="flex gap-4">
                    <div
                      // onClick={() => ScroollLeft(refDicountProduct)}
                      className="bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center"
                    >
                      <LeftOutlined className="text-black text-[12px] md:text-[16px] font-[900]" />
                    </div>
                    <div
                      // onClick={() => ScroollRight(refDicountProduct)}
                      className="bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center"
                    >
                      <RightOutlined className="text-black text-[12px] md:text-[16px] font-[900]" />
                    </div>
                  </div>
                </div>
                <div
                  // ref={refDicountProduct}
                  className="flex gap-4 overflow-x-auto mb-8 md:pb-8 scrollbar-hide"
                >
                  {category?.Products?.map((item) => {
                    return <Card data={item} compare={true} />;
                  })}
                </div>
              </div>
            )
          );
        })}
      </div>

      <div className="w-full pt-[35px] pb-[25px] h-[330px] bg-white z-10 sticky bottom-0">
        <div className="w-full flex justify-between">
          <h1 className="text-[14px] md:text-[25px] font-[600] text-black">
            Deňeşdirilijek harytlar
          </h1>
          <h1
            onClick={() => removeAll()}
            className="text-[18px] md:block hidden cursor-pointer text-blue font-[400] underline"
          >
            Arassala
          </h1>
        </div>
        <div className="w-full mt-[30px] flex justify-between">
          <div className="h-[70px] md:h-[139px] p-2 md:p-4 md:w-[30%] w-[48%] cursor-pointer rounded-[10px]  flex justify-center items-center border-[1px] border-[#E2E2E2]">
            {product1 ? (
              <div
                onClick={() => remove1()}
                className="w-full relative flex gap-5 justify-between items-center"
              >
                <div className="h-[60px] md:h-[139px] w-[60px] md:w-[109px] bg-[#F9F9F9] rounded-[6px] flex items-center justify-center">
                  <img
                    className="h-[80%] object-contain"
                    src={
                      BASE_URL +
                      "/" +
                      (product1?.ProductImgs?.length > 0 &&
                        product1?.ProductImgs[0].src)
                    }
                    alt=""
                  />
                </div>
                <div className="w-full h-full gap-3 flex flex-wrap">
                  <h1 className="w-full line-clamp-2 text-[9px] md:text-[16px] text-black font-[500]">
                    {dil == "TM"
                      ? product1?.name_tm
                      : dil == "RU"
                      ? product1?.name_ru
                      : product1?.name_en}
                  </h1>
                  <h1 className="w-full text-[9px] md:text-[18px] text-black font-[700]">
                    {product1?.is_valyuta
                      ? product1?.is_discount
                        ? (
                            product1?.usd_price_discount * market?.valyuta
                          ).toFixed(0) + " TMT"
                        : (product1?.usd_price * market?.valyuta).toFixed(0) +
                          " TMT"
                      : product1?.is_discount
                      ? product1?.discount_price + " TMT"
                      : product1?.price + " TMT"}
                  </h1>
                </div>
                <div className="absolute top-[6px] md:top-[15px] right-[6px] md:right-[15px]">
                  <svg
                    className="w-[10px] h-[10px] md:w-[18px] md:h-[18px]"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.25 12.0001C11.25 12.4126 10.9125 12.7501 10.5 12.7501C10.0875 12.7501 9.75 12.4126 9.75 12.0001V8.25007C9.75 7.83757 10.0875 7.50007 10.5 7.50007C10.9125 7.50007 11.25 7.83757 11.25 8.25007V12.0001ZM7.245 3.75007C7.74 3.21757 8.415 3.00757 9 3.00757C9.585 3.00757 10.26 3.21757 10.755 3.75007H7.245ZM8.25 12.0001C8.25 12.4126 7.9125 12.7501 7.5 12.7501C7.0875 12.7501 6.75 12.4126 6.75 12.0001V8.25007C6.75 7.83757 7.0875 7.50007 7.5 7.50007C7.9125 7.50007 8.25 7.83757 8.25 8.25007V12.0001ZM15.75 3.75007H12.51C11.8875 2.37007 10.5675 1.50757 9 1.50757C7.4325 1.50757 6.1125 2.37007 5.49 3.75007H2.25C1.8375 3.75007 1.5 4.08757 1.5 4.50007C1.5 4.91257 1.8375 5.25007 2.25 5.25007H3V11.5351C3 15.6526 5.1 16.5001 8.25 16.5001H9.75C12.9 16.5001 15 15.6526 15 11.5351V5.25007H15.75C16.1625 5.25007 16.5 4.91257 16.5 4.50007C16.5 4.08757 16.1625 3.75007 15.75 3.75007Z"
                      fill="#888888"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <h1 className="text-[18px] font-[500] text-[#888888]">
                Haryt ýok
              </h1>
            )}
          </div>

          <div className="h-[70px] md:h-[139px] p-2 md:p-4 md:w-[30%] w-[48%] cursor-pointer rounded-[10px]  flex justify-center items-center border-[1px] border-[#E2E2E2]">
            {product2 ? (
              <div
                onClick={() => remove2()}
                className="w-full relative flex md:gap-5 gap-2 justify-between items-center"
              >
                <div className="h-[60px] md:h-[139px] w-[60px] md:w-[109px] bg-[#F9F9F9] rounded-[6px] flex items-center justify-center">
                  <img
                    className="h-[80%] object-contain"
                    src={
                      BASE_URL +
                      "/" +
                      (product2?.ProductImgs?.length > 0 &&
                        product2?.ProductImgs[0].src)
                    }
                    alt=""
                  />
                </div>
                <div className="w-full h-full md:gap-3 gap-1 flex flex-wrap">
                  <h1 className="w-full line-clamp-2 text-[9px] md:text-[16px] text-black font-[500]">
                    {dil == "TM"
                      ? product2?.name_tm
                      : dil == "RU"
                      ? product2?.name_ru
                      : product2?.name_en}
                  </h1>
                  <h1 className="w-full text-[9px] md:text-[18px] text-black font-[700]">
                    {product2?.is_valyuta
                      ? product2?.is_discount
                        ? (
                            product2?.usd_price_discount * market?.valyuta
                          ).toFixed(0) + " TMT"
                        : (product2?.usd_price * market?.valyuta).toFixed(0) +
                          " TMT"
                      : product2?.is_discount
                      ? product2?.discount_price + " TMT"
                      : product2?.price + " TMT"}
                  </h1>
                </div>
                <div className="absolute top-[6px] md:top-[15px] right-[6px] md:right-[15px]">
                  <svg
                    className="w-[10px] h-[10px] md:w-[18px] md:h-[18px]"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.25 12.0001C11.25 12.4126 10.9125 12.7501 10.5 12.7501C10.0875 12.7501 9.75 12.4126 9.75 12.0001V8.25007C9.75 7.83757 10.0875 7.50007 10.5 7.50007C10.9125 7.50007 11.25 7.83757 11.25 8.25007V12.0001ZM7.245 3.75007C7.74 3.21757 8.415 3.00757 9 3.00757C9.585 3.00757 10.26 3.21757 10.755 3.75007H7.245ZM8.25 12.0001C8.25 12.4126 7.9125 12.7501 7.5 12.7501C7.0875 12.7501 6.75 12.4126 6.75 12.0001V8.25007C6.75 7.83757 7.0875 7.50007 7.5 7.50007C7.9125 7.50007 8.25 7.83757 8.25 8.25007V12.0001ZM15.75 3.75007H12.51C11.8875 2.37007 10.5675 1.50757 9 1.50757C7.4325 1.50757 6.1125 2.37007 5.49 3.75007H2.25C1.8375 3.75007 1.5 4.08757 1.5 4.50007C1.5 4.91257 1.8375 5.25007 2.25 5.25007H3V11.5351C3 15.6526 5.1 16.5001 8.25 16.5001H9.75C12.9 16.5001 15 15.6526 15 11.5351V5.25007H15.75C16.1625 5.25007 16.5 4.91257 16.5 4.50007C16.5 4.08757 16.1625 3.75007 15.75 3.75007Z"
                      fill="#888888"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <h1 className="text-[18px] font-[500] text-[#888888]">
                Haryt ýok
              </h1>
            )}
          </div>

          <div className="h-[139px] md:flex hidden p-4 w-[30%] cursor-pointer rounded-[10px]   justify-center items-center border-[1px] border-[#E2E2E2]">
            {product3 ? (
              <div
                onClick={() => remove3()}
                className="w-full relative flex gap-5 justify-between items-center"
              >
                <div className="h-[109px] w-[109px] bg-[#F9F9F9] rounded-[6px] flex items-center justify-center">
                  <img
                    className="h-[80%] object-contain"
                    src={
                      BASE_URL +
                      "/" +
                      (product3?.ProductImgs?.length > 0 &&
                        product3?.ProductImgs[0].src)
                    }
                    alt=""
                  />
                </div>
                <div className="w-full h-full gap-3 flex flex-wrap">
                  <h1 className="w-full line-clamp-2 text-[16px] text-black font-[500]">
                    {dil == "TM"
                      ? product3?.name_tm
                      : dil == "RU"
                      ? product3?.name_ru
                      : product3?.name_en}
                  </h1>
                  <h1 className="w-full text-[18px] text-black font-[700]">
                    {product3?.is_valyuta
                      ? product3?.is_discount
                        ? (
                            product3?.usd_price_discount * market?.valyuta
                          ).toFixed(0) + " TMT"
                        : (product3?.usd_price * market?.valyuta).toFixed(0) +
                          " TMT"
                      : product3?.is_discount
                      ? product3?.discount_price + " TMT"
                      : product3?.price + " TMT"}
                  </h1>
                </div>
                <div className="absolute top-[15px] right-[15px]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.25 12.0001C11.25 12.4126 10.9125 12.7501 10.5 12.7501C10.0875 12.7501 9.75 12.4126 9.75 12.0001V8.25007C9.75 7.83757 10.0875 7.50007 10.5 7.50007C10.9125 7.50007 11.25 7.83757 11.25 8.25007V12.0001ZM7.245 3.75007C7.74 3.21757 8.415 3.00757 9 3.00757C9.585 3.00757 10.26 3.21757 10.755 3.75007H7.245ZM8.25 12.0001C8.25 12.4126 7.9125 12.7501 7.5 12.7501C7.0875 12.7501 6.75 12.4126 6.75 12.0001V8.25007C6.75 7.83757 7.0875 7.50007 7.5 7.50007C7.9125 7.50007 8.25 7.83757 8.25 8.25007V12.0001ZM15.75 3.75007H12.51C11.8875 2.37007 10.5675 1.50757 9 1.50757C7.4325 1.50757 6.1125 2.37007 5.49 3.75007H2.25C1.8375 3.75007 1.5 4.08757 1.5 4.50007C1.5 4.91257 1.8375 5.25007 2.25 5.25007H3V11.5351C3 15.6526 5.1 16.5001 8.25 16.5001H9.75C12.9 16.5001 15 15.6526 15 11.5351V5.25007H15.75C16.1625 5.25007 16.5 4.91257 16.5 4.50007C16.5 4.08757 16.1625 3.75007 15.75 3.75007Z"
                      fill="#888888"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <h1 className="text-[18px] font-[500] text-[#888888]">
                Haryt ýok
              </h1>
            )}
          </div>
        </div>
        <div className="w-full flex justify-end mt-6">
          <button
            onClick={() => compareAll()}
            className="bg-black md:w-fit w-full h-[50px] text-[16px] font-[500] text-white rounded-[10px] px-5 flex items-center justify-center gap-3"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.043 15.9933C21.043 15.9673 21.03 15.9453 21.028 15.9193C21.004 15.4263 20.803 14.9333 20.409 14.5413L16.659 11.2553C16.245 10.8923 15.612 10.9313 15.248 11.3473C14.884 11.7633 14.926 12.3943 15.341 12.7593L17.961 14.9933H12C11.447 14.9933 11 15.4403 11 15.9933C11 16.5463 11.447 16.9933 12 16.9933H17.911L15.34 19.2563C14.925 19.6213 14.885 20.2533 15.249 20.6673C15.447 20.8913 15.723 21.0073 16 21.0073C16.235 21.0073 16.471 20.9253 16.66 20.7583L20.457 17.4143C20.833 17.0383 21.023 16.5493 21.031 16.0503C21.033 16.0303 21.043 16.0133 21.043 15.9933Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.05 8.99321H12C12.553 8.99321 13 8.54621 13 7.99321C13 7.44021 12.553 6.99321 12 6.99321H6.165L8.704 4.75821C9.118 4.39221 9.158 3.76121 8.794 3.34621C8.428 2.93121 7.797 2.89221 7.382 3.25621L3.586 6.60021C3.222 6.96321 3.036 7.43421 3.016 7.91521C3.014 7.94221 3 7.96521 3 7.99321C3 8.00721 3.008 8.01921 3.008 8.03421C3.018 8.54721 3.223 9.06521 3.634 9.47321L7.384 12.7592C7.574 12.9252 7.809 13.0072 8.043 13.0072C8.32 13.0072 8.598 12.8912 8.795 12.6662C9.159 12.2502 9.117 11.6182 8.702 11.2552L6.05 8.99321Z"
                fill="white"
              />
            </svg>
            Deňeşdir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparePro;
