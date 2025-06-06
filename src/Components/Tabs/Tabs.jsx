import React, { useState, useRef, useCallback } from "react";
import {
    motion,
    AnimatePresence,
    useAnimation,
    useInView,
} from "framer-motion";
import useSmoothScroll from "../../hooks/useSmoothScroll";
const SwiperComponent = React.lazy(() => import("../Slider/Slider"));

import { Tabs } from "radix-ui";
import { Link } from "react-router-dom";
import { FaUserShield, FaLightbulb, FaBuilding, FaUsers, FaRocket, FaChartLine } from 'react-icons/fa';

import AboutUsBanner from "../../assets/about-us-banner.png";
import TechnicalSupportBanner from "../../assets/technical-support-banner.png";
import Slider1 from '../../assets/slider1.png';
import Slider2 from '../../assets/slider2.png';
import Slider3 from '../../assets/slider3.png';
import Slider4 from '../../assets/slider4.png';
import Slider5 from '../../assets/slider5.png';
import MigrationAsAService from '../../assets/migration-as-a-service.png';
import SupportAsAService from '../../assets/support-as-a-service.png';
import CloudAndInfrastructure from '../../assets/cloud-and-infrastructure.png';

const preloadImages = () => {
    const images = [
        AboutUsBanner,
        TechnicalSupportBanner,
        Slider1,
        Slider2,
        Slider3,
        Slider4,
        Slider5,
        MigrationAsAService,
        SupportAsAService,
        CloudAndInfrastructure
    ];

    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
};

const TAB_BG = "bg-gradient-to-b from-[#220142f1] to-[#503d8e] backdrop-blur-sm";
const CARD_BG = "bg-primary/70 backdrop-blur-md";
const BORDER_STYLE = "border border-white/10 hover:border-white/30";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 }
    }
};

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
};

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
            content: "Our cyber security experts monitor each element of your infrastructure, assess its current health, including potential and existing threats, and responds to threats.",
            href: '#',
            image: CloudAndInfrastructure
        },
    ],
    breakPoints: [
        { screen: 640, slidesPerView: 1, spaceBetween: 10 },
        { screen: 867, slidesPerView: 2, spaceBetween: 20 },
        { screen: 1224, slidesPerView: 3, spaceBetween: 30 }
    ]
};

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
};

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CTO, TechSolutions Inc.",
        quote: "CompuZign's technical support team has been exceptional. They've resolved our complex IT issues quickly and professionally, allowing our business to operate without interruption."
    },
    {
        name: "Michael Rodriguez",
        role: "IT Director, Global Systems",
        quote: "The migration services provided by CompuZign were seamless. Their team's expertise made what could have been a disruptive transition completely smooth for our users."
    },
    {
        name: "Jennifer Patel",
        role: "Operations Manager, CloudNine",
        quote: "We've been working with CompuZign for our cloud infrastructure needs for over three years now. Their innovative solutions have significantly improved our operational efficiency."
    }
];

