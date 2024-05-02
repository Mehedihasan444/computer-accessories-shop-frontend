import Admin_Product_Card from "../../components/Product_Card/Admin_Product_Card";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";

const All_Products = () => {
  const { allData } = useContext(DataContext);

  console.log(allData[1])
  return (
    <section className="min-h-screen  flex items-center" id="products">
      <div className="">
        <h1 className="text-center text-4xl font-bold">All Products</h1>
        <p className="text-center text-xl font-semibold my-5">
          Products found ({allData[1]?.length})
        </p>
        <hr />
        <div className="overflow-y-auto h-[80vh]">
          <div className="grid grid-cols-1 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
            {allData[1]?.map((product) => (
              <Admin_Product_Card key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default All_Products;
