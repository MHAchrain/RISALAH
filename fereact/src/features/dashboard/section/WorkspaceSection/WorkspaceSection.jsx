import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import Button from "../../../../components/ui/Button";
import WorkspaceCard from "../../../../components/ui/dashboard/WorkspaceCard";
import StatCard from "../../../../components/ui/dashboard/StatCard";

export default function WorkspaceSection() {
    const [activeTab, setActiveTab] = useState("ringkasan");

    const workspaces = [
        {
            title: "Proposal KicauKicau",
            subtitle: "Tugas Akhir · 4 anggota",
            progress: 75,
        },
        {
            title: "Praktikum Basis Data",
            subtitle: "Praktikum · 6 anggota",
            progress: 62,
        },
        {
            title: "Riset UX Akademik",
            subtitle: "Proyek Kelompok · 3 anggota",
            progress: 88,
        },
    ];

    const tabs = [
        { id: "ringkasan", label: "Ringkasan" },
        { id: "sesi", label: "Sesi" },
        { id: "tugas", label: "Tugas" },
        { id: "anggota", label: "Anggota" },
    ];

    return (
        <section>

            {/* Heading */}
            <span className="font-label text-lg uppercase tracking-[0.35em] text-tertiary-base">
                Workspace Saya
            </span>

            <h1 className="mt-4 font-headline text-6xl font-bold leading-[1.05] text-primary-900 max-w-5xl">
                Kelola semua proyek dan ruang dokumentasi.
            </h1>

            <p className="mt-6 max-w-3xl text-xl text-stone-700">
                Search, buat workspace baru, dan masuk ke detail workspace dengan tab Ringkasan, Sesi, Tugas, Anggota.
            </p>

            {/* Search */}
            <div className="mt-10 flex gap-4">

                <div className="flex flex-1 items-center gap-3 rounded-full border border-stone-300 bg-white px-6 py-4">
                    <Search size={20} className="text-stone-500" />

                    <input
                        placeholder="Cari workspace..."
                        className="flex-1 bg-transparent outline-none"
                    />
                </div>

                <Button className="px-8" variant="dash">
                    <Plus size={18}/>
                    Buat Workspace Baru
                </Button>

            </div>

            {/* Workspace Cards */}
            <div className="mt-8 grid grid-cols-3 gap-5">
                {workspaces.map((item) => (
                    <WorkspaceCard key={item.title} {...item} />
                ))}
            </div>

            {/* Detail */}
            <div className="mt-10 rounded-4xl border border-stone-300 bg-neutral-50 p-6 shadow-[8px_10px_0px_rgba(0,0,0,0.12)]">

                {/* Tabs */}
                <div className="flex gap-3">

                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`rounded-full px-6 py-3 text-sm font-semibold transition
                                ${
                                    activeTab === tab.id
                                        ? "bg-primary-base text-white"
                                        : "bg-neutral-200 hover:bg-neutral-300"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}

                </div>

                <hr className="my-6 border-stone-300"/>

                {/* Isi Tab */}
                {activeTab === "ringkasan" && (
                    <div className="grid grid-cols-4 gap-5">

                        <StatCard
                            value="75%"
                            label="Progress"
                            valueClassName="text-tertiary-base"
                        />

                        <StatCard
                            value="8/10"
                            label="Task selesai"
                            valueClassName="text-tertiary-base"
                        />

                        <StatCard
                            value="15"
                            label="Masukan dosen"
                            valueClassName="text-tertiary-base"
                        />

                        <StatCard
                            value="12"
                            label="Sudah dikerjakan"
                            valueClassName="text-tertiary-base"
                        />

                    </div>
                )}

                {activeTab === "sesi" && (
                    <div className="py-16 text-center text-stone-500">
                        Data sesi akan ditampilkan di sini.
                    </div>
                )}

                {activeTab === "tugas" && (
                    <div className="py-16 text-center text-stone-500">
                        Data tugas akan ditampilkan di sini.
                    </div>
                )}

                {activeTab === "anggota" && (
                    <div className="py-16 text-center text-stone-500">
                        Data anggota akan ditampilkan di sini.
                    </div>
                )}

            </div>

        </section>
    );
}