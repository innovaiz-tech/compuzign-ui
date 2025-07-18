import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiMenuAlt3, 
  HiX, 
  HiChevronDown,
  HiPhone,
  HiCloud,
  HiShieldCheck,
  HiCog,
  HiChartBar,
  HiUsers,
  HiOfficeBuilding,
  HiGlobeAlt,
  HiCurrencyDollar,
  HiLightningBolt,
  HiDatabase,
  HiDesktopComputer,
  HiServer,
  HiLockClosed,
  HiRefresh,
  HiEye,
  HiSupport,
  HiCode,
  HiBookOpen,
  HiAcademicCap,
  HiUserGroup,
  HiTrendingUp,
  HiCubeTransparent,
  HiColorSwatch,
  HiSparkles
} from 'react-icons/hi';
import Button from '../common/button';

export default function Headers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const location = useLocation();
  
  // Check if current page has light background
  // Force light theme for any route that's not the home page
  // Since we only have '/' and '*' routes, anything not '/' is the PageNotFound component
  const isLightBackgroundPage = location.pathname !== '/';
  
  // Force header to always show on light background pages
  const shouldUseLightTheme = isLightBackgroundPage || isScrolled;

  // Handle scroll effect - make header visible sooner
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('mobile-menu-open');
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      document.body.classList.remove('mobile-menu-open');
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location]);

  // Close megamenu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setActiveMegaMenu(null);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Mega menu data structure - matching CompuZign services
  const megaMenuData = {
    services: {
      title: 'Services',
      sections: [
        {
          title: 'Mobility Management',
          description: 'Seamless migration and transformation solutions',
          items: [
            {
              name: 'Storage Migration',
              description: 'Migrate data with zero downtime',
              icon: HiDatabase,
              href: '/storage-migration'
            },
            {
              name: 'Compute Migration',
              description: 'Server and workload transitions',
              icon: HiServer,
              href: '/compute-migration'
            },
            {
              name: 'Cloud Migration',
              description: 'AWS, Azure, Google Cloud expertise',
              icon: HiCloud,
              href: '/cloud-migration'
            }
          ]
        },
        {
          title: 'Cyber Resilience',
          description: 'Advanced security and threat protection',
          items: [
            {
              name: 'Cyber Recovery & Monitoring',
              description: '24/7 threat detection and response',
              icon: HiShieldCheck,
              href: '/cyber-recovery-monitoring'
            },
            {
              name: 'Disaster Recovery, Business Data Continuity',
              description: 'Business continuity planning',
              icon: HiRefresh,
              href: '/disaster-recovery-business-continuity'
            },
            {
              name: 'Extended Threat Detection & Response',
              description: 'Advanced threat hunting and response',
              icon: HiEye,
              href: '/extended-threat-detection'
            },
            {
              name: 'Privileged User Access Risk Assessment',
              description: 'Secure privileged access management',
              icon: HiLockClosed,
              href: '/privileged-access-strategies'
            },
            {
              name: 'Ransomware Response Team',
              description: 'Rapid ransomware incident response',
              icon: HiSupport,
              href: '/ransomware-response'
            },
            {
              name: 'Vulnerability Assessment and Remediation',
              description: 'Comprehensive security assessments',
              icon: HiShieldCheck,
              href: '/vulnerability-assessment-remediation'
            }
          ]
        },
        {
          title: 'Managed Services',
          description: 'Comprehensive IT operations support',
          items: [
            {
              name: 'Application Programmer',
              description: 'Custom software development',
              icon: HiCode,
              href: '/services/application-programmer'
            },
            {
              name: 'Cloud Transformation',
              description: 'End-to-end cloud adoption',
              icon: HiCubeTransparent,
              href: '/services/cloud-transformation'
            },
            {
              name: 'Monitoring & Automation',
              description: 'Automated infrastructure monitoring',
              icon: HiChartBar,
              href: '/services/monitoring-automation'
            },
            {
              name: 'Network Operation Centre',
              description: 'Infrastructure monitoring & support',
              icon: HiDesktopComputer,
              href: '/services/noc'
            },
            {
              name: 'Security Operations Center',
              description: '24/7 security monitoring and response',
              icon: HiEye,
              href: '/services/soc'
            }
          ]
        },
        {
          title: 'Data-Driven Consulting',
          description: 'Strategic IT consulting and optimization',
          items: [
            {
              name: 'AI Infrastructure and HPC Assessment',
              description: 'High-performance computing solutions',
              icon: HiSparkles,
              href: '/services/ai-infrastructure'
            },
            {
              name: 'Application Modernization and Orchestration',
              description: 'Legacy system modernization',
              icon: HiRefresh,
              href: '/services/app-modernization'
            },
            {
              name: 'Automation',
              description: 'Process automation and optimization',
              icon: HiCog,
              href: '/services/automation'
            },
            {
              name: 'Cost Optimization',
              description: 'Reduce IT operational costs',
              icon: HiCurrencyDollar,
              href: '/services/cost-optimization'
            }
          ]
        }
      ],
      featured: {
        title: 'RaaS - Resource as a Service',
        description: 'Flexible talent solutions for IT demands with cloud platforms, networking, security, and AI/ML deployment',
        icon: HiUsers,
        href: '/raas',
        badge: 'Popular'
      }
    },
    resources: {
      title: 'Resources',
      sections: [
        {
          title: 'Content & Insights',
          items: [
            {
              name: 'Case Studies',
              description: 'Customer success stories',
              icon: HiTrendingUp,
              href: '/case-studies'
            },
            {
              name: 'Whitepapers',
              description: 'Industry insights and research',
              icon: HiBookOpen,
              href: '/whitepapers'
            }
          ]
        },
        {
          title: 'Career Opportunities',
          items: [
            {
              name: 'Current Openings',
              description: 'Join our growing team',
              icon: HiUsers,
              href: '/careers'
            },
            {
              name: 'Company Culture',
              description: 'Learn about our values',
              icon: HiOfficeBuilding,
              href: '/culture'
            }
          ]
        },
        {
          title: 'Support & Contact',
          items: [
            {
              name: 'Contact Us',
              description: 'Get in touch with our team',
              icon: HiPhone,
              href: '/contact'
            },
            {
              name: 'Support Center',
              description: '24/7 technical assistance',
              icon: HiSupport,
              href: '/support'
            },
            {
              name: 'Partners',
              description: 'Technology and business partners',
              icon: HiUserGroup,
              href: '/partners'
            }
          ]
        }
      ]
    }
  };

  const mainNavigation = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', key: 'services' },
    { name: 'Resources', key: 'resources' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Partners', href: '/partners' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleMegaMenu = (key) => {
    setActiveMegaMenu(activeMegaMenu === key ? null : key);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

    return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldUseLightTheme
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-50">
            <div className="text-2xl font-bold">
              <span className={`${shouldUseLightTheme ? 'text-black' : 'text-white'} transition-colors`}>
                Compu
              </span>
              <span className="text-primary-bgYellow">Zign</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative">
                {item.key ? (
                  <button
                    className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeMegaMenu === item.key
                        ? 'text-primary-bgYellow bg-primary-bgYellow/10'
                        : `${shouldUseLightTheme ? 'text-gray-900' : 'text-white'} hover:text-primary-bgYellow ${shouldUseLightTheme ? 'hover:bg-gray-50' : 'hover:bg-white/10'}`
                    }`}
                    onMouseEnter={() => setActiveMegaMenu(item.key)}
                  >
                    <span>{item.name}</span>
                    <HiChevronDown className={`w-4 h-4 transition-transform ${
                      activeMegaMenu === item.key ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'text-primary-bgYellow bg-primary-bgYellow/10'
                        : `${shouldUseLightTheme ? 'text-gray-900' : 'text-white'} hover:text-primary-bgYellow ${shouldUseLightTheme ? 'hover:bg-gray-50' : 'hover:bg-white/10'}`
                    }`}
                    onMouseEnter={() => setActiveMegaMenu(null)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-3 ml-6" onMouseEnter={() => setActiveMegaMenu(null)}>
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-md transition-colors ${
              shouldUseLightTheme 
                ? 'text-gray-900 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            } z-50`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mega Menu Content */}
      <AnimatePresence>
        {activeMegaMenu && megaMenuData[activeMegaMenu] && (
          <div className="absolute top-full left-0 right-0 z-[9998] mt-2 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-none"
                onMouseLeave={closeMegaMenu}
              >
                <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200/50 p-4 sm:p-6 lg:p-8 max-h-[80vh] overflow-y-auto relative">
                  {/* Featured Section - Moved to Top */}
                  {megaMenuData[activeMegaMenu].featured && (
                    <div className="mb-6 lg:mb-8 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-600/50 backdrop-blur-md hover:backdrop-blur-lg hover:shadow-2xl hover:border-slate-500/70 hover:scale-[1.01] hover:from-slate-700 hover:to-slate-800 transition-all duration-300 ease-out relative overflow-hidden group shadow-lg">
                        {/* Glassmorphic shimmer effect for featured section */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        
                        <div className="flex items-center space-x-3 mb-3 relative z-10">
                          {(() => {
                            const IconComponent = megaMenuData[activeMegaMenu].featured.icon;
                            return <IconComponent className="w-6 h-6 text-yellow-400 group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-300" />;
                          })()}
                          {megaMenuData[activeMegaMenu].featured.badge && (
                            <span className="px-3 py-1 text-sm font-semibold bg-primary-bgYellow text-slate-900 rounded-full group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                              {megaMenuData[activeMegaMenu].featured.badge}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-primary-bgYellow transition-colors duration-300">
                          {megaMenuData[activeMegaMenu].featured.title}
                        </h3>
                        <p className="text-sm font-medium text-gray-100 sm:text-gray-200 mb-4 leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">
                          {megaMenuData[activeMegaMenu].featured.description}
                        </p>
                        <Link
                          to={megaMenuData[activeMegaMenu].featured.href}
                          className="inline-flex items-center text-sm font-medium text-primary-bgYellow hover:text-yellow-300 hover:underline hover:scale-105 transition-all duration-300 relative z-10"
                          onClick={closeMegaMenu}
                        >
                          Learn more →
                        </Link>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {megaMenuData[activeMegaMenu].sections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <div>
                      {section.title === 'Data-Driven Consulting' ? (
                        <Link
                          to="/data-driven-consulting"
                          className="group block mb-3 hover:bg-gradient-to-br hover:from-primary-bgYellow/5 hover:to-primary-bgYellow/10 rounded-lg p-2 -m-2 transition-all duration-200"
                          onClick={closeMegaMenu}
                        >
                          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider group-hover:text-primary-bgYellow transition-colors duration-200 mb-1">
                            {section.title}
                          </h3>
                          {section.description && (
                            <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-200">
                              {section.description}
                            </p>
                          )}
                        </Link>
                      ) : (
                        <>
                          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                            {section.title}
                          </h3>
                          {section.description && (
                            <p className="text-sm text-gray-500 mb-3">
                              {section.description}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                    <div className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.href}
                          className="group flex items-start space-x-3 p-3 rounded-xl border border-transparent hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:backdrop-blur-md hover:shadow-2xl hover:border-white/30 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out relative overflow-hidden"
                          onClick={closeMegaMenu}
                        >
                          {/* Glassmorphic shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                          
                          <div className="flex-shrink-0 relative z-10">
                            <item.icon className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-300" />
                          </div>
                          <div className="flex-1 min-w-0 relative z-10">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-gray-800 group-hover:font-semibold mb-1 transition-all duration-300">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-500 group-hover:text-gray-600 line-clamp-2 transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation - Simplified and Working */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-16 left-0 right-0 bg-white shadow-xl z-40 lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              {/* Navigation Items */}
              {mainNavigation.map((item) => (
                <div key={item.name}>
                  {item.key ? (
                    <div>
                      <button
                        onClick={() => handleMegaMenu(item.key)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-lg font-medium text-gray-900 hover:text-primary-bgYellow hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <span>{item.name}</span>
                        <HiChevronDown className={`w-5 h-5 transition-transform ${
                          activeMegaMenu === item.key ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Submenu */}
                      {activeMegaMenu === item.key && (
                        <div className="mt-2 pl-4 space-y-2">
                          {megaMenuData[item.key].sections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="space-y-1">
                              <h4 className="text-sm font-semibold text-primary-bgYellow uppercase tracking-wider">
                                {section.title}
                              </h4>
                              {section.items.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.href}
                                  className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:text-primary-bgYellow hover:bg-gray-50 rounded-md transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                >
                                  <subItem.icon className="w-4 h-4 text-yellow-400" />
                                  <span>{subItem.name}</span>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-4 py-3 text-lg font-medium text-gray-900 hover:text-primary-bgYellow hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* CTA Buttons */}
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  variant="primary" 
                  size="md" 
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
);
}