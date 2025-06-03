import CsaasBanner from "../../assets/csaas-banner.png";
import { useEffect, useRef } from "react";
import { animate, inView, stagger, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiRocketLine } from "react-icons/ri";
import { FaHeadset } from "react-icons/fa";
import useScrollToTop from "../../hooks/useScrollToTop";

// Import client logos
import Client1 from "../../assets/client/client-1.png";
import Client2 from "../../assets/client/client-2.png";
import Client3 from "../../assets/client/client-3.png";
import Client4 from "../../assets/client/client-4.png";
import Client5 from "../../assets/client/client-5.png";



export default function SupportAsAService() {
  const bannerRef = useRef(null);
  const clientsRef = useRef(null);
  const whyCompuZignRef = useRef(null);
  const whatWeOfferRef = useRef(null);
  const coreFeaturesRef = useRef(null);

  // Scroll to top when component mounts
  useScrollToTop();

  useEffect(() => {
    // Banner animations
    if (bannerRef.current) {
      inView(bannerRef.current, () => {
        animate(
          bannerRef.current.querySelector("h4"),
          { opacity: [0, 1], y: [40, 0] },
          { duration: 0.8, delay: 0.1 }
        );
        animate(
          bannerRef.current.querySelector("h1"),
          { opacity: [0, 1], y: [40, 0] },
          { duration: 0.8, delay: 0.2 }
        );
        animate(
          bannerRef.current.querySelector("p"),
          { opacity: [0, 1], y: [40, 0] },
          { duration: 0.8, delay: 0.3 }
        );
        animate(
          bannerRef.current.querySelectorAll("button"),
          { opacity: [0, 1], y: [40, 0] },
          { duration: 0.8, delay: stagger(0.1, { startDelay: 0.4 }) }
        );

        return () => {};
      });
    }

    // Clients section animations
    if (clientsRef.current) {
      const clientItems = clientsRef.current.querySelectorAll(".animate-item");
      const clientLogos = clientsRef.current.querySelectorAll(".client-logo");
    
      inView(clientsRef.current, () => {
        animate(clientItems, { opacity: [0, 1], y: [20, 0] }, {
          delay: stagger(0.2),
          duration: 0.6,
        });
        
        animate(clientLogos, { opacity: [0, 1], scale: [0.8, 1] }, {
          delay: stagger(0.1, { startDelay: 0.3 }),
          duration: 0.6,
        });
        return () => {};
      });
    }

    // Why CompuZign section animations
    if (whyCompuZignRef.current) {
      const featureHeadings = whyCompuZignRef.current.querySelectorAll(".animate-item");
      const featureCards = whyCompuZignRef.current.querySelectorAll(".feature-card");
    
      inView(whyCompuZignRef.current, () => {
        animate(featureHeadings, { opacity: [0, 1], y: [20, 0] }, {
          delay: stagger(0.2),
          duration: 0.6,
        });
        
        animate(featureCards, { opacity: [0, 1], y: [30, 0] }, {
          delay: stagger(0.1, { startDelay: 0.3 }),
          duration: 0.6,
        });
        return () => {};
      });
    }

    // What We Offer section animations
    if (whatWeOfferRef.current) {
      const offerHeadings = whatWeOfferRef.current.querySelectorAll(".animate-item");
      const offerSteps = whatWeOfferRef.current.querySelectorAll(".offer-step");
    
      inView(whatWeOfferRef.current, () => {
        animate(offerHeadings, { opacity: [0, 1], y: [20, 0] }, {
          delay: stagger(0.2),
          duration: 0.6,
        });
        
        animate(offerSteps, { opacity: [0, 1], y: [20, 0] }, {
          delay: stagger(0.15, { startDelay: 0.3 }),
          duration: 0.5,
        });
        return () => {};
      });
    }

    // Core Features section animations
    if (coreFeaturesRef.current) {
      const featuresHeadings = coreFeaturesRef.current.querySelectorAll(".animate-item");
      const featureItems = coreFeaturesRef.current.querySelectorAll(".feature-item");
    
      inView(coreFeaturesRef.current, () => {
        animate(featuresHeadings, { opacity: [0, 1], y: [20, 0] }, {
          delay: stagger(0.2),
          duration: 0.6,
        });
        
        animate(featureItems, { opacity: [0, 1], scale: [0.95, 1] }, {
          delay: stagger(0.1, { startDelay: 0.3 }),
          duration: 0.5,
        });
        return () => {};
      });
    }
  }, []);
  return (
    <>
      <section
        ref={bannerRef}
        className="bg-center bg-cover bg-no-repeat relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${CsaasBanner})` }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="max-w-[800px] flex flex-col gap-4 md:gap-5 lg:gap-6">
            <h4 className="text-primary tracking-[.28em] uppercase font-poppins text-xs sm:text-sm font-semibold leading-tight">
              RELIABLE, 24/7 TECH SUPPORT FOR MODERN TEAMS
            </h4>

            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-text-light">
                Support as a Service That{" "}
              </span>
              <span className="text-primary">Powers Your Progress</span>
            </h1>

            <div className="text-text-light font-poppins text-sm sm:text-base max-w-[600px] mt-2 space-y-4">
              <p>
                At CompuZign, we know that when your tech stalls—your growth
                slows. Our Support-as-a-Service keeps your business running
                seamlessly with proactive, always-on IT support.
              </p>
              <p>
                From fast-moving startups to dynamic agencies, we become your
                extended IT arm—keeping your systems sharp, secure, and
                stress-free.
              </p>
            </div>

            <div className="mt-4 md:mt-6 flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  to="/pricing" 
                  className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-text-light px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base cursor-pointer shadow-md hover:shadow-lg"
                >
                  <FaHeadset className="text-lg" />
                  <span>Get Started</span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link 
                  to="/contact" 
                  className="flex items-center gap-2 bg-secondary/90 hover:bg-secondary border border-primary/20 text-text-light px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base cursor-pointer shadow-md hover:shadow-lg backdrop-blur-sm"
                >
                  <RiRocketLine className="text-lg" />
                  <span>Contact Us</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Trusted Clients Section */}
      <section className="py-14 bg-white" ref={clientsRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-4 animate-item">
              Trusted By
            </h2>
            <p className="text-text-medium max-w-2xl mx-auto text-sm sm:text-base animate-item">
              Over 40K+ software business growing with CompuZign.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
            <div className="w-32 h-16 flex items-center justify-center transition-transform hover:scale-110 client-logo" style={{ opacity: 0 }}>
              <img src={Client1} alt="Client 1" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center transition-transform hover:scale-110 client-logo" style={{ opacity: 0 }}>
              <img src={Client2} alt="Client 2" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center transition-transform hover:scale-110 client-logo" style={{ opacity: 0 }}>
              <img src={Client3} alt="Client 3" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center transition-transform hover:scale-110 client-logo" style={{ opacity: 0 }}>
              <img src={Client4} alt="Client 4" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center transition-transform hover:scale-110 client-logo" style={{ opacity: 0 }}>
              <img src={Client5} alt="Client 5" className="max-h-full max-w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Why CompuZign Section */}
      <section className="py-16 bg-gray-50" ref={whyCompuZignRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-2 animate-item">
              Why <span className="text-primary">CompuZign</span>?
            </h2>
            <p className="text-text-medium max-w-2xl mx-auto text-sm sm:text-base animate-item">
              Your tech, our responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 hover:shadow-lg feature-card" style={{ opacity: 0 }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="font-poppins text-lg font-semibold text-text-dark mb-2">
                Always-On Assistance
              </h3>
              <p className="text-text-medium text-sm">
                24/7 support that keeps your operations running.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 hover:shadow-lg feature-card" style={{ opacity: 0 }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <h3 className="font-poppins text-lg font-semibold text-text-dark mb-2">
                Expert-Driven Solutions
              </h3>
              <p className="text-text-medium text-sm">
                Certified engineers ready to resolve issues fast.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 hover:shadow-lg feature-card" style={{ opacity: 0 }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
              </div>
              <h3 className="font-poppins text-lg font-semibold text-text-dark mb-2">
                Flexible Plans
              </h3>
              <p className="text-text-medium text-sm">
                Pay for what you need, scale when you grow.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 hover:shadow-lg feature-card" style={{ opacity: 0 }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
              </div>
              <h3 className="font-poppins text-lg font-semibold text-text-dark mb-2">
                Insightful Reporting
              </h3>
              <p className="text-text-medium text-sm">
                Track performance, uptime, and satisfaction with ease.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 hover:shadow-lg md:col-span-2 lg:col-span-1 feature-card" style={{ opacity: 0 }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="font-poppins text-lg font-semibold text-text-dark mb-2">
                The Premier Support System
              </h3>
              <p className="text-text-medium text-sm">
                CompuZign is the premier support system for leading agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-primary/20 text-gray-800" ref={whatWeOfferRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary animate-item">
              What We Offer
            </h2>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-secondary animate-item">
                End-to-End Support. Zero Disruption.
              </h3>
              <p className="text-gray-600 text-sm sm:text-base animate-item">
                CompuZign's Support-as-a-Service covers every angle of your IT needs with
                precision and care.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
            {/* Steps container for consistent heights */}
            {/* Step 1 */}
            <div className="offer-step bg-white rounded-xl shadow-lg p-6 h-full flex flex-col items-center justify-between transform hover:scale-105 transition-transform duration-300" style={{ opacity: 0 }}>
              <div className="bg-primary inline-flex items-center justify-center w-20 h-20 rounded-full p-4 mb-6 mx-auto border-4 border-primary/30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-14 h-14">
                  <path d="M32 6a18 18 0 00-18 18c0 9.94 8.06 18 18 18 9.94 0 18-8.06 18-18 0-9.94-8.06-18-18-18zm0 34c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z" fill="#0f1c33"/>
                  <path d="M38 24c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6z" fill="#0f1c33"/>
                  <path d="M44 54h-24c-1.1 0-2-.9-2-2v-6c0-6.63 5.37-12 12-12s12 5.37 12 12v6c0 1.1-.9 2-2 2z" fill="#0f1c33"/>
                </svg>
              </div>
              <h4 className="font-poppins font-semibold mb-3 text-secondary">Initial Consultation</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-auto">
                Understanding your business needs and challenges.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="offer-step bg-white rounded-xl shadow-lg p-6 h-full flex flex-col items-center justify-between transform hover:scale-105 transition-transform duration-300" style={{ opacity: 0 }}>
              <div className="bg-primary inline-flex items-center justify-center w-20 h-20 rounded-full p-4 mb-6 mx-auto border-4 border-primary/30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-14 h-14">
                  <path d="M44 22c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-8z" fill="#0f1c33"/>
                  <path d="M12 22c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-8z" fill="#0f1c33"/>
                  <path d="M35 24a3 3 0 11-6 0 3 3 0 016 0z" fill="#0f1c33"/>
                  <path d="M42 42c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM22 42c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#0f1c33"/>
                  <path d="M32 50c-9.94 0-18-8.06-18-18 0-2.76 2.24-5 5-5h26c2.76 0 5 2.24 5 5 0 9.94-8.06 18-18 18z" fill="#0f1c33"/>
                  <path d="M46 15H18c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2z" fill="#0f1c33"/>
                </svg>
              </div>
              <h4 className="font-poppins font-semibold mb-3 text-secondary">Onboarding & Setup</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-auto">
                Setting up monitoring and support tailored to your infrastructure.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="offer-step bg-white rounded-xl shadow-lg p-6 h-full flex flex-col items-center justify-between transform hover:scale-105 transition-transform duration-300" style={{ opacity: 0 }}>
              <div className="bg-primary inline-flex items-center justify-center w-20 h-20 rounded-full p-4 mb-6 mx-auto border-4 border-primary/30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-14 h-14">
                  <path d="M52 12H12c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 4 4 4h40c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4z" fill="#0f1c33"/>
                  <path d="M16 20h32v24H16z" fill="#0f1c33"/>
                  <circle cx="44" cy="18" r="2" fill="#5c9aa7"/>
                  <path d="M14 46h4v2h-4zM22 46h4v2h-4zM30 46h4v2h-4zM38 46h4v2h-4zM46 46h4v2h-4z" fill="#5c9aa7"/>
                  <path d="M32 32c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#5c9aa7"/>
                  <path d="M36 28c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM28 28c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#5c9aa7"/>
                  <path d="M40 32c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM24 32c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#5c9aa7"/>
                  <path d="M36 36c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM28 36c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#5c9aa7"/>
                  <path d="M32 40c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#5c9aa7"/>
                </svg>
              </div>
              <h4 className="font-poppins font-semibold mb-3 text-secondary">Proactive Monitoring</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-auto">
                Constant surveillance of systems to detect issues early.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="offer-step bg-white rounded-xl shadow-lg p-6 h-full flex flex-col items-center justify-between transform hover:scale-105 transition-transform duration-300" style={{ opacity: 0 }}>
              <div className="bg-primary inline-flex items-center justify-center w-20 h-20 rounded-full p-4 mb-6 mx-auto border-4 border-primary/30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-14 h-14">
                  <path d="M48 8H16c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V16c0-4.42-3.58-8-8-8z" fill="#0f1c33"/>
                  <path d="M16 12h32v40H16z" fill="#0f1c33"/>
                  <circle cx="32" cy="24" r="8" fill="#5c9aa7"/>
                  <path d="M42 48H22c-1.1 0-2-.9-2-2v-4c0-6.63 5.37-12 12-12s12 5.37 12 12v4c0 1.1-.9 2-2 2z" fill="#5c9aa7"/>
                  <path d="M34 36h-4c-1.1 0-2-.9-2-2s.9-2 2-2h4c1.1 0 2 .9 2 2s-.9 2-2 2z" fill="#0f1c33"/>
                </svg>
              </div>
              <h4 className="font-poppins font-semibold mb-3 text-secondary">24/7 Helpdesk Support</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-auto">
                A dedicated team available to resolve any arising issues.
              </p>
            </div>
            
            {/* Step 5 */}
            <div className="offer-step bg-white rounded-xl shadow-lg p-6 h-full flex flex-col items-center justify-between transform hover:scale-105 transition-transform duration-300" style={{ opacity: 0 }}>
              <div className="bg-primary inline-flex items-center justify-center w-20 h-20 rounded-full p-4 mb-6 mx-auto border-4 border-primary/30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-14 h-14">
                  <path d="M50 14c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12z" fill="#0f1c33"/>
                  <path d="M40 24H24c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2z" fill="#0f1c33"/>
                  <path d="M24 36H8c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2z" fill="#0f1c33"/>
                  <path d="M32 48H16c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2z" fill="#0f1c33"/>
                  <path d="M14 26c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12z" fill="#0f1c33"/>
                  <path d="M14 40c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#5c9aa7"/>
                  <path d="M50 28c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#5c9aa7"/>
                  <path d="M32 52c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#5c9aa7"/>
                </svg>
              </div>
              <h4 className="font-poppins font-semibold mb-3 text-secondary">Ongoing Optimization</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-auto">
                Regular performance checks to improve system health.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-secondary text-center">Our Comprehensive Services</h3>
            <ul className="list-none list-inside space-y-3 text-sm sm:text-base mt-4">
              <li className="text-gray-700">
                <span className="text-primary font-medium">Remote IT Helpdesk</span> – Fast, reliable support for users across your organization.
              </li>
              <li className="text-gray-700">
                <span className="text-primary font-medium">Proactive Monitoring</span> – Detect and resolve issues before they impact operations.
              </li>
              <li className="text-gray-700">
                <span className="text-primary font-medium">System & Software Maintenance</span> – Keep your tech updated, optimized, and secure.
              </li>
              <li className="text-gray-700">
                <span className="text-primary font-medium">Troubleshooting & Repairs</span> – Rapid resolution for hardware and software hiccups.
              </li>
              <li className="text-gray-700">
                <span className="text-primary font-medium">Deployment Support</span> – Smooth onboarding for new tools, teams, or infrastructure.
              </li>
              <li className="text-gray-700">
                <span className="text-primary font-medium">Third-Party App Support</span> – Seamless assistance for key platforms and integrations.
              </li>
            </ul>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
              <p className="text-secondary font-medium text-center">At CompuZign, we don't wait for problems—we prevent them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Features Section */}
      <section className="py-16 bg-secondary text-white" ref={coreFeaturesRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 animate-item">
              Our Core Features
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto animate-item">
              Comprehensive IT support features designed to maximize your productivity and system reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="feature-item bg-white rounded-xl shadow-lg p-6 h-full flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300" style={{ opacity: 0 }}>
              <div className="relative overflow-hidden mb-2 w-full">
                <div className="absolute top-0 left-0 w-20 h-1 bg-primary"></div>
              </div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-dark-blue">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-poppins text-lg font-semibold text-secondary mb-2">
                Real-Time Monitoring
              </h3>
              <p className="text-gray-600 text-sm">
                Continuous tracking of system health to prevent issues.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="feature-item bg-white rounded-xl shadow-lg p-6 h-full flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300" style={{ opacity: 0 }}>
              <div className="relative overflow-hidden mb-2 w-full">
                <div className="absolute top-0 left-0 w-20 h-1 bg-primary"></div>
              </div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-dark-blue">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </div>
              <h3 className="font-poppins text-lg font-semibold text-secondary mb-2">
                Automated Alerts
              </h3>
              <p className="text-gray-600 text-sm">
                Instant alerts on critical issues, reducing resolution times.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="feature-item bg-white rounded-xl shadow-lg p-6 h-full flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300" style={{ opacity: 0 }}>
              <div className="relative overflow-hidden mb-2 w-full">
                <div className="absolute top-0 left-0 w-20 h-1 bg-primary"></div>
              </div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-dark-blue">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="font-poppins text-lg font-semibold text-secondary mb-2">
                Patch Management
              </h3>
              <p className="text-gray-600 text-sm">
                Regular updates and patches to keep systems secure and current.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="feature-item bg-white rounded-xl shadow-lg p-6 h-full flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300" style={{ opacity: 0 }}>
              <div className="relative overflow-hidden mb-2 w-full">
                <div className="absolute top-0 left-0 w-20 h-1 bg-primary"></div>
              </div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-dark-blue">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="font-poppins text-lg font-semibold text-secondary mb-2">
                Customized Reporting
              </h3>
              <p className="text-gray-600 text-sm">
                Monthly or quarterly reports on system performance and incident resolution.
              </p>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            {/* Feature 5 */}
            <div className="feature-item bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 max-w-xs" style={{ opacity: 0 }}>
              <div className="relative overflow-hidden mb-2 w-full">
                <div className="absolute top-0 left-0 w-20 h-1 bg-primary"></div>
              </div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-dark-blue">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
              <h3 className="font-poppins text-lg font-semibold text-secondary mb-2">
                Backup & Recovery
              </h3>
              <p className="text-gray-600 text-sm">
                Reliable data protection and disaster recovery solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
