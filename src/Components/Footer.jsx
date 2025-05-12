import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                    <div className="mb-8 md:mb-0">
                        <div className="flex items-center mb-4">
                            <span className="text-2xl font-bold bg-blue-600 px-2 py-1 mr-2">CC</span>
                        </div>
                        <p className="text-gray-300 text-lg">One Goal, One Aim</p>

                        <div className="flex items-center gap-4">

                            <div className="text-yellow-300 text-2xl flex items-center justify-center">
                                <FaFacebook className="text-3xl" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center">
                                <FaInstagram className="text-black text-xl" />
                            </div>
                            <div className="text-yellow-300 text-2xl flex items-center justify-center">
                                <AiFillTwitterCircle className="text-4xl" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center">
                                <p className="text-black font-bold text-base">in</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold py-4">Quick Links</h3>
                        <div className="flex flex-wrap gap-8 py-10">
                            <div>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/centers" className="text-gray-300 hover:text-white transition-colors">
                                            Centers
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
                                            Support
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                                            About us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} CC Business. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}