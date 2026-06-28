import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-stone-300 bg-neutral-50">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-stone-600 md:flex-row md:px-12 lg:px-20">
        
        {/* Copyright */}
        <p>
          © 2026 <span className="font-headline font-semibold text-slate-900">Risalah</span> —
          asisten dokumentasi rapat akademik.
        </p>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a
            href="#about"
            className="transition-colors hover:text-tertiary-base"
          >
            Tentang
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-tertiary-base"
          >
            Kontak
          </a>

          <a
            href="#privacy"
            className="transition-colors hover:text-tertiary-base"
          >
            Kebijakan Privasi
          </a>
        </nav>
      </div>
    </footer>
  );
}