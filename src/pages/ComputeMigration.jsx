import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  HiServer, 
  HiCloud,
  HiCog,
  HiCheckCircle,
  HiLightningBolt,
  HiDatabase,
  HiArrowRight,
  HiSparkles,
  HiPhone,
  HiUsers,
  HiClipboardCheck,
  HiRefresh,
  HiEye,
  HiShieldCheck,
  HiChartBar
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import CSSFlipCard from '../components/ui/CSSFlipCard';
import ScrollToTop from '../components/ui/ScrollToTop';

// Import compute platform assets
import awsLogo from '../assets/compute-assets/aws-2.svg';
import azureLogo from '../assets/compute-assets/azure-2.svg';
import gcpLogo from '../assets/compute-assets/google-cloud-1.svg';
import oracleLogo from '../assets/compute-assets/oracle-1.svg';
import vmwareLogo from '../assets/compute-assets/vmware-1.svg';
import ibmLogo from '../assets/compute-assets/ibm-cloud-1.svg';
import nutanixLogo from '../assets/compute-assets/nutanix-logo.svg';
import proxmoxLogo from '../assets/compute-assets/proxmox.svg';

/**
 * ComputeMigration Component - Following StorageMigration Template
 * Based on VTG's compute-migration page structure with exact content from compute-migration.md
 */

