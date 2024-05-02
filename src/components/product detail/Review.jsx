import RatingStar from "../../Utilities/RatingStar/RatingStar";


const Review = ({ review }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-3 items-center">
<img src="https://variety.com/wp-content/uploads/2023/06/avatar-1.jpg" alt="" className="w-7 rounded-full h-7" />
        <div className="">

        <h3 className="text-lg font-semibold">{review.user}</h3>
        <p className="text-xs text-gray-500">05-04-2024</p>
        </div>
        </div>
        <div className="flex items-center">
          {/* Add star rating component */}
          <RatingStar Rating_value={review.rating} />
          {/* You can use a library like react-rating-stars-component */}
        </div>
      </div>
      <p className="text-gray-700">{review.comment}</p>
    </div>
  );
};

export default Review;
