import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  HiChartBar, 
  HiCog,
  HiLightningBolt,
  HiTrendingUp,
  HiDatabase,
  HiCloud,
  HiRefresh,
  HiShieldCheck,
  HiArrowRight,
  HiPhone,
  HiSparkles,
  HiCube,
  HiGlobe,
  HiAcademicCap,
  HiBeaker,
  HiDesktopComputer,
  HiSupport,
  HiDocumentReport,
  HiUserGroup
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import AnimatedStat from '../components/ui/AnimatedStat';
import CSSFlipCard from '../components/ui/CSSFlipCard';
import ScrollToTop from '../components/ui/ScrollToTop';

/**
 * DataDrivenConsulting Component - Data-Driven Consulting Services
 * Following the uniform layout structure from other service pages
 */
export default function DataDrivenConsulting() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    checkDevice();
  }, [width]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto';
  }, []);

  // Animation props - Banner animations are immediate, others use viewport
  const bannerFadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { 
      duration: 0.6,
      staggerChildren: 0.1
    }
  };

  // Data for the service capabilities
  const serviceCapabilities = [
    {
      title: "Strategic Digital Transformation",
      description: "Comprehensive digital transformation strategies anchored in data insights, enabling organizations to modernize legacy systems and optimize infrastructure for future-ready operations.",
      icon: HiTrendingUp
    },
    {
      title: "Infrastructure Optimization",
      description: "Data-driven infrastructure assessments and optimization strategies that reduce costs, improve performance, and scale automation across your entire IT ecosystem.",
      icon: HiDesktopComputer
    },
    {
      title: "Legacy System Modernization",
      description: "Strategic modernization of legacy systems using data analytics to identify optimization opportunities and implement seamless transitions to modern architectures.",
      icon: HiRefresh
    }
  ];

  // Statistics data
  const statsData = [
    {
      value: "95%",
      label: "Cost Reduction Achieved - Average cost reduction through strategic optimization"
    },
    {
      value: "3x",
      label: "Performance Acceleration - Average performance improvement across client systems"
    },
    {
      value: "10x",
      label: "Value Multiplier - Exponential value unlocked through data-driven strategies"
    },
    {
      value: "99.9%",
      label: "Success Rate - Proven track record of transformative outcomes"
    }
  ];

  // Benefits data
  const benefitsData = [
    {
      title: "Visionary Strategy",
      description: "Strategic execution that shapes the future of your industry through data-driven insights",
      icon: HiAcademicCap
    },
    {
      title: "Technical Excellence",
      description: "Unparalleled technical expertise in infrastructure optimization and system modernization",
      icon: HiBeaker
    },
    {
      title: "Customized Solutions",
      description: "Tailored solutions that fit your unique business requirements and organizational goals",
      icon: HiCube
    },
    {
      title: "Transformative Outcomes",
      description: "Proven results that deliver cost reduction, performance acceleration, and exponential value",
      icon: HiSparkles
    }
  ];

  return (
    <div key="data-driven-consulting-page" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      
      {/* 1. HERO BANNER SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden z-20">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-bgYellow/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              <motion.div className="space-y-10" {...bannerFadeInUp}>
                
                {/* Enhanced Badge */}
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-bgYellow/15 to-primary-bgYellow/10 border border-primary-bgYellow/30 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <HiChartBar className="w-5 h-5 text-primary-bgYellow mr-3" />
                  <span className="text-sm font-semibold text-primary-bgYellow uppercase tracking-wider">
                    Data-Driven Consulting Services
                  </span>
                </motion.div>

                {/* Enhanced Main Heading */}
                <div className="space-y-6">
                  <motion.h1 
                    className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    <span className="block text-primary-bgYellow mb-2 relative">
                      Data-Driven
                      <motion.div
                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-bgYellow/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                    <span className="block text-white">Consulting</span>
                  </motion.h1>
                </div>

                {/* Subheading */}
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  <span className="text-white font-semibold text-2xl lg:text-3xl block mb-4">
                    Empowering Decisions with Actionable Insights
                  </span>
                  We transform raw data into strategic advantages, enabling organizations to make informed decisions that drive growth and innovation.
                </motion.p>

                {/* Key Features */}
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  {[
                    { name: "Strategic Innovation", icon: HiLightningBolt },
                    { name: "Data-Driven", icon: HiDatabase },
                    { name: "Global Excellence", icon: HiGlobe }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg backdrop-blur-sm"
                      whileHover={{ scale: 1.05, borderColor: '#ffda17' }}
                      transition={{ duration: 0.2 }}
                    >
                      <feature.icon className="w-4 h-4 text-primary-bgYellow mr-2" />
                      <span className="text-primary-bgYellow font-bold text-sm">{feature.name}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                >
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="group"
                  >
                    Start Your Transformation
                    <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                  
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="group"
                  >
                    Speak to an Expert
                    <HiPhone className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                
              </motion.div>
            </div>

            {/* Enhanced Right Visual - 5 columns */}
            <div className="lg:col-span-5">
              <motion.div 
                className="relative overflow-hidden hero-right-visual h-[500px] lg:h-[600px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                
                {/* Background Glow Effects */}
                <div className="absolute inset-0">
                  <motion.div 
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-bgYellow/20 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.4, 0.2, 0.4]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </div>

                {/* Enhanced Central Hub */}
                <div className={`relative mx-auto flex items-center justify-center hero-central-hub ${
                  isMobile ? 'w-72 h-72 mt-16' : isTablet ? 'w-80 h-80 mt-20' : 'w-96 h-96 mt-24'
                }`}>
                  
                  {/* Outer Rotating Ring */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-dashed border-primary-bgYellow/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Middle Pulse Ring */}
                  <motion.div 
                    className="absolute inset-4 border border-primary-bgYellow/20 rounded-full"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Central Data Hub */}
                  <motion.div 
                    className="absolute inset-8 bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-black/95 rounded-full flex flex-col items-center justify-center border-4 border-primary-bgYellow/60 backdrop-blur-sm shadow-2xl"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(255, 218, 23, 0.3)",
                        "0 0 40px rgba(255, 218, 23, 0.5)",
                        "0 0 20px rgba(255, 218, 23, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-primary-bgYellow/30 to-primary-bgYellow/10 rounded-full flex items-center justify-center mb-4 border-2 border-primary-bgYellow/40"
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <HiChartBar className="w-8 h-8 text-primary-bgYellow" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white text-center mb-3">
                      Data Intelligence
                    </h3>
                    <p className="text-sm text-gray-300 text-center px-4 leading-relaxed">
                      Strategic insights driving transformative decisions
                    </p>
                  </motion.div>

                  {/* Enhanced Orbiting Elements */}
                  <div className="absolute inset-0 rounded-full">
                    {[
                      { icon: HiDatabase, angle: 0, color: "#3b82f6", label: "Analytics" },
                      { icon: HiCloud, angle: 72, color: "#10b981", label: "Cloud" },
                      { icon: HiCog, angle: 144, color: "#f59e0b", label: "Automation" },
                      { icon: HiLightningBolt, angle: 216, color: "#ef4444", label: "Innovation" },
                      { icon: HiTrendingUp, angle: 288, color: "#8b5cf6", label: "Growth" }
                    ].map((item, index) => {
                      const radius = isMobile ? 120 : 140;
                      const angleRad = (item.angle * Math.PI) / 180;
                      const x = Math.cos(angleRad) * radius;
                      const y = Math.sin(angleRad) * radius;
                      
                      return (
                        <motion.div
                          key={index}
                          className="absolute group"
                          style={{
                            top: '50%',
                            left: '50%',
                            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                          }}
                          animate={{
                            transform: [
                              `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                              `translate(-50%, -50%) translate(${Math.cos(angleRad + Math.PI * 2) * radius}px, ${Math.sin(angleRad + Math.PI * 2) * radius}px)`
                            ]
                          }}
                          transition={{
                            duration: 25 + index * 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                        <motion.div
                          className="w-14 h-14 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full border-2 flex items-center justify-center backdrop-blur-sm shadow-lg relative overflow-hidden"
                          style={{
                            borderColor: item.color + '40'
                          }}
                          whileHover={{ scale: 1.2, zIndex: 10 }}
                          animate={{
                            boxShadow: [
                              `0 0 10px ${item.color}30`,
                              `0 0 20px ${item.color}50`,
                              `0 0 10px ${item.color}30`
                            ]
                          }}
                          transition={{
                            boxShadow: {
                              duration: 2 + index * 0.3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          {/* Animated background */}
                          <motion.div
                            className="absolute inset-0 rounded-full opacity-20"
                            style={{ backgroundColor: item.color }}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.4
                            }}
                          />
                          
                          <item.icon className="w-7 h-7 relative z-10" style={{ color: item.color }} />
                          
                          {/* Tooltip */}
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900/95 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-gray-700/50">
                            {item.label}
                          </div>
                                                 </motion.div>
                       </motion.div>
                      );
                    })}
                   </div>

                  {/* Enhanced Connection Lines with Animation */}
                  <div className="absolute inset-0 rounded-full">
                    {[0, 72, 144, 216, 288].map((angle, index) => (
                      <motion.div
                        key={index}
                        className="absolute origin-top"
                        style={{
                          top: '50%',
                          left: '50%',
                          height: `${isMobile ? '120px' : '140px'}`,
                          transform: `translate(-50%, -50%) rotate(${angle}deg)`
                        }}
                      >
                        <motion.div
                          className="w-0.5 h-full bg-gradient-to-t from-primary-bgYellow/60 via-primary-bgYellow/30 to-transparent"
                          animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scaleY: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating Data Points */}
                  {[...Array(6)].map((_, index) => (
                    <motion.div
                      key={`floating-${index}`}
                      className="absolute w-2 h-2 bg-primary-bgYellow/60 rounded-full"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.4, 1, 0.4],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.8
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR APPROACH SECTION */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              {...fadeInUp}
            >
              <div className="space-y-6">
                <motion.div 
                  className="inline-flex items-center px-4 py-2 bg-primary-bgYellow/10 border border-primary-bgYellow/30 rounded-full"
                  {...fadeInUp}
                >
                  <HiLightningBolt className="w-4 h-4 text-primary-bgYellow mr-2" />
                  <span className="text-sm font-semibold text-primary-bgYellow uppercase tracking-wider">
                    Our Approach
                  </span>
                </motion.div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Redefining <span className="text-primary-bgYellow">Digital Transformation</span>
                </h2>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                At CompuZign, we redefine digital transformation by anchoring it in <span className="text-primary-bgYellow font-semibold">data, insight, and strategic execution</span>. Our Data-Driven Consulting services empower organizations to not just navigate change but to <span className="text-white font-semibold">shape the future of their industries</span>.
              </p>

              <motion.div 
                className="flex flex-wrap gap-4 pt-4"
                {...fadeInUp}
              >
                {[
                  { name: "Data-Anchored", icon: HiDatabase },
                  { name: "Strategic Insight", icon: HiLightningBolt },
                  { name: "Future-Focused", icon: HiTrendingUp }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.05, borderColor: '#ffda17' }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="w-4 h-4 text-primary-bgYellow mr-2" />
                    <span className="text-primary-bgYellow font-semibold text-sm">{feature.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div 
              className="relative"
              {...fadeInUp}
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
                
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/5 via-transparent to-blue-500/5 rounded-3xl"></div>
                
                {/* Content grid */}
                <div className="relative space-y-8">
                  {[
                    { icon: HiChartBar, title: "Data Intelligence", desc: "Transform data into strategic insights" },
                    { icon: HiCog, title: "Strategic Execution", desc: "Turn insights into actionable outcomes" },
                    { icon: HiGlobe, title: "Industry Leadership", desc: "Shape the future of your sector" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <div className="w-12 h-12 bg-primary-bgYellow/10 rounded-xl flex items-center justify-center border border-primary-bgYellow/30">
                        <item.icon className="w-6 h-6 text-primary-bgYellow" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR SOLUTIONS SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900/50 via-gray-800/50 to-black/50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Visual */}
            <motion.div 
              className="relative order-2 lg:order-1"
              {...fadeInUp}
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: HiDesktopComputer, title: "Infrastructure Optimization", color: "#3b82f6" },
                  { icon: HiRefresh, title: "Legacy Modernization", color: "#10b981" },
                  { icon: HiCog, title: "Automation Scaling", color: "#f59e0b" },
                  { icon: HiTrendingUp, title: "Performance Acceleration", color: "#ef4444" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-6 border border-gray-700/50 text-center backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: item.color + '50' }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ backgroundColor: item.color + '20', border: `2px solid ${item.color}40` }}>
                      <item.icon className="w-8 h-8" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-white font-semibold text-sm leading-tight">{item.title}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              className="space-y-8 order-1 lg:order-2"
              {...fadeInUp}
            >
              <div className="space-y-6">
                <motion.div 
                  className="inline-flex items-center px-4 py-2 bg-primary-bgYellow/10 border border-primary-bgYellow/30 rounded-full"
                  {...fadeInUp}
                >
                  <HiBeaker className="w-4 h-4 text-primary-bgYellow mr-2" />
                  <span className="text-sm font-semibold text-primary-bgYellow uppercase tracking-wider">
                    Our Solutions
                  </span>
                </motion.div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  <span className="text-primary-bgYellow">Transformative</span> Business Outcomes
                </h2>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                By blending <span className="text-primary-bgYellow font-semibold">visionary strategy with unparalleled technical expertise</span>, we deliver customized solutions that optimize infrastructure, modernize legacy systems, and scale automation to achieve transformative business outcomes.
              </p>

              {/* Key Benefits */}
              <motion.div 
                className="space-y-4"
                {...fadeInUp}
              >
                {[
                  { icon: HiTrendingUp, title: "Reducing Costs", desc: "Strategic optimization that cuts operational expenses" },
                  { icon: HiLightningBolt, title: "Accelerating Performance", desc: "Enhanced system efficiency and speed" },
                  { icon: HiSparkles, title: "Unlocking Exponential Value", desc: "Maximize ROI through data-driven insights" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="w-8 h-8 bg-primary-bgYellow/10 rounded-lg flex items-center justify-center border border-primary-bgYellow/30 mt-1">
                      <benefit.icon className="w-4 h-4 text-primary-bgYellow" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* 4. BENEFITS SECTION */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-primary-bgYellow">CompuZign</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Blending visionary strategy with unparalleled technical expertise to deliver transformative business outcomes.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            {...staggerChildren}
          >
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 text-center hover:border-primary-bgYellow/50 transition-all duration-300"
                {...fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-primary-bgYellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-bgYellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-bgYellow/10 via-transparent to-blue-500/10 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Ready to Transform Your <span className="text-primary-bgYellow">Business?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed">
              Let's discuss how our data-driven consulting services can unlock exponential value for your organization through strategic innovation and technical excellence.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                variant="primary" 
                size="xl"
                className="group"
              >
                Schedule a Strategy Session
                <HiArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                variant="secondary" 
                size="xl"
                className="group"
              >
                Download Our Consulting Guide
                <HiDocumentReport className="ml-2 w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Component */}
      <ScrollToTop />
    </div>
  );
} 