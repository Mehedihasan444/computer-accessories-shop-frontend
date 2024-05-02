import { useQuery } from "@tanstack/react-query";


import Count_Down from "./Count_Down";
import Product_Card from "../Product_Card/Product_Card";

const Deal_Of_the_Week = () => {
  const {
    data: products = [],
  } = useQuery({
    queryKey: ["data"],
    queryFn: () => fetch("/products.json").then((res) => res.json()),
  });

  return (
    <section id="deals" className="space-y-5 h-[80vh] flex flex-col justify-center ">
      <h1 className="text-4xl font-semibold">Deal Of The Week</h1>
      <hr />
      <div className="flex justify-between gap-5 ">
        <div className="border rounded-md flex items-center justify-center px-10 bg-gray-200">
          <div className="space-y-3">
            <h4 className="font-semibold text-red-500">Deal Of The Week</h4>
            <h1 className="text-6xl font-bold  ">50% OFF</h1>
            <p className="">
              Deal of the Week for deals on consumer electronics.
            </p>
            <div className="">
                <Count_Down days={0} hours={2} minutes={35} seconds={44}/>
            </div>
          </div>
        </div>
        <div className="">
          <div className="overflow-y-scroll h-[400px]  p-5">
            <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  gap-5">
              {products?.map((product) => (
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
