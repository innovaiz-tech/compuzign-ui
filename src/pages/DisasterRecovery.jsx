import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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
  HiPlay,
  HiDownload,
  HiArrowRight,
  HiStar,
  HiChartBar,
  HiUserGroup,
  HiAcademicCap
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';

/**
 * DisasterRecovery Component - Enhanced Version
 * 
 * A cutting-edge page showcasing CompuZign's DRaaS solutions with:
 * - Smooth scroll-triggered animations
 * - TierPoint-inspired layouts
 * - Modern UI patterns and micro-interactions
 * - Performance-optimized animations
 * - Intuitive user experience
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

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.6
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  // Data structures with enhanced content inspired by TierPoint
  const heroStats = useMemo(() => [
    { value: '$85K', label: 'Average cost of downtime per hour', icon: HiChartBar },
    { value: '71%', label: 'Companies hit by ransomware in 2023', icon: HiShieldCheck },
    { value: '65%', label: 'Data typically unrecoverable after attack', icon: HiDatabase }
  ], []);

  const draasCapabilities = useMemo(() => [
    {
      icon: HiDatabase,
      title: "Diverse Recovery Options",
      description: "Running Azure? IBM? VMware? Our team has the technology expertise to optimize your disaster recovery platform(s) of choice.",
      features: ["Multi-Platform Support", "Hybrid Cloud Ready", "Vendor Agnostic"]
    },
    {
      icon: HiClock,
      title: "Optimized Recovery Objectives",
      description: "Strong SLAs with RPO and RTO recommendations tailored to your unique business needs and environment.",
      features: ["Custom RPO/RTO", "SLA Guarantees", "Business-Aligned"]
    },
    {
      icon: HiAcademicCap,
      title: "Advanced Testing & Rehearsal",
      description: "Rigorous testing in advance and annual drills to ensure your disaster recovery plan works when you need it.",
      features: ["Annual DR Drills", "Automated Testing", "Detailed Runbooks"]
    },
    {
      icon: HiUserGroup,
      title: "Fully Managed or Self-Service",
      description: "End-to-end disaster recovery support or help implementing the solution - we tailor services to your needs.",
      features: ["Flexible Service Levels", "Expert Support", "Custom Solutions"]
    },
    {
      icon: HiSupport,
      title: "24x7 Support and Monitoring",
      description: "Security threats don't occur on schedule. Access 24/7 monitoring and support to react in real-time.",
      features: ["Real-time Monitoring", "Instant Response", "Global Coverage"]
    }
  ], []);

  const platformSolutions = useMemo(() => [
    {
      icon: HiDatabase,
      title: "Zerto IT Resiliency Platform",
      description: "Industry-leading continuous data protection with near real-time replication for hybrid and multi-cloud agility.",
      features: ["Low RTO/RPO", "Automated Failover", "Cloud Integration", "Real-time Replication"],
      badge: "Most Popular",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: HiCloud,
      title: "Azure Site Recovery",
      description: "Native Microsoft cloud disaster recovery solution providing replication for Azure VMs and on-premises systems.",
      features: ["Azure Native", "Cost Effective", "Hybrid Support", "Global Regions"],
      badge: "Microsoft Certified",
      color: "from-green-500 to-green-600"
    },
    {
      icon: HiServer,
      title: "vCloud Director Availability",
      description: "VMware-based disaster recovery for virtualized environments with native VMware integration.",
      features: ["VMware Native", "Automated Testing", "Multi-Tenant", "Enterprise Grade"],
      badge: "VMware Verified",
      color: "from-purple-500 to-purple-600"
    }
  ], []);

  const businessBenefits = useMemo(() => [
    {
      icon: HiTrendingUp,
      title: "Minimize Downtime & Maintain Business Continuity",
      description: "When every second counts, the right DRaaS provider ensures your IT infrastructure is tailored, tiered, and tested.",
      metric: "99.99% Uptime SLA"
    },
    {
      icon: HiShieldCheck,
      title: "Proactive Data Protection & Ransomware Recovery",
      description: "Zero-trust access controls, isolated backups, and real-time encryption detection protect your data proactively.",
      metric: "100% Recovery Rate"
    },
    {
      icon: HiGlobe,
      title: "Meet Regulatory & Compliance Requirements",
      description: "Ensure adherence to stringent regulatory requirements and easily identify, categorize critical compliance data.",
      metric: "Multi-Industry Certified"
    },
    {
      icon: HiCog,
      title: "100% Uptime to Maximize Infrastructure Performance",
      description: "Our data centers are built with physical redundancies to ensure disaster recovery tools work when needed most.",
      metric: "Zero Downtime Guarantee"
    }
  ], []);

  // Enhanced background animation component
  const AnimatedBackground = useCallback(() => {
    if (isMobile) return null;

    return (
      <div className="absolute inset-0 z-5" aria-hidden="true">
        {/* Floating Particles with improved animation */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary-bgYellow/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, -15, 0],
              y: [0, -20, 15, 0],
              opacity: [0.2, 0.6, 0.3, 0.2],
              scale: [0.5, 1, 0.7, 0.5]
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
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

  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-x-hidden">
      {/* Enhanced Hero Section */}
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

        {/* Hero Content with improved layout */}
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
              Enterprise-Grade Disaster Recovery
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
              <span className="text-primary-bgYellow font-semibold">Don't Gamble with Downtime</span> - Protect Your Business Today
            </motion.h2>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 lg:pt-8"
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
              <Button 
                variant="secondary" 
                size="lg"
                className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
                aria-label="Watch disaster recovery demo video - Learn about our DRaaS solutions through an interactive demonstration"
              >
                <HiPlay className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Hero Stats - TierPoint Inspired */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary-bgYellow mr-2" />
                    <span className="text-3xl font-bold text-white group-hover:text-primary-bgYellow transition-colors">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content with improved scroll animations */}
      <div className="relative bg-gradient-to-br from-white via-gray-50 to-white">
        {/* DRaaS Capabilities Section - TierPoint Style */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #ffda17 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)`
            }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  DRaaS Capabilities You Can{' '}
                  <span className="text-primary-bgYellow">Rely On</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  As a recognized leader in the disaster recovery market, CompuZign architects and engineers 
                  bring industry knowledge to your recovery planning across a wide spectrum.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid gap-8 lg:gap-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {draasCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon and Visual */}
                  <div className="flex-shrink-0 lg:w-1/3">
                    <div className="relative">
                      <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-primary-bgYellow to-yellow-500 rounded-3xl flex items-center justify-center shadow-2xl">
                        <capability.icon className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
                      </div>
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <HiCheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {capability.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {capability.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {capability.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1.5 bg-primary-bgYellow/10 text-primary-bgYellow rounded-full text-sm font-medium border border-primary-bgYellow/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Platform Solutions - Enhanced Cards */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-primary-bgLightBlack to-gray-800 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Choose the DRaaS Platform That{' '}
                  <span className="text-primary-bgYellow">Best Fits Your Needs</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  From Azure Site Recovery to Zerto, our team has the technology expertise to optimize 
                  your disaster recovery platform(s) of choice.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid gap-8 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {platformSolutions.map((platform, index) => (
                <motion.div
                  key={platform.title}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary-bgYellow/40 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${platform.color} text-white`}>
                      {platform.badge}
                    </span>
                  </div>

                  <div className="text-center space-y-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <platform.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-bgYellow transition-colors">
                        {platform.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {platform.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center gap-2">
                          <HiCheckCircle className="w-4 h-4 text-primary-bgYellow flex-shrink-0" />
                          <span className="text-sm text-gray-200">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full mt-6 border-primary-bgYellow/30 text-primary-bgYellow hover:bg-primary-bgYellow hover:text-black transition-all duration-300"
                    >
                      Learn More
                      <HiArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Business Benefits - TierPoint Style */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  End-to-End Disaster Recovery{' '}
                  <span className="text-primary-bgYellow">Expertise</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  Leverage our expertise and technology to protect your business against disruptions.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid gap-8 md:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {businessBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-bgYellow/30"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-bgYellow to-yellow-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-bgYellow transition-colors">
                          {benefit.title}
                        </h3>
                        <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          {benefit.metric}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-bgLightBlack via-gray-900 to-primary-bgLightBlack relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-bgYellow/5 via-transparent to-blue-500/5"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center"
            >
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 lg:p-16">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Recover Faster & Keep Operations Running
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Partner with an award-winning DRaaS provider. Get your CompuZign customized disaster recovery strategy today.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="group bg-primary-bgYellow hover:bg-yellow-400 text-black font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-bgYellow/25"
                    >
                      Get Your DRaaS Strategy
                      <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="lg"
                      className="group border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 rounded-xl transition-all duration-300 backdrop-blur-sm"
                    >
                      <HiDownload className="w-5 h-5 mr-2" />
                      Download Solutions Brief
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <HiStar className="w-5 h-5 text-yellow-400" />
                      <span className="text-white font-semibold">Award-Winning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiShieldCheck className="w-5 h-5 text-green-400" />
                      <span className="text-white font-semibold">Certified Experts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiSupport className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-semibold">24/7 Support</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
} 