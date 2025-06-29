import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  HiShieldCheck, 
  HiClock,
  HiEye,
  HiGlobe,
  HiArrowRight,
  HiSparkles,
  HiPhone,
  HiLightningBolt,
  HiRefresh,
  HiClipboardCheck,
  HiExclamation,
  HiUserGroup,
  HiServer,
  HiLockClosed,
  HiCheckCircle,
  HiCog
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import IRRVisualComponent from '../components/ui/IRRVisualComponent';

/**
 * RansomwareResponse Component - Live IRR Services
 * Emergency response page for ransomware incidents - Fully Responsive
 */
export default function RansomwareResponse() {
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

  // Animation props
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

  // Data for sections
  const responseWorkflow = [
    {
      title: "Live Threat Detection",
      description: "Real-time monitoring and immediate threat identification",
      icon: HiEye,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Onboarding & Engagement",
      description: "Rapid team deployment and system access setup",
      icon: HiUserGroup,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Real-Time Mitigation",
      description: "Live intervention to stop threat actor progression",
      icon: HiLightningBolt,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Full System Triage",
      description: "Comprehensive analysis and damage assessment",
      icon: HiClipboardCheck,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Recovery Process",
      description: "Automated and manual system restoration",
      icon: HiRefresh,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Post-Incident Hardening",
      description: "Security reinforcement and future protection",
      icon: HiShieldCheck,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const tripleRTFeatures = [
    {
      title: "Real-time Response and Automated Recovery",
      subtitle: "Live Threat Intervention Engagement",
      description: "We intervene live to mitigate and eliminate threat actors. Advanced threat detection with real-time response and automated recovery mechanisms to empower businesses to defend against a wide array of cyber threats.",
      icon: HiLightningBolt
    },
    {
      title: "Comprehensive Visibility",
      subtitle: "Complete Environment Coverage",
      description: "Live IRR offers comprehensive visibility across endpoints, cloud environments, applications, and networks to ensure that no threat remains unnoticed.",
      icon: HiEye
    },
    {
      title: "CompuZign Rapid Real-time Response Team (Triple RT)",
      subtitle: "Global 24/7 Response",
      description: "Live and Onsite within 24hrs anywhere in the Globe in 6 languages: English, Spanish, French, Hindi/Tamil, Arabic, Swahili",
      icon: HiGlobe
    },
    {
      title: "Rapid Remediation and Service Restoration",
      subtitle: "PSaaS Organization",
      description: "CompuZign leverages its PSaaS (Professional Support-as-a-Service) Organization to fully recover your environment, strengthen security to prevent future attacks and ensure lasting protection",
      icon: HiCog
    }
  ];

  return (
    <div key="ransomware-response-page" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      
      {/* 1. HERO BANNER - Emergency Response Theme - Fully Responsive */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-28 overflow-hidden z-20">
        {/* Enhanced Background Elements with Red Alert Theme - Responsive */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-primary-bgYellow/10"></div>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 sm:w-1/3 sm:h-1/3 bg-gradient-to-br from-red-500/15 to-transparent rounded-full blur-2xl sm:blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 sm:w-1/4 sm:h-1/4 bg-gradient-to-tl from-primary-bgYellow/15 to-transparent rounded-full blur-2xl sm:blur-3xl"></div>
          
          {/* Cyber Grid Pattern - Responsive */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 212, 23, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 212, 23, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px sm:50px sm:50px'
            }}></div>
          </div>
        </div>
        
        {/* Responsive Container */}
        <div className="px-4 sm:px-6 lg:px-12 max-w-screen-xl mx-auto relative z-30">
          <div className="flex flex-col lg:flex-row lg:grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">
            
            {/* Left Content - Responsive Layout */}
            <div className="w-full lg:col-span-7 text-center lg:text-left">
              <motion.div className="space-y-6 sm:space-y-8 md:space-y-10" {...bannerFadeInUp}>
                
                {/* Emergency Alert Badge - Responsive */}
                <motion.div 
                  className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-red-500/20 to-red-600/10 border-2 border-red-500/40 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <HiExclamation className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mr-2 sm:mr-3 animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold text-red-400 uppercase tracking-wider">
                    Live IRR Services - Emergency Response
                  </span>
                </motion.div>

                {/* Enhanced Main Heading - Fully Responsive Typography */}
                <div className="space-y-4 sm:space-y-6">
                  <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-tight md:leading-[0.9] tracking-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    <span className="block text-white mb-1 sm:mb-2">Ransomware Incident</span>
                    <span className="block text-primary-bgYellow mb-1 sm:mb-2 relative">
                      Response Team
                      <motion.div
                        className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-red-500/60 via-primary-bgYellow/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                  </motion.h1>
                </div>

                {/* Subheading - Responsive Typography */}
                <motion.p 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed sm:leading-relaxed md:leading-relaxed max-w-none lg:max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  CompuZign provides <span className="text-primary-bgYellow font-semibold">Live IRR Teams</span> through our SaaS model or as stand-alone a-la-carte services for <span className="text-red-400 font-semibold">Rapid Real-time Response Team (Triple RT)</span>
                </motion.p>

                {/* Emergency CTAs - Responsive Button Layout */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 sm:gap-4 pt-4 sm:pt-6 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="group bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-600/25 animate-pulse w-full sm:w-auto"
                  >
                    <HiPhone className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                    +1 (904) 685-2138
                  </Button>
                  
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="group bg-primary-bgYellow hover:bg-yellow-400 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-bgYellow/25 w-full sm:w-auto"
                  >
                    Fill Response Form
                    <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                
              </motion.div>
            </div>

            {/* Enhanced Right Visual - Responsive Sizing */}
            <div className="w-full lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[420px] xl:w-[480px]">
                <IRRVisualComponent isMobile={isMobile} isTablet={isTablet} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY TRIPLE RT SECTION - Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-12 max-w-screen-xl mx-auto">
          
          {/* Section Header - Responsive Typography */}
          <motion.div className="text-center mb-10 sm:mb-12 md:mb-16" {...fadeInUp}>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight sm:leading-snug md:leading-normal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose <span className="text-yellow-400">Triple RT</span>?
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl md:text-xl text-gray-600 max-w-none sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed sm:leading-relaxed md:leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Rapid Real-time Response Team - Your first line of defense against ransomware attacks
            </motion.p>
          </motion.div>

          {/* Features Grid - Responsive Grid Layout */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {tripleRTFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 group"
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-bgYellow/20 to-primary-bgYellow/10 rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 group-hover:from-primary-bgYellow/30 group-hover:to-primary-bgYellow/20 transition-all duration-300">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-bgYellow" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight sm:leading-snug">{feature.title}</h3>
                    <p className="text-primary-bgYellow font-semibold text-sm mb-2 sm:mb-3 italic">{feature.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center sm:text-left">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. RESPONSE WORKFLOW SECTION - Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-12 max-w-screen-xl mx-auto">
          
          {/* Section Header - Responsive Typography */}
          <motion.div className="text-center mb-10 sm:mb-12 md:mb-16" {...fadeInUp}>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight sm:leading-snug md:leading-normal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="text-primary-bgYellow">Response Workflow</span>
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl md:text-xl text-gray-300 max-w-none sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed sm:leading-relaxed md:leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Six-step process for rapid ransomware incident response and recovery
            </motion.p>
          </motion.div>

          {/* Workflow Steps - Responsive Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {responseWorkflow.map((step, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-700/50 hover:border-primary-bgYellow/50 transition-all duration-300 group"
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Step Number - Responsive Sizing */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-7 h-7 sm:w-8 sm:h-8 bg-primary-bgYellow rounded-full flex items-center justify-center text-black font-bold text-xs sm:text-sm">
                  {index + 1}
                </div>
                
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 leading-tight sm:leading-snug">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. PSAAS SECTION - Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-bgYellow/10 to-white relative overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-12 max-w-screen-lg mx-auto">
          <motion.div 
            className="text-center bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-bgYellow to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <HiCog className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight sm:leading-snug">
              Powered by <span className="text-primary-bgYellow">PSaaS</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed max-w-none sm:max-w-2xl md:max-w-3xl mx-auto mb-6 sm:mb-8">
              <span className="font-semibold text-gray-900">Professional Support-as-a-Service (PSaaS)</span> - 
              Our comprehensive organization ensures rapid remediation, security reinforcement, and complete recovery. 
              We don't just stop the attack; we strengthen your defenses for the future.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <HiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-bgYellow flex-shrink-0" />
                <span className="font-medium">Rapid Remediation</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <HiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-bgYellow flex-shrink-0" />
                <span className="font-medium">Security Reinforcement</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <HiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-bgYellow flex-shrink-0" />
                <span className="font-medium">Complete Recovery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION - Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-red-900 via-gray-900 to-black relative overflow-hidden">
        {/* Background Animation - Responsive */}
        <div className="absolute inset-0">
          {[...Array(isMobile ? 4 : isTablet ? 6 : 8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-red-500/20 rounded-full"
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

        <div className="px-4 sm:px-6 lg:px-12 max-w-screen-lg mx-auto relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Emergency Badge - Responsive */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-red-600/20 border border-red-500/40 rounded-full text-red-400 text-xs sm:text-sm font-medium backdrop-blur-sm mb-6 sm:mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <HiClock className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
              Every Second Counts
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight sm:leading-tight md:leading-tight">
              Don't Wait.{' '}
              <span className="text-red-400">Act Now.</span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed sm:leading-relaxed md:leading-relaxed max-w-none sm:max-w-3xl md:max-w-4xl mx-auto">
              <span className="text-primary-bgYellow font-semibold">Activate Triple RT Now</span> — 
              Your defense team is just a click away. We're standing by 24/7 to protect your business.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12"
              whileHover={{ scale: 1.02 }}
            >
              <Button 
                variant="primary" 
                size="xl"
                className="group bg-red-500 hover:bg-red-600 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/25 animate-pulse w-full sm:w-auto"
              >
                <HiPhone className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                +1 (904) 685-2138
              </Button>

              <Button 
                variant="secondary" 
                size="xl"
                className="group bg-yellow-400 hover:bg-yellow-500 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-bgYellow/25 w-full sm:w-auto"
              >
                <span className="hidden sm:inline">Activate Your Triple RT Engagement Now</span>
                <span className="sm:hidden">Activate Triple RT Now</span>
                <HiArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust Indicators - Responsive Layout */}
            <motion.div 
              className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2">
                <HiGlobe className="w-4 h-4 sm:w-5 sm:h-5 text-primary-bgYellow flex-shrink-0" />
                <span>Global 24/7 Response</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <HiUserGroup className="w-4 h-4 sm:w-5 sm:h-5 text-primary-bgYellow flex-shrink-0" />
                <span>6 Languages Support</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <HiClock className="w-4 h-4 sm:w-5 sm:h-5 text-primary-bgYellow flex-shrink-0" />
                <span>Within 24 Hours</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}