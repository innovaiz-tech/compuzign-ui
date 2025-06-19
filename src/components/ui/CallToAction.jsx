import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiArrowRight } from 'react-icons/hi';
import Button from '../common/button';

export default function CallToAction() {
  const contactInfo = [
    {
      icon: HiPhone,
      title: "Phone",
      details: ["+1 (214) 269-1314"],
      color: "text-green-600"
    },
    {
      icon: HiMail,
      title: "Email",
      details: ["info@compuzign.com"],
      color: "text-purple-600"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-primary-bgYellow/20 rounded-full blur-2xl"
        animate={{ 
          y: [-20, 20, -20],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
        animate={{ 
          y: [20, -20, 20],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your{' '}
              <span className="text-primary-bgYellow">IT Operations?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              CompuZign is here to guide you through your IT transformation journey. 
              Discover how our tailored solutions can enhance your operations and support your business growth.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-start">
            {/* Left: Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center space-x-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5"
                  >
                    <div className={`p-3 rounded-lg bg-white/10 ${info.color} flex-shrink-0`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="p-6 rounded-lg bg-primary-bgYellow/10 border border-primary-bgYellow/20">
                <p className="text-primary-bgYellow text-sm font-medium">
                  AVAILABILITY
                </p>
                <p className="text-white mt-2">
                  We are open to all types of collaboration offers and consulting opportunities. 
                  Reach out to us anytime to create a better future for all technology users together.
                </p>
              </div>
            </motion.div>

            {/* Right: CTA Actions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Choose Your Next Step
                </h3>
                
                <div className="space-y-3">
                  {/* Primary CTA */}
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full justify-between group h-14 font-semibold"
                  >
                    <span>Request a Demo</span>
                    <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  {/* Secondary CTA */}
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full justify-between group h-14 border-2 border-white/20 bg-white/5 text-white hover:bg-white hover:text-black font-medium"
                  >
                    <span>Learn More About Our Services</span>
                    <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  {/* Tertiary CTA - More prominent than ghost */}
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full justify-between group h-14 border-2 border-primary-bgYellow/30 bg-primary-bgYellow/10 text-primary-bgYellow hover:bg-primary-bgYellow hover:text-black font-medium"
                  >
                    <span>Schedule a Consultation</span>
                    <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary-bgYellow">24/7</p>
                      <p className="text-sm text-gray-400">Support Available</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary-bgYellow">&lt; 24h</p>
                      <p className="text-sm text-gray-400">Response Time</p>
                    </div>
                  </div>
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 