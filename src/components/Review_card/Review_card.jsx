import { FaTrash } from "react-icons/fa";
import RatingStar from "../../Utilities/RatingStar/RatingStar";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import Swal from "sweetalert2";

const Review_card = ({ review }) => {
  const axiosSecure = useAxiosSecure();

  const {DataFetch}=useContext(DataContext)

//   delete function
  const handleDelete =  (id) => {

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
  axiosSecure.delete(`/admin/reviews/${id}`).then((res) => {
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
    <>
      <div
        key={review.id}
        className="bg-white p-4 rounded shadow-md flex gap-4 mb-5 relative "
      >
        <div className="absolute top-4 right-4 ">
          <FaTrash
            onClick={() => handleDelete(review?._id)}
            className="cursor-pointer text-xl text-red-500"
          />
        </div>
        <div className="mb-2 ">
          <img
            src={review?.image}
            alt={`Profile of ${review?.name}`}
            className="rounded-full  w-12 h-12 object-cover "
          />
        </div>
        <div className=" flex-1 text-left space-y-2">
          <h3 className="font-bold text-2xl">{review?.name}</h3>
          <p className=" text-xs text-gray-500">{review?.reviewDate}</p>

          <div className=" ">
            <RatingStar
              style={{ maxWidth: 100 }}
              value={review?.rating}
              readOnly
            />
          </div>

          <p className="text-xs text-left">
            <span className="text-lg font-semibold">
              Feedback:
              <br />{" "}
            </span>{" "}
            {review?.review}
          </p>
        </div>
      </div>
    </>
  );
};

export default Review_card;
