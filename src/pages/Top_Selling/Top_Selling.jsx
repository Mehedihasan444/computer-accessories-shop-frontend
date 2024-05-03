import Product_Card from "../../components/Product_Card/Product_Card";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";

const Top_Selling = () => {
  const { allData } = useContext(DataContext);

  const Top_Selling = allData[1]?.filter(
    (product) => product.tag === "top_selling"
  );
  return (
    <div className="">
      <hr />
      <div className="grid grid-cols-4 gap-5 mt-10">
        {Top_Selling?.map((product, idx) => (
          <Product_Card product={product} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Top_Selling;
