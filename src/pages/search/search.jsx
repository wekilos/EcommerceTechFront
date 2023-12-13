import React, { useContext, useEffect, useRef, useState } from "react";
import {
  RightOutlined,
  DownOutlined,
  UpOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Drawer } from "antd";
import CardCategory from "../../components/cardCategoryPage";
import { useHistory, useParams, useLocation } from "react-router-dom";
import checkbox from "../../images/checkbox.svg";
import checkboxborder from "../../images/checkboxborder.svg";
import { Context } from "../../context/context";
import { axiosInstance } from "../../utils/axiosIntance";

const Search = (props) => {
  const history = useHistory();
  const { dil } = useContext(Context);
  const path = useLocation();
  const { id, search } = useParams();
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});
  const [openSort, setOpenSort] = useState(false);
  const [openSort2, setOpenSort2] = useState(false);
  const [filterDrawer, setFilterDrawer] = useState(false);
  const sortRef = useRef(null);
  const sortRefMobile = useRef(null);
  const [filterOpen, setFilterOpen] = useState({
    category: true,
    brand: false,
    price: true,
    start: 0,
    end: 10000,
  });
  const [filter, setFilter] = useState({
    // CategoryId: id,
    CategoryIds: [id?.slice(3) != "0" ? id?.slice(3) : 0],
    BrandIds: [],
    order: 5,
    startPrice: 0,
    endPrice: 10000,
    name: search.slice(2),
    limit: 10,
    page: 0,
  });
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getBrands();
    getCategories();
  }, []);

  useEffect(() => {
    getProducts();
  }, [filter, path]);
  useEffect(() => {
    setFilter({
      // CategoryId: id,
      CategoryIds: [id?.slice(3) != "0" ? id?.slice(3) : 0],
      BrandIds: [],
      order: 5,
      startPrice: 0,
      endPrice: 10000,
      name: search.slice(2),
      limit: 10,
      page: 0,
    });
  }, [path]);

  const getProducts = () => {
    console.log("done filter", filter);
    axiosInstance
      .get("/api/product/all", {
        params: filter,
      })
      .then((data) => {
        console.log(data.data);
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBrands = () => {
    axiosInstance
      .get("/api/brand/all")
      .then((data) => {
        console.log(data.data);
        setBrands(data.data);
      })
      .catch((err) => [console.log(err)]);
  };
  const getCategories = () => {
    axiosInstance
      .get("/api/category/all")
      .then((data) => {
        console.log(data.data);
        setCategories(data.data);
      })
      .catch((err) => [console.log(err)]);
  };

  const clickBrand = (id) => {
    const bar = filter?.BrandIds.filter((item) => {
      return item == id;
    });
    if (bar.length > 0) {
      let arr = filter?.BrandIds.filter((item) => {
        return item != id;
      });
      setFilter({ ...filter, BrandIds: arr });
    } else {
      let array = filter?.BrandIds;
      array.push(id);
      setFilter({ ...filter, BrandIds: array });
    }
  };

  const checkBrand = (id) => {
    let bar = filter?.BrandIds.filter((item) => {
      return item == id;
    });
    if (bar.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const clickCategory = (id) => {
    const bar = filter?.CategoryIds.filter((item) => {
      return item == id;
    });
    if (bar.length > 0) {
      let arr = filter?.CategoryIds.filter((item) => {
        return item != id;
      });
      setFilter({ ...filter, CategoryIds: arr });
    } else {
      let array = filter?.CategoryIds;
      array.push(id);
      setFilter({ ...filter, CategoryIds: array });
    }
  };

  const checkCategory = (id) => {
    let bar = filter?.CategoryIds.filter((item) => {
      return item == id;
    });
    if (bar.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const clearFilter = () => {
    setFilter({
      // CategoryId: id,
      CategoryIds: [id?.slice(3) != "0" ? id?.slice(3) : 0],
      BrandIds: [],
      order: 5,
      name: search.slice(2),
      startPrice: 0,
      endPrice: 10000,
      limit: 10,
      page: 0,
    });
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenSort(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  function useOutsideAlerterMobile(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenSort2(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(sortRef);
  useOutsideAlerterMobile(sortRefMobile);

  return (
    <div className="w-full pb-6">
      <Drawer
        closable={false}
        onClose={() => setFilterDrawer(false)}
        width={350}
        placement="left"
        open={filterDrawer}
      >
        <div className="md2:hidden block w-[290px] min-w-[290px]">
          <div className="w-full  pb-4 flex justify-between items-center">
            <h1 className="text-[18px] font-[600] text-black ">Filter:</h1>
            <p
              onClick={() => clearFilter()}
              className="text-[16px] cursor-pointer font-[400] text-black underline"
            >
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
                {categories?.map((item, i) => {
                  return (
                    <div
                      onClick={() => clickCategory(item.id)}
                      key={"Cats" + i}
                      className="w-full my-2 flex justify-between items-center"
                    >
                      <div className="flex cursor-pointer justify-start gap-4 items-center">
                        <img
                          src={
                            checkCategory(item.id) ? checkbox : checkboxborder
                          }
                          className="text-black rounded-[8px]"
                        />
                        <h1 className="text-[16px] font-[400] text-black">
                          {dil == "TM"
                            ? item.name_tm
                            : dil == "RU"
                            ? item.name_ru
                            : item.name_en}
                        </h1>
                      </div>
                      <div className="font-[400] text-[16px] text-[#868686]">
                        {item?.Products?.length}
                      </div>
                    </div>
                  );
                })}
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
                {brands?.map((item, i) => {
                  return (
                    <div
                      onClick={() => clickBrand(item.id)}
                      key={"Brands" + i}
                      className="w-full my-2 flex justify-between items-center"
                    >
                      <div className="flex cursor-pointer justify-start gap-4 items-center">
                        <img
                          src={checkBrand(item.id) ? checkbox : checkboxborder}
                          // src={checkboxborder}
                          className="text-black rounded-[8px]"
                        />
                        <h1 className="text-[16px] font-[400] text-black">
                          {dil == "TM"
                            ? item.name_tm
                            : dil == "RU"
                            ? item.name_ru
                            : item.name_en}
                        </h1>
                      </div>
                      <div className="font-[400] text-[16px] text-[#868686]">
                        {item?.Products?.length}
                      </div>
                    </div>
                  );
                })}
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
                    value={filter.startPrice}
                    onChange={(e) => {
                      setFilter({ ...filter, startPrice: e.target.value });
                    }}
                    className="w-[131px] text-center text-[16px] font-[500] outline-none h-[40px] rounded-[29px] border-[1px] border-[#E2E2E2]"
                    type="number"
                  />
                  <MinusOutlined className="text-[#868686]" />
                  <input
                    value={filter.endPrice}
                    onChange={(e) => {
                      setFilter({ ...filter, endPrice: e.target.value });
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
      </Drawer>

      <div className="w-full flex justify-start gap-1 md:gap-2 items-center md:my-4 my-2 md:py-4 py-2">
        <div
          onClick={() => history.push({ pathname: "/" })}
          className="text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          Baş sahapa
        </div>
        <RightOutlined className="text-[12px] md:text-[14px] font-[500] text-[#888888]" />
        <div
          onClick={() => history.push({ pathname: "/category/id" })}
          className="text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]"
        >
          {dil == "TM"
            ? category?.name_tm
            : dil == "RU"
            ? category?.name_ru
            : category?.name_en}
        </div>
      </div>

      <div className="w-full flex flex-wrap md2:flex-nowrap justify-between md:gap-12 gap-4">
        {/* filter sidebar */}
        <div className="md2:block hidden w-[290px] min-w-[290px]">
          <div className="w-full  pb-4 flex justify-between items-center">
            <h1 className="text-[18px] font-[600] text-black ">Filter:</h1>
            <p
              onClick={() => clearFilter()}
              className="text-[16px] cursor-pointer font-[400] text-black underline"
            >
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
                {categories?.map((item, i) => {
                  return (
                    <div
                      onClick={() => clickCategory(item.id)}
                      key={"Cats" + i}
                      className="w-full my-2 flex justify-between items-center"
                    >
                      <div className="flex cursor-pointer justify-start gap-4 items-center">
                        <img
                          src={
                            checkCategory(item.id) ? checkbox : checkboxborder
                          }
                          className="text-black rounded-[8px]"
                        />
                        <h1 className="text-[16px] font-[400] text-black">
                          {dil == "TM"
                            ? item.name_tm
                            : dil == "RU"
                            ? item.name_ru
                            : item.name_en}
                        </h1>
                      </div>
                      <div className="font-[400] text-[16px] text-[#868686]">
                        {item?.Products?.length}
                      </div>
                    </div>
                  );
                })}
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
                {brands?.map((item, i) => {
                  return (
                    <div
                      onClick={() => clickBrand(item.id)}
                      key={"Brands" + i}
                      className="w-full my-2 flex justify-between items-center"
                    >
                      <div className="flex cursor-pointer justify-start gap-4 items-center">
                        <img
                          src={checkBrand(item.id) ? checkbox : checkboxborder}
                          // src={checkboxborder}
                          className="text-black rounded-[8px]"
                        />
                        <h1 className="text-[16px] font-[400] text-black">
                          {dil == "TM"
                            ? item.name_tm
                            : dil == "RU"
                            ? item.name_ru
                            : item.name_en}
                        </h1>
                      </div>
                      <div className="font-[400] text-[16px] text-[#868686]">
                        {item?.Products?.length}
                      </div>
                    </div>
                  );
                })}
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
                    value={filter.startPrice}
                    onChange={(e) => {
                      setFilter({ ...filter, startPrice: e.target.value });
                    }}
                    className="w-[131px] text-center text-[16px] font-[500] outline-none h-[40px] rounded-[29px] border-[1px] border-[#E2E2E2]"
                    type="number"
                  />
                  <MinusOutlined className="text-[#868686]" />
                  <input
                    value={filter.endPrice}
                    onChange={(e) => {
                      setFilter({ ...filter, endPrice: e.target.value });
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

        <div className="flex md2:hidden my-2 w-full justify-between">
          <div
            onClick={() => setFilterDrawer(true)}
            className="flex gap-3 cursor-pointer justify-center items-center text-[12px] md:text-[14px] font-[400] text-black w-[200px] h-[40px] rounded-[29px] border-[1px] border-[#E2E2E2]"
          >
            Filter
          </div>
          <div
            onClick={() => setOpenSort2(!openSort2)}
            ref={sortRefMobile}
            className="md2:hidden flex relative  gap-3 cursor-pointer justify-center items-center text-[14px] font-[400] text-black w-[200px] h-[40px] rounded-[29px] border-[1px] border-[#E2E2E2]"
          >
            Hemmesini görkez
            <DownOutlined />
            {openSort2 && (
              <div className="absolute rounded-[14px] shadow-lg top-[40px] left-0 w-[230px] bg-white p-2 z-10">
                <div
                  id="mobile3"
                  onClick={() => setFilter({ ...filter, order: 3 })}
                  className={`w-full px-4 text-left  ${
                    filter?.order == 3
                      ? "bg-black text-white "
                      : "bg-white text-black "
                  } hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]`}
                >
                  A-Z
                </div>
                <div
                  id="mobile4"
                  onClick={() => setFilter({ ...filter, order: 4 })}
                  className={`w-full px-4 text-left  ${
                    filter?.order == 4
                      ? "bg-black text-white "
                      : "bg-white text-black "
                  } hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]`}
                >
                  Z-A
                </div>
                <div
                  id="mobile2"
                  onClick={() => setFilter({ ...filter, order: 2 })}
                  className={`w-full px-4 text-left  ${
                    filter?.order == 2
                      ? "bg-black text-white "
                      : "bg-white text-black "
                  } hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]`}
                >
                  Gymmatdan-Arzana
                </div>
                <div
                  id="mobile1"
                  onClick={() => setFilter({ ...filter, order: 1 })}
                  className={`w-full px-4 text-left  ${
                    filter?.order == 1
                      ? "bg-black text-white "
                      : "bg-white text-black "
                  } hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]`}
                >
                  Arzandan-Gymmada
                </div>
                <div
                  id="mobile5"
                  onClick={() => setFilter({ ...filter, order: 5 })}
                  className={`w-full px-4 text-left  ${
                    filter?.order == 5
                      ? "bg-black text-white "
                      : "bg-white text-black "
                  } hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]`}
                >
                  Hödürlenýän tertipde
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Products */}
        <div className="w-full">
          <div className="w-full flex justify-between">
            <div>
              <h1 className="text-[20px] md:text-[25px] font-[700] text-black">
                {dil == "TM"
                  ? category?.name_tm
                  : dil == "RU"
                  ? category?.name_ru
                  : category?.name_en}
              </h1>
              <p className="text-[14px] md:text-[16px] font-[400]">
                {products?.length} haryt
              </p>
            </div>
            <div
              onClick={() => setOpenSort(!openSort)}
              ref={sortRef}
              className="md2:flex relative hidden gap-3 cursor-pointer justify-center items-center text-[14px] font-[400] text-black w-[200px] h-[40px] rounded-[29px] border-[1px] border-[#E2E2E2]"
            >
              Hemmesini görkez
              <DownOutlined />
              {openSort && (
                <div className="absolute rounded-[14px] shadow-lg top-[40px] left-0 w-[230px] bg-white p-2 z-10">
                  <div
                    onClick={() => setFilter({ ...filter, order: 3 })}
                    className={`w-full px-4 text-left  ${
                      filter?.order == 3
                        ? "bg-black text-white "
                        : "bg-white text-black "
                    } hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]`}
                  >
                    A-Z
                  </div>
                  <div
                    onClick={() => setFilter({ ...filter, order: 4 })}
                    className={`w-full px-4 text-left  ${
                      filter?.order == 4
                        ? "bg-black text-white "
                        : "bg-white text-black "
                    } hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]`}
                  >
                    Z-A
                  </div>
                  <div
                    onClick={() => setFilter({ ...filter, order: 2 })}
                    className={`w-full px-4 text-left  ${
                      filter?.order == 2
                        ? "bg-black text-white "
                        : "bg-white text-black "
                    } hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]`}
                  >
                    Gymmatdan-Arzana
                  </div>
                  <div
                    onClick={() => setFilter({ ...filter, order: 1 })}
                    className={`w-full px-4 text-left  ${
                      filter?.order == 1
                        ? "bg-black text-white "
                        : "bg-white text-black "
                    } hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]`}
                  >
                    Arzandan-Gymmada
                  </div>
                  <div
                    onClick={() => setFilter({ ...filter, order: 5 })}
                    className={`w-full px-4 text-left  ${
                      filter?.order == 5
                        ? "bg-black text-white "
                        : "bg-white text-black "
                    } hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]`}
                  >
                    Hödürlenýän tertipde
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full md:py-8 py-4 flex flex-wrap justify-start gap-10">
            {products?.map((item) => {
              return <CardCategory data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
