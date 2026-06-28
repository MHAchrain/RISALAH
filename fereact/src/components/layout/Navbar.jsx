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

    const textColor = isDarkSection
        ? "text-white"
        : "text-primary-900";

    const subTextColor = isDarkSection
        ? "text-gray-300"
        : "text-neutral-500";

    return (
        <nav
        className={`fixed top-0 left-0 right-0 z-50
                    transition-all duration-100
                    px-6 py-4 md:px-20 flex items-center justify-between
                    ${
                        isScrolled
                            ? isDarkSection
                                ? "bg-slate-900/40 backdrop-blur-xl"
                                : "bg-white/20 backdrop-blur-xl shadow-md"
                            : "bg-transparent"
                    }`}
        >

        <div className="flex items-center gap-3">
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
            <h1 className={`text-lg font-bold font-label ${textColor}`}>
                Risalah
            </h1>
            <span className={`text-xs ${subTextColor}`}>
                AI Pendamping Vokasi
            </span>
            </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
            <button 
            onClick={() => scrollToSection('home')} 
            className={`text-sm font-medium ${textColor} hover:text-tertiary-base transition-colors`}
            >
                Home
            </button>
            <button 
            onClick={() => scrollToSection('workflow')} 
            className={`text-sm font-medium ${textColor} hover:text-tertiary-base transition-colors`}
            >
                Cara Kerja
            </button>
            <button 
            onClick={() => scrollToSection('features')} 
            className={`text-sm font-medium ${textColor} hover:text-tertiary-base transition-colors`}
            >
                Fitur
            </button>
            <button 
            onClick={() => scrollToSection('example')} 
            className={`text-sm font-medium ${textColor} hover:text-tertiary-base transition-colors`}
            >
                Contoh
            </button>
        </div>

        <div className="relative">
            {!isLoggedIn ? (
            <Button
                onClick={() => setIsLoggedIn(true)}
                variant={isDarkSection ? "navbar" : "solid"}
            >
                Mulai Draft
            </Button>
            ) : (
            <div>
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
                <div className="absolute right-0 mt-2 w-48 bg-[#121212] border border-white/10 rounded-lg shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <button
                        type="button"
                        onClick={() => navigate('/auth')}
                        className="block w-full text-left px-4 py-2.5 text-sm text-gray-200 hover:bg-white/10 transition-colors"
                    >
                        Dashboard Anda
                    </button>
                    <hr className="border-white/10 my-1" />
                    
                    <div className="px-2 pt-1">
                        <Button 
                        variant="danger" 
                        className="w-full rounded-md text-red-500 border-red-500/20 hover:bg-red-500/10 hover:border-red-500 py-1.5"
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