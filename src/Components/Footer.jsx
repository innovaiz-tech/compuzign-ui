import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Footer = () => {
    const { themeClasses } = useTheme();
    
    return (
        <footer className={themeClasses.components.footer.container}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="flex flex-col items-start">
                        <div className={themeClasses.components.footer.logo}>
                            <Link to="/" className={themeClasses.components.footer.logoText}>
                                CCI
                            </Link>
                        </div>
                        <p className="mt-4 text-white">Cloud service solutions</p>
                        <div className="flex mt-4 space-x-4">
                            <a href="#" className={themeClasses.components.footer.socialIcon}>
                                <FaTwitter size={18} />
                            </a>
                            <a href="#" className={themeClasses.components.footer.socialIcon}>
                                <FaFacebookF size={18} />
                            </a>
                            <a href="#" className={themeClasses.components.footer.socialIcon}>
                                <FaLinkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-x-16 gap-y-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick links</h3>
                            <ul className="space-y-2">
                                <li><Link to="/" className={themeClasses.components.footer.link}>Home</Link></li>
                                <li><Link to="/support" className={themeClasses.components.footer.link}>Support</Link></li>
                                <li><Link to="/pricing" className={themeClasses.components.footer.link}>Pricing</Link></li>
                                <li><Link to="/about" className={themeClasses.components.footer.link}>About us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li><Link to="/careers" className={themeClasses.components.footer.link}>Careers</Link></li>
                                <li><Link to="/contact" className={themeClasses.components.footer.link}>Contact</Link></li>
                                <li><Link to="/blog" className={themeClasses.components.footer.link}>Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={themeClasses.components.footer.copyright}>
                    <p>© {new Date().getFullYear()} CCI Cloud services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;