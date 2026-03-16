import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AffiliateCard } from "@/components/AffiliateCard";
import { EmailCapture } from "@/components/EmailCapture";
import { AdSlot } from "@/components/AdSlot";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sauna Gift Guide 2026 — Best Gifts for Sauna Lovers",
  description:
    "The best sauna gifts for every budget. From wool sauna hats to premium bucket sets, find the perfect gift for the sauna lover in your life. Curated by a Finn.",
  keywords: [
    "sauna gifts",
    "sauna gift guide",
    "gifts for sauna lovers",
    "sauna accessories gift",
    "Finnish sauna gift",
    "sauna Christmas gift",
    "sauna birthday gift",
  ],
};

const giftTiers = [
  {
    tier: "Under $25 — Stocking Stuffers & Small Treats",
    emoji: "&#x1f381;",
    description:
      "Perfect for Secret Santa, stocking stuffers, or a thoughtful small gift.",
    items: [
      {
        name: "Classic Wool Sauna Hat",
        description:
          "A handmade wool felt sauna hat protects the head from intense heat and lets you stay in longer. Wool felt is the gold standard — it insulates naturally and holds its shape after hundreds of sessions.",
        price: "$15–25",
        features: [
          "100% wool felt, natural insulation",
          "Protects hair from heat damage",
          "Available in classic and fun designs",
        ],
        affiliateUrl: "https://www.amazon.com/s?k=sauna+hat+wool+felt&tag=viisikanta-20",
        badge: "Most Popular Gift",
      },
      {
        name: "Sauna Hourglass Timer (15 min)",
        description:
          "A traditional sand timer mounted on a wooden frame. Finns use these because phones do not belong in the sauna. The 15-minute interval is the classic sauna round length.",
        price: "$10–20",
        features: [
          "Heat-resistant wooden frame",
          "15-minute timer — the traditional round",
          "Beautiful wall-mount design",
        ],
        affiliateUrl: "https://www.amazon.com/s?k=sauna+hourglass+timer&tag=viisikanta-20",
      },
      {
        name: "Sauna Essential Oils Set",
        description:
          "A set of sauna-grade essential oils: eucalyptus for breathing, birch tar for authenticity, pine for forest vibes, and lavender for relaxation. Add a few drops to your löyly water.",
        price: "$15–25",
        features: [
          "4 scents: eucalyptus, birch, pine, lavender",
          "Safe for use with sauna stones",
          "Long-lasting bottles",
        ],
        affiliateUrl: "https://www.amazon.com/s?k=sauna+essential+oils&tag=viisikanta-20",
      },
    ],
  },
  {
    tier: "$25–50 — The Sweet Spot",
    emoji: "&#x2b50;",
    description:
      "Great for birthdays, thank-you gifts, or anyone who takes their sauna seriously.",
    items: [
      {
        name: "Wooden Bucket & Ladle Set",
        description:
          "The kiulu (bucket) and kauha (ladle) are the heart of any sauna. This set is crafted from Finnish pine with a plastic liner for durability. The ladle keeps your hand away from the steam.",
        price: "$30–50",
        features: [
          "Finnish pine with stainless steel bands",
          "Plastic liner prevents leaking",
          "Ergonomic ladle with long handle",
        ],
        affiliateUrl: "https://www.amazon.com/s?k=sauna+bucket+ladle+set&tag=viisikanta-20",
        badge: "Best Value",
      },
      {
        name: "Sauna Thermometer & Hygrometer Combo",
        description:
          "A proper sauna has both — the thermometer for temperature and the hygrometer for humidity. Together they tell the full story of your löyly. This wooden combo unit mounts on the wall.",
        price: "$25–40",
        features: [
          "Measures both temperature and humidity",
          "Heat-resistant wooden housing",
          "Easy to read at a glance",
        ],
        affiliateUrl: "https://www.amazon.com/s?k=sauna+thermometer+hygrometer&tag=viisikanta-20",
      },
      {
        name: "Finnish Sauna Spa Gift Box",
        description:
          "A curated gift box with birch-scented sauna soap, body scrub with sea salt and meadowsweet, and sauna honey — a Finnish tradition where you spread honey on your skin in the sauna for deep moisturizing.",
        price: "$35–50",
        features: [
          "Birch soap, sea salt scrub, sauna honey",
          "Natural Finnish ingredients",
          "Beautiful gift packaging",
        ],
        affiliateUrl: "https://www.amazon.com/s?k=sauna+gift+set&tag=viisikanta-20",
      },
    ],
  },
  {
    tier: "$50–100 — Premium Gifts",
    emoji: "&#x1f48e;",
    description:
      "For the person who already has a sauna (or wishes they did). These are gifts they will use every single time.",
    items: [
      {
        name: "Complete Sauna Accessories Kit",
        description:
          "Everything in one box: wooden bucket and ladle, thermometer/hygrometer, hourglass timer, aromatherapy cup, and a headrest. The complete upgrade for any sauna.",
        price: "$60–90",
        features: [
          "6-piece set — everything you need",
          "Matching wooden design",
          "Works with any sauna type",
        ],
        affiliateUrl: "https://www.amazon.com/s?k=sauna+accessories+kit&tag=viisikanta-20",
        badge: "Best for New Sauna Owners",
      },
      {
        name: "Linen Sauna Robe",
        description:
          "In Finland, linen is the traditional sauna textile. It is naturally antibacterial, dries fast, and gets softer with every wash. A proper linen robe for cooling down between rounds is pure luxury.",
        price: "$70–100",
        features: [
          "100% European linen",
          "Lightweight and quick-drying",
          "Gets softer with each wash",
        ],
        affiliateUrl: "https://www.amazon.com/s?k=linen+sauna+robe&tag=viisikanta-20",
      },
    ],
  },
  {
    tier: "$100+ — Splurge Gifts",
    emoji: "&#x1f451;",
    description:
      "Go big. These are for the dedicated sauna enthusiast or someone building their dream setup.",
    items: [
      {
        name: "Harvia Electric Sauna Heater",
        description:
          "Harvia is the Finnish sauna heater brand, used in homes and public saunas across Finland. Their compact electric heaters are perfect for home saunas and produce excellent löyly with quality stones.",
        price: "$300–800",
        features: [
          "Finnish engineering since 1950",
          "Multiple sizes for home saunas",
          "Excellent stone capacity for löyly",
        ],
        affiliateUrl: "https://www.amazon.com/s?k=harvia+sauna+heater&tag=viisikanta-20",
      },
      {
        name: "Infrared Sauna Panel",
        description:
          "For those without space for a full sauna, a near-infrared panel brings targeted heat therapy to any room. Popular for muscle recovery and wellness routines.",
        price: "$200–500",
        features: [
          "Near-infrared technology",
          "Compact — fits any room",
          "Targeted heat therapy",
        ],
        affiliateUrl: "https://www.amazon.com/s?k=infrared+sauna+panel&tag=viisikanta-20",
      },
    ],
  },
];

