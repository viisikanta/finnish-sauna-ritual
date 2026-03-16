import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { EmailCapture } from "@/components/EmailCapture";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Best Saunas in the World 2026 | Country Guides & Reviews | Finnish Sauna Guide",
  description:
    "Discover the best saunas in the world — from Finnish smoke saunas to German Aufguss temples and Icelandic geothermal lagoons. Curated by a Finn who has visited them.",
  keywords: [
    "best saunas in the world",
    "best sauna experiences",
    "world sauna guide",
    "SAUNA37 awards",
    "top saunas 2026",
    "sauna travel guide",
    "best public saunas",
  ],
};

export default function BestSaunasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Saunas in the World 2026",
    description:
      "A curated guide to the finest sauna experiences across the globe, from Finnish smoke saunas to Icelandic geothermal lagoons.",
    author: {
      "@type": "Organization",
      name: "Finnish Sauna Guide",
      url: "https://finnishsaunaguide.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Finnish Sauna Guide",
      url: "https://finnishsaunaguide.com",
    },
    datePublished: "2025-09-15",
    dateModified: "2026-03-15",
    mainEntityOfPage: "https://finnishsaunaguide.com/best-saunas",
  };

  const comingSoonCountries = [
    { name: "Estonia", emoji: "\u{1F1EA}\u{1F1EA}", note: "Historic smoke saunas & UNESCO heritage" },
    { name: "Japan", emoji: "\u{1F1EF}\u{1F1F5}", note: "Onsen culture & sentō traditions" },
    { name: "Korea", emoji: "\u{1F1F0}\u{1F1F7}", note: "Jjimjilbang & Korean bathhouse culture" },
    { name: "Sweden", emoji: "\u{1F1F8}\u{1F1EA}", note: "Arctic saunas & bastu traditions" },
    { name: "Russia", emoji: "\u{1F1F7}\u{1F1FA}", note: "Banya & venik rituals" },
    { name: "Switzerland", emoji: "\u{1F1E8}\u{1F1ED}", note: "Alpine wellness & thermal spas" },
    { name: "Austria", emoji: "\u{1F1E6}\u{1F1F9}", note: "Therme culture & Alpine saunas" },
    { name: "USA", emoji: "\u{1F1FA}\u{1F1F8}", note: "The new wave of sauna culture" },
    { name: "Australia", emoji: "\u{1F1E6}\u{1F1FA}", note: "Urban sauna boom down under" },
    { name: "Singapore", emoji: "\u{1F1F8}\u{1F1EC}", note: "Tropical heat meets sauna heat" },
    { name: "Poland", emoji: "\u{1F1F5}\u{1F1F1}", note: "Thermal parks & saunowanie culture" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[var(--color-warm-100)] to-[var(--color-background)] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Best Saunas" },
            ]}
          />
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--color-cedar)] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Best Saunas in the World
          </h1>
          <div className="prose max-w-none">
            <p className="text-lg text-[var(--color-stone)] leading-relaxed mb-4">
              Sauna culture is one of the oldest wellness traditions on earth, and it is far
              from being just a Finnish thing. From the steamy banyas of Russia to the volcanic
              hot springs of Iceland, from the meticulous Aufguss ceremonies of Germany to the
              serene onsen of Japan, every culture has found its own way to harness the healing
              power of heat and water.
            </p>
            <p className="text-lg text-[var(--color-stone)] leading-relaxed mb-4">
              As a Finn, I grew up thinking sauna was the most natural thing in the world. It
              was only when I started traveling that I realized how beautifully diverse bathing
              culture really is. Every country brings something unique to the experience &mdash;
              different rituals, different architecture, different philosophies about what heat
              and steam can do for the body and mind.
            </p>
            <p className="text-lg text-[var(--color-stone)] leading-relaxed">
              This guide is our growing collection of the world&apos;s best sauna experiences. We
              reference the{" "}
              <strong>SAUNA37 World Sauna Awards 2026</strong>, the most respected recognition
              in the global sauna industry, alongside our own firsthand experiences. Whether you
              are planning a sauna pilgrimage or just curious about what is out there, start
              here.
            </p>
          </div>
        </div>
      </section>

      {/* Country Guides Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold text-[var(--color-cedar)] text-center mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Country Sauna Guides
        </h2>
        <p className="text-center text-[var(--color-stone)] mb-10 max-w-2xl mx-auto">
          Deep-dive guides to the best sauna experiences in each country, with practical
          tips, etiquette notes, and honest recommendations.
        </p>

        {/* Published guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ContentCard
            emoji={"\u{1F1EB}\u{1F1EE}"}
            tag="The Homeland"
            title="Best Saunas in Finland"
            description="3.3 million saunas for 5.5 million people. From Helsinki's design saunas to Lakeland smoke saunas and the sauna capital Tampere. The definitive guide."
            href="/best-saunas/finland"
          />
          <ContentCard
            emoji={"\u{1F1E9}\u{1F1EA}"}
            tag="Europe's Sauna Powerhouse"
            title="Best Saunas in Germany"
            description="Over 2,000 facilities and 30 million regular sauna-goers. Discover the art of Aufguss, Roman-Irish baths, and world-class thermal spas."
            href="/best-saunas/germany"
          />
          <ContentCard
            emoji={"\u{1F1EE}\u{1F1F8}"}
            tag="Geothermal Paradise"
            title="Best Saunas & Baths in Iceland"
            description="Blue Lagoon, Sky Lagoon, secret hot springs, and the volcanic energy that powers an entire nation's bathing culture."
            href="/best-saunas/iceland"
          />
        </div>

        {/* Coming soon teasers */}
        <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-6 text-center">
          Coming Soon
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {comingSoonCountries.map((country) => (
            <div
              key={country.name}
              className="border border-[var(--color-steam)] rounded-lg p-4 bg-white/60 opacity-75"
            >
              <span className="text-2xl mb-2 block">{country.emoji}</span>
              <h4 className="font-bold text-sm text-[var(--color-foreground)]">
                {country.name}
              </h4>
              <p className="text-xs text-[var(--color-stone)] mt-1">{country.note}</p>
              <span className="inline-block mt-2 text-xs font-medium text-[var(--color-warm-400)]">
                Guide coming soon
              </span>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* World Sauna Map Overview */}
      <section className="bg-[var(--color-warm-50)] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-[var(--color-cedar)] text-center mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Sauna Traditions Around the World
          </h2>
          <div className="prose max-w-none">
            <p className="text-[var(--color-stone)] leading-relaxed mb-6">
              Heat bathing is a universal human tradition that stretches back thousands of
              years across every continent. Here is a brief look at how different regions
              have shaped sauna and bathing culture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
                  Northern Europe
                </h3>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                  The heartland of sauna culture. Finland, Sweden, Norway, and the Baltic
                  states have practiced heat bathing for over 2,000 years. The Finnish sauna,
                  Estonian smoke sauna (UNESCO heritage), and Scandinavian bastu traditions
                  form the foundation of what the world knows as &ldquo;sauna.&rdquo;
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
                  Central Europe
                </h3>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                  Germany, Austria, and Switzerland have transformed sauna into a wellness art
                  form. The German Aufguss tradition, enormous thermal spa complexes, and the
                  Roman-Irish bathing heritage create experiences that are theatrical,
                  meticulous, and deeply relaxing.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
                  Eastern Europe &amp; Russia
                </h3>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                  The Russian banya is a powerful tradition built around intense steam, birch
                  venik beatings, and cold plunges. Polish saunowanie culture has been growing
                  rapidly, with modern thermal parks blending tradition with innovation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
                  East Asia
                </h3>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                  Japan&apos;s onsen and sentō traditions are deeply embedded in daily life and
                  spiritual practice. Korean jjimjilbangs are social gathering places where
                  families spend entire days. Both cultures have elevated bathing into a
                  refined art.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
                  Iceland &amp; Volcanic Regions
                </h3>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                  Where the earth itself provides the heat. Iceland&apos;s geothermal hot springs,
                  New Zealand&apos;s Maori bathing traditions, and volcanic hot springs across the
                  Pacific Ring of Fire offer bathing experiences powered by nature.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
                  The New Wave
                </h3>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                  The USA, Australia, Singapore, and urban centers worldwide are experiencing
                  a sauna renaissance. Modern design saunas, cold plunge studios, and Nordic
                  wellness concepts are spreading rapidly, bringing sauna culture to entirely
                  new audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes a Great Sauna */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold text-[var(--color-cedar)] text-center mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          What Makes a Great Sauna?
        </h2>
        <p className="text-center text-[var(--color-stone)] mb-10 max-w-2xl mx-auto">
          After years of visiting saunas across the world, these are the six qualities
          that separate a truly great sauna from an ordinary one.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Heat Quality",
              icon: "\u{1F525}",
              description:
                "A great sauna has soft, enveloping heat — not harsh or dry. The best saunas use wood-burning stoves or high-quality electric heaters with generous stone mass that stores and radiates heat evenly.",
            },
            {
              title: "Water & Löyly",
              icon: "\u{1F4A7}",
              description:
                "The interplay between water and hot stones is everything. Great saunas let you throw löyly freely, and the steam should feel gentle and nourishing, never sharp or suffocating.",
            },
            {
              title: "Atmosphere",
              icon: "\u{1F30C}",
              description:
                "Dim lighting, natural materials, minimal noise. The best saunas create a meditative space where the outside world fades away. No TVs, no loud music — just the sound of crackling wood and sizzling stones.",
            },
            {
              title: "Design & Materials",
              icon: "\u{1FAB5}",
              description:
                "Wood matters. Alder, aspen, and thermally treated spruce are traditional Finnish choices. The architecture should serve the experience — good ventilation, comfortable benches, proper drainage.",
            },
            {
              title: "Tradition & Ritual",
              icon: "\u{1F54A}\u{FE0F}",
              description:
                "Whether it is a Finnish vihta whisking, a German Aufguss ceremony, or a Russian venik beating, the rituals around sauna give the experience meaning and depth beyond simple heat exposure.",
            },
            {
              title: "Hospitality",
              icon: "\u{2764}\u{FE0F}",
              description:
                "The best saunas make you feel welcome, whether you are a seasoned sauna-goer or a nervous first-timer. Good guidance, clean facilities, and a genuine respect for the tradition make all the difference.",
            },
          ].map((criterion) => (
            <div
              key={criterion.title}
              className="border border-[var(--color-steam)] rounded-lg p-6 bg-white"
            >
              <span className="text-2xl mb-3 block">{criterion.icon}</span>
              <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
                {criterion.title}
              </h3>
              <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                {criterion.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture
          title="Get Our World Sauna Bucket List"
          description="A curated PDF with the 50 best sauna experiences on earth, organized by country. Plus updates as we publish new guides."
          buttonText="Send Me the List"
          leadMagnet="world-sauna-bucket-list"
        />
      </section>

      <AdSlot />
    </>
  );
}
