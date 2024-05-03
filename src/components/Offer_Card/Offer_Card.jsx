import { useContext, useEffect, useRef, useState } from "react";
import { LuPackage } from "react-icons/lu";
import {  FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataContext } from "../../DataProvider/DataProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const Offer_Card = ({ product }) => {
  const { allData,DataFetch } = useContext(DataContext);
  const axiosSecure = useAxiosSecure();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalIdRef.current); // Clean up interval on component unmount
    };
  }, []);

  const handleMouseEnter = () => {
    clearInterval(intervalIdRef.current); // Clear any existing interval
    intervalIdRef.current = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % product?.images.length
      );
    }, 1000); // Change image every second (1000 milliseconds)
  };

  const handleMouseLeave = () => {
    clearInterval(intervalIdRef.current);
    setCurrentImageIndex(0); // Reset to the first image when mouse leaves
  };
// console.log(allData[3]?.products)
  const handle_add_product = async(product) => {
    await axiosSecure
      .patch("/offers", {
        products: [...allData[3].products, product],
      })
      .then((res) => {
        if (res.data.modifiedCount>0) {
          
          DataFetch()
        }
        console.log(res.data);
      });
  };

  return (
    <div
      className="bg-white rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
      style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px" }}
    >
      <div className="relative group ">
        <div
          className="w-full h-20  flex justify-center items-center   bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="w-44 h-auto"
            src={product.images[currentImageIndex]}
            alt=""
          />
        </div>
      </div>
      <div className="pt-4 text-center">
        <h3 className="text-lg font-semibold ">{product?.name}</h3>
        <div className="">
          <span className="text-gray-300 line-through">${product?.price}</span>
          <span className="ml-2 text-red-500">${product?.discount_price}</span>
        </div>
        <p
          className={`flex items-center justify-center gap-2 ${
            product?.stock != 0 ? "text-green-500" : "text-red-500"
          } `}
        >
          <LuPackage />
          <span className="">
            {product?.stock == 0 ? "Out Of Stock" : "In Stock"}
          </span>
        </p>
        <div className="flex justify-center items-center py-2 ">
          <div
            className="flex justify-center cursor-pointer items-center text-2xl border rounded-full w-10 h-10"
            onClick={() => handle_add_product(product)}
          >
            <FaPlus className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer_Card;
