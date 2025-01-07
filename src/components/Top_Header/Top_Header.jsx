import Marquee from "react-fast-marquee";

const Top_Header = () => {
    return (
        <div className="">
                <Marquee>
                    <div className="flex-1 flex items-center p-3">
                        <h3 className="text-xs font-semibold text-blue-600">May Edition Black Friday! 35% off Spare Parts.</h3>
                        <div className="divider divider-horizontal"></div>
                        <h3 className="text-xs font-semibold text-blue-600">Free carbon neutral shipping on US orders $50+.</h3>
                        <div className="divider divider-horizontal"></div>
                        <h3 className="text-xs font-semibold text-blue-600">Summer sale is on, save over $100.</h3>
                        <div className="divider divider-horizontal"></div>
                    </div>
                </Marquee>
          
        </div>
    );
};

export default Top_Header;