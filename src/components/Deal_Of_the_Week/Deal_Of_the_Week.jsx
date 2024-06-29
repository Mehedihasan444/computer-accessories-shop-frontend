import Count_Down from "./Count_Down";
import Product_Card from "../Product_Card/Product_Card";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";

const Deal_Of_the_Week = () => {
  const {allData}=useContext(DataContext)


  return (
    <div id="deals" className={`space-y-5 sm:h-[80vh] flex flex-col justify-center px-5 ${allData[3]?.display?"":"hidden"}`}>
      <h1 className="text-4xl font-semibold text-center sm:text-left">{allData[3]?.title}</h1>
      <hr />
      <div className="  sm:flex justify-between gap-5  space-y-10">
        <div className="flex-1 border rounded-md flex items-center justify-center px-10 bg-gray-200">
          <div className=" flex flex-col justify-center items-center space-y-3">
            <h4 className="font-semibold text-red-500 mt-5">{allData[3]?.title}</h4>
            <h1 className="text-6xl font-bold  ">{allData[3]?.percentage}% OFF</h1>
            <p className="">
              {allData[3]?.title} for deals on consumer electronics.
            </p>
            <div className="">
                <Count_Down days={allData[3]?.days} hours={allData[3]?.hours} minutes={allData[3]?.minutes} seconds={allData[3]?.seconds}/>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="overflow-y-scroll h-[300px] sm:h-[400px]  p-5">
            <div className=" grid grid-cols-2  md:grid-cols-1 lg:grid-cols-2  gap-5">
              {allData[3]?.products?.slice(0,6)?.map((product) => (
                <Product_Card key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal_Of_the_Week;
