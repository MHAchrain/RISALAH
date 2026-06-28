import React from "react";

export default function RisalahCard({
  title = "Rapat Validasi Proposal",
  date = "Dokumen #RSL-028",
  items = [],
  className = "",
}) {
  return (
    <div
      className={`w-full rounded-[28px] border border-stone-300 bg-neutral-50 p-6 shadow-[8px_10px_0px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[10px_14px_0px_rgba(0,0,0,0.16)] ${className}`}
    >
      {/* Header */}
      <div className="border-b border-stone-300 pb-5">
        <p className="text-sm font-label uppercase tracking-[0.25em] text-tertiary-base">
          {date}
        </p>

        <h3 className="mt-2 text-4xl font-bold font-headline leading-tight text-primary-900">
          {title}
        </h3>
      </div>

      {/* List Percakapan */}
      <div className="mt-6 space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-stone-200 bg-white/50 p-5"
          >
            <div className="flex gap-6">
              {/* Waktu */}
              <span className="min-w-22.5 pt-1 text-xs font-label text-neutral-base">
                {item.time}
              </span>

              {/* Isi */}
              <div className="flex-1">
                <h4 className="text-base font-semibold font-headline text-primary-900">
                  {item.speaker}
                </h4>

                <p className="mt-2 text-sm leading-7 text-neutral-500">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}