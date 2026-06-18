import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/nuskool-logo.asset.json";
import heroImg from "@/assets/hero-tattoo.jpg";
import bikerImg from "@/assets/biker.jpg";
import tatRealism from "@/assets/tat-realism.jpg";
import tatBlackwork from "@/assets/tat-blackwork.jpg";
import tatFineline from "@/assets/tat-fineline.jpg";
import tatJapanese from "@/assets/tat-japanese.jpg";
import tatPortrait from "@/assets/tat-portrait.jpg";
import tatGeometric from "@/assets/tat-geometric.jpg";
import tatSleeve from "@/assets/tat-sleeve.jpg";
import tatMinimal from "@/assets/tat-minimal.jpg";
import tatCoverup from "@/assets/tat-coverup.jpg";
import tatLettering from "@/assets/tat-lettering.jpg";
import tatSkull from "@/assets/tat-skull.jpg";
import tatChest from "@/assets/tat-chest.jpg";
import tatNeck from "@/assets/tat-neck.jpg";
import tatHand from "@/assets/tat-hand.jpg";
import tatLeg from "@/assets/tat-leg.jpg";
import graffitiWall from "@/assets/graffiti-wall.jpg";
import artist1 from "@/assets/artist-1.jpg";
import artist2 from "@/assets/artist-2.jpg";
import artist3 from "@/assets/artist-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NU SKOOL TATTOOS — Best Tattoo & Piercing Studio in South Delhi" },
      {
        name: "description",
        content:
          "Street culture, personal stories, permanent art. Custom tattoos, piercing, cover ups & more at NU SKOOL TATTOOS, Chittaranjan Park, GK 4, New Delhi.",
      },
      { property: "og:title", content: "NU SKOOL TATTOOS — South Delhi" },
      {
        property: "og:description",
        content: "Ink your identity. Custom tattoos & piercings in CR Park, South Delhi.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GALLERY = [
  { src: tatRealism, cat: "Realism", num: "01", span: "row-span-2" },
  { src: tatJapanese, cat: "Japanese", num: "02", span: "row-span-2" },
  { src: tatBlackwork, cat: "Blackwork", num: "03", span: "" },
  { src: tatFineline, cat: "Fine Line", num: "04", span: "row-span-2" },
  { src: tatPortrait, cat: "Portrait", num: "05", span: "" },
  { src: tatGeometric, cat: "Geometric", num: "06", span: "" },
  { src: tatSleeve, cat: "Sleeves", num: "07", span: "row-span-2" },
  { src: tatMinimal, cat: "Minimal", num: "08", span: "" },
  { src: tatCoverup, cat: "Cover Ups", num: "09", span: "" },
  { src: tatLettering, cat: "Lettering", num: "10", span: "row-span-2" },
  { src: tatSkull, cat: "Knuckles", num: "11", span: "" },
  { src: tatChest, cat: "Chest Piece", num: "12", span: "" },
  { src: tatNeck, cat: "Neck", num: "13", span: "" },
  { src: tatHand, cat: "Mandala", num: "14", span: "row-span-2" },
  { src: tatLeg, cat: "Traditional", num: "15", span: "" },
];

const ARTISTS = [
  { img: artist1, name: "RAJA INK", style: "Realism / Portrait", spec: "Black & Grey master, 12+ yrs in the game." },
  { img: artist2, name: "KALI", style: "Blackwork / Geometric", spec: "Ornamental, dotwork, sacred patterns." },
  { img: artist3, name: "VINNY 'CHROME'", style: "Japanese / Sleeves", spec: "Full traditional irezumi & biker flash." },
];

const SERVICES = [
  "Custom Tattoos",
  "Lettering",
  "Realism",
  "Blackwork",
  "Fine Line",
  "Japanese",
  "Piercing",
  "Cover Ups",
  "Aftercare",
];

