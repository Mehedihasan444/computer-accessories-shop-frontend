
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Cart_card from "../../components/Cart_Card/Cart_Card";
import { DataContext } from "../../DataProvider/DataProvider";


const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {allData,DataFetch}=useContext(DataContext)
  const [totalAmount, setTotalAmount] = useState(0);
// Genarate todays date
const date=new Date()

  useEffect(() => {
    let bill = 0;
    for (let i = 0; i < allData[5]?.length; i++) {
      bill += parseInt(allData[5][i].price);
    }
    setTotalAmount(bill);
    DataFetch()
  }, [allData,DataFetch]);
// payment function
  const handlePayment = async () => {
    const info = {
      total_bill: totalAmount,
      discount:0,
      phone:'',
      delivery_location:'',
      ordered_date:date,
      quantity: 0,
      userName: user?.displayName,
      userEmail: user?.email,
      status: "pending",
      payment: "pending",
      transactionId: "",
      products: allData[5],
    };
    const res = await axiosSecure.post("/payment", info);
    window.location.replace(res.data.url);
  };

  return (
    <div className="relative h-screen w-full flex justify-between gap-5">
      <div className="">
        <h1 className="text-xl font-semibold max-w-5xl mx-auto text-center mt-5">
        Available items: {allData[5]?.length}
      </h1>
      <div className="divider max-w-5xl mx-auto"></div>
      <div className="h-[85vh] overflow-y-auto">

      <div className="grid grid-cols-1 justify-center items-center px-5">
        <div className="space-y-5 my-10 max-w-5xl mx-auto mb-40">
          { allData[5]?.length == 0 ? (
            <div className="">
              <h1 className="text-xl font-semibold">
                You have not added any product yet!
              </h1>
            </div>
          ) : (
            allData[5]?.map((item) => (
              <Cart_card
                key={item._id}
                product={item}
                DataFetch={DataFetch}
                setTotalAmount={setTotalAmount}
                totalAmount={totalAmount}
              />
            )
        )
          )}
        </div>
      </div>
      </div>

      </div>
      <div className="flex items-center justify-center w-1/3">

         <div className=" border p-5" style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px" }}>

        <div className="">
          <h1 className="text-xl font-semibold">
            Total amount: ${totalAmount}
          </h1>
        </div>
        <button className="btn btn-accent text-white"
        disabled={allData[5].length ===0}
        onClick={handlePayment}>
          checkout
        </button>
      </div>
      </div>
     
    </div>
  );
};

export default Cart;
