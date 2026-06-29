import {
    Bell,
    BookOpen,
    CheckCircle2,
    Mail,
    ShieldCheck,
    User,
} from "lucide-react";

import Button from "../../../components/ui/Button";
import StatCard from "../../../components/ui/dashboard/StatCard";

export default function ProfileSection() {
    const stats = [
        {
            value: "12",
            label: "Sesi diproses",
        },
        {
            value: "3",
            label: "Workspace aktif",
        },
        {
            value: "86%",
            label: "Task selesai",
        },
    ];

    const preferences = [
        {
            icon: Bell,
            title: "Notifikasi pengingat",
            description: "Aktif untuk deadline tugas dan sesi review berikutnya.",
        },
        {
            icon: BookOpen,
            title: "Format risalah",
            description: "Ringkasan, keputusan, action item, dan catatan tambahan.",
        },
        {
            icon: ShieldCheck,
            title: "Privasi workspace",
            description: "Dokumen hanya bisa diakses anggota workspace terkait.",
        },
    ];

    return (
        <section>
            <span className="font-label text-lg uppercase tracking-[0.35em] text-tertiary-base">
                Profil
            </span>

            <h1 className="mt-4 max-w-5xl font-headline text-6xl font-bold leading-[1.05] text-primary-900">
                Kelola identitas dan preferensi akun.
            </h1>

            <p className="mt-6 max-w-3xl text-xl text-stone-700">
                Atur informasi pengguna, preferensi dokumentasi, dan ringkasan aktivitas akademik.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6">
                {stats.map((item) => (
                    <StatCard
                        key={item.label}
                        {...item}
                    />
                ))}
            </div>

            <div className="mt-10 grid grid-cols-5 gap-8">
                <div className="col-span-2 rounded-[36px] border border-stone-300 bg-neutral-50 p-7 shadow-[8px_10px_0px_rgba(0,0,0,0.12)]">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-primary-900 bg-secondary-base text-primary-900 shadow-[5px_5px_0px_rgba(0,0,0,0.18)]">
                        <User size={42} />
                    </div>

                    <h2 className="mt-6 font-headline text-5xl font-black text-primary-900">
                        Nabila
                    </h2>

                    <p className="mt-2 font-label text-sm uppercase tracking-widest text-tertiary-base">
                        Mahasiswa Vokasi
                    </p>

                    <div className="mt-6 space-y-4 text-stone-700">
                        <div className="flex items-center gap-3 rounded-3xl border border-stone-300 bg-white px-5 py-4">
                            <Mail size={18} className="text-tertiary-base" />
                            <span className="font-semibold">
                                nabila@student.ac.id
                            </span>
                        </div>

                        <div className="flex items-center gap-3 rounded-3xl border border-stone-300 bg-white px-5 py-4">
                            <CheckCircle2 size={18} className="text-green-700" />
                            <span className="font-semibold">
                                Akun aktif dan tersinkron
                            </span>
                        </div>
                    </div>

                    <Button className="mt-7 w-full" variant="dash">
                        Edit Profil
                    </Button>
                </div>

                <div className="col-span-3 rounded-[36px] border border-stone-300 bg-neutral-50 p-7 shadow-[8px_10px_0px_rgba(0,0,0,0.12)]">
                    <h2 className="font-headline text-5xl font-black text-primary-900">
                        Preferensi
                    </h2>

                    <div className="mt-7 grid gap-5">
                        {preferences.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="flex items-start gap-5 rounded-[28px] border border-stone-300 bg-white p-6"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tertiary-100 text-tertiary-base">
                                        <Icon size={22} />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-primary-900">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 leading-7 text-stone-700">
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
