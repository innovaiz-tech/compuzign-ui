import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function SwiperComponent({ slideContent }) {
    console.log(slideContent.imageWidth)
    const breakpoints = slideContent.breakPoints.reduce((acc, item) => {
        return {
            ...acc,
            [item.screen]: {
                slidesPerView: item.slidesPerView,
                spaceBetween: item.spaceBetween
            }
        };
    }, {});

    return (
        <>
            <div className='flex flex-col bg-yellow-400'>
                <h3 className='text-black pt-10 text-center tracking-[.28em] uppercase mt-0 mb-0 px-5 text-xs font-semibold leading-[22px] no-underline'>{slideContent.heading1}</h3>
                <h2 className='text-black py-5 text-center mt-0 mb-0 pt-[5px] px-5 text-[40px] font-bold leading-[56px] no-underline'>{slideContent.heading2}</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={breakpoints}

                    className="mySwiper"
                >
                    {slideContent.bodyContent.length === 0 ?
                        slideContent.imageContainer.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} className={`my-10 w-[${slideContent.imageWidth}] h-[${slideContent.imageHeight}]`} alt={`slider${index + 1}`} />
                            </SwiperSlide>
                        )) : (
                            slideContent.bodyContent.map((i, index) => (
                                <SwiperSlide key={index}>
                                    <div className='text-left [background-color:#fff] [background-clip:border-box] rounded-[15px] w-auto h-auto pb-0 mb-10'>
                                        <img src={i.image} className={`w-[250px] sm:w-[${slideContent.imageWidth}] h-[${slideContent.imageHeight}] rounded-t-[15px]`} alt={`slider${index + 1}`} />
                                        <div className={`w-[250px] sm:w-[${slideContent.imageWidth}] flex flex-col justify-start items-start py-[19px] px-[24px]`}>
                                            <div className='text-[#0f1032] mt-0 mb-0 text-xl font-semibold leading-[28px] no-underline'>
                                                {i.heading}
                                            </div>
                                            <Link to='#' className=' flex justify-start items-center text-[#1a1b1f] text-sm'>
                                                <div className='text-[#4f4f4f] mt-0 mb-0 pt-[15px] text-sm font-normal leading-[22px] no-underline'>
                                                    {/* {i.content} */}
                                                    At CompuZign, our dedicated technical support team provides comprehensive tech support services for your organization's network systems.
                                                </div>
                                            </Link>
                                            <button className="mt-10 bg-black px-8 py-2 text-white rounded-md">Know more</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                            ))
                    }

                </Swiper>
            </div>
        </>
    );
}
