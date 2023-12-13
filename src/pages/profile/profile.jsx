import React, { useContext, useEffect, useState } from "react";
import {
  RightOutlined,
  LeftOutlined,
  UpOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Modal, message } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import user1 from "../../images/user.svg";
import favarite from "../../images/favarite.svg";
import orders from "../../images/orders.svg";
import logoutt from "../../images/logout.svg";
import { Context } from "../../context/context";
import { axiosInstance } from "../../utils/axiosIntance";
import { logout } from "../../utils";

const Profile = (props) => {
  const history = useHistory();
  const { dil } = useContext(Context);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [user, setUser] = useState();
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
    getUser();
  }, []);

  const getUser = () => {
    userData?.id &&
      axiosInstance
        .get("/api/user/" + userData?.id)
        .then((data) => {
          console.log(data.data);
          setUser(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const Save = () => {
    if (user?.password1 == user?.password2) {
      user?.password1?.length > 0 &&
        setUser({ ...user, password: user?.password1 });
      axiosInstance
        .patch("/api/user/update", {
          name: user?.name,
          lastname: user?.lastname,
          address: user?.address,
          password: user?.password1?.length > 0 ? user?.password1 : null,
          id: user?.id,
        })
        .then((data) => {
          console.log(data.data);
          getUser();
          setUser();
          message.success("Ýatda saklandy!");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      message.warning("Açar sözi ýalnyş!");
    }
  };

  const LogOut = () => {
    logout();
    history.push({ pathname: "/" });
  };
  return (
    <div className="w-full pb-12">
      <div className="w-full flex justify-start gap-2 items-center my-2 md:my-4 py-2 md:py-4">
        <div
          onClick={() => history.push({ pathname: "/" })}
          className="text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Baş sahapa
        </div>
        <RightOutlined className="text-[12px] md:text-[14px] font-[500] text-[#888888]" />
        <div
          onClick={() => history.push({ pathname: "/profile" })}
          className="text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Profil
        </div>
      </div>

      <div className="w-full mb-2 md:mb-4 pb-2 md:pb-4 flex justify-between">
        <h1 className="text-[20px] md:text-[40px] font-[600] text-black">
          Profile
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
              className="h-[50px] px-6 rounded-[43px] bg-[#F9F9F9] text-[14px] font-[600] text-black"
            >
              Hasapda gal
            </button>
            <button
              onClick={() => {
                setOpen(false);
                LogOut();
              }}
              className="h-[50px] px-6 rounded-[43px] bg-[#F14343] text-[14px] font-[600] text-white"
            >
              Hasapdan çyk
            </button>
          </div>
        </div>
      </Modal>
      <div className="w-full flex pb-12 flex-wrap md:flex-nowrap justify-start md:gap-12 gap-8">
        <div className="w-full md:w-[235px] !h-fit cursor-pointer rounded-[20px] md:p-4 p-2 border-[1px] border-[#E2E2E2]">
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
              location.pathname == "/orders"
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
            className="w-full cursor-pointer mt-2 text-[14px] font-[500] text-[#F14343] h-[40px] px-4 flex gap-3 justify-start items-center hover:bg-[#F9F9F9] bg-white rounded-[10px]"
          >
            <img className="w-[24px] object-contain" src={logoutt} alt="" />
            Hasapdan çyk
          </div>
        </div>

        <div className="w-full md:w-[60%] md:min-w-[400px]">
          <h1 className="text-[16px] md:text-[22px] font-[600] text-black">
            Hasap maglumatlary
          </h1>
          <div className="w-full">
            <div className="w-full my-0 md:my-3 flex flex-wrap justify-between">
              <input
                value={user?.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                type="text"
                placeholder="At"
                className="text-[14px] md:text-[16px] my-2 md:my-0 font-[400] text-[#868686] w-full md:w-[48%] outline-none h-[40px] md:h-[50px] rounded-[10px] border-[#E2E2E2] border-[1px] px-3"
              />
              <input
                value={user?.lastname}
                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
                type="text"
                placeholder="Familiýa"
                className="text-[14px] md:text-[16px] my-2 md:my-0 font-[400] text-[#868686] w-full md:w-[48%] outline-none h-[40px] md:h-[50px] rounded-[10px] border-[#E2E2E2] border-[1px] px-3"
              />
            </div>
            <input
              disabled
              value={user?.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              type="text"
              placeholder="Telefon belgi"
              className="text-[14px] md:text-[16px] my-2 md:my-3 font-[400] text-[#868686] w-full outline-none h-[40px] md:h-[50px] rounded-[10px] border-[#E2E2E2] border-[1px] px-3"
            />
            <input
              value={user?.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              type="text"
              placeholder="Adres"
              className="text-[14px] md:text-[16px] my-2 md:my-3 font-[400] text-[#868686] w-full outline-none h-[40px] md:h-[50px] rounded-[10px] border-[#E2E2E2] border-[1px] px-3"
            />
          </div>

          <h1 className="text-[16px] md:text-[22px] md:mt-10 mt-6 font-[600] text-black">
            Açar sözüni üýtget
          </h1>
          <div className="w-full md:my-3 my-0 flex flex-wrap md:flex-nowrap justify-between">
            <input
              value={user?.password1}
              onChange={(e) => setUser({ ...user, password1: e.target.value })}
              type="password"
              placeholder="Köne açar sözi"
              className="text-[14px] md:text-[16px] my-2 md:my-0 font-[400] text-[#868686] w-full md:w-[48%] outline-none h-[40px] md:h-[50px] rounded-[10px] border-[#E2E2E2] border-[1px] px-3"
            />
            <input
              value={user?.password2}
              onChange={(e) => setUser({ ...user, password2: e.target.value })}
              type="password"
              placeholder="Täze açar sözi"
              className="text-[14px] md:text-[16px] my-2 md:my-0 font-[400] text-[#868686] w-full md:w-[48%] outline-none h-[40px] md:h-[50px] rounded-[10px] border-[#E2E2E2] border-[1px] px-3"
            />
          </div>
          <button
            onClick={() => Save()}
            className="w-full text-[14px] md:text-[16px] font-[500] text-white h-[50px] rounded-[10px] bg-black mt-4"
          >
            Ýatda sakla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
