import React from "react";

export default function HeroCard({
  title = "Sesi Praktikum IoT",
  date = "24 Feb 2026",
  content = "AI mengotomatisasi penyusunan draf laporan berdasarkan rekaman audio praktikum secara real-time.",
  className = "",
}) {
  return (
    <div
      className={`
        w-full max-w-md
        rounded-2xl
        border border-stone-200
        bg-neutral-50
        p-5
        shadow-[8px_8px_0px_rgba(0,0,0,0.08)]
        transition-all duration-300
        hover:shadow-[12px_12px_0px_rgba(0,0,0,0.12)]
        group
        ${className}
      `}
    >
      {/* Header */}
      <div className="border-b border-stone-200 pb-3">
        <span className="text-sm uppercase tracking-[0.2em] text-tertiary-base font-label">
          {date}
        </span>

        <h3 className="font-headline mt-2 text-xl font-bold text-slate-900 leading-tight transition-colors group-hover:text-tertiary-base">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-sm leading-7 text-stone-600">
          {content}
        </p>
      </div>

      {/* Footer Accent */}
      <div className="mt-5 flex items-center gap-2">
        <div className="h-0.5 w-8 rounded-full bg-tertiary-base transition-all duration-300 group-hover:w-16" />
        <div className="h-0.5 flex-1 rounded-full bg-stone-200" />
      </div>
    </div>
  );
}