import React from "react";

export default function StatCard({
    value,
    label,
    valueClassName = "text-primary-base",
    labelClassName = "text-stone-700",
    className = "",
    }) {
    return (
        <div
        className={`rounded-[28px] border border-stone-300 bg-neutral-50 p-8 ${className}`}
        >
        <h2
            className={`font-headline text-6xl font-black ${valueClassName}`}
        >
            {value}
        </h2>

        <p
            className={`mt-3 font-label text-sm tracking-widest ${labelClassName}`}
        >
            {label}
        </p>
        </div>
    );
}