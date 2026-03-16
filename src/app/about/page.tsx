import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EmailCapture } from "@/components/EmailCapture";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Finnish Sauna Guide — Finnish Sauna Guides by a Finn",
  description:
    "Finnish Sauna Guide is an authentic Finnish sauna guide written by someone who grew up with sauna as part of daily life. Learn about our mission to share Finnish sauna culture with the world.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[var(--color-cedar)] mb-6"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        About Finnish Sauna Guide
      </h1>

      <div className="prose">
        <p className="text-lg text-[var(--color-stone)] leading-relaxed">
          Finnish Sauna Guide was born out of a simple observation: most sauna content
          on the internet is written by people who have never experienced real
          sauna culture. They review infrared boxes in their garage and call
          themselves experts. We wanted to change that.
        </p>

        <h2 style={{ fontFamily: "var(--font-serif)" }}>
          Sauna Is Not a Trend for Us
        </h2>
        <p>
          In Finland, sauna is not wellness. It is not biohacking. It is not a
          trend. It is simply part of life — like eating, sleeping, and
          breathing. There are 3.3 million saunas in a country of 5.5 million
          people. Almost every home has one. Every apartment building has one.
          Every summer cottage has one (often before the cottage itself is
          built).
        </p>
        <p>
          We grew up with the sound of water hitting hot stones. We know the
          exact right moment to throw löyly. We have made vihta from birch
          branches in June and frozen them for December. We have sat in silence
          with strangers and come out feeling like friends. We have jumped from
          a 90-degree sauna into a frozen lake and laughed about it.
        </p>
        <p>
          This is the knowledge we share on Finnish Sauna Guide.
        </p>

        <h2 style={{ fontFamily: "var(--font-serif)" }}>What We Cover</h2>
        <ul>
          <li>
            <Link href="/sauna-etiquette" className="text-[var(--color-lake)]">
              Sauna etiquette
            </Link>{" "}
            — How to behave in saunas around the world, from Finnish customs to
            German Aufguss to Korean jjimjilbang
          </li>
          <li>
            <Link href="/sauna-accessories" className="text-[var(--color-lake)]">
              Accessories
            </Link>{" "}
            — Honest recommendations for sauna hats, buckets, whisks, and
            everything you need for a proper sauna
          </li>
          <li>
            <Link href="/sauna-gift-guide" className="text-[var(--color-lake)]">
              Gift guides
            </Link>{" "}
            — Curated sauna gifts for every budget and occasion
          </li>
          <li>
            <Link href="/best-saunas" className="text-[var(--color-lake)]">
              Best saunas worldwide
            </Link>{" "}
            — Our guide to the finest sauna experiences across the globe
          </li>
        </ul>

        <h2 style={{ fontFamily: "var(--font-serif)" }}>
          Our Approach to Recommendations
        </h2>
        <p>
          When we recommend a product, it is because we believe in it. Some
          links on this site are affiliate links, which means we may earn a
          small commission if you make a purchase. This costs you nothing extra
          and helps us keep writing these guides.
        </p>
        <p>
          We will never recommend something just because it pays well. Our
          reputation as an authentic Finnish voice matters more than any
          commission.
        </p>

        <h2 style={{ fontFamily: "var(--font-serif)" }}>
          Why &quot;Finnish Sauna Guide&quot;?
        </h2>
        <p>
          <strong>Löyly</strong> is the Finnish word for the steam that rises
          when you throw water on sauna stones. It is pronounced roughly like
          &quot;Low-lu&quot; (the &ouml; sound does not exist in English). Löyly
          is the soul of the sauna — without it, you just have a hot room.
        </p>
        <p>
          We chose this name because löyly captures everything we love about
          sauna: the ritual, the sensation, the connection between heat and
          water, and the moment when everything else fades away.
        </p>

        <h2 style={{ fontFamily: "var(--font-serif)" }}>Get in Touch</h2>
        <p>
          Have a question about sauna? Want to suggest a sauna we should visit?
          Interested in working together? We would love to hear from you.
        </p>
        <p>
          Email us at{" "}
          <strong>hello@finnishsaunaguide.com</strong>
        </p>
      </div>

      <EmailCapture />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Finnish Sauna Guide",
            url: "https://finnishsaunaguide.com",
            description:
              "Authentic Finnish sauna guides, etiquette, accessories and the best saunas worldwide.",
            foundingDate: "2026",
            sameAs: [],
          }),
        }}
      />
    </div>
  );
}
