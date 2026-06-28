import React from "react";
import {
  Upload,
  FileText,
  Stamp,
} from "lucide-react";

const flows = [
  {
    step: "LANGKAH 01",
    title: "Rekam atau\nUnggah",
    description:
      "Rekam langsung sesi diskusi, bimbingan, atau praktikum Anda atau unggah berkas audio yang sudah ada.",
    icon: Upload,
  },
  {
    step: "LANGKAH 02",
    title: "AI Menyusun\nOtomatis",
    description:
      "AI mengubah suara menjadi transkrip, lalu merangkumnya menjadi poin penting dan daftar tugas secara otomatis.",
    icon: FileText,
  },
  {
    step: "LANGKAH 03",
    title: "Risalah Siap\nDisahkan",
    description:
      "Tinjau, edit jika perlu, lalu simpan sebagai dokumen resmi yang bisa diakses ulang kapan saja.",
    icon: Stamp,
  },
];

export default function FlowSection() {
  return (
    <section
      id="workflow"
      className="relative w-full py-30 px-6 md:px-12 lg:px-20"
    >
      {/* Heading */}
      <div className="max-w-3xl mb-16">
        <span className="text-lg font-medium font-label tracking-[0.3em] uppercase text-tertiary-base">
          Cara Kerja
        </span>

        <h2 className="mt-3 text-4xl md:text-6xl font-headline font-black leading-tight text-slate-900">
          Tiga tahap dari rekaman ke risalah.
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {flows.map((flow, index) => {
          const Icon = flow.icon;

          return (
            <div
              key={index}
              className="group rounded-[28px] border border-stone-300 bg-neutral-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mb-10 text-tertiary-base">
                <Icon size={34} strokeWidth={1.8} />
              </div>

              {/* Step */}
              <p className="text-md font-label tracking-[0.3em] uppercase text-stone-500">
                {flow.step}
              </p>

              {/* Title */}
              <h3 className="mt-5 whitespace-pre-line text-4xl font-headline font-black leading-tight text-slate-900">
                {flow.title}
              </h3>

              {/* Description */}
              <p className="mt-8 text-lg leading-9 text-stone-600">
                {flow.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}