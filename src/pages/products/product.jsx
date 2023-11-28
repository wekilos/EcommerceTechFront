import React from "react";
import { RightOutlined, PlusOutlined, LeftOutlined } from "@ant-design/icons";
import save from "../../images/save.svg";
import check from "../../images/check.svg";
import product2 from "../../images/product2.svg";
import basketwhite from "../../images/basketwhite.svg";
import Card from "../../components/card";
import { useHistory } from "react-router-dom";
const Product = () => {
  const history = useHistory();
  return (
    <div className="w-full pb-6">
      <div className="w-full flex justify-start gap-2 items-center my-4 py-4">
        <div
          onClick={() => history.push({ pathname: "/" })}
          className="text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Baş sahapa
        </div>
        <RightOutlined className="text-[14px] font-[500] text-[#888888]" />
        <div
          onClick={() => history.push({ pathname: "/category/id" })}
          className="text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Telewizor
        </div>
        <RightOutlined className="text-[14px] font-[500] text-[#888888]" />
        <div className="text-[14px] cursor-pointer font-[500] text-[#888888]">
          Samsung
        </div>
        <RightOutlined className="text-[14px] font-[500] text-[#888888]" />
        <div className="text-[14px] cursor-pointer font-[500] text-[#888888]">
          Q5651SFASFH43
        </div>
      </div>

      <div className="w-full my-4 flex justify-between flex-wrap ">
        <div className="w-[49%] min-w-[350px]">
          <div className="w-full rounded-[6px] flex items-center justify-center bg-footerBackground h-[370px]">
            <img
              src={product2}
              className="h-[90%] object-contain"
              alt="product"
            />
          </div>
          <div className="w-full flex items-center gap-4 my-6">
            <div className="w-[90px] flex items-center justify-center cursor-pointer h-[90px] bg-footerBackground rounded-[6px] border-[1px] border-black">
              <img
                src={product2}
                className="h-[90%] object-contain"
                alt="product"
              />
            </div>
            <div className="w-[90px] flex items-center justify-center cursor-pointer h-[90px] bg-footerBackground rounded-[6px]  ">
              <img
                src={product2}
                className="h-[90%] object-contain"
                alt="product"
              />
            </div>
            <div className="w-[90px] flex items-center justify-center cursor-pointer h-[90px] bg-footerBackground rounded-[6px]  ">
              <img
                src={product2}
                className="h-[90%] object-contain"
                alt="product"
              />
            </div>
            <div className="w-[90px] flex items-center justify-center cursor-pointer h-[90px] bg-footerBackground rounded-[6px]  ">
              <img
                src={product2}
                className="h-[90%] object-contain"
                alt="product"
              />
            </div>
            <div className="w-[90px] flex items-center justify-center cursor-pointer h-[90px] bg-footerBackground rounded-[6px]  ">
              <img
                src={product2}
                className="h-[90%] object-contain"
                alt="product"
              />
            </div>
          </div>
        </div>
        <div className="w-[47%] min-w-[350px]">
          <div className="w-full flex justify-between items-start">
            <h1 className="w-[80%] mb-4 text-[30px] font-[600] text-black">
              Sony 75” BRAVIA XR Master Series Z9J
            </h1>
            <img
              src={save}
              className="w-[30px] cursor-pointer mt-[10px] object-contain"
              alt=""
            />
          </div>
          <div className="w-full">
            <p className="w-full my-4 text-[16px] text-black font-[500]">
              Bar kod: KFHSC32876
            </p>
            <p className="w-full my-4 flex gap-2 items-center text-[16px] text-black font-[500]">
              Stock: Bar
              <img src={check} alt="" />
            </p>

            <p className="w-full my-8 text-[20px] text-black font-[700]">
              21,000 TMT
            </p>
            <button className="h-[50px] flex gap-3 items-center text-white px-6 pr-8 text-[16px] font-[500] bg-black rounded-[45px]">
              <img src={basketwhite} alt="" />
              Sebede goş
            </button>
          </div>
        </div>
      </div>

      <div className="w-full my-8">
        <div className="w-full flex justify-between items-center mb-8">
          <h1 className="text-[40px] font-[700] text-black">Aýratynlyklary</h1>
          <div className="text-[20px] cursor-pointer font-[500] text-black flex items-center gap-3">
            <PlusOutlined /> Deňeşdir
          </div>
        </div>
        <hr className="bg-footerBackground text-footerBackground text-[1px]" />
        <div className="w-full flex justify-between py-8">
          <div className="w-[38%] text-[26px] font-[700] text-black">Ekran</div>
          <div className="w-[60%] flex flex-wrap justify-between">
            <div className="w-1/2 my-3">
              <h1 className="text-[18px] font-[600] text-black">
                Ekran ölçegi
              </h1>
              <p className="text-[18px] font-[500] text-[#868686]">75”</p>
            </div>
            <div className="w-1/2 my-3">
              <h1 className="text-[18px] font-[600] text-black">
                Ekran ölçegi
              </h1>
              <p className="text-[18px] font-[500] text-[#868686]">75”</p>
            </div>
            <div className="w-1/2 my-3">
              <h1 className="text-[18px] font-[600] text-black">
                Ekran ölçegi
              </h1>
              <p className="text-[18px] font-[500] text-[#868686]">75”</p>
            </div>
          </div>
        </div>

        <hr className="bg-footerBackground text-footerBackground text-[1px]" />
        <div className="w-full flex justify-between py-8">
          <div className="w-[38%] text-[26px] font-[700] text-black">Ses</div>
          <div className="w-[60%] flex flex-wrap justify-between">
            <div className="w-1/2 my-3">
              <h1 className="text-[18px] font-[600] text-black">Dolby Plus</h1>
              <p className="text-[18px] font-[500] text-[#868686]">Bar</p>
            </div>
            <div className="w-1/2 my-3">
              <h1 className="text-[18px] font-[600] text-black">Dolby 5.1</h1>
              <p className="text-[18px] font-[500] text-[#868686]">Bar</p>
            </div>
            <div className="w-1/2 my-3">
              <h1 className="text-[18px] font-[600] text-black">
                Adaptive Sound
              </h1>
              <p className="text-[18px] font-[500] text-[#868686]">Bar</p>
            </div>
            <div className="w-1/2 my-3">
              <h1 className="text-[18px] font-[600] text-black">Ses görnüşi</h1>
              <p className="text-[18px] font-[500] text-[#868686]">4.2.22</p>
            </div>
            <div className="w-1/2 my-3">
              <h1 className="text-[18px] font-[600] text-black">
                Bluetooth ses
              </h1>
              <p className="text-[18px] font-[500] text-[#868686]">Bar</p>
            </div>
            <div className="w-1/2 my-3">
              <h1 className="text-[18px] font-[600] text-black">
                Ses akym çykyjylygy
              </h1>
              <p className="text-[18px] font-[500] text-[#868686]">70W</p>
            </div>
          </div>
        </div>

        <hr className="bg-footerBackground text-footerBackground text-[1px]" />
        <div className="w-full flex justify-between py-8">
          <div className="w-[38%] text-[26px] font-[700] text-black">
            Operasion ulgam
          </div>
          <div className="w-[60%] flex flex-wrap justify-between">
            <div className="w-1/2 my-3">
              <h1 className="text-[18px] font-[600] text-black"></h1>
              <p className="text-[18px] font-[500] text-[#868686]">Google TV</p>
            </div>
          </div>
        </div>

        <hr className="bg-footerBackground text-footerBackground text-[1px]" />
      </div>

      <div className="w-full py-4 pb-8">
        <div className="w-full flex mt-8 my-6 justify-between items-center">
          <h1 className="text-[40px] font-[600] text-black">Meňzeş harytlar</h1>
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
      </div>
    </div>
  );
};

export default Product;
