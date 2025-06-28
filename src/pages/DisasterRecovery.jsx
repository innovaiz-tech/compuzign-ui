import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  HiShieldCheck, 
  HiClock,
  HiDatabase,
  HiCheckCircle,
  HiLightningBolt,
  HiGlobe,
  HiArrowRight,
  HiSparkles,
  HiPhone
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import AnimatedStat from '../components/ui/AnimatedStat';
import FlipCard from '../components/ui/FlipCard';
import { section1Cards, statsData, benefitsData } from '../data/disasterRecoveryData';

/**
 * DisasterRecovery Component - Optimized Version
 * 
 * Following the exact content structure from disaster-recovery-business-data-continuity.md:
 * 1. Banner - Hero section with sophisticated animations
 * 2. Section 1 - Flip cards with 3 key points + paragraph
 * 3. Section 2 - Stats section + disaster recovery benefits
 * 4. Talk to Us - CTA section
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

        <AnimatedBackground isMobile={isMobile} />

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