const REVIEWS = [
  {
    name: "Aarav S.",
    handle: "@inkedaarav",
    text: "Raja did a full back piece — 18 hours, zero pain talk, pure art. The whole studio feels like a hip-hop lounge with needles.",
  },
  {
    name: "Megha K.",
    handle: "@meghadraws",
    text: "Walked in with a vague idea, walked out with a fine line piece I'll cry about forever. Cleanest spot in CR Park.",
  },
  {
    name: "Rohan B.",
    handle: "@rohanrides",
    text: "These guys GET bikers. My sleeve has chrome, flame, skulls — every detail on point. NU SKOOL is the only spot in South Delhi.",
  },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="NU SKOOL TATTOOS logo"
      className={className}
      width={120}
      height={120}
      loading="eager"
    />
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-blood/30 bg-asphalt/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <Logo className="h-12 w-12 rounded-full ring-2 ring-acid/70" />
          <div className="leading-none">
            <div className="font-display text-xl tracking-wider text-bone">NU SKOOL</div>
            <div className="font-mono text-[10px] tracking-[0.25em] text-blood">TATTOOS · DELHI</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 font-heavy text-sm uppercase tracking-widest text-dirty md:flex">
          <a href="#gallery" className="hover:text-acid">Gallery</a>
          <a href="#artists" className="hover:text-acid">Artists</a>
          <a href="#bikers" className="hover:text-acid">Bikers</a>
          <a href="#services" className="hover:text-acid">Services</a>
          <a href="#book" className="hover:text-acid">Book</a>
        </nav>
        <a
          href="#book"
          className="font-heavy uppercase tracking-widest text-xs sm:text-sm bg-blood text-bone px-4 py-2.5 border-2 border-blood hover:bg-asphalt hover:text-blood transition-colors"
        >
          Book Session
        </a>
      </div>
    </header>
  );
}

