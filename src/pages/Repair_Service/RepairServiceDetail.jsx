import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import repair from '../../assets/repair-srvice/repair.jpg'
import star from '../../assets/repair-srvice/star-shape.png'
import { useContext, useState } from 'react';
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useParams } from 'react-router-dom';
import { FcAddImage } from "react-icons/fc";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import AiChatBot from './AiCahatBot';
const RepairServiceDetail = () => {
    const [booking, setBooking] = useState(new Date())
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const { category } = useParams()
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [description, setDescription] = useState("");
    const [activeTab, setActiveTab] = useState(1)
    const [messageQueue, setMessageQueue] = useState([]);

    const addToQueue = (message) => {
        setMessageQueue(prev => [...prev, message]);
    };

    const removeFromQueue = () => {
        if (messageQueue.length > 0) {
            const [firstMessage, ...rest] = messageQueue;
            setMessageQueue(rest);
            return firstMessage;
        }
        return null;
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Generate Description
    const handleGenerateDescription = async () => {
        const formData = new FormData();
        const data = {
            prompt: "Describe the image in the best way possible"
        }
        if (!selectedFile) {
            return toast.error("Please select an image first");
        }
        formData.append("data", JSON.stringify(data));
        formData.append('image', selectedFile);
        const res = await axiosPublic.post(`/image-description`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        setDescription(res.data);
    }
    // ai chat
    const handleAiChat = async (e) => {
        e.preventDefault();
        const data = {
            prompt: e.currentTarget.prompt.value
        }
        const res = await axiosPublic.post(`/ai-chat`, data);
        addToQueue(res.data);

        // setDescription(res.data);
    }
    const handelSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const user_name = form.get('name');
        const email = form.get('email');
        const phone = form.get('phone');
        const device_type = form.get('type');
        const booking_date = form.get('bookingDate');
        const description = form.get('description');

        const Appointment = { user_name, email, phone, device_type, booking_date, description }
        const productInfo = await axiosPublic.post("/appointments", Appointment);
        if (productInfo?.data?.insertedId) {
            toast.success("appointment Successfully added!!!");
        } else {
            toast.error("Something went wrong");
        }
    }
    return (
        <section className='mt-10'>
            <div className='h-[60vh]'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div className='mt-40'>
                        <SwiperSlide ><img src="https://i.ibb.co/G7bBtZq/service-2.webp" alt="" /></SwiperSlide>
                        <SwiperSlide ><img src="https://i.ibb.co/gyWkJwJ/service-1.webp" alt="" /></SwiperSlide>
                        <SwiperSlide ><img src="https://i.ibb.co/s2ycqdG/service-3.webp" alt="" /></SwiperSlide>
                    </div>
                </Swiper>
            </div>
            <div>
                <div>
                    <h1 className='text-3xl md:text-4xl font-bold my-5'>Description:</h1>
                    <p className='px-10 text-justify'>
                        <span className='font-bold mb-5'>Screen Repair/Replacement:</span>
                        Address issues like cracks, display problems, or damage by replacing the screen.
                        <span className='font-bold mb-5'> Keyboard and Trackpad Repair:</span>
                        Fix unresponsive keys or trackpad problems, ensuring smooth functionality.
                        <span className='font-bold mb-5'> Battery Replacement:</span>
                        Restore battery life by replacing old or malfunctioning batteries.
                        <span className='font-bold mb-5'> Data Recovery:</span>
                        Retrieve lost data due to hard drive failure or accidental deletion.
                        <span className='font-bold mb-5'> Charging Port Repair:</span>
                        Repair faulty charging ports or MagSafe connectors for proper charging.
                        <span className='font-bold mb-5'> RAM (Memory) Upgrade/Replacement:</span>
                        Enhance performance by upgrading or replacing RAM modules.
                        <span className='font-bold mb-5'>Hard Drive/SSD Replacement or Upgrade:</span>
                        Improve storage capacity and speed by replacing or upgrading hard drives or SSDs.
                        <span className='font-bold mb-5'>Logic Board Repair:</span>
                        Address issues with integrated components, GPU problems, or logic board malfunctions.
                        <span className='font-bold mb-5'> Software Issues and OS Installation:</span>
                        Resolve software problems, reinstall macOS, and troubleshoot application issues.
                        <span className='font-bold mb-5'>Fan and Cooling System Repair:</span>
                        Prevent overheating by cleaning or replacing internal fans and the cooling system.
                        <span className='font-bold mb-5'> Speaker and Audio Jack Repair:</span>
                        Fix distorted sound or audio issues by repairing or replacing speakers or audio jacks.
                    </p>
                </div>
                <div role="tablist" className="tabs tabs-lifted tabs-lg bg-white mt-10 ">
                    <a role="tab" className={`tab ${activeTab == 1 ? 'tab-active' : ""} w-full flex-1`} onClick={() => setActiveTab(1)}>Book a Schedule</a>
                    <div className="tab-content">

                        <div className='flex gap-5 justify-center items-center mt-20'>
                            <img className='w-16 animate-spin' src={star} alt="" />
                            <h2 className='text-3xl'>Book a Schedule</h2>
                            <img className='w-16 animate-spin' src={star} alt="" />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
                            <div className='flex justify-center items-center mx-5 md:mx-0'>
                                <img src={repair} alt="" />
                            </div>
                            <div className='flex justify-center items-center px-5'>
                                <section className="bg-white ">
                                    <div className="">
                                        <namem action="#">
                                            <form className='' onSubmit={handelSubmit}>
                                                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 sm:gap-6">
                                                    <div className="w-full">
                                                        <label name="name" className="block mb-2 text-sm font-medium text-black">Name</label>
                                                        <input required type="text" name="name" id="name" className="input input-bordered input-accent w-full bg-transparent" placeholder="your name" />
                                                    </div>
                                                    <div className="w-full">
                                                        <label name="email" className="block mb-2 text-sm font-medium text-black">Email</label>
                                                        <input readOnly value={user?.email} type="text" name="email" id="email" className="input input-bordered input-accent w-full bg-transparent" placeholder="email..." />
                                                    </div>
                                                    <div className="w-full">
                                                        <label name="phone" className="block mb-2 text-sm font-medium text-black">Phone</label>
                                                        <input required type="number" name="phone" id="phone" className="input input-bordered input-accent w-full bg-transparent" placeholder="phone" />
                                                    </div>
                                                    <div>
                                                        <label name="type" className="block mb-2 text-sm font-medium text-black">Laptop/Phone/Tablet</label>
                                                        <select name="type" className="input input-bordered input-accent w-full bg-transparent">
                                                            <option selected="">Select a Category</option>
                                                            <option value="Laptop">Laptop</option>
                                                            <option value="Smart Phone">Smart Phone</option>
                                                            <option value="Tablet">Tablet</option>
                                                            {/* <option value="Hybrid">Hybrid</option> */}
                                                        </select>
                                                    </div>
                                                    <div className="flex gap-5 w-full col-span-2">
                                                        <div className="w-full mb-6">
                                                            <label className='block mb-2 text-sm font-medium text-black'>Select An Image</label>

                                                            {!selectedImage && <label htmlFor="image" className='border rounded-lg  input-accent  h-full w-full  flex items-center justify-center bg-transparent cursor-pointer'>
                                                                <FcAddImage className='text-6xl' />
                                                                <span className='text-accent'>

                                                                    Upload Image
                                                                </span>

                                                            </label>}
                                                            {selectedImage && <label htmlFor="image" className='border rounded-lg  input-accent  h-full w-full  flex items-center justify-center bg-transparent cursor-pointer '>

                                                                {selectedImage && (
                                                                    <div className="mt-4">
                                                                        <img src={selectedImage} alt="Selected" className="w-full h-20" />
                                                                    </div>
                                                                )}
                                                            </label>}
                                                            <input type="file" id='image' name='image' accept='image/*' className='hidden' onChange={handleImageChange} />

                                                        </div>
                                                        <div className="w-full">

                                                            <div className="w-full">
                                                                <label name="bookingDate" className="block mb-2 text-sm font-medium text-black ">Booking date</label>
                                                                <DatePicker className='input input-bordered input-accent w-full bg-transparent' name="bookingDate" selected={booking} onChange={(date) => setBooking(date)} />
                                                            </div>
                                                            <div className="w-full">
                                                                <label name="category" className="block mb-2 text-sm font-medium text-black ">Category</label>
                                                                <input type="text" readOnly placeholder='Category' value={category} className="input input-bordered input-accent w-full bg-transparent max-w-sm" />
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="sm:col-span-2 relative w-full">

                                                        <div className="absolute right-2 bottom-3">
                                                            <button onClick={handleGenerateDescription} type="button" className="btn-sm bg-[#1CA774]     text-xs  text-white  rounded-lg ">
                                                                AI
                                                            </button>
                                                        </div>
                                                        <label name="description" className="block mb-2 text-sm font-medium text-black">Description</label>
                                                        <textarea defaultValue={description} name='description' id="description" rows="12" className="input input-bordered input-accent w-full bg-transparent h-32" placeholder="Your description here"></textarea>
                                                    </div>
                                                </div>
                                                <button type="submit" className="bg-[#1CA774] inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                                    Book a Appointment
                                                </button>
                                            </form>
                                        </namem>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    {/* ai chat tab */}
                    <a role="tab" className={`tab ${activeTab != 1 ? 'tab-active' : ""} w-full flex-1`} onClick={() => setActiveTab(2)}>Ai Chat</a>
                    <div className="tab-content min-h-screen">

                    <AiChatBot />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RepairServiceDetail;