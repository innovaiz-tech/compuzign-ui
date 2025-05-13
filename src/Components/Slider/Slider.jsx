import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';

import Slider1 from '../../assets/slider1.png';
import Slider2 from '../../assets/slider2.png';
import Slider3 from '../../assets/slider3.png';
import Slider4 from '../../assets/slider4.png';
import Slider5 from '../../assets/slider5.png';

export default function SwiperComponent() {
    return (
        <>
            <div className='flex flex-col bg-yellow-400'>
                <h3 className='text-black pt-10 text-center tracking-[.28em] uppercase mt-0 mb-0 px-5 text-xs font-semibold leading-[22px] no-underline'>Supporting Diverse Sectors</h3>
                <h2 className='text-black py-5 text-center mt-0 mb-0 pt-[5px] px-5 text-[40px] font-bold leading-[56px] no-underline'>Industries we focus</h2>
                <Swiper
                    slidesPerView={4}
                    slidesPerGroup={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,

                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={Slider1} className='my-10 w-[250px] h-[360px] ' alt="slider1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slider2} className='my-10 w-[250px] h-[360px] ' alt="slider2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slider3} className='my-10 w-[250px] h-[360px] ' alt="slider3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slider4} className='my-10 w-[250px] h-[360px] ' alt="slider4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slider5} className='my-10 w-[250px] h-[360px] ' alt="slider5" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slider5} className='my-10 w-[250px] h-[360px] ' alt="slider6" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
