import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EmailCapture } from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Sauna Glossary — Speak the Language of the Heat",
  description:
    "A glossary of essential Finnish sauna terms — from löyly and kiuas to vihta and vilvoittelu. Understand the language behind the ritual.",
  keywords: [
    "sauna glossary",
    "finnish sauna terms",
    "löyly meaning",
    "kiuas meaning",
    "sauna vocabulary",
    "finnish sauna words",
    "vihta vasta",
    "sauna definitions",
    "savusauna",
    "sisu meaning",
  ],
};

export default function GlossaryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[var(--color-warm-100)] to-[var(--color-background)] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Glossary" },
            ]}
          />
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--color-cedar)] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Sauna Glossary — Speak the Language of the Heat
          </h1>
          <p className="text-lg text-[var(--color-stone)] max-w-2xl leading-relaxed">
            The Finnish sauna has its own vocabulary &mdash; words shaped by
            centuries of steam, wood smoke, and cold water. Understanding these
            terms is not just about language. It is about understanding the
            culture itself. Each word carries a weight that no English
            translation fully captures.
          </p>
        </div>
      </section>

      {/* Glossary Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose max-w-3xl">

          {/* A–E */}
          <h2
            className="text-2xl md:text-3xl text-[var(--color-cedar)] mb-8"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            A&ndash;E
          </h2>

          <dl className="space-y-6 mb-16">
            <div>
              <dt className="text-[var(--color-foreground)] font-bold text-lg">
                Avanto
              </dt>
              <dd className="text-[var(--color-stone)] leading-relaxed mt-1">
                A hole cut in the ice for winter swimming. The ultimate cold
                plunge following a hot sauna session. Found at lakes and the sea
                throughout Finland from November to March.
              </dd>
            </div>
            <div>
              <dt className="text-[var(--color-foreground)] font-bold text-lg">
                H&ouml;yry
              </dt>
              <dd className="text-[var(--color-stone)] leading-relaxed mt-1">
                General steam, like from a kettle. Distinct from{" "}
                <Link
                  href="#loyly"
                  className="text-[var(--color-lake)] underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
                >
                  l&ouml;yly
                </Link>
                , which is the sacred steam created specifically by water hitting
                the sauna stones.
              </dd>
            </div>
          </dl>

          {/* K–L */}
          <h2
            className="text-2xl md:text-3xl text-[var(--color-cedar)] mb-8"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            K&ndash;L
          </h2>

          <dl className="space-y-6 mb-16">
            <div>
              <dt className="text-[var(--color-foreground)] font-bold text-lg">
                Kauha
              </dt>
              <dd className="text-[var(--color-stone)] leading-relaxed mt-1">
                The long-handled wooden ladle used to scoop water from the{" "}
                <Link
                  href="#kiulu"
                  className="text-[var(--color-lake)] underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
                >
                  kiulu
                </Link>{" "}
                and throw it onto the{" "}
                <Link
                  href="#kiuas"
                  className="text-[var(--color-lake)] underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
                >
                  kiuas
                </Link>
                . The long handle keeps your hand safely away from the steam
                blast. A good set is one of the{" "}
                <Link
                  href="/sauna-accessories/bucket-and-ladle"
                  className="text-[var(--color-lake)] underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
                >
                  essential sauna accessories
                </Link>
                .
              </dd>
            </div>
            <div id="kiuas">
              <dt className="text-[var(--color-foreground)] font-bold text-lg">
                Kiuas
              </dt>
              <dd className="text-[var(--color-stone)] leading-relaxed mt-1">
                The sauna stove. The heart of the room, holding the stones that
                store and radiate heat. Can be wood-burning (puukiuas), electric
                (s&auml;hk&ouml;kiuas), or a smoke sauna stove.
              </dd>
            </div>
            <div id="kiulu">
              <dt className="text-[var(--color-foreground)] font-bold text-lg">
                Kiulu
              </dt>
              <dd className="text-[var(--color-stone)] leading-relaxed mt-1">
                The wooden bucket used to hold the water for creating{" "}
                <Link
                  href="#loyly"
                  className="text-[var(--color-lake)] underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
                >
                  l&ouml;yly
                </Link>
                . Traditionally made of pine or aspen, often with a stainless
                steel or plastic liner. Browse our{" "}
                <Link
                  href="/sauna-accessories/bucket-and-ladle"
                  className="text-[var(--color-lake)] underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
                >
                  bucket and ladle guide
                </Link>{" "}
                for recommendations.
              </dd>
            </div>
            <div>
              <dt className="text-[var(--color-foreground)] font-bold text-lg">
                Lauteet
              </dt>
              <dd className="text-[var(--color-stone)] leading-relaxed mt-1">
                The wooden benches inside the sauna. Traditionally made of aspen
                or alder, as these woods stay cooler to the touch than darker
                woods. The higher the bench, the hotter the experience.
              </dd>
            </div>
            <div id="loyly">
              <dt className="text-[var(--color-foreground)] font-bold text-lg">
                L&ouml;yly
              </dt>
              <dd className="text-[var(--color-stone)] leading-relaxed mt-1">
                (Pronounced: Low-lu) The steam that rises when water is thrown on
                the hot sauna stones. In Finnish mythology, l&ouml;yly also
                refers to the spirit or breath of life. Good l&ouml;yly is soft
                and enveloping. Bad l&ouml;yly is sharp and stinging. Learn the
                proper technique in our{" "}
                <Link
                  href="/sauna-etiquette/first-time"
                  className="text-[var(--color-lake)] underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
                >
                  first-time sauna guide
                </Link>
                .
              </dd>
            </div>
            <div>
              <dt className="text-[var(--color-foreground)] font-bold text-lg">
                L&ouml;ylyhuone
              </dt>
              <dd className="text-[var(--color-stone)] leading-relaxed mt-1">
                The steam room &mdash; the actual hot room where the benches and
                kiuas are located. Literally &ldquo;the l&ouml;yly
                room.&rdquo;
              </dd>
            </div>
          </dl>

          {/* P–S */}
          <h2
            className="text-2xl md:text-3xl text-[var(--color-cedar)] mb-8"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            P&ndash;S
          </h2>

          <dl className="space-y-6 mb-16">
            <div>
              <dt className="text-[var(--color-foreground)] font-bold text-lg">
                Pefletti
              </dt>
              <dd className="text-[var(--color-stone)] leading-relaxed mt-1">
                A small seat cover made of linen or paper, used for hygiene and
                comfort. In a proper sauna, one never sits directly on the bare
                wood. Public saunas often provide disposable paper ones. See our{" "}
                <Link
                  href="/sauna-etiquette"
                  className="text-[var(--color-lake)] underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
                >
                  sauna etiquette guide
                </Link>{" "}
                for more on bench hygiene.
              </dd>
            </div>
            <div>
              <dt className="text-[var(--color-foreground)] font-bold text-lg">
                Puusauna
              </dt>
              <dd className="text-[var(--color-stone)] leading-relaxed mt-1">
                A wood-burning sauna. Known for its softer heat, the rhythmic
                sound of crackling logs, and the ritual of tending the fire.
                Considered superior to electric saunas for the quality of
                l&ouml;yly.
              </dd>
            </div>
            <div>
              <dt className="text-[var(--color-foreground)] font-bold text-lg">
                Savusauna
              </dt>
              <dd className="text-[var(--color-stone)] leading-relaxed mt-1">
                The smoke sauna. The ancestral, most prestigious type of Finnish
                sauna. It has no chimney &mdash; the room is heated by a massive
                stove for hours, the smoke is vented out, and then people enter.
                Produces the softest l&ouml;yly imaginable. UNESCO-recognized as
                part of Finnish cultural heritage. Experience one at the{" "}
                <Link
                  href="/best-saunas/finland"
                  className="text-[var(--color-lake)] underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
                >
                  best saunas in Finland
                </Link>
                .
              </dd>
            </div>
            <div>
              <dt className="text-[var(--color-foreground)] font-bold text-lg">
                Sisu
              </dt>
              <dd className="text-[var(--color-stone)] leading-relaxed mt-1">
                A Finnish concept of inner strength, grit, and resilience. It is
                what you find within yourself during the final minutes of an
                intense heat session or a winter cold plunge. There is no direct
                English translation.
              </dd>
            </div>
            <div>
              <dt className="text-[var(--color-foreground)] font-bold text-lg">
                Saunaelämys
              </dt>
              <dd className="text-[var(--color-stone)] leading-relaxed mt-1">
                The complete sauna experience. Coined by Sauna from Finland to
                describe the holistic ritual beyond just sitting in heat &mdash;
                encompassing preparation, heating, bathing, cooling, rest, and
                socializing.
              </dd>
            </div>
          </dl>

          {/* V */}
          <h2
            className="text-2xl md:text-3xl text-[var(--color-cedar)] mb-8"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            V
          </h2>

          <dl className="space-y-6 mb-16">
            <div>
              <dt className="text-[var(--color-foreground)] font-bold text-lg">
                Vasta / Vihta
              </dt>
              <dd className="text-[var(--color-stone)] leading-relaxed mt-1">
                A bundle of birch twigs used for whisking the skin during sauna.
                Vasta is used in Eastern Finland; vihta is used in the West. This
                regional terminology debate is surprisingly passionate among
                Finns.
              </dd>
            </div>
            <div>
              <dt className="text-[var(--color-foreground)] font-bold text-lg">
                Vilvoittelu
              </dt>
              <dd className="text-[var(--color-stone)] leading-relaxed mt-1">
                The act of cooling down between heat sessions. Considered just as
                important as the heat itself. Can involve cold water, fresh air,
                snow, or simply sitting quietly. Read more about the full ritual
                in our{" "}
                <Link
                  href="/sauna-etiquette/first-time"
                  className="text-[var(--color-lake)] underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors"
                >
                  first-time guide
                </Link>
                .
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <EmailCapture
          title="Deepen Your Sauna Practice"
          description="Join our newsletter for authentic Finnish sauna wisdom — rituals, etiquette, gear guides, and cultural insights delivered to your inbox."
          leadMagnet="glossary"
        />
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: "Finnish Sauna Glossary",
            description:
              "A glossary of essential Finnish sauna terms — from löyly and kiuas to vihta and vilvoittelu.",
            url: "https://finnishsaunaguide.com/glossary",
            hasDefinedTerm: [
              {
                "@type": "DefinedTerm",
                name: "Avanto",
                description:
                  "A hole cut in the ice for winter swimming, used as a cold plunge after sauna.",
              },
              {
                "@type": "DefinedTerm",
                name: "Höyry",
                description:
                  "General steam, distinct from löyly which is sacred steam from sauna stones.",
              },
              {
                "@type": "DefinedTerm",
                name: "Kauha",
                description:
                  "The long-handled wooden ladle used to throw water onto the kiuas.",
              },
              {
                "@type": "DefinedTerm",
                name: "Kiuas",
                description:
                  "The sauna stove holding the stones that store and radiate heat.",
              },
              {
                "@type": "DefinedTerm",
                name: "Kiulu",
                description:
                  "The wooden bucket used to hold water for creating löyly.",
              },
              {
                "@type": "DefinedTerm",
                name: "Lauteet",
                description:
                  "The wooden benches inside the sauna, traditionally made of aspen or alder.",
              },
              {
                "@type": "DefinedTerm",
                name: "Löyly",
                description:
                  "The steam that rises when water is thrown on hot sauna stones. Also refers to the spirit or breath of life in Finnish mythology.",
              },
              {
                "@type": "DefinedTerm",
                name: "Löylyhuone",
                description:
                  "The steam room — the hot room where the benches and kiuas are located.",
              },
              {
                "@type": "DefinedTerm",
                name: "Pefletti",
                description:
                  "A small seat cover made of linen or paper, used for hygiene and comfort on the sauna bench.",
              },
              {
                "@type": "DefinedTerm",
                name: "Puusauna",
                description:
                  "A wood-burning sauna, known for softer heat and superior löyly quality.",
              },
              {
                "@type": "DefinedTerm",
                name: "Savusauna",
                description:
                  "The smoke sauna — the ancestral, most prestigious type of Finnish sauna. UNESCO-recognized cultural heritage.",
              },
              {
                "@type": "DefinedTerm",
                name: "Sisu",
                description:
                  "A Finnish concept of inner strength, grit, and resilience with no direct English translation.",
              },
              {
                "@type": "DefinedTerm",
                name: "Saunaelamys",
                description:
                  "The complete sauna experience encompassing preparation, heating, bathing, cooling, rest, and socializing.",
              },
              {
                "@type": "DefinedTerm",
                name: "Vasta / Vihta",
                description:
                  "A bundle of birch twigs used for whisking the skin during sauna. Regional naming varies between Eastern and Western Finland.",
              },
              {
                "@type": "DefinedTerm",
                name: "Vilvoittelu",
                description:
                  "The act of cooling down between heat sessions, considered as important as the heat itself.",
              },
            ],
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
