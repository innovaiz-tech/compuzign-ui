import * as React from "react";
import { Tabs } from "radix-ui";
import "./styles.css";
import AboutUsBanner from "../../assets/about-us-banner.png";
import TechnicalSupportBanner from "../../assets/technical-support-banner.png";
import SwiperComponent from "../Slider/Slider";
import { motion, AnimatePresence } from "framer-motion";

import Slider1 from '../../assets/slider1.png';
import Slider2 from '../../assets/slider2.png';
import Slider3 from '../../assets/slider3.png';
import Slider4 from '../../assets/slider4.png';
import Slider5 from '../../assets/slider5.png';

// Import icons from React Icons instead of PNG files
import { FaUserShield, FaLightbulb, FaBuilding, FaUsers, FaRocket, FaChartLine } from 'react-icons/fa';

import MigrationAsAService from '../../assets/migration-as-a-service.png';
import SupportAsAService from '../../assets/support-as-a-service.png';
import CloudAndInfrastructure from '../../assets/cloud-and-infrastructure.png';
import { Link } from "react-router-dom";


const TabsContainer = () => {
    const industries = {
        slidesPerView: 4,
        heading1: 'Supporting Diverse Sectors',
        heading2: 'Industries we focus',
        imageWidth: '250px',
        imageHeight: '360px',
        imageContainer: [Slider1, Slider2, Slider3, Slider4, Slider5],
        bodyContent: [],
        breakPoints: [
            { screen: 640, slidesPerView: 2, spaceBetween: 10 },
            { screen: 768, slidesPerView: 3, spaceBetween: 20 },
            { screen: 1024, slidesPerView: 4, spaceBetween: 30 }
        ]
    }

    const services = {
        slidesPerView: 3,
        heading1: 'Explore our services',
        heading2: 'IT Support Services',
        imageContainer: [MigrationAsAService, SupportAsAService, CloudAndInfrastructure],
        bodyContent: [
            {
                heading: 'Support as a Service',
                content: "At CompuZign, our dedicated technical support team provides comprehensive tech support services for your organization's network systems.",
                href: '#',
                image: SupportAsAService,
            },
            {
                heading: 'Migration As A Service',
                content: "Skilled engineers are fully dedicated to support specific product or specific duration. Our MaaS is perfect for companies with changing demands.",
                href: '#',
                image: MigrationAsAService,
            },
            {
                heading: 'Cloud and Infrastructure',
                content: "Our cyber security experts monitor each element of your infrastructure, assess its current health, including potential and existing threats, and responds to threats. Know More",
                href: '#',
                image: CloudAndInfrastructure
            },
        ],
        breakPoints: [
            { screen: 640, slidesPerView: 1, spaceBetween: 10 },
            { screen: 867, slidesPerView: 2, spaceBetween: 20 },
            { screen: 1224, slidesPerView: 3, spaceBetween: 30 }
        ]
    }

    const whoWeAre = {
        heading1: 'Expertise Across Industries',
        heading2: 'Understanding Industry Challenges is Key',
        bodyContent: [
            {
                icon: FaUserShield,
                title: 'Customer First',
                content: 'Success starts with you, our customers. We help envision your future.'
            },
            {
                icon: FaLightbulb,
                title: 'Industry Awareness',
                content: "Let's face it, tech moves fast. We at CCI are always on the edge with the latest and greatest."
            },
            {
                icon: FaBuilding,
                title: 'Enterprise',
                content: "With competition growing, it's more important than ever to bring higher levels of productivity & efficiency to business operations."
            },
            {
                icon: FaUsers,
                title: 'Customer First',
                content: 'Success starts with you, our customers. We help envision your future.'
            },
            {
                icon: FaRocket,
                title: 'Industry Awareness',
                content: "Let's face it, tech moves fast. We at CCI are always on the edge with the latest and greatest."
            },
            {
                icon: FaChartLine,
                title: 'Enterprise',
                content: "With competition growing, it's more important than ever to bring higher levels of productivity & efficiency to business operations."
            },
        ]
    }

    // Animation variants for consistent animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.2 
            } 
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="relative overflow-hidden w-full pt-0 mt-0 mb-20">
            <Tabs.Root className="TabsRoot bg-gradient-to-b from-[#392e53] to-[#392e5e] backdrop-blur-sm relative z-10 w-full mt-0 pt-0" defaultValue="tab2">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative bg-[#392e53] p-1 rounded-lg mb-0 w-full mx-auto"
                >
                    <Tabs.List className="TabsList w-full flex-wrap justify-center" aria-label="Manage your account">
                        <motion.div variants={itemVariants}>
                            <Tabs.Trigger className="TabsTrigger uppercase font-medium cursor-pointer px-4 py-2 rounded-md transition-all duration-300" value="tab1">
                                ABOUT US
                            </Tabs.Trigger>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Tabs.Trigger className="TabsTrigger uppercase font-medium cursor-pointer px-4 py-2 rounded-md transition-all duration-300" value="tab2">
                                OUR SERVICES
                            </Tabs.Trigger>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Tabs.Trigger className="TabsTrigger uppercase font-medium cursor-pointer px-4 py-2 rounded-md transition-all duration-300" value="tab3">
                                TECHNICAL SUPPORT
                            </Tabs.Trigger>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Tabs.Trigger className="TabsTrigger uppercase font-medium cursor-pointer px-4 py-2 rounded-md transition-all duration-300" value="tab4">
                                WHO WE ARE
                            </Tabs.Trigger>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Tabs.Trigger className="TabsTrigger uppercase font-medium cursor-pointer px-4 py-2 rounded-md transition-all duration-300" value="tab5">
                                INDUSTRIES
                            </Tabs.Trigger>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Tabs.Trigger className="TabsTrigger uppercase font-medium cursor-pointer px-4 py-2 rounded-md transition-all duration-300" value="tab6">
                                CLIENT TESTIMONIAL
                            </Tabs.Trigger>
                        </motion.div>
                    </Tabs.List>
                </motion.div>
                <AnimatePresence mode="wait">
                <Tabs.Content className="TabsContent" value="tab1" asChild>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                    <div className="bg-gradient-to-b from-[#392e53] to-[#392e5e] backdrop-blur-sm w-full">
                        <div className="flex flex-row flex-wrap justify-between w-full max-w-[1200px] mx-auto">
                            <motion.div 
                                className="w-full md:w-1/2 flex justify-center items-center p-6"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="relative">
                                    <div className="relative overflow-hidden rounded-xl shadow-xl">
                                        <img 
                                            className="w-full h-auto object-cover" 
                                            src={AboutUsBanner} 
                                            alt="about-us-banner" 
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="w-full flex flex-col gap-5 md:w-1/2 py-12 px-6 md:px-10 lg:pr-20"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <motion.div 
                                    className="inline-block bg-gradient-to-r from-primary/10 to-transparent px-4 py-2 rounded-full mb-2 backdrop-blur-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <p className="text-primary tracking-[.28em] uppercase mt-0 mb-0 text-xs font-semibold leading-[22px] no-underline">about us</p>
                                </motion.div>
                                
                                <motion.div 
                                    className="text-text-light text-left mt-0 mb-2 text-4xl font-bold leading-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    World Class Technical Support
                                </motion.div>
                                
                                <motion.div 
                                    className="flex flex-col gap-4 text-gray-700"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <div className="bg-primary/70 text-text-light backdrop-blur-sm p-4 rounded-lg shadow-sm border border-primary/10 hover:border-primary/30 hover:bg-primary transition-all duration-300">
                                        At
                                        <strong className="text-secondary">
                                            &nbsp;CompuZign
                                        </strong>
                                        , we believe in harnessing the power of technology to propel businesses forward.
                                        <strong className="text-secondary">
                                            &nbsp;"Innovation that drives success"
                                        </strong>
                                        is at the core of everything we do. We deliver cutting-edge IT solutions and world-class technical support that are tailored to meet the unique needs of your business.
                                    </div>
                                    <div className="bg-primary/70 hover:bg-primary text-text-light backdrop-blur-sm p-4 rounded-lg shadow-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                                        With a team of experienced professionals, we're committed to solving your technology challenges with precision and expertise. "Empowering your business with seamless technology." From scalable solutions to dependable support, we ensure your business thrives in a rapidly changing digital world.
                                    </div>
                                    <div className="bg-primary/70 hover:bg-primary text-text-light backdrop-blur-sm p-4 rounded-lg shadow-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                                        Our promise is simple: "Your success is our mission." At
                                        <strong className="text-secondary">
                                            &nbsp;CompuZign, we're not just a service provider—we're your trusted technology partner. Together, we turn potential into progress.
                                        </strong>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="mt-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link className="inline-block bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center" to='about-us'>
                                        Learn More About Us
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab2">
                    <div className="bg-gradient-to-b from-[#392e53] to-[#392e5e] backdrop-blur-sm w-full">
                        {/* Custom Service Cards */}
                        <div className="w-full max-w-[1200px] mx-auto py-10 px-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {services.bodyContent.map((service, index) => (
                                    <motion.div 
                                        key={index}
                                        className="service-card bg-primary/40 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-white/30 transition-all duration-500 group relative"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        whileHover={{ 
                                            y: -5,
                                            transition: { duration: 0.4, ease: "easeOut" },
                                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                                        <div className="relative overflow-hidden h-48">
                                            <motion.img 
                                                src={service.image} 
                                                alt={service.heading} 
                                                className="w-full h-full object-cover"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.5 }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-60"></div>
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <motion.div 
                                                    className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary text-xs font-bold tracking-wider uppercase"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    IT Services
                                                </motion.div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">{service.heading}</h3>
                                            <p className="text-gray-200 mb-4">{service.content}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    <Link to='/services' className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center">
                                        Explore All Services
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab3">
                    <div className="bg-gradient-to-b from-[#392e53] to-[#392e5e] backdrop-blur-sm w-full">
                        <div className="flex flex-row flex-wrap justify-between w-full max-w-[1200px] mx-auto">
                            <motion.div 
                                className="w-full md:w-1/2 flex justify-center items-center p-6"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-lg opacity-70"></div>
                                    <div className="relative overflow-hidden rounded-xl shadow-xl">
                                        <img 
                                            className="w-full h-auto object-cover" 
                                            src={TechnicalSupportBanner} 
                                            alt="tech-support-banner" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-transparent opacity-60"></div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="w-full flex flex-col gap-5 md:w-1/2 py-12 px-6 md:px-10 lg:pr-20"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <motion.div 
                                    className="inline-block bg-gradient-to-r from-primary/20 to-transparent px-4 py-2 rounded-full mb-2 backdrop-blur-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <p className="text-primary tracking-[.28em] uppercase mt-0 mb-0 text-xs font-semibold leading-[22px] no-underline">We're Here to Help</p>
                                </motion.div>
                                
                                <motion.div 
                                    className="text-white text-left mt-0 mb-2 text-4xl font-bold leading-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    Reach Out to Our Technical Support
                                </motion.div>
                                
                                <motion.div 
                                    className="flex flex-col gap-4 text-gray-200"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <div className="bg-primary/40 backdrop-blur-md p-4 rounded-lg shadow-sm border border-white/10 hover:border-white/30 transition-all duration-500 group relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                                        At
                                        <strong className="text-secondary group-hover:text-white transition-all duration-300">
                                            &nbsp;CompuZign
                                        </strong>
                                        , we understand that seamless technology is essential to your success. That's why we're committed to ensuring your systems run smoothly.
                                    </div>
                                    <div className="bg-primary/40 backdrop-blur-md p-4 rounded-lg shadow-sm border border-white/10 hover:border-white/30 transition-all duration-500 group relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                                        <strong className="text-secondary group-hover:text-white transition-all duration-300">
                                            Your technology, our priority
                                        </strong>
                                        {" "}- Our expert support team is always available to resolve issues, optimize your systems, and keep your business operating at its best.
                                    </div>
                                    <div className="bg-primary/40 backdrop-blur-md p-4 rounded-lg shadow-sm border border-white/10 hover:border-white/30 transition-all duration-500 group relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                                        Whether through remote support or on-site assistance, we deliver solutions tailored to meet your unique requirements.
                                        <strong className="block mt-2 text-secondary group-hover:text-white transition-all duration-300">
                                            Power up your business with systems that run flawlessly - let us handle the tech!
                                        </strong>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="mt-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link to='/support' className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center">
                                        Learn More About Support
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab4">
                    <div className="bg-gradient-to-b from-[#392e53] to-[#392e5e] backdrop-blur-sm w-full flex-grow flex flex-col">
                        <div className="max-w-[1200px] mx-auto py-10 px-6 w-full flex flex-wrap justify-center gap-5">
                            {whoWeAre.bodyContent.map((item, index) => (
                                <motion.div 
                                    key={`who-we-are-item-${index}`} 
                                    className="max-w-[360px] bg-primary/40 backdrop-blur-md p-5 rounded-lg shadow-md border border-white/10 transition-all duration-500 group hover:border-white/30"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ 
                                        y: -5, 
                                        transition: { duration: 0.4, ease: "easeOut" },
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                                    }}
                                >
                                    <div className="bg-secondary/20 text-white rounded-full p-3 inline-block mb-4 transition-all duration-500 group-hover:bg-secondary/40 group-hover:scale-110 group-hover:rotate-3">
                                        {React.createElement(item.icon, { className: "w-10 h-10 text-white transition-all duration-500 group-hover:text-secondary" })}
                                    </div>
                                    <h2 className="text-white mt-0 mb-3 text-xl font-semibold leading-tight transition-all duration-300 group-hover:text-secondary/90">{item.title}</h2>
                                    <div className="text-secondary text-sm leading-relaxed transition-all duration-300 group-hover:text-white">{item.content}</div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg -z-10"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab5">
                    <div className="bg-gradient-to-b from-[#392e53] to-[#392e5e] backdrop-blur-sm w-full flex-grow flex flex-col">
                        <div className="w-full max-w-[1200px] mx-auto py-10 px-6">
                            <SwiperComponent slideContent={industries} />
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab6">
                    <div className="bg-gradient-to-b from-[#392e53] to-[#392e5e] backdrop-blur-sm p-10">
                        <div className="max-w-[1200px] mx-auto">
                            <div className="text-center mb-10">
                                <motion.div 
                                    className="inline-block bg-gradient-to-r from-primary/20 to-transparent px-4 py-2 rounded-full mb-2 backdrop-blur-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                >
                                    <p className="text-primary tracking-[.28em] uppercase mt-0 mb-0 text-xs font-semibold leading-[22px] no-underline">What Our Clients Say</p>
                                </motion.div>
                                <motion.h2 
                                    className="text-white text-3xl md:text-4xl font-bold mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    Client Testimonials
                                </motion.h2>
                                <motion.p 
                                    className="text-gray-300 max-w-2xl mx-auto"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    Hear directly from our satisfied clients about their experiences working with CompuZign
                                </motion.p>
                            </div>
                            
                            <motion.div 
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {/* Testimonial 1 */}
                                <motion.div 
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                                    variants={itemVariants}
                                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-white text-lg font-semibold">Sarah Johnson</h3>
                                            <p className="text-gray-400 text-sm">CTO, TechSolutions Inc.</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-200 italic">"CompuZign's technical support team has been exceptional. They've resolved our complex IT issues quickly and professionally, allowing our business to operate without interruption."</p>
                                    <div className="mt-4 flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </motion.div>
                                
                                {/* Testimonial 2 */}
                                <motion.div 
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                                    variants={itemVariants}
                                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-white text-lg font-semibold">Michael Rodriguez</h3>
                                            <p className="text-gray-400 text-sm">IT Director, Global Systems</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-200 italic">"The migration services provided by CompuZign were seamless. Their team's expertise made what could have been a disruptive transition completely smooth for our users."</p>
                                    <div className="mt-4 flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </motion.div>
                                
                                {/* Testimonial 3 */}
                                <motion.div 
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                                    variants={itemVariants}
                                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-white text-lg font-semibold">Jennifer Patel</h3>
                                            <p className="text-gray-400 text-sm">Operations Manager, CloudNine</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-200 italic">"We've been working with CompuZign for our cloud infrastructure needs for over three years now. Their innovative solutions have significantly improved our operational efficiency."</p>
                                    <div className="mt-4 flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                            
                            <motion.div 
                                className="mt-10 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link to='/testimonials' className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 inline-flex items-center">
                                    View All Testimonials
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </Tabs.Content>
                </AnimatePresence>
            </Tabs.Root>
        </div>
    )
}

export default TabsContainer;
