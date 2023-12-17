import React, { useEffect, useState } from "react";
import {
  RightOutlined,
  LeftOutlined,
  UpOutlined,
  MinusOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import lang from "../../lang/home.json";
import { useHistory, useLocation, useParams } from "react-router-dom";
import user1 from "../../images/user.svg";
import favarite from "../../images/favarite.svg";
import orders from "../../images/orders.svg";
import logoutt from "../../images/logout.svg";
import { logout } from "../../utils";

import OrderCard from "../../components/orderCard";
import OrderProduct from "../../components/orderProduct";
import { axiosInstance } from "../../utils/axiosIntance";

const OrderDetails = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const [order, setOrder] = useState({});
  // const [sum, setSum] = useState(0);
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

  useEffect(() => {
    getOrder();
  }, []);

  const getOrder = async () => {
    axiosInstance
      .get("/api/order/" + id)
      .then((data) => {
        console.log(data.data);
        setOrder(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Logout = () => {
    logout();
    history.push({ pathname: "/" });
  };

  let sum = 0;
  order?.OrderProducts?.map((item) => {
    if (item?.discount_price != 0) {
      sum = sum + item?.discount_price;
    } else {
      sum = sum + item?.price;
    }
  });

  return (
    <div className="w-full md:pb-12 pb-6">
      <div className="w-full flex justify-start md:gap-2 gap-1 items-center md:my-4 my-2 md:py-4 py-2">
        <div
          onClick={() => history.push({ pathname: "/" })}
          className="text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Baş sahapa
        </div>
        <RightOutlined className="text-[12px] md:text-[14px] font-[500] text-[#888888]" />
        <div
          onClick={() => history.push({ pathname: "/orders" })}
          className="text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Sargytlarym
        </div>
        <RightOutlined className="text-[12px] md:text-[14px] font-[500] text-[#888888]" />
        <div className="text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]">
          {order?.code}
        </div>
      </div>

      <div className="w-full md:mb-4 mb-2 md:pb-4 pb-2 flex justify-between">
        <h1 className="text-[20px] md:text-[40px] font-[600] text-black">
          Sargytlarym
        </h1>
      </div>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        width={400}
        className="rounded-[32px] p-6"
        footer={false}
        closable={false}
      >
        <div className="w-full">
          <h1 className="text-[16px] md:text-[20px] font-[500] m-2 pb-4 border-b-[1px]  text-black">
            Hasapdan çyk
          </h1>
          <p className="text-[14px] md:text-[16px] m-2 my-4 font-[400] text-black">
            Hasapdan çykmak isleýärsiňizmi?
          </p>
          <div className="w-full mt-4 pt-4 flex justify-between items-center">
            <button
              onClick={() => setOpen(false)}
              className="h-[40px] md:h-[50px] px-6 rounded-[43px] bg-[#F9F9F9] text-[14px] font-[600] text-black"
            >
              Hasapda gal
            </button>
            <button
              onClick={() => {
                setOpen(false);
                Logout();
              }}
              className="h-[40px] md:h-[50px] px-6 rounded-[43px] bg-[#F14343] text-[14px] font-[600] text-white"
            >
              Hasapdan çyk
            </button>
          </div>
        </div>
      </Modal>
      <div className="w-full flex pb-12 md:flex-nowrap flex-wrap  justify-start md:gap-12 gap-8">
        <div className="md:min-w-[235px] min-w-full h-fit cursor-pointer rounded-[20px] md:p-4 p-2 border-[1px] border-[#E2E2E2]">
          <div
            onClick={() => history.push({ pathname: "/profile" })}
            className={
              location.pathname == "/profile"
                ? "w-full my-2 text-[14px] font-[500] text-black h-[40px] px-4 flex gap-3 justify-start items-center hover:bg-[#F9F9F9] bg-[#F9F9F9] rounded-[10px]"
                : "w-full my-2 text-[14px] font-[500] text-black h-[40px] px-4 flex gap-3 justify-start items-center hover:bg-[#F9F9F9] bg-white rounded-[10px]"
            }
          >
            <img className="w-[24px] object-contain" src={user1} alt="" />
            Hasap
          </div>
          <div
            onClick={() => history.push({ pathname: "/favorites" })}
            className={
              location.pathname == "/favorites"
                ? "w-full my-2 text-[14px] font-[500] text-black h-[40px] px-4 flex gap-3 justify-start items-center hover:bg-[#F9F9F9] bg-[#F9F9F9] rounded-[10px]"
                : "w-full my-2 text-[14px] font-[500] text-black h-[40px] px-4 flex gap-3 justify-start items-center hover:bg-[#F9F9F9] bg-white rounded-[10px]"
            }
          >
            <img className="w-[24px] object-contain" src={favarite} alt="" />
            Halanlarym
          </div>
          <div
            onClick={() => history.push({ pathname: "/orders" })}
            className={
              location.pathname.includes("/orders")
                ? "w-full my-2 text-[14px] font-[500] text-black h-[40px] px-4 flex gap-3 justify-start items-center hover:bg-[#F9F9F9] bg-[#F9F9F9] rounded-[10px]"
                : "w-full my-2 text-[14px] font-[500] text-black h-[40px] px-4 flex gap-3 justify-start items-center hover:bg-[#F9F9F9] bg-white rounded-[10px]"
            }
          >
            <img className="w-[24px] object-contain" src={orders} alt="" />
            Sargytlarym
          </div>
          <div className=" w-full my-2 h-[1px] bg-[#E2E2E2]  " />
          <div
            onClick={() => setOpen(true)}
            className="w-full cursor-pointer my-2 text-[14px] font-[500] text-[#F14343] h-[40px] px-4 flex gap-3 justify-start items-center hover:bg-[#F9F9F9] bg-white rounded-[10px]"
          >
            <img className="w-[24px] object-contain" src={logoutt} alt="" />
            Hasapdan çyk
          </div>
        </div>

        <div className="w-full">
          <div className="w-full flex justify-between items-center">
            <h1
              onClick={() => history.goBack()}
              className="text-[16px] whitespace-nowrap cursor-pointer font-[500] text-black flex gap-3 items-center"
            >
              <ArrowLeftOutlined /> Yza git
            </h1>
            <h1 className="text-[16px] whitespace-nowrap font-[500] text-black flex gap-3 items-center">
              Sargyt belgisi: {order?.code}
            </h1>
          </div>
          <div className="w-full my-4 md:my-6 h-[50px] md:h-[70px] md:px-6 px-3 flex justify-between items-center rounded-[6px] border-[1px] border-[#E2E2E2]">
            <div className="flex justify-start items-center md:gap-3  gap-2">
              <h1 className="text-[14px] md:text-[16px] font-[600] text-black">
                Ýagdaýy:
              </h1>
              <h1
                className={`text-[14px] md:text-[16px] font-[600] bg-opacity-10 px-3 py-1 rounded-[4px] ${
                  order?.status == 1
                    ? "text-yellow bg-yellow"
                    : order?.status == "2"
                    ? "text-green bg-green"
                    : order?.status == "3"
                    ? "text-red bg-red"
                    : "text-green bg-green"
                }`}
              >
                {order?.status == "1"
                  ? "Garaşylýar"
                  : order?.status == "2"
                  ? "Kabul edildi"
                  : order?.status == "3"
                  ? "Kabul edilmedi"
                  : "Gowşuryldy"}
              </h1>
            </div>
            <div className="text-[14px] whitespace-nowrap md:text-[16px] font-[500] text-black">
              {order?.createdAt?.slice(0, 10)} /{" "}
              {order?.createdAt?.slice(11, 16)}
            </div>
          </div>
          <div className="w-[95%] mx-auto md:my-4 my-3">
            <div className="w-full mt-4 flex justify-between items-center border-b-[1px] border-[#E2E2E2] pb-2">
              <h1 className="text-[12px] md:text-[16px] w-full md:w-[50%] font-[400] text-[#868686]">
                Haryt
              </h1>
              <h1 className="text-[16px] md:flex hidden w-[10%] font-[400] text-[#868686]">
                Bahasy
              </h1>
              <h1 className="text-[16px] md:flex hidden w-[10%] font-[400] text-[#868686]">
                Mukdary
              </h1>
              <h1 className="text-[16px] md:flex hidden text-right w-[10%] font-[400] text-[#868686]">
                Jemi
              </h1>
            </div>
            <div className="w-full mx-auto md:py-8 py-5 flex flex-wrap justify-start md:gap-10 gap-5">
              {order?.OrderProducts?.map((item) => {
                return <OrderProduct data={item} />;
              })}
            </div>
            <div className="w-full md:my-2 my-1 flex justify-between items-center">
              <h1 className="text-[12px] md:text-[16px] font-[500] text-black">
                Jemi:
              </h1>
              <h1 className="text-[12px] md:text-[16px] font-[700] text-black">
                {+sum + +order?.delivery_price} TMT
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
