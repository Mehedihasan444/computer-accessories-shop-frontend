
import Countdown from 'react-countdown';

const Offer_Countdown = ({ days, hours, minutes, seconds }) => {
    const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown with Tailwind CSS classes
            return (
                
                    <div className="flex items-center ">
                        <div className="grid grid-cols-4 gap-1\ my-2 h-[35px]">
                            <div className="    text-center  px-1">
                                <span className="text-xs text-[#EF233C] font-extrabold">{days}</span>
                                <span className="block text-xs">Days</span>
                            </div>
                            <div className="  text-center px-1">
                                <span className="text-xs font-extrabold  text-[#EF233C] ">{hours}</span>
                                <span className="block text-xs">Hours</span>
                            </div>
                            <div className="  text-center px-1">
                                <span className="text-xs font-extrabold text-[#EF233C] ">{minutes}</span>
                                <span className="block text-xs">Minutes</span>
                            </div>
                            <div className="  text-center px-1">
                                <span className="text-xs font-extrabold text-[#EF233C] ">{seconds}</span>
                                <span className="block text-xs">Seconds</span>
                            </div>
                        </div>
                    </div>


                
            );
        }
    };

    return (
        <div>
            <Countdown
                date={Date.now() + days * 24 * 60 * 60 * 1000 + hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000}
                intervalDelay={1}
                precision={3}
                renderer={renderer}
            />
        </div>
    );
};

export default Offer_Countdown;
