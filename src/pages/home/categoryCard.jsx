import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Context } from "../../context/context";
import tm from "../../lang/tm/home.json";
import en from "../../lang/en/home.json";
import ru from "../../lang/ru/home.json";
import { BASE_URL } from "../../utils/axiosIntance";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CategoryCard = (props) => {
  const history = useHistory();
  const { dil } = useContext(Context);
  return (
    <div
      onClick={() =>
        history.push({
          pathname: "/category/" + props.data.id,
        })
      }
      className="cursor-pointer w-fit"
    >
      <div className=" z-10   w-[134px]   h-[134px] bg-footerBackground  rounded-[100%]">
        <LazyLoadImage
          className="   w-full z-1 object-contain"
          src={BASE_URL + props?.data?.img}
          alt="category_surat"
        />
      </div>

      <div className=" text-center my-2 text-black font-[500]  text-[16px]    ">
        {props?.data?.title}
      </div>
    </div>
  );
};

export default CategoryCard;
