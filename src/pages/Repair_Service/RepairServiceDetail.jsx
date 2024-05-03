import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import repair from '../../assets/repair-srvice/repair.jpg'
import star from '../../assets/repair-srvice/star-shape.png'
import { useState } from 'react';
const RepairServiceDetail = () => {
    const [booking, setBooking] = useState(new Date())
    const handelSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const user_name = form.get('name');
        const email = form.get('email');
        const phone = form.get('phone');
        const device_type = form.get('type');
        const booking_date = form.get('bookingDate');
        const description = form.get('description');

        const Appointment={user_name,email,phone,device_type,booking_date,description}
        
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
                    <h1 className='text-4xl font-bold my-5'>Description:</h1>
                    <p>
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
                <div className='flex gap-5 justify-center items-center mt-20'>
                    <img className='w-16 animate-spin' src={star} alt="" />
                    <h2 className='text-3xl'>Book a Shedule</h2>
                    <img className='w-16 animate-spin' src={star} alt="" />
                </div>
                <div className='flex gap-5 mt-5'>
                    <div className='flex justify-center items-center'>
                        <img src={repair} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <section className="bg-white ">
                            <div className=" px-4 mx-auto">
                                <namem action="#">
                                    <form onSubmit={handelSubmit}>
                                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                            <div className="w-full">
                                                <label name="name" className="block mb-2 text-sm font-medium text-black">Name</label>
                                                <input type="text" name="name" id="name" className="input input-bordered input-accent w-full bg-transparent" placeholder="your name" required="" />
                                            </div>
                                            <div className="w-full">
                                                <label name="email" className="block mb-2 text-sm font-medium text-black">Email</label>
                                                <input type="text" name="email" id="email" className="input input-bordered input-accent w-full bg-transparent" placeholder="email..." required="" />
                                            </div>
                                            <div className="w-full">
                                                <label name="phone" className="block mb-2 text-sm font-medium text-black">Phone</label>
                                                <input type="number" name="phone" id="phone" className="input input-bordered input-accent w-full bg-transparent" placeholder="phone" required="" />
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
                                            <div className="w-96">
                                                <label name="bookingDate" className="block mb-2 text-sm font-medium text-black ">Booking date</label>
                                                <DatePicker className='input input-bordered input-accent w-full bg-transparent' name="bookingDate" selected={booking} onChange={(date) => setBooking(date)} />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label name="description" className="block mb-2 text-sm font-medium text-black">Description</label>
                                                <textarea name='description' id="description" rows="8" className="input input-bordered input-accent w-full bg-transparent h-24" placeholder="Your description here"></textarea>
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
        </section>
    );
};

export default RepairServiceDetail;