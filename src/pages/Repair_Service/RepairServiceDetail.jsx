import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const RepairServiceDetail = () => {
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
                        <SwiperSlide ><img src="https://i.ibb.co/gyWkJwJ/service-1.webp" alt="" /></SwiperSlide>
                        <SwiperSlide ><img src="https://i.ibb.co/G7bBtZq/service-2.webp" alt="" /></SwiperSlide>
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
                <div>

                </div>
            </div>
        </section>
    );
};

export default RepairServiceDetail;