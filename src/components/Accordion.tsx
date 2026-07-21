"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Accordion({
  items,
  defaultOpen = 0,
  numbered = false,
}: {
  items: { title: string; body: React.ReactNode }[];
  defaultOpen?: number;
  numbered?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.title} className="overflow-hidden rounded-lg border border-white/12 bg-white/[.055]">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-base font-bold text-white transition hover:bg-white/[.045] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-cyan-300 sm:px-5"
              >
                <span className="flex items-center gap-3">
                  {numbered ? (
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-cyan-400/12 text-xs text-cyan-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  ) : null}
                  {item.title}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 text-cyan-200 transition ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="px-4 pb-5 text-sm leading-7 text-gray-300 sm:px-5">{item.body}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
