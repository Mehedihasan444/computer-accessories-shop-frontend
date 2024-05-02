import { FaBox } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
const Features = () => {
    return (
        <div className="flex gap-5 justify-center items-center my-10" >
            <div className="flex gap-5 justify-between items-center">
                <div className="text-5xl text-red-500">
<FaBox/>
                </div>
                <div className="">
                    <h3 className="font-semibold text-xl">International Shipment</h3>
                    <p className="text-sm">Dynar trefår decist semir. Lirad alkobom viktigt. Kabågon viren. Pimpa sperovis.</p>
                </div>
            </div>
            <div className="flex gap-5 justify-between items-center">
                <div className="text-6xl text-red-500">
<GiReturnArrow/>
                </div>
                <div className="">
                    <h3 className="font-semibold text-xl">Extended 30 day returns</h3>
                    <p className="text-sm">Dynar trefår decist semir. Lirad alkobom viktigt. Kabågon viren. Pimpa sperovis.</p>
                </div>
            </div>
            <div className="flex gap-5 justify-between items-center">
                <div className="text-6xl text-red-500">
<RiSecurePaymentFill/>
                </div>
                <div className="">
                    <h3 className="font-semibold text-xl">Secure Payment</h3>
                    <p className="text-sm">Dynar trefår decist semir. Lirad alkobom viktigt. Kabågon viren. Pimpa sperovis.</p>
                </div>
            </div>
            <div className="flex gap-5 justify-between items-center">
                <div className="text-6xl text-red-500">
<TbTruckDelivery/>
                </div>
                <div className="">
                    <h3 className="font-semibold text-xl">FREE DELIVERY</h3>
                    <p className="text-sm">Dynar trefår decist semir. Lirad alkobom viktigt. Kabågon viren. Pimpa sperovis.</p>
                </div>
            </div>
            <div className="flex gap-5 justify-between items-center">
                <div className="text-6xl text-red-500">
<BiSupport/>
                </div>
                <div className="">
                    <h3 className="font-semibold text-xl">
SUPPORT 24/7</h3>
                    <p className="text-sm">Dynar trefår decist semir. Lirad alkobom viktigt. Kabågon viren. Pimpa sperovis.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;