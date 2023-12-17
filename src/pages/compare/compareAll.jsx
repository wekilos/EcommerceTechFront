import React, { useContext, useEffect, useState } from "react";
import { Carousel, Modal, message } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useHistory, useParams } from "react-router-dom";
import { Context } from "../../context/context";
import { BASE_URL, axiosInstance } from "../../utils/axiosIntance";
import Card from "../../components/card";
import Compare from "../../components/compareAll";
import lang from "../../lang/home.json";

const ComparePro = () => {
  const history = useHistory();
  const { dil } = useContext(Context);
  const { pro1, pro2, pro3 } = useParams();
  const market = JSON.parse(localStorage.getItem("market"));
  const [product1, setProduct1] = useState();
  const [product2, setProduct2] = useState();
  const [product3, setProduct3] = useState();

  useEffect(() => {
    getPro1();
    getPro2();
    getPro3();
  }, [pro1, pro2, pro3]);

  const getPro1 = () => {
    let id = pro1?.slice(5) ? pro1?.slice(5) : 0;
    axiosInstance
      .get("/api/product/" + id)
      .then((data) => {
        setProduct1(data.data);
        console.log("pro1", data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getPro2 = () => {
    let id = pro2?.slice(5) ? pro2?.slice(5) : 0;
    axiosInstance
      .get("/api/product/" + id)
      .then((data) => {
        setProduct2(data.data);
        console.log("pro2", data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getPro3 = () => {
    let id = pro3?.slice(5) ? pro3?.slice(5) : 0;
    axiosInstance
      .get("/api/product/" + id)
      .then((data) => {
        setProduct3(data.data);
        console.log("pro3", data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full">
      <h1 className="w-full my-[30px] md:my-11 text-[20px] md:text-[40px] font-[700] text-black">
        Deňeşdirme
      </h1>

      <div className="w-full">
        <Compare pro1={product1} pro2={product2} pro3={product3} />
      </div>
    </div>
  );
};

export default ComparePro;
