
import Countdown from 'react-countdown';

const Count_Down = ({ days, hours, minutes, seconds }) => {
    const Completionist = () => <span>Time out</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                
                    <div className="flex items-center ">
                        <div className="grid grid-cols-4 gap-1\ my-2 h-[35px] gap-3">
                            <div className=" rounded-2xl bg-blue-200 p-3   text-center  ">
                                <span className=" text-[#EF233C] font-extrabold text-2xl">{days}</span>
                                <span className="block text-xs font-semibold  ">Days</span>
                            </div>
                            <div className="  text-center   rounded-2xl bg-blue-200 p-3  ">
                                <span className="text-2xl font-extrabold  text-[#EF233C] ">{hours}</span>
                                <span className="block text-xs font-semibold  ">Hours</span>
                            </div>
                            <div className="  text-center   rounded-2xl bg-blue-200 p-3  ">
                                <span className="text-2xl font-extrabold text-[#EF233C] ">{minutes}</span>
                                <span className="block text-xs font-semibold  ">Minutes</span>
                            </div>
                            <div className="  text-center   rounded-2xl bg-blue-200 p-3  ">
                                <span className="text-2xl font-extrabold text-[#EF233C] ">{seconds}</span>
                                <span className="block text-xs font-semibold  ">Seconds</span>
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

export default Count_Down;
