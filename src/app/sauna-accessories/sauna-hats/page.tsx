import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AffiliateCard } from "@/components/AffiliateCard";
import { AdSlot } from "@/components/AdSlot";
import { EmailCapture } from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Sauna Hats — Why You Need One and the Best Options for 2026",
  description:
    "A complete guide to sauna hats: why they matter, materials compared (wool felt, merino, linen, cotton), how to choose one, and our top picks. Written by a Finn.",
  keywords: [
    "sauna hat",
    "sauna hat wool felt",
    "best sauna hat",
    "sauna hat guide",
    "banya hat",
    "sauna head protection",
    "merino sauna hat",
    "linen sauna hat",
    "funny sauna hat",
    "why wear a sauna hat",
  ],
};

export default function SaunaHatsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[var(--color-warm-100)] to-[var(--color-background)] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Accessories", href: "/sauna-accessories" },
              { label: "Sauna Hats" },
            ]}
          />
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--color-cedar)] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The Complete Guide to Sauna Hats
          </h1>
          <p className="text-lg text-[var(--color-stone)] max-w-3xl leading-relaxed">
            They might look like something a garden gnome lost, but sauna hats
            are one of the most practical sauna accessories you can own. Here is
            everything you need to know about why they work, which materials are
            best, and which ones are actually worth buying.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose">
          {/* What and Why */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            What Is a Sauna Hat and Why Should You Wear One?
          </h2>
          <p>
            A sauna hat is a thick, insulating hat worn in the sauna to protect
            your head from the most intense heat. The principle is simple
            physics: <strong>heat rises</strong>. In a typical Finnish sauna
            heated to 80&ndash;100&deg;C, the temperature difference between the
            floor and the ceiling can be 40&ndash;60&deg;C. Your head, being the
            highest point of your body, gets the most heat.
          </p>
          <p>
            This matters more than most people realise. Your head contains
            temperature-sensitive blood vessels close to the skin surface. When
            your head overheats faster than the rest of your body, you can
            experience <strong>dizziness</strong>,{" "}
            <strong>light-headedness</strong>, and{" "}
            <strong>premature discomfort</strong> that cuts your session short.
            A sauna hat acts as insulation, slowing down how fast your head
            heats up and letting the rest of your body catch up.
          </p>
          <p>
            The result? You can <strong>stay in the sauna longer</strong>,{" "}
            <strong>more comfortably</strong>, and with{" "}
            <strong>more control</strong> over how you feel. For anyone who has
            ever felt dizzy or had to leave the sauna before they were ready, a
            hat can be a game-changer.
          </p>

          {/* History */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            A Brief History: From Russian Banya to Global Wellness Trend
          </h2>
          <p>
            Sauna hats originated in <strong>Russian banya culture</strong>,
            where they have been a staple for centuries. The Russian banya
            operates at extremely high temperatures with intense bursts of
            steam, making head protection not just practical but essential. Walk
            into any Russian banya and you will see rows of felt hats hanging on
            hooks &mdash; it is as normal as hanging up your coat.
          </p>
          <p>
            In Finland, sauna hats were traditionally less common. Finns tend to
            take a more minimalist approach &mdash; many of us sauna with
            nothing at all. But the wellness boom of the 2010s and 2020s brought
            sauna hats into the mainstream. They started appearing in high-end
            spas across <strong>the UK, Germany, and the United States</strong>,
            often marketed as a wellness essential rather than a practical tool.
          </p>
          <p>
            Today, sauna hats are trending globally. You will find them in
            boutique wellness centres in London, Aufguss ceremonies in Munich,
            and cold-plunge-and-sauna studios in Brooklyn. What was once a
            humble Russian felt hat has become a fashion statement &mdash; and
            that is perfectly fine, as long as the hat actually works.
          </p>

          {/* Materials Compared */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Sauna Hat Materials Compared
          </h2>
          <p>
            Not all sauna hats are created equal. The material determines how
            well the hat insulates, how comfortable it feels, and how long it
            lasts. Here is what you need to know about each option:
          </p>

          <h3>Wool Felt &mdash; The Gold Standard</h3>
          <p>
            Thick wool felt (typically 5&ndash;8 mm) is the traditional and most
            effective sauna hat material. Wool is a{" "}
            <strong>natural insulator</strong> &mdash; it traps air in its
            fibres, creating a barrier between the sauna heat and your head.
            Wool felt hats hold their shape well, even in extreme heat, and they
            are incredibly durable. A good wool felt hat will last years with
            proper care. The main downside is that wool can feel slightly
            scratchy on sensitive skin, though this usually softens after a few
            uses.
          </p>

          <h3>Merino Wool &mdash; Premium Softness</h3>
          <p>
            Merino wool is a finer, softer variant of wool that feels gentler
            on the skin. It provides{" "}
            <strong>excellent insulation</strong> (nearly as good as standard
            wool felt) with better comfort. Merino hats tend to be thinner than
            standard wool felt, which makes them slightly less effective at the
            highest temperatures, but the comfort trade-off is worth it for most
            people. They are typically the most expensive option.
          </p>

          <h3>Linen &mdash; Light and Breathable</h3>
          <p>
            Linen sauna hats are the <strong>lightest option</strong> and work
            well for moderate sauna temperatures (60&ndash;80&deg;C) or for
            people who find wool too warm. Linen breathes well, dries quickly,
            and has a pleasant natural texture. However, it provides{" "}
            <strong>less insulation</strong> than wool, so it is not the best
            choice if you regularly sauna at 90&deg;C or above. Think of linen
            as the summer hat of the sauna world.
          </p>

          <h3>Cotton &mdash; Budget-Friendly but Limited</h3>
          <p>
            Cotton sauna hats are the most affordable option, but they are also
            the <strong>least effective</strong>. Cotton absorbs moisture
            readily, which means it soaks up sweat and steam, becoming heavy and
            warm &mdash; the opposite of what you want. The insulation value is
            minimal. If you are testing whether a sauna hat works for you,
            cotton is a cheap experiment, but plan to upgrade if you stick with
            it.
          </p>

          {/* Benefits */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Benefits of Wearing a Sauna Hat
          </h2>
          <ul>
            <li>
              <strong>Temperature regulation:</strong> keeps your head cooler
              relative to your body, preventing the dizzy, overheated feeling
              that cuts sessions short.
            </li>
            <li>
              <strong>Hair protection:</strong> the intense heat and low
              humidity of a sauna can dry out and damage hair over time. A hat
              shields your hair from direct heat exposure.
            </li>
            <li>
              <strong>Longer, more comfortable sessions:</strong> by insulating
              your head, you can comfortably stay in the sauna 5&ndash;10
              minutes longer per round.
            </li>
            <li>
              <strong>Personal style:</strong> whether you go for a classic
              felt cone or a Viking-horned novelty hat, it adds personality to
              the sauna experience.
            </li>
          </ul>

          <AdSlot />

          {/* How to Choose */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            How to Choose the Right Sauna Hat
          </h2>
          <p>
            Choosing a sauna hat comes down to three factors:{" "}
            <strong>material, fit, and your sauna habits</strong>.
          </p>
          <p>
            <strong>Material:</strong> if you sauna at 80&deg;C or above
            regularly, go with wool felt or merino. For gentler heat or
            occasional use, linen is a fine choice. Skip cotton unless budget is
            the only consideration.
          </p>
          <p>
            <strong>Fit:</strong> the hat should sit comfortably on your head
            without squeezing. It should cover the top of your head and ideally
            come down to just above your ears. Too tight and it will be
            uncomfortable; too loose and it will fall off when you lean back. Most
            sauna hats are one-size-fits-most, but check measurements if you
            have a larger head.
          </p>
          <p>
            <strong>Sauna habits:</strong> if you sauna daily, invest in a
            quality wool felt hat that will hold up. If you sauna once a week at
            a spa, a lighter merino or linen hat might be all you need. Consider
            having two so one can dry while the other is in use.
          </p>

          {/* Product Recommendations */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Our Top Sauna Hat Recommendations
          </h2>
          <p>
            We have tested a range of sauna hats across different materials and
            price points. Here are our top picks:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <AffiliateCard
            name="Rento Wool Felt Sauna Hat"
            description="Finnish-made from thick wool felt. Classic cone design, excellent insulation, and built to last. The benchmark for sauna hats."
            price="$29"
            rating="4.8/5"
            features={[
              "100% wool felt, 6 mm thick",
              "Made in Finland",
              "Classic cone shape",
              "Machine washable at 30\u00B0C",
              "One size fits most",
            ]}
            affiliateUrl="https://www.amazon.com/s?k=sauna+accessories&tag=viisikanta-20"
            badge="Best Overall"
          />
          <AffiliateCard
            name="SAUNUM Merino Wool Hat"
            description="Ultra-soft merino wool with a modern fit. Premium feel without the scratchiness of standard wool. Perfect for sensitive skin."
            price="$45"
            rating="4.7/5"
            features={[
              "100% merino wool",
              "Soft, non-irritating texture",
              "Modern rounded design",
              "Excellent insulation",
              "Hand wash recommended",
            ]}
            affiliateUrl="https://www.amazon.com/s?k=sauna+accessories&tag=viisikanta-20"
            badge="Premium Pick"
          />
          <AffiliateCard
            name="Emendo Linen Sauna Hat"
            description="Light and breathable linen hat, ideal for moderate sauna temperatures. Quick-drying and easy to pack for sauna trips."
            price="$18"
            rating="4.4/5"
            features={[
              "100% natural linen",
              "Lightweight and breathable",
              "Quick-drying",
              "Great for summer and travel",
              "Machine washable",
            ]}
            affiliateUrl="https://www.amazon.com/s?k=sauna+accessories&tag=viisikanta-20"
          />
          <AffiliateCard
            name="Banya No.1 Classic Felt Hat"
            description="Thick Russian-style wool felt hat with a generous fit. Proven design that has been protecting heads in banyas for generations."
            price="$15"
            rating="4.5/5"
            features={[
              "Traditional Russian banya style",
              "Thick wool felt",
              "Deep fit, covers ears",
              "Excellent value for money",
              "Available in multiple colours",
            ]}
            affiliateUrl="https://www.amazon.com/s?k=sauna+accessories&tag=viisikanta-20"
            badge="Best Value"
          />
        </div>

        <div className="prose">
          {/* Funny / Novelty */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Novelty and Funny Sauna Hats
          </h2>
          <p>
            Not everything in the sauna has to be serious. Novelty sauna hats
            have become hugely popular as gifts and conversation starters. The
            best part is that many of them are made from proper wool felt, so
            they actually work while making everyone smile.
          </p>
          <p>
            Some of the most popular designs include:{" "}
            <strong>Viking helmets</strong> with felt horns (a huge hit in
            Scandinavian saunas), <strong>animal ears</strong> (bears, cats, and
            foxes are common), <strong>Finnish flag</strong> hats (blue cross on
            white background &mdash; popular with tourists and proud Finns
            alike), <strong>mushroom caps</strong> (a nod to the Finnish love of
            forest foraging), and <strong>Napoleon-style</strong> bicorne hats
            for those who want to command the sauna.
          </p>
          <p>
            A novelty hat makes an excellent{" "}
            <Link
              href="/sauna-gift-guide"
              className="text-[var(--color-lake)] font-semibold hover:underline"
            >
              sauna gift
            </Link>{" "}
            &mdash; practical, affordable, and guaranteed to get a laugh. Just
            make sure the novelty hat is made from wool felt rather than
            synthetic materials, which can melt or deform in high heat.
          </p>

          {/* Care Guide */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            How to Care for Your Sauna Hat
          </h2>
          <p>
            A well-cared-for wool felt sauna hat will last for years. Here is
            how to keep yours in top condition:
          </p>

          <h3>Washing</h3>
          <p>
            Wash your sauna hat every <strong>10&ndash;15 uses</strong> or when
            it starts to smell. For wool felt hats, hand washing is safest:
            soak in lukewarm water (never hot) with a mild wool detergent, gently
            squeeze without wringing, and rinse thoroughly. Some wool felt hats
            are labelled machine washable &mdash; if so, use a gentle cycle at
            30&deg;C maximum in a laundry bag. Linen and cotton hats can be
            machine washed normally.
          </p>

          <h3>Drying</h3>
          <p>
            <strong>Never tumble dry a wool hat.</strong> Reshape it by hand
            while damp (pull it over a bowl or ball roughly the size of your
            head) and let it air dry naturally. This preserves the shape. Wool
            felt can shrink significantly in a dryer, so skip that entirely.
            Linen hats can be air dried flat or hung.
          </p>

          <h3>Storage</h3>
          <p>
            Store your sauna hat in a dry, ventilated space. Hanging it on a
            hook in your sauna changing room is ideal. Do not stuff it into a
            bag or drawer where it cannot air out, as this can lead to mildew.
            Between uses, let it dry completely before storing. If you travel
            with your sauna hat, a breathable cotton bag works well &mdash;
            avoid plastic bags that trap moisture.
          </p>
        </div>
      </section>

      <AdSlot />

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture
          title="Get Our Free Sauna Accessories Checklist"
          description="A printable PDF checklist of every sauna essential, including our top hat recommendations. Plus weekly sauna tips from a Finn."
          leadMagnet="accessories-checklist"
        />
      </section>
    </>
  );
}
