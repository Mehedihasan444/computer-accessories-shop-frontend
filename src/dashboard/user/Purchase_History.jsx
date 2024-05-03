

import { useContext } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { DataContext } from "../../DataProvider/DataProvider";

const Purchase_History = () => {
  const {allData}=useContext(DataContext)


  

 



  return (
    <div className="text-center">
        <p className="">....</p>
      <h1 className="text-4xl font-bold">Purchases History</h1>
     

      <div className="overflow-x-auto mt-5">
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
            {/* {
              allData[]
            } */}
          <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Purchase_History;