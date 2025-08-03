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
  HiCube
} from 'react-icons/hi';
import Button from '../components/common/button';
import partnerHeroBg from '../assets/partner-image.jpg';

// Import cloud vendor logos
import awsLogo from '../assets/compute-assets/aws-2.svg';
import azureLogo from '../assets/compute-assets/azure-2.svg';
import googleCloudLogo from '../assets/compute-assets/google-cloud-1.svg';
import ibmCloudLogo from '../assets/compute-assets/ibm-cloud-1.svg';
import vmwareLogo from '../assets/compute-assets/vmware-1.svg';
import oracleLogo from '../assets/compute-assets/oracle-1.svg';
import nutanixLogo from '../assets/compute-assets/nutanix-logo.svg';
import proxmoxLogo from '../assets/compute-assets/proxmox.svg';

// Import vendor logos
import dellEmcLogo from '../assets/cloud-vendors/dell-emc-logo.svg';
import ibmLogo from '../assets/cloud-vendors/ibm.svg';
import netappLogo from '../assets/cloud-vendors/netapp-1.svg';
import hitachiLogo from '../assets/cloud-vendors/hitachi-3.svg';
import dxcLogo from '../assets/cloud-vendors/dxc-technology-1.svg';
import pureStorageLogo from '../assets/cloud-vendors/pure-storage-seeklogo.png';

