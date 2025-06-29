import { Link } from 'react-router-dom';
import { HiPhone, HiMail, HiLocationMarker, HiArrowRight, HiGlobeAlt } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    {
      category: "Mobility Management",
      items: [
        { name: "Storage Migration", href: "/services/storage-migration" },
        { name: "Compute Migration", href: "/services/compute-migration" },
        { name: "Cloud Migration", href: "/services/cloud-migration" }
      ]
    },
    {
      category: "Cyber Resilience",
      items: [
        { name: "Cyber Recovery & Monitoring", href: "/cyber-recovery-monitoring" },
        { name: "Disaster Ready Migration", href: "/services/disaster-migration" },
        { name: "Extended Threat Detection", href: "/services/threat-detection" }
      ]
    },
    {
      category: "Managed Services",
      items: [
        { name: "AI Data Curation", href: "/services/ai-data-curation" },
        { name: "Cloud Transformation", href: "/services/cloud-transformation" },
        { name: "Network Operations Center", href: "/services/noc" }
      ]
    }
  ];

  const topServices = [
    {
      category: "Data Driven Consulting",
      items: [
        { name: "AI Infrastructure & HPC Assessment", href: "/consulting/ai-infrastructure" },
        { name: "Application Modernization", href: "/consulting/app-modernization" },
        { name: "Automation", href: "/consulting/automation" },
        { name: "Cost Optimization", href: "/consulting/cost-optimization" }
      ]
    },
    {
      category: "RaaS",
      items: [
        { name: "Cloud Platforms", href: "/raas/cloud-platforms" },
        { name: "Networking and Security", href: "/raas/networking-security" },
        { name: "Backup and Recovery Solutions", href: "/raas/backup-recovery" },
        { name: "AI/ML Deployment", href: "/raas/ai-ml" }
      ]
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Partners", href: "/partners" },
    { name: "Careers", href: "/careers" },
    { name: "Resources", href: "/resources" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-bgYellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-bgYellow to-yellow-400 rounded-full mb-4">
              <HiGlobeAlt className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Stay Connected with CompuZign
            </h3>
            <p className="text-base text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights on IT transformation, cloud solutions, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent"
              />
              <button className="px-5 py-2.5 bg-gradient-to-r from-primary-bgYellow to-yellow-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-400 hover:to-primary-bgYellow transition-all duration-300 flex items-center justify-center gap-2 group">
                Subscribe
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <Link to="/" className="inline-block group">
                  <div className="text-2xl font-bold">
                    <span className="text-white group-hover:text-gray-200 transition-colors">Compu</span>
                    <span className="text-primary-bgYellow">Zign</span>
                  </div>
                </Link>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Transforming your IT landscape with expert solutions. We empower businesses to thrive in an ever-evolving technological landscape.
                </p>
              </div>
              
              {/* Social Media */}
              <div>
                <h4 className="text-base font-semibold mb-3 text-primary-bgYellow">
                  Connect With Us
                </h4>
                <div className="flex space-x-3">
                  {[
                    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                    { icon: FaTwitter, href: "#", label: "Twitter" },
                    { icon: FaFacebook, href: "#", label: "Facebook" },
                    { icon: FaInstagram, href: "#", label: "Instagram" },
                    { icon: FaYoutube, href: "#", label: "YouTube" },
                    { icon: FaGithub, href: "#", label: "GitHub" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 bg-gray-800 hover:bg-primary-bgYellow text-gray-400 hover:text-gray-900 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Services - Data Driven Consulting & RaaS */}
            {topServices.map((serviceGroup, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-base font-semibold text-primary-bgYellow relative">
                  {serviceGroup.category}
                  <div className="absolute -bottom-1 left-0 w-6 h-0.5 bg-gradient-to-r from-primary-bgYellow to-transparent"></div>
                </h4>
                <ul className="space-y-2">
                  {serviceGroup.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link 
                        to={item.href}
                        className="text-gray-300 hover:text-white transition-colors flex items-center group text-sm"
                      >
                        <HiArrowRight className="w-3 h-3 mr-2 text-primary-bgYellow opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Core Services */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-primary-bgYellow relative">
                Core Services
                <div className="absolute -bottom-1 left-0 w-6 h-0.5 bg-gradient-to-r from-primary-bgYellow to-transparent"></div>
              </h4>
              <div className="space-y-3">
                {services.map((serviceGroup, index) => (
                  <div key={index}>
                    <h5 className="text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                      {serviceGroup.category}
                    </h5>
                    <ul className="space-y-1">
                      {serviceGroup.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link 
                            to={item.href}
                            className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                          >
                            <HiArrowRight className="w-3 h-3 mr-2 text-primary-bgYellow opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                            <span className="group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-primary-bgYellow relative">
                Quick Links
                <div className="absolute -bottom-1 left-0 w-6 h-0.5 bg-gradient-to-r from-primary-bgYellow to-transparent"></div>
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center group text-sm"
                    >
                      <HiArrowRight className="w-3 h-3 mr-2 text-primary-bgYellow opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-primary-bgYellow mb-1">
                US Headquarters
              </h4>
              <p className="text-gray-400 text-sm">Ready to transform your IT landscape?</p>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 backdrop-blur-sm rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="group">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-bgYellow to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <HiLocationMarker className="w-5 h-5 text-gray-900" />
                  </div>
                  <div className="text-gray-300 text-sm">
                    <p className="font-medium">5000 Quorum Drive, Suite 710</p>
                    <p>Dallas, TX 75254</p>
                  </div>
                </div>
                
                <div className="group">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-bgYellow to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <HiMail className="w-5 h-5 text-gray-900" />
                  </div>
                  <a href="mailto:info@compuzign.com" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
                    info@compuzign.com
                  </a>
                </div>
                
                <div className="group">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-bgYellow to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <HiPhone className="w-5 h-5 text-gray-900" />
                  </div>
                  <a href="tel:+12142691314" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
                    +1 (214) 269-1314
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} CompuZign. All Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" },
                { name: "Sitemap", href: "/sitemap" }
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-400 hover:text-primary-bgYellow transition-colors text-sm relative group"
                >
                  {link.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-bgYellow group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
