import React, { useContext, useEffect, useState } from "react";
import { Carousel, Modal, message } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { Context } from "../../context/context";
import { BASE_URL, axiosInstance } from "../../utils/axiosIntance";
import Card from "../../components/card";
import lang from "../../lang/home.json";

const Compare = () => {
  const history = useHistory();
  const { dil } = useContext(Context);
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getBanner();
    getCategories();
  }, []);

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
    </div>
  );
};

export default Compare;
