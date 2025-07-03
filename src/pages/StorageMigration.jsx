import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  HiDatabase, 
  HiArrowRight,
  HiPhone,
  HiServer,
  HiCloud,
  HiShieldCheck,
  HiCubeTransparent,
  HiCalculator,
  HiSparkles
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import AnimatedStat from '../components/ui/AnimatedStat';
import CSSFlipCard from '../components/ui/CSSFlipCard';
import ScrollToTop from '../components/ui/ScrollToTop';

/**
 * StorageMigration Component - Choose the Right Migration Approach for Your Business
 * Comprehensive storage migration solutions with zero downtime
 */
export default function StorageMigration() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeApproach, setActiveApproach] = useState(0);
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

  // Storage migration approaches data
  const migrationApproaches = [
    {
      icon: HiDatabase,
      title: "Block Migration",
      description: "Focuses on moving data at the storage volume level, without necessarily analyzing or processing the data content itself.",
      fullDescription: "With over 20 years of Industry expertize, CompuZign offer Block Data Migration Service thru it's PSaaS Organization. A full and comprehensive online, zero downtime, data migration offering to include: On-prem to on-prem, tech-refresh, replatforming, lift and shift, application consistent snapshots, online replication Data synchronization.",
      color: "#ffda17"
    },
    {
      icon: HiServer,
      title: "NAS Migration",
      description: "NAS migration focus on moving data and configurations from one Network Attached Storage (NAS) system to another.",
      fullDescription: "Whether upgrading or moving to the cloud, no matter the complexity, CompuZign will do it for you.",
      color: "#ffda17"
    },
    {
      icon: HiShieldCheck,
      title: "Backup Migration",
      description: "Migrate backups securely with zero risk of data loss. Maintain full backup continuity, ensuring your critical data is always accessible throughout the migration.",
      fullDescription: "Secure backup migration with comprehensive data protection and continuity assurance.",
      color: "#ffda17"
    },
    {
      icon: HiCubeTransparent,
      title: "Containerized Migration",
      description: "Migrate applications to containers with minimal downtime. Scale easily with AI-driven automation, reducing complexity and optimizing costs for fast, efficient deployments.",
      fullDescription: "Modern containerized migration approach leveraging AI-driven automation for optimal efficiency.",
      color: "#ffda17"
    }
  ];

  // Auto-rotate migration approaches
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveApproach((prev) => (prev + 1) % migrationApproaches.length);
    }, 5000);
    return () => clearInterval(interval);
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

  // Store the active icon component
  const ActiveIcon = migrationApproaches[activeApproach].icon;

  return (
    <div key="storage-migration-page" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      
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
                  <HiDatabase className="w-5 h-5 text-primary-bgYellow mr-3" />
                  <span className="text-sm font-semibold text-primary-bgYellow uppercase tracking-wider">
                    Storage Migration Services
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
                    <span className="block text-white mb-2">Choose the Right</span>
                    <span className="block text-primary-bgYellow mb-2 relative">
                      Migration Approach
                      <motion.div
                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-bgYellow/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                    <span className="block text-white text-3xl lg:text-4xl xl:text-5xl">for Your Business</span>
                  </motion.h1>
                </div>

                {/* Subheading */}
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  <span className="text-primary-bgYellow font-semibold">Seamless Data Migration</span> - Zero downtime, maximum security, and cost-effective solutions for every business need.
                </motion.p>

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
                    Get Your Customized Migration Strategy
                    <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
                
              </motion.div>
            </div>

            {/* Enhanced Right Visual - 5 columns */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <motion.div 
                className="relative w-full max-w-md mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                
                {/* Enhanced Central Hub */}
                <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
                  
                  {/* Central Content Display */}
                  <div className="absolute inset-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full flex flex-col items-center justify-center border-4 border-primary-bgYellow/50 backdrop-blur-sm z-10">
                    <div className="w-12 h-12 bg-primary-bgYellow/20 rounded-full flex items-center justify-center mb-3">
                      <ActiveIcon 
                        className="w-6 h-6" 
                        style={{ color: migrationApproaches[activeApproach].color }}
                      />
                    </div>
                    <h3 className="text-base font-bold text-white text-center mb-2 px-4">
                      {migrationApproaches[activeApproach].title}
                    </h3>
                    <p className="text-xs text-gray-300 text-center leading-tight px-4">
                      {migrationApproaches[activeApproach].description.slice(0, 80)}...
                    </p>
                  </div>

                  {/* Orbiting Elements for each migration type */}
                  {migrationApproaches.map((approach, index) => {
                    const angle = (index * 90);
                    const IconComponent = approach.icon;
                    const radius = 140;
                    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
                    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
                    
                    return (
                      <motion.div
                        key={index}
                        className="absolute w-14 h-14 bg-gradient-to-br from-gray-700/80 to-gray-800/80 rounded-full flex items-center justify-center border-2 border-primary-bgYellow/30 backdrop-blur-sm cursor-pointer"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                        animate={{
                          scale: index === activeApproach ? 1.2 : 1,
                          borderColor: index === activeApproach ? '#ffda17' : 'rgba(255, 218, 23, 0.3)',
                        }}
                        whileHover={{ scale: 1.3 }}
                        onClick={() => setActiveApproach(index)}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent 
                          className="w-5 h-5" 
                          style={{ color: index === activeApproach ? '#ffda17' : '#9ca3af' }}
                        />
                      </motion.div>
                    );
                  })}

                  {/* Connecting Lines */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    {[0, 90, 180, 270].map((angle, index) => (
                      <div
                        key={index}
                        className="absolute w-28 h-0.5 bg-gradient-to-r from-primary-bgYellow/30 to-transparent"
                        style={{
                          transform: `rotate(${angle}deg)`,
                          transformOrigin: 'center',
                        }}
                      />
                    ))}
                  </div>

                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. MIGRATION APPROACHES SECTION */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          {/* Section Header */}
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Migration</span>{' '}
              <span className="text-primary-bgYellow">Approaches</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive migration solutions tailored to your specific infrastructure needs and business requirements.
            </p>
          </motion.div>

          {/* Block Migration - Featured Card */}
          <motion.div 
            className="mb-12"
            variants={fadeInUp}
          >
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-3xl p-8 lg:p-12 border-2 border-primary-bgYellow/30 backdrop-blur-md overflow-hidden group-hover:border-primary-bgYellow/60 transition-all duration-500">
                
                {/* Featured Badge */}
                <div className="absolute top-6 right-6">
                  <div className="inline-flex items-center px-4 py-2 bg-primary-bgYellow/20 border border-primary-bgYellow/40 rounded-full">
                    <HiSparkles className="w-4 h-4 text-primary-bgYellow mr-2" />
                    <span className="text-primary-bgYellow text-sm font-semibold">FEATURED SERVICE</span>
                  </div>
                </div>

                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/10 via-transparent to-transparent opacity-50"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                  
                  {/* Left: Content */}
                  <div className="space-y-8">
                    {/* Icon and Title */}
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-bgYellow/40 to-primary-bgYellow/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                        <HiDatabase className="w-10 h-10 text-primary-bgYellow drop-shadow-lg" />
                      </div>
                      <div>
                        <h3 className="text-4xl lg:text-5xl font-bold text-primary-bgYellow mb-2 tracking-tight">
                          Block Migration
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-primary-bgYellow to-primary-bgYellow/50 rounded-full"></div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-6">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Focuses on moving data at the storage volume level, without necessarily analyzing or processing the data content itself.
                      </p>
                      
                      <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-xl p-6 border-l-4 border-primary-bgYellow">
                        <p className="text-gray-300 leading-relaxed">
                          With over 20 years of Industry expertize, CompuZign offer Block Data Migration Service thru it's PSaaS Organization. A full and comprehensive online, zero downtime, data migration offering to include: On-prem to on-prem, tech-refresh, replatforming, lift and shift, application consistent snapshots, online replication Data synchronization.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: CTA Section */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl p-8 border border-primary-bgYellow/20 shadow-2xl backdrop-blur-sm">
                      
                      {/* Fineprint */}
                      <div className="text-center mb-8 space-y-4">
                        <div className="inline-flex items-center px-4 py-2 bg-primary-bgYellow/10 border border-primary-bgYellow/30 rounded-full">
                          <HiSparkles className="w-4 h-4 text-primary-bgYellow mr-2" />
                          <span className="text-primary-bgYellow text-sm font-semibold">BEST VALUE</span>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm text-gray-400 italic">
                            We offer the best industry per TB cost block migration services.
                          </p>
                          <p className="text-gray-300">
                            Try our <span className="text-primary-bgYellow font-semibold">"Migration Calculator"</span> then
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="text-center">
                        <Button 
                          variant="primary" 
                          size="lg" 
                          className="group w-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          Talk To Us: Get Your Customized Block Migration Started
                          <HiArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
                        </Button>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -top-2 -right-2 w-20 h-20 bg-primary-bgYellow/10 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-primary-bgYellow/5 rounded-full blur-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Migration Types - Compact Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerChildren}
          >
            {migrationApproaches.slice(1).map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <motion.div
                  key={index + 1}
                  className="relative group"
                  variants={fadeInUp}
                >
                  <div className="relative h-full bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-6 border border-gray-700/30 backdrop-blur-sm hover:border-primary-bgYellow/30 transition-all duration-300">
                    
                    {/* Icon */}
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl flex items-center justify-center mx-auto group-hover:bg-primary-bgYellow/10 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-gray-300 group-hover:text-primary-bgYellow transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white text-center mb-3 group-hover:text-primary-bgYellow transition-colors duration-300">
                      {approach.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm text-center leading-relaxed mb-4">
                      {approach.description}
                    </p>

                    {/* Full Description */}
                    <div className="border-t border-gray-700/30 pt-4">
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {approach.fullDescription}
                      </p>
                    </div>

                    {/* Hover Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-bgYellow/0 via-primary-bgYellow/50 to-primary-bgYellow/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. CALL TO ACTION SECTION */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-r from-primary-bgYellow/10 via-primary-bgYellow/5 to-transparent">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl text-center">
          <motion.div className="space-y-8" {...fadeInUp}>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-white">Ready to</span>{' '}
                <span className="text-primary-bgYellow">Transform</span>{' '}
                <span className="text-white">Your Storage?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Talk To Us: Get Your CompuZign Customized Data Migration Strategy
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                variant="primary" 
                size="lg"
                className="group"
              >
                Get Started Today
                <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                className="group"
              >
                Try Migration Calculator
                <HiCalculator className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group"
              >
                Talk To Us
                <HiPhone className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Fine Print */}
            <motion.div 
              className="pt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-gray-400 italic">
                We offer the best industry per TB cost block migration services.
              </p>
            </motion.div>
            
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
} 