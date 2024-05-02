import { Link } from "react-router-dom";
import Product_Card from "../../components/Product_Card/Product_Card";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";

const New_Arrivals = () => {
  const { allData } = useContext(DataContext);

  const New_Arrivals = allData[1]?.filter(
    (product) => product.tag === "new_arrivals"
  );
  return (
    <div className="">
      <hr />
      <div className="grid grid-cols-4 gap-5 mt-10">
        {New_Arrivals?.map((product, idx) => (
          <Link to={`/product-detail/${product?.id}`} key={idx}>
            <Product_Card product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default New_Arrivals;