const ComputeMigration = () => {
  const { width } = useWindowSize();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  // Migration phases data from compute-migration.md - EXACT CONTENT
  const migrationPhases = [
    {
      phase: "1",
      title: "Engagement",
      icon: HiUsers,
      description: "CompuZign PSaaS is Engaged Team (Professional Support-as-a-Services Organization)",
      details: "Project Managers | Migration Architects | Migration Engineers | and other Subject Matter Experts"
    },
    {
      phase: "2", 
      title: "Planning and Assessment",
      icon: HiClipboardCheck,
      description: "Assess current environments and develop a detailed migration flowchart, steps and project planning.",
      details: "Develop scope, Perform Risk Assessment, Create Migration Strategy"
    },
    {
      phase: "3",
      title: "Design, Prepare and Develop Migration Runbook",
      icon: HiCog,
      description: "Chose Migration methods and tools. Set up target platforms, perform pre-migration tests, and ensure compatibility.",
      details: ""
    },
    {
      phase: "4",
      title: "Migration",
      icon: HiServer,
      description: "Ensure full backups are available before starting",
      details: "Execute migration with tools that minimize downtime and ensure data integrity. Perform incremental syncs if doing phased cutover and look out for IOPS, latency, bandwidth, Error logs and other migration status to ensure smooth migration."
    },
    {
      phase: "5",
      title: "Validation & Cutover",
      icon: HiCheckCircle,
      description: "Validate the migration's success.",
      details: "File/folder structure, permissions • LUN mountability, filesystem integrity • Application performance and data integrity • Network zoning and multipathing"
    },
    {
      phase: "6",
      title: "Post-Migration",
      icon: HiRefresh,
      description: "Monitor performance and I/O load on target platforms",
      details: "Retire old environment gracefully (wipe and decommission) • Update documentation (topology diagrams) • Conduct a post-mortem to improve future migrations"
    }
  ];

  // Migration path data from VTG content
  const migrationPaths = [
    {
      title: "Physical to Cloud or Virtual",
      description: "Move from physical infrastructure to scalable cloud platforms or virtual machines, enhancing efficiency and Cost Savings.",
      icon: HiCloud
    },
    {
      title: "Virtual to Cloud or Physical",  
      description: "Transition virtual machines to cloud platforms for agility or back to physical environments to meet business needs.",
      icon: HiServer
    },
    {
      title: "Cloud to Cloud or Physical",
      description: "Migrate between cloud platforms or shift cloud environments to physical servers for security or regulatory compliance.",
      icon: HiDatabase
    },
    {
      title: "Cloud to Virtual",
      description: "Optimize workloads by moving from cloud platforms to virtual environments for improving control, flexibility & optimization.",
      icon: HiCog
    }
  ];

  // Custom icon component to display SVG assets
  const PlatformIcon = ({ src, alt, className = "w-10 h-10" }) => (
    <img src={src} alt={alt} className={className} />
  );

  // Supported platforms with actual assets from src/assets/compute-assets
  const supportedPlatforms = [
    {
      title: "AWS (Amazon Web Services)",
      description: "Simplify migrations with expert guidance in architecture design, data transfer, and service configuration. Achieve cost-efficient performance using AWS's extensive suite of services.",
      icon: () => <PlatformIcon src={awsLogo} alt="AWS" />,
      asset: awsLogo
    },
    {
      title: "Azure (Microsoft Azure)",
      description: "Minimize downtime and maximize security with automated tools and proven strategies. Unlock Azure's capabilities through a seamless, secure migration process.",
      icon: () => <PlatformIcon src={azureLogo} alt="Azure" />,
      asset: azureLogo
    },
    {
      title: "Google Cloud Platform (GCP)",
      description: "Streamline migrations with meticulous planning and application modernization. Leverage GCP's scalability and innovative features for optimized operations.",
      icon: () => <PlatformIcon src={gcpLogo} alt="Google Cloud" />,
      asset: gcpLogo
    },
    {
      title: "Oracle Cloud",
      description: "Focus on database and application migrations with solutions addressing compatibility and optimization. Ensure smooth transitions with enhanced performance.",
      icon: () => <PlatformIcon src={oracleLogo} alt="Oracle" />,
      asset: oracleLogo
    },
    {
      title: "VMware",
      description: "Migrate virtual machines seamlessly with tailored strategies and advanced tools. Maintain operational continuity during your reliable VMware transition.",
      icon: () => <PlatformIcon src={vmwareLogo} alt="VMware" />,
      asset: vmwareLogo
    },
    {
      title: "Proxmox",
      description: "Ensure effective deployment through thorough assessments and planning. Our process preserves data integrity and system configurations for smooth migrations.",
      icon: () => <PlatformIcon src={proxmoxLogo} alt="Proxmox" />,
      asset: proxmoxLogo
    },
    {
      title: "Nutanix",
      description: "Transition workloads seamlessly with hyper-converged infrastructure expertise. Leverage Nutanix's resource management for optimized performance.",
      icon: () => <PlatformIcon src={nutanixLogo} alt="Nutanix" />,
      asset: nutanixLogo
    },
    {
      title: "IBM Cloud",
      description: "Streamline migrations with enterprise-grade infrastructure and robust AI capabilities. Ensure secure scaling and seamless transitions to IBM Cloud.",
      icon: () => <PlatformIcon src={ibmLogo} alt="IBM Cloud" />,
      asset: ibmLogo
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-bgLightBlack via-gray-900 to-primary-bgLightBlack">
      <ScrollToTop />
      
      {/* 1. HERO BANNER SECTION - Improved with Planet Orbit Style */}
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
                  <HiServer className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">
                    Seamlessly Migrate Your Compute Environment
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
                    <span className="block text-white mb-2">Compute</span>
                    <span className="block text-yellow-400 mb-2 relative">
                      Migration
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                    <span className="block text-white text-2xl lg:text-3xl xl:text-4xl">Comprehensive Migration Solutions for Physical, Virtual, and Cloud</span>
                  </motion.h1>
                </div>

                {/* Subheading */}
                <motion.p 
                  className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  Expert compute migration services with <span className="text-yellow-400 font-semibold">zero downtime</span>, automated workflows, and seamless transitions across all platform types.
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
                    Get Your Compute Migration Plan
                    <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
                
              </motion.div>
            </div>

            {/* Enhanced Right Visual - Planet Orbit Style - 5 columns */}
            <div className="lg:col-span-5">
              <motion.div 
                className="relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                
                {/* Central Hub */}
                <div className="relative mx-auto flex items-center justify-center w-64 md:w-72 lg:w-80 h-64 md:h-72 lg:h-80">
                  
                  {/* Central Content Display */}
                  <div className="absolute inset-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full flex flex-col items-center justify-center border-4 border-yellow-400/50 backdrop-blur-sm">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center mb-3">
                      <HiServer className="w-5 h-5 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white text-center mb-2">
                      Compute Migration
                    </h3>
                    <p className="text-sm text-gray-300 text-center leading-relaxed px-3">
                      Seamless transitions across Physical, Virtual, and Cloud environments
                    </p>
                  </div>

                  {/* Orbiting Feature Icons */}
                  {[
                    { icon: HiServer, title: "Physical", color: "#facc15", angle: 0 },
                    { icon: HiCloud, title: "Virtual", color: "#60a5fa", angle: 90 },
                    { icon: HiDatabase, title: "Cloud", color: "#34d399", angle: 180 },
                    { icon: HiCog, title: "Hybrid", color: "#f59e0b", angle: 270 }
                  ].map((feature, index) => {
                    const radius = 120;
                    const x = Math.cos((feature.angle * Math.PI) / 180) * radius;
                    const y = Math.sin((feature.angle * Math.PI) / 180) * radius;
                    const IconComponent = feature.icon;
                    
                    return (
                      <motion.button
                        key={index}
                        className="absolute w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 bg-gray-700/70 hover:bg-gray-600/70 hover:scale-105"
                        style={{
                          left: `calc(50% + ${x}px - 28px)`,
                          top: `calc(50% + ${y}px - 28px)`,
                        }}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <IconComponent 
                          className="w-6 h-6" 
                          style={{ color: feature.color }}
                        />
                      </motion.button>
                    );
                  })}

                  {/* Connecting Lines */}
                  {/* <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {[0, 90, 180, 270].map((angle, index) => {
                      const startRadius = 100;
                      const endRadius = 140;
                      const centerX = 160;
                      const centerY = 160;
                      const x1 = Math.cos((angle * Math.PI) / 180) * startRadius + centerX;
                      const y1 = Math.sin((angle * Math.PI) / 180) * startRadius + centerY;
                      const x2 = Math.cos((angle * Math.PI) / 180) * endRadius + centerX;
                      const y2 = Math.sin((angle * Math.PI) / 180) * endRadius + centerY;
                      
                      return (
                        <line
                          key={index}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#fbbf24"
                          strokeWidth="2"
                          opacity="0.6"
                          className="transition-all duration-300"
                        />
                      );
                    })}
                  </svg> */}

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-yellow-400/60 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.2,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/60 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.9, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 1.4,
                    }}
                  />
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHOOSE THE RIGHT COMPUTE MIGRATION PATH - Amber Background */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-amber-50 via-amber-100/30 to-yellow-50/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.05),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-2xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose the Right <span className="text-primary-bgYellow">Compute Migration Path</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              CompuZign's expertise spans <span className="font-semibold">all migration types</span>, offering customized solutions that align with your strategic goals.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {migrationPaths.map((path, index) => (
              <motion.div
                key={path.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-bgYellow to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <path.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {path.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {path.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. WHY CHOOSE COMPUZIGN FOR COMPUTE MIGRATION - Black Background with 4 Steps */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-bgLightBlack via-gray-900 to-primary-bgLightBlack relative overflow-hidden">
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          <motion.div className="text-center mb-16 lg:mb-20" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose CompuZign for <span className="text-primary-bgYellow">Compute Migration</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your Trusted Partner for Comprehensive Compute Migration
            </p>
          </motion.div>

          {/* Desktop: Horizontal Layout with Connectors */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Animated Gradient Line */}
              <motion.div
                className="absolute top-32 left-0 w-full h-1 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-bgYellow via-yellow-400 to-primary-bgYellow"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                />
              </motion.div>
              
              <div className="grid grid-cols-4 gap-8">
                {[
                  {
                    number: "01",
                    title: "Broad Coverage",
                    description: "We manage migrations of all types, including Physical to Virtual, Physical to Cloud, and Virtual to Cloud.",
                    icon: HiCheckCircle
                  },
                  {
                    number: "02",
                    title: "Leading Platforms",
                    description: "We support migrations on Microsoft Azure, AWS, Google Cloud, VMware, and other major platforms.",
                    icon: HiCloud
                  },
                  {
                    number: "03",
                    title: "Proven Methodology",
                    description: "Our AI-powered tools and expertise deliver seamless, business-focused migrations tailored for you.",
                    icon: HiCog
                  },
                  {
                    number: "04",
                    title: "Data Integrity",
                    description: "Protecting your data is our priority, ensuring its security and accuracy during the entire migration.",
                    icon: HiShieldCheck
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.number}
                    className="relative group cursor-pointer"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                  >
                    {/* Step Number Circle */}
                    <div className="relative z-10 w-20 h-20 bg-primary-bgYellow rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-primary-bgYellow/50 transition-all duration-300">
                      <span className="text-2xl font-bold text-black">{step.number}</span>
                    </div>
                    
                    {/* Pulsing Dot on Line */}
                    <motion.div
                      className="absolute top-32 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-bgYellow rounded-full shadow-lg"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.5 
                      }}
                    />
                    
                    {/* Step Content Card */}
                    <motion.div
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-xl group-hover:border-primary-bgYellow/50 transition-all duration-300"
                    >
                      <div className="text-center mb-4">
                        <step.icon className="w-8 h-8 text-primary-bgYellow mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-lg font-bold text-white leading-tight mb-3">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Connectors Between Steps */}
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={`connector-${index}`}
                  className="absolute top-36 hidden xl:block"
                  style={{
                    left: `${25 + index * 25}%`,
                    width: '150px',
                  }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 + index * 0.3 }}
                >
                  <svg
                    width="150"
                    height="20"
                    viewBox="0 0 150 20"
                    className="overflow-visible"
                  >
                    <motion.path
                      d="M 0 10 Q 37.5 2 75 10 Q 112.5 18 150 10"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1.5 + index * 0.3 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FACC15" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#FACC15" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FACC15" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-8">
            {[
              {
                number: "01",
                title: "Broad Coverage",
                description: "We manage migrations of all types, including Physical to Virtual, Physical to Cloud, and Virtual to Cloud.",
                icon: HiCheckCircle
              },
              {
                number: "02",
                title: "Leading Platforms", 
                description: "We support migrations on Microsoft Azure, AWS, Google Cloud, VMware, and other major platforms.",
                icon: HiCloud
              },
              {
                number: "03",
                title: "Proven Methodology",
                description: "Our AI-powered tools and expertise deliver seamless, business-focused migrations tailored for you.",
                icon: HiCog
              },
              {
                number: "04",
                title: "Data Integrity",
                description: "Protecting your data is our priority, ensuring its security and accuracy during the entire migration.",
                icon: HiShieldCheck
              }
            ].map((step, index) => (
              <motion.div
                key={step.number}
                className="flex gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-bgYellow rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-black">{step.number}</span>
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <step.icon className="w-6 h-6 text-primary-bgYellow" />
                    <h3 className="text-lg font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR MIGRATION PROCESS SECTION - Same as StorageMigration Template */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-500/5"></div>
          
          {/* Process Flow Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            <path d="M 0,50 Q 25,25 50,50 T 100,50" stroke="url(#flowGradient)" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our 6-Phase <span className="text-yellow-400">Migration Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              CompuZign PSaaS Team Provides Compute Migrations Planning, Validation, and Post-Migration Support
            </p>
          </motion.div>

          {/* Desktop Timeline Layout */}
          <div className="hidden lg:block">
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Timeline Line */}
              <div className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 rounded-full"></div>
              
              {/* Process Steps */}
              <div className="grid grid-cols-6 gap-4">
                {migrationPhases.map((phase, index) => (
                  <motion.div
                    key={index}
                    className="relative flex flex-col items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Step Number Circle */}
                    <motion.div 
                      className="relative z-20 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl mb-6"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-black font-bold text-xl">{phase.phase}</span>
                    </motion.div>
                    
                    {/* Process Card */}
                    <motion.div 
                      className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 transition-all duration-300 hover:border-yellow-400/50 group hover:-translate-y-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <phase.icon className="w-5 h-5 text-yellow-400" />
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                        {phase.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {phase.description}
                      </p>

                      <p className="text-gray-400 text-xs leading-relaxed">
                        {phase.details}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile/Tablet Vertical Layout */}
          <div className="lg:hidden">
            <motion.div 
              className="space-y-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {migrationPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-6"
                  variants={{
                    initial: { opacity: 0, x: -30 },
                    whileInView: { opacity: 1, x: 0 }
                  }}
                >
                  {/* Step Number with Connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl flex-shrink-0">
                      <span className="text-black font-bold">{phase.phase}</span>
                    </div>
                    {index < migrationPhases.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-yellow-400 to-gray-600 mt-4"></div>
                    )}
                  </div>
                  
                  {/* Process Card */}
                  <div className="flex-1 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                        <phase.icon className="w-5 h-5 text-yellow-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {phase.description}
                    </p>
                    
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {phase.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Process Metrics */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { metric: "99.99%", label: "Success Rate", icon: HiCheckCircle },
              { metric: "< 4hrs", label: "Average Downtime", icon: HiLightningBolt },
              { metric: "24/7", label: "Expert Support", icon: HiUsers }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. SUPPORTED PLATFORMS - Flip Cards with Actual Assets */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-bgLightBlack via-gray-900 to-primary-bgLightBlack">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Seamless Cloud Migration Across <span className="text-primary-bgYellow">Leading Platforms</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Supported Platforms
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {supportedPlatforms.map((platform, index) => (
              <CSSFlipCard
                key={platform.title}
                title={platform.title}
                description={platform.description}
                icon={platform.icon}
                index={index}
              />
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-gray-300 mb-8">
              Ready to elevate your migration experience? <a href="#" className="text-primary-bgYellow font-semibold">Contact us</a> today to discuss how we can tailor our solutions to your specific needs!
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. AI-POWERED ANALYTICS SECTION */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Leverage CompuZign's expertise and ZENfra's AI analytics for <span className="text-primary-bgYellow">seamless migrations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AI-Powered Analytics for Faster, Smarter, and Cost-Optimized Migrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "AI-Driven Insights",
                description: "ZENfra's advanced analytics platform identifies, maps, and analyzes all assets in your IT environment, enabling CompuZign to design precise migration strategies that reduce risks, downtime, and operational inefficiencies.",
                icon: HiChartBar
              },
              {
                title: "Accelerated & Cost-Optimized Migrations",
                description: "CompuZign's skilled migration team uses ZENfra's insights to streamline processes, reducing manual efforts and significantly shortening timelines. Faster migrations result in lower labor and operational costs for your business.",
                icon: HiLightningBolt
              },
              {
                title: "Enhanced Success & Optimization",
                description: "CompuZign ensures post-migration success with validation and optimization guided by ZENfra's robust analytics. This comprehensive approach maximizes performance, reduces rework, and ensures cost-efficient alignment with your business goals.",
                icon: HiCheckCircle
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-bgYellow to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-bgLightBlack via-gray-900 to-primary-bgLightBlack relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`cta-particle-${i}`}
              className="absolute w-1 h-1 bg-primary-bgYellow/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.2, 0.8, 0.2],
                y: [0, -100, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center relative z-10">
          <motion.div {...fadeInUp}>
            
            {/* Enhanced Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-bgYellow/10 border border-primary-bgYellow/30 rounded-full text-primary-bgYellow text-sm font-medium backdrop-blur-sm mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <HiSparkles className="w-4 h-4" />
              Looking for Tailored Compute Migration Solutions?
            </motion.div>
            
            {/* Enhanced Heading */}
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
               Get Your Customized{' '}
              <span className="text-primary-bgYellow">Compute Migration Plan</span>
            </h2>
            
            {/* Enhanced Description */}
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              CompuZign specializes in compute migration services for industries such as finance, healthcare, and manufacturing, ensuring compliance and supporting your growth. Ready to get started?
            </p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              whileHover={{ scale: 1.02 }}
            >
              <Button 
                variant="primary" 
                size="lg"
                className="group bg-primary-bgYellow text-black hover:bg-yellow-400 px-10 py-5 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-bgYellow/25"
              >
                Contact Us
                <HiArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>

              <Button 
                variant="secondary" 
                size="lg"
                className="group border-2 border-white text-white hover:bg-white hover:text-black px-10 py-5 text-xl font-bold rounded-xl transition-all duration-300"
              >
                Book Consultation
                <HiPhone className="w-6 h-6 ml-3" />
              </Button>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ComputeMigration; 