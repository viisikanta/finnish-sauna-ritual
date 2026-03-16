import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EmailCapture } from "@/components/EmailCapture";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "First Time in a Finnish Sauna — Complete Guide",
  description:
    "Everything you need to know about your first time in a Finnish sauna. Nudity, temperature, löyly, birch whisks, cooling down and step-by-step instructions from a Finn.",
  keywords: [
    "first time finnish sauna",
    "first time sauna",
    "finnish sauna guide",
    "what to expect finnish sauna",
    "sauna nudity",
    "sauna for beginners",
    "löyly",
    "vihta",
    "birch whisk sauna",
    "finnish sauna rules",
  ],
};

export default function FirstTimeSaunaPage() {
  return (
    <>
      <div className="relative w-full h-[50vh] min-h-[400px] mb-10">
        <Image
          src="/images/man-relaxing-finnish-sauna.jpg"
          alt="Man relaxing in a warm Finnish sauna for the first time"
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
              { label: "Sauna Etiquette", href: "/sauna-etiquette" },
              { label: "First Time Guide" },
            ]}
          />
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--color-cedar)] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Your First Finnish Sauna
          </h1>
          <p className="text-lg text-[var(--color-stone)] max-w-2xl leading-relaxed">
            Everything you need to know, from someone who has done this thousands
            of times. I have been going to sauna since before I could walk. This
            guide is everything I wish I could tell you in person before your
            first time.
          </p>
        </div>
      </section>

      {/* Main content */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose">
          {/* Before You Go */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>Before You Go</h2>

          <h3>What to Bring</h3>
          <ul>
            <li>
              <strong>A towel</strong> &mdash; ideally two. One to sit on inside
              the sauna, one to dry off with afterwards. In Finland, we use a
              small linen seat cover called a <em>pefletti</em> on the bench,
              but a regular towel works fine.
            </li>
            <li>
              <strong>A water bottle</strong> &mdash; you will sweat more than
              you think. Bring water and drink between rounds. This is not
              optional.
            </li>
            <li>
              <strong>Flip-flops or sandals</strong> &mdash; for walking to and
              from the sauna, especially in public saunas. The floors can be wet
              and slippery.
            </li>
            <li>
              <strong>A change of clothes</strong> &mdash; you will feel
              completely refreshed afterwards and will not want to put your old
              clothes back on.
            </li>
            <li>
              <strong>Shampoo and soap</strong> &mdash; most public saunas in
              Finland have shower facilities. Some provide soap, but bring your
              own to be safe.
            </li>
          </ul>

          <h3>What NOT to Bring</h3>
          <ul>
            <li>
              <strong>Your phone</strong> &mdash; the heat will damage it, and a
              camera has no place in a sauna. Leave it in the locker.
            </li>
            <li>
              <strong>Jewellery</strong> &mdash; metal gets extremely hot in a
              sauna. Rings, necklaces, earrings &mdash; take them all off. Even
              a small ring can burn you at 90&deg;C.
            </li>
            <li>
              <strong>Expectations</strong> &mdash; seriously. Do not go in
              expecting a spa treatment or an Instagram moment. Sauna is simple.
              It is heat, steam, silence, and time. Let it be what it is.
            </li>
          </ul>

          <AdSlot />

          {/* What to Expect */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            What to Expect Inside
          </h2>
          <p>
            A traditional Finnish sauna is a wood-panelled room, typically made
            of spruce, aspen, or alder. In the corner sits a <em>kiuas</em>{" "}
            &mdash; the sauna stove &mdash; topped with a pile of dark stones.
            The benches are arranged in tiers: the higher you sit, the hotter it
            gets. Heat rises, so the top bench can be 20&ndash;30&deg;C warmer
            than the lower bench.
          </p>
          <p>
            The temperature inside a Finnish sauna typically sits between{" "}
            <strong>80&ndash;100&deg;C</strong> (176&ndash;212&deg;F). That
            sounds extreme, and it is &mdash; but dry heat feels very different
            from wet heat. At 80&deg;C with low humidity, the air feels warm and
            enveloping rather than suffocating. When someone throws water on the
            stones, the humidity spikes momentarily and the heat intensifies.
            That is <em>löyly</em>, and it is the heart of the whole experience.
          </p>

          {/* The Big Question */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            The Big Question: Nudity
          </h2>
          <p>
            Let me be direct: in Finland, sauna is done naked. This is the norm,
            not the exception. Saunas are gender-separated as standard, so you
            will be with people of the same gender. It is not sexual. It is not
            exhibitionist. It is simply the way it has always been done &mdash;
            for thousands of years.
          </p>
          <p>
            There is a practical reason too: swimwear traps chemicals from
            detergent and chlorine, which release into the air when heated.
            Swimwear also prevents your skin from breathing and sweating
            properly, which defeats the purpose of sauna.
          </p>
          <p>
            That said, nobody will force you to be naked. If you are genuinely
            uncomfortable, you can wrap yourself in a towel. In mixed-gender
            public saunas (which do exist but are less common in Finland), some
            people wear swimwear. The key is that nobody is paying attention to
            your body. We are all there for the same thing: the heat, the steam,
            and the quiet.
          </p>
          <p>
            <strong>My advice:</strong> try it the Finnish way. You will feel
            self-conscious for about thirty seconds, and then the heat takes
            over, and you will forget you are not wearing anything. Everyone
            does.
          </p>

          {/* Step by Step */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Step-by-Step: Your First Sauna Round
          </h2>
          <ol>
            <li>
              <strong>Undress and shower thoroughly.</strong> Use soap and
              shampoo. Rinse off everything &mdash; deodorant, moisturiser,
              sunscreen, all of it. This is not a quick rinse; it is a proper
              wash. Everyone else in the sauna will appreciate it.
            </li>
            <li>
              <strong>Enter the sauna and sit on your towel.</strong> Open the
              door quickly, step in, and close it behind you. Every second the
              door is open, heat escapes. Place your towel on the bench and sit
              down.
            </li>
            <li>
              <strong>Start on the lower bench.</strong> If you are new, sit on
              the lower level where it is cooler. You can always move up once you
              know how you handle the heat.
            </li>
            <li>
              <strong>Enjoy the dry heat for a few minutes.</strong> Breathe
              slowly and deeply. Let your body adjust. The dry heat will feel
              intense at first but will become comfortable as your skin warms up.
            </li>
            <li>
              <strong>Someone will throw löyly &mdash; breathe calmly.</strong>{" "}
              When water hits the stones, you will hear a satisfying hiss, and a
              wave of humid heat will roll over you. It can feel like a wall of
              warmth. Breathe through your mouth if the nose feels too hot. The
              sensation passes in about thirty seconds.
            </li>
            <li>
              <strong>When you have had enough, step out.</strong> There is no
              minimum time. Most people stay 10&ndash;15 minutes per round, but
              5 minutes is perfectly fine, especially on your first time. Trust
              your body.
            </li>
            <li>
              <strong>Cool down.</strong> This is the best part. Take a cold
              shower, jump into a lake, plunge into the sea, or simply stand
              outside in the fresh air. In winter, Finns roll in the snow or dip
              through a hole in the ice (<em>avanto</em>). The cold contrast is
              exhilarating and it is what makes your body feel incredible
              afterwards.
            </li>
            <li>
              <strong>Rest, hydrate, repeat.</strong> Sit down, drink water, and
              let your heart rate come back to normal. When you feel ready, go
              back in for another round. Two to three rounds is the Finnish
              standard, but there are no rules. Some people do one, some do
              five.
            </li>
            <li>
              <strong>After the last round: eat, drink, relax.</strong> The
              post-sauna ritual is just as important as the sauna itself. In
              Finland, this means beer or cider, grilled sausages (
              <em>makkara</em>), and long conversations in the cooling evening
              air. You will feel profoundly relaxed, clean, and content.
            </li>
          </ol>

          <AdSlot />

          {/* Löyly Explained */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Löyly: The Soul of the Sauna
          </h2>
          <p>
            <em>Löyly</em> (löyly, pronounced roughly &quot;Low-lu&quot;) is the
            steam that rises when you pour water over the hot stones. The word
            has no direct translation in English because the concept does not
            exist in the same way anywhere else. Löyly is not just steam &mdash;
            it is the atmosphere, the feeling, the quality of heat in the sauna.
            Good löyly is soft, enveloping, and gentle. Bad löyly is sharp,
            stinging, and harsh.
          </p>
          <p>
            To throw löyly, use the wooden ladle (<em>kiulu</em>) to scoop water
            from the bucket and pour it gently over the stones. Do not dump a
            full ladle all at once unless you want a blast of heat that will make
            everyone on the top bench gasp. Start with a small amount. The
            stones should hiss and sizzle, and within seconds, a wave of warm,
            moist air will fill the room.
          </p>
          <p>
            The etiquette is simple: always ask before throwing löyly, especially
            if there are others in the sauna. A gentle &quot;Saako
            heittää?&quot; (&quot;May I throw?&quot;) is all it takes. If
            someone says no, respect it. If you are alone, throw as much or as
            little as you like.
          </p>

          {/* Vihta / Vasta */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Vihta: The Birch Whisk Tradition
          </h2>
          <p>
            The <em>vihta</em> (or <em>vasta</em>, depending on which part of
            Finland you are from &mdash; this is a surprisingly heated regional
            debate) is a bundle of fresh birch branches tied together and used to
            gently whisk the skin during sauna. It is one of the most
            distinctive features of Finnish sauna culture, and the scent of
            fresh birch in the steam is something you will never forget.
          </p>
          <p>
            Fresh vihtas are made in early summer when the birch leaves are
            young, soft, and full of sap. They are used fresh in summer and
            frozen or dried for use throughout the year. To use a vihta, soak it
            in warm water to soften the leaves, then gently tap and brush it
            against your skin. It stimulates circulation, releases a wonderful
            fragrance, and feels like a gentle massage. You are not whipping
            yourself &mdash; despite what the stereotypes suggest.
          </p>
          <p>
            If someone offers to whisk you with a vihta, say yes. It is a
            gesture of hospitality, and it feels wonderful.
          </p>

          {/* Common Fears */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Common Fears (Addressed Honestly)
          </h2>

          <h3>&quot;Will it be too hot?&quot;</h3>
          <p>
            It will feel hot, but your body adapts faster than you think. Start
            on the lower bench, where the temperature can be 20&deg;C cooler
            than the top. You control your experience. If it is too hot, move
            down or step out. Nobody will judge you.
          </p>

          <h3>&quot;Do I really have to be naked?&quot;</h3>
          <p>
            In a private or gender-separated Finnish sauna, yes, nudity is the
            norm. But you can wear a towel if you need to. What matters is that
            you are clean and respectful. In mixed-gender public situations,
            swimwear is sometimes worn. Nobody is going to examine you &mdash;
            we are all focused on the heat.
          </p>

          <h3>&quot;How long should I stay?&quot;</h3>
          <p>
            As long as you feel comfortable. There is no minimum and no
            competition. Five minutes is fine. Twenty minutes is fine. Listen to
            your body. The moment you think &quot;maybe I should go out,&quot;
            go out.
          </p>

          <h3>&quot;Is it safe?&quot;</h3>
          <p>
            For healthy adults, sauna is very safe. Finns have been doing this
            for millennia. However, if you have cardiovascular issues, are
            pregnant, or have been drinking heavily, consult a doctor first.
            Dehydration is the most common issue for newcomers, so drink plenty
            of water.
          </p>

          {/* Do's and Don'ts Table */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            Do&apos;s and Don&apos;ts
          </h2>
          <table>
            <thead>
              <tr>
                <th>Do</th>
                <th>Don&apos;t</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shower thoroughly before entering</td>
                <td>Enter the sauna without showering</td>
              </tr>
              <tr>
                <td>Sit on a towel or pefletti</td>
                <td>Sit directly on the wooden bench</td>
              </tr>
              <tr>
                <td>Ask before throwing löyly</td>
                <td>Dump a full ladle without warning</td>
              </tr>
              <tr>
                <td>Drink water between rounds</td>
                <td>Drink alcohol inside the sauna</td>
              </tr>
              <tr>
                <td>Leave when you feel uncomfortable</td>
                <td>Treat it as an endurance competition</td>
              </tr>
              <tr>
                <td>Respect the silence or conversation</td>
                <td>Talk loudly or make phone calls</td>
              </tr>
              <tr>
                <td>Cool down between rounds</td>
                <td>Rush back in without cooling off</td>
              </tr>
              <tr>
                <td>Try the vihta if offered</td>
                <td>Whip yourself aggressively</td>
              </tr>
              <tr>
                <td>Remove all jewellery</td>
                <td>Wear metal accessories inside</td>
              </tr>
              <tr>
                <td>Close the door quickly</td>
                <td>Hold the door open while chatting</td>
              </tr>
            </tbody>
          </table>

          {/* After the Sauna */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>
            After the Sauna: The Social Ritual
          </h2>
          <p>
            In Finland, what happens after the sauna is just as important as the
            sauna itself. The post-sauna ritual is when conversations deepen,
            laughter comes easily, and the world feels a little softer. Your
            skin is glowing, your muscles are loose, and your mind is quiet.
          </p>
          <p>
            The traditional post-sauna spread includes{" "}
            <strong>grilled sausages</strong> (<em>makkara</em>) cooked over an
            open fire, cold <strong>beer or cider</strong>, and perhaps some
            bread, cheese, and pickles. At a summer cottage, you might eat on the
            dock while watching the lake. In winter, you might gather around the
            fireplace in thick socks and bathrobes.
          </p>
          <p>
            This is the moment when Finns, famously reserved in everyday life,
            open up. Important conversations happen after sauna. Business deals
            are made. Family bonds are strengthened. Friendships are formed. The
            sauna strips away pretence, and what is left is honest connection.
          </p>
          <p>
            If you are invited to sauna in Finland, know that it is an honour.
            It means someone trusts you enough to share this deeply personal
            ritual with you. Accept graciously, follow the basic etiquette, and
            let the experience wash over you.
          </p>

          {/* Next Steps */}
          <h2 style={{ fontFamily: "var(--font-serif)" }}>What to Read Next</h2>
          <p>
            Now that you know what to expect, you might want to explore our{" "}
            <Link
              href="/sauna-accessories"
              className="text-[var(--color-lake)] font-semibold hover:underline"
            >
              essential sauna accessories guide
            </Link>{" "}
            to make sure you have everything you need. Or dive into the{" "}
            <Link
              href="/sauna-etiquette/germany"
              className="text-[var(--color-lake)] font-semibold hover:underline"
            >
              German sauna culture guide
            </Link>{" "}
            to see how our neighbours to the south do things differently.
          </p>
        </div>

        {/* Email Capture */}
        <EmailCapture
          title="Download: First-Timer's Finnish Sauna Cheat Sheet"
          description="A one-page printable PDF with everything from this guide condensed into a quick reference card. Take it with you (mentally) to your first sauna."
          buttonText="Send Me the Guide"
          leadMagnet="first-time-sauna-cheat-sheet"
        />

        <AdSlot />
      </article>

      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Your First Finnish Sauna — Complete Guide",
            description:
              "Everything you need to know about your first time in a Finnish sauna, from nudity norms to löyly etiquette to the post-sauna ritual.",
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
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://finnishsaunaguide.com/sauna-etiquette/first-time",
            },
          }),
        }}
      />
    </>
  );
}
