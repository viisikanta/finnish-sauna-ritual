import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Explore Finnish sauna culture, etiquette, and accessories instead.",
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-birch)] mb-4 font-medium">
          404
        </p>
        <h1
          className="text-3xl md:text-4xl text-[var(--color-foreground)] mb-4"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
        >
          This page has cooled off.
        </h1>
        <p className="text-[var(--color-stone)] leading-relaxed mb-8">
          The page you are looking for does not exist &mdash; but the sauna is
          still warm. Let us guide you back.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-7 py-3 bg-[var(--color-birch)] text-white text-sm font-medium tracking-wide hover:bg-[var(--color-birch-dark)] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/sauna-etiquette/first-time"
            className="px-7 py-3 border border-[var(--color-steam)] text-[var(--color-foreground)] text-sm font-medium tracking-wide hover:border-[var(--color-birch)] hover:text-[var(--color-birch)] transition-colors"
          >
            Begin Your First Ritual
          </Link>
        </div>
        <div className="mt-12 pt-8 border-t border-[var(--color-steam)]">
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-stone-light)] mb-4 font-medium">
            Popular pages
          </p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/sauna-etiquette"
              className="text-sm text-[var(--color-lake)] underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
            >
              Sauna Etiquette
            </Link>
            <Link
              href="/sauna-accessories"
              className="text-sm text-[var(--color-lake)] underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
            >
              Accessories
            </Link>
            <Link
              href="/best-saunas"
              className="text-sm text-[var(--color-lake)] underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
            >
              Best Saunas
            </Link>
            <Link
              href="/faq"
              className="text-sm text-[var(--color-lake)] underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/glossary"
              className="text-sm text-[var(--color-lake)] underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
            >
              Glossary
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
