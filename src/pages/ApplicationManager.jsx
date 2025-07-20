import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  HiDatabase, 
  HiArrowRight,
  HiPhone,
  HiServer,
  HiCloud,
  HiShieldCheck,
  HiCubeTransparent,
  HiCalculator,
  HiSparkles,
  HiClipboardCheck,
  HiCog,
  HiEye,
  HiLightningBolt,
  HiChartBar,
  HiCheckCircle,
  HiRefresh,
  HiGlobe,
  HiLockClosed,
  HiUserGroup,
  HiCode,
  HiTrendingUp,
  HiDocumentReport,
  HiSupport,
  HiChat,
  HiDesktopComputer,
  HiBeaker,
  HiCube,
  HiChip,
  HiCollection,
  HiFilter,
  HiKey,
  HiWifi,
  HiDeviceMobile
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import ScrollToTop from '../components/ui/ScrollToTop';
import React from 'react';
import bgImage from '../assets/bg-sv2.jpg';

/**
 * ApplicationManager Component - AI-Powered Data Curation
 * Turn Chaos into Clarity—Unlock Smarter Decisions with Intelligent Data Optimization
 */
export default function ApplicationManager() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeFramework, setActiveFramework] = useState(0);
  const { width } = useWindowSize();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % precisionEngineering.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate framework steps
  useEffect(() => {
    const frameworkInterval = setInterval(() => {
      setActiveFramework((prev) => (prev + 1) % dataExcellenceFramework.length);
    }, 4000);
    return () => clearInterval(frameworkInterval);
  }, []);

  // Key Capabilities
  const precisionEngineering = [
    {
      icon: HiFilter,
      title: "Data Cleansing",
      description: "Eliminate inconsistencies and errors to ensure reliable reporting and analytics.",
      color: "#facc15"
    },
    {
      icon: HiCollection,
      title: "Data Integration",
      description: "Merge diverse data sources into a single, coherent framework for deeper analysis.",
      color: "#60a5fa"
    },
    {
      icon: HiChip,
      title: "Data Enrichment",
      description: "Enhance data value by adding contextual layers for better usability.",
      color: "#34d399"
    }
  ];

  // Why Choose CompuZign data
  const whyChooseData = [
    {
      icon: HiSparkles,
      title: "Self-Learning Data Pipelines",
      description: "Automatically improve over time with machine learning algorithms."
    },
    {
      icon: HiShieldCheck,
      title: "Zero-Downtime Governance",
      description: "Always audit-compliant, always secure with enterprise-grade security."
    },
    {
      icon: HiLightningBolt,
      title: "Insights at Warp Speed",
      description: "From raw data to boardroom decisions in record time."
    },
    {
      icon: HiUserGroup,
      title: "Expert Support",
      description: "24/7 dedicated data specialists with AI and ML expertise."
    },
    {
      icon: HiTrendingUp,
      title: "Scalable Solutions",
      description: "Grow with your business needs without performance degradation."
    },
    {
      icon: HiGlobe,
      title: "Multi-Platform Support",
      description: "Works seamlessly across cloud, on-premise, and hybrid environments."
    }
  ];

  // Step-by-Step Data Curation Process
  const dataExcellenceFramework = [
    {
      step: "1",
      title: "Assessment & Strategy",
      description: "Audit your existing data and define a customized curation plan.",
      icon: HiClipboardCheck,
      color: "#facc15"
    },
    {
      step: "2",
      title: "Data Collection",
      description: "Gather data from multiple sources—databases, APIs, and external systems.",
      icon: HiCollection,
      color: "#60a5fa"
    },
    {
      step: "3",
      title: "Data Enhancement",
      description: "Apply AI to clean, standardize, and enrich data for precision and relevance.",
      icon: HiChip,
      color: "#34d399"
    },
    {
      step: "4",
      title: "Ongoing Optimization",
      description: "Monitor and refine data continuously to maintain accuracy and value.",
      icon: HiEye,
      color: "#f59e0b"
    }
  ];

  // Integration platforms
  const integrationPlatforms = [
    {
      icon: HiDatabase,
      title: "Modern & Legacy Databases",
      description: "SQL, NoSQL, Hadoop, Mainframe",
      color: "#facc15"
    },
    {
      icon: HiCode,
      title: "API Ecosystems",
      description: "Real-time sync with 500+ connectors",
      color: "#60a5fa"
    },
    {
      icon: HiCloud,
      title: "Multi-Cloud Environments",
      description: "AWS, Azure, GCP, hybrid setups",
      color: "#34d399"
    },
    {
      icon: HiDeviceMobile,
      title: "Edge & IoT Data Streams",
      description: "Process live sensor/device data",
      color: "#f59e0b"
    }
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.15 }
  };

  const bannerFadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,218,23,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,218,23,0.02)_50%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      <ScrollToTop />
      
      {/* 1. HERO BANNER SECTION - Following StorageMigration Template */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-purple-500/5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              <motion.div className="space-y-8" {...bannerFadeInUp}>
                
                {/* Enhanced Badge */}
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/15 to-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <HiChip className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">
                    AI Data Curation
                  </span>
                </motion.div>

                {/* Enhanced Main Heading */}
                <div className="space-y-4">
                  <motion.h1 
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    <span className="block text-white mb-2">Turn Raw Data into</span>
                    <span className="block text-yellow-400 mb-2 relative">
                      Strategic Insights
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                    <span className="block text-white text-2xl lg:text-3xl xl:text-4xl">with AI-Powered Curation</span>
                  </motion.h1>
                </div>

                {/* Subheading */}
                <motion.p 
                  className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  Turn Raw Data into Strategic Insights with AI-Powered Curation
                </motion.p>

                {/* CTA Button */}
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                >
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="group"
                  >
                    Get Started Today
                    <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
                
              </motion.div>
            </div>

            {/* Enhanced Right Visual - 5 columns */}
            <div className="lg:col-span-5">
              <motion.div 
                className="relative overflow-hidden hero-right-visual"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                
                {/* Enhanced Central Hub - Data Curation Theme */}
                <div className={`relative mx-auto flex items-center justify-center hero-central-hub ${
                  isMobile ? 'w-72 h-72' : isTablet ? 'w-80 h-80' : 'w-96 h-96'
                }`}>
                  
                  {/* Outer Data Flow Ring */}
                  {!isMobile && (
                    <motion.div
                      className={`absolute rounded-full border-2 border-yellow-400/20 ${
                        isTablet ? 'w-72 h-72' : 'w-80 h-80'
                      }`}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 25, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  )}

                  {/* Middle Processing Ring */}
                  {!isMobile && (
                    <motion.div
                      className={`absolute rounded-full border border-blue-400/20 ${
                        isTablet ? 'w-56 h-56' : 'w-64 h-64'
                      }`}
                      animate={{ 
                        rotate: [360, 0]
                      }}
                      transition={{ 
                        duration: 18, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  )}

                  {/* Central Data Hub */}
                  <motion.div
                    className={`relative bg-gradient-to-br from-yellow-400/25 via-yellow-400/15 to-transparent rounded-full flex items-center justify-center border-4 border-yellow-400/50 backdrop-blur-sm shadow-2xl ${
                      isMobile ? 'w-32 h-32' : isTablet ? 'w-36 h-36' : 'w-40 h-40'
                    }`}
                    animate={ !isMobile ? { 
                      scale: [1, 1.08, 1],
                      boxShadow: [
                        "0 0 20px rgba(250, 204, 21, 0.3)",
                        "0 0 40px rgba(250, 204, 21, 0.5)",
                        "0 0 20px rgba(250, 204, 21, 0.3)"
                      ]
                    } : {}}
                    transition={ !isMobile ? { 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    } : {}}
                  >
                    <HiChip className={`text-yellow-400 drop-shadow-lg ${
                      isMobile ? 'w-16 h-16' : isTablet ? 'w-20 h-20' : 'w-20 h-20'
                    }`} />
                  </motion.div>

                  {/* Enhanced Floating Data Processing Elements */}
                  {!isMobile && [
                    { icon: HiFilter, top: '8%', left: '18%', delay: 0, label: 'Clean' },
                    { icon: HiCollection, top: '15%', right: '12%', delay: 0.5, label: 'Integrate' },
                    { icon: HiChip, bottom: '15%', right: '18%', delay: 1, label: 'Enrich' },
                    { icon: HiEye, bottom: '8%', left: '12%', delay: 1.5, label: 'Monitor' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`absolute bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl flex items-center justify-center backdrop-blur-sm border border-yellow-400/20 shadow-lg group ${
                        isTablet ? 'w-12 h-12' : 'w-16 h-16'
                      }`}
                      style={{ [item.top ? 'top' : 'bottom']: item.top || item.bottom, [item.left ? 'left' : 'right']: item.left || item.right }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        y: [0, -10, 0]
                      }}
                      transition={{ 
                        opacity: { delay: 1.5 + item.delay, duration: 0.5 },
                        scale: { delay: 1.5 + item.delay, duration: 0.5 },
                        y: { 
                          delay: 2.5 + item.delay, 
                          duration: 2 + index * 0.3, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                      whileHover={{ scale: 1.1, borderColor: '#facc15' }}
                    >
                      <item.icon className={`text-yellow-400 ${
                        isTablet ? 'w-6 h-6' : 'w-8 h-8'
                      }`} />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}

                  {/* Data Processing Scanning Lines */}
                  {!isMobile && [...Array(isTablet ? 6 : 8)].map((_, i) => (
                    <motion.div
                      key={`data-line-${i}`}
                      className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"
                      style={{
                        width: isTablet ? '80px' : '100px',
                        top: `${25 + i * 6}%`,
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scaleX: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.25,
                        ease: "easeInOut"
                      }}
                    />
                  ))}

                  {/* Data Flow Sweep Effect */}
                  {!isMobile && (
                    <motion.div
                      className={`absolute rounded-full border-t-2 border-yellow-400/60 ${
                        isTablet ? 'w-28 h-28' : 'w-36 h-36'
                      }`}
                      style={{
                        clipPath: 'polygon(50% 50%, 50% 0%, 100% 50%)',
                      }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Data Engineering Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/5 via-transparent to-blue-500/5"></div>
          <motion.div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary-bgYellow/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-bgYellow/20 to-primary-bgYellow/10 border border-primary-bgYellow/40 rounded-full text-primary-bgYellow text-sm font-medium mb-6 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HiChip className="w-4 h-4 mr-2" />
              Data Processing Excellence
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-primary-bgYellow via-yellow-400 to-primary-bgYellow bg-clip-text text-transparent">
              Key Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential data processing capabilities that transform raw information into actionable insights
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {precisionEngineering.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative p-8 rounded-2xl bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${
                  index === activeFeature ? 'ring-2 ring-primary-bgYellow shadow-primary-bgYellow/20' : ''
                }`}
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-bgYellow/20 via-yellow-400/20 to-primary-bgYellow/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                      border: `1px solid ${feature.color}30`
                    }}
                  >
                    <feature.icon 
                      className="w-10 h-10"
                      style={{ color: feature.color }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom-Built for Your Business Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-bgYellow/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-bgYellow/20 to-primary-bgYellow/10 backdrop-blur-sm border border-primary-bgYellow/40 rounded-full text-primary-bgYellow text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HiSparkles className="w-4 h-4 mr-2" />
              Tailored Solutions
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-primary-bgYellow via-yellow-400 to-primary-bgYellow bg-clip-text text-transparent">
              Customized Solutions for Your Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Optimize Your Data Strategy with AI
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              Our AI-driven curation methods guarantee high-quality, efficiently integrated data across all platforms—helping you make smarter, data-backed decisions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: HiShieldCheck, text: "Enterprise-grade quality control", color: "#10b981" },
              { icon: HiCog, text: "Frictionless system integration", color: "#3b82f6" },
              { icon: HiTrendingUp, text: "Scalability for evolving data demands", color: "#f59e0b" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200/50 hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                whileHover={{ 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}40` }}
                >
                  <item.icon className="w-7 h-7 text-white" style={{ color: item.color }} />
                </div>
                <span className="text-gray-800 text-lg font-medium group-hover:text-purple-600 transition-colors duration-300">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why CompuZign Leads Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-pink-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 20, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-36 h-36 bg-purple-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Industry Leadership
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Your Path to Data Mastery
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Why Partner with CompZign for AI Data Curation?
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Unlock the true power of your data with Compuzign. Our AI solutions refine, enrich, and prepare your data for decisive action. From initial cleansing to real-time monitoring, we provide scalable, adaptive strategies that grow with your business. With Compuzign, you'll achieve faster, more precise insights—giving you a competitive edge. Let's collaborate to maximize your data's potential.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseData.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-pink-50 border border-pink-200 hover:border-purple-400/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-yellow-400/25">
                    <item.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Data Excellence Framework Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                Proven Methodology
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A Proven Framework for Data Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our Data Curation Workflow
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {dataExcellenceFramework.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 ${
                  index === activeFramework ? 'ring-2 ring-yellow-400 shadow-yellow-400/25' : ''
                }`}
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    style={{ 
                      backgroundColor: `${step.color}20`,
                      border: `2px solid ${step.color}40`
                    }}
                  >
                    <step.icon 
                      className="w-8 h-8"
                      style={{ color: step.color }}
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-yellow-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Platforms Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 right-1/4 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-green-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, 20, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                Seamless Integration
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unified Data Integration for Every Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Effortless Multi-Source Data Fusion
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mt-4">
              Powered by our AI platform, ZENfra, we seamlessly integrate data across:
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {integrationPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-yellow-400/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    style={{ 
                      backgroundColor: `${platform.color}20`,
                      border: `2px solid ${platform.color}40`
                    }}
                  >
                    <platform.icon 
                      className="w-8 h-8"
                      style={{ color: platform.color }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-yellow-600 transition-colors duration-300">
                    {platform.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {platform.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/50 via-transparent to-blue-600/50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HiSparkles className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join the data revolution and unlock the full potential of your business intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25 group"
              >
                Start Your Data Journey
                <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white/25"
              >
                Talk to Our Experts
                <HiPhone className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 