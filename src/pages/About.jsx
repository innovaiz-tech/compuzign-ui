import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  HiUserGroup, 
  HiTrendingUp, 
  HiGlobe, 
  HiUsers,
  HiLightningBolt,
  HiStar,
  HiCheckCircle,
  HiArrowRight,
  HiShieldCheck,
  HiCog,
  HiChartBar,
  HiHeart,
  HiServer,
  HiCube,
  HiOfficeBuilding,
  HiLocationMarker,
  HiGlobeAlt,
  HiCalendar,
  HiBriefcase,
  HiAcademicCap,
  HiSparkles,
  HiEye,
  HiCloud,
  HiPhone
} from 'react-icons/hi';
import Button from '../components/common/button';
import homeBanner from '../assets/home_banner.png';

export default function About() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [expertiseVisible, setExpertiseVisible] = useState(false);
  const [locationsVisible, setLocationsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  
  const missionRef = useRef(null);
  const statsRef = useRef(null);
  const expertiseRef = useRef(null);
  const locationsRef = useRef(null);
  const ctaRef = useRef(null);

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

  // Intersection Observer for animations
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const heroTimer = setTimeout(() => setHeroVisible(true), 100);

    const observers = [
      { ref: missionRef, setter: setMissionVisible },
      { ref: statsRef, setter: setStatsVisible },
      { ref: expertiseRef, setter: setExpertiseVisible },
      { ref: locationsRef, setter: setLocationsVisible },
      { ref: ctaRef, setter: setCtaVisible }
    ];

    const observerInstances = observers.map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => {
      clearTimeout(heroTimer);
      observerInstances.forEach(observer => observer.disconnect());
    };
  }, []);

  const stats = [
    { icon: HiStar, number: "25+", label: "Years of Experience", description: "Since 1998" },
    { icon: HiGlobe, number: "3", label: "Countries", description: "Global Presence" },
    { icon: HiUsers, number: "50k+", label: "Talent Network", description: "Worldwide" },
    { icon: HiLightningBolt, number: "1000+", label: "Projects Completed", description: "Success Stories" }
  ];

  const locations = [
    {
      name: "Mandeville, JM",
      type: "Primary",
      mapUrl: "https://www.bing.com/maps?where=Mandeville+JM&trk=org-locations_url",
      description: "Headquarters"
    },
    {
      name: "Florida, 33304, US",
      type: "Secondary",
      mapUrl: "https://www.bing.com/maps?where=Florida+33304+US&trk=org-locations_url",
      description: "US Operations"
    },
    {
      name: "Hyderabad, IN",
      type: "Secondary",
      mapUrl: "https://www.bing.com/maps?where=Hyderabad+IN&trk=org-locations_url",
      description: "India Operations"
    }
  ];

  const expertise = [
    {
      icon: HiCloud,
      title: "Cloud Technology",
      description: "Cutting-edge cloud solutions and migration services"
    },
    {
      icon: HiServer,
      title: "Cloud Migration",
      description: "Seamless data center and workload transitions"
    },
    {
      icon: HiShieldCheck,
      title: "IT Consulting",
      description: "Strategic technology consulting and planning"
    },
    {
      icon: HiCog,
      title: "Support as a Service",
      description: "Comprehensive SaaS and PSaaS solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      
      {/* Enhanced Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,218,23,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,218,23,0.02)_50%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      {/* Hero Section - Updated to match RaaS style */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8 md:pt-20 md:pb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={homeBanner} 
            alt="About Us Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl py-8 md:py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div className="mb-8">
            <motion.span 
              className="inline-block px-4 py-2 bg-primary-bgYellow text-slate-900 text-sm font-semibold rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              About CompuZign
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Let's Innovate
              <span className="text-primary-bgYellow block">Together</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              Building the Future with Expertise and Innovation. Empowering businesses by providing seamless, 
              reliable IT services that enhance productivity, streamline operations, and foster growth.
            </motion.p>
          </motion.div>

          {/* Enhanced Key Features */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          >
            {[
              { name: "25+ Years Experience", icon: HiStar },
              { name: "Global Presence", icon: HiGlobe },
              { name: "Innovation Focus", icon: HiLightningBolt }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(255, 218, 23, 0.2)',
                  borderColor: '#ffda17'
                }}
                transition={{ duration: 0.2 }}
              >
                <feature.icon className="w-4 h-4 text-primary-bgYellow mr-2" />
                <span className="text-primary-bgYellow font-bold text-sm">{feature.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          >
            <Button 
              variant="primary" 
              size="lg"
              className="group shadow-2xl hover:shadow-primary-bgYellow/25"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started Today
              <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="group shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = '/partners'}
            >
              Learn More
              <HiPhone className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            ref={missionRef}
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-primary-bgYellow">CompuZign</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              IT Services and IT Consulting
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              One stop for all solutions - Solutioning, Consultancy, Migration, Support and Documentation
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 shadow-2xl border border-gray-700/50 backdrop-blur-md"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 mr-4">
                  <HiCheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses by providing seamless, reliable IT services that enhance productivity, 
                streamline operations, and foster growth.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 shadow-2xl border border-gray-700/50 backdrop-blur-md"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-3 mr-4">
                  <HiEye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                A world where businesses of all sizes can leverage top-tier IT solutions without barriers. 
                Through innovation and dedicated support, we aim to be the trusted partner for organizations worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Updated with ZENfra AI Platform Theme */}
      <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            ref={statsRef}
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-primary-bgYellow">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Backed by more than 20 years of hands-on experience, we've built a legacy of excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-md hover:shadow-primary-bgYellow/10 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-primary-bgYellow to-yellow-500 rounded-2xl p-6 mb-4 inline-block shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-12 h-12 text-black mx-auto" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-primary-bgYellow mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            ref={expertiseRef}
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-primary-bgYellow">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specializing in cutting-edge block-level data migration service under our PSaaS model
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 shadow-2xl border border-gray-700/50 backdrop-blur-md hover:shadow-primary-bgYellow/10 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-primary-bgYellow to-yellow-500 rounded-xl p-4 mb-4 inline-block">
                  <item.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details - Updated with AI-Driven Monitoring Theme */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-br from-green-400/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-blue-400/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Company Information & Capabilities
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-blue-400 mb-6">
              Comprehensive Details About Our Organization
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Discover the foundation of our success and the comprehensive capabilities that make CompuZign your trusted technology partner.
            </p>
          </motion.div>

          {/* Company Information Grid - Connected Cards */}
          <motion.div 
            className="relative"
            {...staggerChildren}
          >
            {/* Connection Lines - Horizontal Flow */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Main Horizontal Line - Desktop Only */}
              <div className="hidden xl:block absolute top-1/2 left-0 right-0 h-px bg-white/30"></div>
              {/* Vertical Connection Lines - Desktop Only */}
              <div className="hidden xl:block absolute top-1/4 bottom-1/4 left-1/5 w-px bg-white/20"></div>
              <div className="hidden xl:block absolute top-1/4 bottom-1/4 left-2/5 w-px bg-white/20"></div>
              <div className="hidden xl:block absolute top-1/4 bottom-1/4 left-3/5 w-px bg-white/20"></div>
              <div className="hidden xl:block absolute top-1/4 bottom-1/4 left-4/5 w-px bg-white/20"></div>
            </div>

            {/* Company Information Cards - Horizontal Flow */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6 relative z-10">
              {[
                { 
                  icon: HiOfficeBuilding, 
                  title: "Headquarters", 
                  value: "Mandeville", 
                  description: "Our primary operations center",
                  subDescription: "Central hub for all operations",
                  phase: "01"
                },
                { 
                  icon: HiBriefcase, 
                  title: "Company Type", 
                  value: "Self-Owned", 
                  description: "Independent technology firm",
                  subDescription: "Privately held organization",
                  phase: "02"
                },
                { 
                  icon: HiCalendar, 
                  title: "Founded", 
                  value: "1998", 
                  description: "Over 25 years of excellence",
                  subDescription: "Decades of industry experience",
                  phase: "03"
                },
                { 
                  icon: HiGlobeAlt, 
                  title: "Website", 
                  value: "www.compuzign.com", 
                  link: "https://www.compuzign.com/", 
                  description: "Visit our online presence",
                  subDescription: "Digital platform and services",
                  phase: "04"
                },
                { 
                  icon: HiAcademicCap, 
                  title: "Industry", 
                  value: "IT Services and IT Consulting", 
                  description: "Professional technology services",
                  subDescription: "Expert consulting and solutions",
                  phase: "05"
                },
                { 
                  icon: HiSparkles, 
                  title: "Specialties", 
                  value: "IT CONSULTING, Cloud Technology, Cloud Migration, and Support as a Service (SaaS)", 
                  description: "Core areas of expertise",
                  subDescription: "Comprehensive IT solutions",
                  phase: "06"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 h-full min-h-[200px] lg:min-h-[240px] flex flex-col justify-between">
                    {/* Phase Number */}
                    <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xs lg:text-sm font-bold text-white">{item.phase}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mx-auto mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center text-center">
                      <h3 className="text-sm lg:text-base font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-xs lg:text-sm text-gray-300 mb-2">{item.description}</p>
                      <p className="text-xs text-gray-400 mb-3">{item.subDescription}</p>
                      
                      {item.link ? (
                        <a 
                          href={item.link}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors block font-semibold text-xs lg:text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold text-xs lg:text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Company Highlights */}
          <motion.div className="mt-16" {...fadeInUp}>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                  To empower businesses by providing seamless, reliable IT services that enhance productivity, 
                  streamline operations, and foster growth through innovation and dedicated support.
                </p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                  A world where businesses of all sizes can leverage top-tier IT solutions without barriers. 
                  Through innovation and dedicated support, we aim to be the trusted partner for organizations worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            ref={locationsRef}
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-primary-bgYellow">Locations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Serving clients across multiple countries with local expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 shadow-2xl border border-gray-700/50 backdrop-blur-md hover:shadow-primary-bgYellow/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-primary-bgYellow to-yellow-500 rounded-xl p-3 mr-3">
                    <HiLocationMarker className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{location.name}</h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      location.type === 'Primary' 
                        ? 'bg-primary-bgYellow/20 text-primary-bgYellow border border-primary-bgYellow/40' 
                        : 'bg-gray-700/50 text-gray-300 border border-gray-600/50'
                    }`}>
                      {location.type}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{location.description}</p>
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-bgYellow hover:text-yellow-400 transition-colors"
                >
                  Get directions
                  <HiArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed Button Rendering */}
      <section className="py-20 bg-gradient-to-br from-primary-bgYellow/10 to-blue-500/10 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            ref={ctaRef}
            {...fadeInUp}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-primary-bgYellow">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you're scaling up, consolidating, or future-proofing your IT strategy, 
              our experts take the guesswork out of migration planning and execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary"
                size="lg"
                className="group shadow-2xl hover:shadow-primary-bgYellow/25"
                onClick={() => window.location.href = '/contact'}
              >
                Get Started Today
                <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button 
                variant="secondary"
                size="lg"
                className="group shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = '/partners'}
              >
                Learn More
                <HiPhone className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
