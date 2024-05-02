import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import pinterast from "../../assets//social.png";
import Product_Image from "./Product_Image/Product_Image";
import Product_Details_Tabs from "./Product_Details_Tabs";
import Product_Card from "../Product_Card/Product_Card";

const ProductDetails = () => {
  var price = 100;
  const [count, setCount] = useState(0);
  const handelIncrese = () => {
    const x = count + 1;
    setCount(x);
  };
  const handelDecrese = () => {
    if (count >= 1) {
      const x = count - 1;
      setCount(x);
    }
  };

  const images = [
    {
      original:
        "https://754969b0.rocketcdn.me/partdo/phone/wp-content/uploads/sites/2/2022/11/3-29-500x500.jpg",
      thumbnail:
        "https://754969b0.rocketcdn.me/partdo/phone/wp-content/uploads/sites/2/2022/11/3-29-500x500.jpg",
    },
    {
      original:
        "https://754969b0.rocketcdn.me/partdo/phone/wp-content/uploads/sites/2/2022/11/2-33-500x500.jpg",
      thumbnail:
        "https://754969b0.rocketcdn.me/partdo/phone/wp-content/uploads/sites/2/2022/11/2-33-500x500.jpg",
    },
  ];

  return (
    <section className="mt-10">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Product_Image items={images} />
        </div>
        <div className="space-y-5">
          <h1 className="text-5xl font-bold">
            Wireless coon Headphones, but only one of them works
          </h1>
          <h1 className="text-2xl text-red-600 font-bold">
            {count === 0 ? <h1>${price}</h1> : <h1>${price * count}</h1>}
          </h1>
          <p>description goes here </p>
          <hr />
          <div className="flex gap-5">
            <div className="flex justify-center items-center gap-5 p-2 rounded-lg border-2">
              <FaMinus className="cursor-pointer" onClick={handelDecrese} />
              <p>{count}</p>
              <FaPlus className="cursor-pointer" onClick={handelIncrese} />
            </div>
            <div>
              <button className="bg-[#EF233C]  text-white font-bold py-2 px-4 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold">Share:</h1>
            <div className="flex float-left gap-3">
              <img
                className="h-[25px] w-[25px] cursor-pointer"
                src={facebook}
                alt=""
              />
              <img
                className="h-[25px] w-[25px] cursor-pointer"
                src={instagram}
                alt=""
              />
              <img
                className="h-[25px] w-[25px] cursor-pointer"
                src={pinterast}
                alt=""
              />
              <img
                className="h-[25px] w-[25px] cursor-pointer"
                src={twitter}
                alt=""
              />
              <img
                className="h-[25px] w-[25px] cursor-pointer"
                src={linkedin}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-10">
        <div className="divider"></div>

        <div className="">
          <Product_Details_Tabs />
        </div>
        <div className="divider"></div>
        <div className=" mt-10 space-y-4">
              <h1 className="font-semibold text-2xl">Recommended Products </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* <ProductCard product={product} /> */}
          {/* Display more product details */}
          <Product_Card />
          <Product_Card />
          <Product_Card />
          <Product_Card />
        </div>
        </div>
      
      </div>
    </section>
  );
};

export default ProductDetails;
