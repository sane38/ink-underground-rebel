import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/nuskool-logo.asset.json";
import heroImg from "@/assets/hero-tattoo.jpg";
import bikerImg from "@/assets/biker.jpg";
import graffitiWall from "@/assets/graffiti-wall.jpg";
import akshitAsset from "@/assets/artists/akshit.jpeg.asset.json";
import chintuAsset from "@/assets/artists/chintu.png.asset.json";
import mumbaAsset from "@/assets/artists/mumba.jpeg.asset.json";
import sahebAsset from "@/assets/artists/saheb.jpeg.asset.json";
import sarthakAsset from "@/assets/artists/sarthak.png.asset.json";
import vishalAsset from "@/assets/artists/vishal.png.asset.json";
import sohaibAsset from "@/assets/artists/sohaib.jpeg.asset.json";
import workSkull from "@/assets/work/work-skull.jpeg.asset.json";
import workSamurai from "@/assets/work/work-samurai.jpeg.asset.json";
import workPagoda from "@/assets/work/work-pagoda.jpeg.asset.json";
import workWheel from "@/assets/work/work-wheel.jpeg.asset.json";
import workBallerina from "@/assets/work/work-ballerina.jpeg.asset.json";
import workCompass from "@/assets/work/work-compass.jpeg.asset.json";
import workDragonWing from "@/assets/work/work-dragon-wing.jpeg.asset.json";
import workLotus from "@/assets/work/work-lotus.jpeg.asset.json";
import workDragonYy from "@/assets/work/work-dragon-yinyang.jpeg.asset.json";
import workCross from "@/assets/work/work-cross.jpeg.asset.json";
import mokoLogo from "@/assets/collabs/moko.jpeg.asset.json";
import ornixLogo from "@/assets/collabs/ornix.jpeg.asset.json";

const STUDIO_IG = "https://www.instagram.com/nu_skool_tattoos?igsh=MXUybnJtNHIwcXBiNQ==";

function IgIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ig-graf-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--acid)" />
          <stop offset="45%" stopColor="var(--burnt)" />
          <stop offset="100%" stopColor="var(--blood)" />
        </linearGradient>
      </defs>
      {/* hard offset drop shadow */}
      <rect x="5" y="6" width="24" height="24" rx="7" fill="var(--asphalt)" />
      {/* main sticker */}
      <rect x="3" y="3" width="24" height="24" rx="7" fill="url(#ig-graf-grad)" stroke="var(--bone)" strokeWidth="2.2" />
      {/* lens */}
      <circle cx="15" cy="15" r="6.2" fill="none" stroke="var(--bone)" strokeWidth="2.6" />
      <circle cx="15" cy="15" r="2.6" fill="var(--bone)" />
      {/* flash dot */}
      <circle cx="22" cy="8.5" r="1.9" fill="var(--bone)" stroke="var(--asphalt)" strokeWidth="0.8" />
    </svg>
  );
}

function FollowChip({ label = "FOLLOW @NU_SKOOL_TATTOOS", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={STUDIO_IG}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Follow NU SKOOL TATTOOS on Instagram"
      className={`group inline-flex items-center gap-2 border-2 border-bone bg-asphalt px-3 py-1.5 font-heavy uppercase tracking-widest text-[11px] text-bone shadow-[4px_4px_0_var(--blood)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--acid)] hover:text-acid ${className}`}
    >
      <IgIcon className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
}

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
  { src: workSkull.url, cat: "Reaper & Serpent", num: "01" },
  { src: workSamurai.url, cat: "Samurai Sleeve", num: "02" },
  { src: workPagoda.url, cat: "Pagoda / Japanese", num: "03" },
  { src: workWheel.url, cat: "Dharma Wheel", num: "04" },
  { src: workCompass.url, cat: "Compass & World", num: "05" },
  { src: workDragonYy.url, cat: "Dragon & Yin Yang", num: "06" },
  { src: workDragonWing.url, cat: "Fine Line Dragon", num: "07" },
  { src: workCross.url, cat: "Gothic Cross", num: "08" },
  { src: workBallerina.url, cat: "Ink Silhouette", num: "09" },
  { src: workLotus.url, cat: "Fine Line Lotus", num: "10" },
];

