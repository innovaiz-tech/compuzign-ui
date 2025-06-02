import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SwiperComponent({ slideContent }) {
    console.log(slideContent.imageWidth, slideContent.imageHeight);
    const breakpoints = slideContent.breakPoints.reduce((acc, item) => {
        return {
            ...acc,
            [item.screen]: {
                slidesPerView: item.slidesPerView,
                spaceBetween: item.spaceBetween
            }
        };
    }, {});
    
    // Animation variants for swiper slides
    const slideVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <>
            <div className='flex flex-col bg-secondary/70 backdrop-blur-sm text-text-light'>
                <h3 className='pt-10 text-center tracking-[.28em] uppercase mt-0 mb-0 px-5 text-xs font-semibold leading-[22px] no-underline'>{slideContent.heading1}</h3>
                <h2 className='py-5 text-center mt-0 mb-0 pt-[5px] px-5 text-[40px] font-bold leading-[56px] no-underline'>{slideContent.heading2}</h2>
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
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={slideVariants}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <img src={image} className={`my-10 w-[${slideContent.imageWidth}] h-[${slideContent.imageHeight}]`} alt={`slider${index + 1}`} />
                                </motion.div>
                            </SwiperSlide>
                        )) : (
                            slideContent.bodyContent.map((i, index) => (
                                <SwiperSlide key={index}>
                                    <div className='text-left [background-color:#fff] [background-clip:border-box] rounded-[15px] w-auto h-auto pb-0 mb-10'>
                                        <img src={i.image} className={`w-[250px] sm:w-[370px] h-[170px] rounded-t-[15px]`} alt={`slider${index + 1}`} />
                                        <div className={`w-[250px] h-[250px] bg-accent sm:w-[370px] flex flex-col justify-between items-start p-6 rounded-b-[15px]`}>
                                            <div>
                                                <div className='mt-0 mb-0 text-xl font-semibold leading-[28px] no-underline'>
                                                    {i.heading}
                                                </div>
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <Link to={i.linkUrl}>
                                                        <div className="flex justify-center items-center text-black bg-white rounded-md p-2 shadow-md transition-all duration-300">
                                                            <span>Read More</span>
                                                        </div>
                                                    </Link>
                                                </motion.div>
                                                <div className='mt-0 mb-0 pt-[15px] text-sm font-normal leading-[22px] no-underline'>
                                                    {i.content}
                                                </div>
                                            </div>
                                            <motion.button 
  className="bg-secondary hover:bg-secondary-hover cursor-pointer px-8 py-2 text-white rounded-md shadow-md transition-all duration-300 flex items-center justify-center"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
>
  Know more
</motion.button>
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
