import { useContext, useEffect, useRef, useState } from "react";
import { LuPackage } from "react-icons/lu";
import { FaMinus } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { DataContext } from "../../DataProvider/DataProvider";
import { toast } from "react-toastify";
const Offer_Card_Minus = ({ product }) => {
  const { allData, DataFetch } = useContext(DataContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalIdRef = useRef(null);
const axiosSecure =useAxiosSecure()
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

  // 
  //   delete product
  const handleDelete = async(id) => {
    const handle_selected_product=allData[3].products.filter((product) =>product._id !== id)


    await axiosSecure.patch("/offers-products", {
      products: [...handle_selected_product],
    })
    .then((res) => {
      if (res.data.modifiedCount>0) {
        toast.success('product remove from the offer list')
        DataFetch()
      }else{
        toast.error('something went wrong')
      }
    
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
          <div onClick={()=>handleDelete(product?._id)} className="flex justify-center cursor-pointer items-center text-2xl border rounded-full w-10 h-10">
            <FaMinus className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer_Card_Minus;
