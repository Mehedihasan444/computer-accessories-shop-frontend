
// import { DateRangePicker } from "react-date-range";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
const Order = () => {
  const {allData}=useContext(DataContext)
  const [orders, setOrders] = useState([]);

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
            {
              allData[9].map((order,i)=>    <tr className="hover" key={i}>
         <th>{i+1}</th>
        <td>{order?.user_name}</td>
        <td>{order?.email}</td>
        <td>{order?.phone}</td>
        <td>{order?.device_type}</td>
        <td>{order?.booking_date}</td>
        <td>{order?.booking_date}</td>
        <td>{order?.booking_date}</td>
        <td>{order?.description}</td>
      </tr>)
            }
      
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Order;