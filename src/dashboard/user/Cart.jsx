
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Cart_card from "../../components/Cart_Card/Cart_Card";
import { DataContext } from "../../DataProvider/DataProvider";


const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {allData,DataFetch}=useContext(DataContext)
  const [totalAmount, setTotalAmount] = useState(0);



  useEffect(() => {
    let bill = 0;
    for (let i = 0; i < allData[5]?.length; i++) {
      bill += parseInt(allData[5][i].price);
    }
    setTotalAmount(bill);
    DataFetch()
  }, [allData,DataFetch]);

  const handlePayment = async () => {
    const info = {
      totalBill: totalAmount,
      userName: user.displayName,
      userEmail: user.email,
      status: "pending",
      payment: "pending",
      transactionId: "",
      products: allData[5],
    };
    // const res = await axiosSecure.post("/user/foods/payment", info);
    // window.location.replace(res.data.url);
  };
  // const item={_id:1,name:"laptop",description:"lorem10djk kjsdfhk kjdhfjksad",price:1000,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-2ahjzMqUuR4AktFRqSuw90UQcEWeRL2R1scLrX4qtA&s",stock:10,category:"laptop"}

  return (
    <div className="relative min-h-screen">
      <h1 className="text-xl font-semibold max-w-5xl mx-auto text-center mt-5">
        Available items: {allData[5]?.length}
      </h1>
      <div className="divider max-w-5xl mx-auto"></div>
      <div className="grid grid-cols-1 justify-center items-center">
        <div className="space-y-5 my-10 max-w-5xl mx-auto mb-40">
          { allData[5]?.length == 0 ? (
            <div className="">
              <h1 className="text-xl font-semibold">
                You have not added any food yet!
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

      <div className="z-50 right-0 bottom-3 left-0 absolute max-w-5xl bg-slate-200 mx-auto flex justify-between items-center border p-5" style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px" }}>
        <div className="">
          <h1 className="text-xl font-semibold">
            Total amount: ${totalAmount}
          </h1>
        </div>
        <button className="btn btn-accent text-white" onClick={handlePayment}>
          checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
