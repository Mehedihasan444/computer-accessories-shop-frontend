import Product_Card from "../../components/Product_Card/Product_Card";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";

const Featured = () => {
  const { allData } = useContext(DataContext);

  const Featured = allData[1]?.filter((product) => product.tag === "featured");
  return (
    <div className="">
      <hr />
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {Featured?.slice(0,7)?.map((product, idx) => (
            <Product_Card product={product} key={idx}/>
        ))}
      </div>
    </div>
  );
};

export default Featured;