export default function Partner() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [partnerSectionVisible, setPartnerSectionVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [partnersVisible, setPartnersVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  
  const partnerRef = useRef(null);
  const cardsRef = useRef(null);
  const cardRef = useRef(null);
  const testimonialsRef = useRef(null);
  const partnersRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setCardVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const heroTimer = setTimeout(() => setHeroVisible(true), 100);

    const observers = [
      { ref: partnerRef, setter: setPartnerSectionVisible },
      { ref: cardsRef, setter: setCardsVisible },
      { ref: testimonialsRef, setter: setTestimonialsVisible },
      { ref: partnersRef, setter: setPartnersVisible },
      { ref: statsRef, setter: setStatsVisible },
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

  // Partner benefits data
  const partnerBenefits = [
    {
      icon: HiTrendingUp,
      title: 'Revenue Growth',
      description: 'Access to high-margin IT services with attractive commission structures and recurring revenue opportunities.',
      gradient: 'from-green-500 to-emerald-700',
      delay: 0.1
    },
    {
      icon: HiGlobe,
      title: 'Market Expansion',
      description: 'Expand your service portfolio with cutting-edge cloud, security, and AI solutions to meet growing market demands.',
      gradient: 'from-blue-500 to-indigo-700',
      delay: 0.2
    },
    {
      icon: HiUsers,
      title: 'Client Retention',
      description: 'Enhance client relationships with comprehensive IT solutions that address their evolving technology needs.',
      gradient: 'from-purple-500 to-pink-700',
      delay: 0.3
    },
    {
      icon: HiLightningBolt,
      title: 'Technical Expertise',
      description: 'Leverage our certified professionals and proven methodologies for successful project delivery.',
      gradient: 'from-yellow-400 to-orange-500',
      delay: 0.4
    },
    {
      icon: HiShieldCheck,
      title: 'Risk Mitigation',
      description: 'Reduce project risks with our established processes, quality assurance, and comprehensive support.',
      gradient: 'from-red-500 to-rose-700',
      delay: 0.5
    },
    {
      icon: HiCog,
      title: 'Operational Efficiency',
      description: 'Streamline operations with our automated tools, standardized processes, and dedicated support teams.',
      gradient: 'from-teal-500 to-cyan-700',
      delay: 0.6
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechFlow Solutions',
      content: 'Partnering with Compuzign has transformed our business. Their expertise in cloud migration helped us deliver exceptional results to our clients.',
      rating: 5,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToE9t43UR3fZHxjv7w6lgnrOotiXW2jiH64Q&s'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, Digital Dynamics',
      content: 'The partnership has been incredibly valuable. Their security solutions and 24/7 support have given us a competitive edge in the market.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Operations, CloudFirst',
      content: 'Compuzign\'s AI infrastructure solutions have helped us stay ahead of the curve. Their team is responsive, knowledgeable, and results-driven.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  // Partner statistics
  const partnerStats = [
    { value: '500+', label: 'Active Partners', icon: HiUserGroup },
    { value: '95%', label: 'Partner Satisfaction', icon: HiStar },
    { value: '$50M+', label: 'Revenue Generated', icon: HiTrendingUp },
    { value: '24/7', label: 'Support Available', icon: HiShieldCheck }
  ];

  // Technology partners
  const technologyPartners = [
    { name: 'AWS', logo: awsLogo, category: 'Cloud Computing' },
    { name: 'Microsoft Azure', logo: azureLogo, category: 'Cloud Platform' },
    { name: 'Google Cloud', logo: googleCloudLogo, category: 'Cloud Services' },
    { name: 'IBM Cloud', logo: ibmCloudLogo, category: 'Enterprise Cloud' },
    { name: 'VMware', logo: vmwareLogo, category: 'Virtualization' },
    { name: 'Oracle Cloud', logo: oracleLogo, category: 'Database & Cloud' },
    { name: 'Nutanix', logo: nutanixLogo, category: 'Hyperconverged' },
    { name: 'Proxmox', logo: proxmoxLogo, category: 'Open Source' }
  ];

  const vendorPartners = [
    { name: 'Dell EMC', logo: dellEmcLogo, category: 'Storage & Infrastructure' },
    { name: 'IBM', logo: ibmLogo, category: 'Enterprise Solutions' },
    { name: 'NetApp', logo: netappLogo, category: 'Data Management' },
    { name: 'Hitachi', logo: hitachiLogo, category: 'Storage Systems' },
    { name: 'DXC Technology', logo: dxcLogo, category: 'IT Services' },
    { name: 'Pure Storage', logo: pureStorageLogo, category: 'Flash Storage' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white px-6 transition-all duration-700 ease-in-out overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -80, 60, 0],
                opacity: [0.3, 0.8, 0.5, 0.3],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <motion.div
          className={`bg-black/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-4xl text-center transform transition duration-1000 ease-out z-10 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={heroVisible ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <HiUserGroup className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={heroVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Strategic <span className="text-yellow-400">Partnerships</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-light mb-8 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={heroVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Driving Business Success Through Collaborative Technology Solutions
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={heroVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-4 text-lg font-semibold">
              Become a Partner
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Partner Section */}
      <section ref={partnerRef} className="bg-[#0a0f2c] py-20 px-6">
        <div
          className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 transform transition-all duration-1000 ease-out ${
            partnerSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={partnerSectionVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={partnerSectionVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <HiGlobe className="w-12 h-12 text-yellow-400 mx-auto md:mx-0" />
            </motion.div>
            
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: 'rgb(255 218 23)' }}
            >
              Partner with Us to Transform the Future of IT
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              At Compuzign, we understand that innovation thrives through collaboration.
              That's why we seek to build strong alliances with organizations that share our
              vision for delivering cutting-edge IT services.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                { icon: HiCheckCircle, text: 'Proven Expertise' },
                { icon: HiCheckCircle, text: 'Revenue Growth' },
                { icon: HiCheckCircle, text: '24/7 Support' },
                { icon: HiCheckCircle, text: 'Market Expansion' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-gray-300"
                  initial={{ x: -20, opacity: 0 }}
                  animate={partnerSectionVisible ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <item.icon className="w-5 h-5 text-yellow-400" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={partnerSectionVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={partnerHeroBg}
              alt="Partnership Illustration"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section className="bg-[#0a0f2c] py-20 px-6">
        <motion.div 
          className="max-w-6xl mx-auto text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={cardsVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <HiStar className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: 'rgb(255 218 23)' }}
          >
            Why Choose Compuzign as Your Partner
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock new growth opportunities and strengthen your business by partnering with Compuzign.
          </p>
        </motion.div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {partnerBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${benefit.gradient} text-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 min-h-[300px] flex flex-col justify-between group`}
              initial={{ opacity: 0, y: 50 }}
              animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: benefit.delay }}
              whileHover={{ y: -10 }}
            >
              <div>
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="w-8 h-8" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-100 leading-relaxed">{benefit.description}</p>
              </div>
              
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partner Statistics Section */}
      <section ref={statsRef} className="bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3c] py-20 px-6">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={statsVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <HiChartBar className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Partnership Success Metrics
            </h2>
            <p className="text-xl text-gray-300">
              Our partnerships deliver measurable results and sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnerStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technology Partners Section */}
      <section ref={partnersRef} className="bg-[#0a0f2c] py-20 px-6">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={partnersVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <HiServer className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Technology Partners
            </h2>
            <p className="text-xl text-gray-300">
              We collaborate with leading technology providers to deliver comprehensive solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {technologyPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={partnersVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-center text-white font-semibold mb-2">{partner.name}</h3>
                <p className="text-center text-gray-400 text-sm">{partner.category}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-16">
            <HiCube className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Vendor Partners
            </h2>
            <p className="text-xl text-gray-300">
              Strategic partnerships with industry-leading hardware and software vendors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {vendorPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={partnersVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: (index + 8) * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-center text-white font-semibold mb-2">{partner.name}</h3>
                <p className="text-center text-gray-400 text-sm">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="bg-gradient-to-r from-[#1a1f3c] to-[#0a0f2c] py-20 px-6">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={testimonialsVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <HiHeart className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-300">
              Hear from our successful partners about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={testimonialsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section ref={ctaRef} className="bg-[#0a0f2c] py-20 px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={ctaVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-12 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <HiUserGroup className="w-16 h-16 text-white mx-auto mb-8" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join our network of successful partners and start growing your business with 
              cutting-edge technology solutions and unparalleled support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Become a Partner
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold">
                Learn More
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
