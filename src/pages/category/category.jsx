import React, { useState } from "react";
import {
  RightOutlined,
  DownOutlined,
  UpOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import CardCategory from "../../components/cardCategoryPage";
import { useHistory } from "react-router-dom";
import checkbox from "../../images/checkbox.svg";
import checkboxborder from "../../images/checkboxborder.svg";

const Category = (props) => {
  const history = useHistory();
  const [filterOpen, setFilterOpen] = useState({
    category: true,
    brand: false,
    price: true,
    start: 0,
    end: 10000,
  });
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
          Öý enjamlary
        </div>
      </div>

      <div className="w-full flex justify-between gap-12">
        {/* filter sidebar */}
        <div className="w-[290px]">
          <div className="w-full  pb-4 flex justify-between items-center">
            <h1 className="text-[18px] font-[600] text-black ">Filter:</h1>
            <p className="text-[16px] cursor-pointer font-[400] text-black underline">
              Aýyr
            </p>
          </div>
          <div className="w-full border-t-[1px] py-5 border-[#E2E2E2]">
            <div
              onClick={() =>
                setFilterOpen({ ...filterOpen, category: !filterOpen.category })
              }
              className="w-full cursor-pointer flex justify-between items-center"
            >
              <h1 className="text-[20px] font-[600] text-black">
                Ähli kategoriýalar
              </h1>
              {filterOpen.category ? (
                <UpOutlined className="mr-1 text-[#868686]" />
              ) : (
                <DownOutlined className="mr-1 text-[#868686]" />
              )}
            </div>
            {filterOpen.category && (
              <div className="w-full py-2">
                <div className="w-full my-2 flex justify-between items-center">
                  <div className="flex cursor-pointer justify-start gap-4 items-center">
                    <img src={checkbox} className="text-black rounded-[8px]" />
                    <h1 className="text-[16px] font-[400] text-black">
                      Kondisonerler
                    </h1>
                  </div>
                  <div className="font-[400] text-[16px] text-[#868686]">
                    20
                  </div>
                </div>
                <div className="w-full my-2 flex justify-between items-center">
                  <div className="flex cursor-pointer justify-start gap-4 items-center">
                    <img
                      src={checkboxborder}
                      className="text-black rounded-[8px]"
                    />
                    <h1 className="text-[16px] font-[400] text-black">
                      Howa arassalaýjy
                    </h1>
                  </div>
                  <div className="font-[400] text-[16px] text-[#868686]">
                    12
                  </div>
                </div>
                <div className="w-full my-2 flex justify-between items-center">
                  <div className="flex cursor-pointer justify-start gap-4 items-center">
                    <img src={checkbox} className="text-black rounded-[8px]" />
                    <h1 className="text-[16px] font-[400] text-black">
                      Kondisonerler
                    </h1>
                  </div>
                  <div className="font-[400] text-[16px] text-[#868686]">
                    20
                  </div>
                </div>
                <div className="w-full my-2 flex justify-between items-center">
                  <div className="flex cursor-pointer justify-start gap-4 items-center">
                    <img
                      src={checkboxborder}
                      className="text-black rounded-[8px]"
                    />
                    <h1 className="text-[16px] font-[400] text-black">
                      Howa arassalaýjy
                    </h1>
                  </div>
                  <div className="font-[400] text-[16px] text-[#868686]">
                    12
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-full border-t-[1px] py-5 border-[#E2E2E2]">
            <div
              onClick={() =>
                setFilterOpen({ ...filterOpen, brand: !filterOpen.brand })
              }
              className="w-full cursor-pointer flex justify-between items-center"
            >
              <h1 className="text-[20px] font-[600] text-black">Brand</h1>
              {filterOpen.brand ? (
                <UpOutlined className="mr-1 text-[#868686]" />
              ) : (
                <DownOutlined className="mr-1 text-[#868686]" />
              )}
            </div>
            {filterOpen.brand && (
              <div className="w-full py-2">
                <div className="w-full my-2 flex justify-between items-center">
                  <div className="flex cursor-pointer justify-start gap-4 items-center">
                    <img src={checkbox} className="text-black rounded-[8px]" />
                    <h1 className="text-[16px] font-[400] text-black">
                      Kondisonerler
                    </h1>
                  </div>
                  <div className="font-[400] text-[16px] text-[#868686]">
                    20
                  </div>
                </div>
                <div className="w-full my-2 flex justify-between items-center">
                  <div className="flex cursor-pointer justify-start gap-4 items-center">
                    <img
                      src={checkboxborder}
                      className="text-black rounded-[8px]"
                    />
                    <h1 className="text-[16px] font-[400] text-black">
                      Howa arassalaýjy
                    </h1>
                  </div>
                  <div className="font-[400] text-[16px] text-[#868686]">
                    12
                  </div>
                </div>
                <div className="w-full my-2 flex justify-between items-center">
                  <div className="flex cursor-pointer justify-start gap-4 items-center">
                    <img src={checkbox} className="text-black rounded-[8px]" />
                    <h1 className="text-[16px] font-[400] text-black">
                      Kondisonerler
                    </h1>
                  </div>
                  <div className="font-[400] text-[16px] text-[#868686]">
                    20
                  </div>
                </div>
                <div className="w-full my-2 flex justify-between items-center">
                  <div className="flex cursor-pointer justify-start gap-4 items-center">
                    <img
                      src={checkboxborder}
                      className="text-black rounded-[8px]"
                    />
                    <h1 className="text-[16px] font-[400] text-black">
                      Howa arassalaýjy
                    </h1>
                  </div>
                  <div className="font-[400] text-[16px] text-[#868686]">
                    12
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-full border-t-[1px] py-5 border-[#E2E2E2]">
            <div
              onClick={() =>
                setFilterOpen({ ...filterOpen, price: !filterOpen.price })
              }
              className="w-full cursor-pointer flex justify-between items-center"
            >
              <h1 className="text-[20px] font-[600] text-black">Baha</h1>
              {filterOpen.price ? (
                <UpOutlined className="mr-1 text-[#868686]" />
              ) : (
                <DownOutlined className="mr-1 text-[#868686]" />
              )}
            </div>
            {filterOpen.price && (
              <div className="w-full py-2">
                <div className="w-full my-2 flex justify-between items-center">
                  <input
                    value={filterOpen.start}
                    onChange={(e) => {
                      setFilterOpen({ ...filterOpen, start: e.target.value });
                    }}
                    className="w-[131px] text-center text-[16px] font-[500] outline-none h-[40px] rounded-[29px] border-[1px] border-[#E2E2E2]"
                    type="number"
                  />
                  <MinusOutlined className="text-[#868686]" />
                  <input
                    value={filterOpen.end}
                    onChange={(e) => {
                      setFilterOpen({ ...filterOpen, end: e.target.value });
                    }}
                    className="w-[131px] text-center text-[16px] font-[500] outline-none h-[40px] rounded-[29px] border-[1px] border-[#E2E2E2]"
                    type="number"
                  />
                </div>
              </div>
            )}
          </div>

          <button className="w-full rounded-[29px] border-[1px] hover:bg-black hover:text-white  border-black h-[40px] text-center text-[16px] font-[500] text-black">
            Sakla
          </button>
        </div>

        {/* Products */}
        <div className="w-full">
          <div className="w-full flex justify-between">
            <div>
              <h1 className="text-[25px] font-[700] text-black">
                Öý enjamlary
              </h1>
              <p className="text-[16px] font-[400]">3212 haryt</p>
            </div>
            <div className="flex gap-3 cursor-pointer justify-center items-center text-[14px] font-[400] text-black w-[200px] h-[40px] rounded-[29px] border-[1px] border-[#E2E2E2]">
              Hemmesini görkez
              <DownOutlined />
            </div>
          </div>
          <div className="w-full py-8 flex flex-wrap justify-start gap-10">
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
