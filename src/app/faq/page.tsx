import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EmailCapture } from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "FAQ — Finnish Wisdom for the Modern Bather",
  description:
    "Answers to the most common questions about Finnish sauna culture, etiquette, health, rituals, and traditions. From löyly to vihta, from nudity norms to the cold plunge.",
  keywords: [
    "finnish sauna faq",
    "sauna questions",
    "finnish sauna etiquette",
    "löyly explained",
    "sauna nudity",
    "sauna health benefits",
    "vihta birch whisk",
    "cold plunge sauna",
    "smoke sauna savusauna",
    "finnish sauna traditions",
    "sauna for beginners",
    "authentic finnish sauna",
  ],
};

export default function FAQPage() {
  return (
    <>
      <div className="relative w-full h-[50vh] min-h-[400px] mb-10">
        <Image
          src="/images/steam-rising-sauna-stones.jpg"
          alt="Steam rising from hot sauna stones as water is poured for löyly"
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
              { label: "FAQ" },
            ]}
          />
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--color-cedar)] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            FAQ — Finnish Wisdom for the Modern Bather
          </h1>
          <p className="text-lg text-[var(--color-stone)] max-w-2xl leading-relaxed">
            The questions we hear most often, answered directly. No hedging, no
            hype &mdash; just clear guidance from a culture that has been bathing
            this way for over a thousand years.
          </p>
        </div>
      </section>

      {/* Main content */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose">
          {/* The Basics & Etiquette */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            The Basics &amp; Etiquette
          </h2>

          <h3>
            I have never been to a Finnish sauna. What is the number one rule?
          </h3>
          <p>
            Respect the <em>löyly</em> (the steam). Always ask others before
            throwing water on the stones. A simple &quot;Löylyä?&quot; is the
            Finnish way of asking permission. Beyond that, the sauna is a space
            for equality and peace &mdash; leave your ego and your phone outside.
          </p>
          <p>
            For a complete walkthrough of what to expect, read our{" "}
            <Link
              href="/sauna-etiquette/first-time"
              className="text-[var(--color-lake)] font-semibold hover:underline"
            >
              first-time sauna guide
            </Link>
            .
          </p>

          <h3>Do I really have to be naked?</h3>
          <p>
            In Finland, nudity is the norm because it is the most hygienic and
            effective way for the skin to breathe. However, outside Finland or in
            a public spa, a clean linen towel is a perfectly acceptable
            alternative. Avoid synthetic swimwear, as it can off-gas chemicals in
            high heat.
          </p>

          <h3>How long should I stay inside?</h3>
          <p>
            There is no correct timer. A Finn stays until they feel ready. For
            beginners, this is usually 10&ndash;15 minutes. Listen to your heart
            rate &mdash; when it begins to pick up significantly, it is time for
            a cooling break. Our{" "}
            <Link
              href="/sauna-etiquette"
              className="text-[var(--color-lake)] font-semibold hover:underline"
            >
              etiquette guide
            </Link>{" "}
            covers the full rhythm of a proper sauna session.
          </p>

          {/* Health & Safety */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Health &amp; Safety
          </h2>

          <h3>Is the sauna safe for everyone?</h3>
          <p>
            While the sauna has profound health benefits &mdash; cardiovascular
            health, stress reduction, skin clarity &mdash; anyone with heart
            conditions, low blood pressure, or who is pregnant should consult a
            doctor first. Never enter a sauna under the influence of alcohol.
          </p>

          <h3>How much water should I drink?</h3>
          <p>
            Hydration happens before, during, and after. Aim for 500ml of water
            before entering. During your breaks, sip water or electrolyte-rich
            drinks. If you feel a headache coming on, you have waited too long to
            hydrate.
          </p>

          <h3>Can I go to the sauna if I have a cold?</h3>
          <p>
            If you have a fever, stay home. The sauna puts strain on the body
            that can worsen a fever. However, for a mild stuffy nose, the steam
            can help clear the airways &mdash; just keep the session short and
            gentle.
          </p>

          {/* The Finnish Method */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            The Finnish Method
          </h2>

          <h3>
            What is that bundle of branches I see people using?
          </h3>
          <p>
            That is a <em>vihta</em> (or <em>vasta</em>). It is a bundle of
            birch twigs used to gently whisk the skin, which improves
            circulation and releases a natural soap-like substance (saponin) and
            a fresh forest scent. It is the ultimate natural skin treatment. You
            can learn more in our{" "}
            <Link
              href="/sauna-accessories"
              className="text-[var(--color-lake)] font-semibold hover:underline"
            >
              sauna accessories guide
            </Link>
            .
          </p>

          <h3>Is the cold plunge mandatory?</h3>
          <p>
            Mandatory? No. Essential for the full experience? Yes. The thermal
            shock of moving from heat to cold causes vasoconstriction, which
            pumps your circulatory system. If you are not ready for a lake, a
            cold shower works wonders.
          </p>

          <h3>Electric vs. wood-burning: which is better?</h3>
          <p>
            A wood-burning sauna is the gold standard for soft löyly and
            atmosphere. However, modern high-end electric heaters &mdash;
            especially those with large stone capacity &mdash; can replicate the
            experience beautifully for urban environments.
          </p>

          {/* Sauna Rituals & Traditions */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Sauna Rituals &amp; Traditions
          </h2>

          <h3>What are the different types of Finnish sauna?</h3>
          <p>
            The main types are: the everyday electric sauna (most common in
            apartments), the wood-burning sauna (<em>puusauna</em>, found at
            cottages), and the revered smoke sauna (<em>savusauna</em>, the
            ancestral type with no chimney, producing the softest löyly). Each
            offers a distinct experience.
          </p>

          <h3>What is the bridal sauna tradition?</h3>
          <p>
            The <em>morsiussauna</em> is a centuries-old Finnish tradition where
            the bride is bathed and prepared on the eve of her wedding. The
            ritual involves body scrubbing with natural materials like salt and
            honey, therapeutic birch whisking, and is a celebration of care and
            renewal.
          </p>

          <h3>Can I use herbs or scents in the sauna?</h3>
          <p>
            Yes, but never pour essential oils directly on the stones. Add a few
            drops to the bucket water, or hang dried herb bundles near the
            ceiling. Traditional Finnish scents include birch, tar (
            <em>terva</em>), and pine. Eucalyptus and lavender are popular
            modern additions.
          </p>

          {/* Professional & Practical */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Professional &amp; Practical
          </h2>

          <h3>What makes a sauna &quot;authentically Finnish&quot;?</h3>
          <p>
            According to Sauna from Finland, an authentic Finnish sauna
            experience involves proper heat quality from a well-built{" "}
            <em>kiuas</em>, the ability to throw löyly freely, natural materials
            (wood benches, stone), and the full ritual cycle of heat, cooling,
            and rest. It is a holistic experience, not just a hot room.
          </p>

          <h3>
            I am a hotel or spa owner. Why should I follow Finnish sauna
            principles?
          </h3>
          <p>
            Most international spas treat the sauna as a storage room for heat.
            By following authentic Finnish principles, you transform a facility
            into a destination ritual. Authentic rituals increase guest
            satisfaction, encourage longer stays, and allow for premium
            experience add-ons.
          </p>
        </div>

        {/* Email Capture */}
        <EmailCapture
          title="The Finnish Sauna Ritual Guide"
          description="A beautifully designed PDF covering everything from löyly technique to seasonal rituals. Written by Finns, for anyone who wants to bathe with intention."
          buttonText="Send Me the Guide"
          leadMagnet="finnish-sauna-ritual-guide"
        />
      </article>

      {/* JSON-LD FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "I have never been to a Finnish sauna. What is the number one rule?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Respect the löyly (the steam). Always ask others before throwing water on the stones. A simple \"Löylyä?\" is the Finnish way of asking permission. Beyond that, the sauna is a space for equality and peace — leave your ego and your phone outside.",
                },
              },
              {
                "@type": "Question",
                name: "Do I really have to be naked in a Finnish sauna?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In Finland, nudity is the norm because it is the most hygienic and effective way for the skin to breathe. However, outside Finland or in a public spa, a clean linen towel is a perfectly acceptable alternative. Avoid synthetic swimwear, as it can off-gas chemicals in high heat.",
                },
              },
              {
                "@type": "Question",
                name: "How long should I stay inside a Finnish sauna?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There is no correct timer. A Finn stays until they feel ready. For beginners, this is usually 10–15 minutes. Listen to your heart rate — when it begins to pick up significantly, it is time for a cooling break.",
                },
              },
              {
                "@type": "Question",
                name: "Is the sauna safe for everyone?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "While the sauna has profound health benefits (cardiovascular health, stress reduction, skin clarity), anyone with heart conditions, low blood pressure, or who is pregnant should consult a doctor first. Never enter a sauna under the influence of alcohol.",
                },
              },
              {
                "@type": "Question",
                name: "How much water should I drink before and after sauna?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hydration happens before, during, and after. Aim for 500ml of water before entering. During your breaks, sip water or electrolyte-rich drinks. If you feel a headache coming on, you have waited too long to hydrate.",
                },
              },
              {
                "@type": "Question",
                name: "Can I go to the sauna if I have a cold?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you have a fever, stay home. The sauna puts strain on the body that can worsen a fever. However, for a mild stuffy nose, the steam can help clear the airways — just keep the session short and gentle.",
                },
              },
              {
                "@type": "Question",
                name: "What is a vihta (birch whisk) and how is it used in the sauna?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A vihta (or vasta) is a bundle of birch twigs used to gently whisk the skin, which improves circulation and releases a natural soap-like substance (saponin) and a fresh forest scent. It is the ultimate natural skin treatment.",
                },
              },
              {
                "@type": "Question",
                name: "Is the cold plunge after sauna mandatory?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mandatory? No. Essential for the full experience? Yes. The thermal shock of moving from heat to cold causes vasoconstriction, which pumps your circulatory system. If you are not ready for a lake, a cold shower works wonders.",
                },
              },
              {
                "@type": "Question",
                name: "Electric vs. wood-burning sauna: which is better?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A wood-burning sauna is the gold standard for soft löyly and atmosphere. However, modern high-end electric heaters (especially those with large stone capacity) can replicate the experience beautifully for urban environments.",
                },
              },
              {
                "@type": "Question",
                name: "What are the different types of Finnish sauna?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The main types are: the everyday electric sauna (most common in apartments), the wood-burning sauna (puusauna, found at cottages), and the revered smoke sauna (savusauna, the ancestral type with no chimney, producing the softest löyly). Each offers a distinct experience.",
                },
              },
              {
                "@type": "Question",
                name: "What is the Finnish bridal sauna tradition?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The morsiussauna is a centuries-old Finnish tradition where the bride is bathed and prepared on the eve of her wedding. The ritual involves body scrubbing with natural materials like salt and honey, therapeutic birch whisking, and is a celebration of care and renewal.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use herbs or scents in the sauna?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, but never pour essential oils directly on the stones. Add a few drops to the bucket water, or hang dried herb bundles near the ceiling. Traditional Finnish scents include birch, tar (terva), and pine. Eucalyptus and lavender are popular modern additions.",
                },
              },
              {
                "@type": "Question",
                name: "What makes a sauna authentically Finnish?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "According to Sauna from Finland, an authentic Finnish sauna experience involves proper heat quality from a well-built kiuas, the ability to throw löyly freely, natural materials (wood benches, stone), and the full ritual cycle of heat, cooling, and rest. It is a holistic experience, not just a hot room.",
                },
              },
              {
                "@type": "Question",
                name: "I am a hotel or spa owner. Why should I follow Finnish sauna principles?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most international spas treat the sauna as a storage room for heat. By following authentic Finnish principles, you transform a facility into a destination ritual. Authentic rituals increase guest satisfaction, encourage longer stays, and allow for premium experience add-ons.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
