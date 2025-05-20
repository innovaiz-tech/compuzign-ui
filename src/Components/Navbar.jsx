import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AccordionComponent from "./Accordion/Accordion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const navItems = [
        {
            title: "Services",
            dropdown: [
                { label: 'Support-as-a-service', href: '/support' },
                { label: 'Migration-as-a-service', href: '/migration' },
                { label: 'Cloud and Infrastructure-as-a-service', href: '/cloud' }
            ]
        },
        {
            title: "Pricing",
            dropdown: []
        },
        {
            title: "Careers",
            dropdown: []
        },
        {
            title: "Company",
            dropdown: [
                { label: "About Us", href: "/about" },
                { label: "Contact Us" }
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

    // Logo component with consistent styling
    const Logo = () => (
        <div className="font-bold text-white">
            <Link to='/'>CCI</Link>
        </div>
    );

    return (
        !isMobile ? (
            <section className="bg-primary text-white fixed w-full z-50 flex items-center justify-between p-4">
                <Logo />

                <div className="flex gap-8">
                    {navItems.map((item, index) => (
                        <div key={index} className="group relative py-2">
                            <div className="cursor-pointer relative inline-block">
                                <span className="relative text-white">{item.title}</span>
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                                ></span>
                            </div>

                            {item.dropdown && item.dropdown.length > 0 && (
                                <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2">
                                    {item.dropdown.map((dropdownItem, i) => (
                                        <p key={i} className="p-2 text-nowrap hover:bg-gray-100 text-secondary">
                                            {dropdownItem.href ? (
                                                <Link to={dropdownItem.href}>{dropdownItem.label}</Link>
                                            ) : (
                                                dropdownItem.label || dropdownItem
                                            )}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex gap-4">
                    <button className="text-white hover:text-white/80 px-3 py-1">Support</button>
                    <button className="bg-white text-primary hover:bg-gray-100 px-4 py-1 rounded">Contact Us</button>
                </div>
            </section>
        ) : (
            <section className="w-full h-full relative">
                <div className="fixed w-full bg-primary flex justify-between px-4 py-2">
                    <Logo />
                    <FaBars
                        onClick={() => setIsOpen(true)}
                        className="text-2xl cursor-pointer text-white"
                    />
                </div>

                {isOpen && (
                    <div className="fixed inset-0 z-50 flex">
                        <div className="w-3/4 sm:w-1/4 h-full bg-white absolute left-0 top-0 p-4 shadow-lg">
                            <div className="flex justify-between items-center mb-8">
                                <div className="font-bold text-primary">
                                    <Link to='/' onClick={() => setIsOpen(false)}>CCI</Link>
                                </div>
                                <FaTimes
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl cursor-pointer"
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                                <div className="text-primary hover:text-primary-hover">Home</div>
                                {navItems.map((item, index) => {
                                    if (item.dropdown.length === 0) {
                                        return <div className="text-primary hover:text-primary-hover" key={item.title}>{item.title}</div>;
                                    } else {
                                        return <AccordionComponent className="text-primary hover:text-primary-hover" key={item.title} accordionContent={item} index={index} />;
                                    }
                                })}
                                <div className="text-primary hover:text-primary-hover">Support</div>
                                <div className="text-primary hover:text-primary-hover">Contact Us</div>
                            </div>
                        </div>
                        <div
                            onClick={() => setIsOpen(false)}
                            className="w-1/4 sm:w-3/4 h-full bg-black bg-opacity-50 backdrop-blur-sm ml-auto"
                        ></div>
                    </div>
                )}
            </section>
        )
    );
}