import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-warm-900)] text-[var(--color-warm-200)] mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3
              className="text-lg font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Finnish Sauna Guide
            </h3>
            <p className="text-sm leading-relaxed">
              Authentic Finnish sauna guides written by a Finn. From etiquette
              to accessories, we help you experience sauna the right way.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Guides</h4>
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
            <h4 className="font-semibold text-white mb-3">Shop & Explore</h4>
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
            <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
            <p className="text-sm mb-3">
              Get our free Finnish Sauna Etiquette cheat sheet and weekly sauna
              tips.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 rounded bg-[var(--color-warm-800)] text-white placeholder:text-[var(--color-stone-light)] text-sm border border-[var(--color-warm-700)] focus:outline-none focus:border-[var(--color-warm-500)]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[var(--color-lake)] text-white rounded text-sm font-medium hover:bg-[var(--color-lake-light)] transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[var(--color-warm-800)] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--color-stone-light)]">
          <p>&copy; {new Date().getFullYear()} Finnish Sauna Guide. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Affiliate Disclosure: Some links on this site are affiliate links.
            We may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
