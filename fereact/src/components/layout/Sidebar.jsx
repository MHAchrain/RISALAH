import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/ui/Button";
import {
    House,
    FolderOpen,
    Mic,
    History,
    User,
    ArrowLeft,
    FileText,
    Plus,
} from "lucide-react";

    const menus = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: House,
        },
        {
            id: "workspace",
            label: "Workspace Saya",
            icon: FolderOpen,
        },
        {
            id: "record",
            label: "Rekam Baru",
            icon: Mic,
        },
        {
            id: "history",
            label: "Riwayat",
            icon: History,
        },
        {
            id: "profile",
            label: "Profil",
            icon: User,
        },
    ];

export default function Sidebar({ activeMenu, setActiveMenu }) {
    return (
        <aside className="sticky top-0 h-screen w-80 shrink-0 border-r border-stone-300 bg-neutral-50 px-6 py-6 flex flex-col">
            <div className="justify-self-start flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary-base border border-primary-900 shadow-2xl shadow-primary-900 rounded-full p-1">
                    <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full"
                    >
                        <path d="M10 90 L30 10 L50 60 L70 10 L90 90 L75 90 L65 40 L50 75 L35 40 L25 90 Z" />
                    </svg>
                </div>
                

                <div className="flex flex-col select-none">
                    <h1 className="text-lg font-bold font-label">
                        Risalah
                    </h1>
                    <span className="text-xs">
                        AI Pendamping Vokasi
                    </span>
                </div>
            </div>

            {/* Button */}
            <div className="mt-8">
                <Button variant="dash"
                className="w-full h-14 justify-center">
                    <Plus size={18} />
                    Rekam Sesi Baru
                </Button>
            </div>

        {/* Menu */}
        <nav className="mt-10 flex flex-col gap-2">
            {menus.map((item) => {
                const Icon = item.icon;

                return (
                    <button
                        key={item.id}
                        onClick={() => setActiveMenu(item.id)}
                        className={`
                            w-full text-md flex font-semibold items-center gap-4 rounded-2xl px-5 py-4 transition-all cursor-pointer
                            ${
                            activeMenu === item.id
                                ? "bg-tertiary-200 text-primary-900"
                                : "text-stone-700 hover:bg-tertiary-100"
                            }
                        `}
                        >
                        <Icon size={22} />
                        <span>{item.label}</span>
                    </button>
                );
            })}
        </nav>

        {/* Bottom */}
        <div className="mt-auto">
            <NavLink
            to="/"
            className="relative py-4 tracking-wider transition-all duration-200 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2 select-none rounded-2xl w-full
            text-red-500 border-red-500/40 hover:bg-red-500/10 hover:border-red-500 border"
            >
                <ArrowLeft size={20} />
                <span className="font-semibold text-md">
                    Keluar ke landing
                </span>
            </NavLink>
        </div>

        </aside>
    );
}