import React from "react";

export default function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(var(--color-primary-900)_1px,transparent_1px),linear-gradient(90deg,var(--color-primary-900)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black_0%,black_68%,transparent_100%)] pointer-events-none" />
  );
}