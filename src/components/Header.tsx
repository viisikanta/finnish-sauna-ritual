"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  {
    name: "Sauna Etiquette",
    href: "/sauna-etiquette",
    children: [
      { name: "First Time Guide", href: "/sauna-etiquette/first-time" },
      { name: "German Sauna Culture", href: "/sauna-etiquette/germany" },
    ],
  },
  {
    name: "Accessories",
    href: "/sauna-accessories",
    children: [
      { name: "Sauna Hats", href: "/sauna-accessories/sauna-hats" },
      { name: "Bucket & Ladle", href: "/sauna-accessories/bucket-and-ladle" },
    ],
  },
  { name: "Gift Guide", href: "/sauna-gift-guide" },
  {
    name: "Best Saunas",
    href: "/best-saunas",
    children: [
      { name: "Finland", href: "/best-saunas/finland" },
      { name: "Germany", href: "/best-saunas/germany" },
      { name: "Iceland", href: "/best-saunas/iceland" },
    ],
  },
  { name: "About", href: "/about" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-[var(--color-steam)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🧖</span>
            <span
              className="text-xl font-bold text-[var(--color-cedar)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Finnish Sauna Guide
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.name)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-cedar)] rounded-md transition-colors"
                >
                  {item.name}
                </Link>
                {item.children && openDropdown === item.name && (
                  <div className="absolute left-0 top-full mt-0 w-56 bg-white rounded-lg shadow-lg border border-[var(--color-steam)] py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[var(--color-foreground)] hover:bg-[var(--color-warm-50)] hover:text-[var(--color-cedar)]"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-[var(--color-steam)]">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-[var(--color-foreground)] hover:text-[var(--color-cedar)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    className="block pl-8 py-1.5 text-sm text-[var(--color-stone)] hover:text-[var(--color-cedar)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
