import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CategoryCard from "./categoryCard";
import Card from "../../components/card";
import banner from "../../images/banner.png";
import banner1 from "../../images/banner1.png";
import bannerBig from "../../images/bannerBig.png";
const Home = () => {
  return (
    <div className="w-full pb-4">
      <div className="w-full bg-footerBackground h-[630px]"></div>
      <div className="w-full my-8 flex gap-8 justify-between overflow-x-auto scrollbar-hide">
        <CategoryCard data={{ img: "", title: "Telewizor" }} />
        <CategoryCard data={{ img: "", title: "Telewizor" }} />
        <CategoryCard data={{ img: "", title: "Telewizor" }} />
        <CategoryCard data={{ img: "", title: "Telewizor" }} />
        <CategoryCard data={{ img: "", title: "Telewizor" }} />
        <CategoryCard data={{ img: "", title: "Telewizor" }} />
        <CategoryCard data={{ img: "", title: "Telewizor" }} />
        <CategoryCard data={{ img: "", title: "Telewizor" }} />
        <CategoryCard data={{ img: "", title: "Telewizor" }} />
        <CategoryCard data={{ img: "", title: "Telewizor" }} />
      </div>

      <hr className="text-footerBackground bg-footerBackground my-8" />

      <div className="w-full flex my-4 justify-between items-center">
        <h1 className="text-[40px] font-[600] text-black">
          Täze gelen harytlar
        </h1>
        <div className="flex gap-4">
          <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[44px] h-[44px] flex justify-center items-center">
            <LeftOutlined className="text-black font-[900]" />
          </div>
          <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[44px] h-[44px] flex justify-center items-center">
            <RightOutlined className="text-black font-[900]" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto mb-8 pb-8 scrollbar-hide">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <hr className="text-footerBackground bg-footerBackground my-12" />

      <div className="w-full flex mt-8 my-4 justify-between items-center">
        <h1 className="text-[40px] font-[600] text-black">
          Arzanladyşly harytlar
        </h1>
        <div className="flex gap-4">
          <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[44px] h-[44px] flex justify-center items-center">
            <LeftOutlined className="text-black font-[900]" />
          </div>
          <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[44px] h-[44px] flex justify-center items-center">
            <RightOutlined className="text-black font-[900]" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto mb-8 pb-8 scrollbar-hide">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <hr className="text-footerBackground bg-footerBackground my-12" />

      <div className="w-full my-12 flex items-center justify-between">
        <img
          className="w-[612px] object-contain rounded-[10px]"
          src={banner}
          alt="banner"
        />
        <img
          className="w-[612px] object-contain  rounded-[10px]"
          src={banner1}
          alt="banner"
        />
      </div>

      <hr className="text-footerBackground bg-footerBackground my-12" />

      <div className="w-full flex mt-8 my-4 justify-between items-center">
        <h1 className="text-[40px] font-[600] text-black">
          Meşhur kategoriýalar
        </h1>
      </div>
      <div className="w-full gap-4 my-8 flex flex-wrap justify-between items-center ">
        <div className="w-[49%] cursor-pointer mb-4 h-[150px]  p-3 flex gap-8 items-center bg-footerBackground rounded-[10px]">
          <div className="w-[126px] p-2 h-[126px] bg-white rounded-[7px]">
            <img className="w-full object-contain" src="" alt="" />
          </div>
          <div>
            <h1 className="text-[24px] font-[600] text-black pb-2">
              Telewizorlar
            </h1>
            <p className="text-[16px] text-black font-[400]">230 harytlar</p>
          </div>
        </div>
        <div className="w-[49%] cursor-pointer mb-4 h-[150px]  p-3 flex gap-8 items-center bg-footerBackground rounded-[10px]">
          <div className="w-[126px] p-2 h-[126px] bg-white rounded-[7px]">
            <img className="w-full object-contain" src="" alt="" />
          </div>
          <div>
            <h1 className="text-[24px] font-[600] text-black pb-2">
              Telewizorlar
            </h1>
            <p className="text-[16px] text-black font-[400]">230 harytlar</p>
          </div>
        </div>
        <div className="w-[49%] cursor-pointer mb-4 h-[150px]  p-3 flex gap-8 items-center bg-footerBackground rounded-[10px]">
          <div className="w-[126px] p-2 h-[126px] bg-white rounded-[7px]">
            <img className="w-full object-contain" src="" alt="" />
          </div>
          <div>
            <h1 className="text-[24px] font-[600] text-black pb-2">
              Telewizorlar
            </h1>
            <p className="text-[16px] text-black font-[400]">230 harytlar</p>
          </div>
        </div>
        <div className="w-[49%] cursor-pointer mb-4 h-[150px]  p-3 flex gap-8 items-center bg-footerBackground rounded-[10px]">
          <div className="w-[126px] p-2 h-[126px] bg-white rounded-[7px]">
            <img className="w-full object-contain" src="" alt="" />
          </div>
          <div>
            <h1 className="text-[24px] font-[600] text-black pb-2">
              Telewizorlar
            </h1>
            <p className="text-[16px] text-black font-[400]">230 harytlar</p>
          </div>
        </div>
      </div>

      <hr className="text-footerBackground bg-footerBackground my-12" />

      <div className="w-full flex mt-8 my-4 justify-between items-center">
        <h1 className="text-[40px] font-[600] text-black">Kondisonerler</h1>
        <div className="flex gap-4">
          <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[44px] h-[44px] flex justify-center items-center">
            <LeftOutlined className="text-black font-[900]" />
          </div>
          <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[44px] h-[44px] flex justify-center items-center">
            <RightOutlined className="text-black font-[900]" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto mb-8 pb-8 scrollbar-hide">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <hr className="text-footerBackground bg-footerBackground my-12" />

      <div className="w-full !my-12 flex h-[630px] justify-center items-center bg-footerBackground">
        <img
          className="w-full h-[630px] object-cover"
          src={bannerBig}
          alt="bannerBig"
        />
      </div>

      <hr className="text-footerBackground bg-footerBackground my-12" />

      <div className="w-full flex mt-8 my-4 justify-between items-center">
        <h1 className="text-[40px] font-[600] text-black">Kondisonerler</h1>
        <div className="flex gap-4">
          <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[44px] h-[44px] flex justify-center items-center">
            <LeftOutlined className="text-black font-[900]" />
          </div>
          <div className="bg-footerBackground cursor-pointer rounded-[10px] w-[44px] h-[44px] flex justify-center items-center">
            <RightOutlined className="text-black font-[900]" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto mb-8 pb-8 scrollbar-hide">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <hr className="text-footerBackground bg-footerBackground my-12" />
    </div>
  );
};

export default Home;
