import { ContentCard } from "@/components/ContentCard";
import { EmailCapture } from "@/components/EmailCapture";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[var(--color-warm-100)] to-[var(--color-background)] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--color-cedar)] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Experience Sauna the Finnish Way
          </h1>
          <p className="text-lg text-[var(--color-stone)] max-w-2xl mx-auto mb-8 leading-relaxed">
            Authentic sauna guides, etiquette, accessories and the best saunas
            worldwide. Written by a Finn who grew up with a sauna in every home.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/sauna-etiquette/first-time"
              className="px-6 py-3 bg-[var(--color-cedar)] text-white rounded-lg font-semibold hover:bg-[var(--color-warm-800)] transition-colors"
            >
              First Time? Start Here
            </Link>
            <Link
              href="/best-saunas"
              className="px-6 py-3 border-2 border-[var(--color-cedar)] text-[var(--color-cedar)] rounded-lg font-semibold hover:bg-[var(--color-cedar)] hover:text-white transition-colors"
            >
              Explore Best Saunas
            </Link>
          </div>
        </div>
      </section>

      {/* What is Loyly */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-4">
          <h2
            className="text-3xl font-bold text-[var(--color-cedar)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            What is Loyly?
          </h2>
        </div>
        <div className="prose max-w-3xl mx-auto text-center">
          <p className="text-[var(--color-stone)] leading-relaxed">
            <strong>Loyly</strong> (pronounced &quot;lur-lu&quot;) is the Finnish
            word for the steam that rises when you throw water on hot sauna
            stones. It is the soul of the Finnish sauna experience &mdash; that
            moment when the heat wraps around you, the steam fills your lungs,
            and the world outside disappears.
          </p>
          <p className="text-[var(--color-stone)] leading-relaxed">
            In Finland, sauna is not a luxury. It is part of daily life. There
            are 3.3 million saunas for 5.5 million people. We sauna to relax, to
            think, to connect, and to heal. Finnish Sauna Guide exists to share this
            culture with the world.
          </p>
        </div>
      </section>

      {/* Content hubs */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2
          className="text-2xl font-bold text-[var(--color-cedar)] text-center mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Explore Our Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContentCard
            emoji="&#x1f9d6;"
            tag="Etiquette"
            title="Sauna Etiquette Guide"
            description="Everything you need to know about how to behave in a sauna, from nudity norms to loyly etiquette. Country-specific guides included."
            href="/sauna-etiquette"
          />
          <ContentCard
            emoji="&#x1f9e2;"
            tag="Accessories"
            title="Essential Sauna Accessories"
            description="From sauna hats to birch whisks, buckets to thermometers. Our tested recommendations for the perfect sauna setup."
            href="/sauna-accessories"
          />
          <ContentCard
            emoji="&#x1f381;"
            tag="Gift Ideas"
            title="Sauna Gift Guide"
            description="The best sauna gifts for every budget. Perfect for birthdays, Christmas, housewarmings, or anyone who loves the heat."
            href="/sauna-gift-guide"
          />
          <ContentCard
            emoji="&#x1f30d;"
            tag="Travel"
            title="Best Saunas in the World"
            description="From Finnish smoke saunas to German Aufguss temples to Icelandic geothermal lagoons. Our curated guide to the world's finest."
            href="/best-saunas"
          />
          <ContentCard
            emoji="&#x1f1e9;&#x1f1ea;"
            tag="Country Guide"
            title="German Sauna Culture"
            description="Strict nudity rules, the art of Aufguss, and how German saunas differ from Finnish ones. Essential reading for first-timers."
            href="/sauna-etiquette/germany"
          />
          <ContentCard
            emoji="&#x2744;&#xfe0f;"
            tag="Finnish Culture"
            title="Your First Finnish Sauna"
            description="Nervous about your first sauna? Here is everything you need to know, from a Finn who has done this thousands of times."
            href="/sauna-etiquette/first-time"
          />
        </div>
      </section>

      {/* Email capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture />
      </section>

      {/* Finnish sauna facts */}
      <section className="bg-[var(--color-warm-100)] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl font-bold text-[var(--color-cedar)] text-center mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Finnish Sauna by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "3.3M", label: "Saunas in Finland" },
              { number: "5.5M", label: "People in Finland" },
              { number: "2,000+", label: "Years of tradition" },
              { number: "80\u2013100\u00B0C", label: "Ideal temperature" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[var(--color-cedar)]">
                  {stat.number}
                </p>
                <p className="text-sm text-[var(--color-stone)] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why trust us */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2
          className="text-2xl font-bold text-[var(--color-cedar)] mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Why Finnish Sauna Guide?
        </h2>
        <p className="text-[var(--color-stone)] max-w-2xl mx-auto mb-8 leading-relaxed">
          Most sauna websites are written by people who bought an infrared box
          last year. Finnish Sauna Guide is written by a Finn who grew up with a sauna
          in every home, at every summer cottage, and in every apartment
          building. This is our culture, and we are sharing it with you.
        </p>
        <Link
          href="/about"
          className="text-[var(--color-lake)] font-semibold hover:underline"
        >
          Read our story &rarr;
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
              "Authentic Finnish sauna guides, etiquette, accessories and the best saunas worldwide.",
          }),
        }}
      />
    </>
  );
}
