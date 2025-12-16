"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/utils/staticData";
import { RiMenuLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [open, setOpen] = useState(null);
    const path = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`absolute left-0 top-0 right-0 z-40 lg:px-24 sm:px-7 px-5 md:py-5 py-4 w-full ease-in-out
            linear-background transition-all duration-300 ${isScrolled ? `fixed shadow-[0px_2px_28px_0px_#0000000f] 
            fade-in-down` : ''}`}
        >
            <div className='container mx-auto'>
                <div className={`flex items-center justify-between`}>
                    <div className={`flex justify-between w-full`}>
                        <div className="flex items-center" data-aos="fade-right">
                            <Link rel="preload" href="/">
                                <Image src="/assets/logo_white.webp" alt="Logo" width={176} height={56}
                                    className="xl:max-w-40 lg:max-w-32 max-w-28 h-auto"
                                />
                            </Link>
                        </div>

                        <div data-aos="zoom-in-up">
                            <div className={`md:flex items-center xl:gap-8 lg:gap-6 md:gap-2.5 gap-8
                                hidden text-white justify-center h-full transition-all duration-300 ease-in-out`}
                            >
                                {NAV_ITEMS?.map((nav, index) => (
                                    <div key={index} className="relative group">
                                        {nav?.children ? (
                                            <div className={`cursor-pointer ${isScrolled ? '' : 'hover:text-[#ef793c]'}`}>
                                                <div className="flex items-center hover:border-b hover:border-[#ef793c]
                                                    lg:text-lg text-[17px] gap-1"
                                                >
                                                    <span className='block inter'>{nav.label}</span>
                                                    <FiChevronDown />
                                                </div>

                                                <div className={`absolute left-0 p-[15px_10px_15px_25px] bg-white 
                                                    text-base text-[#0e314c] opacity-0 group-hover:opacity-100 invisible 
                                                    w-[280px] shadow-[0px_0px_15px_0px_#0000001a] group-hover:visible 
                                                    transition-all duration-300 ease-in-out z-50 mt-3.5 translate-y-4 
                                                    group-hover:translate-y-0 group-hover:top-full `}
                                                >
                                                    <div className="flex flex-col space-y-2">
                                                        {nav.children.map((child, idx) => (
                                                            <Link rel="preload" key={idx} href={child?.path} className={`flex
                                                                gap-2.5 pr-5 hover:text-[#ef793c] items-center
                                                                ${path === child.path ? 'text-[#ef793c]' : ''}`}
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link rel="preload" href={nav?.path} className={`hover:text-[#ef793c] hover:border-b
                                                lg:text-lg text-[17px] hover:border-[#ef793c]
                                                ${path === nav?.path ? 'text-[#ef793c]' : ''}`}
                                            >
                                                {nav?.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}


                                <Link rel="preload" href='/learn-more' className="border border-[#ef793c] rounded-sm text-sm
                                    bg-linear-to-r from-[#ef793c] to-[#ff6a00] uppercase font-medium cursor-pointer py-2 px-3"
                                >
                                    Learn More
                                </Link>

                                <Link rel="preload" href='/apply-now' className="border border-[#ef793c] rounded-sm text-sm
                                    bg-linear-to-r from-[#ef793c] to-[#ff6a00] uppercase font-medium cursor-pointer py-2 px-3"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>

                        <div className="flex justify-end items-center md:hidden gap-5" data-aos="zoom-in-up">
                            <button className="text-white cursor-pointer" onClick={toggleMenu}>
                                <RiMenuLine size={30} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out bg-[#000000d4]
                    ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={toggleMenu}
                >
                    <div className={`fixed top-0 h-screen bg-[#F7F7F7] shadow-lg transform transition-transform 
                        duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0 right-0 w-[270px]' : ''}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-end items-center px-[26px] py-4">
                            <button className="text-black cursor-pointer" onClick={toggleMenu}>
                                <RxCross2 size={30} />
                            </button>
                        </div>

                        <div className="flex flex-col">
                            <ul className="grow">
                                {NAV_ITEMS.map((nav, index) => (
                                    <div key={index}>
                                        {nav?.children ? (
                                            <div className="hover:bg-white py-2 px-[26px]">
                                                <button className="flex items-center justify-between w-full inter 
                                                    cursor-pointer" onClick={() => setOpen(open === index ? null : index)}
                                                >
                                                    {nav.label}
                                                    {open === index ? <FiChevronUp size={25} /> : <FiChevronDown size={25} />}
                                                </button>

                                                {open === index && (
                                                    <div className="flex flex-col ml-4 mt-2.5">
                                                        {nav.children.map((child, idx) => (
                                                            <Link rel="preload" key={idx} href={child.path} className={`py-1.5 
                                                                ${path === child.path ? 'text-[#ef793c]' : ''}`}
                                                                onClick={() => { setIsMenuOpen(false); setOpen(null); }}
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <Link rel="preload" href={nav.path} onClick={() => setIsMenuOpen(false)}
                                                className={`py-2 w-full block hover:bg-white px-[26px] 
                                                ${path === nav.path ? 'text-[#ef793c]' : ''}`}
                                            >
                                                {nav.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </ul>

                            <Link rel="preload" href="/learn-more" className="block hover:bg-white py-2 px-[26px]">
                                Learn More
                            </Link>

                            <Link rel="preload" href="/apply-now" className="block hover:bg-white py-2 px-[26px]">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar