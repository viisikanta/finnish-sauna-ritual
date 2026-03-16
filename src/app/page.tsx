import { ContentCard } from "@/components/ContentCard";
import { EmailCapture } from "@/components/EmailCapture";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero — image + text combined */}
      <section className="relative w-full min-h-[85vh] flex items-end">
        <Image
          src="/images/modern-finnish-sauna-lake-view.jpg"
          alt="Modern Finnish sauna interior with panoramic winter lake view"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for text readability, fading to linen at bottom */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[var(--color-linen)]" />
        <div className="relative z-10 w-full pb-16 pt-32 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-birch-light)] mb-6 font-medium">
              The definitive sauna resource
            </p>
            <h1
              className="text-4xl md:text-[3.5rem] text-white mb-6 drop-shadow-sm"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
            >
              The steam should not bite.
              <br />
              It should embrace.
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Finnish Sauna Guide is the definitive resource for mastering sauna
              culture. Etiquette, accessories, and the finest saunas worldwide.
              Written by a Finn.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/sauna-etiquette/first-time"
                className="px-7 py-3 bg-[var(--color-birch)] text-white text-sm font-medium tracking-wide hover:bg-[var(--color-birch-dark)] transition-colors"
              >
                Begin Your First Ritual
              </Link>
              <Link
                href="/best-saunas"
                className="px-7 py-3 border border-white/40 text-white text-sm font-medium tracking-wide hover:border-[var(--color-birch)] hover:text-[var(--color-birch)] transition-colors"
              >
                Explore the World
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-16 mx-auto border-t border-[var(--color-steam)]" />

      {/* Löyly explanation */}
      <section className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2
          className="text-2xl md:text-3xl text-[var(--color-foreground)] mb-6"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
        >
          Löyly
        </h2>
        <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-birch)] mb-6 font-medium">
          / Low-lu / &mdash; Finnish
        </p>
        <p className="text-[var(--color-stone)] leading-[1.9] mb-4">
          The steam that rises when water meets hot stones. In Finland,
          it is not just a word. It is the soul of the sauna &mdash; the moment
          when heat wraps around you and the world outside disappears.
        </p>
        <p className="text-[var(--color-stone)] leading-[1.9]">
          3.3 million saunas. 5.5 million people. In Finland, sauna is not
          wellness. It is not a trend. It is simply how we live.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-16 mx-auto border-t border-[var(--color-steam)]" />

      {/* Vihta image */}
      <div className="relative w-full h-[400px] my-12">
        <Image
          src="/images/vihta-birch-whisk-lake-dock.jpg"
          alt="Fresh birch vihta whisks on a Finnish lakeside dock"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Content hubs */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-birch)] text-center mb-3 font-medium">
          Guides
        </p>
        <h2
          className="text-2xl md:text-3xl text-[var(--color-foreground)] text-center mb-12"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
        >
          Knowledge, distilled
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContentCard
            tag="Etiquette"
            title="Sauna Etiquette"
            description="How to behave in a sauna. Nudity norms, löyly etiquette, and country-specific customs explained with clarity."
            href="/sauna-etiquette"
          />
          <ContentCard
            tag="Accessories"
            title="Essential Accessories"
            description="Sauna hats, birch whisks, buckets, and thermometers. Considered recommendations for a proper setup."
            href="/sauna-accessories"
          />
          <ContentCard
            tag="Gifts"
            title="Gift Guide"
            description="Curated sauna gifts at every price point. For birthdays, housewarmings, or anyone who understands the ritual."
            href="/sauna-gift-guide"
          />
          <ContentCard
            tag="Travel"
            title="Best Saunas in the World"
            description="Finnish smoke saunas, German Aufguss temples, Icelandic geothermal lagoons. The finest experiences, mapped."
            href="/best-saunas"
          />
          <ContentCard
            tag="Germany"
            title="German Sauna Culture"
            description="Mandatory nudity, the art of Aufguss, and how German saunas differ from Finnish ones. A considered guide."
            href="/sauna-etiquette/germany"
          />
          <ContentCard
            tag="First Time"
            title="Your First Finnish Sauna"
            description="Everything you need to know, from someone who has done this thousands of times. No anxiety, just clarity."
            href="/sauna-etiquette/first-time"
          />
        </div>
      </section>

      {/* Email capture */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <EmailCapture />
      </section>

      {/* Stats */}
      <section className="border-y border-[var(--color-steam)] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "3.3M", label: "Saunas in Finland" },
              { number: "5.5M", label: "People in Finland" },
              { number: "2,000+", label: "Years of tradition" },
              { number: "80\u2013100\u00B0C", label: "Ideal temperature" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl md:text-3xl text-[var(--color-foreground)]"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
                >
                  {stat.number}
                </p>
                <p className="text-xs uppercase tracking-[0.1em] text-[var(--color-stone-light)] mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Source advantage */}
      <section className="max-w-2xl mx-auto px-4 py-20 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-birch)] mb-3 font-medium">
          The source
        </p>
        <h2
          className="text-2xl md:text-3xl text-[var(--color-foreground)] mb-6"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
        >
          We are not selling hardware.
          <br />
          We are sharing the soul.
        </h2>
        <p className="text-[var(--color-stone)] leading-[1.9] mb-8">
          Most sauna content is written by people who bought an infrared box
          last year. Finnish Sauna Guide is written by a Finn who grew up with
          sauna in every home, at every summer cottage, in every apartment
          building. We provide the ritual for your sauna &mdash; the culture
          that turns a hot room into a practice.
        </p>
        <Link
          href="/about"
          className="text-sm text-[var(--color-lake)] font-medium underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
        >
          About Finnish Sauna Guide
        </Link>
      </section>

      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Finnish Sauna Guide",
            url: "https://finnishsaunaguide.com",
            description:
              "The definitive guide to Finnish sauna culture. Etiquette, accessories, and the finest saunas worldwide.",
          }),
        }}
      />
    </>
  );
}
