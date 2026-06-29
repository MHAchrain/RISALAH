import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = (path) => { window.location.href = path; };
    const [isDarkSection, setIsDarkSection] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);

        const darkSection = document.getElementById("features");

        if (darkSection) {
        const rect = darkSection.getBoundingClientRect();

        // navbar tinggi sekitar 80px
        const navbarHeight = 80;

        const isInside =
            rect.top <= navbarHeight &&
            rect.bottom >= navbarHeight;

        setIsDarkSection(isInside);
        }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navColor = isDarkSection
        ? "text-white"
        : "text-primary-900";

    return (
        <nav
        className={`fixed grid grid-cols-3 top-0 left-0 right-0 z-50
                    transition-all duration-100
                    px-6 py-4 md:px-20 items-center justify-between
                    ${
                        isScrolled
                            ? isDarkSection
                                ? "bg-slate-900/40 backdrop-blur-xl"
                                : "bg-white/20 backdrop-blur-xl shadow-md"
                            : "bg-transparent"
                    }`}
        >

            <div className="justify-self-start flex items-center gap-3">
                {/* LOGO MHA hasil tracing lo */}
                <div className="w-12 h-12 flex items-center justify-center bg-secondary-base border border-primary-900 shadow-2xl shadow-primary-900 rounded-full p-1">
                    <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full"
                    >
                        <path d="M10 90 L30 10 L50 60 L70 10 L90 90 L75 90 L65 40 L50 75 L35 40 L25 90 Z" />
                    </svg>
                </div>
                

                <div className="flex flex-col select-none">
                <h1 className={`text-lg font-bold font-label ${navColor}`}>
                    Risalah
                </h1>
                <span className={`text-xs ${navColor}`}>
                    AI Pendamping Vokasi
                </span>
                </div>
            </div>

            <div className="justify-self-center flex gap-10">
                <button 
                onClick={() => scrollToSection('home')} 
                className={`text-sm font-medium ${navColor} hover:text-tertiary-base transition-colors`}
                >
                    Home
                </button>
                <button 
                onClick={() => scrollToSection('workflow')} 
                className={`text-sm font-medium ${navColor} hover:text-tertiary-base transition-colors`}
                >
                    Cara Kerja
                </button>
                <button 
                onClick={() => scrollToSection('features')} 
                className={`text-sm font-medium ${navColor} hover:text-tertiary-base transition-colors`}
                >
                    Fitur
                </button>
                <button
                onClick={() => scrollToSection('example')}
                className={`text-sm font-medium ${navColor} hover:text-tertiary-base transition-colors`}
                >
                    Contoh
                </button>
            </div>

            <div className="justify-self-end">
                {!isLoggedIn ? (
                <Button
                    to="/auth"
                    variant={isDarkSection ? "navbar" : "solid"}
                >
                    Mulai Draft
                </Button>
                ) : (
                <div className='relative inline-block'>
                    <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-10 h-10 rounded-full border-2 border-tertiary-base overflow-hidden focus:outline-none cursor-pointer active:scale-95 transition-transform"
                    >
                    <img 
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" 
                        alt="User Profile" 
                        className="w-full h-full object-cover"
                    />
                    </button>

                    {showDropdown && (
                    <div className={`absolute top-full right-0 mt-2 w-48 rounded-lg shadow-xl z-50 ${
                        isDarkSection
                            ? "bg-neutral-300 border-primary-900 backdrop-blur-xl"
                            : "bg-neutral-500 border-primary-500"
                    }`}>
                        <button
                            type="button"
                            onClick={() => navigate('/dashboard')}
                            className={`block w-full text-left p-4 text-sm transition-colors ${isDarkSection
                                ?"text-primary-900 hover:bg-primary-base/20"
                                :"text-gray-200 hover:bg-white/10 "
                            }`}
                        >
                            Dashboard Anda
                        </button>
                        <hr className={`${isDarkSection ? "border-black/10" : "border-white/10"}`} />
                        
                        <div className="p-2">
                            <Button 
                            variant="danger" 
                            className={`w-full rounded-md py-1.5 ${
                                isDarkSection
                                ? "" 
                                : "bg-white/10 text-red-400 border-red-400"
                            }`}
                            onClick={() => {
                                setIsLoggedIn(false);
                                setShowDropdown(false);
                            }}
                            >
                            Keluar Akun
                            </Button>
                        </div>
                    </div>
                    )}
                </div>
                )}
            </div>
        </nav>
    );
}
