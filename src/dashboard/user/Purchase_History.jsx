
import { useQuery } from "@tanstack/react-query";
// import { DateRangePicker } from "react-date-range";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Purchase_History = () => {
  const axiosSecure = useAxiosSecure();
  const [orders, setOrders] = useState([]);

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/users/collection");
      return res.data;
    },
  });

  const { data: allOrders = [], refetch } = useQuery({
    queryKey: ["allOrders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/admin/bookings");
      return res.data;
    },
  });

  useEffect(() => {
    const filteredOrders = [];
    for (let i = 0; i < users?.length; i++) {
      const filteredData = allOrders.filter(
        (item) =>
          item?.email.toLowerCase() === users[i]?.email.toLowerCase() &&
          item?.status === "pending"
        //"On The Way"
      );
      filteredOrders.push(...filteredData);
    }
    setOrders(filteredOrders);
  }, [allOrders, users]);

  const handleFilter = (e) => {
    e.preventDefault();
    const form = e.target;
    const start = form.startingDate.value;
    const end = form.endingDate.value;

    const filteredByDate = orders.filter((item) => {
      let itemDate = item?.requestedDeliveryDate;
      return itemDate >= start && itemDate <= end;
    });
    console.log(filteredByDate);
    setOrders(filteredByDate);
    refetch();
  };

  return (
    <div className="text-center">
        <p className="">....</p>
      <h1 className="text-4xl font-bold">All Orders</h1>
      <div className="flex justify-end items-center">
      
        <form onSubmit={handleFilter}>
          <div className="flex justify-end  gap-5 my-5">
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-medium">Staring date</span>
                </div>
                <input
                  type="date"
                  name="startingDate"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-medium">Ending date</span>
                </div>
                <input
                  type="date"
                  name="endingDate"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="flex items-end">
              <button type="submit" className="btn btn-info text-white ">
                Filter
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-md text-center border">
          <thead className="border">
            <tr className="text-base">
              {/* <th>#</th> */}
              <th>Name</th>
              <th>Phone</th>
              <th>Requested Delivery Date</th>
              <th>Booking Date</th>
              <th>Cost</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {/* <AllParcelsTable bookings={bookings}></AllParcelsTable> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Purchase_History;