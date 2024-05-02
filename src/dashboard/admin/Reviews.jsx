import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import Review_card from "../../components/Review_card/Review_card";

const Reviews = () => {
  const { allData, DataFetch } = useContext(DataContext);

  return (
    <div className="text-center">
      <p className="">User's Thought About Products</p>
      <h1 className="text-4xl font-bold ">Reviews</h1>
      <div className=" overflow-y-auto h-[80vh]">
        <div className="p-5 sm:p-0 sm:w-[70vw]" onChange={() => DataFetch()}>
          {allData[0]?.map((review) => (
            <Review_card key={review._id} review={review}></Review_card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