function Marquee() {
  const items = ["INK YOUR IDENTITY", "✦", "SOUTH DELHI", "✦", "STREET STREET STREET", "✦", "WALK-INS WELCOME", "✦", "RIDE · CREATE · INK", "✦", "NU SKOOL ON TOP", "✦"];
  return (
    <div className="overflow-hidden border-y-4 border-asphalt bg-acid py-4">
      <div className="flex animate-[marquee-scroll_28s_linear_infinite] whitespace-nowrap">
        {[...Array(2)].map((_, k) => (
          <div key={k} className="flex shrink-0 items-center gap-8 px-4 font-bungee text-3xl tracking-[0.1em] text-asphalt">
            {items.map((i, idx) => (
              <span key={`${k}-${idx}`}>{i}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function GraffitiBand() {
  return (
    <div
      className="relative h-32 sm:h-44 border-y-4 border-asphalt overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15,15,18,0.55), rgba(15,15,18,0.55)), url(${graffitiWall})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex items-center">
        <div className="flex animate-[marquee-scroll_35s_linear_infinite] whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-10 px-6">
              {["NU SKOOL", "★", "TATTOOS", "★", "CR PARK", "★", "DELHI", "★"].map((t, i) => (
                <span
                  key={`${k}-${i}`}
                  className="font-bungee-shade text-6xl sm:text-8xl text-acid spray-drip"
                >
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-asphalt text-bone overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen pt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Tattoo artist at work in underground studio" className="h-full w-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-b from-asphalt/40 via-asphalt/70 to-asphalt" />
          <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "var(--grain)" }} />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-end gap-8 px-4 pb-16 pt-32 sm:px-6 md:grid-cols-12">
          <div className="md:col-span-9">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="tape-strip">EST · CR PARK · GK 4</span>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-chrome">// best tattoo studio · south delhi</span>
            </div>
            <h1 className="font-heavy text-[20vw] leading-[0.82] text-bone sm:text-[15vw] md:text-[12rem] lg:text-[15rem] [text-shadow:6px_6px_0_rgba(0,0,0,0.65)]">
              INK YOUR
              <br />
              <span className="font-bungee-inline text-blood [text-shadow:8px_8px_0_var(--asphalt),12px_12px_0_var(--acid)]">
                IDENTITY
              </span>
            </h1>
            <p className="mt-8 max-w-xl font-body text-lg uppercase tracking-wider text-dirty sm:text-xl">
              Street culture. Personal stories. <span className="text-acid">Permanent art.</span>
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#book"
                className="group inline-flex items-center gap-3 bg-blood px-7 py-4 font-heavy uppercase tracking-widest text-bone shadow-[6px_6px_0_0_var(--acid)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_var(--acid)] transition-all"
              >
                Book Session <span aria-hidden>→</span>
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-3 border-2 border-bone bg-transparent px-7 py-4 font-heavy uppercase tracking-widest text-bone hover:bg-bone hover:text-asphalt transition-colors"
              >
                View Artwork
              </a>
            </div>
          </div>

          <aside className="md:col-span-3 md:justify-self-end space-y-4">
            <div className="rotate-2 border-2 border-acid bg-asphalt/80 p-4 backdrop-blur">
              <div className="font-mono text-[10px] tracking-widest text-acid">★★★★★ 5.0</div>
              <div className="mt-1 font-display text-3xl text-bone">2,400+</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-dirty">tattoos inked</div>
            </div>
            <div className="-rotate-2 border-2 border-bone bg-blood p-4">
              <div className="font-display text-3xl text-bone">12+</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-bone/80">years on the streets</div>
            </div>
          </aside>
        </div>
      </section>

      <Marquee />

      {/* GALLERY */}
      <section id="gallery" className="relative texture-concrete texture-grain texture-scratch py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] texture-halftone" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-blood">// 001 — the flash wall</span>
              <h2 className="mt-3 font-heavy text-7xl leading-[0.82] text-bone sm:text-[10rem]">
                THE <span className="font-bungee-shade text-acid">FLASH</span><br/>
                <span className="font-bungee-inline text-stroke">WALL</span>
              </h2>
              <p className="mt-4 max-w-xl font-body uppercase tracking-wider text-dirty">
                15+ pieces. Every style. Pulled straight off the studio walls — torn-down flash sheets from back alleys.
              </p>
            </div>
            <div className="font-graf text-2xl text-acid rotate-[-4deg]">scroll · slow ↓</div>
          </div>

          <div className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {GALLERY.map((g) => (
              <figure
                key={g.num}
                className={`group relative overflow-hidden border-2 border-asphalt bg-charcoal ${g.span}`}
              >
                <img
                  src={g.src}
                  alt={`${g.cat} tattoo by NU SKOOL`}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[40%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-asphalt/95 via-asphalt/10 to-transparent" />
                <figcaption className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4">
                  <div className="self-start font-mono text-[10px] tracking-widest text-acid">№ {g.num}</div>
                  <div>
                    <div className="font-display text-2xl leading-none text-bone sm:text-3xl">{g.cat}</div>
                    <div className="mt-1 h-[2px] w-0 bg-blood transition-all duration-500 group-hover:w-full" />
                  </div>
                </figcaption>
                <div className="pointer-events-none absolute -right-2 -top-2 rotate-12 bg-blood px-2 py-0.5 font-mono text-[9px] tracking-widest text-bone opacity-0 transition-opacity group-hover:opacity-100">
                  NU SKOOL
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <GraffitiBand />

      {/* ARTISTS */}
      <section id="artists" className="relative bg-asphalt py-24 sm:py-32 texture-grain">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-blood">// 002 — the roster</span>
            <h2 className="mt-3 font-heavy text-7xl leading-[0.82] text-bone sm:text-[10rem]">
              THE <span className="font-bungee text-blood">CREW</span>
            </h2>
            <p className="mt-4 max-w-xl font-body uppercase tracking-wider text-dirty">
              Three names. Three styles. One studio. Album covers, not headshots.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {ARTISTS.map((a, i) => (
              <article
                key={a.name}
                className={`group relative overflow-hidden border-2 border-bone bg-charcoal ${
                  i === 1 ? "md:translate-y-8" : ""
                }`}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={a.img} alt={a.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/30 to-transparent" />
                  <div className="absolute left-4 top-4 sticker text-xs">SIDE A</div>
                  <div className="absolute right-4 top-4 font-mono text-[10px] tracking-widest text-acid">0{i + 1} / 03</div>
                </div>
                <div className="p-5 border-t-2 border-bone">
                  <h3 className="font-display text-4xl leading-none text-bone">{a.name}</h3>
                  <div className="mt-2 font-mono text-xs uppercase tracking-widest text-blood">{a.style}</div>
                  <p className="mt-3 font-body text-dirty">{a.spec}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BIKER SECTION */}
      <section id="bikers" className="relative overflow-hidden">
        <div className="relative h-[80vh] min-h-[600px]">
          <img src={bikerImg} alt="Custom motorcycle against graffiti wall" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-asphalt via-asphalt/40 to-transparent" />
          <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: "var(--grain)" }} />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-acid">// 003 — the lifestyle</span>
              <h2 className="mt-3 font-heavy text-[16vw] leading-[0.82] text-bone sm:text-[10rem] md:text-[13rem] [text-shadow:5px_5px_0_var(--blood)]">
                RIDE.<br />
                <span className="font-bungee-inline text-blood [text-shadow:none]">CREATE.</span><br />
                <span className="font-bungee-shade text-acid [text-shadow:none]">INK.</span>
              </h2>
              <p className="mt-6 max-w-md font-body text-lg uppercase tracking-wider text-dirty">
                Chrome, leather, ink under the skin. We don't tattoo bikers — we are bikers tattooing the rest of Delhi.
              </p>
              <div className="mt-8 inline-block tape-strip text-sm">
                CHROME · LEATHER · STREET
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="texture-concrete texture-grain texture-scratch relative py-24 sm:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-blood">// 004 — the menu</span>
            <h2 className="mt-3 font-heavy text-7xl leading-[0.82] text-bone sm:text-[10rem]">
              WHAT WE <span className="font-bungee-shade text-acid">DO</span>
            </h2>
          </div>

          <ul className="grid grid-cols-2 gap-[3px] border-4 border-bone bg-bone sm:grid-cols-3">
            {SERVICES.map((s, i) => (
              <li
                key={s}
                className="group relative aspect-square overflow-hidden bg-charcoal p-5 transition-colors hover:bg-blood"
              >
                <div className="font-bungee text-sm tracking-widest text-blood group-hover:text-bone">
                  0{i + 1}
                </div>
                <div className="absolute bottom-5 left-5 right-5 font-heavy uppercase text-3xl leading-[0.85] text-bone sm:text-4xl md:text-5xl">
                  {s}
                </div>
                <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="font-graf text-2xl text-acid">→</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-asphalt py-24 sm:py-32 texture-grain">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-blood">// 005 — the word</span>
              <h2 className="mt-3 font-heavy text-7xl leading-[0.82] text-bone sm:text-[10rem]">
                ON THE <span className="font-bungee-inline text-blood">STREET</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="font-display text-6xl text-acid">5.0</div>
              <div className="font-mono text-xs uppercase tracking-widest text-dirty">
                ★★★★★<br />
                400+ reviews
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <article
                key={r.name}
                className={`relative border-2 border-bone bg-charcoal p-6 ${
                  i === 1 ? "md:-translate-y-4" : ""
                }`}
                style={{ boxShadow: i % 2 === 0 ? "6px 6px 0 var(--blood)" : "6px 6px 0 var(--acid)" }}
              >
                <div className="font-mono text-xs tracking-widest text-acid">★★★★★</div>
                <p className="mt-4 font-body text-lg text-bone leading-snug">"{r.text}"</p>
                <div className="mt-6 border-t border-bone/20 pt-4">
                  <div className="font-heavy uppercase tracking-wide text-bone">{r.name}</div>
                  <div className="font-mono text-xs text-blood">{r.handle}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="relative bg-blood py-24 sm:py-32 texture-grain">
        <div className="absolute inset-0 opacity-20 mix-blend-multiply" style={{ backgroundImage: "var(--grain)" }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] texture-halftone" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-asphalt">// 006 — the consultation</span>
            <h2 className="mt-3 font-heavy text-7xl leading-[0.82] text-bone sm:text-[10rem] [text-shadow:6px_6px_0_var(--asphalt)]">
              BOOK<br /><span className="font-bungee-shade">A SESSION.</span>
            </h2>
            <p className="mt-6 max-w-md font-body text-lg uppercase tracking-wider text-bone/80">
              Drop the details. We'll hit you back with a quote, an artist match and a slot at the shop.
            </p>
            <div className="mt-10 space-y-3 font-mono text-sm uppercase tracking-widest text-bone">
              <div>► CR PARK · GK 4 · NEW DELHI</div>
              <div>► CALL: 092050 49780</div>
              <div>► MON—SUN · 12PM TILL LATE</div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const phone = "919205049780";
              const f = new FormData(e.currentTarget);
              const msg = encodeURIComponent(
                `NU SKOOL BOOKING\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nIdea: ${f.get("idea")}\nStyle: ${f.get("style")}\nPlacement: ${f.get("placement")}\nDate: ${f.get("date")}`
              );
              window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
            }}
            className="border-2 border-asphalt bg-asphalt p-6 sm:p-8 shadow-[10px_10px_0_var(--acid)]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Phone" name="phone" placeholder="+91 …" />
              <div className="sm:col-span-2">
                <Field label="Tattoo idea" name="idea" placeholder="What's the vision?" />
              </div>
              <Field label="Style" name="style" placeholder="Realism / Blackwork / …" />
              <Field label="Placement" name="placement" placeholder="Arm / chest / back" />
              <div className="sm:col-span-2">
                <Field label="Preferred date" name="date" type="date" />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-blood px-7 py-4 font-heavy uppercase tracking-widest text-bone border-2 border-bone hover:bg-acid hover:text-asphalt transition-colors"
            >
              Send Request →
            </button>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-dirty">
              Sends to WhatsApp · we reply within the day.
            </p>
          </form>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer className="bg-asphalt pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-3 border-t-2 border-blood pt-12">
            <div className="md:col-span-1 flex items-start gap-4">
              <Logo className="h-20 w-20 rounded-full ring-2 ring-acid/60" />
              <div>
                <div className="font-display text-3xl text-bone leading-none">NU SKOOL</div>
                <div className="font-mono text-xs tracking-widest text-blood">TATTOOS · SOUTH DELHI</div>
                <p className="mt-3 font-body text-sm uppercase tracking-wider text-dirty">
                  Best tattoo & piercing studio in South Delhi.
                </p>
              </div>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-blood">// visit</div>
              <address className="mt-3 not-italic font-body text-bone text-lg leading-snug">
                Shop No.3, NRI Complex,<br />
                Mandakini Enclave Rd,<br />
                Chittaranjan Park, GK 4,<br />
                New Delhi
              </address>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-blood">// contact</div>
              <a href="tel:09205049780" className="mt-3 block font-display text-4xl text-bone hover:text-acid">
                092050 49780
              </a>
              <a
                href="https://wa.me/919205049780"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 border-2 border-bone px-4 py-2 font-heavy uppercase tracking-widest text-sm text-bone hover:bg-bone hover:text-asphalt transition-colors"
              >
                WhatsApp →
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-bone/15 pt-6 font-mono text-[10px] uppercase tracking-widest text-dirty sm:flex-row sm:items-center">
            <div>© {new Date().getFullYear()} NU SKOOL TATTOOS · ALL RIGHTS INKED</div>
            <div className="text-blood">INK YOUR IDENTITY ✦ CR PARK · DELHI</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] uppercase tracking-widest text-blood">{label}</span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full border-b-2 border-bone/40 bg-transparent py-2 font-body text-bone placeholder:text-bone/30 focus:border-acid focus:outline-none"
      />
    </label>
  );
}
