import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { 
  HiShieldCheck, 
  HiRefresh, 
  HiClock,
  HiDatabase,
  HiCloud,
  HiCheckCircle,
  HiLightningBolt,
  HiServer,
  HiGlobe,
  HiCog,
  HiTrendingUp,
  HiSupport,
  HiArrowRight,
  HiChartBar,
  HiUserGroup,
  HiAcademicCap,
  HiDesktopComputer,
  HiSparkles,
  HiBeaker,
  HiPhone
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';

// Custom hook for animated counters
const useAnimatedCounter = (end, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Extract numeric value from end string (e.g., "85K" -> 85, "71%" -> 71)
      const numericEnd = parseFloat(end.replace(/[^0-9.]/g, ''));
      const currentValue = Math.floor(progress * numericEnd);
      
      // Reconstruct the formatted string
      if (end.includes('K')) {
        setCount(currentValue + 'K');
      } else if (end.includes('%')) {
        setCount(currentValue + '%');
      } else {
        setCount(currentValue.toString());
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, delay, hasStarted]);

  const startAnimation = () => setHasStarted(true);

  return [count, startAnimation];
};

/**
 * DisasterRecovery Component - Complete Redesign
 * 
 * Following the exact content structure from disaster-recovery-business-data-continuity.md:
 * 1. Banner - Hero section with sophisticated animations
 * 2. Section 1 - Flip cards with 3 key points + paragraph
 * 3. Section 2 - Stats section + disaster recovery benefits
 * 4. Multi-Platform Support - AWS, Azure, GCP, On-Premise
 * 5. Talk to Us - CTA section
 */
