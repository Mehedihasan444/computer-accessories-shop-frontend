import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";



const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center flex-wrap  items-center my-10 px-5">
     
      <div className="flex gap-5 justify-between items-center border p-5">
        <div className="text-6xl text-red-500">
          <GiReturnArrow />
        </div>
        <div className="">
          <h3 className="font-semibold text-xl">Returns Policy</h3>
          <p className="text-sm">
            Dynar trefår decist semir. Lirad alkobom viktigt. Kabågon viren.
            Pimpa sperovis.
          </p>
        </div>
      </div>
      <div className="flex gap-5 justify-between items-center border p-5">
        <div className="text-6xl text-red-500">
          <RiSecurePaymentFill />
        </div>
        <div className="">
          <h3 className="font-semibold text-xl">Secure Payment</h3>
          <p className="text-sm">
            Dynar trefår decist semir. Lirad alkobom viktigt. Kabågon viren.
            Pimpa sperovis.
          </p>
        </div>
      </div>
      <div className="flex gap-5 justify-between items-center border p-5">
        <div className="text-6xl text-red-500">
          <TbTruckDelivery />
        </div>
        <div className="">
          <h3 className="font-semibold text-xl">FREE DELIVERY</h3>
          <p className="text-sm">
            Dynar trefår decist semir. Lirad alkobom viktigt. Kabågon viren.
            Pimpa sperovis.
          </p>
        </div>
      </div>
      <div className="flex gap-5 justify-between items-center border p-5">
        <div className="text-6xl text-red-500">
          <BiSupport />
        </div>
        <div className="">
          <h3 className="font-semibold text-xl">SUPPORT 24/7</h3>
          <p className="text-sm">
            Dynar trefår decist semir. Lirad alkobom viktigt. Kabågon viren.
            Pimpa sperovis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
