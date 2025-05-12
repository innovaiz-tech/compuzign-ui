import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import AccordionDemo from "./Accordion/Accordion";


export default function Navbar({ theme = 'theme1' }) {
    const themeClasses = {
        theme1: {
            bg: 'bg-theme1-background',
            text: 'text-theme1-text',
            accent: 'bg-theme1-primary',
            hoverText: 'hover:text-theme1-primary',
            hoverBg: 'hover:bg-theme1-hover',
            button: 'bg-theme1-primary hover:bg-theme1-hover text-white',
            dropdown: 'bg-white shadow-md',
            dropdownItem: 'hover:bg-gray-100'
        },
        theme2: {
            bg: 'bg-theme2-background',
            text: 'text-theme2-text',
            accent: 'bg-theme2-primary',
            hoverText: 'hover:text-theme2-primary',
            hoverBg: 'hover:bg-theme2-hover',
            button: 'bg-theme2-primary hover:bg-theme2-hover text-white',
            dropdown: 'bg-white shadow-lg border border-slate-100',
            dropdownItem: 'hover:bg-blue-50'
        },
        theme3: {
            bg: 'bg-theme3-background',
            text: 'text-theme3-text',
            accent: 'bg-theme3-primary',
            hoverText: 'hover:text-theme3-primary',
            hoverBg: 'hover:bg-theme3-hover',
            button: 'bg-theme3-primary hover:bg-theme3-hover text-white',
            dropdown: 'bg-slate-700 shadow-lg border border-slate-600',
            dropdownItem: 'hover:bg-slate-600'
        },
        theme4: {
            bg: 'bg-theme4-background',
            text: 'text-theme4-text',
            accent: 'bg-theme4-primary',
            hoverText: 'hover:text-theme4-primary',
            hoverBg: 'hover:bg-theme4-hover',
            button: 'bg-theme4-primary hover:bg-theme4-hover text-white',
            dropdown: 'bg-theme4-secondary shadow-lg border border-theme4-accent',
            dropdownItem: 'hover:bg-theme4-accent/20'
        },
        theme5: {
            bg: 'bg-theme5-background',
            text: 'text-theme5-text',
            accent: 'bg-theme5-primary',
            hoverText: 'hover:text-theme5-primary',
            hoverBg: 'hover:bg-theme5-hover',
            button: 'bg-theme5-primary hover:bg-theme5-hover text-white',
            dropdown: 'bg-theme5-secondary shadow-lg border border-theme5-accent',
            dropdownItem: 'hover:bg-theme5-accent/20'
        }
    };
    const currentTheme = themeClasses[theme] || themeClasses.theme1;

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

    return (
        !isMobile ? (
            <section className={`flex items-center justify-between gap-8 p-4 ${currentTheme.bg}`}>
                <div className={`font-bold ${theme === 'theme3' ? 'text-emerald-400' : theme === 'theme2' ? 'text-blue-500' : 'text-red-500'}`}>
                    <Link to='/'>Logo</Link>
                </div>

                <div className="flex gap-8">
                    {navItems.map((item, index) => (
                        <div key={index} className="group relative py-2">
                            <div className="cursor-pointer relative inline-block">
                                <span className={`relative ${currentTheme.text}`}>{item.title}</span>
                                <span
                                    className={`absolute bottom-0 left-0 w-0 h-0.5 ${currentTheme.accent} transition-all duration-300 group-hover:w-full`}
                                ></span>
                            </div>

                            {item.dropdown && (
                                <div className={`absolute hidden group-hover:block ${currentTheme.dropdown} rounded mt-2`}>
                                    {item.dropdown.map((dropdownItem, i) => (
                                        <p key={i} className={`p-2 text-nowrap ${currentTheme.dropdownItem} ${currentTheme.text}`}>
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
                    <button className={`${currentTheme.text} ${currentTheme.hoverText}`}>Support</button>
                    <button className={`${currentTheme.button} px-4 py-2 rounded`}>Contact Us</button>
                </div>
            </section>
        ) : (

            <section className="w-full h-full relative">
                <div className="flex justify-between px-4 py-2">
                    <div className={`font-bold ${theme === 'theme3' ? 'text-emerald-400' : theme === 'theme2' ? 'text-blue-500' : 'text-red-500'}`}>
                        <Link to='/'>Logo</Link>
                    </div>
                    <GiHamburgerMenu
                        onClick={() => setIsOpen(true)}
                        className="text-2xl cursor-pointer" // Added some styling for the icon
                    />
                </div>

                {isOpen && (
                    <div className="fixed inset-0 z-50 flex">
                        <div className="w-1/4 h-full bg-white absolute left-0 top-0 p-4 shadow-lg">
                            <div className="flex justify-between items-center mb-8">
                                <div className={`font-bold ${theme === 'theme3' ? 'text-emerald-400' : theme === 'theme2' ? 'text-blue-500' : 'text-red-500'}`}>
                                    <Link to='/' onClick={() => setIsOpen(false)}>Logo</Link>
                                </div>
                                <GrClose
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl cursor-pointer"
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                {navItems.map((item, index) => {
                                    if (item.dropdown.length === 0) {
                                        return <div key={item.title}>{item.title}</div>;
                                    } else {
                                        return <AccordionDemo key={item.title} accordionContent={item} index={index} />;
                                    }
                                })}
                            </div>


                        </div>

                        <div
                            onClick={() => setIsOpen(false)}
                            className="w-3/4 h-full bg-black bg-opacity-50 backdrop-blur-sm ml-auto"
                        ></div>
                    </div>
                )}
            </section>
        )
    );
}