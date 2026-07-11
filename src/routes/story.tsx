import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import workSkull from "@/assets/work/work-skull.jpeg.asset.json";
import workSamurai from "@/assets/work/work-samurai.jpeg.asset.json";
import workPagoda from "@/assets/work/work-pagoda.jpeg.asset.json";
import workWheel from "@/assets/work/work-wheel.jpeg.asset.json";
import workBallerina from "@/assets/work/work-ballerina.jpeg.asset.json";
import workCompass from "@/assets/work/work-compass.jpeg.asset.json";
import workDragonWing from "@/assets/work/work-dragon-wing.jpeg.asset.json";
import workLotus from "@/assets/work/work-lotus.jpeg.asset.json";

const heroTattoo =
  "https://images.pexels.com/photos/25491869/pexels-photo-25491869/free-photo-of-a-tattoo-artist-at-work.jpeg?auto=compress&cs=tinysrgb&w=1920";
const graffitiWall =
  "https://images.pexels.com/photos/3269629/pexels-photo-3269629.jpeg?auto=compress&cs=tinysrgb&w=1600";
const tatSkull = workSkull.url;
const tatJapanese = workSamurai.url;
const tatLettering = workCompass.url;
const tatSleeve = workPagoda.url;
const tatChest = workWheel.url;
const tatFineline = workLotus.url;

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Nu Skool Tattoos | South Delhi Tattoo Studio" },
      {
        name: "description",
        content:
          "The story of Nu Skool Tattoos — two artists, one Delhi studio, and a movement built on culture over business. Est. 2021, Khanpur & CR Park.",
      },
      { property: "og:title", content: "Our Story — Nu Skool Tattoos" },
      { property: "og:description", content: "Art over business. Culture over everything. The Nu Skool Tattoos story." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoryPage,
});

/* -------- Reveal on scroll -------- */
function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right" | "scale";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.dataset.shown = "true";
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const initial =
    from === "left"
      ? "opacity-0 -translate-x-10"
      : from === "right"
        ? "opacity-0 translate-x-10"
        : from === "scale"
          ? "opacity-0 scale-95"
          : "opacity-0 translate-y-10";
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out ${initial} data-[shown=true]:opacity-100 data-[shown=true]:translate-x-0 data-[shown=true]:translate-y-0 data-[shown=true]:scale-100 ${className}`}
    >
      {children}
    </div>
  );
}

/* -------- Decorative SVGs -------- */
const Lightning = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 32" className={className} fill="currentColor" aria-hidden>
    <path d="M13 0 0 18h8L6 32 24 12h-9l3-12z" />
  </svg>
);
const Star = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
    <path d="M16 0l3 10 10 1-8 6 3 11-8-7-8 7 3-11-8-6 10-1z" />
  </svg>
);
const Arrow = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 40" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden>
    <path d="M4 20 Q40 4 80 20" />
    <path d="M70 10 L82 20 L70 30" />
  </svg>
);
const Paw = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
    <ellipse cx="16" cy="22" rx="8" ry="7" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="14" cy="7" r="3" />
    <circle cx="22" cy="7" r="3" />
    <circle cx="28" cy="14" r="3" />
  </svg>
);
const Splat = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 120" className={className} fill="currentColor" aria-hidden>
    <path d="M60 8c14 4 22 20 34 22s22 14 14 30-2 30-18 34-24 20-40 14S22 96 18 82 4 60 12 46 26 24 40 22 46 4 60 8z" />
    <circle cx="14" cy="30" r="4" />
    <circle cx="108" cy="42" r="5" />
    <circle cx="98" cy="108" r="3" />
    <circle cx="24" cy="106" r="4" />
  </svg>
);
const Rose = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <circle cx="24" cy="20" r="6" />
    <circle cx="24" cy="20" r="3" />
    <path d="M18 20c-6-2-10 4-6 10M30 20c6-2 10 4 6 10M24 26c-2 8 4 14 0 20M24 26c2 8-4 14 0 20" />
  </svg>
);

/* -------- Timeline data (verbatim story content preserved elsewhere) -------- */
const CHAPTERS: {
  tag: string;
  year: string;
  title: string;
  body: string;
  image?: string;
  side: "L" | "R";
  accent: "blood" | "acid" | "burnt";
}[] = [
  {
    tag: "Chapter 01",
    year: "2021",
    title: "The Beginning",
    side: "L",
    accent: "blood",
    image: heroTattoo,
    body:
      "Every great revolution starts with a shared vision. For NuSkool Tattoos, the spark was ignited when two like-minded creators from completely different corners of India crossed paths in the capital city. Sohaib, rooted in the energy of New Delhi, and Saheb, bringing the artistic soul of West Bengal, met in Delhi with a shared hunger to disrupt the norm.",
  },
  {
    tag: "Chapter 02",
    year: "Devli Rd.",
    title: "First Studio in Khanpur",
    side: "R",
    accent: "acid",
    image: tatSkull,
    body:
      "In 2021, that hunger turned into reality. What began as pure experimentation—driven by a raw desire to simply have a space of their own to tattoo—blossomed into something much bigger. Setting up shop at the prime location of Devli Main Road, they proudly became the first-ever tattoo studio in the Khanpur area.",
  },
  {
    tag: "Chapter 03",
    year: "The Family",
    title: "Growing the Family",
    side: "L",
    accent: "burnt",
    image: tatJapanese,
    body:
      "We didn't build NuSkool with aggressive corporate marketing; we built it with raw artistry, meticulous attention to detail, and a genuine value for our clients' money. As the community embraced our vision, our family naturally grew. What started with two dreamers expanded as new students and seasoned creators flocked to our energy.",
  },
  {
    tag: "Chapter 04",
    year: "8 Strong",
    title: "Eight Artists",
    side: "R",
    accent: "blood",
    image: tatSleeve,
    body:
      "Today, NuSkool is a powerhouse team of 8 tattoo and piercing artists, each spreading their untamed creativity onto the canvas of your skin. Driven by this incredible love and support, we haven't stood still.",
  },
  {
    tag: "Chapter 05",
    year: "CR Park",
    title: "Second Studio",
    side: "L",
    accent: "acid",
    image: tatChest,
    body:
      "NuSkool Tattoos proudly operates two bustling locations, having opened our second studio in the vibrant CR Park, GK-4 area. Two homes, one culture — Khanpur where it all started, and GK-4 where the movement grows.",
  },
  {
    tag: "Chapter 06",
    year: "MOKO",
    title: "MOKO Partnership",
    side: "R",
    accent: "burnt",
    image: tatLettering,
    body:
      "To ensure that every piece of art heals flawlessly, we are also the proud, exclusive partner of MOKO Butter, supplying their premium tattoo and piercing aftercare range across the entire Delhi NCR area.",
  },
  {
    tag: "Chapter 07",
    year: "The Code",
    title: "Artists, Not Businessmen",
    side: "L",
    accent: "blood",
    image: tatFineline,
    body:
      "At the core of NuSkool Tattoos is a philosophy we will never compromise on: delivering elite, high-quality tattoos that fit every pocket. We don't look at skin as a transaction, and we don't just tattoo for money. We believe in the culture we are creating. A tattoo is a rite of passage, a piece of your soul made visible, and an ultimate expression of identity. We believe that everyone deserves a premium tattoo, without having to sacrifice their life savings for it. There is zero compromise on hygiene, zero compromise on quality, and a 100% commitment to the craft.",
  },
  {
    tag: "Chapter 08",
    year: "→ Next",
    title: "The Future",
    side: "R",
    accent: "acid",
    image: graffitiWall,
    body:
      "We started in a small room with big dreams, and with your unwavering support, we believe we can expand even further to serve you in more areas. Thank you for trusting us with your skin, your stories, and your vision. Welcome to the NuSkool family.",
  },
];

const OSMO_PANELS: { text: string; tail: "L" | "R" }[] = [
  {
    tail: "L",
    text: "Meow, human! Pull up a chair. I'm Osmo — official mascot, self-appointed creative director, and the REAL boss around here. I've watched this whole empire grow from a tiny dream into a full-blown tattoo movement.",
  },
  {
    tail: "R",
    text: "It all started back in 2021. Two ridiculously talented humans from different corners of India crossed paths in the capital. Sohaib brought that raw New Delhi energy. Saheb carried the deep artistic soul of West Bengal. Sparks flew.",
  },
  {
    tail: "L",
    text: "They set up shop on Devli Main Road — the first-ever tattoo studio in Khanpur. Late-night hustling, pure experimentation, and me supervising from the shadows. Obviously.",
  },
  {
    tail: "R",
    text: "Clients loved the raw artistry, the detail, and the honest value. New students and passionate artists flocked to the vibe. Today I manage a powerhouse team of 8 tattoo and piercing artists.",
  },
  {
    tail: "L",
    text: "We didn't stop there. Second studio opened in CR Park, GK-4. We also became the exclusive partner of MOKO Butter — premium aftercare across all of Delhi NCR. Your fresh ink heals flawlessly on my watch.",
  },
  {
    tail: "R",
    text: "Listen closely — this is my golden rule: We are artists, not businessmen. Zero compromise on hygiene. Zero compromise on quality. 100% commitment to the craft. Now — who's getting inked next?",
  },
];

/* -------- Page -------- */
function StoryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-asphalt text-bone">
      {/* global textures */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40 mix-blend-overlay [background-image:var(--grain)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] [background-image:var(--concrete-tex)]" />

      <TopBar />
      <Hero />
      <IntroQuote />
      <Timeline />
      <BigQuote />
      <OsmoComic />
      <PolaroidWall />
      <Ending />
    </main>
  );
}

/* -------- Top bar (page-local, doesn't touch site navbar) -------- */
function TopBar() {
  return (
    <div className="relative z-20 border-b-2 border-bone/10 bg-asphalt/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="font-bungee text-sm tracking-widest text-bone hover:text-acid">
          ← NU SKOOL
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-dirty">
          EST. 2021 · Delhi NCR
        </span>
      </div>
    </div>
  );
}

/* -------- Hero -------- */
function Hero() {
  return (
    <section className="relative z-10 overflow-hidden border-b-2 border-bone/10">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:var(--halftone)] [background-size:14px_14px]" />
      {/* oversized faded graffiti word */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span
          className="font-bungee-shade whitespace-nowrap text-[28vw] leading-none text-bone/[0.06] animate-[pulse_9s_ease-in-out_infinite]"
          aria-hidden
        >
          NUSKOOL
        </span>
      </div>

      {/* floating decorations */}
      <Lightning className="absolute left-[6%] top-[18%] h-10 w-8 text-acid/70 rotate-[-14deg] animate-[flicker_5s_infinite]" />
      <Star className="absolute right-[9%] top-[22%] h-8 w-8 text-blood rotate-[16deg]" />
      <Paw className="absolute right-[14%] bottom-[18%] h-6 w-6 text-bone/40 rotate-[24deg]" />
      <Paw className="absolute left-[10%] bottom-[26%] h-5 w-5 text-bone/30 rotate-[-8deg]" />
      <Splat className="absolute left-[-4%] bottom-[-6%] h-56 w-56 text-blood/25" />
      <Rose className="absolute right-[-2%] top-[-2%] h-40 w-40 text-burnt/40 rotate-12" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 md:py-40">
        <Reveal from="left">
          <div className="mb-6 inline-block">
            <span className="tape-strip">The Nu Skool Story · Est. 2021</span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-bungee text-[18vw] leading-[0.85] sm:text-[14vw] md:text-[11rem] lg:text-[13rem]">
            <span className="block spray-drip">OUR</span>
            <span className="block chrome-text -mt-2">STORY.</span>
          </h1>
        </Reveal>
        <Reveal delay={260} from="right">
          <p className="mt-8 max-w-xl font-graf text-2xl leading-snug text-dirty sm:text-3xl">
            Two artists. One city. A studio built on culture — not business.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-dirty">
            <span className="rounded-full border border-bone/20 px-3 py-1">Khanpur</span>
            <span className="rounded-full border border-bone/20 px-3 py-1">CR Park · GK-4</span>
            <span className="rounded-full border border-bone/20 px-3 py-1">MOKO Butter Partner</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------- Intro quote strip -------- */
function IntroQuote() {
  return (
    <section className="relative z-10 border-b-2 border-bone/10 py-14 texture-scratch">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="font-graf text-2xl leading-snug text-bone sm:text-3xl md:text-4xl">
            <span className="text-acid">“</span>
            Art over business. Culture over everything.
            <span className="text-acid">”</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------- Timeline -------- */
function Timeline() {
  return (
    <section className="relative z-10 py-20 sm:py-28">
      {/* center rail */}
      <div className="pointer-events-none absolute inset-y-10 left-1/2 hidden w-[3px] -translate-x-1/2 bg-gradient-to-b from-blood via-bone/30 to-acid md:block" />

      <div className="mx-auto max-w-3xl px-4 pb-16 text-center sm:px-6">
        <Reveal>
          <span className="tape-strip">Chapters</span>
          <h2 className="mt-6 font-bungee text-5xl leading-none sm:text-6xl md:text-7xl">
            <span className="spray-drip">HOW IT</span>
            <span className="block text-stroke-blood">WENT DOWN</span>
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto max-w-6xl space-y-20 px-4 sm:px-6 md:space-y-28">
        {CHAPTERS.map((c, i) => (
          <Chapter key={c.tag} chapter={c} index={i} />
        ))}
      </div>
    </section>
  );
}

function Chapter({
  chapter,
  index,
}: {
  chapter: (typeof CHAPTERS)[number];
  index: number;
}) {
  const left = chapter.side === "L";
  const accent =
    chapter.accent === "blood"
      ? "text-blood"
      : chapter.accent === "acid"
        ? "text-acid"
        : "text-burnt";
  const bgSplat =
    chapter.accent === "blood"
      ? "text-blood/25"
      : chapter.accent === "acid"
        ? "text-acid/20"
        : "text-burnt/25";

  return (
    <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
      {/* rail dot */}
      <div className="pointer-events-none absolute left-1/2 top-8 hidden -translate-x-1/2 md:block">
        <Splat className={`h-14 w-14 ${bgSplat}`} />
        <span className={`absolute inset-0 flex items-center justify-center font-bungee text-[11px] ${accent}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* image */}
      <Reveal
        from={left ? "left" : "right"}
        className={`${left ? "md:order-1" : "md:order-2"} md:col-start-${left ? 1 : 2}`}
      >
        <div
          className={`relative ${left ? "-rotate-2" : "rotate-2"} transition-transform duration-500 hover:rotate-0`}
        >
          <div className="absolute -inset-2 bg-blood/20 blur-xl" aria-hidden />
          <div className="relative border-[6px] border-bone bg-bone p-2 shadow-[10px_10px_0_var(--asphalt),10px_10px_0_2px_var(--blood)]">
            <img
              src={chapter.image}
              alt={chapter.title}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover contrast-[1.08] saturate-[0.95]"
            />
            <div className="pointer-events-none absolute inset-0 [background-image:var(--scratch)] opacity-30 mix-blend-screen" />
            <div className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-asphalt">
              <span>NSK / {String(index + 1).padStart(2, "0")}</span>
              <span>{chapter.year}</span>
            </div>
          </div>
          {/* tape */}
          <span className="absolute -left-4 -top-4 rotate-[-8deg] bg-acid/90 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-asphalt shadow">
            {chapter.tag}
          </span>
        </div>
      </Reveal>

      {/* text */}
      <Reveal
        from={left ? "right" : "left"}
        delay={120}
        className={`${left ? "md:order-2" : "md:order-1"}`}
      >
        <div className="relative">
          <span className={`font-graf text-lg ${accent}`}>{chapter.year}</span>
          <h3 className="mt-2 font-bungee text-5xl leading-[0.9] sm:text-6xl md:text-7xl">
            {chapter.title.toUpperCase()}.
          </h3>
          <div className="mt-4 h-1 w-24 bg-blood" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-dirty sm:text-xl">
            {chapter.body}
          </p>
          {index === 0 && (
            <Arrow className="mt-6 h-10 w-32 text-acid" />
          )}
        </div>
      </Reveal>
    </div>
  );
}

/* -------- Wall quote -------- */
function BigQuote() {
  return (
    <section className="relative z-10 my-16 overflow-hidden border-y-4 border-bone/10">
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: `url(${graffitiWall})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-asphalt/70" />
      <div className="pointer-events-none absolute inset-0 [background-image:var(--scratch)] opacity-40 mix-blend-screen" />

      <Splat className="pointer-events-none absolute -left-10 top-10 h-64 w-64 text-blood/30" />
      <Splat className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 text-acid/20" />
      <Lightning className="absolute right-10 top-14 hidden h-16 w-12 text-acid rotate-12 md:block animate-[flicker_5s_infinite]" />

      <div className="relative mx-auto max-w-6xl px-4 py-28 text-center sm:px-6 md:py-40">
        <Reveal>
          <span className="sticker">MANIFESTO</span>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="mt-8 font-bungee text-[14vw] leading-[0.85] sm:text-[10vw] md:text-[9rem]">
            <span className="block spray-drip">WE ARE</span>
            <span className="block text-stroke-blood">ARTISTS,</span>
            <span className="block chrome-text">NOT</span>
            <span className="block spray-drip">BUSINESSMEN.</span>
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <p className="mx-auto mt-10 max-w-2xl font-graf text-2xl text-dirty sm:text-3xl">
            Zero compromise on hygiene. Zero compromise on quality. 100% commitment to the craft.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------- Osmo comic -------- */
function OsmoComic() {
  return (
    <section className="relative z-10 border-t-2 border-bone/10 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="tape-strip">Meow, human.</span>
          <h2 className="mt-6 font-bungee text-5xl leading-none sm:text-6xl md:text-7xl">
            <span className="spray-drip">THE TAIL OF</span>
            <span className="block chrome-text">NU SKOOL.</span>
          </h2>
          <p className="mt-4 font-graf text-xl text-acid">Narrated by Osmo the Cat 🐾</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2">
        {OSMO_PANELS.map((p, i) => (
          <Reveal key={i} from={p.tail === "L" ? "left" : "right"} delay={i * 60}>
            <SpeechPanel panel={p} index={i} />
          </Reveal>
        ))}
      </div>

      {/* paw trail */}
      <div className="pointer-events-none mx-auto mt-16 flex max-w-4xl items-center justify-between px-8 opacity-70">
        {Array.from({ length: 7 }).map((_, i) => (
          <Paw
            key={i}
            className="h-5 w-5 text-bone/50"
            {...({ style: { transform: `rotate(${(i % 2 ? 1 : -1) * (10 + i * 4)}deg)` } } as {
              style: React.CSSProperties;
            })}
          />
        ))}
      </div>
    </section>
  );
}

function SpeechPanel({ panel, index }: { panel: (typeof OSMO_PANELS)[number]; index: number }) {
  const rot = index % 2 === 0 ? "-rotate-1" : "rotate-1";
  return (
    <div className={`relative ${rot} transition-transform duration-500 hover:rotate-0`}>
      <div className="relative border-4 border-bone bg-bone p-6 text-asphalt shadow-[8px_8px_0_var(--blood)]">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-asphalt text-bone">
            <Paw className="h-4 w-4" />
          </span>
          <span className="font-bungee text-sm tracking-widest">
            OSMO · PANEL {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p className="font-graf text-xl leading-snug sm:text-2xl">{panel.text}</p>
        {/* speech tail */}
        <span
          className={`absolute bottom-[-16px] h-0 w-0 ${
            panel.tail === "L" ? "left-10" : "right-10"
          } border-x-[16px] border-t-[18px] border-x-transparent border-t-bone`}
          aria-hidden
        />
      </div>
    </div>
  );
}

/* -------- Polaroid wall -------- */
const POLAROIDS: { src: string; caption: string; rot: string }[] = [
  { src: heroTattoo, caption: "The first chair.", rot: "-rotate-3" },
  { src: tatSkull, caption: "Khanpur, 2021.", rot: "rotate-2" },
  { src: tatJapanese, caption: "Ink & irezumi.", rot: "-rotate-2" },
  { src: tatSleeve, caption: "Full sleeve.", rot: "rotate-3" },
  { src: tatChest, caption: "Statement piece.", rot: "-rotate-1" },
  { src: tatFineline, caption: "Fine line.", rot: "rotate-1" },
];

function PolaroidWall() {
  return (
    <section className="relative z-10 overflow-hidden border-t-2 border-bone/10 py-24 texture-scratch">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="tape-strip">The Archive</span>
            <h2 className="mt-6 font-bungee text-5xl leading-none sm:text-6xl md:text-7xl">
              <span className="text-stroke-blood">TAPED</span>
              <span className="block spray-drip">TO THE WALL.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-12">
          {POLAROIDS.map((p, i) => (
            <Reveal key={i} from="scale" delay={i * 70}>
              <figure
                className={`relative mx-auto ${p.rot} bg-bone p-3 pb-8 shadow-[10px_10px_0_var(--asphalt),10px_10px_0_2px_var(--blood)] transition-transform duration-500 hover:rotate-0 hover:scale-[1.03]`}
              >
                {/* tape */}
                <span className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 bg-acid/70 shadow-sm" aria-hidden />
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="aspect-square w-full object-cover contrast-[1.05] saturate-[0.9]"
                />
                <figcaption className="mt-3 text-center font-graf text-lg text-asphalt">
                  {p.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- Ending -------- */
function Ending() {
  return (
    <section className="relative z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${graffitiWall})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-asphalt/75" />
      <div className="pointer-events-none absolute inset-0 [background-image:var(--grain)] opacity-40 mix-blend-overlay" />
      <Splat className="pointer-events-none absolute -left-16 top-4 h-72 w-72 text-blood/30" />
      <Splat className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 text-acid/25" />
      <Star className="absolute left-10 top-16 h-10 w-10 text-acid rotate-12" />
      <Star className="absolute right-16 bottom-24 h-8 w-8 text-blood rotate-[-16deg]" />

      <div className="relative mx-auto max-w-6xl px-4 py-32 text-center sm:px-6 md:py-44">
        <Reveal>
          <h2 className="font-bungee text-[13vw] leading-[0.85] sm:text-[9vw] md:text-[8rem]">
            <span className="block spray-drip">WELCOME TO</span>
            <span className="block chrome-text">THE NU SKOOL</span>
            <span className="block text-stroke-blood">FAMILY.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-2xl font-graf text-2xl text-dirty sm:text-3xl">
            Thank you for trusting us with your skin, your stories, and your vision.
          </p>
        </Reveal>
        <Reveal delay={350}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              hash="booking"
              className="group relative inline-flex items-center gap-3 border-4 border-bone bg-transparent px-8 py-4 font-bungee text-xl tracking-wider text-bone shadow-[8px_8px_0_var(--blood)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--blood)]"
            >
              <span className="spray-drip">BOOK YOUR SESSION</span>
              <span className="text-acid">◤</span>
            </Link>
            <Link
              to="/"
              className="font-mono text-xs uppercase tracking-[0.3em] text-dirty underline-offset-4 hover:text-acid hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
