import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EmailCapture } from "@/components/EmailCapture";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Best Saunas in Finland 2026 | Helsinki, Tampere & Beyond | Finnish Sauna Guide",
  description:
    "The definitive guide to the best saunas in Finland. Helsinki design saunas, Tampere's sauna capital, Lakeland smoke saunas, and cottage saunas — written by a Finn.",
  keywords: [
    "best saunas in Finland",
    "Helsinki saunas",
    "Tampere saunas",
    "Loyly Helsinki",
    "Finnish smoke sauna",
    "Kotiharjun sauna",
    "sauna capital Finland",
    "Finnish sauna guide",
    "savusauna",
    "avanto ice swimming",
  ],
};

export default function FinlandSaunasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Saunas in Finland 2026",
    description:
      "The definitive guide to the best saunas in Finland — from Helsinki's design saunas to Tampere's sauna capital and Lakeland smoke saunas.",
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
    mainEntityOfPage: "https://finnishsaunaguide.com/best-saunas/finland",
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
              { label: "Finland" },
            ]}
          />
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--color-cedar)] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Best Saunas in Finland
          </h1>
          <div className="prose max-w-none">
            <p className="text-lg text-[var(--color-stone)] leading-relaxed mb-4">
              Finland is the homeland of sauna. This is not marketing, it is simply fact.
              There are 3.3 million saunas for 5.5 million people &mdash; roughly one sauna
              for every 1.7 Finns. Every apartment building has one. Every summer cottage has
              one. Many homes have one. Hospitals have them. Parliament has one. The
              presidential palace has one.
            </p>
            <p className="text-lg text-[var(--color-stone)] leading-relaxed mb-4">
              Sauna here is not a spa experience or a wellness trend. It is an integral part
              of daily life, woven into the culture for over two thousand years. Babies were
              born in saunas. Business deals are still made in them. When Finns say
              &ldquo;everything important happens in sauna,&rdquo; they mean it.
            </p>
            <p className="text-lg text-[var(--color-stone)] leading-relaxed">
              Finland offers every type of sauna imaginable: from ancient smoke saunas where
              the löyly is the softest you will ever feel, to cutting-edge design saunas that
              have won international architecture awards. This guide covers the saunas I
              genuinely recommend, with the kind of detail only a local can provide.
            </p>
          </div>
        </div>
      </section>

      {/* Helsinki Saunas */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold text-[var(--color-cedar)] mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Helsinki &mdash; Where Tradition Meets Design
        </h2>

        <div className="prose max-w-none space-y-10">
          {/* Loyly */}
          <div className="border-l-4 border-[var(--color-warm-300)] pl-6">
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
              Löyly Helsinki
            </h3>
            <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
              Hernesaarenranta 4, Helsinki &bull; Design sauna &bull; Year-round
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              Löyly is the sauna that put Helsinki on the world&apos;s design map. Designed by
              Avanto Architects, the building itself is a sculptural masterpiece of
              sustainably sourced heat-treated wood that cascades toward the Baltic Sea.
              Time Magazine named it one of the &ldquo;100 Greatest Places in the
              World&rdquo; &mdash; and for once, the hype is justified.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              The sauna experience includes a wood-heated sauna and a smoke sauna
              (savusauna), both built to the highest Finnish standards. The smoke sauna is
              the real treasure here &mdash; the löyly is impossibly soft, the kind that
              makes you close your eyes and forget where you are. After heating up, you
              walk down to the Baltic Sea terrace and ease yourself into the water, which
              ranges from refreshing in summer to truly bracing in winter.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              Löyly also has an excellent restaurant with a terrace that overlooks the
              harbor. My recommendation: book for an evening session, sauna first, then
              dinner as the sun sets. It is the most civilized evening Helsinki has to
              offer.
            </p>
          </div>

          {/* Allas Sea Pool */}
          <div className="border-l-4 border-[var(--color-warm-300)] pl-6">
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
              Allas Sea Pool
            </h3>
            <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
              Katajanokanlaituri 2a, Helsinki &bull; Outdoor pool &amp; saunas &bull; Year-round
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              Floating in the heart of Helsinki&apos;s harbor, Allas Sea Pool is where locals
              and visitors mix in the most democratic way possible. The concept is
              brilliantly simple: three outdoor pools (one filled with heated fresh water,
              two with filtered sea water) plus saunas, right in the center of the city
              with views of the cathedral and market square.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              The saunas here are solid, with good löyly and enough space that you never
              feel cramped. But the real magic is the contrast experience &mdash; heating up
              in the sauna, then stepping out to swim in the Baltic Sea pool with the city
              skyline stretching out in front of you. In winter, the sea water pool drops
              to near-zero temperatures, making the sauna-to-swim cycle genuinely
              exhilarating. There is also a cafe, a terrace, and regular events. It is
              Helsinki at its most social.
            </p>
          </div>

          {/* Kotiharjun Sauna */}
          <div className="border-l-4 border-[var(--color-warm-300)] pl-6">
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
              Kotiharjun Sauna
            </h3>
            <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
              Harjutorinkatu 1, Helsinki &bull; Public sauna &bull; Wood-heated since 1928
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              This is the real deal. Kotiharjun Sauna is the last remaining wood-heated
              public sauna in Helsinki, operating continuously since 1928. There is no
              design concept here, no Instagram-worthy architecture. What there is, is one
              of the finest wood-burning stoves in Finland, enormous old benches worn
              smooth by nearly a century of use, and the kind of authentic neighborhood
              atmosphere that money cannot buy.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              The heat here is glorious &mdash; steady, deep, and wonderfully humid when
              you throw löyly. The crowd is a mix of long-time regulars from the Kallio
              neighborhood and sauna pilgrims from around the world. You pay at the desk,
              grab a bench, and become part of a tradition that has survived wars,
              recessions, and the rise and fall of public sauna culture in Finland. If you
              can only visit one sauna in Helsinki, many Finns (myself included) would
              tell you to make it this one.
            </p>
          </div>

          {/* Lonna Sauna */}
          <div className="border-l-4 border-[var(--color-warm-300)] pl-6">
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
              Lonna Sauna
            </h3>
            <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
              Lonna Island, Helsinki Archipelago &bull; Island sauna &bull; Summer season
              &bull; SAUNA37 Award Winner
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              Taking a short ferry ride to a small island in the Helsinki archipelago to
              sit in a wood-heated sauna and then swim in the sea &mdash; this is the
              Finnish dream compressed into an afternoon. Lonna is a tiny island that was
              formerly a military site and has been transformed into a public park with a
              beautiful sauna and a restaurant.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              The sauna itself won a SAUNA37 award, and rightfully so. It is intimate,
              beautifully built, and the contrast of the hot sauna with the archipelago sea
              is extraordinary. The ferry ride from the Market Square takes about 15
              minutes and is part of the experience. Book ahead during peak summer &mdash;
              Lonna is well-known, and spots fill up.
            </p>
          </div>

          {/* Kulttuurisauna */}
          <div className="border-l-4 border-[var(--color-warm-300)] pl-6">
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
              Kulttuurisauna
            </h3>
            <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
              Hakaniemenranta 17, Helsinki &bull; Minimalist public sauna &bull; Year-round
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              Where architecture meets sauna philosophy. Kulttuurisauna (Culture Sauna) was
              designed by artist Tuomas Toivonen and architect Nene Tsuboi as a public art
              project. The building is a stark, beautiful concrete and wood structure that
              sits right at the waterfront in Merihaka.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              The approach here is deliberately stripped back: no talking above a whisper,
              no phones, pure focus on the sauna experience. The heat is excellent, the
              silence is meditative, and the post-sauna swim in the sea is mandatory. It
              is not the most social sauna experience in Helsinki, but for those who
              appreciate sauna as a contemplative practice, Kulttuurisauna is perfection.
            </p>
          </div>
        </div>
      </section>

      <AdSlot />

      {/* Tampere */}
      <section className="bg-[var(--color-warm-50)] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-[var(--color-cedar)] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Tampere &mdash; The Sauna Capital of Finland
          </h2>
          <p className="text-[var(--color-stone)] leading-relaxed mb-8">
            Tampere officially declared itself the Sauna Capital of Finland, and no one
            argued. This lakeside city between two massive lakes (Näsijärvi and Pyhäjärvi)
            has more public saunas per capita than any other city in Finland. The tradition
            runs deep here, with saunas dating back over a century.
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 border border-[var(--color-steam)]">
              <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
                Rajaportin Sauna
              </h3>
              <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
                Pispala, Tampere &bull; Finland&apos;s oldest public sauna &bull; Since 1906
              </p>
              <p className="text-[var(--color-stone)] leading-relaxed">
                The oldest public sauna still in operation in Finland, Rajaportin Sauna has
                been heating its wood-burning stove in the Pispala neighborhood since 1906.
                This is living history. The sauna is small, the heat is authentic, and the
                experience is about as close to original Finnish public sauna culture as you
                can get in 2026. The neighborhood of Pispala itself is worth the visit
                &mdash; colorful wooden houses on a steep ridge between two lakes, with
                stunning views. After sauna, the walk back through Pispala is a highlight.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-[var(--color-steam)]">
              <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
                Kuuma
              </h3>
              <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
                Laukontori, Tampere &bull; Modern lakeside sauna complex
              </p>
              <p className="text-[var(--color-stone)] leading-relaxed">
                If Rajaportin is old-world Tampere, Kuuma is the new. A modern lakeside
                sauna complex right in the city center, Kuuma offers multiple saunas with
                views over Lake Pyhäjärvi. The design is contemporary Finnish &mdash; clean
                lines, warm wood, excellent ventilation. The löyly is strong and the lake
                swimming after each session is spectacular. They also have a good restaurant
                and terrace, making it easy to spend an entire evening here.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-[var(--color-steam)]">
              <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-2">
                Rauhaniemi Beach Sauna
              </h3>
              <p className="text-sm text-[var(--color-lake)] font-medium mb-3">
                Rauhaniemi, Tampere &bull; Outdoor sauna &bull; Year-round lake swimming
              </p>
              <p className="text-[var(--color-stone)] leading-relaxed">
                Rauhaniemi is a favorite among Tampere locals and the city&apos;s most popular
                spot for year-round lake swimming (avanto). The public sauna sits right on
                the shore of Lake Näsijärvi, and the routine is classic: sauna, then a walk
                down the steps into the lake. In winter, there is a hole cut in the ice
                for cold-water immersion. The crowd here is wonderfully local, the
                atmosphere is relaxed, and the admission is a few euros. This is Finnish
                sauna life at its most everyday and most beautiful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Saunas */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold text-[var(--color-cedar)] mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Special Finnish Sauna Experiences
        </h2>

        <div className="prose max-w-none space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-3">
              Smoke Saunas (Savusauna) &mdash; The Original Finnish Sauna
            </h3>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              The smoke sauna is the oldest type of Finnish sauna and, to many purists,
              the most authentic. A savusauna has no chimney &mdash; the smoke from the
              wood fire fills the room for hours, heating the stones and the walls. Once
              the fire dies down and the smoke is ventilated out, what remains is the
              softest, most enveloping löyly imaginable. The dark, smoky walls radiate
              gentle heat from every direction, and the aroma is unlike anything else.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              The best smoke saunas are found in the Finnish Lakeland region &mdash;
              around Kuopio, Jyväskylä, and the lake districts of Eastern Finland. Many
              holiday cottages and retreat centers offer authentic savusauna experiences.
              If you have the chance to try one, do not hesitate. It is the single most
              Finnish experience there is.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-3">
              Cottage Saunas (Mökki) &mdash; The Heart of Finnish Summer
            </h3>
            <p className="text-[var(--color-stone)] leading-relaxed mb-3">
              The quintessential Finnish sauna experience is not in a city. It is at a
              summer cottage (mökki) by a lake, somewhere in the middle of the Finnish
              countryside. There are over 500,000 summer cottages in Finland, and virtually
              every one has a sauna.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              The ritual is timeless: heat the sauna in the late afternoon, gather birch
              branches for a vihta (whisk), sauna for a few rounds with lake swims in
              between, then sit on the dock as the sun barely sets during the white
              nights of June and July. You can rent cottages with saunas throughout
              Finland &mdash; services like Nettimökki and Airbnb have thousands of options.
              For the authentic experience, look for a cottage with a wood-heated sauna
              directly on a lake.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-3">
              Ice Swimming (Avanto) &mdash; The Cold Side of Finnish Sauna
            </h3>
            <p className="text-[var(--color-stone)] leading-relaxed">
              Ice swimming is inseparable from sauna culture in Finland. Throughout the
              winter, holes are cut in the ice of lakes and the sea (called avanto), and
              Finns alternate between the hot sauna and the freezing water. The contrast
              is extraordinary &mdash; an endorphin rush that is genuinely addictive once
              you try it. Most cities and towns have organized avanto spots with heated
              changing rooms and saunas nearby. Helsinki alone has several, including
              Sompasauna (a volunteer-run, free public sauna by the sea), Allas Sea Pool,
              and various swimming clubs. In Tampere, Rauhaniemi is the most popular. The
              season runs from late November through March, depending on ice conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="bg-[var(--color-warm-50)] py-16 px-4">
        <div className="max-w-4xl mx-auto">
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
                  When to Visit
                </h3>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                  Sauna in Finland is a year-round activity. Summer (June-August) offers
                  the cottage sauna experience with long, light evenings and warm lake
                  swimming. Winter (December-February) is ideal for ice swimming and the
                  dramatic contrast of -20&deg;C air with 80&deg;C sauna heat. Autumn and
                  spring are quieter and equally lovely.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
                  What to Expect
                </h3>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                  Finnish saunas are typically used nude, with separate sessions or
                  facilities for men and women. Bring a towel to sit on and to dry off.
                  Shower before entering. You are expected to throw löyly (water on
                  stones), but ask before doing so in a shared sauna. No swimsuits in
                  traditional saunas.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
                  Costs
                </h3>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                  Public saunas in Finland are remarkably affordable. Expect to pay
                  &euro;8-15 for a basic public sauna session. Design saunas like Löyly
                  charge &euro;20-25. Allas Sea Pool is around &euro;17. Many apartment
                  building saunas are free for residents.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-cedar)] mb-2">
                  Getting Around
                </h3>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                  Helsinki&apos;s saunas are well connected by public transport (HSL).
                  Tampere is a 1.5-hour train ride from Helsinki. For cottage saunas in
                  Lakeland, a rental car is recommended. Finland is safe, efficient, and
                  English is widely spoken.
                </p>
              </div>
            </div>
          </div>

          {/* Sauna comparison table */}
          <h3 className="text-xl font-bold text-[var(--color-cedar)] mb-4">
            Finland Sauna Quick Reference
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-warm-100)]">
                  <th className="text-left p-3 font-bold text-[var(--color-cedar)] border border-[var(--color-steam)]">
                    Sauna
                  </th>
                  <th className="text-left p-3 font-bold text-[var(--color-cedar)] border border-[var(--color-steam)]">
                    Location
                  </th>
                  <th className="text-left p-3 font-bold text-[var(--color-cedar)] border border-[var(--color-steam)]">
                    Type
                  </th>
                  <th className="text-left p-3 font-bold text-[var(--color-cedar)] border border-[var(--color-steam)]">
                    Price
                  </th>
                  <th className="text-left p-3 font-bold text-[var(--color-cedar)] border border-[var(--color-steam)]">
                    What&apos;s Special
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Löyly Helsinki",
                    location: "Helsinki",
                    type: "Wood + Smoke",
                    price: "\u20AC21",
                    special: "Award-winning architecture, Baltic Sea terrace, restaurant",
                  },
                  {
                    name: "Allas Sea Pool",
                    location: "Helsinki",
                    type: "Electric + pools",
                    price: "\u20AC17",
                    special: "Harbor views, year-round sea swimming, central location",
                  },
                  {
                    name: "Kotiharjun Sauna",
                    location: "Helsinki",
                    type: "Wood-heated",
                    price: "\u20AC15",
                    special: "Since 1928, last wood-heated public sauna in Helsinki",
                  },
                  {
                    name: "Lonna Sauna",
                    location: "Helsinki (island)",
                    type: "Wood-heated",
                    price: "\u20AC20",
                    special: "Island sauna, SAUNA37 winner, archipelago swimming",
                  },
                  {
                    name: "Kulttuurisauna",
                    location: "Helsinki",
                    type: "Wood-heated",
                    price: "\u20AC15",
                    special: "Minimalist architecture, meditative atmosphere",
                  },
                  {
                    name: "Rajaportin Sauna",
                    location: "Tampere",
                    type: "Wood-heated",
                    price: "\u20AC8",
                    special: "Finland\u2019s oldest public sauna (1906), Pispala views",
                  },
                  {
                    name: "Kuuma",
                    location: "Tampere",
                    type: "Multiple saunas",
                    price: "\u20AC18",
                    special: "Modern lakeside complex, Lake Pyhäjärvi views",
                  },
                  {
                    name: "Rauhaniemi",
                    location: "Tampere",
                    type: "Public sauna",
                    price: "\u20AC7",
                    special: "Year-round lake swimming, beloved local spot",
                  },
                ].map((sauna) => (
                  <tr key={sauna.name} className="hover:bg-[var(--color-warm-50)]">
                    <td className="p-3 border border-[var(--color-steam)] font-medium">
                      {sauna.name}
                    </td>
                    <td className="p-3 border border-[var(--color-steam)]">
                      {sauna.location}
                    </td>
                    <td className="p-3 border border-[var(--color-steam)]">
                      {sauna.type}
                    </td>
                    <td className="p-3 border border-[var(--color-steam)]">
                      {sauna.price}
                    </td>
                    <td className="p-3 border border-[var(--color-steam)]">
                      {sauna.special}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/best-saunas"
            className="text-sm text-[var(--color-lake)] hover:underline font-medium"
          >
            &larr; Back to Best Saunas in the World
          </Link>
          <Link
            href="/sauna-etiquette/first-time"
            className="text-sm text-[var(--color-lake)] hover:underline font-medium"
          >
            Finnish Sauna Etiquette Guide &rarr;
          </Link>
        </div>
      </section>

      <AdSlot />

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture
          title="Get Our Finnish Sauna Map"
          description="A downloadable guide to the best saunas in Finland, with locations, prices, and insider tips from a local. Plus updates as we discover new favorites."
          buttonText="Send Me the Map"
          leadMagnet="finnish-sauna-map"
        />
      </section>
    </>
  );
}