const ServiceCard = React.memo(({ service, index }) => (
    <motion.div
        className={`service-card ${CARD_BG} rounded-xl overflow-hidden shadow-lg ${BORDER_STYLE} transition-all duration-300 group relative`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
        whileHover={{ y: -5 }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
        <div className="relative overflow-hidden h-48">
            <img
                src={service.image}
                alt={service.heading}
                className="w-full h-full object-cover"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary text-xs font-bold tracking-wider uppercase">
                    IT Services
                </div>
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{service.heading}</h3>
            <p className="text-gray-200 mb-4">{service.content}</p>
        </div>
    </motion.div>
));

const WhoWeAreCard = React.memo(({ item, index }) => {
    const Icon = item.icon;
    return (
        <motion.div
            className={`max-w-[360px] ${CARD_BG} p-5 rounded-lg shadow-md ${BORDER_STYLE} transition-all duration-300 group`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.2 }}
            whileHover={{ y: -8 }}
        >
            <div className="bg-secondary text-white rounded-full p-3 inline-block mb-4 transition-all duration-300 group-hover:scale-110">
                <Icon className="w-10 h-10 text-white transition-all duration-300 " />
            </div>
            <h2 className="text-white mt-0 mb-3 text-xl font-semibold leading-tight transition-all duration-300">
                {item.title}
            </h2>
            <div className="text-text-light text-sm leading-relaxed transition-all duration-300">
                {item.content}
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary/90 opacity-0 transition-all duration-300 rounded-lg -z-10"></div>
        </motion.div>
    );
});

const TestimonialCard = React.memo(({ testimonial, index }) => (
    <motion.div
        className={`${CARD_BG} p-6 rounded-lg shadow-lg ${BORDER_STYLE} transition-all duration-300`}
        variants={itemVariants}
        whileHover={{ y: -5 }}
    >
        <div className="flex items-center mb-4">
            <div className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
            </div>
            <div className="ml-4">
                <h3 className="text-white text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm">{testimonial.role}</p>
            </div>
        </div>
        <p className="text-gray-200 italic">{testimonial.quote}</p>
        <div className="mt-4 flex">
            {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-dark" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    </motion.div>
));

const AboutUsTab = React.memo(() => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={`${TAB_BG} w-full`}
    >
        <div className="flex flex-col md:flex-row justify-between w-full max-w-[1200px] mx-auto">
            <motion.div
                className="w-full md:w-1/2 flex justify-center items-center p-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative">
                    <div className="relative overflow-hidden rounded-xl shadow-xl">
                        <img
                            className="w-full h-auto object-cover"
                            src={AboutUsBanner}
                            alt="about-us-banner"
                            loading="lazy"
                        />
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="w-full md:w-1/2 py-12 px-6 md:px-10 lg:pr-20"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="inline-block bg-gradient-to-r from-primary/10 to-transparent px-4 py-2 rounded-full mb-2 backdrop-blur-sm">
                    <p className="text-primary tracking-[.28em] uppercase text-xs font-semibold leading-[22px]">about us</p>
                </div>

                <h2 className="text-white mt-0 mb-2 text-3xl md:text-4xl font-bold leading-tight">
                    World Class Technical Support
                </h2>

                <div className="flex flex-col gap-4 text-gray-700">
                    {[
                        "At CompuZign, we believe in harnessing the power of technology to propel businesses forward. Innovation that drives success is at the core of everything we do.",
                        "With a team of experienced professionals, we're committed to solving your technology challenges with precision and expertise. Empowering your business with seamless technology.",
                        "Our promise is simple: Your success is our mission. At CompuZign, we're not just a service provider—we're your trusted technology partner. Together, we turn potential into progress."
                    ].map((text, i) => (
                        <div key={i} className={`${CARD_BG} text-text-light p-4 rounded-lg shadow-sm ${BORDER_STYLE} transition-all duration-300`}>
                            {text}
                        </div>
                    ))}
                </div>

                <motion.div
                    className="mt-6"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Link className="inline-block bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center" to='about-us'>
                        Learn More About Us
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    </motion.div>
));

const ServicesTab = React.memo(() => (
    <div className={`${TAB_BG} w-full`}>
        <div className="w-full max-w-[1200px] mx-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {services.bodyContent.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
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
));

const TechnicalSupportTab = React.memo(() => (
    <div className={`${TAB_BG} w-full`}>
        <div className="flex flex-col md:flex-row justify-between w-full max-w-[1200px] mx-auto">
            <motion.div
                className="w-full md:w-1/2 flex justify-center items-center p-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative">
                    <div className="relative overflow-hidden rounded-xl shadow-xl">
                        <img
                            className="w-full h-auto object-cover"
                            src={TechnicalSupportBanner}
                            alt="tech-support-banner"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-transparent opacity-60"></div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="w-full md:w-1/2 py-12 px-6 md:px-10 lg:pr-20"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="inline-block bg-gradient-to-r from-primary/20 to-transparent px-4 py-2 rounded-full mb-2 backdrop-blur-sm">
                    <p className="text-primary tracking-[.28em] uppercase text-xs font-semibold leading-[22px]">We're Here to Help</p>
                </div>

                <h2 className="text-white mt-0 mb-2 text-3xl md:text-4xl font-bold leading-tight">
                    Reach Out to Our Technical Support
                </h2>

                <div className="flex flex-col gap-4 text-gray-200">
                    {[
                        "At CompuZign, we understand that seamless technology is essential to your success. That's why we're committed to ensuring your systems run smoothly.",
                        "Your technology, our priority - Our expert support team is always available to resolve issues, optimize your systems, and keep your business operating at its best.",
                        "Whether through remote support or on-site assistance, we deliver solutions tailored to meet your unique requirements. Power up your business with systems that run flawlessly - let us handle the tech!"
                    ].map((text, i) => (
                        <div key={i} className={`${CARD_BG} p-4 rounded-lg shadow-sm ${BORDER_STYLE} transition-all duration-300`}>
                            {text}
                        </div>
                    ))}
                </div>

                <motion.div
                    className="mt-6"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Link to='/support' className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center">
                        Learn More About Support
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    </div>
));

const WhoWeAreTab = React.memo(() => (
    <div className={`${TAB_BG} w-full flex-grow flex flex-col`}>
        <div className="max-w-[1200px] mx-auto py-10 px-6 w-full flex flex-wrap justify-center gap-5">
            {whoWeAre.bodyContent.map((item, index) => (
                <WhoWeAreCard key={`who-we-are-item-${index}`} item={item} index={index} />
            ))}
        </div>
    </div>
));

const IndustriesTab = React.memo(() => (
    <div className={`${TAB_BG} w-full flex-grow flex flex-col`}>
        <div className="w-full max-w-[1200px] mx-auto py-10 px-6">
            <React.Suspense fallback={<div className="text-white text-center py-20">Loading industries...</div>}>
                <SwiperComponent slideContent={industries} />
            </React.Suspense>
        </div>
    </div>
));

const TestimonialsTab = React.memo(() => (
    <div className={`${TAB_BG} p-6 md:p-10`}>
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
                <motion.div
                    className="inline-block bg-gradient-to-r from-primary/20 to-transparent px-4 py-2 rounded-full mb-2 backdrop-blur-sm"
                    variants={itemVariants}
                >
                    <p className="text-primary tracking-[.28em] uppercase text-xs font-semibold leading-[22px]">What Our Clients Say</p>
                </motion.div>
                <motion.h2
                    className="text-white text-3xl md:text-4xl font-bold mb-4"
                    variants={itemVariants}
                >
                    Client Testimonials
                </motion.h2>
                <motion.p
                    className="text-gray-300 max-w-2xl mx-auto"
                    variants={itemVariants}
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
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} index={index} />
                ))}
            </motion.div>

            <motion.div
                className="mt-10 text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
            >
                <Link to='/testimonials' className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 inline-flex items-center">
                    View All Testimonials
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </motion.div>
        </div>
    </div>
));