const ARTISTS = [
  { img: sohaibAsset.url, name: "SOHAIB", style: "Lettering / Graffiti", spec: "Streetwear, graffiti scripts, knuckle tats.", ig: "https://www.instagram.com/tattoosbyshoaib?igsh=MWNlazBzY2tpaHR2bA%3D%3D&utm_source=qr" },
  { img: sahebAsset.url, name: "SAHEB", style: "Traditional / Bold", spec: "Old school flash, bold lines, biker culture.", ig: "https://www.instagram.com/sahebhore?utm_source=qr&igsh=MXIwdHQwc2RrOTdyNg==" },
  { img: akshitAsset.url, name: "AKSHIT", style: "Founder / Realism", spec: "Head honcho. Black & grey, portraits, full sleeves.", ig: "https://www.instagram.com/35siyahi?utm_source=qr" },
  { img: chintuAsset.url, name: "CHINTU", style: "Fine Line / Script", spec: "Single needle precision. Lettering & micro work.", ig: "https://www.instagram.com/tattoosbychink?igsh=bjZidG04M3F5Zmxw" },
  { img: mumbaAsset.url, name: "MUMBA", style: "Ornamental / Mandala", spec: "Geometric mandalas, dotwork, sacred patterns.", ig: "https://www.instagram.com/suprio1999?igsh=MWdzeHpsMGxpcjdleA==" },
  { img: sarthakAsset.url, name: "SARTHAK", style: "Blackwork / Illustrative", spec: "Heavy black, dark illustrative, neo-traditional.", ig: "https://www.instagram.com/guywithinkk?igsh=MTY4czRoaTltandiZw%3D%3D&utm_source=qr" },
  { img: vishalAsset.url, name: "VISHAL", style: "Japanese / Color", spec: "Irezumi, color realism, full back pieces.", ig: "https://www.instagram.com/ink_z_tattoos?utm_source=qr" },
];

const COLLABS = [
  {
    name: "MOKO",
    tag: "TATTOO AFTERCARE",
    note: "Official aftercare partner · balm, wash & healing kits.",
    logo: mokoLogo.url,
    url: "https://mokocare.com/",
  },
  {
    name: "ORNIX",
    tag: "JEWELRY / PIERCING",
    note: "Premium piercing jewelry · adorn your edge.",
    logo: ornixLogo.url,
    url: "https://www.instagram.com/ornixx.jewels",
  },
];

