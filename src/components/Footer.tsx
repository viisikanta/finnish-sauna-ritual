import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-lake)] text-[var(--color-steam)] mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3
              className="text-lg text-white mb-3"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Finnish Sauna Guide
            </h3>
            <p className="text-sm leading-relaxed">
              The definitive guide to Finnish sauna culture. Grounded in
              tradition. Written by a Finn.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.1em] text-white mb-4">
              Guides
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sauna-etiquette"
                  className="hover:text-white transition-colors"
                >
                  Sauna Etiquette
                </Link>
              </li>
              <li>
                <Link
                  href="/sauna-etiquette/first-time"
                  className="hover:text-white transition-colors"
                >
                  First Time in a Sauna
                </Link>
              </li>
              <li>
                <Link
                  href="/sauna-etiquette/germany"
                  className="hover:text-white transition-colors"
                >
                  German Sauna Culture
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.1em] text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sauna-accessories"
                  className="hover:text-white transition-colors"
                >
                  Sauna Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/sauna-gift-guide"
                  className="hover:text-white transition-colors"
                >
                  Gift Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/best-saunas"
                  className="hover:text-white transition-colors"
                >
                  Best Saunas in the World
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.1em] text-white mb-4">
              Stay Updated
            </h4>
            <p className="text-sm mb-3">
              Sauna wisdom, delivered occasionally.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 bg-transparent text-white placeholder:text-[var(--color-stone-light)] text-sm border border-[var(--color-steam)] focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[var(--color-birch)] text-white text-[11px] font-medium uppercase tracking-[0.08em] hover:opacity-90 transition-opacity"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-[11px] text-[var(--color-stone-light)]">
          <p>&copy; {new Date().getFullYear()} Finnish Sauna Guide</p>
          <p className="mt-2 md:mt-0">
            Some links are affiliate links. We may earn a small commission.
          </p>
        </div>
      </div>
    </footer>
  );
}
