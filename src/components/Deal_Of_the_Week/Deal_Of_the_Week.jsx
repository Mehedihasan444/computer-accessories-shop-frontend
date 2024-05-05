import Count_Down from "./Count_Down";
import Product_Card from "../Product_Card/Product_Card";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";

const Deal_Of_the_Week = () => {
  const {allData}=useContext(DataContext)


  return (
    <section id="deals" className="space-y-5 sm:h-[80vh] flex flex-col justify-center px-5">
      <h1 className="text-4xl font-semibold text-center sm:text-left">Deal Of The Week</h1>
      <hr />
      <div className="sm:flex justify-between gap-5 ">
        <div className="flex-1 border rounded-md flex items-center justify-center px-10 bg-gray-200">
          <div className="space-y-3">
            <h4 className="font-semibold text-red-500 mt-5">Deal Of The Week</h4>
            <h1 className="text-6xl font-bold  ">50% OFF</h1>
            <p className="">
              Deal of the Week for deals on consumer electronics.
            </p>
            <div className="">
                <Count_Down days={0} hours={2} minutes={35} seconds={44}/>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="overflow-y-scroll h-[400px]  p-5">
            <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-5 sm:mt-10">
              {allData[1]?.slice(0,6)?.map((product) => (
                <Product_Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deal_Of_the_Week;
