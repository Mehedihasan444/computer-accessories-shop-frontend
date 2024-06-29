import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import Swal from "sweetalert2";

const All_Users = () => {
  const axiosSecure = useAxiosSecure();
  const { allData, DataFetch } = useContext(DataContext);
// A function that convert normal user to admin
  const handleMakeAdmin = async (email) => {
    await axiosSecure.patch(`/users/admin/${email}`).then((res) => {
      console.log(res.data);
      DataFetch();
    });
  };


  // A function that delete user 
  const handleDelete =  (email) => {
  
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
  axiosSecure.delete(`/users/admin/${email}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        DataFetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong.",
          icon: "error",
        });
      }
    });}})
  };

  return (
    <div className="text-center ">
      <p className="">How Many??</p>
      <h1 className="text-4xl font-bold ">Manage all users</h1>
      <div className="flex justify-around ">
        <h1 className="text-xl font-semibold mt-5">
          Total Users: {allData[2]?.length}
        </h1>
      </div>
      {/* table */}

      <div className="overflow-x-auto mt-3 h-[80vh] overflow-y-auto">
        <table className="table table-md text-center border">
          {/* head */}
          <thead className="text-base ">
            <tr>
              <th>#</th>

              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Number of Orders</th>
              <th>Total Spent Amount</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allData[2]?.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td> {item?.name} </td>
                <td> {item?.email} </td>
                <td>{item?.phone}</td>
                <td>{item?.no_orders} </td>
                <td>{item?.total_spend}</td>
                <td>{item?.role}</td>

                <td className="space-y-2">
                  <button
                    onClick={() => {
                      handleMakeAdmin(item?.email);
                    }}
                    disabled={item.role === "admin" ? true : false}
                    className="btn btn-sm btn-primary border-none text-white"
                  >
                    Make Admin
                  </button>

                  <button
                    onClick={() => handleDelete(item?.email)}
                    className="btn btn-sm ml-2 btn-error border-none text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className=" flex justify-center my-10">
        <button
          className={`btn btn-accent mr-3 ${
            currentPage === 1 ? "btn-disabled" : ""
          }`}
          // onClick={handlePreviousPage}
        >
          «
        </button>
        {pages?.map((page, idx) => (
          <button
            key={idx}
            className={`${
              currentPage === idx + 1 ? "btn-disabled" : ""
            } mr-2 btn btn-accent`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          className={`btn btn-accent mr-3 ${
            currentPage === pages.length ? "btn-disabled" : ""
          }`}
          onClick={handleNextPage}
        >
          »
        </button>
      </div> */}
    </div>
  );
};

export default All_Users;
