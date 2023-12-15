import React, { useContext, useEffect, useRef, useState } from "react";
import {
  RightOutlined,
  PlusOutlined,
  LeftOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import save from "../../images/save.svg";
import check from "../../images/check.svg";
import basketwhite from "../../images/basketwhite.svg";
import Card from "../../components/card";
import { useHistory, useParams } from "react-router-dom";
import { BASE_URL, axiosInstance } from "../../utils/axiosIntance";
import { Context } from "../../context/context";
import { message } from "antd";
import Compare from "../../components/compare";

const Product = () => {
  const history = useHistory();
  const { id } = useParams();
  const { dil, addPro, countPro, incPro, decPro } = useContext(Context);
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState({});
  const [similar, setSimilar] = useState([]);
  const [img, setImg] = useState();
  const refSimilar = useRef(null);
  const market = JSON.parse(localStorage.getItem("market"));

  useEffect(() => {
    getProduct();
  }, [id]);
  const getProduct = async () => {
    axiosInstance
      .get("/api/product/" + id)
      .then((data) => {
        console.log(data.data);
        data.data?.ProductImgs.length > 0 && setImg(data.data?.ProductImgs[0]);
        SimilarPros(data.data?.CategoryId);
        setProduct(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const SimilarPros = async (id) => {
    axiosInstance
      .get("/api/product/all", { params: { CategoryId: id } })
      .then((data) => {
        console.log(data.data);
        setSimilar(data.data);
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

  const addToFav = async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    userData?.id
      ? axiosInstance
          .post("/api/favorite/create", {
            UserId: userData?.id,
            ProductId: id,
          })
          .then((data) => {
            console.log(data.data);
            message.success("Halanlaryma goşuldy!");
          })
          .catch((err) => {
            console.log(err);
          })
      : message.warning("Ulgama girmeli!");
  };

  const addProToBasket = async (pro) => {
    if ((await countPro(id)) > 0) {
      if (product?.stock > (await countPro(id))) {
        await addPro(pro);
        message.success("Sebede gosyldy");
        setCount(await countPro(id));
      } else {
        message.warning("Stockda ýok!");
      }
    } else {
      if (product?.stock > 0) {
        await addPro(pro);
        message.success("Sebede gosyldy");
        setCount(await countPro(id));
      } else {
        message.warning("Stockda ýok!");
      }
    }
  };

  return (
    <div className="w-full pb-6">
      <div className="w-full flex justify-start gap-[2px] md:gap-2 items-center md:my-4 my-2 md:py-4 py-2">
        <div
          onClick={() => history.push({ pathname: "/" })}
          className="text-[12px] md:text-[14px] whitespace-nowrap cursor-pointer font-[500] text-[#888888]"
        >
          Baş sahapa
        </div>
        <RightOutlined className="text-[12px] md:text-[14px] font-[500] text-[#888888]" />
        <div
          onClick={() => history.push({ pathname: "/category/id" })}
          className="text-[12px] md:text-[14px] whitespace-nowrap cursor-pointer font-[500] text-[#888888]"
        >
          {dil == "TM"
            ? product?.Category?.name_tm
            : dil == "RU"
            ? product?.Category?.name_ru
            : product?.Category?.name_en}
        </div>
        <RightOutlined className="text-[12px] md:text-[14px] font-[500] text-[#888888]" />
        <div className="text-[12px] md:text-[14px] whitespace-nowrap cursor-pointer font-[500] text-[#888888]">
          {dil == "TM"
            ? product?.Brand?.name_tm
            : dil == "RU"
            ? product?.Brand?.name_ru
            : product?.Brand?.name_en}
        </div>
        <RightOutlined className="text-[12px] md:text-[14px] font-[500] text-[#888888]" />
        <div className="text-[12px] whitespace-nowrap md:text-[14px] cursor-pointer font-[500] text-[#888888]">
          {product?.bar_code}
        </div>
      </div>

      <div className="w-full my-4 flex justify-between flex-wrap ">
        <div className="w-full md:w-[49%] min-w-[350px]">
          <div className="w-full rounded-[6px] flex items-center justify-center bg-footerBackground h-[250px] md:h-[370px]">
            <img
              src={BASE_URL + "/" + img?.src}
              className="h-[90%] object-contain"
              alt="product"
            />
          </div>
          <div className="w-full flex items-center gap-4 my-6">
            {product?.ProductImgs?.map((item) => {
              return (
                <div
                  onClick={() => setImg(item)}
                  className={`w-[65px] md:w-[90px] flex items-center overflow-x-auto scrollbar-hide justify-center cursor-pointer h-[65px] md:h-[90px] bg-footerBackground rounded-[6px] border-[1px] ${
                    item.id == img.id && "border-black"
                  }`}
                >
                  <img
                    src={BASE_URL + "/" + item.src}
                    className="h-[90%] object-contain"
                    alt="product"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full  md:w-[47%] min-w-[350px] md:mt-0 mt-9">
          <div className="w-full flex justify-between items-start">
            <h1 className="w-[80%] mb-4 text-[18px] md:text-[30px] font-[600] text-black">
              {dil == "TM"
                ? product?.name_tm
                : dil == "RU"
                ? product?.name_ru
                : product?.name_en}
            </h1>
            <img
              onClick={() => addToFav()}
              src={save}
              className="w-[30px] cursor-pointer mt-[10px] object-contain"
              alt=""
            />
          </div>
          <div className="w-full ">
            <p className="w-full my-1 md:my-4 text-[14px] md:text-[16px] text-black font-[500]">
              Bar kod: {product?.bar_code}
            </p>
            <p className="w-full my-1 md:my-4 flex gap-2 items-center text-[14px] md:text-[16px] text-black font-[500]">
              Stock: {product?.stock > 0 ? "Bar" : "Gutordy"}
              {product?.stock > 0 ? (
                <img src={check} alt="" />
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 9V5.625M9 11.5016V11.5312M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9Z"
                    stroke="#FF4D4D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </p>

            {product?.is_discount ? (
              <div className=" flex justify-start items-end gap-3">
                <p className=" md:my-8 my-6 text-[18px] md:text-[20px] text-black font-[700]">
                  {product?.is_valyuta
                    ? (product?.usd_price_discount * market?.valyuta).toFixed(
                        0
                      ) + " TMT"
                    : product?.discount_price + " TMT"}
                </p>
                <p className=" my-8 text-[14px] md:text-[16px] line-through text-[#9F9F9F] font-[600]">
                  {product?.is_valyuta
                    ? (product?.usd_price * market?.valyuta).toFixed(0) + " TMT"
                    : product?.price + " TMT"}
                </p>
                <p className=" my-8 text-[14px] md:text-[16px] text-[#FF4D4D] font-[600]">
                  {product?.is_valyuta
                    ? 100 -
                      (
                        (product?.usd_price_discount * 100) /
                        product?.usd_price
                      ).toFixed(0) +
                      "%"
                    : 100 -
                      (
                        (product?.discount_price * 100) /
                        product?.price
                      ).toFixed(0) +
                      "%"}
                </p>
              </div>
            ) : (
              <p className="w-full my-8 text-[18px] md:text-[20px] text-black font-[700]">
                {product?.is_valyuta
                  ? (product?.usd_price * market?.valyuta).toFixed(0) + " TMT"
                  : product?.price + " TMT"}
              </p>
            )}

            {count == 0 ? (
              <button
                onClick={() => addProToBasket(product)}
                className="h-[40px] md:h-[50px] flex gap-3 items-center text-white px-6 pr-8 tex-[12px] md:text-[16px] font-[500] bg-black rounded-[45px]"
              >
                <img
                  className="w-[20px] md:w-[24px] object-contain"
                  src={basketwhite}
                  alt=""
                />
                Sebede goş
              </button>
            ) : (
              <div className="flex w-fit gap-6 h-[50px] justify-center items-center">
                <div
                  onClick={async () => {
                    if ((await countPro(id)) > 1) {
                      decPro(id);
                      setCount(await countPro(id));
                    } else {
                      message.warning("Sebetden Aýyr!");
                    }
                  }}
                  className="bg-black cursor-pointer text-white h-[50px] w-[50px] rounded-[100%] flex justify-center items-center text-[22px]"
                >
                  <MinusOutlined />
                </div>
                {count}
                <div
                  onClick={async () => {
                    if (product?.stock > (await countPro(id))) {
                      incPro(id);
                      setCount(await countPro(id));
                    } else {
                      message.warning("Stockda ýok!");
                    }
                  }}
                  className="bg-black cursor-pointer text-white h-[50px] w-[50px] rounded-[100%] flex justify-center items-center text-[22px]"
                >
                  <PlusOutlined />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full my-8">
        <div className="w-full flex justify-between items-center mb-8">
          <h1 className="text-[20px] md:text-[40px] font-[700] text-black">
            Aýratynlyklary
          </h1>
          <div className="text-[14px] md:text-[20px] cursor-pointer font-[500] text-black flex items-center gap-3">
            <PlusOutlined className="text-[14px] md:text-[18px] font-[900]" />
            Deňeşdir
          </div>
        </div>
        <hr className="bg-footerBackground text-footerBackground text-[1px]" />

        {product?.ProductParametrs?.map((item, i) => {
          return (
            <div key={"parametrs" + i}>
              <div className="w-full flex justify-between py-8">
                <div className="w-[38%] text-[16px] md:text-[26px] font-[700] text-black">
                  {dil == "TM"
                    ? item?.Parametr?.name_tm
                    : dil == "RU"
                    ? item?.Parametr?.name_ru
                    : item?.Parametr?.name_en}
                </div>
                <div className="w-[60%] flex flex-wrap justify-between">
                  {item?.ProductParametrItems?.map((itm, j) => {
                    return (
                      <div key={"paramItem" + j} className="w-1/2 my-3">
                        <h1 className="text-[12px] md:text-[18px] font-[600] text-black">
                          {dil == "TM"
                            ? itm?.name_tm
                            : dil == "RU"
                            ? itm?.name_ru
                            : itm?.name_en}
                        </h1>
                        <p className="text-[12px] md:text-[18px] font-[500] text-[#868686]">
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
              </div>
              <hr className="bg-footerBackground text-footerBackground text-[1px]" />
            </div>
          );
        })}
        {/* <div className="w-full flex justify-between py-8">
          <div className="w-[38%] text-[16px] md:text-[26px] font-[700] text-black">
            Ses
          </div>
          <div className="w-[60%] flex flex-wrap justify-between">
            <div className="w-1/2 my-3">
              <h1 className="text-[12px] md:text-[18px] font-[600] text-black">
                Dolby Plus
              </h1>
              <p className="text-[12px] md:text-[18px] font-[500] text-[#868686]">
                Bar
              </p>
            </div>
            <div className="w-1/2 my-3">
              <h1 className="text-[12px] md:text-[18px] font-[600] text-black">
                Dolby 5.1
              </h1>
              <p className="text-[12px] md:text-[18px] font-[500] text-[#868686]">
                Bar
              </p>
            </div>
            <div className="w-1/2 my-3">
              <h1 className="text-[12px] md:text-[18px] font-[600] text-black">
                Adaptive Sound
              </h1>
              <p className="text-[12px] md:text-[18px] font-[500] text-[#868686]">
                Bar
              </p>
            </div>
            <div className="w-1/2 my-3">
              <h1 className="text-[12px] md:text-[18px] font-[600] text-black">
                Ses görnüşi
              </h1>
              <p className="text-[12px] md:text-[18px] font-[500] text-[#868686]">
                4.2.22
              </p>
            </div>
            <div className="w-1/2 my-3">
              <h1 className="text-[12px] md:text-[18px] font-[600] text-black">
                Bluetooth ses
              </h1>
              <p className="text-[12px] md:text-[18px] font-[500] text-[#868686]">
                Bar
              </p>
            </div>
            <div className="w-1/2 my-3">
              <h1 className="text-[12px] md:text-[18px]font-[600] text-black">
                Ses akym çykyjylygy
              </h1>
              <p className="text-[12px] md:text-[18px] font-[500] text-[#868686]">
                70W
              </p>
            </div>
          </div>
        </div>

        <hr className="bg-footerBackground text-footerBackground text-[1px]" />
        <div className="w-full flex justify-between py-8">
          <div className="w-[38%] text-[16px] md:text-[26px] font-[700] text-black">
            Operasion ulgam
          </div>
          <div className="w-[60%] flex flex-wrap justify-between">
            <div className="w-1/2 my-3">
              <h1 className="text-[12px] md:text-[18px] font-[600] text-black"></h1>
              <p className="text-[12px] md:text-[18px] font-[500] text-[#868686]">
                Google TV
              </p>
            </div>
          </div>
        </div>

        <hr className="bg-footerBackground text-footerBackground text-[1px]" /> */}
      </div>

      <div className="w-full my-8">
        <Compare ProductId={id} />
      </div>
      <div className="w-full py-4 pb-8">
        {similar.length > 1 && (
          <div className="w-full flex mt-8 my-6 justify-between items-center">
            <h1 className="text-[18px] md:text-[40px] font-[600] text-black">
              Meňzeş harytlar
            </h1>
            <div className="flex gap-4">
              <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center">
                <LeftOutlined
                  onClick={() => ScroollLeft(refSimilar)}
                  className="text-black text-[12px] md:text-[16px] font-[900]"
                />
              </div>
              <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center">
                <RightOutlined
                  onClick={() => ScroollRight(refSimilar)}
                  className="text-black text-[12px] md:text-[16px] font-[900]"
                />
              </div>
            </div>
          </div>
        )}
        <div
          ref={refSimilar}
          className="flex gap-4 overflow-x-auto md:mb-8 mb-4 md:pb-8 pb-0 scrollbar-hide"
        >
          {similar?.map((item) => {
            return id != item.id && <Card data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
