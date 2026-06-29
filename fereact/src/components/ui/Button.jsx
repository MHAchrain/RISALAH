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

  const baseStyle = "relative px-6 py-2.5 text-sm font-semibold tracking-wider transition-all duration-200 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2 select-none rounded-full";

  const variants = {
    solid: "text-white bg-neutral-base hover:bg-neutral-300 hover:text-primary-900 drop-shadow-[5px_5px_2px_var(--color-primary-600)]",
    navbar: "text-primary-900 bg-neutral-300 hover:bg-neutral-base hover:text-white drop-shadow-[5px_5px_2px_var(--color-primary-600)]",
    outline: "text-primary-900 hover:bg-secondary-base border border-primary-900",
    dash: "text-white bg-tertiary-base hover:bg-tertiary-200 hover:text-primary-900 drop-shadow-[5px_5px_2px_var(--color-primary-600)]",
    danger: "text-red-500 border-red-500/20 hover:bg-red-500/10 hover:border-red-500 bg-black/10 border"
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