export default function DisasterRecovery() {
  // Refs for scroll animations
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // State management for responsive behavior
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const { width } = useWindowSize();

  // Responsive breakpoint detection
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    checkDevice();
  }, [width]);

  // Transform values for parallax effects
  const heroY = useTransform(smoothProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  // Enhanced background animation component with sophisticated animations
  const AnimatedBackground = useCallback(() => {
    if (isMobile) return null;

    return (
      <div className="absolute inset-0 z-5" aria-hidden="true">
        {/* Floating Particles with improved animation */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-primary-bgYellow/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 60, 0],
              opacity: [0.3, 0.8, 0.5, 0.3],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Network Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary-bgYellow/30 to-transparent"
            style={{
              width: '200px',
              top: `${20 + i * 10}%`,
              left: '-200px',
            }}
            animate={{
              x: ['0vw', '120vw'],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Data Flow Circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute border border-primary-bgYellow/40 rounded-full"
            style={{
              width: '60px',
              height: '60px',
              right: '-60px',
              top: `${15 + i * 15}%`,
            }}
            animate={{
              x: ['-60px', '-120vw'],
              scale: [0.5, 1, 0.5],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          />
        ))}

        {/* Tech Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 218, 23, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 218, 23, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Professional Data Waves */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary-bgYellow/20 to-transparent"
            style={{
              top: `${25 + i * 20}%`,
              left: '-100%',
            }}
            animate={{
              x: ['0%', '200%'],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}

        {/* Hexagonal Tech Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute w-8 h-8 border border-primary-bgYellow/30"
            style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              right: `${10 + i * 20}%`,
              top: `${30 + i * 8}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}

        {/* Subtle Data Packet Squares */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`packet-${i}`}
            className="absolute bg-primary-bgYellow/40"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${-10 - Math.random() * 20}%`,
            }}
            animate={{
              y: ['0%', '120vh'],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl opacity-10"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: `radial-gradient(circle, ${i === 0 ? '#ffda17' : i === 1 ? '#3b82f6' : '#8b5cf6'} 0%, transparent 70%)`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 25}%`,
            }}
            animate={{
              x: [0, 50, -25, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.1, 0.9, 1]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }, [isMobile]);

  // Animated Counter Component
  const AnimatedStat = ({ stat, index }) => {
    const [hasTriggered, setHasTriggered] = useState(false);
    const [displayValue, setDisplayValue] = useState('0');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.5 });

    // Extract numeric value from stat.value
    const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
    const prefix = stat.value.includes('$') ? '$' : '';
    const suffix = stat.value.includes('%') ? '%' : '';

    useEffect(() => {
      if (isInView && !hasTriggered) {
        setHasTriggered(true);
        
        const duration = 2000;
        const startTime = Date.now();
        const startValue = 0;
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(startValue + (numericValue - startValue) * easeOutQuart);
          
          setDisplayValue(`${prefix}${currentValue.toLocaleString()}${suffix}`);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        setTimeout(() => animate(), index * 300);
      }
    }, [isInView, hasTriggered, numericValue, prefix, suffix, index]);

    return (
      <motion.div
        ref={ref}
        className="bg-gradient-to-br from-primary-bgLightBlack to-gray-800 rounded-2xl p-8 text-center shadow-2xl border border-primary-bgYellow/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ scale: 1.05, y: -10 }}
      >
        <div className="text-5xl font-bold mb-4 text-primary-bgYellow">
          {displayValue}
        </div>
        <p className="text-gray-300 leading-relaxed">{stat.label}</p>
      </motion.div>
    );
  };

  // Flip Card Component
  const FlipCard = ({ title, description, icon: Icon, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    return (
      <motion.div
        ref={ref}
        className="relative w-full h-80 cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front of card */}
        <motion.div 
          className={`absolute inset-0 w-full h-full bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-xl border-2 border-gray-100 hover:border-yellow-600/30 flex flex-col items-center justify-center p-8 group hover:shadow-2xl transition-all duration-300 overflow-hidden ${isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          animate={{ 
            rotateY: isFlipped ? -15 : 0,
            scale: isFlipped ? 0.95 : 1,
            opacity: isFlipped ? 0 : 1
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, #d97706 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)`
            }}></div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              className="w-20 h-20 bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 5 }}
            >
              <Icon className="w-10 h-10 text-white drop-shadow-sm" />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 text-center leading-tight group-hover:text-yellow-600 transition-colors duration-300">
              {title}
            </h3>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div 
          className={`absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-600 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 overflow-hidden ${isFlipped ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          animate={{ 
            rotateY: isFlipped ? 0 : 15,
            scale: isFlipped ? 1 : 0.95,
            opacity: isFlipped ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: isFlipped ? 0.1 : 0 }}
        >
          {/* Simple background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
                linear-gradient(-45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.1) 75%),
                linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.1) 75%)
              `,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
            }}></div>
          </div>
          
          <div className="relative z-30 flex flex-col items-center h-full justify-center text-center">
            <motion.div 
              className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-lg border-2 border-white/50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isFlipped ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ delay: isFlipped ? 0.3 : 0, duration: 0.3 }}
            >
              <Icon className="w-8 h-8 text-yellow-600 drop-shadow-sm" />
            </motion.div>
            <motion.p 
              className="text-center text-white font-bold leading-relaxed text-base max-w-xs drop-shadow-lg"
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.3)' 
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: isFlipped ? 0.4 : 0, duration: 0.3 }}
            >
              {description}
            </motion.p>
          </div>
          
          {/* Decorative corner accents */}
          <div className="absolute top-4 right-4">
            <div className="w-3 h-3 bg-white/40 rounded-full shadow-lg"></div>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="w-2 h-2 bg-white/30 rounded-full shadow-md"></div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Section 1 Data - From MD file
  const section1Cards = [
    {
      title: "Stay ahead of disasters",
      description: "Safeguard your business with tailored disaster recovery strategies designed to protect against natural and digital threats",
      icon: HiShieldCheck
    },
    {
      title: "Simplify complex recovery",
      description: "Let CompuZign handle the intricate details of recovery so your team can stay focused on driving business growth without disruption",
      icon: HiCog
    },
    {
      title: "Confidence through testing",
      description: "Gain peace of mind with regularly tested and refined DR plans that ensure you're prepared for the unexpected",
      icon: HiBeaker
    }
  ];

  // Stats data - From TierPoint reference
  const statsData = [
    { value: '$85,000', label: 'Per hour is the average cost of downtime.', icon: HiChartBar },
    { value: '73%', label: 'Of companies were hit with a ransomware attack in 2023.', icon: HiShieldCheck },
    { value: '33%', label: 'Of data is typically unrecoverable after a ransomware attack.', icon: HiDatabase }
  ];

  // Benefits data - From MD file
  const benefitsData = [
    {
      title: "Fully managed services",
      description: "Provided by our disaster recovery service experts",
      icon: HiSupport
    },
    {
      title: "Global SaaS offering",
      description: "Offered as part of our comprehensive Global SaaS platform",
      icon: HiGlobe
    },
    {
      title: "Multi-environment support",
      description: "Built for cloud, on-premises, and hybrid IT environments",
      icon: HiCloud
    },
    {
      title: "Cyber incident recovery",
      description: "Faster and more successful recoveries from cyber incidents and ransomware",
      icon: HiLightningBolt
    }
  ];



  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-x-hidden">
      {/* 1. BANNER SECTION */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Background with enhanced gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-bgLightBlack to-gray-800"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        <AnimatedBackground />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-bgYellow/10 border border-primary-bgYellow/30 rounded-full text-primary-bgYellow text-sm font-medium backdrop-blur-sm"
            >
              <HiShieldCheck className="w-4 h-4" />
              Disaster Recovery-as-a-Service (DRaaS) Solution
            </motion.div>

            <h1 className="hero-title font-bold text-white leading-tight text-center">
              Disaster Recovery,{' '}
              <span className="text-primary-bgYellow text-highlight">Business Data Continuity</span>
            </h1>
            
            <motion.h2 
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Rapid, secure recovery of your data, applications, and systems with DRaaS
              <br className="hidden sm:block" />
              A flexible and reliable cloud-based disaster-recovery-as-a-service solution custom fit 
              <br className="hidden sm:block" />
              for expedited recovery of your business-critical environment.
            </motion.h2>

            {/* Enhanced CTA Button */}
            <motion.div 
              className="flex justify-center items-center pt-6 lg:pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button 
                variant="primary" 
                size="lg"
                className="group bg-primary-bgYellow text-black hover:bg-yellow-400 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-bgYellow/25"
                aria-label="Get your customized DRaaS strategy consultation"
              >
                Get Your DRaaS Strategy
                <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. SECTION 1 - FLIP CARDS */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ffda17 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              DRaaS Capabilities You Can{' '}
              <span className="text-primary-bgYellow">Rely On</span>
            </h2>
          </motion.div>

          {/* Flip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {section1Cards.map((card, index) => (
              <FlipCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.icon}
                index={index}
              />
            ))}
          </div>

          {/* Enhanced Paragraph Content */}
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main content card */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl border border-gray-200 p-8 lg:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-bgYellow/10 to-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-primary-bgYellow/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                {/* Section badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-bgYellow/10 border border-primary-bgYellow/30 rounded-full text-primary-bgYellow text-sm font-semibold mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <HiDatabase className="w-4 h-4" />
                  CompuZign DRaaS Platform
                </motion.div>

                {/* Main content */}
                <div className="space-y-6">
                  <motion.p 
                    className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Your business-critical data, applications, and systems will be{' '}
                    <span className="text-primary-bgYellow font-bold">fully managed</span> across{' '}
                    <span className="font-semibold text-gray-900">on-premises, colocation, and cloud environments</span>{' '}
                    with CompuZign DRaaS.
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-primary-bgYellow/5 rounded-2xl border-l-4 border-primary-bgYellow"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="w-12 h-12 bg-primary-bgYellow rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <HiLightningBolt className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Powered by Zerto's IT Resiliency Platform</h4>
                      <p className="text-gray-700 leading-relaxed">
                        DRaaS supports the requirements of your IT environment with{' '}
                        <span className="font-semibold text-blue-600">low recovery time objectives (RTOs)</span> and{' '}
                        <span className="font-semibold text-blue-600">recovery point objectives (RPOs)</span>.
                      </p>
                    </div>
                  </motion.div>

                  {/* Key benefits highlights */}
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    {[
                      { icon: HiShieldCheck, text: "Enterprise-Grade Security", color: "from-green-500 to-green-600" },
                      { icon: HiClock, text: "Minimal Recovery Time", color: "from-blue-500 to-blue-600" },
                      { icon: HiGlobe, text: "Multi-Cloud Support", color: "from-purple-500 to-purple-600" }
                    ].map((item, index) => (
                      <motion.div
                        key={item.text}
                        className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -2 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-800">{item.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SECTION 2 - STATS + BENEFITS */}
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-bgLightBlack to-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Do You Need DRaaS?
            </h2>
            <p className="text-2xl text-primary-bgYellow font-semibold">
              Don't Gamble with Downtime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statsData.map((stat, index) => (
              <AnimatedStat key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-600 mb-4">
              CompuZign DRaaS experts assesses your IT environment and designs a disaster recovery and availability 
              solution that best suits your business, technical, and operational needs.
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Disaster Recovery <span className="text-primary-bgYellow">Benefits</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-primary-bgYellow rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 4. TALK TO US SECTION */}
      <section className="py-20 bg-gradient-to-br from-primary-bgLightBlack to-gray-800 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-primary-bgYellow/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-bgYellow/10 border border-primary-bgYellow/30 rounded-full text-primary-bgYellow text-sm font-medium backdrop-blur-sm mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <HiSparkles className="w-4 h-4" />
              Talk to Us
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Protect{' '}
              <span className="text-primary-bgYellow">Your Business?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Don't wait for disaster to strike. Let our experts design a comprehensive disaster recovery 
              strategy tailored specifically for your business needs.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              whileHover={{ scale: 1.02 }}
            >
              <Button 
                variant="primary" 
                size="lg"
                className="group bg-primary-bgYellow text-black hover:bg-yellow-400 px-10 py-5 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-bgYellow/25"
              >
                Get Your Customized DRaaS Strategy
                <HiArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>

              <Button 
                variant="secondary" 
                size="lg"
                className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white px-10 py-5 text-xl font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                <HiPhone className="w-6 h-6 mr-3" />
                Schedule a Call
              </Button>
            </motion.div>

            <motion.div 
              className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-primary-bgYellow" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-primary-bgYellow" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-primary-bgYellow" />
                <span>Proven Expertise</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 