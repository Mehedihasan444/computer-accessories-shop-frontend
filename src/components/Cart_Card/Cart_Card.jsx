import { useState } from "react";
import { FaEye, FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart_card = ({ product,DataFetch,  setTotalAmount, totalAmount }) => {
  const { _id, name, description, price, images, stock, category } = product;
  const [quantity, setQuantity] = useState(1);
  const axiosSecure = useAxiosSecure();

  const handleIncrease = (price) => {
    setQuantity(quantity + 1);
    setTotalAmount((totalAmount += price));
  };
  const handleDecrease = (price) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setTotalAmount((totalAmount -= price));
    }
  };
  const handleDelete = async () => {
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
        axiosSecure.delete(`/cart/${_id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            DataFetch()
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
        });
      }
    });
  };

  return (
    <div
      className="flex items-center gap-5 w-[700px]  "
      onChange={() => setTotalAmount(totalAmount + parseInt(price))}
    >
      <div
        className="flex gap-5 items-center  "
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px" }}
      >
        <div className="">
          <img
            src={images[0]}
            alt={name}
            className="h-40 ml-5 w-full object-cover"
          />
        </div>
        <div className=" p-5 w-full">
          <div className="flex justify-between items-center">
            <span className=" text-sm text-gray-400">{category}</span>
            <div className="btn bg-transparent text-xl">
              <FaRegTrashCan onClick={() => handleDelete()} className="" />
            </div>
            <Link to={`/product-detail/${_id}`}>

            <div className="btn bg-transparent text-xl">
              <FaEye  className="" />
            </div>
            </Link>
          </div>
          <h2 className="font-semibold text-xl">{name}</h2>
          <span className="text-xs">stock: {stock}</span>
          <p className="text-sm text-gray-400 flex-grow-1">{description}</p>
          <span className="font-semibold">${price}</span>
          <div className="flex items-center  mt-4">
            <button
              className="text-2xl"
              onClick={() => handleDecrease(parseInt(price))}
            >
              <FaRegSquareMinus />
            </button>
            <input
              type="number"
              value={quantity}
              name="quantity"
              onChange={(event) => setQuantity(event.target.value)}
              className="w-12 mx-4 bg-base-200  pl-2"
            />
            <button
              className=" text-2xl"
              onClick={() => handleIncrease(parseInt(price))}
            >
              <FaRegPlusSquare />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart_card;
