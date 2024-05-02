
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Cart_card from "../../components/Cart_Card/Cart_Card";


const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [totalAmount, setTotalAmount] = useState(0);

  const {
    isPending,
    data: cartItems = [],
    refetch,
  } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
    //   const res = await axiosSecure.get(`/user/cart/${user?.email}`);
    //   return res.data;
    },
  });

  useEffect(() => {
    let bill = 0;
    for (let i = 0; i < cartItems.length; i++) {
      bill += parseInt(cartItems[i].price);
    }
    setTotalAmount(bill);
  }, [cartItems]);

  const handlePayment = async () => {
    const info = {
      totalBill: totalAmount,
      userName: user.displayName,
      userEmail: user.email,
      status: "pending",
      payment: "pending",
      transactionId: "",
      cartItems,
    };
    // const res = await axiosSecure.post("/user/foods/payment", info);
    // window.location.replace(res.data.url);
  };
  const item={_id:1,name:"laptop",description:"lorem10djk kjsdfhk kjdhfjksad",price:1000,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-2ahjzMqUuR4AktFRqSuw90UQcEWeRL2R1scLrX4qtA&s",stock:10,category:"laptop"}

  return (
    <div className="relative min-h-screen">
      <h1 className="text-xl font-semibold max-w-5xl mx-auto text-center mt-5">
        Available items: {cartItems.length}
      </h1>
      <div className="divider max-w-5xl mx-auto"></div>
      <div className="grid grid-cols-1 justify-center items-center">
        <div className="space-y-5 my-10 max-w-5xl mx-auto mb-40">
          {isPending ? (
           <h1 className="text-4lx font-semibold">loading...</h1>
          ) : cartItems.length != 0 ? (
            <div className="">
              <h1 className="text-xl font-semibold">
                You have not added any food yet!
              </h1>
            </div>
          ) : (
            // cartItems.map((item) => (
              <Cart_card
                // key={item._id}
                product={item}
                refetch={refetch}
                setTotalAmount={setTotalAmount}
                totalAmount={totalAmount}
              />
            // )
        // )
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
