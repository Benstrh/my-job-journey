"use client";

import { ReactNode } from "react";

export default function FilterButton({ children }: { children: ReactNode }) {
  return (
    <button className="flex h-10 w-auto items-center justify-center rounded-full bg-accent-500 p-5 text-black transition-colors duration-300 hover:cursor-pointer hover:bg-black hover:text-white">
      {children}
    </button>
  );
}