export default function SaunaGiftGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative w-full h-[50vh] min-h-[400px] mb-10">
        <Image
          src="/images/luxury-sauna-spa-stones.png"
          alt="Luxurious sauna spa setting with stacked stones, towels, and birch decor"
          fill
          priority
          className="object-cover rounded-sm"
          sizes="100vw"
        />
      </div>

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Sauna Gift Guide" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[var(--color-cedar)] mb-4"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Sauna Gift Guide 2026
      </h1>
      <p className="text-lg text-[var(--color-stone)] mb-2 leading-relaxed">
        Finding the right gift for a sauna lover is easier than you think. The
        best sauna gifts are the ones people use every single session but rarely
        buy for themselves — a proper wool hat, a beautiful bucket set, or
        authentic Finnish sauna products.
      </p>
      <p className="text-sm text-[var(--color-stone-light)] mb-8">
        Last updated: March 2026 &middot; Written by a Finn
      </p>

      <div className="prose">
        <h2 style={{ fontFamily: "var(--font-serif)" }}>
          How We Picked These Gifts
        </h2>
        <p>
          Every item on this list is something we have either used ourselves or
          would genuinely recommend. We prioritize quality materials, authentic
          design, and products that actually improve the sauna experience. No
          gimmicks, no junk.
        </p>
        <p>
          We have organized gifts by price tier so you can find the right gift
          regardless of your budget. Each tier has items that any sauna
          enthusiast would appreciate.
        </p>
      </div>

      {giftTiers.map((tier, tierIndex) => (
        <section key={tier.tier} className="mt-12">
          <h2
            className="text-2xl font-bold text-[var(--color-cedar)] mb-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <span dangerouslySetInnerHTML={{ __html: tier.emoji }} />{" "}
            {tier.tier}
          </h2>
          <p className="text-[var(--color-stone)] mb-6">{tier.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tier.items.map((item) => (
              <AffiliateCard key={item.name} {...item} />
            ))}
          </div>

          {tierIndex === 1 && <AdSlot />}
        </section>
      ))}

      <AdSlot />

      <section className="mt-12 prose">
        <h2 style={{ fontFamily: "var(--font-serif)" }}>
          DIY Sauna Gift Ideas
        </h2>
        <p>
          Some of the best sauna gifts cost almost nothing but carry huge
          personal meaning.
        </p>
        <ul>
          <li>
            <strong>Homemade vihta</strong> — If you have access to birch trees
            in early summer (June in Finland), cut young branches and tie them
            into a whisk. Dry them or freeze them for winter use. A handmade
            vihta is the most Finnish gift imaginable.
          </li>
          <li>
            <strong>Sauna honey scrub</strong> — Mix raw honey with coarse sea
            salt and a few drops of eucalyptus oil. Put it in a nice jar. Apply
            in the sauna for incredible skin.
          </li>
          <li>
            <strong>Infused sauna water</strong> — Steep birch leaves or
            eucalyptus in water for a day. Strain into a nice bottle. Pour on
            sauna stones for natural aromatherapy.
          </li>
          <li>
            <strong>Sauna playlist</strong> — Create a playlist of calm,
            atmospheric music for the cooling-down phase between rounds. Share
            via QR code in a card.
          </li>
        </ul>
      </section>

      <section className="mt-12 prose">
        <h2 style={{ fontFamily: "var(--font-serif)" }}>
          When to Give Sauna Gifts
        </h2>
        <ul>
          <li>
            <strong>Christmas</strong> — The most popular time. In Finland,
            joulusauna (Christmas sauna) is a sacred tradition on Christmas Eve.
          </li>
          <li>
            <strong>Housewarming</strong> — If someone just built or bought a
            home with a sauna, a bucket and ladle set is the classic gift.
          </li>
          <li>
            <strong>Father&apos;s Day / Mother&apos;s Day</strong> — Sauna
            accessories are the Finnish equivalent of giving dad a new grill
            tool.
          </li>
          <li>
            <strong>Birthday</strong> — A premium sauna hat or linen robe is a
            personal, thoughtful gift.
          </li>
          <li>
            <strong>Wellness enthusiast</strong> — For anyone into cold plunges,
            biohacking, or recovery, sauna gear is always appreciated.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <p className="text-[var(--color-stone)]">
          Looking for more details on specific accessories?{" "}
          <Link
            href="/sauna-accessories"
            className="text-[var(--color-lake)] font-medium hover:underline"
          >
            See our full Sauna Accessories Guide
          </Link>{" "}
          for in-depth reviews and comparisons.
        </p>
      </section>

      <EmailCapture
        title="Get Our Printable Sauna Gift Checklist"
        description="A one-page PDF you can check off while shopping. Includes our top picks at every price point."
        leadMagnet="gift-checklist"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Sauna Gift Guide 2026 — Best Gifts for Sauna Lovers",
            description:
              "The best sauna gifts for every budget, curated by a Finn.",
            author: {
              "@type": "Organization",
              name: "Finnish Sauna Guide",
            },
            datePublished: "2026-03-15",
            dateModified: "2026-03-15",
          }),
        }}
      />
    </div>
  );
}
