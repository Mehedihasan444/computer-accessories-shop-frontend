import { FaArrowRightLong } from "react-icons/fa6";
const BannerCard = ({ banner }) => {
  const { id, img, title, description, subHeading, price } = banner

  return (
    <div className="w-full h-[60vh] rounded-lg flex mt-10 justify-start items-center" style={{
      backgroundImage: `url(${img})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover"
    }}>
      <div className="md:space-y-5 space-y-3 ml-5 md:ml-10 text-left">
        <h3 className="text-xs bg-red-600 font-semibold text-white text-center px-5 py-1 rounded-full inline-block  mb-2">{subHeading}</h3>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <p className="text-lg font-bold text-gray-900 mb-4">${price}</p>
        <button className="bg-[#EF233C] flex items-center justify-between gap-2  text-white font-bold md:py-2 md:px-4 py-1 px-2 rounded-md ">
          <span>Add to Cart</span>
          <FaArrowRightLong />
        </button>
      </div>
    </div>



  );
};

export default BannerCard;