const homepageTabsData = [
    {
        id: "about-us",
        title: "ABOUT US",
        content: <AboutUsTab />,
    },
    {
        id: "services",
        title: "OUR SERVICES",
        content: <ServicesTab />,
    },
    {
        id: "technical-support",
        title: "TECHNICAL SUPPORT",
        content: <TechnicalSupportTab />,
    },
    {
        id: "who-we-are",
        title: "WHO WE ARE",
        content: <WhoWeAreTab />,
    },
    {
        id: "industries",
        title: "INDUSTRIES",
        content: <IndustriesTab />,
    },
    {
        id: "testimonials",
        title: "CLIENT TESTIMONIAL",
        content: <TestimonialsTab />,
    }

];

const TabsContainer = () => {
    const [activeTab, setActiveTab] = useState("about-us");
    const [direction, setDirection] = useState(0);
    const controls = useAnimation();
    const tabContentRef = useRef(null);
    const tabsRef = useRef(null);
    const contentRef = useRef(null);
    const tabContainerRef = useRef(null);
    const isInView = useInView(tabContentRef, { once: false, amount: 0.1 });
    const { scrollTo } = useSmoothScroll({
        scrollOnMount: true,
        mountDelay: 50,
        duration: 300,
        offset: 80,
    });

    const scrollToTabContainer = useCallback(() => {
        if (tabContainerRef.current) {
            scrollTo(tabContainerRef.current, {
                duration: 600, // Slightly longer for smoother feel
                offset: 80, // Account for header height
            });
        }
    }, [scrollTo]);

    const handleTabChange = async (tabId) => {
        if (tabId === activeTab) return;

        const currentIndex = homepageTabsData.findIndex(
            (tab) => tab.id === activeTab
        );
        const newIndex = homepageTabsData.findIndex((tab) => tab.id === tabId);
        const direction = newIndex > currentIndex ? 1 : -1;
        setDirection(direction);

        await Promise.all([
            controls.start({
                opacity: 0,
                scale: 0.97,
                transition: { duration: 0.2 },
            }),
        ]);

        setActiveTab(tabId);

        setTimeout(() => {
            scrollToTabContainer();
        }, 100);

        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    };

    React.useEffect(() => {
        preloadImages();
    }, []);


    return (
        <div className="relative overflow-hidden w-full pt-0 mt-0">

            <section className="pt-12 bg-gradient-to-b from-[#220142f1] to-[#503d8e]" id="services-tabs">
                <div className="container mx-auto" ref={tabContainerRef}>
                    <div className="top-0 z-10 pt-6 pb-4 shadow-sm">
                        <Tabs.Root
                            value={activeTab}
                            className="flex flex-col"
                            onValueChange={handleTabChange}
                        >
                            <Tabs.List
                                ref={tabsRef}
                                aria-label="Services"
                                className="flex flex-wrap justify-center gap-3 mb-2"
                            >
                                {homepageTabsData.map((service) => (
                                    <Tabs.Trigger
                                        key={service.id}
                                        value={service.id}
                                        className={`px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-md 
                                ${activeTab === service.id
                                                ? "bg-primary text-white shadow-lg scale-105"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            } 
                                cursor-pointer active:scale-95 select-none`}
                                        onClick={() => triggerHapticFeedback()}
                                    >
                                        {service.title}
                                    </Tabs.Trigger>
                                ))}
                            </Tabs.List>


                            <div
                                className="relative w-full pt-6"
                                ref={(el) => { tabContentRef.current = el; }}
                            >
                                <AnimatePresence mode="wait" initial={false} custom={direction}>
                                    <Tabs.Content
                                        key={activeTab}
                                        value={activeTab}
                                        className="w-full focus:outline-none"
                                        forceMount
                                    >
                                        <motion.div
                                            className="w-full"
                                            initial={{ opacity: 0, scale: 0.97, y: 10 }}
                                            animate={
                                                isInView
                                                    ? {
                                                        opacity: 1,
                                                        scale: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: 0.4,
                                                            ease: [0.16, 1, 0.3, 1],
                                                            scale: {
                                                                type: "spring",
                                                                damping: 20,
                                                                stiffness: 400,
                                                            },
                                                        },
                                                    }
                                                    : {}
                                            }
                                            exit={{
                                                opacity: 0,
                                                scale: 0.98,
                                                y: -5,
                                                transition: { duration: 0.2 },
                                            }}
                                        >
                                            <motion.div className="grid grid-cols-1 md:grid-cols-1 gap-6 items-center">
                                                <motion.div
                                                    ref={contentRef}
                                                    className="flex flex-col gap-4"
                                                    initial={{ opacity: 0, scale: 0.5, y: 10 }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                        y: 0,
                                                    }}
                                                >
                                                    <div>
                                                        {homepageTabsData.find((tab) => tab.id === activeTab).content}
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    </Tabs.Content>
                                </AnimatePresence>
                            </div>
                        </Tabs.Root>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default React.memo(TabsContainer);