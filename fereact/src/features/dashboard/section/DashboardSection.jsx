import React from "react";

import StatCard from "../../../components/ui/dashboard/StatCard";
import WorkspaceCard from "../../../components/ui/dashboard/WorkspaceCard";
import ActivityCard from "../../../components/ui/dashboard/ActivityCard";

export default function DashboardSection() {

    const stats = [
        {
            value: "3",
            label: "WORKSPACE AKTIF",
        },
        {
            value: "12",
            label: "SESI BULAN INI",
        },
        {
            value: "75%",
            label: "RATA-RATA PROGRESS",
        },
    ];

    const workspaces = [
        {
            title: "Proposal KicauKicau",
            type: "Tugas Akhir",
            task: "2 tugas",
            progress: 72,
        },
        {
            title: "Praktikum Basis Data",
            type: "Praktikum",
            task: "5 tugas",
            progress: 60,
        },
        {
            title: "Riset UX Akademik",
            type: "Proyek Kelompok",
            task: "1 tugas",
            progress: 85,
        },
    ];

    const activities = [
        {
            title: "Rapat Validasi Proposal",
            date: "28 Jun 2026",
            workspace: "Proposal KicauKicau",
        },
        {
            title: "Diskusi Pembagian Modul",
            date: "25 Jun 2026",
            workspace: "Praktikum Basis Data",
        },
        {
            title: "Review Masukan Dosen",
            date: "21 Jun 2026",
            workspace: "Proposal KicauKicau",
        },
    ];

    return (
        <section>

            {/* Header */}

            <span className="font-label text-lg uppercase tracking-[0.35em] text-tertiary-base">
                Dashboard
            </span>

            <h1 className="mt-4 font-headline text-6xl font-bold leading-[1.05] text-primary-900 max-w-5xl">
                Selamat datang kembali, Nabila.
            </h1>

            <p className="mt-6 max-w-2xl text-xl text-stone-600">
                Ringkasan cepat seluruh aktivitas risalah dan progress proyek aktif.
            </p>

            {/* Statistik */}

            <div className="mt-12 grid grid-cols-3 gap-6">

                {stats.map((item) => (
                    <StatCard
                        key={item.label}
                        {...item}
                    />
                ))}

            </div>

            {/* Content */}

            <div className="mt-10 grid grid-cols-5 gap-8">

                <div className="col-span-3 rounded-4xl border border-stone-300 bg-neutral-50 p-7">

                    <h2 className="font-headline text-5xl font-black text-primary-900">
                        Workspace Aktif
                    </h2>

                    <div className="mt-7 space-y-5">

                        {workspaces.map((item) => (
                            <WorkspaceCard
                                key={item.title}
                                {...item}
                            />
                        ))}

                    </div>

                </div>

                <div className="col-span-2 rounded-4xl border border-stone-300 bg-neutral-50 p-7">

                    <h2 className="font-headline text-5xl font-black text-primary-900">
                        Aktivitas Terbaru
                    </h2>

                    <div className="mt-7 space-y-5">

                        {activities.map((item) => (
                            <ActivityCard
                                key={item.title}
                                {...item}
                            />
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}