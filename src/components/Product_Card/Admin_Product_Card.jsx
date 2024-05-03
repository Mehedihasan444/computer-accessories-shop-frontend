import { useContext, useEffect, useRef, useState } from "react";
import RatingStar from "../../Utilities/RatingStar/RatingStar";
import { LuPackage } from "react-icons/lu";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { DataContext } from "../../DataProvider/DataProvider";

const Admin_Product_Card = ({ product }) => {
  const {DataFetch}=useContext(DataContext)
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

  //   delete product
  const handleDelete = async(id) => {


    const res =await axiosSecure.delete(`/admin/products/${id}`);
    if (res.data.deletedCount > 0) {
      toast.success("Product deleted successfully");
      DataFetch()
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      className="bg-white rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
      style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px" }}
    >
      <div className="relative group ">
        <div
          className="w-full h-40  flex justify-center items-center   bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="w-44"
            src={product.images[currentImageIndex]}
            alt=""
          />
        </div>
        {/* <div className="absolute top-2 right-2 hover:text-red-500 hover:shadow-md  bg-slate-100 hover:bg-slate-200 p-2 rounded-full">
          <IoMdHeartEmpty />
        </div> */}
        <div className="absolute top-2 right-2 space-y-3">
          <div className="cursor-pointer hover:text-red-500 hover:shadow-md  bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-xl">
            <Link to={`/dashboard/admin/update_products/${product?._id}`}>
              <FaEdit />
            </Link>
          </div>
          <div className="cursor-pointer hover:text-red-500 hover:shadow-md  bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-xl">
            <FaTrash onClick={() => handleDelete(product?._id)} />
          </div>
        </div>
      </div>
      <Link to={`/product-detail/${product._id}`}>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product?.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex gap-3">
            <RatingStar Rating_value={product?.rating} />
            <span className="font-semibold text-sm">
              {product?.reviews} reviews
            </span>
          </div>
        </div>
        <div className="mb-2">
          <span className="text-gray-300 line-through">${product?.price}</span>
          <span className="ml-2 text-red-500">${product?.discount_price}</span>
        </div>
        <p
          className={`flex items-center gap-2 ${
            product?.stock != 0 ? "text-green-500" : "text-red-500"
          } `}
        >
          <LuPackage />
          <span className="">
            {product?.stock == 0 ? "Out Of Stock" : "In Stock"}
          </span>
        </p>
      </div>
      </Link>
    </div>
  );
};

export default Admin_Product_Card;
