import React from "react";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Rekam Sesi",
    description:
      "Rekam diskusi praktikum, bimbingan dosen, atau rapat kelompok langsung dari browser.",
  },
  {
    title: "AI Summary",
    description:
      "Transkrip otomatis diubah jadi ringkasan poin-poin penting yang mudah dibaca.",
  },
  {
    title: "AI Action Items",
    description:
      "AI mendeteksi tugas dan instruksi dari percakapan, tanpa perlu mencatat manual.",
  },
  {
    title: "Progress Tracker",
    description:
      "Pantau kemajuan proyek dari jumlah tugas yang sudah diselesaikan.",
  },
  {
    title: "Workspace Terorganisir",
    description:
      "Kelompokkan semua sesi berdasarkan proyek atau mata kuliah agar tidak tercecer.",
  },
  {
    title: "Riwayat Tersimpan",
    description:
      "Semua dokumen tersimpan rapi dan bisa dibuka kembali kapan saja.",
  },
];

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="bg-primary-base px-6 md:px-12 lg:px-20 py-30"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row">
        {/* Left */}
        <div className="lg:w-5/12">
          <p className="mb-5 font-label text-lg uppercase tracking-[0.35em] text-neutral-400">
            Fitur Utama
          </p>

          <h2 className="text-5xl font-headline font-black leading-[1.05] tracking-tight text-secondary-base md:text-7xl">
            Formal tanpa kehilangan konteks percakapan.
          </h2>
        </div>

        {/* Right */}
        <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-white/3 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-tertiary-base/30 hover:bg-white/5"
            >
              <div className="mb-8">
                <CheckCircle2
                  size={24}
                  className="text-neutral-300 transition-colors duration-300 group-hover:text-tertiary-base"
                />
              </div>

              <h3 className="mb-4 text-2xl font-headline font-bold text-white">
                {feature.title}
              </h3>

              <p className="leading-8 text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}