const SERVICES = [
  { name: "Custom Tattoos", desc: "One-of-one designs built around your story, drawn from scratch by the crew." },
  { name: "Fine Line Tattoos", desc: "Single-needle precision. Delicate script, micro portraits, minimal linework." },
  { name: "Black & Grey", desc: "Smooth gradients, deep shadows, realism and portrait work in classic B&G." },
  { name: "Color Tattoos", desc: "Bold saturated palettes — neo-traditional, Japanese and illustrative color." },
  { name: "Cover Ups", desc: "Transforming old ink into fresh art. Bring the regret, leave with a masterpiece." },
  { name: "Tattoo Consultation", desc: "Sit-down sessions to shape the concept, placement, size and artist match." },
  { name: "Piercing", desc: "Sterile, single-use setups. Ears, nose, septum, body — premium jewelry included." },
  { name: "Aftercare Guidance", desc: "Full healing playbook + Moko-partnered products so the ink lands right." },
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
          className="label-tag label-tag-hover text-[11px] sm:text-sm !bg-blood !text-bone !border-bone whitespace-nowrap !px-3 !py-2 sm:!px-4 sm:!py-2.5"
        >
            ◤ <span className="sm:hidden">Book</span><span className="hidden sm:inline">Book Session</span>
        </a>
          <a
            href={STUDIO_IG}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="NU SKOOL TATTOOS on Instagram"
            className="ml-2 hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-bone text-bone hover:bg-blood hover:border-acid hover:text-bone transition-all duration-300 hover:-translate-y-0.5"
          >
            <IgIcon className="h-4 w-4" />
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
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.3em] text-chrome break-words max-w-full">// best tattoo studio · south delhi</span>
            </div>
            <h1 className="font-heavy text-[13vw] leading-[0.82] text-bone sm:text-[15vw] md:text-[12rem] lg:text-[15rem] [text-shadow:6px_6px_0_rgba(0,0,0,0.65)] break-words">
              INK YOUR
              <br />
              <span className="font-bungee-inline text-blood [text-shadow:4px_4px_0_var(--asphalt),8px_8px_0_var(--acid)] sm:[text-shadow:8px_8px_0_var(--asphalt),12px_12px_0_var(--acid)]">
                IDENTITY
              </span>
            </h1>
            <p className="mt-8 max-w-xl font-body text-lg uppercase tracking-wider text-dirty sm:text-xl">
              Street culture. Personal stories. <span className="text-acid">Permanent art.</span>
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#book"
                className="label-tag label-tag-hover !bg-blood !text-bone !border-bone text-base px-7 py-4"
              >
                ◤ Book Session →
              </a>
              <a
                href="#gallery"
                className="label-tag label-tag-hover !bg-asphalt !text-bone !border-bone text-base px-7 py-4"
              >
                ◤ View Artwork
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

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {GALLERY.map((g) => (
              <figure
                key={g.num}
                className="group relative overflow-hidden rounded-md border-2 border-asphalt bg-charcoal aspect-[3/4] shadow-[6px_6px_0_var(--asphalt)] hover:shadow-[8px_8px_0_var(--blood)] transition-shadow"
              >
                <img
                  src={g.src}
                  alt={`${g.cat} tattoo by NU SKOOL`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover scale-[1.12] transition-transform duration-700 ease-out group-hover:scale-[1.22]"
                  style={{ filter: "contrast(1.08) saturate(1.05) brightness(1.02)" }}
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
      <section id="artists" className="relative leather-bg py-24 sm:py-32 texture-grain texture-scratch">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 relative ink-splat">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-blood">// 002 — the roster</span>
            <h2 className="mt-3 font-heavy text-7xl leading-[0.82] text-bone sm:text-[10rem]">
              THE <span className="font-bungee text-blood">CREW</span>
            </h2>
            <p className="mt-4 max-w-xl font-body uppercase tracking-wider text-dirty">
              Seven artists. Seven styles. One underground studio. Real people. Real ink.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ARTISTS.map((a, i) => (
              <article
                key={a.name}
                className={`group relative overflow-hidden rounded-md border-2 border-bone bg-charcoal transition-all duration-300 hover:-translate-y-1.5 hover:rotate-[-0.6deg] hover:shadow-[10px_10px_0_var(--blood)] ${
                  i % 3 === 1 ? "lg:translate-y-6" : i % 3 === 2 ? "lg:-translate-y-3" : ""
                }`}
                style={{ boxShadow: i % 2 === 0 ? "6px 6px 0 var(--blood)" : "6px 6px 0 var(--acid)" }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top scale-[1.05] transition-transform duration-700 group-hover:scale-[1.12]"
                    style={{ filter: "contrast(1.06) saturate(1.05) brightness(1.02)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/30 to-transparent" />
                  <div className="absolute right-3 top-3 font-mono text-[10px] tracking-widest text-acid bg-asphalt/80 px-2 py-1 border border-acid/60">
                    0{i + 1} / 0{ARTISTS.length}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="font-bungee text-3xl text-bone leading-none [text-shadow:3px_3px_0_var(--blood)]">{a.name}</div>
                  </div>
                </div>
                <div className="p-4 border-t-2 border-bone bg-asphalt flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-acid">▸ {a.style}</div>
                    <p className="mt-2 font-body text-sm text-dirty uppercase tracking-wide leading-snug">{a.spec}</p>
                  </div>
                  <a
                    href={a.ig}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${a.name} on Instagram`}
                    className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-bone text-bone bg-asphalt transition-all duration-300 hover:bg-blood hover:border-acid hover:text-bone hover:scale-110 hover:-rotate-6"
                  >
                    <IgIcon className="h-5 w-5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND COLLABORATIONS */}
      <section id="collab" className="relative overflow-hidden border-y-4 border-bone bg-asphalt py-20 sm:py-24 texture-grain">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] texture-halftone" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-acid">// official partners</span>
              <h2 className="mt-2 font-heavy text-5xl leading-[0.85] text-bone sm:text-7xl md:text-8xl">
                BRAND <span className="font-bungee-shade text-blood">COLLABORATIONS</span>
              </h2>
              <p className="mt-4 max-w-xl font-body uppercase tracking-wider text-dirty text-sm">
                Co-signed by the brands we ride with.
              </p>
            </div>
            <div className="font-graf text-2xl text-acid rotate-[-3deg]">co-signed ↓</div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {COLLABS.map((c, i) => (
              <article
                key={c.name}
                className={`group relative overflow-hidden border-2 border-bone bg-charcoal p-7 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 ${
                  i === 1 ? "md:translate-y-4" : ""
                }`}
                style={{ boxShadow: i === 0 ? "8px 8px 0 var(--blood)" : "8px 8px 0 var(--acid)" }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-[0.12] texture-halftone" />
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="shrink-0 h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border-2 border-bone bg-asphalt ring-2 ring-acid/40 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] tracking-[0.3em] text-acid uppercase">collab № 00{i + 1}</div>
                    <div className="mt-2 font-bungee-inline text-4xl sm:text-5xl chrome-text leading-none">
                      {c.name}
                    </div>
                    <div className="mt-3 sticker text-[10px]">{c.tag}</div>
                    <p className="mt-4 font-body uppercase tracking-wider text-dirty text-sm leading-snug">{c.note}</p>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="label-tag label-tag-hover mt-5 !bg-blood !text-bone !border-bone text-xs"
                    >
                      ◤ Visit →
                    </a>
                  </div>
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

          <ul className="divide-y-2 divide-bone/15 border-y-2 border-bone/25">
            {SERVICES.map((s, i) => (
              <li
                key={s.name}
                className="group grid grid-cols-12 items-baseline gap-4 py-6 sm:py-8 transition-colors"
              >
                <div className="col-span-2 sm:col-span-1 font-mono text-xs tracking-widest text-blood pt-2">
                  0{i + 1}
                </div>
                <div className="col-span-10 sm:col-span-6">
                  <h3 className="font-bungee text-3xl sm:text-5xl md:text-6xl leading-[0.9] text-bone group-hover:text-acid transition-colors [text-shadow:3px_3px_0_var(--blood)]">
                    {s.name}
                  </h3>
                </div>
                <div className="col-span-12 sm:col-span-5 sm:pl-6 sm:border-l-2 sm:border-bone/20">
                  <p className="font-body uppercase tracking-wider text-dirty text-sm sm:text-base leading-snug">
                    {s.desc}
                  </p>
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
      <section id="book" className="relative overflow-hidden bg-blood py-20 sm:py-28 texture-grain">
        <div className="absolute inset-0 opacity-20 mix-blend-multiply" style={{ backgroundImage: "var(--grain)" }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] texture-halftone" />
        <div className="relative mx-auto grid max-w-7xl gap-10 md:gap-12 px-4 sm:px-6 md:grid-cols-2">
          <div className="min-w-0">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-asphalt">// 006 — the consultation</span>
            <h2 className="mt-3 font-heavy leading-[0.85] text-bone [text-shadow:4px_4px_0_var(--asphalt)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl sm:whitespace-nowrap break-words">
              BOOK <span className="font-bungee-shade">SESSION.</span>
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
              className="label-tag label-tag-hover mt-6 w-full justify-center !bg-acid !text-asphalt !border-asphalt"
            >
              ◤ Send Request →
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
              <a
                href="https://maps.app.goo.gl/giQfyBzKxu6Y9kb28"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-block font-mono text-[10px] uppercase tracking-widest text-acid hover:text-bone"
              >
                ► Open in Google Maps
              </a>
              <div className="mt-4 overflow-hidden border-2 border-bone shadow-[6px_6px_0_var(--blood)]">
                <iframe
                  title="NU SKOOL TATTOOS location on Google Maps"
                  src="https://www.google.com/maps?q=Nu+Skool+Tattoos,+Shop+No.3,+NRI+Complex,+Mandakini+Enclave+Rd,+Chittaranjan+Park,+GK+4,+New+Delhi&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
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
              <a
                href={STUDIO_IG}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="NU SKOOL TATTOOS on Instagram"
                className="mt-3 ml-2 inline-flex items-center gap-2 border-2 border-bone px-4 py-2 font-heavy uppercase tracking-widest text-sm text-bone hover:bg-blood hover:border-acid transition-all duration-300 hover:-translate-y-0.5"
              >
                <IgIcon className="h-4 w-4" /> Instagram
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-bone/15 pt-6 font-mono text-[10px] uppercase tracking-widest text-dirty sm:flex-row sm:items-center">
            <div>© {new Date().getFullYear()} NU SKOOL TATTOOS · ALL RIGHTS INKED</div>
            <div className="flex items-center gap-3">
              <a
                href={STUDIO_IG}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-bone/40 text-bone hover:text-acid hover:border-acid transition-colors"
              >
                <IgIcon className="h-4 w-4" />
              </a>
              <span className="text-blood">INK YOUR IDENTITY ✦ CR PARK · DELHI</span>
            </div>
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
