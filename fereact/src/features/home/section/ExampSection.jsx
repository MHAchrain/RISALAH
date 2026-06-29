import React from "react";
import Button from "../../../components/ui/Button";
import RisalahCard from "../../../components/ui/home/RisalahCard";

export default function ExampleSection() {
  return (
    <section
      id="example"
      className="px-6 md:px-12 lg:px-20 py-30"
    >
      {/* Header */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between mb-14">
        <div>
          <p className="text-lg font-label uppercase tracking-[0.3em] text-tertiary-base">
            Contoh Dokumen
          </p>

          <h2 className="mt-3 text-5xl md:text-6xl font-headline font-black leading-tight text-slate-900">
            Preview hasil risalah lengkap.
          </h2>
        </div>

        <Button variant="solid">
          Lihat Sistem Aplikasi
        </Button>
      </div>

      {/* Preview */}
        <RisalahCard
            date="Dokumen #RSL-028"
            title="Rapat Validasi Proposal"
            items={[
                {
                time: "00:04:18",
                speaker: "Ketua Rapat",
                content:
                    "Menetapkan agenda validasi proposal dan pembagian peran tim dokumentasi.",
                },
                {
                time: "00:16:42",
                speaker: "Sekretaris",
                content:
                    "Meminta penyesuaian istilah agar sesuai pedoman administrasi fakultas.",
                },
                {
                time: "00:31:09",
                speaker: "Dosen Pembina",
                content:
                    "Menyetujui alur unggah audio, tinjau transkrip, lalu ekspor risalah final.",
                },
            ]}
        />
    </section>
  );
}