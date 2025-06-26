import { motion } from 'framer-motion';
import { 
  HiShieldCheck, 
  HiCog, 
  HiEye, 
  HiLightningBolt, 
  HiCheckCircle
} from 'react-icons/hi';
import Button from '../components/common/button';
import { useState, useEffect } from 'react';

export default function ExtendedThreatDetection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const rightStrategies = [
    {
      icon: HiShieldCheck,
      text: "The right cybersecurity architecture"
    },
    {
      icon: HiCog,
      text: "The right security tools, from endpoints to cloud"
    },
    {
      icon: HiEye,
      text: "The right threat detection systems across all layers of your IT environment"
    },
    {
      icon: HiLightningBolt,
      text: "The right correlation and analysis"
    },
    {
      icon: HiCheckCircle,
      text: "The right timely response to appropriate threats"
    }
  ];

  // Reduced animations for mobile and tablet
  const getAnimationProps = (index = 0) => {
    if (isMobile || isTablet) {
      return {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.3, delay: index * 0.05 }
      };
    }
    return {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6, delay: index * 0.1 }
    };
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Home Page Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bgLightBlack via-gray-900 to-primary-bgLightBlack"></div>
          <div className="absolute inset-0 hero-bg-overlay"></div>
        </div>

        {/* Animated Tech Background - Conditional for performance */}
        {!isMobile && (
          <div className="absolute inset-0 z-5">
            {/* Floating Particles - Reduced for tablets */}
            {[...Array(isTablet ? 8 : 15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary-bgYellow/60 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, 50, -25, 0],
                  y: [0, -40, 30, 0],
                  opacity: [0.3, 0.8, 0.5, 0.3],
                }}
                transition={{
                  duration: isTablet ? 8 : 15 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Network Lines - Reduced for tablets */}
            {[...Array(isTablet ? 4 : 8)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary-bgYellow/30 to-transparent"
                style={{
                  width: isTablet ? '150px' : '200px',
                  top: `${20 + i * 15}%`,
                  left: '-200px',
                }}
                animate={{
                  x: ['0vw', '120vw'],
                }}
                transition={{
                  duration: isTablet ? 6 : 8 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.8,
                }}
              />
            ))}

            {/* Data Flow Circles - Simplified for tablets */}
            {!isTablet && [...Array(6)].map((_, i) => (
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

            {/* Tech Grid Pattern - Simplified for tablets */}
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 218, 23, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 218, 23, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: isTablet ? '100px 100px' : '80px 80px',
              }}
              animate={{
                backgroundPosition: ['0px 0px', isTablet ? '100px 100px' : '80px 80px'],
              }}
              transition={{
                duration: isTablet ? 15 : 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="hero-title font-bold text-white leading-tight text-center">
              Extended Threat Detection &{' '}
              <span className="text-primary-bgYellow text-highlight">Response</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section - Home Page Theme */}
      <div className="relative bg-gradient-to-br from-primary-bgLightBlack via-gray-900 to-primary-bgLightBlack w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Elements - Simplified for mobile/tablet */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-bgYellow to-transparent opacity-15"></div>
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary-bgYellow to-transparent opacity-15"></div>
          </div>
        )}

        <section className="py-16 lg:py-24 w-full relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction Text */}
            <motion.div
              {...getAnimationProps()}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Comprehensive XDR Strategy
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                CompuZign Deploys The Right Extended Detection and Response (XDR) Strategy that fits your Organization needs:
              </p>
            </motion.div>

            {/* Right Strategies Grid - Responsive layout */}
            <div className={`grid gap-6 max-w-7xl mx-auto mb-20 ${
              isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {rightStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  {...getAnimationProps(index)}
                  className={`group bg-white/5 backdrop-blur-sm border border-primary-bgYellow/20 rounded-xl p-6 lg:p-8 transition-all duration-300 ${
                    !isMobile ? 'hover:bg-white/10 hover:border-primary-bgYellow/40 hover:transform hover:scale-105' : ''
                  }`}
                >
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 bg-primary-bgYellow rounded-full flex items-center justify-center mx-auto transition-transform duration-300 ${
                      !isMobile ? 'group-hover:scale-110' : ''
                    }`}>
                      {(() => {
                        const IconComponent = strategy.icon;
                        return <IconComponent className="w-8 h-8 text-black" />;
                      })()}
                    </div>
                    <p className={`text-lg text-gray-200 font-medium leading-relaxed transition-colors duration-300 ${
                      !isMobile ? 'group-hover:text-white' : ''
                    }`}>
                      {strategy.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* EDR Description - Professional Card Style */}
            <motion.div
              {...getAnimationProps()}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-primary-bgYellow/20 rounded-2xl p-6 lg:p-12">
                <div className={`gap-8 items-center ${
                  isMobile ? 'flex flex-col' : 'grid grid-cols-1 lg:grid-cols-2'
                }`}>
                  <div className="space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      Unified Platform Approach
                    </h3>
                    <div className="space-y-4">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        <strong className="text-primary-bgYellow">CompuZign EDR (Endpoint Detection)</strong> is designed to identify threats like zero-day exploits, 
                        ransomware, insider attacks, and fileless malware.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        We combine EDP with our <strong className="text-primary-bgYellow">XDR Solution</strong> to offer comprehensive unified platform 
                        for threat detection and response.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-primary-bgYellow/20 to-primary-bgYellow/5 rounded-full flex items-center justify-center">
                        <HiShieldCheck className="w-24 h-24 lg:w-32 lg:h-32 text-primary-bgYellow opacity-80" />
                      </div>
                      {/* Animated rings - Disabled on mobile/tablet */}
                      {!isMobile && !isTablet && (
                        <>
                          <div className="absolute inset-0 rounded-full border-2 border-primary-bgYellow/30 animate-ping"></div>
                          <div className="absolute inset-4 rounded-full border border-primary-bgYellow/20 animate-pulse"></div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section - TierPoint Style */}
        <section className="py-16 lg:py-24 w-full relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...getAnimationProps()}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-primary-bgYellow/20 rounded-2xl p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Talk To Us
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Get Your CompuZign Customized XDR Plan
                </p>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className={`bg-primary-bgYellow hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 ${
                    !isMobile ? 'transform hover:scale-105 hover:shadow-lg hover:shadow-primary-bgYellow/25' : ''
                  }`}
                >
                  Get Your CompuZign Customized XDR Plan
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
} 