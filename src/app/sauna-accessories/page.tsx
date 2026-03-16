import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { AdSlot } from "@/components/AdSlot";
import { EmailCapture } from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Essential Sauna Accessories — Everything You Need for the Perfect Sauna",
  description:
    "A Finnish guide to sauna accessories: buckets, ladles, sauna hats, birch whisks, thermometers, scents, and more. Authentic recommendations from someone who grew up in Finnish sauna culture.",
  keywords: [
    "sauna accessories",
    "sauna bucket",
    "sauna ladle",
    "sauna hat",
    "vihta",
    "birch whisk",
    "sauna thermometer",
    "sauna scents",
    "kiulu",
    "kauha",
    "finnish sauna accessories",
    "sauna essentials",
  ],
};

export default function SaunaAccessoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[var(--color-warm-100)] to-[var(--color-background)] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Sauna Accessories" },
            ]}
          />
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--color-cedar)] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Essential Sauna Accessories
          </h1>
          <p className="text-lg text-[var(--color-stone)] max-w-3xl leading-relaxed">
            In Finland, a good sauna does not need much. Hot stones, water, and a
            place to sit. But the right accessories can transform a routine sauna
            session into something truly special. After decades of sauna
            traditions passed from generation to generation, I can tell you
            exactly which accessories are worth your money &mdash; and which ones
            are just marketing fluff.
          </p>
          <p className="text-lg text-[var(--color-stone)] max-w-3xl leading-relaxed mt-4">
            This guide covers every essential sauna accessory, from the
            traditional wooden bucket your grandfather used to the modern sauna
            hats trending in wellness circles worldwide. Whether you are
            outfitting your home sauna for the first time or looking to upgrade,
            here is what actually matters.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2
          className="text-2xl font-bold text-[var(--color-cedar)] text-center mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Explore Accessory Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ContentCard
            emoji="&#x1f9e2;"
            tag="Complete Guide"
            title="Sauna Hats"
            description="Why sauna hats are trending worldwide, which materials work best, and our tested recommendations at every price point."
            href="/sauna-accessories/sauna-hats"
          />
          <ContentCard
            emoji="&#x1faa3;"
            tag="Complete Guide"
            title="Bucket &amp; Ladle"
            description="The heart of loyly. How to choose the right kiulu and kauha: materials, sizes, and care tips from a Finn."
            href="/sauna-accessories/bucket-and-ladle"
          />
        </div>
      </section>

      <AdSlot />

      {/* Main content */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose">
          {/* 1. Bucket & Ladle */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            1. Bucket &amp; Ladle (Kiulu &amp; Kauha)
          </h2>
          <p>
            If you buy only one sauna accessory, let it be a proper bucket and
            ladle set. In Finnish, the bucket is called{" "}
            <strong>kiulu</strong> (sometimes <em>saavi</em>) and the ladle is{" "}
            <strong>kauha</strong>. Together, they are your tools for creating{" "}
            <em>loyly</em> &mdash; the steam that rises when you throw water
            onto the hot sauna stones.
          </p>
          <p>
            The most popular materials are <strong>wooden</strong> (pine, aspen,
            or cedar), <strong>copper</strong> (a beautiful premium option that
            develops a warm patina over time), and{" "}
            <strong>stainless steel</strong> with wooden handles (durable and
            modern). Avoid all-metal handles &mdash; they will burn you. Wooden
            buckets need occasional oiling to prevent drying and cracking, but
            the aesthetic and tradition are worth the small effort.
          </p>
          <p>
            A 4-litre bucket works well for one or two people. If you sauna with
            family or friends regularly, consider a 7-litre bucket so you do not
            have to refill as often. Look for a comfortable ladle with a handle
            at least 40 cm long &mdash; it should reach the stones without
            bringing your hand too close to the heat.
          </p>
          <p>
            <Link
              href="/sauna-accessories/bucket-and-ladle"
              className="text-[var(--color-lake)] font-semibold hover:underline"
            >
              Read our full Bucket &amp; Ladle guide &rarr;
            </Link>
          </p>

          {/* 2. Sauna Hat */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>2. Sauna Hat</h2>
          <p>
            Sauna hats might look quirky, but they serve a genuine purpose. Heat
            rises, and your head is the highest point in the sauna. Without
            protection, your head gets significantly hotter than the rest of
            your body, which can cause dizziness, headaches, and limit how long
            you can comfortably stay in the heat.
          </p>
          <p>
            The best sauna hats are made from thick <strong>wool felt</strong>.
            Wool is a natural insulator &mdash; it keeps the heat out and
            protects your hair from drying. Merino wool variants are softer on
            the skin, while linen hats work well as a lighter option for lower
            temperatures. Cotton hats exist but are the least effective since
            they absorb moisture and transfer heat.
          </p>
          <p>
            Sauna hats have deep roots in <strong>Russian banya culture</strong>,
            where they are practically mandatory. In recent years, they have
            gained popularity in Finnish and international wellness circles. You
            will now find them in sauna shops from London to Los Angeles.
          </p>
          <p>
            <Link
              href="/sauna-accessories/sauna-hats"
              className="text-[var(--color-lake)] font-semibold hover:underline"
            >
              Read our full Sauna Hat guide &rarr;
            </Link>
          </p>

          {/* 3. Thermometer & Hygrometer */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            3. Thermometer &amp; Hygrometer
          </h2>
          <p>
            Every sauna should have a thermometer. In Finland, we typically aim
            for <strong>80&ndash;100&deg;C</strong>, though personal preference
            varies widely. Some of us like it at a mild 70&deg;C, while
            competition-sauna diehards push well beyond 100&deg;C (we do not
            recommend this for anyone).
          </p>
          <p>
            A <strong>hygrometer</strong> measures humidity and is just as
            important as the thermometer. The magic of loyly is in the balance
            between temperature and humidity. A dry 90&deg;C feels completely
            different from a humid 90&deg;C after a generous throw of water.
            Understanding this balance will help you dial in your perfect sauna
            experience.
          </p>
          <p>
            <strong>Analog</strong> thermometers and hygrometers are the
            traditional choice. They look beautiful mounted on the sauna wall,
            need no batteries, and are perfectly accurate for sauna use. Digital
            options offer precise readings and sometimes track min/max
            temperatures, but make sure any digital device you bring into a sauna
            is specifically rated for sauna conditions &mdash; regular
            electronics will not survive the heat and moisture.
          </p>

          <AdSlot />

          {/* 4. Vihta / Vasta */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            4. Vihta / Vasta (Birch Whisk)
          </h2>
          <p>
            The <strong>vihta</strong> (or <em>vasta</em>, depending on which
            part of Finland you are from &mdash; it is a forever debate) is a
            bundle of fresh birch branches tied together. You use it to gently
            whisk yourself or others in the sauna. It sounds odd if you have
            never seen it, but it is one of the most quintessentially Finnish
            sauna traditions.
          </p>
          <p>
            The whisking stimulates circulation, opens pores, and releases a
            wonderful natural birch scent in the steam. Fresh birch is best and
            usually gathered in <strong>mid-summer (June&ndash;July)</strong>{" "}
            when the leaves are young and full. In Finland, many families prepare
            dozens of vihtas during summer and freeze them for use throughout the
            year.
          </p>
          <p>
            Beyond birch, you can find whisks made from{" "}
            <strong>eucalyptus</strong> (popular in spa settings, with a strong
            aromatic scent), <strong>oak</strong> (sturdier leaves that last
            longer), and even <strong>juniper</strong> (a Finnish favourite for
            its sharp, invigorating scent, though the needles can prickle). If
            you cannot find fresh branches, dried vihtas work well after soaking
            in warm water for 20&ndash;30 minutes before use.
          </p>
          <p>
            <strong>Making your own:</strong> gather 20&ndash;30 young birch
            branches about 40&ndash;60 cm long. Strip the lower third of leaves,
            arrange them into a fan shape with larger leaves on the outside, and
            tie the handle firmly with twine. Soak in water before use, and
            prepare to smell like a Finnish forest.
          </p>

          {/* 5. Hourglass Timer */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            5. Hourglass Timer
          </h2>
          <p>
            The traditional sauna hourglass is a 15-minute timer, and there is a
            reason for that specific duration. Fifteen minutes is roughly the
            ideal length for one sauna round &mdash; long enough to get a deep
            sweat going, short enough to stay safe and comfortable. After 15
            minutes, you step out, cool down, and go back in for another round.
          </p>
          <p>
            Why not just use your phone? Because{" "}
            <strong>phones do not belong in the sauna</strong>. The heat and
            steam will damage electronics, and more importantly, sauna is
            supposed to be a break from screens. The Finnish sauna tradition is
            about being present. An hourglass gives you a visual cue without
            pulling you out of the moment. Wall-mounted hourglasses with wooden
            frames are the most popular choice and double as a nice decorative
            element.
          </p>

          {/* 6. Seat Cover */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            6. Seat Cover (Pefletti)
          </h2>
          <p>
            In Finland, sitting on a <strong>pefletti</strong> (seat cover) is
            basic sauna hygiene. Public saunas either provide disposable paper
            ones or expect you to bring your own towel to sit on. In your home
            sauna, a dedicated seat cover protects the wood and makes cleaning
            easier.
          </p>
          <p>
            The best seat covers are made from <strong>linen</strong> or thick{" "}
            <strong>cotton terry</strong>. Linen dries quickly and handles the
            heat well without getting uncomfortably hot. Some higher-end options
            feature a non-slip silicone backing. Machine-washable is a must.
            Many Finnish sauna-goers keep several in rotation &mdash; one in the
            sauna, one in the wash.
          </p>

          <AdSlot />

          {/* 7. Headrest & Backrest */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            7. Headrest &amp; Backrest
          </h2>
          <p>
            If you enjoy lying down in the sauna (and you should &mdash; it
            gives you the most even heat), a <strong>headrest</strong> makes a
            world of difference. Wooden headrests, typically made from aspen,
            alder, or cedar, cradle your head comfortably and keep it off the
            hot bench surface.
          </p>
          <p>
            <strong>Backrests</strong> lean against the sauna wall and let you
            sit upright comfortably during longer sessions without pressing your
            bare back against the hot wooden wall. They are especially helpful in
            saunas where the back wall gets very warm. Look for ergonomically
            curved designs in light-coloured wood (aspen is ideal &mdash; it
            stays cooler to the touch than darker woods).
          </p>

          {/* 8. Sauna Scents & Oils */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            8. Sauna Scents &amp; Oils
          </h2>
          <p>
            Sauna scents elevate the experience from a simple hot room to
            something truly therapeutic. In Finland, the most traditional scents
            are <strong>birch</strong> (from the vihta itself),{" "}
            <strong>tar</strong> (<em>terva</em> &mdash; a quintessentially
            Finnish scent with a deep, smoky aroma), and <strong>pine</strong>{" "}
            (fresh and clean, like walking through a Finnish forest).
          </p>
          <p>
            <strong>Eucalyptus</strong> is popular for its sinus-clearing
            properties and cooling sensation. <strong>Peppermint</strong>{" "}
            provides a refreshing tingle on the skin.{" "}
            <strong>Lavender</strong> is a newer addition to the Finnish sauna
            scene but has gained a following for evening saunas because of its
            calming effects.
          </p>
          <p>
            <strong>How to use scents safely:</strong> never pour essential oils
            directly onto the stones. The concentrated oil can produce unpleasant
            fumes or even ignite. Instead, add a few drops to the bucket of
            water and throw that mixture onto the stones. You can also use
            purpose-made sauna fragrances diluted for safe stone use. Some people
            hang a small sachet of dried herbs near the ceiling, which is a
            lovely touch.
          </p>

          {/* 9. Towels & Robes */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            9. Towels &amp; Robes
          </h2>
          <p>
            The Finnish towel tradition leans heavily toward{" "}
            <strong>linen</strong>. <em>Pellavainen pyyhe</em> (linen towel)
            dries incredibly fast, becomes softer with every wash, and handles
            the heat and moisture of sauna life better than cotton. Finnish linen
            towels often come in simple stripes or natural tones &mdash; understated
            and functional, just like Finnish design.
          </p>
          <p>
            A lightweight <strong>linen robe</strong> or{" "}
            <strong>cotton waffle robe</strong> is perfect for cooling down
            between sauna rounds. In Finland, many people simply wrap a towel
            around themselves and step outside (even in winter), but a robe is a
            civilised alternative if you have guests. Look for robes that are
            absorbent but not too heavy &mdash; you will be warming up again
            shortly.
          </p>
        </div>
      </section>

      {/* Link to Gift Guide */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-[var(--color-warm-50)] border border-[var(--color-warm-200)] rounded-xl p-8 text-center">
          <h2
            className="text-2xl font-bold text-[var(--color-cedar)] mb-3"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Looking for the Perfect Sauna Gift?
          </h2>
          <p className="text-[var(--color-stone)] mb-5 max-w-xl mx-auto">
            Check out our curated gift guide with sauna accessories at every
            price point &mdash; from stocking stuffers to luxury sets.
          </p>
          <Link
            href="/sauna-gift-guide"
            className="inline-block px-6 py-3 bg-[var(--color-cedar)] text-white rounded-lg font-semibold hover:bg-[var(--color-warm-800)] transition-colors"
          >
            Browse the Sauna Gift Guide &rarr;
          </Link>
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture
          title="Get Our Free Sauna Accessories Checklist"
          description="A printable PDF checklist of every essential sauna accessory, with buying tips and Finnish insider knowledge. Plus weekly sauna tips."
          leadMagnet="accessories-checklist"
        />
      </section>
    </>
  );
}
