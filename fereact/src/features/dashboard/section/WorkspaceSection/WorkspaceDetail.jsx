import {
    ArrowLeft,
    CalendarDays,
    CheckCircle2,
    Clock,
    Users,
} from "lucide-react";

import Button from "../../../../components/ui/Button";
import StatCard from "../../../../components/ui/dashboard/StatCard";

const tabs = [
    { id: "ringkasan", label: "Ringkasan" },
    { id: "sesi", label: "Sesi" },
    { id: "tugas", label: "Tugas" },
    { id: "anggota", label: "Anggota" },
];

export default function WorkspaceDetail({
    activeTab,
    latestSession,
    onBack,
    onChangeTab,
    workspace,
}) {
    const newestSession = workspace.sessions[0];

    return (
        <section>
            <div className="flex items-center gap-4">
                <Button
                    variant="outline"
                    className="px-5"
                    onClick={onBack}
                >
                    <ArrowLeft size={18} />
                    Kembali
                </Button>
                <span className="font-label text-lg uppercase tracking-[0.35em] text-tertiary-base">
                    Detail Workspace
                </span>
            </div>

            <div className="mt-4 flex items-start justify-between gap-6">
                <div>
                    <h1 className="max-w-5xl font-headline text-6xl font-bold leading-[1.05] text-primary-900">
                        {workspace.title}
                    </h1>

                    <p className="mt-6 max-w-3xl text-xl text-stone-700">
                        Pantau ringkasan, sesi rekaman, tugas, dan anggota workspace dalam satu ruang kerja.
                    </p>
                </div>
            </div>

            <div className="mt-10 rounded-[36px] border border-stone-300 bg-neutral-50 p-6 shadow-[8px_10px_0px_rgba(0,0,0,0.12)]">
                <div className="flex flex-wrap gap-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => onChangeTab(tab.id)}
                            className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                                activeTab === tab.id
                                    ? "bg-primary-base text-white"
                                    : "bg-neutral-200 hover:bg-neutral-300"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <hr className="my-6 border-stone-300" />

                {activeTab === "ringkasan" && (
                    <div>
                        <div className="grid grid-cols-4 gap-5">
                            <StatCard
                                value={`${workspace.progress}%`}
                                label="Progress"
                                valueClassName="text-tertiary-base"
                            />

                            <StatCard
                                value={workspace.task}
                                label="Task selesai"
                                valueClassName="text-tertiary-base"
                            />

                            <StatCard
                                value={workspace.sessions.length}
                                label="Sesi terekam"
                                valueClassName="text-tertiary-base"
                            />

                            <StatCard
                                value="4"
                                label="Anggota aktif"
                                valueClassName="text-tertiary-base"
                            />
                        </div>

                        <div className="mt-6 rounded-[28px] border border-stone-300 bg-white p-6">
                            <div className="flex items-center gap-3 font-label text-sm uppercase tracking-widest text-tertiary-base">
                                <CheckCircle2 size={18} />
                                Ringkasan terbaru
                            </div>

                            <h2 className="mt-4 font-headline text-3xl font-bold text-primary-900">
                                {newestSession?.title ?? "Belum ada sesi rekaman"}
                            </h2>

                            <p className="mt-3 text-lg leading-8 text-stone-700">
                                {newestSession?.summary ??
                                    "Mulai rekam sesi pertama untuk membuat dokumentasi otomatis di workspace ini."}
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === "sesi" && (
                    <div className="grid gap-4">
                        {workspace.sessions.map((session) => (
                            <div
                                key={`${session.title}-${session.date}`}
                                className="rounded-[28px] border border-stone-300 bg-white p-6"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <h2 className="font-headline text-3xl font-bold text-primary-900">
                                                {session.title}
                                            </h2>

                                            {latestSession?.title === session.title && (
                                                <span className="rounded-full bg-tertiary-100 px-4 py-1 font-label text-xs font-semibold uppercase tracking-widest text-tertiary-base">
                                                    Baru diproses
                                                </span>
                                            )}
                                        </div>

                                        <p className="mt-3 max-w-3xl text-stone-700">
                                            {session.summary}
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                                        {session.status}
                                    </span>
                                </div>

                                <div className="mt-5 flex gap-5 text-sm font-semibold text-stone-600">
                                    <span className="inline-flex items-center gap-2">
                                        <CalendarDays size={16} />
                                        {session.date}
                                    </span>

                                    <span className="inline-flex items-center gap-2">
                                        <Clock size={16} />
                                        {session.duration}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "tugas" && (
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            "Revisi latar belakang dan tujuan proyek.",
                            "Lengkapi referensi untuk bagian metodologi.",
                            "Validasi hasil diskusi dengan dosen pembimbing.",
                            "Siapkan dokumen final untuk review berikutnya.",
                        ].map((task) => (
                            <div
                                key={task}
                                className="flex items-start gap-3 rounded-[24px] border border-stone-300 bg-white p-5"
                            >
                                <CheckCircle2 size={20} className="mt-1 text-green-700" />
                                <span className="font-semibold text-primary-900">
                                    {task}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "anggota" && (
                    <div className="grid grid-cols-4 gap-4">
                        {["Alya", "Bima", "Citra", "Dimas"].map((member) => (
                            <div
                                key={member}
                                className="rounded-[24px] border border-stone-300 bg-white p-5"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-base text-primary-900">
                                    <Users size={22} />
                                </div>

                                <h2 className="mt-4 text-xl font-bold text-primary-900">
                                    {member}
                                </h2>

                                <p className="mt-1 text-sm font-semibold text-stone-500">
                                    Anggota aktif
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
