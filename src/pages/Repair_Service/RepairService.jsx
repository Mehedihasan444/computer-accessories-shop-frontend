import Count_Up from "../../Utilities/Count_Up/Count_Up";
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { FiPrinter } from "react-icons/fi";
import { MdOutlineSmartphone } from "react-icons/md";
import { TbDeviceTabletCog } from "react-icons/tb";
import { LuHardDriveUpload } from "react-icons/lu";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineGppGood } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import Quotes_Slider from "../../components/Quotes_Slider/Quotes_Slider";
import { Link } from "react-router-dom";
const RepairService = () => {
    return (
        <section>
            <div>
                <div
                    className="bg-fixed rounded-md lg:mt-10"
                    style={{
                        backgroundImage: `url("https://i.ibb.co/MMGKfR3/upperbanner.jpg")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className=" bg-[#000000d0]  rounded-md">
                        <div className="text-center max-w-4xl mx-auto space-y-3 text-white p-10">
                            <p className="">HOME {'>'} SERVICES</p>
                            <h1 className="text-5xl font-bold">
                                We Help Everyone By our <br /> Amazing Service
                            </h1>
                            <div className="flex justify-center gap-20 items-center pt-5">
                                <div className="">
                                    <h1 className="text-6xl font-extrabold">
                                        <Count_Up value={12} />
                                    </h1>
                                    <p className="text-center font-semibold">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <h1 className="text-center font-bold text-4xl">OUR SERVICES</h1>
                <div className="flex justify-center items-center my-2 "><hr className="w-[50px] border-2 border-[#00BFA5]" /></div>
                <p className="text-center mt-2">Overcome faithful endless salvation enlightenment salvation overcome pious merciful <br /> ascetic madness holiest joy passion zarathustra.</p>
                <div className="grid grid-cols-3 gap-5 mt-10">
                    <Link to={`/repair-services-details/${'Laptop Repair'}`}>
                        <div className="space-y-3 hover:shadow-lg rounded-lg hover:cursor-pointer hover:scale-105 hover:transition hover:duration-500 hover:bg-slate-50">
                            <div className="hover:text-warning flex flex-col justify-center items-center pt-5">
                                <FaLaptopCode className="text-6xl mb-3" />
                                <h3 className="text-3xl font-bold">Laptop Repair</h3>
                            </div>
                            <p className="text-justify px-10 pb-5">Our technicians are highly skilled and stay up-to-date with the latest technologies to provide you with the best solutions.</p>
                        </div>
                    </Link>
                    <Link to={`/repair-services-details/${'Desktop Repair'}`}>
                        <div className="space-y-3 hover:shadow-lg rounded-lg hover:cursor-pointer hover:scale-105 hover:transition hover:duration-500 hover:bg-slate-50">
                            <div className="hover:text-warning flex flex-col justify-center items-center pt-5">
                                <TbDeviceDesktopCog className="text-6xl mb-3" />
                                <h3 className="text-3xl font-bold">Desktop Repair</h3>
                            </div>
                            <p className="text-justify px-10 pb-5">Our technicians are highly skilled and stay up-to-date with the latest technologies to provide you with the best solutions.</p>
                        </div>
                    </Link>
                    <Link to={`/repair-services-details/${'Printer Repair'}`}>
                        <div className="space-y-3 hover:shadow-lg rounded-lg hover:cursor-pointer hover:scale-105 hover:transition hover:duration-500 hover:bg-slate-50">
                            <div className="hover:text-warning flex flex-col justify-center items-center pt-5">
                                <FiPrinter className="text-6xl mb-3" />
                                <h3 className="text-3xl font-bold">Printer Repair</h3>
                            </div>
                            <p className="text-justify px-10 pb-5">Our technicians are highly skilled and stay up-to-date with the latest technologies to provide you with the best solutions.</p>
                        </div>
                    </Link>
                    <Link to={`/repair-services-details/${'Smartphone Repair'}`}>
                        <div className="space-y-3 hover:shadow-lg rounded-lg hover:cursor-pointer hover:scale-105 hover:transition hover:duration-500 hover:bg-slate-50">
                            <div className="hover:text-warning flex flex-col justify-center items-center pt-5">
                                <MdOutlineSmartphone className="text-6xl mb-3" />
                                <h3 className="text-3xl font-bold">Smartphone Repair</h3>
                            </div>
                            <p className="text-justify px-10 pb-5">Our technicians are highly skilled and stay up-to-date with the latest technologies to provide you with the best solutions.</p>
                        </div>
                    </Link>
                    <Link to={`/repair-services-details/${'Data Recovery'}`}>
                        <div className="space-y-3 hover:shadow-lg rounded-lg hover:cursor-pointer hover:scale-105 hover:transition hover:duration-500 hover:bg-slate-50">
                            <div className="hover:text-warning flex flex-col justify-center items-center pt-5">
                                <LuHardDriveUpload className="text-6xl mb-3" />
                                <h3 className="text-3xl font-bold">Data Recovery</h3>
                            </div>
                            <p className="text-justify px-10 pb-5">Our technicians are highly skilled and stay up-to-date with the latest technologies to provide you with the best solutions.</p>
                        </div>
                    </Link>
                    <Link to={`/repair-services-details/${'Tablet Repair'}`}>
                        <div className="space-y-3 hover:shadow-lg rounded-lg hover:cursor-pointer hover:scale-105 hover:transition hover:duration-500 hover:bg-slate-50">
                            <div className="hover:text-warning flex flex-col justify-center items-center pt-5">
                                <TbDeviceTabletCog className="text-6xl mb-3" />
                                <h3 className="text-3xl font-bold">Tablet Repair</h3>
                            </div>
                            <p className="text-justify px-10 pb-5">Our technicians are highly skilled and stay up-to-date with the latest technologies to provide you with the best solutions.</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="mt-20 grid grid-cols-4 bg-[#152F45] text-white ">
                <div className="space-y-3 flex flex-col justify-center items-center px-5 py-10">
                    <AiOutlineFieldTime className="text-6xl" />
                    <h2 className="text-2xl font-semibold">FAST <span className="text-[#00BFA5]">SERVICE</span></h2>
                    <p className="text-center">Diagnose and repair problems caused by liquid spills for proper functionality.
                        Always rely on authorized Apple technicians.</p>
                </div>
                <div className="space-y-3 flex flex-col justify-center items-center px-5 py-10">
                    <MdOutlineGppGood className="text-6xl" />
                    <h2 className="text-2xl font-semibold">HIGHEST <span className="text-[#00BFA5]">QUALITY PARTS</span></h2>
                    <p className="text-center">Diagnose and repair problems caused by liquid spills for proper functionality.
                        Always rely on authorized Apple technicians.</p>
                </div>
                <div className="space-y-3 flex flex-col justify-center items-center px-5 py-10">
                    <MdAttachMoney className="text-6xl" />
                    <h2 className="text-2xl font-semibold">ONE YEAR <span className="text-[#00BFA5]">WARRANTY</span></h2>
                    <p className="text-center">Diagnose and repair problems caused by liquid spills for proper functionality.
                        Always rely on authorized Apple technicians.</p>
                </div>
                <div className="space-y-3 flex flex-col justify-center items-center px-5 py-10">
                    <GrUserExpert className="text-6xl" />
                    <h2 className="text-2xl font-semibold">EXPERT <span className="text-[#00BFA5]">TECHNICIANS</span></h2>
                    <p className="text-center">Diagnose and repair problems caused by liquid spills for proper functionality.
                        Always rely on authorized Apple technicians.</p>
                </div>
            </div>
            <div className="mt-20">
                <h1 className="text-center font-bold text-4xl">WHAT OUR CUSTOMERS SAID</h1>
                <div className="flex justify-center items-center my-2 "><hr className="w-[50px] border-2 border-[#00BFA5]" /></div>
                <p className="text-center">Overcome faithful endless salvation enlightenment salvation overcome pious merciful <br />
                    ascetic madness holiest joy passion zarathustra suicide overcome snare.</p>
                <div className="my-20 bg-slate-400 p-5">
                    <Quotes_Slider />
                </div>
            </div>
        </section>
    );
};

export default RepairService;