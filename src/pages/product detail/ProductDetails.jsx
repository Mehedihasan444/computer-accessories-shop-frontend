import { useContext, useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import pinterast from "../../assets//social.png";
import Product_Image from "./Product_Image/Product_Image";
import {  useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../DataProvider/DataProvider";
import Product_Card from "../../components/Product_Card/Product_Card";
import Product_Details_Tabs from "./Product_Details_Tabs";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const ProductDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { byId, allData,DataFetch } = useContext(DataContext);
  const [ProductDetails, setProductDetails] = useState({});
  const [count, setCount] = useState(1);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const navigate =useNavigate()


  useEffect(() => {
    byId(id).then((res) => {
      setProductDetails(res[0]);
    });
  }, [id, byId]);

  // filter same category data as this product
  const relatedProducts = allData[1]?.filter(
    (product) => product?.category == ProductDetails?.category
  );
// increase quantity
  const handelIncrease = () => {
    const x = count + 1;
    setCount(x);
  };
  // decrease quantity
  const handelDecrease = () => {
    if (count > 1) {
      const x = count - 1;
      setCount(x);
    }
  };



// creating dynamic images array
  const images = ProductDetails?.images?.map(item => ({
    original: item,
    thumbnail: item
  }));
  // generate todays date
  const date=new Date()
  // payment function
  const handlePayment = async () => {
    if (user) {
       const info = {
      total_bill: (ProductDetails.price*count),
      discount:0,
      phone:'',
      delivery_location:'',
      ordered_date:date,
      quantity: count,
      userName: user?.displayName,
      userEmail: user?.email,
      status: "pending",
      payment: "pending",
      transactionId: "",
      products: [ProductDetails],
    };
    const res = await axiosSecure.post("/payment", info);
    window.location.replace(res.data.url);
    }else{
      navigate('/system-access/signIn')
    }
   
  };
  // add to cart function
  const handleCart = async () => {


    if (user) {
        const res = await axiosPublic.post(`/cart`, {
      ...ProductDetails,
      email: user?.email,
    });
    if (res.data.insertedId) {
      console.log(res.data);
      toast.success(`${ProductDetails?.name} has been added to the wishlist.`);
      DataFetch();
    } else if (res.data.message) {
      toast.error(`${ProductDetails?.name} ${res.data.message} in the wishlist`);
    }
    }else{
      navigate('/system-access/signIn')
    }
  
  };

  return (
    <section className="mt-10">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Product_Image images={images} />
       
        </div>
        <div className="space-y-5">
          <h1 className="text-5xl font-bold">{ProductDetails?.name}</h1>
          <h1 className="text-2xl text-red-600 font-bold">
            <h1>Tk {ProductDetails?.price}</h1>
          </h1>
          <p>{ProductDetails?.description} </p>
          <hr />
          <div className="flex gap-5">
            <div className="flex justify-center items-center gap-5 p-2 rounded-lg border-2">
              <FaMinus className="cursor-pointer" onClick={handelDecrease} />
              <p>{count}</p>
              <FaPlus className="cursor-pointer" onClick={handelIncrease} />
            </div>
            <div className="flex gap-5">
              <button  onClick={() => handleCart()} className="bg-[#EF233C]  text-white font-bold py-2 px-4 rounded-md">
                Add to cart
              </button>
              <button onClick={handlePayment} className="bg-[#000000]  text-white font-bold py-2 px-4 rounded-md">
                Buy Now
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
          {/* <div className="w-full">

          <p className="">Warranty : </p>
          </div> */}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-10">
        <div className="divider"></div>

        <div className="">
          <Product_Details_Tabs id={ProductDetails?._id}/>
        </div>
        <div className="divider"></div>
        <div className=" mt-10 space-y-4">
          <h1 className="font-semibold text-2xl">Related Products </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
         
            {/* Display more product details */}
            {relatedProducts?.slice(0, 4)?.map((product) => {
              return (
                <Product_Card product={product} key={product._id} />
               
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;