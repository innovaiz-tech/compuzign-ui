import SupportBanner from "../../assets/support-banner.png";
import SupportSignup from "../../assets/support-page.jpg";
import SupportLogin from "../../assets/support-login.avif";
import useScrollToTop from "../../hooks/useScrollToTop";  // Removed .JS
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
    motion,
    useInView,
    animate,
    inView,
    stagger,
} from "framer-motion";

import RequestForm from "../../assets/request-submit-icon.webp"
import TicketIcon from "../../assets/ticket-icon.png"
import CategoriesIcon from "../../assets/categories.png"
import AssignmentIcon from "../../assets/assignment-icon.png"
import ResolutionIcon from "../../assets/resolution-icon.png"
import CustomerConfirmationClosureIcon from "../../assets/CustomerConfirmationClosure-icon.png"
import FeedbackCollectionIcon from "../../assets/FeedbackCollectionIcon.png"
import PerformanceMonitoring from "../../assets/PerformanceMonitoring.png"

export const Support = () => {
    useScrollToTop();
    const bannerRef = useRef(null);
    const coreValuesRef = useRef(null);

    const isCoreInView = useInView(coreValuesRef, {
        once: false,
        margin: "-100px 0px -100px 0px"
    });

    const howItWorksContent = [
        {
            title: "1. Request Submission",
            description: "You can submit support requests through various channels like our Help Center, email, chat bot, or phone.",
            image: RequestForm,
        },
        {
            title: "2. Ticket Creation",
            description: "Each request is logged and assigned a unique ticket number for easy tracking and follow-up.",
            image: TicketIcon,
        },
        {
            title: "3. Categorization & Prioritization",
            description: "Tickets are categorized by request type and prioritized based on urgency to ensure prompt handling.",
            image: CategoriesIcon,
        },
        {
            title: "4. Assignment to Specialists",
            description: "Tickets are routed to our Global NOC and an appropriate skilled Support Engineer are notified of the new assignment.",
            image: AssignmentIcon,
        },
        {
            title: "5. Resolution Process",
            description: "Our Global NOC Support Engineer assesses the request, performs the necessary actions.",
            image: ResolutionIcon,
        },
        {
            title: "6. Customer Confirmation & Closure",
            description: "After resolving the issue, we will contact you to confirm satisfaction before officially closing the ticket.",
            image: CustomerConfirmationClosureIcon,
        },
        {
            title: "7. Feedback Collection",
            description: "You are encouraged to provide feedback, helping us to continually improve our support services.",
            image: FeedbackCollectionIcon,
        },
        {
            title: "8. Performance Monitoring",
            description: "CompuZign conduct reviews to track SLA metrics, identify areas for improvement, and optimize support processes.",
            image: PerformanceMonitoring,
        },
    ]

    useEffect(() => {
        if (bannerRef.current) {
            inView(bannerRef.current, () => {
                animate(
                    bannerRef.current.querySelector("h4"),
                    { opacity: [0, 1], y: [20, 0] },
                    { delay: 0.2, duration: 0.6, easing: "ease-out" }
                );

                animate(
                    bannerRef.current.querySelector("h1"),
                    { opacity: [0, 1], y: [30, 0] },
                    { delay: 0.4, duration: 0.6, easing: "ease-out" }
                );

                animate(
                    bannerRef.current.querySelectorAll("p"),
                    { opacity: [0, 1], y: [20, 0] },
                    {
                        delay: stagger(0.2, { start: 0.6 }),
                        duration: 0.6,
                        easing: "ease-out",
                    }
                );

                animate(
                    bannerRef.current.querySelector("button"),
                    { opacity: [0, 1], scale: [0.9, 1] },
                    { delay: 1.2, duration: 0.5, easing: "ease-out" }
                );
            });
        }
    }, []);

    return (
        <>
            <section
                ref={bannerRef}
                className="bg-center bg-cover bg-no-repeat relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full flex items-center overflow-hidden"
                style={{ backgroundImage: `url(${SupportBanner})` }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
                    <div className="max-w-[800px] flex flex-col gap-4 md:gap-5 lg:gap-6">
                        <h4 className="text-primary tracking-[.28em] uppercase font-poppins text-xs sm:text-sm font-semibold leading-tight">
                            Ticketing system
                        </h4>

                        <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            <span className="text-text-light">
                                Ultimate support system{" "}
                            </span>
                            <span className="text-primary">for leading agencies</span>
                        </h1>

                        <div className="text-text-light font-poppins text-sm sm:text-base max-w-[600px] mt-2 space-y-4">
                            We prioritize tracking and solving customer support tickets
                        </div>

                        <div className="mt-4 md:mt-6">
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <motion.button 
                                    className="bg-primary hover:bg-primary/80 text-text-light px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-300 text-sm sm:text-base flex items-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Login Now
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            className="max-w-[280px] sm:max-w-[350px] lg:max-w-[400px]"
                            src={SupportLogin}
                            alt="Unbeatable Support Illustration"
                        />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col">
                        <h2 className="tracking-[-0.09375rem] mb-2 font-poppins text-3xl sm:text-[40px] font-bold leading-[1.2]">
                            We Offer Unbeatable Support
                        </h2>

                        <div className="mt-4 mb-0 font-poppins text-base sm:text-[16px] font-normal leading-[1.5]">
                            Get Fast Support and easily track the status and history of all your tickets.
                        </div>

                        <h3 className="mt-6 mb-0 font-poppins text-xl sm:text-[20px] font-semibold leading-[1.2]">
                            Customer Ticket Portal
                        </h3>

                        {/* <Link
                            to="/login"
                            className="inline-block text-text-light text-center tracking-normal capitalize align-baseline bg-primary rounded-[6px] w-[115px] h-[38px] mt-6 mx-auto md:mx-[5px] px-[12px] py-[8px] font-poppins text-[14px] font-medium leading-[20px] no-underline transition-all duration-200 hover:bg-primary-hover"
                        >
                            Login Now
                        </Link> */}

                        <h3 className="mt-8 mb-0 font-poppins text-xl sm:text-[20px] font-semibold leading-[1.2]">
                            Unparalleled CCI Tech Support at Your Service
                        </h3>

                        <div className="mt-4 mb-0 font-poppins text-base sm:text-[16px] font-normal leading-[1.5]">
                            Experience seamless, expert assistance with CCI Tech Support, where we prioritize your digital success. Our dedicated 24/7 World-Wide team is here to provide comprehensive solutions and support, ensuring your technology empowers your goals.
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-12 px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
                        <h2 className="tracking-[-0.09375rem] mb-2 font-poppins text-3xl sm:text-4xl font-bold leading-[1.2]">
                            Join Compuzign for a {" "}
                            <span className="block">Smarter Experience!</span>
                        </h2>

                        <div className="mt-4 mb-0 font-poppins text-base sm:text-[16px] font-normal leading-[1.5]">
                            Create your free Compuzign account today and unlock a seamless way to connect with customers. Better experience tailored to your business needs. Sign up now and take the first step toward growth and efficiency!
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block"
                        >
                            <Link
                                to="/login"
                                className="inline-flex justify-center items-center text-text-light text-center tracking-normal capitalize align-baseline bg-primary rounded-[6px] w-[115px] h-[38px] mt-6 mx-auto md:mx-[5px] px-[12px] py-[8px] font-poppins text-[14px] font-medium leading-[20px] no-underline transition-all duration-200 hover:bg-primary/80 shadow-md"
                            >
                                Sign up
                            </Link>
                        </motion.div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
                        <img
                            className="w-full max-w-[280px] sm:max-w-[350px]"
                            src={SupportSignup}
                            alt="Join Compuzign"
                        />
                    </div>
                </div>
            </section>
            <section className=" flex gap-4 flex-wrap justify-center items-center py-16">
                <h2 className="text-center mt-0 mb-5 font-poppins text-[36px] font-bold leading-[44px]">How it works</h2>
                <div
                    ref={coreValuesRef}
                    className="flex flex-row flex-wrap justify-center items-center gap-10"
                >
                    {howItWorksContent.map((value, index) => (
                        <motion.div
                            key={index}
                            className="bg-secondary-dark hover:bg-secondary-hover/90 
                            cursor-pointer rounded-[10px] 
                            flex flex-col items-center 
                            px-2 py-4 w-[278px] h-[350px]"
                            custom={index}
                            initial="hidden"
                            animate={isCoreInView ? "visible" : "hidden"}
                            whileHover={{
                                scale: 1.01,
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                                transition: { duration: 0.5 }
                            }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: (i) => ({
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: i * 0.1,
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }
                                })
                            }}
                        >
                            <motion.img
                                width={90}
                                src={value.image}
                                alt={`core-icon ${index + 1}`}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            />

                            <motion.h3
                                className="text-text-light text-center mt-4 mb-0 font-poppins text-[24px] font-bold leading-[32px]"
                                whileHover={{ color: "#ffffff" }}
                            >
                                {value.title}
                            </motion.h3>

                            <motion.p
                                className="text-text-light text-center mt-4 mb-0 px-2 font-poppins text-sm font-normal leading-[22px]"
                                whileHover={{ scale: 1.02 }}
                            >
                                {value.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Support;