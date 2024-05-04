import Offer_Countdown from "../../Utilities/Offer_Countdown/Offer_Countdown";
import Marquee from "react-fast-marquee";

const Top_Header = () => {
    return (
        <div className="grid grid-cols-3 justify-between items-center">
            <div className="grid col-span-3 sm:col-span-2">
                <Marquee>
                    <div className="flex-1 flex items-center p-3">
                        <h3 className="text-xs font-semibold text-red-600">May Edition Black Friday! 35% off Spare Parts.</h3>
                        <div className="divider divider-horizontal"></div>
                        <h3 className="text-xs font-semibold text-red-600">Free carbon neutral shipping on US orders $50+.</h3>
                        <div className="divider divider-horizontal"></div>
                        <h3 className="text-xs font-semibold text-red-600">Summer sale is on, save over $100.</h3>
                        <div className="divider divider-horizontal"></div>
                    </div>
                </Marquee>
            </div>
            <div className="flex-1 sm:flex justify-end gap-2 items-center hidden ">
                <div className="">

                    <h3 className="font-bold">End Of time:
                    </h3>
                </div>
                <div className="">

                    <Offer_Countdown days={3} hours={2} minutes={35} seconds={44} />
                </div>
            </div>
        </div>
    );
};

export default Top_Header;