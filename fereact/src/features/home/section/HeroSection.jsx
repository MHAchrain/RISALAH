import React from 'react';
import Button from '../../../components/ui/Button';
import HeroCard from '../../../components/ui/home/HeroCard';
import GridBackground from '../../../components/ui/home/GridBg';

export default function HeroSection() {
  return (
    <>
        <div className='inset-0 z-0'>
            <GridBackground/>
        </div>

        <section 
        id="home" 
        className="relative
                min-h-screen
                scroll-mt-24
                w-full
                flex
                flex-col
                lg:flex-row
                lg:items-start
                justify-center
                px-6 md:px-12 lg:px-20
                py-30
                gap-16"
        >
        {/* SISI KIRI */}
        <div className="flex-1 relative">
            {/* Tagline Kecil */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-base/10 border border-tertiary-base/20 text-tertiary-base text-xs font-label font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-tertiary-400" />
            AI Vokasi Pendamping
            </div>

            {/* Judul Utama */}
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-primary-base leading-tight mb-6">
                Dokumentasi Praktikum <br />
                <span className="text-tertiary-base">
                    Gak Pake Ribet.
                </span>
            </h1>

            {/* Deskripsi Singkat */}
            <p className="text-sm md:text-base text-neutral-base font-medium leading-relaxed mb-8 max-w-lg">
            Ubah rekaman suara praktikum, diskusi kelompok, dan bimbingan dosen menjadi dokumen laporan terstruktur otomatis. Hemat waktu, kurangi miskomunikasi, ikuti standar akademik vokasi.
            </p>

            <div className="flex flex-wrap items-center gap-4">
            <Button variant="solid" to="/auth">
                Mulai Draft
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </Button>
            
            <Button variant="outline" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                Pelajari Fitur
            </Button>
            </div>
        </div>

        {/* SISI KANAN */}
        <div className="flex-1 relative w-full min-h-100 flex items-center justify-center select-none">
            
            {/* Efek Sinar Glow Merah di Latar Belakang Card */}
            <div className="absolute w-72 h-72 bg-tertiary-base/10 rounded-full blur-[100px] pointer-events-none z-0" />

            {/* Card 1 */}
            <HeroCard
            title="Bimbingan TA Dosen"
            date="12 Mar 2026"
            content="Revisi BAB II: Tambahkan diagram alir data enkripsi otomatis dan arsitektur sistem cerdas berbasis AI."
            className="-rotate-6 -translate-y-3/4 absolute z-10 brightness-20 opacity-70 scale-95 hidden sm:block pointer-events-none"
            />

            {/* Card 2 (Utama) */}
            <HeroCard
            title="Diskusi Kelompok 3"
            date="Baru Saja"
            content="Action Item: MHA handle perancangan layout global, integrasi routing, dan kustomisasi UI Risalah."
            className="rotate-3 absolute z-20 hover:scale-105"
            />

            {/* Card 3 */}
            <HeroCard
            title="Praktikum IoT"
            date="24 Feb 2026"
            content="AI berhasil menyusun draft laporan berdasarkan rekaman suara praktikum secara otomatis."
            className="-rotate-2 translate-y-3/4 absolute z-10 brightness-20 opacity-70 scale-90 hidden lg:block pointer-events-none"
            />

        </div>
        </section>
    </>
  );
}