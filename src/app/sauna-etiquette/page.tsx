import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { EmailCapture } from "@/components/EmailCapture";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Sauna Etiquette Guide — Rules, Tips & Country Guides",
  description:
    "Complete sauna etiquette guide covering universal rules, nudity norms, loyly etiquette and country-specific guides for Finland, Germany, Japan and more. Written by a Finn.",
  keywords: [
    "sauna etiquette",
    "sauna rules",
    "sauna manners",
    "finnish sauna etiquette",
    "sauna nudity",
    "sauna dos and donts",
    "german sauna etiquette",
    "loyly etiquette",
  ],
};

export default function SaunaEtiquettePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[var(--color-warm-100)] to-[var(--color-background)] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Sauna Etiquette" },
            ]}
          />
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--color-cedar)] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Sauna Etiquette: The Unwritten Rules
          </h1>
          <p className="text-lg text-[var(--color-stone)] max-w-2xl leading-relaxed">
            Sauna etiquette is not about rigid rules or making you nervous. It is
            about respect &mdash; for the space, for the other people, and for
            the experience itself. Whether you are stepping into a Finnish smoke
            sauna, a German Therme, or a public sauna in your own city, a few
            simple guidelines will help you relax and enjoy the heat the way it
            was meant to be enjoyed.
          </p>
        </div>
      </section>

      {/* Universal Rules */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold text-[var(--color-cedar)] mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Universal Sauna Rules
        </h2>
        <p className="text-[var(--color-stone)] mb-8 leading-relaxed">
          No matter where in the world you sauna, these rules apply. They are
          common sense once you understand the reasoning behind them, and they
          exist to make the experience better for everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              number: "1",
              title: "Shower before entering",
              text: "This is non-negotiable everywhere. A thorough shower removes sweat, perfume, lotions and dirt. You are sharing a hot, enclosed space with others. Clean bodies keep the air clean and the benches hygienic.",
            },
            {
              number: "2",
              title: "Sit on a towel or pefletti",
              text: "Always place a towel, seat cover, or pefletti (a small disposable sauna seat cover) between yourself and the bench. It is a matter of hygiene and respect for the next person who sits there.",
            },
            {
              number: "3",
              title: "Ask before throwing loyly",
              text: "Loyly is the steam that rises when water hits the hot stones. It dramatically increases the perceived heat. Always ask others before throwing water — a quick \"Saako heittaa?\" (May I throw?) in Finland, or just a nod and gesture elsewhere.",
            },
            {
              number: "4",
              title: "Respect the silence (or the conversation)",
              text: "Some saunas are meditative spaces where silence is golden. Others are social hubs where people chat, laugh and tell stories. Read the room. If everyone is quiet, be quiet. If people are talking, feel free to join in.",
            },
            {
              number: "5",
              title: "No phones or cameras",
              text: "This should go without saying, but phones have no place in a sauna. The heat will damage your device, and a camera in a space where people may be undressed is a serious breach of trust and privacy.",
            },
            {
              number: "6",
              title: "Cool down properly between rounds",
              text: "Sauna is not an endurance test. Step outside, take a cold shower, jump in the lake, or roll in the snow if you are lucky. The contrast between hot and cold is where the magic happens. Two to three rounds is the Finnish standard.",
            },
            {
              number: "7",
              title: "Stay hydrated",
              text: "You will sweat a lot. Bring a water bottle and drink between rounds. Dehydration can sneak up on you, especially if you are new to sauna. Save the beer for after your last round.",
            },
            {
              number: "8",
              title: "Listen to your body",
              text: "If you feel dizzy, nauseous, or uncomfortable, leave immediately. There is no shame in stepping out. The sauna will still be there when you are ready. Experienced sauna-goers know their limits — and they respect them.",
            },
            {
              number: "9",
              title: "Do not pour anything but water on the stones",
              text: "No beer, no essential oils directly on the stones, no sauna scents unless they are designed for it. Some substances can create toxic fumes, and others can damage the stove. Use a proper bucket with clean water.",
            },
            {
              number: "10",
              title: "Leave it as you found it",
              text: "Rinse the bench after you leave. Hang your towels to dry. Take your water bottle. A clean sauna is a welcoming sauna for the next person.",
            },
          ].map((rule) => (
            <div
              key={rule.number}
              className="flex gap-4 p-5 rounded-lg border border-[var(--color-steam)] bg-white"
            >
              <span className="text-2xl font-bold text-[var(--color-lake)] shrink-0 w-8 text-center">
                {rule.number}
              </span>
              <div>
                <h3 className="font-bold text-[var(--color-foreground)] mb-1">
                  {rule.title}
                </h3>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                  {rule.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* Country Guides Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold text-[var(--color-cedar)] mb-3 text-center"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Sauna Etiquette by Country
        </h2>
        <p className="text-[var(--color-stone)] text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Sauna culture varies enormously from country to country. What is
          perfectly normal in Finland might shock people in the US, and German
          sauna rules would surprise even Finns. Explore our country-specific
          guides below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContentCard
            emoji="&#x1f1eb;&#x1f1ee;"
            tag="Finland"
            title="Your First Finnish Sauna"
            description="The complete guide to your first time in a Finnish sauna. Nudity norms, loyly etiquette, the birch whisk, cooling down, and everything a first-timer needs to know."
            href="/sauna-etiquette/first-time"
          />
          <ContentCard
            emoji="&#x1f1e9;&#x1f1ea;"
            tag="Germany"
            title="German Sauna Culture & Etiquette"
            description="Strict nudity rules, the art of Aufguss, the towel rule, and how German Therme culture differs from Finnish sauna. A surprisingly different experience."
            href="/sauna-etiquette/germany"
          />
          <div className="block border border-[var(--color-steam)] rounded-lg p-6 bg-[var(--color-warm-50)] opacity-70">
            <span className="text-3xl mb-3 block">&#x1f1ef;&#x1f1f5;</span>
            <span className="text-xs font-medium text-[var(--color-stone)] uppercase tracking-wide">
              Coming Soon
            </span>
            <h3 className="text-lg font-bold mt-1 text-[var(--color-stone)]">
              Japanese Onsen & Sento
            </h3>
            <p className="text-sm text-[var(--color-stone)] mt-2 leading-relaxed">
              The ancient bathing culture of Japan, tattoo policies, washing
              rituals, and how onsen etiquette compares to Finnish sauna.
            </p>
          </div>
          <div className="block border border-[var(--color-steam)] rounded-lg p-6 bg-[var(--color-warm-50)] opacity-70">
            <span className="text-3xl mb-3 block">&#x1f1f0;&#x1f1f7;</span>
            <span className="text-xs font-medium text-[var(--color-stone)] uppercase tracking-wide">
              Coming Soon
            </span>
            <h3 className="text-lg font-bold mt-1 text-[var(--color-stone)]">
              Korean Jjimjilbang
            </h3>
            <p className="text-sm text-[var(--color-stone)] mt-2 leading-relaxed">
              Full-day bathhouse culture, the famous egg sauna, wearing the
              uniform, and navigating Korea&apos;s beloved jjimjilbang.
            </p>
          </div>
          <div className="block border border-[var(--color-steam)] rounded-lg p-6 bg-[var(--color-warm-50)] opacity-70">
            <span className="text-3xl mb-3 block">&#x1f1ea;&#x1f1ea;</span>
            <span className="text-xs font-medium text-[var(--color-stone)] uppercase tracking-wide">
              Coming Soon
            </span>
            <h3 className="text-lg font-bold mt-1 text-[var(--color-stone)]">
              Estonian Sauna Culture
            </h3>
            <p className="text-sm text-[var(--color-stone)] mt-2 leading-relaxed">
              Our closest sauna neighbours. Smoke saunas, the Estonian sauna
              renaissance, and how the traditions mirror and diverge from
              Finland&apos;s.
            </p>
          </div>
          <div className="block border border-[var(--color-steam)] rounded-lg p-6 bg-[var(--color-warm-50)] opacity-70">
            <span className="text-3xl mb-3 block">&#x1f1f7;&#x1f1fa;</span>
            <span className="text-xs font-medium text-[var(--color-stone)] uppercase tracking-wide">
              Coming Soon
            </span>
            <h3 className="text-lg font-bold mt-1 text-[var(--color-stone)]">
              Russian Banya
            </h3>
            <p className="text-sm text-[var(--color-stone)] mt-2 leading-relaxed">
              The banya tradition, venik birch whisking, higher humidity, tea
              rituals, and why Russians consider their steam superior.
            </p>
          </div>
          <div className="block border border-[var(--color-steam)] rounded-lg p-6 bg-[var(--color-warm-50)] opacity-70">
            <span className="text-3xl mb-3 block">&#x1f1f8;&#x1f1ea;</span>
            <span className="text-xs font-medium text-[var(--color-stone)] uppercase tracking-wide">
              Coming Soon
            </span>
            <h3 className="text-lg font-bold mt-1 text-[var(--color-stone)]">
              Swedish Bastu Culture
            </h3>
            <p className="text-sm text-[var(--color-stone)] mt-2 leading-relaxed">
              Our neighbours to the west. How Swedish bastu compares to Finnish
              sauna, swimsuit norms, and the growing Swedish sauna revival.
            </p>
          </div>
        </div>
      </section>

      {/* The Finnish Approach */}
      <section className="bg-[var(--color-warm-100)] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl font-bold text-[var(--color-cedar)] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The Finnish Approach to Sauna
          </h2>
          <div className="prose max-w-3xl mx-auto text-left">
            <p className="text-[var(--color-stone)] leading-relaxed">
              In Finland, the sauna is sacred ground. Not in a religious sense,
              but in the way that truly important things are sacred &mdash; it is
              a place where pretence falls away along with your clothes. The
              sauna is the great equaliser. CEOs and construction workers sit on
              the same bench. Political rivals sweat side by side. Families bond
              across generations. There is a Finnish saying: &quot;In the sauna,
              everyone is equal.&quot;
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed">
              We do not go to sauna to show off or to perform wellness routines.
              We go because it is woven into the fabric of who we are. Business
              deals have been made in saunas. Babies were born in saunas.
              Important conversations that cannot happen anywhere else happen
              naturally on the wooden benches. The heat strips away the social
              armour, and what is left is honest, raw, and human. That is why
              sauna etiquette matters so much to us &mdash; it protects this
              space.
            </p>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <EmailCapture
          title="Get Your Free Finnish Sauna Etiquette Cheat Sheet"
          description="A printable PDF with all the essential sauna dos and don'ts, written by a Finn. Pin it on your wall, take it to the sauna (mentally), and never wonder if you're doing it wrong again."
          leadMagnet="etiquette-cheat-sheet"
        />
      </section>

      <AdSlot />

      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Sauna Etiquette Guide",
            description:
              "Complete sauna etiquette guide covering universal rules, nudity norms, loyly etiquette and country-specific guides.",
            url: "https://finnishsaunaguide.com/sauna-etiquette",
            isPartOf: {
              "@type": "WebSite",
              name: "Finnish Sauna Guide",
              url: "https://finnishsaunaguide.com",
            },
          }),
        }}
      />
    </>
  );
}
