import { useContext, useState } from "react";
import Offer_Card from "../../components/Offer_Card/Offer_Card";
import Offer_Card_Minus from "../../components/Offer_Card/Offer_Card_Minus";
import { DataContext } from "../../DataProvider/DataProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Offers = () => {
  const { allData } = useContext(DataContext);
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();

const selectedProduct = allData[1].filter(obj1 => !allData[3]?.products.some(obj2 => obj1._id === obj2._id));


  console.log(selectedProduct)

  const onSubmit = (data) => {
    console.log(data);

    const info = {
      ...data,
      category: "offer",
      products: [],
    };

    axiosSecure.patch("/offers", info);
  };
  // console.log(...allData[3].products)
  // const handle_add_product=()=>{
  //   axiosSecure.patch('/offers',[...offer.products,item])

  // }
  // const handle_remove_product = () => {
  //   axiosSecure.patch("/offers", info);
  // };
  //   const durationInSeconds =
  //     days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
  //   console.log("Offer duration in seconds:", durationInSeconds);

  return (
    <section
      id="offers"
      className="min-h-screen w-full flex justify-between gap-5"
    >
      <div className="flex-1  overflow-hidden border-r">
        <h1 className="text-4xl font-bold text-center mt-10">Offers</h1>

        <div className="sticky top-0 left-0 bottom-0 p-5 bg-white  ">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold">Offer Title</span>
              </div>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="title"
                className="input input-bordered max-w-sm"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold">
                  Offer percentage
                </span>
              </div>
              <input
                type="number"
                min={0}
                max={100}
                {...register("percentage", { required: true })}
                placeholder="30% ..."
                className="input input-bordered w-[100px]"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold">Offer Duration</span>
              </div>
              <div className="flex justify-start items-center gap-5">
                <div className="">
                  <label htmlFor="days" className="text-xs mr-2">
                    Days:
                  </label>
                  <input
                    className="input input-bordered w-[60px]"
                    type="number"
                    id="days"
                    min={0}
                    max={30}
                    {...register("days", { required: true })}
                    placeholder="0"
                  />
                </div>
                <div className="">
                  <label htmlFor="hours" className="text-xs mr-2">
                    Hours:
                  </label>
                  <input
                    className="input input-bordered w-[60px]"
                    type="number"
                    id="hours"
                    min={0}
                    max={60}
                    {...register("hours", { required: true })}
                    placeholder="0"
                  />
                </div>
                <div className="">
                  <label htmlFor="minutes" className="text-xs mr-2">
                    Minutes:
                  </label>
                  <input
                    className="input input-bordered w-[60px]"
                    type="number"
                    id="minutes"
                    min={0}
                    max={60}
                    {...register("minutes", { required: true })}
                    placeholder="0"
                  />
                </div>
                <div className="">
                  <label htmlFor="seconds" className="text-xs mr-2">
                    Seconds:
                  </label>
                  <input
                    className="input input-bordered w-[60px]"
                    type="number"
                    min={0}
                    max={60}
                    id="seconds"
                    {...register("seconds", { required: true })}
                    placeholder="0"
                  />
                </div>
              </div>
              <button type="submit" className="btn mt-5">
                Set
              </button>
            </label>
          </form>
          <div className="mt-3">
            <h3 className="text-xl font-semibold">Selected Product</h3>
            <div className="overflow-y-auto h-[38vh] shadow-inner p-3 rounded-md mt-2">
              <div className="grid grid-cols-1 my-10 sm:grid-cols-2  gap-5 ">
                {allData[3]?.products?.map((product) => (
                  <Offer_Card_Minus key={product._id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="    ">
        <div className="p-5">
          <div className="flex justify-between">
            <div className=""></div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text mr-2">Enable Offers</span>
                <input type="checkbox" className="toggle" checked />
              </label>
            </div>
          </div>
          <h3 className="text-xl font-semibold">Select Product</h3>
          <div className="overflow-y-auto h-[80vh] shadow-inner p-3 rounded-md mt-2">
            <div className="grid grid-cols-1 my-10 sm:grid-cols-2 lg:grid-cols-3  gap-5 ">
              {selectedProduct?.map((product) => (
                <Offer_Card key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;

// <section id="offers" className="min-h-screen w-full">
//   <h1 className="text-4xl font-bold text-center ">Offers</h1>
//   <div className="flex justify-between items-center gap-5">
//     <div className="flex-1 ">
//       <div className="sticky top-0 left-0 bottom-0">
//         <form onSubmit={handleSubmit} className="">
//           <label className="form-control w-full ">
//             <div className="label">
//               <span className="label-text font-semibold">
//                 Offer percentage
//               </span>
//             </div>
//             <input
//               type="number"
//               placeholder="example: 30% ...."
//               className="input input-bordered w-[60px]"
//             />
//           </label>
//           <label className="form-control w-full ">
//             <div className="label">
//               <span className="label-text font-semibold">
//                 Offer Duration
//               </span>
//             </div>
//             <div className="flex justify-start items-center gap-5">
//               <div className="">
//                 <label htmlFor="days" className="text-xs">
//                   Days:
//                 </label>
//                 <input
//                   className="input input-bordered w-[60px]"
//                   type="number"
//                   id="days"
//                   value={days}
//                   onChange={handleDaysChange}
//                   placeholder="0"
//                 />
//               </div>
//               <div className="">
//                 <label htmlFor="hours" className="text-xs">
//                   Hours:
//                 </label>
//                 <input
//                   className="input input-bordered w-[60px]"
//                   type="number"
//                   id="hours"
//                   value={hours}
//                   onChange={handleHoursChange}
//                   placeholder="0"
//                 />
//               </div>
//               <div className="">
//                 <label htmlFor="minutes" className="text-xs">
//                   Minutes:
//                 </label>
//                 <input
//                   className="input input-bordered w-[60px]"
//                   type="number"
//                   id="minutes"
//                   value={minutes}
//                   onChange={handleMinutesChange}
//                   placeholder="0"
//                 />
//               </div>
//               <div className="">
//                 <label htmlFor="seconds" className="text-xs">
//                   Seconds:
//                 </label>
//                 <input
//                   className="input input-bordered w-[60px]"
//                   type="number"
//                   id="seconds"
//                   value={seconds}
//                   onChange={handleSecondsChange}
//                   placeholder="0"
//                 />
//               </div>
//             </div>
//             <button type="submit" className="btn mt-5">
//               Set
//             </button>
//           </label>
//         </form>
//       </div>
//     </div>
//     <div className="flex-1 ">
//       <div className="">
//         <div className="flex justify-between">
//           <div className=""></div>
//           <div className="form-control">
//             <label className="label cursor-pointer">
//               <span className="label-text mr-2">Enable Offers</span>
//               <input type="checkbox" className="toggle" checked />
//             </label>
//           </div>
//         </div>
//         <h3 className="text-xl font-semibold">Select Product</h3>
//         <div className="grid grid-cols-1 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
//           {products?.map((product) => (
//             <Admin_Product_Card key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
