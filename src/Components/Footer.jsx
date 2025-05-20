import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-10 px-4 md:px-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="flex flex-col items-start">
                        <div className="text-xl font-bold">
                            <Link to="/" className="text-white text-2xl font-bold hover:opacity-80 transition-opacity">
                                CCI
                            </Link>
                        </div>
                        <p className="mt-4 text-white">Cloud service solutions</p>
                        <div className="flex mt-4 space-x-4">
                            <a href="#" aria-label="Twitter" className="text-white hover:opacity-80 p-2 rounded-full inline-flex items-center justify-center transition-opacity">
                                <FaTwitter size={18} />
                            </a>
                            <a href="#" aria-label="Facebook" className="text-white hover:opacity-80 p-2 rounded-full inline-flex items-center justify-center transition-opacity">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-white hover:opacity-80 p-2 rounded-full inline-flex items-center justify-center transition-opacity">
                                <FaLinkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-x-16 gap-y-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick links</h3>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-white hover:opacity-80 transition-opacity">Home</Link></li>
                                <li><Link to="/support" className="text-white hover:opacity-80 transition-opacity">Support</Link></li>
                                <li><Link to="/pricing" className="text-white hover:opacity-80 transition-opacity">Pricing</Link></li>
                                <li><Link to="/about" className="text-white hover:opacity-80 transition-opacity">About us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li><Link to="/careers" className="text-white hover:opacity-80 transition-opacity">Careers</Link></li>
                                <li><Link to="/contact" className="text-white hover:opacity-80 transition-opacity">Contact</Link></li>
                                <li><Link to="/blog" className="text-white hover:opacity-80 transition-opacity">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20 text-sm text-white/80">
                    <p>© {new Date().getFullYear()} CCI Cloud services. All rights reserved.</p>
                    <p className="mt-2 text-sm">
                        <Link to="/privacy" className="hover:underline mr-4">Privacy Policy</Link>
                        <Link to="/terms" className="hover:underline">Terms of Service</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;