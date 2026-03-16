import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AffiliateCard } from "@/components/AffiliateCard";
import { AdSlot } from "@/components/AdSlot";
import { EmailCapture } from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Sauna Bucket & Ladle (Kiulu & Kauha) — The Complete Guide",
  description:
    "How to choose the right sauna bucket and ladle: materials compared (wood, copper, stainless steel), size guide, care tips, and top recommendations. Written by a Finn.",
  keywords: [
    "sauna bucket",
    "sauna ladle",
    "kiulu",
    "kauha",
    "sauna bucket and ladle",
    "wooden sauna bucket",
    "copper sauna bucket",
    "löyly bucket",
    "sauna water bucket",
    "best sauna bucket",
    "finnish sauna bucket",
  ],
};

export default function BucketAndLadlePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[var(--color-warm-100)] to-[var(--color-background)] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Accessories", href: "/sauna-accessories" },
              { label: "Bucket & Ladle" },
            ]}
          />
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--color-cedar)] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Sauna Bucket &amp; Ladle: The Complete Guide
          </h1>
          <p className="text-lg text-[var(--color-stone)] max-w-3xl leading-relaxed">
            The <strong>kiulu</strong> (bucket) and <strong>kauha</strong>{" "}
            (ladle) are the most essential tools in any sauna. Without them,
            there is no löyly. Here is everything you need to know about
            choosing, using, and caring for the right set.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose">
          {/* What are they */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            What Are Kiulu and Kauha?
          </h2>
          <p>
            <strong>Kiulu</strong> (pronounced{" "}
            <em>&ldquo;key-oo-loo&rdquo;</em>) is the Finnish word for a sauna
            bucket. It holds the water that you will throw onto the hot stones
            to create steam. Some Finns also call it <em>saavi</em> or{" "}
            <em>sanko</em>, depending on the region and the style of the
            bucket.
          </p>
          <p>
            <strong>Kauha</strong> (pronounced <em>&ldquo;cow-ha&rdquo;</em>)
            is the ladle &mdash; a long-handled scoop used to take water from
            the bucket and toss it onto the sauna stones (<em>kiuas</em>). The
            long handle is not just for convenience; it keeps your hand safely
            away from the blast of steam that erupts the moment water hits the
            hot stones.
          </p>
          <p>
            Together, these two humble objects are the heart of the Finnish
            sauna ritual. Every sauna in Finland has them, from the simplest
            summer cottage to the most luxurious spa. They are to the sauna what
            a teapot is to tea &mdash; technically you could manage without
            them, but the experience would be fundamentally different.
          </p>

          {/* Why they matter */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Why the Bucket and Ladle Matter
          </h2>
          <p>
            <strong>Löyly is everything.</strong> The word <em>löyly</em>{" "}
            refers to the steam that rises from the sauna stones when you throw
            water on them. It is not just steam &mdash; it is a momentary wave
            of intense, humid heat that wraps around your body. Controlling the
            löyly is the art of sauna, and your bucket and ladle are the tools
            that give you that control.
          </p>
          <p>
            A small, gentle throw produces a soft, enveloping warmth. A full
            ladle sends a fierce blast of steam upward that descends onto the
            bathers like a wall of heat. Knowing how much water to throw, and
            how often, is something Finns learn instinctively from childhood. It
            is about reading the room (literally) &mdash; the temperature, the
            humidity, and the preferences of the people around you.
          </p>
          <p>
            <strong>Safety is another reason</strong> the right ladle matters.
            When water hits stones at 300&ndash;500&deg;C, the steam blast is
            immediate and powerful. A ladle that is too short puts your hand in
            the danger zone. A ladle that holds too much water can produce an
            overwhelming burst of steam in a small sauna. The right tool gives
            you precision and keeps you safe.
          </p>

          {/* Materials Comparison */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Materials Compared
          </h2>
          <p>
            Sauna buckets and ladles come in four main materials, each with
            distinct characteristics. Here is how they compare:
          </p>

          <table>
            <thead>
              <tr>
                <th>Material</th>
                <th>Pros</th>
                <th>Cons</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Wood</strong> (pine, aspen, cedar)
                </td>
                <td>Traditional look, naturally cool handles, beautiful grain, pleasant scent</td>
                <td>Requires oiling, can crack if neglected, heavier</td>
                <td>Traditionalists, home saunas, aesthetics-first buyers</td>
              </tr>
              <tr>
                <td>
                  <strong>Stainless Steel</strong> (with wooden handle)
                </td>
                <td>Extremely durable, low maintenance, hygienic, lightweight</td>
                <td>Less traditional feel, metal inserts can get warm, clinical aesthetic</td>
                <td>Public saunas, low-maintenance setups, modern interiors</td>
              </tr>
              <tr>
                <td>
                  <strong>Copper</strong>
                </td>
                <td>Stunning appearance, develops beautiful patina, excellent durability, naturally antibacterial</td>
                <td>Expensive, heavier, requires polishing to keep shiny (or let patina develop)</td>
                <td>Premium home saunas, design-conscious buyers, long-term investment</td>
              </tr>
              <tr>
                <td>
                  <strong>Aluminium</strong>
                </td>
                <td>Very lightweight, affordable, rust-resistant</td>
                <td>Thin feel, less premium, can dent, handles need insulation</td>
                <td>Budget setups, portable saunas, camping</td>
              </tr>
            </tbody>
          </table>

          <h3>Wood &mdash; The Traditional Choice</h3>
          <p>
            Wooden buckets are the most traditional and, for many Finns, the
            only real option. Pine is the most common wood, but{" "}
            <strong>aspen</strong> is considered the best because it does not
            splinter, stays cool to the touch, and has minimal grain movement
            (meaning it is less likely to warp or crack). Cedar is another
            excellent option with natural rot resistance and a subtle, pleasant
            aroma.
          </p>
          <p>
            The inside of a wooden bucket is typically lined with a{" "}
            <strong>plastic or stainless steel insert</strong> to prevent
            leaking as the wood ages. This is standard and does not diminish the
            traditional feel. Without a liner, a wooden bucket needs to be
            soaked before each use to swell the wood and seal the gaps between
            staves &mdash; which is authentic but inconvenient.
          </p>

          <h3>Stainless Steel &mdash; The Modern Workhorse</h3>
          <p>
            Stainless steel buckets with wooden handles combine modern
            durability with practical comfort. The steel body is virtually
            indestructible, hygienic, and easy to clean. The wooden handle
            ensures you can pick up the bucket comfortably even in a hot sauna.
            Finnish brands like <strong>Rento</strong> and{" "}
            <strong>Harvia</strong> produce excellent stainless steel sets that
            look sleek in contemporary sauna designs.
          </p>

          <h3>Copper &mdash; The Premium Statement</h3>
          <p>
            Copper sauna buckets are the luxury option and they look absolutely
            stunning. A new copper bucket has a warm, rosy glow that darkens
            over time into a rich patina. Copper is naturally{" "}
            <strong>antibacterial</strong>, which is a nice bonus in a wet
            environment. The main barrier is price &mdash; a good copper set can
            cost three to five times as much as a wooden one. But if you
            appreciate craftsmanship and are outfitting a sauna you plan to use
            for decades, copper is the material that will age most beautifully.
          </p>

          <h3>Aluminium &mdash; The Practical Option</h3>
          <p>
            Aluminium buckets are lightweight and affordable. They work well for
            portable or camping sauna setups where weight matters. However, they
            feel less substantial than the other options and lack the charm of
            wood or the elegance of copper. Aluminium is functional, and for
            some setups that is all you need.
          </p>

          <AdSlot />

          {/* Size Guide */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Size Guide: 4L vs 7L
          </h2>
          <p>
            Sauna buckets typically come in two sizes:{" "}
            <strong>4 litres</strong> and <strong>7 litres</strong>. The right
            choice depends on how you sauna.
          </p>
          <p>
            A <strong>4-litre bucket</strong> is ideal for solo sauna sessions
            or couples. It is lighter to carry, easier to handle, and provides
            plenty of water for a standard session of 2&ndash;3 rounds. Most
            home saunas do well with this size. A full 4-litre bucket gives you
            roughly 15&ndash;20 generous ladle throws, which is more than enough
            for most sessions.
          </p>
          <p>
            A <strong>7-litre bucket</strong> is the better choice if you
            regularly sauna with family or friends, or if you like very long
            sessions with lots of löyly. It saves you the trip to refill and
            means the water stays warmer throughout (cold water on hot stones
            creates better steam than room-temperature water). Public saunas
            almost always use 7-litre buckets or larger.
          </p>
          <p>
            <strong>Our recommendation:</strong> start with a 4-litre bucket
            for a home sauna. If you find yourself refilling constantly, size up.
            The 7-litre bucket is noticeably heavier when full (~7 kg), which
            matters if you are carrying it from a tap to the sauna.
          </p>

          {/* What to look for */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            What to Look for When Buying
          </h2>
          <ul>
            <li>
              <strong>Ladle handle length:</strong> at least 40 cm. This keeps
              your hand safely away from the steam burst. Shorter handles mean
              steam-burned knuckles &mdash; speak from experience.
            </li>
            <li>
              <strong>Ladle capacity:</strong> a scoop that holds about
              150&ndash;200 ml is ideal. Too small and you are constantly
              scooping; too large and you risk drowning the stones and
              cooling them down.
            </li>
            <li>
              <strong>Bucket liner:</strong> if buying a wooden bucket, ensure
              it has a plastic or metal liner for leak prevention. Without one,
              you will need to soak the bucket before every use.
            </li>
            <li>
              <strong>Handle comfort:</strong> rounded, smooth wooden handles
              are best. Avoid sharp edges or unfinished wood that can splinter
              when wet.
            </li>
            <li>
              <strong>Matching set:</strong> buying the bucket and ladle
              together ensures they match aesthetically. Most Finnish brands
              sell them as a set, which is usually better value than buying
              separately.
            </li>
            <li>
              <strong>Rope or wire handle on bucket:</strong> a rope handle is
              softer and stays cooler. Wire handles with a wooden grip work
              well too, but bare metal handles will burn in a hot sauna.
            </li>
          </ul>

          {/* Product Recommendations */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Our Top Recommendations
          </h2>
          <p>
            We have used many bucket and ladle sets over the years. Here are the
            ones we recommend:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <AffiliateCard
            name="Rento Aluminium Bucket & Ladle Set"
            description="Finnish-designed set with a modern matte finish and bamboo handle. Lightweight, durable, and available in beautiful earthy colours."
            price="$55"
            rating="4.8/5"
            features={[
              "Anodised aluminium with bamboo handle",
              "5-litre capacity",
              "Lightweight (under 1 kg empty)",
              "Available in multiple colours",
              "Matching ladle included",
            ]}
            affiliateUrl="https://www.amazon.com/s?k=sauna+accessories&tag=viisikanta-20"
            badge="Best Overall"
          />
          <AffiliateCard
            name="Harvia Copper Bucket & Ladle Set"
            description="Premium copper set from Finland's most famous sauna brand. Develops a beautiful natural patina over time. A statement piece for any sauna."
            price="$145"
            rating="4.9/5"
            features={[
              "Solid copper construction",
              "7-litre bucket capacity",
              "Wooden handle for comfort",
              "Naturally antibacterial",
              "Heirloom-quality craftsmanship",
            ]}
            affiliateUrl="https://www.amazon.com/s?k=sauna+accessories&tag=viisikanta-20"
            badge="Premium Pick"
          />
          <AffiliateCard
            name="Kolo Sauna Pine Bucket Set"
            description="Classic Finnish pine bucket with a stainless steel liner. Traditional stave construction with a modern twist. Beautiful natural wood grain."
            price="$69"
            rating="4.6/5"
            features={[
              "Finnish pine with stainless steel liner",
              "4-litre capacity",
              "Rope handle, stays cool",
              "Matching wooden ladle with 45 cm handle",
              "Traditional craftsman finish",
            ]}
            affiliateUrl="https://www.amazon.com/s?k=sauna+accessories&tag=viisikanta-20"
            badge="Best Traditional"
          />
          <AffiliateCard
            name="Sauflex Stainless Steel Set"
            description="No-nonsense stainless steel bucket with an insulated wooden grip. Easy to clean, impossible to break, and built for daily use."
            price="$35"
            rating="4.5/5"
            features={[
              "18/8 stainless steel body",
              "4-litre capacity",
              "Wooden handle grip",
              "Dishwasher safe",
              "Great value for money",
            ]}
            affiliateUrl="https://www.amazon.com/s?k=sauna+accessories&tag=viisikanta-20"
            badge="Best Value"
          />
        </div>

        <div className="prose">
          {/* Care and Maintenance */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Care and Maintenance
          </h2>
          <p>
            Taking care of your sauna bucket and ladle ensures they last for
            years (or decades, in the case of copper). Here is what each
            material needs:
          </p>

          <h3>Wooden Buckets and Ladles</h3>
          <p>
            Wood needs the most attention. After each sauna session,{" "}
            <strong>empty the bucket completely</strong> and let it dry in a
            ventilated area. Never leave standing water in a wooden bucket
            overnight &mdash; this promotes mould and accelerates rot. Every
            few months, apply a thin coat of <strong>food-safe mineral oil</strong>{" "}
            or <strong>paraffin oil</strong> to the exterior to prevent the wood
            from drying out and cracking. Do not use vegetable-based oils as
            they can become rancid.
          </p>
          <p>
            If your wooden bucket does not have a liner and develops small leaks
            between staves, soak it in water for 30&ndash;60 minutes before use
            to swell the wood and seal the gaps. This is normal and traditional
            &mdash; your grandfather did the same thing.
          </p>

          <h3>Stainless Steel and Aluminium</h3>
          <p>
            These are the easiest to maintain. Rinse after use, wipe dry, and
            store. Stainless steel is <strong>dishwasher safe</strong>.
            Aluminium should be hand washed with mild soap. Both materials are
            rust-resistant, so even if you forget to dry them occasionally,
            they will be fine. Check wooden handles periodically for cracks or
            looseness and tighten any screws.
          </p>

          <h3>Copper</h3>
          <p>
            Copper naturally develops a <strong>patina</strong> (a darker,
            greenish tint) over time. Many people consider this beautiful and
            let it happen naturally. If you prefer the bright, rosy copper
            look, clean it periodically with a mixture of lemon juice and salt,
            or use a commercial copper polish. Rinse and dry after each use to
            slow patina development. Never use abrasive scrubbers on copper
            &mdash; they will scratch the surface.
          </p>
        </div>
      </section>

      <AdSlot />

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture
          title="Get Our Free Sauna Setup Checklist"
          description="Everything you need for the perfect sauna, from bucket to bench. A printable PDF with buying tips from a Finn. Plus weekly sauna tips."
          leadMagnet="sauna-setup-checklist"
        />
      </section>
    </>
  );
}
