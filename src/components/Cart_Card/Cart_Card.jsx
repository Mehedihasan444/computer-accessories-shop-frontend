import {  useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiWarning } from "react-icons/ci";



const Cart_card = ({ product, refetch, setTotalAmount, totalAmount }) => {
  const { _id, name, description, price, image, stock, category } = product;
  const [quantity, setQuantity] = useState(1);
  const axiosSecure = useAxiosSecure();
  const [delete_Product, setDelete_Product] = useState(false);


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
  const handleDelete = async (id) => {
    document.getElementById("my_modal_5").showModal();

    if (delete_Product) {
      axiosSecure.delete(`/user/cart/delete-item/${id}`).then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();

          toast.success("product delete  successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } else {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      });
    }
  };


  

  return (
    <div
      className="flex items-center gap-5 w-[700px]  "
      onChange={() => setTotalAmount(totalAmount + parseInt(price))}
    >
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex text-center justify-center items-center flex-col">
            <div className="flex text-red-500 justify-center items-center text-6xl">
              <CiWarning />
            </div>
            <h3 className="font-bold text-lg">
              Are you sure You want to delete it!
            </h3>
            <p className="py-4">
              Press Delete if you want to delete otherwise click the button
              below to cancel
            </p>
          </div>
          <div className="modal-action">
            <form method="dialog ">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-error text-white mr-5"
                onClick={() => setDelete_Product(true)}
              >
                Delete
              </button>
              <button type="submit" className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* <div className="p-5 ">
        <input type="checkbox" className=" w-5 h-5" />
      </div> */}
      <div
        className="flex gap-5 items-center  "
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px" }}
      >
        <div className="">
          <img
            src={image}
            alt={name}
            className="h-40 ml-5 w-full object-cover"
          />
        </div>
        <div className=" p-5 w-full">
          <div className="flex justify-between items-center">
            <span className=" text-sm text-gray-400">{category}</span>
            <div className="btn bg-transparent text-xl">
              <FaRegTrashCan onClick={() => handleDelete(_id)} className="" />
            </div>
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
