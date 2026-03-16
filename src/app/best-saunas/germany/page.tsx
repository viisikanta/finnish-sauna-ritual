import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EmailCapture } from "@/components/EmailCapture";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Best Saunas in Germany 2026 | Thermal Spas & Aufguss Culture | Finnish Sauna Guide",
  description:
    "Guide to the best saunas in Germany — from Friedrichsbad's Roman-Irish baths to Therme Erding and Berlin's Vabali Spa. Aufguss culture, etiquette, and practical tips.",
  keywords: [
    "best saunas in Germany",
    "German sauna culture",
    "Aufguss",
    "Friedrichsbad Baden-Baden",
    "Therme Erding",
    "Vabali Spa Berlin",
    "German thermal spa",
    "Caracalla Therme",
    "Liquidrom Berlin",
    "sauna etiquette Germany",
  ],
};

export default function GermanySaunasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Saunas in Germany 2026",
    description:
      "A comprehensive guide to the best saunas and thermal spas in Germany, covering Aufguss culture, etiquette, and the finest facilities from Baden-Baden to Berlin.",
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
    datePublished: "2025-10-01",
    dateModified: "2026-03-15",
    mainEntityOfPage: "https://finnishsaunaguide.com/best-saunas/germany",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative w-full h-[50vh] min-h-[400px] mb-10">
        <Image
          src="/images/barrel-sauna-winter-snow.jpg"
          alt="Barrel sauna covered in snow in a winter forest"
          fill
          priority
          className="object-cover rounded-sm"
          sizes="100vw"
        />
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[var(--color-warm-100)] to-[var(--color-background)] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Best Saunas", href: "/best-saunas" },
              { label: "Germany" },
            ]}
          />
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--color-cedar)] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Best Saunas in Germany
          </h1>
          <div className="prose max-w-none">
            <p className="text-lg text-[var(--color-stone)] leading-relaxed mb-4">
              Germany is, without question, Europe&apos;s sauna powerhouse. The numbers are
              staggering: over 2,000 dedicated sauna facilities, more than 30 million
              regular sauna-goers, and a wellness industry that has elevated thermal
              bathing into something that is equal parts science, art, and spectacle.
            </p>
            <p className="text-lg text-[var(--color-stone)] leading-relaxed mb-4">
              As a Finn, I expected to feel superior when I first visited German saunas.
              After all, we invented this, right? Instead, I was humbled. Germans have
              taken the core idea of sauna and built upon it with a level of investment,
              precision, and theatrical flair that is uniquely their own. The facilities
              are enormous. The Aufguss ceremonies are performances. The thermal water is
              ancient and mineral-rich. And yes, everyone is naked &mdash; Germans are as
              serious about textile-free sauna as Finns are.
            </p>
            <p className="text-lg text-[var(--color-stone)] leading-relaxed">
              If Finland is the spiritual homeland of sauna, Germany is where the tradition
              has been industrialized, professionalized, and perfected into some of the most
              impressive wellness experiences on earth. Here are the ones worth traveling
              for.
            </p>
          </div>
        </div>
      </section>

      {/* Top Saunas */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold text-[var(--color-cedar)] mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Top Saunas &amp; Thermal Spas in Germany
        </h2>

        <div className="prose max-w-none space-y-10">
          {/* Friedrichsbad */}
          <div className="border-l-4 border-[var(--color-warm-300)] pl-6">
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
              Friedrichsbad, Baden-Baden
            </h3>
            <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
              Baden-Baden, Baden-Württemberg &bull; Roman-Irish bath &bull; Since 1877
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              Friedrichsbad is not just a spa &mdash; it is a cathedral of bathing. Built
              in 1877 in the Renaissance Revival style, this Roman-Irish bathhouse has been
              offering the same 17-station ritual for nearly 150 years. The thermal water
              rises from 2,000 meters below the earth&apos;s surface, naturally heated to
              68&deg;C, rich in minerals that Romans discovered two millennia ago.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              The 17-step circuit takes about three hours and guides you through warm air
              baths, hot air baths, thermal steam, full-body brush massage, thermal
              pools of varying temperatures, and finally a cream rest wrapped in warm
              towels. The architecture is breathtaking &mdash; vaulted ceilings, marble
              columns, mosaic floors, and a central dome that makes you feel like
              you are bathing in a palace. Because you are.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              Mark Twain visited in 1878 and wrote: &ldquo;After ten minutes you forget
              time, after twenty minutes you forget the world.&rdquo; He was not
              exaggerating. Friedrichsbad is a place where time genuinely dissolves. It is
              one of the great bathing experiences on earth, and it should be on every
              sauna lover&apos;s bucket list.
            </p>
          </div>

          {/* Caracalla Therme */}
          <div className="border-l-4 border-[var(--color-warm-300)] pl-6">
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
              Caracalla Therme, Baden-Baden
            </h3>
            <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
              Baden-Baden, Baden-Württemberg &bull; Modern thermal spa &bull; 5,000 m&sup2;
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              Just steps from Friedrichsbad sits its modern counterpart. Caracalla Therme
              uses the same ancient thermal water but presents it in a contemporary
              setting. The spa spans 5,000 square meters of pools, grottos, and jets, with
              the water naturally heated to 68&deg;C and cooled to comfortable bathing
              temperatures.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              The upper floor houses the textile-free sauna landscape, which is where the
              experience really shines. Multiple saunas at different temperatures, a cold
              plunge pool, relaxation rooms, and regular Aufguss sessions. For those who
              want the Baden-Baden thermal water experience without the formality of
              Friedrichsbad, Caracalla is the answer. My tip: do Friedrichsbad in the
              morning, have lunch in town, then spend the afternoon at Caracalla. A
              perfect Baden-Baden day.
            </p>
          </div>

          {/* Therme Erding */}
          <div className="border-l-4 border-[var(--color-warm-300)] pl-6">
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
              Therme Erding, Munich Area
            </h3>
            <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
              Erding, Bavaria &bull; World&apos;s largest spa complex &bull; 27+ saunas
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              Everything about Therme Erding is superlative. It is the largest spa complex
              in the world, spanning 185,000 square meters (yes, you read that correctly).
              The sauna area alone &mdash; called the Saunaparadies &mdash; features over
              27 different saunas, from Finnish-style wood cabins to massive event saunas
              that seat over 100 people for Aufguss performances.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              The scale is overwhelming in the best way. There is also Galaxy Erding (a
              water park with slides), the VitalTherme (thermal pools), and the
              VitalOase (adults-only thermal area). You could spend an entire day here
              and not experience everything. The Aufguss sessions in the large event
              saunas are particularly impressive &mdash; choreographed performances with
              towel artistry, essential oils, and music that turn a sauna session into
              theater. It is very German, and it is spectacular.
            </p>
          </div>

          {/* Vabali Spa Berlin */}
          <div className="border-l-4 border-[var(--color-warm-300)] pl-6">
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
              Vabali Spa, Berlin
            </h3>
            <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
              Moabit, Berlin &bull; Balinese-themed urban spa &bull; SAUNA37 Award Winner
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              In the middle of one of Europe&apos;s grittiest cities, Vabali Spa Berlin is
              an unexpected oasis. The concept is Balinese-inspired: thatched-roof
              pavilions, tropical gardens, koi ponds, and carved stone everywhere. It
              sounds like it should not work in Berlin, but it works beautifully.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              The sauna offerings are extensive &mdash; Finnish saunas, bio-saunas,
              steam baths, infrared cabins, and several outdoor saunas set among the
              gardens. The Aufguss program is one of the best in Berlin, with multiple
              sessions throughout the day. The food is excellent (rare for a spa), and the
              relaxation areas are genuinely peaceful. Vabali won a SAUNA37 award, and
              it is one of those places that proves a sauna does not need to look Finnish
              to deliver a world-class experience.
            </p>
          </div>

          {/* Vabali Spa Hamburg */}
          <div className="border-l-4 border-[var(--color-warm-300)] pl-6">
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
              Vabali Spa, Hamburg
            </h3>
            <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
              Hamburg &bull; Balinese-themed urban spa &bull; SAUNA37 2026 Award Winner
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              The Hamburg outpost of Vabali follows the same Balinese-inspired concept as
              Berlin but with its own character. It earned a SAUNA37 2026 award,
              recognition of its excellent sauna quality, stunning design, and outstanding
              Aufguss program. The facility features multiple saunas at varying
              temperatures, extensive outdoor areas, and the same high standard of food
              and service that has made the Vabali name synonymous with premium urban
              wellness in Germany. If you are visiting Hamburg, this is the sauna
              destination.
            </p>
          </div>

          {/* Liquidrom */}
          <div className="border-l-4 border-[var(--color-warm-300)] pl-6">
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
              Liquidrom, Berlin
            </h3>
            <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
              Kreuzberg, Berlin &bull; Underground temple &bull; Underwater music
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              Liquidrom is unlike anything else on this list, or anywhere else in the
              world. The centerpiece is a saltwater floating pool housed inside a former
              cistern, with underwater speakers that play electronic music and ambient
              soundscapes. You float in warm, salty water in near-darkness, with colored
              lights shifting slowly overhead, while music reverberates through your body.
              It is deeply strange and deeply wonderful.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              The sauna area is also excellent, with a Finnish sauna, a panorama sauna,
              a Kelo sauna (built from naturally aged Arctic wood), and various steam
              baths. But the floating pool is what you come for. On weekends,
              Liquidrom hosts DJ sessions where the music in the pool shifts to electronic
              sets. It is Berlin at its most creative: taking an ancient tradition and
              remixing it into something entirely new.
            </p>
          </div>
        </div>
      </section>

      <AdSlot />

      {/* Aufguss Culture */}
      <section className="bg-[var(--color-warm-50)] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-[var(--color-cedar)] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The Art of Aufguss
          </h2>
          <div className="prose max-w-none">
            <p className="text-[var(--color-stone)] leading-relaxed mb-4">
              If there is one thing Germany has contributed to global sauna culture that is
              uniquely its own, it is the Aufguss. The word literally means
              &ldquo;infusion&rdquo; &mdash; water infused with essential oils is poured
              onto the hot stones, and a trained Saunameister (sauna master) uses a towel
              to circulate the aromatic steam throughout the room, directing waves of
              intense heat toward the bathers.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-4">
              But calling it just &ldquo;pouring water on stones&rdquo; is like calling
              opera &ldquo;singing.&rdquo; In Germany, the Aufguss has evolved into a
              choreographed performance art. The Saunameister selects oils to create a
              sensory narrative &mdash; perhaps starting with eucalyptus for clarity,
              building through citrus for energy, and finishing with lavender for calm. The
              towel work is theatrical, with spinning, swooping, and fanning techniques
              that direct heat precisely. Music is often involved. Some Aufguss events
              have themes, costumes, and even storytelling.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-4">
              Germany hosts the annual Aufguss World Championship, where the world&apos;s
              best Saunameister compete with elaborate, creative performances that push the
              boundaries of what a sauna session can be. For a Finn raised on the quiet
              simplicity of throwing water on stones, watching an Aufguss competition is
              a revelation. It is a completely different philosophy &mdash; social where
              Finnish sauna is contemplative, performative where Finnish sauna is
              understated &mdash; and both approaches are wonderful.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              Most large German sauna facilities run scheduled Aufguss sessions throughout
              the day. Check the daily program when you arrive and plan your visit around
              the sessions that interest you. Arriving a few minutes early is wise, as
              popular sessions fill up quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold text-[var(--color-cedar)] mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Practical Information
        </h2>

        <div className="prose max-w-none mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
                Nudity &mdash; Yes, It Is Mandatory
              </h3>
              <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                In the sauna area (Saunalandschaft) of German spas, nudity is not
                optional. Wearing a swimsuit in the sauna is considered unhygienic
                and you will be asked to remove it. Bring a large towel to sit on
                and a bathrobe for walking between saunas. Mixed-gender nudity is the
                norm. This is not negotiable and not awkward once you are there &mdash;
                everyone is focused on their own experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
                Day Pass vs. Short Visit
              </h3>
              <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                Most German spas sell day passes (Tageskarte) that are valid from
                opening until close. Prices range from &euro;25-45 for a full day,
                depending on the facility. Some offer 2-3 hour short passes at lower
                prices. My advice: buy the day pass. German spas are designed for
                long visits, and rushing through defeats the purpose.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
                What to Bring
              </h3>
              <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                Two large towels (one for the sauna, one for drying), a bathrobe,
                flip-flops/slippers, and a water bottle. Most spas rent towels and
                bathrobes for an extra fee. Bring your own to save money. Leave your
                phone in the locker &mdash; photography is strictly prohibited in
                sauna areas.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
                Etiquette Essentials
              </h3>
              <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                Always sit or lie on your towel. Shower before entering the sauna.
                Do not pour water on stones unless invited or at a self-service sauna.
                During Aufguss sessions, stay for the entire duration &mdash; leaving
                mid-session is considered disruptive. Read our{" "}
                <Link
                  href="/sauna-etiquette/germany"
                  className="text-[var(--color-lake)] hover:underline"
                >
                  complete German sauna etiquette guide
                </Link>{" "}
                for full details.
              </p>
            </div>
          </div>
        </div>

        {/* Sauna comparison table */}
        <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-4">
          Germany Sauna Quick Reference
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-warm-100)]">
                <th className="text-left p-3 font-bold text-[var(--color-cedar)] border border-[var(--color-steam)]">
                  Sauna / Spa
                </th>
                <th className="text-left p-3 font-bold text-[var(--color-cedar)] border border-[var(--color-steam)]">
                  City
                </th>
                <th className="text-left p-3 font-bold text-[var(--color-cedar)] border border-[var(--color-steam)]">
                  Type
                </th>
                <th className="text-left p-3 font-bold text-[var(--color-cedar)] border border-[var(--color-steam)]">
                  Day Pass
                </th>
                <th className="text-left p-3 font-bold text-[var(--color-cedar)] border border-[var(--color-steam)]">
                  What&apos;s Special
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Friedrichsbad",
                  city: "Baden-Baden",
                  type: "Roman-Irish bath",
                  price: "\u20AC29-49",
                  special: "17-station ritual, 1877 architecture, thermal water from 2km depth",
                },
                {
                  name: "Caracalla Therme",
                  city: "Baden-Baden",
                  type: "Modern thermal spa",
                  price: "\u20AC23-27",
                  special: "5,000m\u00B2 thermal pools, same ancient water as Friedrichsbad",
                },
                {
                  name: "Therme Erding",
                  city: "Erding (Munich)",
                  type: "Mega spa complex",
                  price: "\u20AC40-55",
                  special: "World's largest, 27+ saunas, event Aufguss, water park",
                },
                {
                  name: "Vabali Spa",
                  city: "Berlin",
                  type: "Urban day spa",
                  price: "\u20AC35-42",
                  special: "Balinese-themed, SAUNA37 winner, excellent Aufguss",
                },
                {
                  name: "Vabali Spa",
                  city: "Hamburg",
                  type: "Urban day spa",
                  price: "\u20AC35-42",
                  special: "SAUNA37 2026 winner, Balinese design, premium service",
                },
                {
                  name: "Liquidrom",
                  city: "Berlin",
                  type: "Temple / spa",
                  price: "\u20AC25-35",
                  special: "Saltwater floating pool, underwater music, DJ sessions",
                },
              ].map((spa, index) => (
                <tr key={`${spa.name}-${spa.city}-${index}`} className="hover:bg-[var(--color-warm-50)]">
                  <td className="p-3 border border-[var(--color-steam)] font-medium">
                    {spa.name}
                  </td>
                  <td className="p-3 border border-[var(--color-steam)]">
                    {spa.city}
                  </td>
                  <td className="p-3 border border-[var(--color-steam)]">
                    {spa.type}
                  </td>
                  <td className="p-3 border border-[var(--color-steam)]">
                    {spa.price}
                  </td>
                  <td className="p-3 border border-[var(--color-steam)]">
                    {spa.special}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cross-links */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-[var(--color-warm-50)] rounded-lg p-6 border border-[var(--color-warm-200)]">
          <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
            Related Guide
          </h3>
          <p className="text-sm text-[var(--color-stone)] mb-3">
            Planning your first visit to a German sauna? Our etiquette guide covers
            everything you need to know about nudity norms, Aufguss behavior, and the
            unwritten rules of German sauna culture.
          </p>
          <Link
            href="/sauna-etiquette/germany"
            className="text-sm font-medium text-[var(--color-lake)] hover:underline"
          >
            Read: German Sauna Etiquette &mdash; The Complete Guide &rarr;
          </Link>
        </div>
      </section>

      {/* Navigation links */}
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
        </div>
      </section>

      <AdSlot />

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture
          title="Get Our German Spa Day Planner"
          description="A downloadable guide to planning the perfect German sauna day, including packing lists, Aufguss schedules, and money-saving tips."
          buttonText="Send Me the Planner"
          leadMagnet="german-spa-planner"
        />
      </section>
    </>
  );
}
