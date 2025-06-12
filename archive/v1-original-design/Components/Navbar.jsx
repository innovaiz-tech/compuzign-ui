import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { RiRocketLine } from "react-icons/ri";
import { IoIosGlobe } from "react-icons/io";
import AccordionComponent from "./Accordion/Accordion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const navItems = [
        {
            title: "Services",
            href: '/services',
            dropdown: [
                { label: 'Support as a service', href: '/csaas' },
                { label: 'Migration as a service', href: '/maas' },
                { label: 'Cloud and Infrastructure as a service', href: '/ciaas' }
            ]
        },
        {
            title: "Pricing",
            href: '/pricing',
            dropdown: []
        },
        {
            title: "Careers",
            href: '/careers',
            dropdown: []
        },
        {
            title: "Company",
            href: '/about-us',
            dropdown: [
                { label: "About Us", href: "/about-us" },
                { label: "Contact Us", href: "/contact-us" }
            ]
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1200);
            if (window.innerWidth >= 1200) setIsOpen(false);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const Logo = () => (
        <motion.div 
            className="font-bold text-text-light active:text-secondary-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            <Link to='/' className="flex items-center gap-2">
                <span className="bg-gradient-to-r from-accent to-primary-light bg-clip-text text-white">COMPUZIGN</span>
            </Link>
        </motion.div>
    );

    // Animation variants for navbar items
    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    // Animation variants for dropdown items
    const dropdownVariants = {
        hidden: { opacity: 0, height: 0, scale: 0.9 },
        visible: { 
            opacity: 1, 
            height: "auto", 
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                staggerChildren: 0.05
            }
        },
        exit: { 
            opacity: 0, 
            height: 0, 
            scale: 0.9,
            transition: { 
                duration: 0.2,
                ease: "easeIn" 
            }
        }
    };

    const dropdownItemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.2 }
        },
        exit: { 
            opacity: 0, 
            x: -10,
            transition: { duration: 0.1 } 
        }
    };

    return (
        !isMobile ? (
            <motion.section 
                className="bg-gradient-to-r from-primary to-primary-dark text-text-light fixed w-full z-50 flex items-center justify-between p-4 backdrop-blur-sm bg-opacity-95"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Logo />

                <div className="flex gap-8">
                    {navItems.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="group relative py-2"
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={navItemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="cursor-pointer relative inline-block">
                                <Link 
                                    className="relative text-text-light hover:text-accent active:text-secondary-light transition-colors duration-300" 
                                    to={item.href}
                                >
                                    {item.title}
                                </Link>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-0.5 bg-accent"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                ></motion.span>
                            </div>

                            {item.dropdown && item.dropdown.length > 0 && (
                                <AnimatePresence>
                                    <motion.div 
                                        className="absolute hidden group-hover:block bg-secondary/90 backdrop-blur-md shadow-lg rounded-md mt-2 overflow-hidden border border-accent/20"
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        {item.dropdown.map((dropdownItem, i) => (
                                            <motion.div
                                                key={i}
                                                variants={dropdownItemVariants}
                                            >
                                                <Link
                                                    to={dropdownItem.href}
                                                    className="block pl-3 pr-8 py-2 text-text-light hover:bg-primary/60 hover:text-accent transition-all duration-300 border-l-2 border-transparent hover:border-accent"
                                                >
                                                    {dropdownItem.href ? (
                                                        <div className="relative whitespace-nowrap rounded-md">{dropdownItem.label}</div>
                                                    ) : (
                                                        dropdownItem.label || dropdownItem
                                                    )}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="flex gap-4 items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link 
                            to='/support' 
                            className="text-text-light hover:text-accent transition-colors duration-300 px-3 py-1 cursor-pointer"
                        >
                            Support
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link 
                            to='/contact-us' 
                            className="bg-gradient-to-r from-accent to-primary-light hover:from-primary-light hover:to-accent text-text-light px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 shadow-md hover:shadow-accent/30 flex items-center gap-2"
                        >
                            <span>Contact Us</span>
                            <RiRocketLine className="text-lg" />
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        ) : (
            <section className="w-full h-full relative">
                <motion.div 
                    className="fixed w-full bg-gradient-to-r from-primary to-primary-dark flex justify-between px-4 py-2 z-50 backdrop-blur-sm bg-opacity-90 shadow-md"
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Logo />
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaBars
                            onClick={() => setIsOpen(true)}
                            className="text-2xl cursor-pointer text-text-light hover:text-accent transition-colors duration-300"
                        />
                    </motion.div>
                </motion.div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            className="fixed inset-0 z-50 flex"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div 
                                className="w-3/4 sm:w-1/4 h-full bg-gradient-to-br from-secondary to-secondary-dark absolute left-0 top-0 p-6 shadow-xl border-r border-accent/20 overflow-y-auto"
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                            >
                                <div className="flex justify-between items-center mb-8">
                                    <motion.div 
                                        className="font-bold text-text-light"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link to='/' onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                                            <span className="bg-gradient-to-r from-accent to-primary-light bg-clip-text text-white">COMPUZIGN</span>
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FaTimes
                                            onClick={() => setIsOpen(false)}
                                            className="text-xl cursor-pointer text-text-light hover:text-accent transition-colors duration-300"
                                        />
                                    </motion.div>
                                </div>

                                <div className="flex flex-col mt-8">
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="py-3 border-b border-accent/20"
                                    >
                                        <Link 
                                            to='/' 
                                            onClick={() => setIsOpen(false)}
                                            className="text-text-light hover:text-accent transition-colors duration-300 flex items-center justify-between w-full"
                                        >
                                            <span className="font-medium">Home</span>
                                        </Link>
                                    </motion.div>
                                    
                                    {navItems.map((item, index) => {
                                        if (item.dropdown.length === 0) {
                                            return (
                                                <motion.div
                                                    key={item.title}
                                                    whileHover={{ x: 5 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="py-3 border-b border-accent/20"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <Link 
                                                        to={item.href} 
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-text-light hover:text-accent transition-colors duration-300 flex items-center justify-between w-full"
                                                    >
                                                        <span className="font-medium">{item.title}</span>
                                                    </Link>
                                                </motion.div>
                                            );
                                        } else {
                                            return (
                                                <motion.div
                                                    key={item.title}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="py-3 border-b border-accent/20"
                                                >
                                                    <AccordionComponent 
                                                        className="text-text-light hover:text-accent transition-colors duration-300" 
                                                        accordionContent={item} 
                                                        index={index} 
                                                    />
                                                </motion.div>
                                            );
                                        }
                                    })}
                                    
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="py-3 border-b border-accent/20"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: navItems.length * 0.1 }}
                                    >
                                        <Link 
                                            to='/support' 
                                            onClick={() => setIsOpen(false)}
                                            className="text-text-light hover:text-accent transition-colors duration-300 flex items-center justify-between w-full"
                                        >
                                            <span className="font-medium">Support</span>
                                        </Link>
                                    </motion.div>
                                    
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: (navItems.length + 1) * 0.1 }}
                                    >
                                        <Link 
                                            to='/contact-us' 
                                            onClick={() => setIsOpen(false)}
                                            className="bg-gradient-to-r from-accent to-primary-light hover:from-primary-light hover:to-accent text-text-light px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-accent/30 flex items-center justify-center gap-2 w-full"
                                        >
                                            <span>Contact Us</span>
                                            <RiRocketLine className="text-lg" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                            
                            <motion.div
                                onClick={() => setIsOpen(false)}
                                className="w-1/4 sm:w-3/4 h-full bg-black/60 backdrop-blur-sm ml-auto"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            ></motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        )
    );
}