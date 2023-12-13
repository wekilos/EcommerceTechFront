import React, { useState, useRef, useEffect } from "react";
import {
  RightOutlined,
  LeftOutlined,
  UpOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { useHistory, useParams } from "react-router-dom";
import orderdone from "../../images/orderdone.svg";
import Card from "../../components/card";
import { axiosInstance } from "../../utils/axiosIntance";

const OrderDone = (props) => {
  const history = useHistory();
  const refNewProduct = useRef(null);
  const { code } = useParams();
  const market = JSON.parse(localStorage.getItem("market"));
  const [products, setProducts] = useState([]);
  const [filterOpen, setFilterOpen] = useState({
    category: true,
    brand: false,
    price: true,
    start: 0,
    end: 10000,
  });

  const ScroollRight = (refNewProduct) => {
    refNewProduct.current.scrollBy(200, 0);
  };
  const ScroollLeft = (refNewProduct) => {
    refNewProduct.current.scrollBy(-200, 0);
  };

  useEffect(() => {
    getSimilarPro();
  }, []);

  const getSimilarPro = async () => {
    axiosInstance
      .get("/api/product/all", {
        params: {
          is_selected: true,
        },
      })
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full md:pb-8 pb-2">
      <div className="w-full flex items-center md:py-[60px] py-[30px] md:mb-[100px] mb-[0px] justify-center">
        <div className="md:w-[478px] w-full rounded-[20px] bg-footerBackground p-6 flex justify-center flex-wrap">
          <img src={orderdone} className="w-[70px] object-contain" alt="" />
          <h1 className="w-full text-center my-4 text-[20px] md:text-[25px] font-[600] text-black">
            Söwdaňyz üçin sag boluň!
          </h1>
          <p className="w-full text-center text-[12px] md:text-[14px] font-[400] text-[#454545]">
            Bellenen wagtyň dowamynda sargydyňyz gowuşar
          </p>
          <div className="w-full my-2 flex gap-3 justify-center items-center">
            <h1 className="text-[12px] md:text-[14px] font-[500] text-[#454545]">
              Sargyt belgisi:
            </h1>
            <h1 className="text-[12px] md:text-[14px] font-[500] text-black">
              {code}
            </h1>
          </div>
          <button
            onClick={() => history.push({ pathname: "/" })}
            className="bg-black text-white h-[50px] rounded-[53px] px-12 my-4 text-[14px] md:text-[16px] font-[600]"
          >
            Söwda dowam et
          </button>
        </div>
      </div>

      <div className="w-full flex md:mt-12 mt-5  md:my-4 my-3 justify-between items-center">
        <h1 className="text-[18px] md:text-[40px] font-[600] text-black">
          Siziň üçin saýlananlar
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
        className="flex gap-4 overflow-x-auto mb-8 pb-8 scrollbar-hide"
      >
        {products?.map((item) => {
          return <Card data={item} />;
        })}
      </div>
    </div>
  );
};

export default OrderDone;
