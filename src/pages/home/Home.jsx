import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel, Modal, message } from "antd";
import Slider from "react-slick";
import CategoryCard from "./categoryCard";
import BrandCard from "./brarndCard";
import Card from "../../components/card";
import banner from "../../images/banner.png";
import banner1 from "../../images/banner1.png";
import bannerBig from "../../images/bannerBig.png";
import { BASE_URL, axiosInstance } from "../../utils/axiosIntance";
import { Context } from "../../context/context";
import lang from "../../lang/home.json";

const Home = () => {
  const history = useHistory();
  const { dil } = useContext(Context);
  const path = useLocation();
  console.log(path);
  const [openLogin, setopenLogin] = useState(
    path.pathname == "/login" ? true : false
  );
  const [openSign, setopenSign] = useState(
    path.pathname == "/sign" ? true : false
  );
  const [openVerification, setopenVerification] = useState(
    path.pathname == "/verification" ? true : false
  );
  const [login, setLogin] = useState({
    lang: dil,
    phone: "+993",
    password: "",
  });
  const [sign, setSign] = useState({
    phone: "+993",
    code: "",
    password: "",
    password2: "",
    name: "",
  });
  const [banners, setBanners] = useState([]);
  const [bannerCard, setBannerCard] = useState([]);
  const [banner2, setBanner2] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [discountProducts, setDiscountProducts] = useState([]);
  const [favCategories, setFavCategories] = useState([]);

  const refNewProduct = useRef(null);
  const refDicountProduct = useRef(null);
  const refCat1 = useRef(null);
  const refCat2 = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  useEffect(() => {
    getBanners();
    getBannerCards();
    getBanners2();
    getCategories();
    getBrands();
    getNewProducts();
    getDiscountProducts();
  }, []);

  const getBanners = () => {
    axiosInstance
      .get("/api/banner/all", {
        params: {
          type: 1,
        },
      })
      .then((data) => {
        console.log("banner home", data.data);
        setBanners(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getBannerCards = () => {
    axiosInstance
      .get("/api/banner/all", {
        params: {
          type: 2,
        },
      })
      .then((data) => {
        console.log(data.data);
        setBannerCard(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getBanners2 = () => {
    axiosInstance
      .get("/api/banner/all", {
        params: {
          type: 3,
        },
      })
      .then((data) => {
        console.log(data.data);
        setBanner2(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCategories = () => {
    axiosInstance
      .get("/api/category/all")
      .then(async (data) => {
        console.log(data.data);
        setCategories(data.data);
        let newArray = data.data.filter((item) => {
          return item.is_favorite == true;
        });
        console.log("newArray favv:::", newArray);
        setFavCategories([...newArray]);
        console.log("newArray22", favCategories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBrands = () => {
    axiosInstance
      .get("/api/brand/all")
      .then(async (data) => {
        console.log(data.data);
        setBrands(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getNewProducts = () => {
    axiosInstance
      .get("/api/product/all", {
        params: {
          is_new: true,
        },
      })
      .then((data) => {
        console.log(data.data);
        setNewProducts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getDiscountProducts = () => {
    axiosInstance
      .get("/api/product/all", {
        params: {
          is_discount: true,
        },
      })
      .then((data) => {
        console.log(data.data);
        setDiscountProducts(data.data);
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

  const Login = () => {
    login.phone.length == 12
      ? axiosInstance
          .post("/api/user/login", login)
          .then((data) => {
            console.log(data.data);
            if (data.data.login == true) {
              setopenLogin(false);
              localStorage.setItem("userData", JSON.stringify(data.data));
              history.push({ pathname: "/profile" });
            } else {
              message.warning(data.data.msg);
            }
          })
          .catch((err) => {
            console.log(err);
          })
      : message.warning("Maglumatlary doly girizin!");
  };

  const CreateUser = () => {
    sign.phone.length == 12 && sign.password == sign.password2
      ? axiosInstance
          .post("/api/user/send", { phone: sign.phone })
          .then((data) => {
            console.log(data.data);
            setopenSign(false);
            setopenVerification(true);
          })
          .catch((err) => {
            console.log(err);
          })
      : message.warning("Maglumatlary doly girizin!");
  };

  const CheckUser = () => {
    sign.code.length == 5
      ? axiosInstance
          .post("/api/user/create", sign)
          .then((data) => {
            console.log(data.data);
            if (data.data.login == true) {
              setopenVerification(false);
              localStorage.setItem("userData", JSON.stringify(data.data));
              history.push({ pathname: "/profile" });
            } else {
              message.warning(data.data.msg);
            }
          })
          .catch((err) => {
            console.log(err);
          })
      : message.warning("Maglumatlary doly girizin!");
  };
  return (
    <div className="w-full pb-4">
      {/* <div className="!w-full flex justify-center items-center bg-footerBackground md:h-[630px] h-[230px]"> */}
      <Modal
        closable={false}
        footer={false}
        open={openLogin}
        onCancel={() => setopenLogin(false)}
      >
        <div className="w-full ">
          <div className="w-full flex justify-between">
            <h1 className="text-[16px] md:text-[20px] text-black font-[500]">
              Hoş geldiňiz !
            </h1>
            <svg
              onClick={() => setopenLogin(false)}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="4" fill="#F8F8F8" />
              <rect
                width="21"
                height="21"
                transform="translate(5 5)"
                fill="#F8F8F8"
              />
              <path
                d="M20.75 10.25L10.25 20.75"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.25 10.25L20.75 20.75"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <hr className="text-[#F5F5F5] bg-[#F5F5F5] text-[1px] my-5 md:my-6" />
          <h1 className="w-full mb-5 md:mb-6 text-[14px] md:text-[16px] font-[400] text-black">
            Ulgama giriň
          </h1>

          <div className="w-full">
            <h1 className="text-[#7E7E7E] text-[14px] font-[400] w-full mb-2">
              Telefon nomer
            </h1>
            <input
              value={login.phone}
              onChange={(e) => {
                e.target.value.slice(0, 4) == "+993" &&
                  e.target.value.length <= 12 &&
                  setLogin({ ...login, phone: e.target.value });
              }}
              className="w-full h-[40px] md:h-[50px] text-[14px] md:text-[16px] rounded-[10px] border-[1px] border-[#E2E2E2] outline-none px-4  text-black font-[500]"
              type="text"
            />
          </div>
          <div className="w-full mt-5">
            <h1 className="text-[#7E7E7E] text-[14px] font-[400] w-full mb-2">
              Açar söz
            </h1>
            <input
              value={login.password}
              onChange={(e) => {
                setLogin({ ...login, password: e.target.value });
              }}
              className="w-full h-[40px] md:h-[50px] text-[14px] md:text-[16px] rounded-[10px] border-[1px] border-[#E2E2E2] outline-none px-4   text-black font-[500]"
              type="password"
            />
          </div>
          <h1 className="w-full mt-3 text-black text-[14px] font-[400] cursor-pointer">
            Açar sözüni unutdyňyzmy ?
          </h1>
          <button
            onClick={() => Login()}
            className="bg-black h-[50px] w-full text-[14px] font-[600] text-white rounded-[46px] mt-6"
          >
            Içeri gir
          </button>
          <div className="w-full my-5 flex gap-3 justify-center items-center">
            <h1 className="text-[14px] md:text-[16px] text-black font-[400] w-fit">
              Hasabyňyz ýokmy ?
            </h1>
            <h1
              onClick={() => {
                setopenLogin(false);
                setopenSign(true);
                history.push({ pathname: "/sign" });
              }}
              className="text-[14px] md:text-[16px] cursor-pointer text-[#1D4ED8] font-[400] w-fit"
            >
              Agza bol
            </h1>
          </div>
        </div>
      </Modal>
      <Modal
        closable={false}
        footer={false}
        open={openSign}
        onCancel={() => setopenSign(false)}
      >
        <div className="w-full ">
          <div className="w-full flex justify-between">
            <h1 className="text-[16px] md:text-[20px] text-black font-[500]">
              Hoş geldiňiz !
            </h1>
            <svg
              onClick={() => setopenSign(false)}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="4" fill="#F8F8F8" />
              <rect
                width="21"
                height="21"
                transform="translate(5 5)"
                fill="#F8F8F8"
              />
              <path
                d="M20.75 10.25L10.25 20.75"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.25 10.25L20.75 20.75"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <hr className="text-[#F5F5F5] bg-[#F5F5F5] text-[1px] my-5 md:my-6" />
          <h1 className="w-full mb-5 md:mb-6 text-[14px] md:text-[16px] font-[400] text-black">
            Agza boluň
          </h1>

          <div className="w-full">
            <h1 className="text-[#7E7E7E] text-[14px] font-[400] w-full mb-2">
              Adyňyz
            </h1>
            <input
              value={sign.name}
              onChange={(e) => {
                setSign({ ...sign, name: e.target.value });
              }}
              className="w-full h-[40px] md:h-[50px] text-[14px] md:text-[16px] rounded-[10px] border-[1px] border-[#E2E2E2] outline-none px-4  text-black font-[500]"
              type="text"
            />
          </div>

          <div className="w-full mt-5">
            <h1 className="text-[#7E7E7E] text-[14px] font-[400] w-full mb-2">
              Telefon nomer
            </h1>
            <input
              value={sign.phone}
              onChange={(e) => {
                e.target.value.slice(0, 4) == "+993" &&
                  e.target.value.length <= 12 &&
                  setSign({ ...sign, phone: e.target.value });
              }}
              className="w-full h-[40px] md:h-[50px] text-[14px] md:text-[16px] rounded-[10px] border-[1px] border-[#E2E2E2] outline-none px-4  text-black font-[500]"
              type="text"
            />
          </div>
          <div className="w-full mt-5">
            <h1 className="text-[#7E7E7E] text-[14px] font-[400] w-full mb-2">
              Açar söz
            </h1>
            <input
              value={sign.password}
              onChange={(e) => {
                setSign({ ...sign, password: e.target.value });
              }}
              className="w-full h-[40px] md:h-[50px] text-[14px] md:text-[16px] rounded-[10px] border-[1px] border-[#E2E2E2] outline-none px-4   text-black font-[500]"
              type="password"
            />
          </div>
          <div className="w-full mt-5">
            <h1 className="text-[#7E7E7E] text-[14px] font-[400] w-full mb-2">
              Açar sözi tassykla
            </h1>
            <input
              value={sign.password2}
              onChange={(e) => {
                setSign({ ...sign, password2: e.target.value });
              }}
              className="w-full h-[40px] md:h-[50px] text-[14px] md:text-[16px] rounded-[10px] border-[1px] border-[#E2E2E2] outline-none px-4   text-black font-[500]"
              type="password"
            />
          </div>

          <button
            onClick={() => CreateUser()}
            className="bg-black h-[50px] w-full text-[14px] font-[600] text-white rounded-[46px] mt-6"
          >
            Agza bol
          </button>
          <div className="w-full my-5 flex gap-3 justify-center items-center">
            <h1 className="text-[14px] md:text-[16px] text-black font-[400] w-fit">
              Hasabyňyz barmy ?
            </h1>
            <h1
              onClick={() => {
                setopenLogin(true);
                setopenSign(false);
                history.push({ pathname: "/login" });
              }}
              className="text-[14px] md:text-[16px] cursor-pointer text-[#1D4ED8] font-[400] w-fit"
            >
              Içeri gir
            </h1>
          </div>
        </div>
      </Modal>
      <Modal
        closable={false}
        footer={false}
        open={openVerification}
        onCancel={() => setopenVerification(false)}
      >
        <div className="w-full ">
          <div className="w-full flex justify-between">
            <h1 className="text-[16px] md:text-[20px] text-black font-[500]">
              Tassyklama kody
            </h1>
            <svg
              onClick={() => setopenVerification(false)}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="4" fill="#F8F8F8" />
              <rect
                width="21"
                height="21"
                transform="translate(5 5)"
                fill="#F8F8F8"
              />
              <path
                d="M20.75 10.25L10.25 20.75"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.25 10.25L20.75 20.75"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <hr className="text-[#F5F5F5] bg-[#F5F5F5] text-[1px] my-5 md:my-6" />

          <div className="w-full">
            <h1 className="text-[#7E7E7E] text-[14px] font-[400] w-full mb-2">
              Telefon nomer
            </h1>
            <input
              disabled
              value={sign.phone}
              onChange={(e) => {
                e.target.value.slice(0, 4) == "+993" &&
                  e.target.value.length <= 12 &&
                  setSign({ ...sign, phone: e.target.value });
              }}
              className="w-full h-[40px] md:h-[50px] text-[14px] md:text-[16px] rounded-[10px] border-[1px] border-[#E2E2E2] outline-none px-4  text-black font-[500]"
              type="text"
            />
          </div>
          <div className="w-full mt-5">
            <h1 className="text-[#7E7E7E] text-[14px] font-[400] w-full mb-2">
              Tassyklama kody
            </h1>
            <input
              value={sign.code}
              onChange={(e) => {
                e.target.value.length <= 5 &&
                  setSign({ ...sign, code: e.target.value });
              }}
              className="w-full text-center h-[40px] md:h-[50px] text-[14px] md:text-[16px] rounded-[10px] border-[1px] border-[#E2E2E2] outline-none px-4   text-black font-[500]"
              type="number"
            />
          </div>
          <h1 className="w-full text-center mt-5 md:mt-4  text-black text-[14px] font-[400] cursor-pointer">
            00:59
          </h1>
          <h1 className="w-full text-center mt-5 md:mt-4  text-black text-[14px] font-[400] cursor-pointer">
            Tassyklama kodyny täzeden iber
          </h1>
          <button
            onClick={() => CheckUser()}
            className="bg-black h-[50px] w-full text-[14px] font-[600] text-white rounded-[46px] mt-6"
          >
            Tassykla
          </button>
          <div className="w-full my-5 flex gap-3 justify-center items-center">
            <h1 className="text-[14px] md:text-[16px] text-black font-[400] w-fit">
              Hasabyňyz ýokmy ?
            </h1>
            <h1
              onClick={() => {
                setopenVerification(false);
                setopenSign(true);
              }}
              className="text-[14px] md:text-[16px] cursor-pointer text-[#1D4ED8] font-[400] w-fit"
            >
              Agza bol
            </h1>
          </div>
        </div>
      </Modal>

      <Carousel
        slide="2"
        autoplay
        speed={1000}
        autoplaySpeed={5000}
        dots={false}
        fade={true}
        effect="fade"
        infinite={true}
      >
        {banners.map((item) => {
          console.log("banner", item);
          return (
            <div
              onClick={() => history.push({ pathname: item?.link })}
              className="block w-full px-1 cursor-pointer"
            >
              <div className="!w-full flex justify-center items-center bg-footerBackground md:h-[630px] h-[230px]">
                <img
                  className="md:h-[630px] h-[230px] object-contain"
                  src={BASE_URL + "/" + item?.img}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </Carousel>
      {/* </div> */}
      <div className="w-full my-8 flex gap-8 justify-start overflow-x-auto scrollbar-hide">
        {categories?.map((item) => {
          return <CategoryCard data={item} />;
        })}
        {categories?.map((item) => {
          return <CategoryCard data={item} />;
        })}
        {categories?.map((item) => {
          return <CategoryCard data={item} />;
        })}
      </div>
      <hr className="text-footerBackground bg-footerBackground md:my-8 my-6" />
      <div className="w-full flex my-4 justify-between items-center">
        <h1 className="text-[18px] md:text-[40px] font-[600] text-black">
          Täze gelen harytlar
        </h1>
        <div className="flex gap-4">
          <div
            onClick={() => ScroollLeft(refNewProduct)}
            className="bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center"
          >
            <LeftOutlined className="text-black  text-[12px] md:text-[16px] font-[900]" />
          </div>
          <div
            onClick={() => ScroollRight(refNewProduct)}
            className="bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center"
          >
            <RightOutlined className="text-black text-[12px] md:text-[16px] font-[900]" />
          </div>
        </div>
      </div>
      <div
        ref={refNewProduct}
        className="flex gap-4 overflow-x-auto mb-8 md:pb-8 scrollbar-hide"
      >
        {newProducts?.map((item) => {
          return <Card data={item} />;
        })}
        {newProducts?.map((item) => {
          return <Card data={item} />;
        })}
      </div>
      <hr className="text-footerBackground bg-footerBackground md:my-12 my-6" />

      <div className="w-full my-8 flex gap-8 justify-start overflow-x-auto scrollbar-hide">
        {brands?.map((item) => {
          return <BrandCard data={item} />;
        })}
        {brands?.map((item) => {
          return <BrandCard data={item} />;
        })}
        {brands?.map((item) => {
          return <BrandCard data={item} />;
        })}
      </div>

      <hr className="text-footerBackground bg-footerBackground md:my-12 my-6" />

      <div className="w-full flex mt-8 my-4 justify-between items-center">
        <h1 className="text-[18px] md:text-[40px] font-[600] text-black">
          Arzanladyşly harytlar
        </h1>
        <div className="flex gap-4">
          <div
            onClick={() => ScroollLeft(refDicountProduct)}
            className="bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center"
          >
            <LeftOutlined className="text-black text-[12px] md:text-[16px] font-[900]" />
          </div>
          <div
            onClick={() => ScroollRight(refDicountProduct)}
            className="bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center"
          >
            <RightOutlined className="text-black text-[12px] md:text-[16px] font-[900]" />
          </div>
        </div>
      </div>
      <div
        ref={refDicountProduct}
        className="flex gap-4 overflow-x-auto mb-8 md:pb-8 scrollbar-hide"
      >
        {discountProducts?.map((item) => {
          return <Card data={item} />;
        })}
        {discountProducts?.map((item) => {
          return <Card data={item} />;
        })}
        {discountProducts?.map((item) => {
          return <Card data={item} />;
        })}
      </div>
      <hr className="text-footerBackground bg-footerBackground md:my-12 my-6" />

      <div className="w-full md:my-12 my-0 block  ">
        <Slider {...settings}>
          {bannerCard.map((item) => {
            return (
              <img
                className="h-[147px] md:h-[180px] md2:h-[230px] lg:h-[257px] mr-3 object-contain block rounded-[10px]"
                src={BASE_URL + "/" + item?.img}
                alt="banner"
              />
            );
          })}
        </Slider>
      </div>
      <hr className="text-footerBackground bg-footerBackground md:my-12 my-6" />
      <div className="w-full flex md:mt-8 mt-2 my-4 justify-between items-center">
        <h1 className="text-[18px] md:text-[40px] font-[600] text-black">
          Meşhur kategoriýalar
        </h1>
      </div>
      <div className="w-full gap-0 md:gap-4 md:my-8 my-4 flex flex-wrap justify-between items-center ">
        {favCategories?.map((item, i) => {
          return (
            <div
              key={"favCat" + i}
              className="w-full md:w-[49%] cursor-pointer mb-3 md:mb-4 h-[80px] md:h-[150px]  p-3 flex gap-8 items-center bg-footerBackground rounded-[10px]"
            >
              <div className="w-[70px] md:w-[126px] flex justify-center items-center p-2 h-[70px] md:h-[126px] bg-white rounded-[7px]">
                <img
                  className="h-[90%] md:h-[85%] object-contain"
                  src={BASE_URL + "/" + item.img}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-[14px] md:text-[24px] font-[600] text-black pb-2">
                  {dil == "TM"
                    ? item.name_tm
                    : dil == "RU"
                    ? item.name_ru
                    : item.name_en}
                </h1>
                <p className="text-[12px] md:text-[16px] text-black font-[400]">
                  {item?.Products.length} harytlar
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="text-footerBackground bg-footerBackground md:my-12 my-6" />
      {favCategories?.map((item, i) => {
        return (
          i == 0 && (
            <div>
              <div className="w-full flex mt-8 my-4 justify-between items-center">
                <h1 className="text-[18px] md:text-[40px] font-[600] text-black">
                  {dil == "TM"
                    ? item?.name_tm
                    : dil == "RU"
                    ? item?.name_ru
                    : item?.name_en}
                </h1>
                <div className="flex gap-4">
                  <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center">
                    <LeftOutlined
                      onClick={() => ScroollLeft(refCat1)}
                      className="text-black text-[12px] md:text-[16px] font-[900]"
                    />
                  </div>
                  <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center">
                    <RightOutlined
                      onClick={() => ScroollRight(refCat1)}
                      className="text-black text-[12px] md:text-[16px]  font-[900]"
                    />
                  </div>
                </div>
              </div>

              <div
                ref={refCat1}
                className="flex gap-4 overflow-x-auto mb-8 md:pb-8 pb-0 scrollbar-hide"
              >
                {item?.Products?.map((itm, j) => {
                  console.log(itm);
                  return <Card data={itm} />;
                })}
              </div>
            </div>
          )
        );
      })}
      <hr className="text-footerBackground bg-footerBackground md:my-12 my-6" />
      <div className="w-full md:!my-12 !my-8 block h-[176px] md:h-[630px] justify-center items-center bg-footerBackground">
        <Carousel
          slide="2"
          autoplay
          speed={1000}
          autoplaySpeed={5000}
          dots={false}
          fade={true}
          effect="fade"
          infinite={true}
        >
          {banner2?.map((item) => {
            return (
              <img
                className="w-full h-[176px] md:h-[630px] object-cover"
                src={BASE_URL + "/" + item.img}
                alt="bannerBig"
              />
            );
          })}
        </Carousel>
      </div>
      <hr className="text-footerBackground bg-footerBackground md:my-12 my-6" />

      {favCategories?.map((item, i) => {
        return (
          i != 0 && (
            <div key={"cattall" + i}>
              <div className="w-full flex mt-8 my-4 justify-between items-center">
                <h1 className="text-[18px] md:text-[40px] font-[600] text-black">
                  {dil == "TM"
                    ? item?.name_tm
                    : dil == "RU"
                    ? item.name_ru
                    : item?.name_en}
                </h1>
                <div className="flex gap-4">
                  <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center">
                    <LeftOutlined
                      onClick={() => ScroollLeft(refCat2)}
                      className="text-black text-[12px] md:text-[16px] font-[900]"
                    />
                  </div>
                  <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center">
                    <RightOutlined
                      onClick={() => ScroollRight(refCat2)}
                      className="text-black text-[12px] md:text-[16px] font-[900]"
                    />
                  </div>
                </div>
              </div>

              <div
                ref={refCat2}
                className="flex gap-4 overflow-x-auto mb-8 md:pb-8 pb-0 scrollbar-hide"
              >
                {item?.Products?.map((item) => {
                  return <Card data={item} />;
                })}
              </div>
            </div>
          )
        );
      })}
      <hr className="text-footerBackground bg-footerBackground md:my-12 my-6" />
    </div>
  );
};

export default Home;
