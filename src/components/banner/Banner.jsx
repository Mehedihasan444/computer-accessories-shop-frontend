import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BannerCard from './BannerCard';

const Banner = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/Banner.json')
            .then((response) => setData(response.data))
    }, [])
    // console.log(data);
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className='mt-40'>
                {
                    data?.map((banner) => <SwiperSlide key={banner.id} ><BannerCard banner={banner}/></SwiperSlide>)
                }
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;