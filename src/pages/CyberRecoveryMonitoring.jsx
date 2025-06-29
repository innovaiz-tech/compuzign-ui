import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  HiShieldCheck, 
  HiEye,
  HiLightningBolt,
  HiRefresh,
  HiServer,
  HiGlobe,
  HiArrowRight,
  HiPhone,
  HiClock,
  HiExclamation,
  HiClipboardCheck,
  HiLockClosed,
  HiCheckCircle,
  HiCog,
  HiDatabase,
  HiDocumentReport,
  HiCloud,
  HiUserGroup,
  HiSparkles,
  HiBell
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';

/**
 * CyberRecoveryMonitoring Component - 24/7 Threat Detection & Recovery
 * Modern landing page following CompuZign's branding
 */
export default function CyberRecoveryMonitoring() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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

  // Auto-rotate interactive features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
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
  const overviewFeatures = [
    {
      icon: HiEye,
      title: "Real-Time Monitoring",
      description: "24/7 surveillance of your entire digital infrastructure"
    },
    {
      icon: HiShieldCheck,
      title: "Threat Containment",
      description: "Immediate isolation and neutralization of cyber threats"
    },
    {
      icon: HiRefresh,
      title: "Accelerated Recovery",
      description: "Rapid restoration with minimal business disruption"
    }
  ];

  const serviceHighlights = [
    {
      icon: HiClock,
      title: "24/7 Threat Intelligence",
      description: "Continuous monitoring with AI-powered threat detection and real-time alerts for immediate response."
    },
    {
      icon: HiLightningBolt,
      title: "Incident Response",
      description: "Expert-led rapid response teams deploy within minutes to contain and eliminate cyber threats."
    },
    {
      icon: HiDatabase,
      title: "Secure Data Backups",
      description: "Automated, encrypted backups with instant recovery capabilities across cloud and on-premise systems."
    },
    {
      icon: HiDocumentReport,
      title: "Compliance Reporting",
      description: "Audit-ready documentation and compliance reports for regulatory requirements and insurance claims."
    }
  ];

  const interactiveFeatures = [
    {
      title: "Threat Detection",
      description: "Advanced AI algorithms continuously scan your network for suspicious activities, malware, and unauthorized access attempts.",
      icon: HiEye,
      color: "#f87171"
    },
    {
      title: "Data Isolation",
      description: "Instant quarantine of infected systems and data to prevent lateral movement and minimize damage spread.",
      icon: HiLockClosed,
      color: "#60a5fa"
    },
    {
      title: "Real-time Alerts",
      description: "Immediate notifications to your security team with detailed threat analysis and recommended actions.",
      icon: HiBell,
      color: "#34d399"
    },
    {
      title: "Recovery Readiness",
      description: "Pre-configured recovery protocols ensure rapid restoration of critical systems and data integrity.",
      icon: HiRefresh,
      color: "#fbbf24"
    }
  ];

  const whyChooseFeatures = [
    {
      title: "Enterprise-Grade Security",
      subtitle: "Military-Level Protection",
      description: "Bank-grade encryption, zero-trust architecture, and multi-layered defense systems protect your most critical assets.",
      icon: HiShieldCheck
    },
    {
      title: "Expert IR Teams On-Demand",
      subtitle: "Certified Security Professionals",
      description: "Access to CISSP-certified incident response specialists available 24/7 with average response time under 15 minutes.",
      icon: HiUserGroup
    },
    {
      title: "Audit-Ready Reporting",
      subtitle: "Compliance Made Simple",
      description: "Automated compliance reporting for SOC 2, HIPAA, PCI DSS, and other regulatory frameworks with detailed forensic analysis.",
      icon: HiDocumentReport
    },
    {
      title: "Cloud & On-Prem Support",
      subtitle: "Hybrid Infrastructure Coverage",
      description: "Seamless protection across AWS, Azure, Google Cloud, and on-premise environments with unified management dashboard.",
      icon: HiCloud
    }
  ];

  // Store the active icon component in a variable to avoid JSX syntax issues
  const ActiveIcon = interactiveFeatures[activeFeature].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      
      {/* 1. HERO BANNER SECTION */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-primary-bgYellow/10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary-bgYellow/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-3xl"></div>
          
          {/* Circuit Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <defs>
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="#fbbf24" strokeWidth="1"/>
                  <circle cx="10" cy="10" r="3" fill="#fbbf24"/>
                  <circle cx="90" cy="90" r="3" fill="#fbbf24"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)"/>
            </svg>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-12 max-w-screen-xl mx-auto relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white mb-2">Cyber Recovery &</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-bgYellow via-yellow-300 to-primary-bgYellow">
                  Monitoring
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                <span className="text-primary-bgYellow font-semibold">24/7 Threat Detection</span>, Response & Recovery
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-primary-bgYellow hover:bg-yellow-400 text-black px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-bgYellow/25"
                >
                  Contact Us
                  <HiArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Book a Consultation
                  <HiPhone className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="px-4 sm:px-6 lg:px-12 max-w-screen-xl mx-auto">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Safeguard Your Business from <span className="text-primary-bgYellow">Cyber Disruption</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive cyber recovery and monitoring platform provides proactive threat detection, 
              rapid incident response, and seamless data recovery to ensure your business stays protected 
              and operational against evolving cyber threats.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {overviewFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 }
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-bgYellow/20 to-primary-bgYellow/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary-bgYellow/30 group-hover:to-primary-bgYellow/20 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-bgYellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICE HIGHLIGHTS */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="px-4 sm:px-6 lg:px-12 max-w-screen-xl mx-auto">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-primary-bgYellow">Capabilities</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-primary-bgYellow/50 transition-all duration-300 group hover:-translate-y-2"
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 }
                }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-bgYellow to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-black" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. INTERACTIVE FEATURE SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="px-4 sm:px-6 lg:px-12 max-w-screen-xl mx-auto">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              How We <span className="text-primary-bgYellow">Protect</span> Your Business
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Interactive Circular Diagram */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto lg:mx-0">
              
              {/* Central Content */}
              <div className="absolute inset-8 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full flex flex-col items-center justify-center border-4 border-primary-bgYellow/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary-bgYellow/20 rounded-full flex items-center justify-center mb-4">
                  <ActiveIcon 
                    className="w-6 h-6" 
                    style={{ color: interactiveFeatures[activeFeature].color }}
                  />
                </div>
                <h3 className="text-lg font-bold text-white text-center mb-3">
                  {interactiveFeatures[activeFeature].title}
                </h3>
                <p className="text-sm text-gray-300 text-center leading-relaxed px-4">
                  {interactiveFeatures[activeFeature].description}
                </p>
              </div>

              {/* Surrounding Feature Buttons */}
              {interactiveFeatures.map((feature, index) => {
                const angle = (index * 90) - 45; // Position at 45, 135, 225, 315 degrees
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                const isActive = index === activeFeature;

                return (
                  <button
                    key={index}
                    className={`absolute w-16 h-16 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary-bgYellow/90 scale-110 shadow-lg' 
                        : 'bg-gray-700/70 hover:bg-gray-600/70 hover:scale-105'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`,
                      boxShadow: isActive ? `0 0 20px ${feature.color}60` : undefined
                    }}
                    onClick={() => setActiveFeature(index)}
                  >
                    <feature.icon 
                      className="w-7 h-7" 
                      style={{ color: isActive ? '#000' : feature.color }}
                    />
                  </button>
                );
              })}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {interactiveFeatures.map((_, index) => {
                  const angle = (index * 90) - 45;
                  const startRadius = 120;
                  const endRadius = 160;
                  const x1 = Math.cos((angle * Math.PI) / 180) * startRadius + 192;
                  const y1 = Math.sin((angle * Math.PI) / 180) * startRadius + 192;
                  const x2 = Math.cos((angle * Math.PI) / 180) * endRadius + 192;
                  const y2 = Math.sin((angle * Math.PI) / 180) * endRadius + 192;
                  
                  return (
                    <line
                      key={index}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={index === activeFeature ? '#fbbf24' : '#374151'}
                      strokeWidth="2"
                      opacity={index === activeFeature ? 0.8 : 0.3}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>
            </div>

            {/* Feature List */}
            <div className="flex-1 space-y-6">
              {interactiveFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    index === activeFeature 
                      ? 'bg-primary-bgYellow/10 border-2 border-primary-bgYellow/50' 
                      : 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50'
                  }`}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      index === activeFeature ? 'bg-primary-bgYellow/20' : 'bg-gray-700/50'
                    }`}>
                      <feature.icon 
                        className="w-5 h-5" 
                        style={{ color: feature.color }}
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE COMPUZIGN SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#121212] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, transparent 100%)'
          }}></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl" style={{
            background: 'radial-gradient(circle, rgba(255, 212, 23, 0.1) 0%, rgba(255, 212, 23, 0.05) 50%, transparent 100%)'
          }}></div>
        </div>

        <div className="px-4 sm:px-6 lg:px-12 max-w-screen-xl mx-auto relative z-10">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-bgYellow via-yellow-300 to-primary-bgYellow">CompuZign</span>?
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {whyChooseFeatures.map((feature, index) => {
              const iconColors = [
                { bg: 'bg-gradient-to-br from-green-400 to-green-500', icon: 'text-white' },
                { bg: 'bg-gradient-to-br from-blue-400 to-blue-500', icon: 'text-white' },
                { bg: 'bg-gradient-to-br from-purple-400 to-purple-500', icon: 'text-white' },
                { bg: 'bg-gradient-to-br from-yellow-400 to-yellow-500', icon: 'text-black' }
              ];
              const colorScheme = iconColors[index];
              
              return (
                <motion.div
                  key={index}
                  className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/20 hover:shadow-2xl hover:shadow-primary-bgYellow/10 transition-all duration-500 hover:-translate-y-2"
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-bgYellow/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${colorScheme.bg} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-8 h-8 ${colorScheme.icon}`} />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-yellow-500 font-semibold text-base mb-4 italic">
                      {feature.subtitle}
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-purple-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 border border-primary-bgYellow/20 rounded-full"
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Stay Ahead of <span className="text-primary-bgYellow">Cyber Threats</span>?
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Don't wait for an attack to happen. <span className="text-primary-bgYellow font-semibold">Protect your business today</span> with our comprehensive cyber recovery and monitoring solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                variant="primary" 
                size="xl"
                className="bg-primary-bgYellow hover:bg-yellow-400 text-black px-12 py-6 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-bgYellow/25 w-full sm:w-auto"
              >
                Talk to Our Experts
                <HiUserGroup className="w-6 h-6 ml-3" />
              </Button>

              <Button 
                variant="secondary" 
                size="xl"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-12 py-6 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Start Free Consultation
                <HiSparkles className="w-6 h-6 ml-3" />
              </Button>
            </div>

            {/* CompuZign Contact Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800/80 border border-gray-700/50 rounded-full text-gray-300 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <HiPhone className="w-5 h-5 text-primary-bgYellow" />
              <span className="font-medium">24/7 Support: +1 (904) 685-2138</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 