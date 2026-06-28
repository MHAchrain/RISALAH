import React from 'react';

export default function Button({ 
  children,
  variant = "solid",
  type = "button",
  className = "",
  textClass = "",
  bgClass = "",
  ...props
}) {

  // Base style: padding, font, transisi, dan efek klik
  const baseStyle = "relative px-6 py-2.5 text-sm font-semibold tracking-wider transition-all duration-200 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2 select-none rounded-full";

  // Varian warna yang disesuaikan dengan tema portofolio merah-hitam lo
  const variants = {
    // Solid: Background merah menyala, teks putih
    solid: "text-white bg-primary-base hover:bg-secondary-200 hover:text-primary-900 drop-shadow-[5px_5px_2px_var(--color-primary-600)]",
    navbar: "text-primary-900 bg-secondary-base hover:bg-primary-900 hover:text-white drop-shadow-[5px_5px_2px_var(--color-primary-600)]",
    outline: "text-primary-900 hover:bg-secondary-base border border-primary-900",
    ghost: "text-gray-400 bg-transparent hover:bg-white/5 hover:text-white",
    danger: "text-red bg-black/20 hover:bg-red/10 border border-red/40 hover:border-red"
  };

  return (
    <button
      type={type}
      className={`${baseStyle} ${variants[variant]} ${bgClass} ${className}`}
      {...props}
    >
      {/* Konten di dalam tombol */}
      <span className={`relative z-10 flex items-center gap-2 ${textClass}`}>
        {children}
      </span>
    </button>
  );
}