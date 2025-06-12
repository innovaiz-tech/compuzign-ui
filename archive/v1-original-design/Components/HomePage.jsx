import homepageBanner from "../assets/home-page-banner.png";
import customerImage from "../assets/Customers.png";
import TabsContainer from "./Tabs/Tabs";
import useScrollToTop from "../hooks/useScrollToTop";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { animate, inView, stagger, scroll } from "framer-motion";

export default function HomePage() {
  useScrollToTop();

  const bannerRef = useRef(null);
  const statsRef = useRef(null);
  const tabsRef = useRef(null);
  
  // Define motion animation variants for consistent use
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    }
  };

  useEffect(() => {
    // Banner animations
    if (bannerRef.current) {
      inView(bannerRef.current, () => {
        // Animate the subtitle
        animate(
          bannerRef.current.querySelector(".subtitle"),
          { opacity: [0, 1], y: [20, 0] },
          { delay: 0.2, duration: 0.6, easing: "ease-out" }
        );

        // Animate the heading
        animate(
          bannerRef.current.querySelector(".heading"),
          { opacity: [0, 1], y: [30, 0] },
          { delay: 0.4, duration: 0.6, easing: "ease-out" }
        );

        // Animate paragraphs
        animate(
          bannerRef.current.querySelectorAll(".paragraph"),
          { opacity: [0, 1], y: [20, 0] },
          {
            delay: stagger(0.2, { start: 0.6 }),
            duration: 0.6,
            easing: "ease-out",
          }
        );

        // Animate the button
        animate(
          bannerRef.current.querySelector(".cta-button"),
          { opacity: [0, 1], scale: [0.9, 1] },
          { delay: 1.2, duration: 0.5, easing: "ease-out" }
        );
      });
    }

    // Stats animation
    if (statsRef.current) {
      inView(statsRef.current, () => {
        animate(
          statsRef.current.querySelectorAll(".stat-item"),
          { opacity: [0, 1], y: [20, 0] },
          { delay: stagger(0.1), duration: 0.5, easing: "ease-out" }
        );
      });
    }

    // Tabs animations
    if (tabsRef.current) {
      inView(tabsRef.current, () => {
        animate(tabsRef.current.querySelector('h2'), { opacity: 1, y: 0 }, { duration: 0.5 });
        animate(tabsRef.current.querySelector('p'), { opacity: 1, y: 0 }, { delay: 0.2, duration: 0.5 });
        animate(tabsRef.current.querySelector('.label'), { opacity: 1, scale: 1 }, { delay: 0.3, duration: 0.5 });
        
        // Animate service cards if they exist
        const cards = tabsRef.current.querySelectorAll('.service-card');
        if (cards.length) {
          cards.forEach((card, index) => {
            animate(card, 
              { opacity: 1, y: 0, scale: 1 }, 
              { delay: 0.3 + (index * 0.1), duration: 0.5, ease: "easeOut" }
            );
          });
        }
      });

      // Smoother parallax effect
      scroll(
        animate(tabsRef.current, {
          y: [0, 20],
        }),
        { target: tabsRef.current, offset: ["start end", "end start"] }
      );
    }
  }, [tabsRef]);

  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-cover bg-[position:50%] pb-[80px] pt-[80px] text-text-light overflow-hidden"
        style={{ 
          backgroundImage: `url(${homepageBanner})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        ref={bannerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="m-auto w-full  max-w-[1200px] px-6 md:px-10 py-8 md:py-12">
          {/* Enhanced subtitle with gradient background */}
          <motion.div 
            className="subtitle inline-block bg-gradient-to-r from-primary/20 to-primary/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
          >
            <span className="text-primary tracking-[3px] uppercase text-xs font-bold">Your Premier Cloud Solutions Partner</span>
          </motion.div>
          
          {/* Improved heading with better spacing and text styling */}
          <motion.div 
            className="heading text-text-light font-bold text-5xl md:text-6xl leading-tight mb-8"
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <div className="mb-2">Transform Your</div>
            <div className="flex flex-wrap items-center gap-3">
              <span>Business</span>
              <span className="text-white/70 text-4xl md:text-5xl">with</span>
              <span className="text-primary font-semibold tracking-wider">
                Innovative Solutions
              </span>
            </div>
          </motion.div>
          
          {/* Paragraph with improved spacing and styling */}
          <motion.div 
            className="paragraph text-text-light/90 mt-8 mb-4 text-base leading-relaxed max-w-2xl font-light relative z-10"
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            As your reliable cloud solutions partner, we deliver cutting-edge technology services tailored to elevate your business.
          </motion.div>
          <motion.div 
            className="paragraph text-primary/90 mb-10 text-base leading-relaxed font-medium relative z-10"
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            See how we drive success in rapidly evolving digital landscapes.
          </motion.div>
          
          {/* Action elements with improved layout */}
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 relative z-10"
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="cta-button"
              whileHover={{ scale: 1.05, backgroundColor: "#6baab7" }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/services" className="block">
                <div className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 text-base">
                  Explore Our Services
                </div>
              </Link>
            </motion.div>
            <motion.div 
              className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <motion.img 
                src={customerImage} 
                alt="Happy customers" 
                className="h-10" 
                whileHover={{ rotate: 5 }}
              />
              <p className="text-primary font-medium text-base">1M+ Happy Customers</p>
            </motion.div>
          </motion.div>
          <div className="mt-16 mb-6 flex items-center justify-between gap-6 flex-wrap" ref={statsRef}>
            <motion.div 
              className="stat-item bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6 backdrop-blur-sm flex-1 min-w-[180px] border border-primary/10"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-primary text-3xl font-bold mb-2">
                99.99%
              </p>
              <p className="text-text-light/80 uppercase text-xs font-medium tracking-wider">
                Tech Customer Support
              </p>
            </motion.div>
            <motion.div 
              className="stat-item bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6 backdrop-blur-sm flex-1 min-w-[180px] border border-primary/10"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-primary text-3xl font-bold mb-2">
                99.99%
              </p>
              <p className="text-text-light/80 uppercase text-xs font-medium tracking-wider">
                Success Rate
              </p>
            </motion.div>
            <motion.div 
              className="stat-item bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6 backdrop-blur-sm flex-1 min-w-[180px] border border-primary/10"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-primary text-3xl font-bold mb-2">
                99.99%
              </p>
              <p className="text-text-light/80 uppercase text-xs font-medium tracking-wider">
                Customer Retention Rate
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div 
        ref={tabsRef}
        className="pt-16 bg-gradient-to-b from-[#392e53] to-[#392e5e] backdrop-blur-sm -mt-[10px] -mb-[40px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="mb-10 px-4 ">
            <motion.div 
              className="inline-block bg-gradient-to-r from-primary/20 to-primary/5 px-5 py-2 rounded-full mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-primary tracking-wider uppercase text-xs font-bold">Discover More</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-text-light mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our Expert <span className="text-primary">Services</span>
            </motion.h2>
            <motion.p 
              className="text-text-light/80 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Explore our comprehensive range of IT solutions designed to empower your business in the digital landscape.
            </motion.p>
          </div>
          <TabsContainer />
        </div>
      </motion.div>
    </motion.div>
  );
}