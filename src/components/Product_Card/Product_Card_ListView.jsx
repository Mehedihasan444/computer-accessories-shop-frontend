import { useEffect, useRef, useState } from "react";
import RatingStar from "../../Utilities/RatingStar/RatingStar";
import { LuPackage } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
const Product_Card_ListView = ({product}) => {

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
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product?.images.length);
    }, 1000); // Change image every second (1000 milliseconds)
  };

  const handleMouseLeave = () => {
    clearInterval(intervalIdRef.current);
    setCurrentImageIndex(0); // Reset to the first image when mouse leaves
  };
  return (
    <div
      className="flex justify-between  bg-white rounded-lg "
      style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px" }}
    >
      <div className="relative group flex-1">
        <div
          className="w-full h-[280px] flex justify-center items-center    bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
  <img className="w-56 " src={product.images[currentImageIndex]} alt="" />
        </div>
        <div className="absolute top-2 right-2 space-y-3">

        <div className=" hover:text-red-500 hover:shadow-md  bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-2xl">
          <IoMdHeartEmpty />
         
        </div>
        <div className=" hover:text-red-500 hover:shadow-md  bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-2xl">
          
          <IoCartOutline />
        </div>
        </div>
      </div>
      <div className="p-4 flex-1">
        <h3 className="text-lg font-semibold mb-2">{product?.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex gap-3">
            <RatingStar Rating_value={product?.rating} />
            <span className="font-semibold text-sm">{product?.reviews} reviews</span>
          </div>
        </div>
        <div className="mb-2">
          <span className="text-gray-300 line-through">${product?.price}</span>
          <span className="ml-2 text-red-500">${product?.discount_price}</span>
        </div>
        <p className= {`flex items-center gap-2 ${product?.stock!=0?"text-green-500":"text-red-500"} `} >
          <LuPackage />
          <span className="">{product?.stock==0?"Out Of Stock":"In Stock"}</span>
        </p>
        <p className="py-2 opacity-80 text-justify">
            {product?.description.slice(0,150)}...
        </p>
        {/* <button className="bg-[#EF233C] w-full uppercase text-white font-semibold py-2 px-4 rounded-md ">
          <span>Add to Cart</span>
        </button> */}
      </div>
    </div>
  ); 
};


export default Product_Card_ListView;