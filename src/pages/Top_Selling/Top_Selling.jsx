import { Link } from "react-router-dom";
import Product_Card from "../../components/Product_Card/Product_Card";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";

const Top_Selling = () => {
  const { allData } = useContext(DataContext);
    
      const Top_Selling = allData[1]?.filter((product)=>product.tag ==="top_selling")
    return (
       
         <div className="">
                    <hr />
                    <div className="grid grid-cols-4 gap-5 mt-10">
                    {
                    Top_Selling?.map((product,idx) => (
                        <Link to={`/product-detail/${product?.id}`} key={idx}><Product_Card product={product}/></Link>
                    ))
                }
                    </div>
        
                    </div>
    );
};

export default Top_Selling;