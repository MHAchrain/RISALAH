import {
    CalendarDays,
    CheckCircle2,
    Clock,
    Download,
    FileText,
    Search,
} from "lucide-react";

import Button from "../../../components/ui/Button";

export default function HistorySection() {
    const histories = [
        {
            title: "Rapat Validasi Proposal",
            workspace: "Proposal KicauKicau",
            date: "28 Jun 2026",
            duration: "00:42:18",
            status: "Selesai",
            summary:
                "Ringkasan diskusi validasi proposal, catatan dosen, dan revisi yang harus diselesaikan sebelum presentasi.",
        },
        {
            title: "Diskusi Pembagian Modul",
            workspace: "Praktikum Basis Data",
            date: "25 Jun 2026",
            duration: "00:31:44",
            status: "Selesai",
            summary:
                "Pembagian tanggung jawab modul praktikum, validasi query, dan jadwal pengumpulan laporan akhir.",
        },
        {
            title: "Review Masukan Dosen",
            workspace: "Proposal KicauKicau",
            date: "21 Jun 2026",
            duration: "00:27:09",
            status: "Selesai",
            summary:
                "Pemetaan masukan dosen menjadi tugas revisi untuk latar belakang, metodologi, dan target luaran.",
        },
        {
            title: "Sintesis Wawancara Mahasiswa",
            workspace: "Riset UX Akademik",
            date: "20 Jun 2026",
            duration: "00:28:06",
            status: "Selesai",
            summary:
                "Hasil wawancara diringkas menjadi pain point utama dan peluang perbaikan layanan akademik.",
        },
    ];

    return (
        <section>
            <span className="font-label text-lg uppercase tracking-[0.35em] text-tertiary-base">
                Riwayat
            </span>

            <h1 className="mt-4 max-w-5xl font-headline text-6xl font-bold leading-[1.05] text-primary-900">
                Semua dokumentasi yang pernah diproses.
            </h1>

            <p className="mt-6 max-w-3xl text-xl text-stone-700">
                Telusuri hasil rekaman, ringkasan AI, dan dokumen sesi dari seluruh workspace.
            </p>

            <div className="mt-10 flex gap-4">
                <div className="flex flex-1 items-center gap-3 rounded-full border border-stone-300 bg-white px-6 py-4">
                    <Search size={20} className="text-stone-500" />

                    <input
                        placeholder="Cari riwayat sesi..."
                        className="flex-1 bg-transparent outline-none"
                    />
                </div>

                <Button className="px-8" variant="dash">
                    <Download size={18} />
                    Ekspor
                </Button>
            </div>

            <div className="mt-8 grid gap-5">
                {histories.map((item) => (
                    <article
                        key={`${item.title}-${item.date}`}
                        className="rounded-[32px] border border-stone-300 bg-neutral-50 p-6 shadow-[6px_7px_0px_rgba(0,0,0,0.10)]"
                    >
                        <div className="flex items-start justify-between gap-6">
                            <div>
                                <div className="flex items-center gap-3 font-label text-sm uppercase tracking-widest text-tertiary-base">
                                    <FileText size={18} />
                                    {item.workspace}
                                </div>

                                <h2 className="mt-3 font-headline text-4xl font-black text-primary-900">
                                    {item.title}
                                </h2>

                                <p className="mt-3 max-w-4xl text-lg leading-8 text-stone-700">
                                    {item.summary}
                                </p>
                            </div>

                            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                                <CheckCircle2 size={16} />
                                {item.status}
                            </span>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold text-stone-600">
                            <span className="inline-flex items-center gap-2">
                                <CalendarDays size={16} />
                                {item.date}
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <Clock size={16} />
                                {item.duration}
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
