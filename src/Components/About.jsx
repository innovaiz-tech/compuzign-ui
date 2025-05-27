import AboutUsBanner from "../assets/about-us-banner.jpg"
import AboutUsContainer from "../assets/about-us-container.png"
import useScrollToTop from "../hooks/useScrollToTop.JS";
import Integrity from "../assets/integrity.png"
import CustomerService from "../assets/customer-service.png"
import Innovation from "../assets/innovation.png"
import Collaboration from "../assets/collaboration.png"
import AboutUsSection from "../assets/about-us-section-img.jpg"
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  animate,
  inView,
  stagger,
} from "framer-motion";

export default function About() {
  useScrollToTop();
  const bannerRef = useRef(null);
  const coreValuesRef = useRef(null);

  const isCoreInView = useInView(coreValuesRef, {
    once: true,
    margin: "-200px 0px -200px 0px"
  });

  const coreValues = [
    {
      icon: Integrity,
      title: 'Integrity',
      description: 'We operate transparently and hold ourselves accountable to the highest ethical standards.'
    },
    {
      icon: CustomerService,
      title: 'Client-Centric',
      description: 'Your needs are at the center of everything we do, from our service offerings to our day-to-day support.'
    },
    {
      icon: Innovation,
      title: 'Innovation',
      description: 'We continually seek new ways to improve our services and anticipate future needs.'
    },
    {
      icon: Collaboration,
      title: 'Collaboration',
      description: 'Success is built on teamwork. We collaborate with our clients to tailor solutions that fit their unique goals.'
    }
  ]

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

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
        style={{ backgroundImage: `url(${AboutUsBanner})` }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="max-w-[800px] flex flex-col gap-4 md:gap-5 lg:gap-6">
            <h4 className="text-primary tracking-[.28em] uppercase font-poppins text-xs sm:text-sm font-semibold leading-tight">
              Empowering Businesses with
            </h4>

            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-text-light">
                Reliable IT Solutions{" "}
              </span>
              <span className="text-primary">for Your Success</span>
            </h1>

            <div className="text-text-light font-poppins text-sm sm:text-base max-w-[600px] mt-2 space-y-4">
              Ensure your business stays online and optimized with proactive, around-the-clock IT support. Our experts monitor, manage, and maintain your IT infrastructure, providing quick resolutions to issues before they impact your productivity.
            </div>

            <div className="mt-4 md:mt-6">
              <button className="bg-primary hover:bg-primary-hover text-text-light px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-[position:50%] bg-cover pt-[100px] pb-[100px]"
        style={{ backgroundImage: `url(${AboutUsContainer})` }}
      >
        <div className="flex w-full justify-center items-center">
          <div className="w-1/3"></div>
          <div className="w-1/2 max-w-[700px] px-4 md:pl-24 flex flex-col gap-4 text-text-light">
            <h2 className="text-text-light text-left mt-0 mb-0 font-poppins text-[40px] font-bold leading-[56px] no-underline">
              Our Mission and Vision
            </h2>
            <div className="text-text-light text-left mt-0 mb-0 pt-5 font-poppins text-sm font-normal leading-[22px] no-underline">
              Our mission is to empower businesses by providing seamless, reliable IT services that enhance productivity, streamline operations, and foster growth.
            </div>
            <div className="text-text-light text-left mt-0 mb-0 pt-5 font-poppins text-sm font-normal leading-[22px] no-underline">
              We envision a world where businesses of all sizes can leverage top-tier IT solutions without barriers. Through innovation and dedicated support, we aim to be the trusted partner for organizations worldwide.
            </div>
          </div>
        </div>

      </section>
      <section className="p-1 sm:p-4">
        <h2 className="text-black text-center my-5 font-poppins text-[36px] font-bold leading-[44px] no-underline">
          Our Core Values
        </h2>
        <div
          ref={coreValuesRef}
          className="flex flex-row flex-wrap justify-center items-start gap-5"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="bg-secondary-dark rounded-[10px] flex flex-col justify-center items-center p-[40px_15px] w-[258px] h-[300px]"
              custom={index}
              initial="hidden"
              animate={isCoreInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <motion.img
                width={90}
                src={value.icon}
                alt={`core-icon ${index + 1}`}
                variants={itemVariants}
              />

              <motion.h3
                className="text-text-light text-center mt-4 mb-0 font-poppins text-[24px] font-bold leading-[32px]"
                variants={itemVariants}
              >
                {value.title}
              </motion.h3>

              <motion.p
                className="text-text-light text-center mt-4 mb-0 px-2 font-poppins text-sm font-normal leading-[22px]"
                variants={itemVariants}
              >
                {value.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center my-16">
          <div className="flex flex-col gap-4 w-[80vw] sm:w-[50vw] lg:w-[40vw]">
            <h2 className="text-left mt-0 mb-0 font-poppins text-[40px] font-bold leading-[56px] no-underline">IT Support Expert with CompuZign</h2>
            <p className="mt-0 mb-0 pt-5 font-poppins text-sm font-normal leading-[22px] no-underline">
              Unlock your business's potential with our tailored expertise. We dive deep into your technical landscape to connect you with the perfect IT support professional, ensuring a seamless fit for your unique needs.
            </p>
            <Link className="bg-primary hover:bg-primary-hover text-text-light px-5 py-2 rounded-lg w-fit">
              <button>
                Meet Our Support Team
              </button>
            </Link>
          </div>
          <img className="w-[80vw] sm:w-[50vw] lg:w-[40vw]" src={AboutUsSection} alt="about-us-section-banner" />
        </div>
      </section>
    </>
  );
}