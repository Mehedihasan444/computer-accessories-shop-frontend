import { useContext, useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import pinterast from "../../assets//social.png";
import Product_Image from "./Product_Image/Product_Image";
import ProductDetails_Tabs from "./Product_Details_Tabs";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../../DataProvider/DataProvider";
import Product_Card from "../../components/Product_Card/Product_Card";


const ProductDetails = () => {
  const { id } = useParams();
  const { byId, allData } = useContext(DataContext);
  const [ProductDetails, setProductDetails] = useState({});

  useEffect(() => {
    byId(id).then((res) => {
      setProductDetails(res[0]);
    });
  }, [id, byId]);

  const relatedProducts = allData[1]?.filter(
    (product) => product?.category == ProductDetails?.category
  );

  const [count, setCount] = useState(1);
  const handelIncrease = () => {
    const x = count + 1;
    setCount(x);
  };
  const handelDecrease = () => {
    if (count > 1) {
      const x = count - 1;
      setCount(x);
    }
  };


  const images = ProductDetails?.images?.map(item => ({
    original: item,
    thumbnail: item
  }));


  return (
    <section className="mt-10">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Product_Image images={images} />
       
        </div>
        <div className="space-y-5">
          <h1 className="text-5xl font-bold">{ProductDetails?.name}</h1>
          <h1 className="text-2xl text-red-600 font-bold">
            <h1>Tk {ProductDetails?.price*count}</h1>
          </h1>
          <p>{ProductDetails?.description} </p>
          <hr />
          <div className="flex gap-5">
            <div className="flex justify-center items-center gap-5 p-2 rounded-lg border-2">
              <FaMinus className="cursor-pointer" onClick={handelDecrease} />
              <p>{count}</p>
              <FaPlus className="cursor-pointer" onClick={handelIncrease} />
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
          <ProductDetails_Tabs />
        </div>
        <div className="divider"></div>
        <div className=" mt-10 space-y-4">
          <h1 className="font-semibold text-2xl">Related Products </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            {/* <ProductCard product={product} /> */}
            {/* Display more product details */}
            {relatedProducts?.slice(0, 4)?.map((product) => {
              return (
                // <Link to={`/product-detail/${product._id}`} key={product._id}>
                <Product_Card product={product} key={product._id} />
                // </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;