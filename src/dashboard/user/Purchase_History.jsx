import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import WarrantyCountdown from "../../Utilities/WarrantyCountdown/WarrantyCountdown ";

const Purchase_History = () => {
  const { allData } = useContext(DataContext);

  return (
    <div className="text-center h-screen overflow-y-auto">
      <p className="mt-5">Your order record list </p>
      <h1 className="text-4xl font-bold">
        Purchases History ({allData[9]?.length})
      </h1>

      <div className="overflow-x-auto mt-5">
        <table className="table table-md text-center border">
          <thead className="border">
            <tr className="text-base">
              <th>#</th>
              <th>Purchase Info</th>
              <th>Products</th>
              <th>Warranty </th>
          
              <th>Status</th>
              <th className="text-center">Payment</th>
            </tr>
          </thead>
          <tbody className="">
            {allData[9]?.map((order, i) => (
              <tr className="hover" key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="text-left">
                    <h3 className="font-semibold ">
                      Bill : Tk {order?.total_bill}
                    </h3>
                    <h3 className="font-semibold ">
                      Discount : Tk {order?.discount}
                    </h3>
                    <h3 className="font-semibold ">quantity: {order?.quantity}</h3>
                    <p className="font-semibold">Number :{order?.phone}</p>
                    <p className="font-semibold">
                      Delivery Location :{order?.delivery_location}
                    </p>
                    <p className="font-semibold">
                      Ordered date :{order?.ordered_date}
                    </p>
                  </div>
                </td>
                <td className="">
                  {order?.products?.map((i, index) => (
                    <div
                      className="flex justify-between items-center mb-2 w-80 border p-3"
                      key={index}
                    >
                      <div className="flex-1">
                        <img
                          src={i?.images[0]}
                          alt=""
                          className="h-16 w-16 object-cover"
                        />
                      </div>
                      <div className="flex-1  ">
                        <h3 className="font-semibold ">{i?.name}</h3>
                        <p className="">TK {i?.price}</p>
                      </div>
                      <div className="flex-1  ">
                        <Link to={`/product-detail/${i?.id}`}>
                          <button className="btn text-xl">
                            <FaEye></FaEye>
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </td>
                <td>
       
                  <div className="">
                    {
                      order?.products?.map((product,i)=><div key={i}>
                       <span
                      className={`${
                        product?.warranty?.available=='true'
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {product?.warranty?.available=='true'
                        ? "Warranty available"
                        : "Warranty not available"}
                    </span>
                    {product?.warranty?.available =='true'? (
                      <>
                        <h4 className="">
                          {" "}
                          <span className="font-semibold"> Warranty :</span>
                          {product?.warranty?.years} Years
                        </h4>
                        <h4 className="">
                          {" "}
                          <span className="font-semibold">Warranty Id :</span>
                           {product?.warranty?.warranty_id}{" "}
                        </h4>
                      </>
                    ) : (
                      ""
                    )}

                    {product?.warranty?.available=='true' ? (
                      <WarrantyCountdown endDate={product?.warranty?.duration} />
                    ) : (
                      ""
                    )}
                      </div>)
                    }
                   
                  </div>
                </td>
                
                <td>{order?.status}</td>
                <td>{order?.payment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Purchase_History;
