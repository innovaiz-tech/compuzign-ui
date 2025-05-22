import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary-light text-text-light py-10 px-4 md:px-8">
            <div className="mx-auto px-4">
                <div className="flex flex-row flex-wrap gap-5 justify-start sm:justify-around ">
                    <div className="flex flex-col items-start">
                        <div className="text-xl font-bold">
                            <Link to="/" className="text-text-light text-2xl font-bold hover:opacity-80 transition-opacity">
                                COMPUZIGN
                            </Link>
                        </div>
                        <p className="mt-4 text-text-light">Cloud service solutions</p>
                        <div className="flex items-center gap-4">

                            <Link to='#' className="text-text-light hover:text-secondary cursor-pointer text-2xl flex items-center justify-center">
                                <FaFacebook className="text-3xl " />
                            </Link>
                            <Link to='#' className="w-8 h-8 rounded-full bg-content hover:bg-secondary cursor-pointer flex items-center justify-center">
                                <FaInstagram className="text-footer text-xl " />
                            </Link>
                            <Link to='#' className="text-text-light hover:text-secondary cursor-pointer text-2xl flex items-center justify-center">
                                <AiFillTwitterCircle className="text-4xl " />
                            </Link>
                            <Link to='#' className="w-8 h-8 rounded-full bg-content hover:bg-secondary cursor-pointer flex items-center justify-center">
                                <p className="text-footer font-bold text-base">in</p>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h2 className='text-text-light mt-0 mb-0 text-xl font-bold leading-6 no-underline'>Quick Links</h2>
                        <ul className="flex gap-8 flex-wrap max-w-80">
                            <li><Link to="/" className="text-text-light hover:opacity-80 transition-opacity">Home</Link></li>
                            <li><Link to="/support" className="text-text-light hover:opacity-80 transition-opacity">Services</Link></li>
                            <li><Link to="/pricing" className="text-text-light hover:opacity-80 transition-opacity">Careers</Link></li>
                            <li><Link to="/about" className="text-text-light hover:opacity-80 transition-opacity">Pricing</Link></li>
                            <li><Link to="/careers" className="text-text-light hover:opacity-80 transition-opacity">Support</Link></li>
                            <li><Link to="/contact" className="text-text-light hover:opacity-80 transition-opacity">Contact</Link></li>
                            <li><Link to="/blog" className="text-text-light hover:opacity-80 transition-opacity">About Us</Link></li>
                        </ul>
                    </div>
                    <div></div>
                </div>

                <div className="flex items-center gap-4 justify-between flex-wrap mt-8 pt-8 border-t border-white/20 text-sm text-text-light/80">
                    <p>© {new Date().getFullYear()} CCI Cloud services. All rights reserved.</p>
                    <p className="text-sm flex flex-wrap">
                        <Link to="/privacy" className="underline mr-4">Privacy Policy</Link>
                        <Link to="/terms" className="underline">Terms of Service</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;