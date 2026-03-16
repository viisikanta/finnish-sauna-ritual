import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EmailCapture } from "@/components/EmailCapture";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title:
    "Best Saunas & Hot Springs in Iceland 2026 | Blue Lagoon vs Sky Lagoon | Finnish Sauna Guide",
  description:
    "Guide to the best saunas and thermal baths in Iceland. Blue Lagoon vs Sky Lagoon comparison, Secret Lagoon, Myvatn Nature Baths, and hot pot culture explained.",
  keywords: [
    "best saunas Iceland",
    "Blue Lagoon vs Sky Lagoon",
    "Iceland hot springs",
    "Blue Lagoon Iceland",
    "Sky Lagoon Reykjavik",
    "Secret Lagoon Iceland",
    "Myvatn Nature Baths",
    "Iceland geothermal baths",
    "hot pot Iceland",
    "heitur pottur",
  ],
};

export default function IcelandSaunasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Saunas and Hot Springs in Iceland 2026",
    description:
      "A comprehensive guide to Iceland's best thermal baths and geothermal lagoons, including the Blue Lagoon vs Sky Lagoon comparison, Secret Lagoon, and hot pot culture.",
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
    datePublished: "2025-10-15",
    dateModified: "2026-03-15",
    mainEntityOfPage: "https://finnishsaunaguide.com/best-saunas/iceland",
  };

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
              { label: "Best Saunas", href: "/best-saunas" },
              { label: "Iceland" },
            ]}
          />
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--color-cedar)] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Best Saunas &amp; Hot Springs in Iceland
          </h1>
          <div className="prose max-w-none">
            <p className="text-lg text-[var(--color-stone)] leading-relaxed mb-4">
              Iceland is what happens when you build a civilization on top of a volcano.
              The island sits directly on the Mid-Atlantic Ridge, where the North American
              and Eurasian tectonic plates are pulling apart, filling the gap with magma
              that heats groundwater to temperatures that would be useful in a sauna. And
              Icelanders have been using that gift for over a thousand years.
            </p>
            <p className="text-lg text-[var(--color-stone)] leading-relaxed mb-4">
              Bathing in Iceland is cultural DNA. The Icelandic sagas mention hot springs
              as meeting places and sites of political negotiation. The famous Snorralaug,
              a hot pool built in the 12th century by saga writer Snorri Sturluson, still
              exists. Today, nearly every town in Iceland has a public swimming pool
              (sundlaug) heated by geothermal water, with hot pots (heitur pottur) where
              locals gather daily to catch up, gossip, and soak.
            </p>
            <p className="text-lg text-[var(--color-stone)] leading-relaxed">
              As a Finn, I feel a deep kinship with Icelandic bathing culture. The
              philosophy is the same &mdash; heat, water, community, and a complete
              disregard for the idea that sitting in hot water requires a luxury
              price tag. But where Finnish sauna culture is about the interplay
              between fire and stone, Icelandic bathing is about the raw geological
              power of the earth itself. Here are the best places to experience it.
            </p>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold text-[var(--color-cedar)] mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Top Thermal Destinations
        </h2>

        <div className="prose max-w-none space-y-10">
          {/* Blue Lagoon */}
          <div className="border-l-4 border-[var(--color-warm-300)] pl-6">
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
              Blue Lagoon (Bláa Lónið)
            </h3>
            <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
              Grindavík, Reykjanes Peninsula &bull; 47 km from Reykjavik &bull; Year-round
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              The Blue Lagoon is the most famous geothermal spa on earth, and it lives up
              to its reputation. The milky, mineral-blue water sits in the middle of a
              stark lava field, creating a visual contrast that is genuinely otherworldly.
              The water is a byproduct of the nearby Svartsengi geothermal power plant
              &mdash; rich in silica, algae, and minerals that give it that distinctive
              color and make your skin feel impossibly smooth.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              The standard experience includes access to the lagoon, a silica mud mask,
              and a drink from the in-water bar. The water temperature hovers around
              37-40&deg;C, comfortable enough to soak in for hours. There is also a steam
              room, a sauna, and a waterfall that provides a natural shoulder massage.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              For those wanting something more, the Retreat Spa is the Blue Lagoon&apos;s
              luxury tier &mdash; a separate, more private lagoon, an underground spa
              carved into the lava, and treatments that use the lagoon&apos;s minerals. It
              is expensive (starting around &euro;500), but it is one of the most
              extraordinary spa experiences in the world. The standard Blue Lagoon,
              however, is already remarkable and far more accessible.
            </p>
          </div>

          {/* Sky Lagoon */}
          <div className="border-l-4 border-[var(--color-warm-300)] pl-6">
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
              Sky Lagoon
            </h3>
            <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
              Kársnes, Reykjavik &bull; 15 min from downtown &bull; Year-round
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              Sky Lagoon opened in 2021 and immediately became the Blue Lagoon&apos;s most
              serious competitor. Its centerpiece is a stunning 75-meter infinity pool
              that appears to merge with the North Atlantic Ocean beyond it. The visual
              effect is extraordinary &mdash; you float in warm geothermal water while
              staring out at the open ocean, and the boundary between pool and sea
              dissolves.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              The Skjól ritual (their signature 7-step experience) is inspired by
              Icelandic bathing tradition: warm lagoon, cold plunge, sauna, cold mist,
              sky body scrub, steam room, and back to the warm lagoon. It is well-designed
              and takes about 45 minutes to complete, though you can repeat it as many
              times as you like.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              Sky Lagoon&apos;s biggest advantage over the Blue Lagoon is location &mdash;
              it is only 15 minutes from downtown Reykjavik, making it far easier to fit
              into a short trip. The atmosphere is more intimate and design-forward, with
              turf-roof architecture that nods to traditional Icelandic building styles.
            </p>
          </div>

          {/* Secret Lagoon */}
          <div className="border-l-4 border-[var(--color-warm-300)] pl-6">
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
              Secret Lagoon (Gamla Laugin)
            </h3>
            <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
              Flúðir, Golden Circle area &bull; 90 min from Reykjavik &bull; Year-round
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              The Secret Lagoon, or Gamla Laugin (&ldquo;the old pool&rdquo;), is
              Iceland&apos;s oldest swimming pool, with a history dating back to 1891. It
              sits in the small village of Flúðir in the Golden Circle region, surrounded
              by steaming hot springs, a small geyser that erupts every few minutes, and
              Icelandic farmland.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              This is the antidote to the Blue Lagoon experience. There are no silica mud
              masks, no in-water bars, no luxury tiers. It is a natural hot spring pool
              with changing facilities, and that is it. The water is around 38-40&deg;C
              year-round, fed by a constant flow of geothermal water. The atmosphere is
              relaxed and authentic &mdash; closer to what Icelandic bathing has been for
              centuries. It is significantly cheaper than the Blue Lagoon and far less
              crowded. If you are on the Golden Circle route (which you should be), build
              in a stop here.
            </p>
          </div>

          {/* Myvatn Nature Baths */}
          <div className="border-l-4 border-[var(--color-warm-300)] pl-6">
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
              Mývatn Nature Baths (Jarðböðin)
            </h3>
            <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
              Lake Mývatn, North Iceland &bull; 480 km from Reykjavik &bull; Year-round
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              Often called the &ldquo;Blue Lagoon of the North,&rdquo; Mývatn Nature
              Baths offers a similar milky-blue geothermal lagoon experience without the
              crowds and at a fraction of the price. The water is alkaline and rich in
              minerals, drawn from depths of up to 2,500 meters, and the setting &mdash;
              overlooking Lake Mývatn with volcanic landscapes stretching to the
              horizon &mdash; is arguably more dramatic than the Blue Lagoon.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              Getting there requires commitment &mdash; Mývatn is in North Iceland, about
              a five-hour drive from Reykjavik or accessible via domestic flights to
              Akureyri. But if you are driving the Ring Road, Mývatn is an essential stop.
              The surrounding area is geologically extraordinary: bubbling mudpots at
              Hverir, the Dimmuborgir lava formations, and Krafla volcano are all
              nearby. Bathe first, explore later.
            </p>
          </div>
        </div>
      </section>

      <AdSlot />

      {/* Blue Lagoon vs Sky Lagoon Comparison */}
      <section className="bg-[var(--color-warm-50)] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-[var(--color-cedar)] mb-4 text-center"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Blue Lagoon vs Sky Lagoon
          </h2>
          <p className="text-center text-[var(--color-stone)] mb-8 max-w-2xl mx-auto">
            This is the question every Iceland visitor asks. Both are excellent, but they
            offer different experiences. Here is an honest comparison.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[var(--color-warm-100)]">
                  <th className="text-left p-4 font-bold text-[var(--color-cedar)] border border-[var(--color-steam)]">
                    Factor
                  </th>
                  <th className="text-left p-4 font-bold text-[var(--color-cedar)] border border-[var(--color-steam)]">
                    Blue Lagoon
                  </th>
                  <th className="text-left p-4 font-bold text-[var(--color-cedar)] border border-[var(--color-steam)]">
                    Sky Lagoon
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    factor: "Price (standard)",
                    blue: "From \u20AC75-100",
                    sky: "From \u20AC55-75",
                  },
                  {
                    factor: "Distance from Reykjavik",
                    blue: "47 km (50 min drive)",
                    sky: "7 km (15 min drive)",
                  },
                  {
                    factor: "Distance from KEF airport",
                    blue: "23 km (20 min drive)",
                    sky: "52 km (45 min drive)",
                  },
                  {
                    factor: "Water type",
                    blue: "Silica-rich, milky blue",
                    sky: "Geothermal, clear to slightly mineral",
                  },
                  {
                    factor: "Signature feature",
                    blue: "Iconic lava field lagoon, silica mud masks",
                    sky: "75m infinity pool, ocean views, 7-step ritual",
                  },
                  {
                    factor: "Atmosphere",
                    blue: "Grand, iconic, bucket-list",
                    sky: "Intimate, design-forward, contemplative",
                  },
                  {
                    factor: "Crowd levels",
                    blue: "High (book weeks ahead)",
                    sky: "Moderate (easier to book)",
                  },
                  {
                    factor: "Sauna quality",
                    blue: "Good steam room and sauna",
                    sky: "Excellent sauna as part of 7-step ritual",
                  },
                  {
                    factor: "Best for",
                    blue: "First-time Iceland visitors, the iconic experience",
                    sky: "Design lovers, sauna enthusiasts, short trips",
                  },
                ].map((row) => (
                  <tr key={row.factor} className="hover:bg-[var(--color-warm-50)]">
                    <td className="p-4 border border-[var(--color-steam)] font-medium text-[var(--color-cedar)]">
                      {row.factor}
                    </td>
                    <td className="p-4 border border-[var(--color-steam)] text-[var(--color-stone)]">
                      {row.blue}
                    </td>
                    <td className="p-4 border border-[var(--color-steam)] text-[var(--color-stone)]">
                      {row.sky}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-[var(--color-steam)]">
              <h3 className="font-bold text-[var(--color-cedar)] mb-2">
                Choose Blue Lagoon if...
              </h3>
              <ul className="text-sm text-[var(--color-stone)] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-forest)]">&#10003;</span>
                  <span>It is your first time in Iceland and you want the iconic experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-forest)]">&#10003;</span>
                  <span>You are flying in or out and want a stop near the airport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-forest)]">&#10003;</span>
                  <span>You want the silica mud and mineral-rich water experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-forest)]">&#10003;</span>
                  <span>Budget is not the primary concern</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[var(--color-steam)]">
              <h3 className="font-bold text-[var(--color-cedar)] mb-2">
                Choose Sky Lagoon if...
              </h3>
              <ul className="text-sm text-[var(--color-stone)] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-forest)]">&#10003;</span>
                  <span>You are staying in Reykjavik and want convenience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-forest)]">&#10003;</span>
                  <span>You appreciate thoughtful design and the ritual experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-forest)]">&#10003;</span>
                  <span>You prefer a more intimate, less crowded atmosphere</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-forest)]">&#10003;</span>
                  <span>You want a strong sauna and cold-plunge experience</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-[var(--color-stone)] mt-6 text-center italic">
            My honest recommendation: if you have time and budget for both, do both. They
            are genuinely different experiences. If you can only do one and it is your first
            time in Iceland, the Blue Lagoon is an experience you will never forget. If you
            are returning to Iceland or prioritize the sauna/ritual element, Sky Lagoon is
            the better choice.
          </p>
        </div>
      </section>

      {/* Hot Pot Culture */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold text-[var(--color-cedar)] mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Hot Pot Culture &mdash; The Soul of Icelandic Bathing
        </h2>
        <div className="prose max-w-none">
          <p className="text-[var(--color-stone)] leading-relaxed mb-4">
            The big-name lagoons get all the attention, but the real heart of Icelandic
            bathing culture is the humble hot pot (heitur pottur). Every town in Iceland
            &mdash; and I mean every town, no matter how small &mdash; has a public
            swimming pool with at least one hot pot. These are not fancy spa experiences.
            They are concrete or stone tubs filled with geothermal water at 38-44&deg;C,
            where locals gather every morning and evening to soak and talk.
          </p>
          <p className="text-[var(--color-stone)] leading-relaxed mb-4">
            The hot pot is Iceland&apos;s equivalent of the Finnish sauna as a social
            institution. Business is discussed. Gossip is exchanged. Problems are solved.
            Friendships are maintained. Showing up at your local sundlaug and sitting in the
            hot pot for 30 minutes is as natural as having morning coffee.
          </p>
          <p className="text-[var(--color-stone)] leading-relaxed mb-4">
            For visitors, the community pools are the most authentic and affordable way to
            experience Icelandic bathing culture. Admission is typically just a few euros.
            The etiquette is simple: shower thoroughly (naked, before putting on your
            swimsuit), be quiet and respectful in the hot pot, and do not bring your phone
            into the water. In Reykjavik, Vesturbaejarlaug, Sundhöllin (recently
            renovated with a beautiful rooftop pool), and Laugardalslaug are all excellent.
          </p>
          <p className="text-[var(--color-stone)] leading-relaxed">
            Beyond the community pools, Iceland has wild hot springs scattered across the
            landscape. Some are well-known, others are unmarked. If you venture to find
            wild hot springs, be careful: water temperatures vary dramatically, some springs
            are scalding hot, and conditions change. Always test the water carefully, bring
            a buddy, and leave no trace.
          </p>
        </div>
      </section>

      {/* Geothermal Connection */}
      <section className="bg-[var(--color-warm-50)] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-[var(--color-cedar)] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The Geothermal Connection
          </h2>
          <div className="prose max-w-none">
            <p className="text-[var(--color-stone)] leading-relaxed mb-4">
              Understanding why Iceland has such extraordinary bathing culture requires
              understanding the geology. Iceland sits on one of the most volcanically active
              spots on earth. Geothermal energy is not a niche renewable here &mdash; it
              powers 90% of Iceland&apos;s heating and 25% of its electricity. The same
              geological forces that created the bathing culture also created one of the
              most sustainable energy systems in the world.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-4">
              The Blue Lagoon&apos;s water is a byproduct of the Svartsengi geothermal power
              plant. The community pools across the country are heated by geothermal
              boreholes. Even the sidewalks in Reykjavik are heated by geothermal water in
              winter. The entire Icelandic relationship with hot water &mdash; for bathing,
              for heating, for energy &mdash; is an expression of living in harmony with
              powerful geological forces.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              As a Finn, where sauna heat comes from chopping wood and burning it, there is
              something profoundly different about bathing in water heated by the earth
              itself. It adds a dimension to the experience that is hard to describe &mdash;
              a sense of scale, of geological time, of being connected to forces far
              larger than yourself. It is one of the reasons Iceland&apos;s bathing
              experiences feel so unique.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold text-[var(--color-cedar)] mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Practical Tips for Bathing in Iceland
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 prose max-w-none">
          <div>
            <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
              Book in Advance
            </h3>
            <p className="text-sm text-[var(--color-stone)] leading-relaxed">
              The Blue Lagoon requires advance booking and frequently sells out weeks
              ahead, especially during summer. Sky Lagoon is easier to book but still
              benefits from advance reservation. The Secret Lagoon and Mývatn Nature
              Baths are more flexible but still book ahead during peak season
              (June-August).
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
              What to Bring
            </h3>
            <p className="text-sm text-[var(--color-stone)] leading-relaxed">
              Swimsuit (required at all Icelandic pools and lagoons), a towel (some
              venues provide them, others rent them), and a hair tie if you have long
              hair. The silica in Blue Lagoon water can dry out hair &mdash; apply
              conditioner before entering. Many visitors bring a waterproof phone case
              for photos in the lagoon.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
              Costs Overview
            </h3>
            <p className="text-sm text-[var(--color-stone)] leading-relaxed">
              Community pools: &euro;5-10. Secret Lagoon: &euro;25-30. Sky Lagoon:
              &euro;55-75. Blue Lagoon: &euro;75-100+ (standard). Mývatn Nature Baths:
              &euro;40-50. The community pools offer the best value by far and are the
              most authentic experience.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
              Showering Rules
            </h3>
            <p className="text-sm text-[var(--color-stone)] leading-relaxed">
              You must shower naked before entering any pool in Iceland. This is
              non-negotiable and enforced. Shower areas are communal and gender-separated.
              It is the same principle as Finnish sauna hygiene &mdash; you wash
              thoroughly before entering shared water. Icelanders take this very
              seriously, and rightly so.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/best-saunas"
            className="text-sm text-[var(--color-lake)] hover:underline font-medium"
          >
            &larr; Back to Best Saunas in the World
          </Link>
          <Link
            href="/best-saunas/finland"
            className="text-sm text-[var(--color-lake)] hover:underline font-medium"
          >
            Best Saunas in Finland &rarr;
          </Link>
          <Link
            href="/best-saunas/germany"
            className="text-sm text-[var(--color-lake)] hover:underline font-medium"
          >
            Best Saunas in Germany &rarr;
          </Link>
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <EmailCapture
          title="Get Our Iceland Bathing Guide"
          description="A downloadable PDF with all the best hot springs, lagoons, and community pools in Iceland. Includes booking tips, packing list, and a map of hidden hot springs."
          buttonText="Send Me the Guide"
          leadMagnet="iceland-bathing-guide"
        />
      </section>

      <AdSlot />
    </>
  );
}
