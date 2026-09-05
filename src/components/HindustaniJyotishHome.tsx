import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Languages,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { LANGUAGES, type Lang } from "@/i18n/translations";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function PennantMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="3.6" r="1.1" fill="currentColor" stroke="none" />
      <path d="M12 5v7" />
      <path
        d="M12 6.6c2.1-1.5 4.3-1.5 6 0-1.1 2-3.2 2.8-6 1.7z"
        fill="currentColor"
        stroke="none"
        opacity="0.9"
      />
    </svg>
  );
}

export function BrandLogo({ className }: { className?: string }) {
  return (
    <span className={`flex flex-col items-center leading-none ${className ?? ""}`}>
      <PennantMark className="mb-1 h-4 w-4 text-primary" />
      <span className="display-serif text-sm italic text-primary">hindustani</span>
      <span className="text-lg font-bold tracking-[0.2em] text-primary">JYOTISH</span>
    </span>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <img src="/images/logo-mark.png" alt="Hindustani Jyotish" className="h-10 w-auto shrink-0" />
      <span className="display-serif text-lg text-primary">Hindustani Jyotish</span>
    </span>
  );
}

export function HindustaniJyotishHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Credibility />
      <TrustSection />
      <Benefits />
      <Experience />
      <Registration />
      <Support />
      <Footer />
      <SiteFooter />
    </main>
  );
}

function Navigation({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  const { lang, setLang, t } = useLanguage();
  const links: Array<[string, string]> = [
    [t.nav.about, "about"],
    [t.nav.whyJoin, "trust"],
    [t.nav.benefits, "benefits"],
    [t.nav.register, "register"],
    [t.nav.contact, "contact"],
  ];

  return (
    <header className="sticky inset-x-0 top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="site-container flex h-[88px] items-center justify-between">
        <button
          className="flex items-center text-left"
          onClick={() => scrollToSection("top")}
          aria-label="Go to top"
        >
          <BrandMark />
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-sm text-muted-foreground transition hover:text-primary"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <label className="flex items-center gap-2 rounded-xl border border-border bg-card/70 px-3 py-2 text-xs">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-primary">
              <Languages size={14} />
            </span>
            <span>
              <span className="block text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                {t.nav.translate}
              </span>
              <select
                value={lang}
                onChange={(event) => setLang(event.target.value as Lang)}
                className="cursor-pointer bg-transparent text-foreground focus:outline-none"
              >
                {(Object.keys(LANGUAGES) as Lang[]).map((code) => (
                  <option key={code} value={code} className="bg-card text-foreground">
                    {LANGUAGES[code]}
                  </option>
                ))}
              </select>
            </span>
          </label>
          <Button
            onClick={() => scrollToSection("register")}
            className="h-10 bg-primary px-5 text-sm text-primary-foreground hover:bg-primary/90"
          >
            {t.nav.applyNow}
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-md border border-border md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="glass-panel mx-3 grid gap-1 p-3 md:hidden">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => {
                scrollToSection(id);
                setMenuOpen(false);
              }}
              className="rounded-md px-3 py-3 text-left text-sm text-muted-foreground hover:bg-accent hover:text-primary"
            >
              {label}
            </button>
          ))}
          <Button
            onClick={() => {
              scrollToSection("register");
              setMenuOpen(false);
            }}
            className="mt-2 bg-primary text-primary-foreground"
          >
            {t.nav.applyNow}
          </Button>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="starfield relative min-h-[780px] border-b border-border/60">
      <div className="pointer-events-none absolute left-1/2 top-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
      <div className="site-container relative grid items-center gap-12 pb-24 pt-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:pt-20">
        <div className="max-w-xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-accent/40 px-4 py-2 text-xs text-primary">
            <Sparkles size={14} /> {t.hero.badge}
          </div>
          <h1 className="display-serif text-5xl leading-[0.97] text-foreground sm:text-7xl">
            {t.hero.titlePrefix} <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">{t.hero.subtitle}</p>
          <div className="mt-7 rounded-xl border border-primary/35 bg-accent/45 px-4 py-4 text-sm leading-6 text-secondary-foreground">
            {t.hero.callout}
          </div>
          <Button
            onClick={() => scrollToSection("register")}
            className="mt-8 h-12 bg-primary px-7 text-base text-primary-foreground hover:bg-primary/90"
          >
            {t.hero.cta} <ArrowRight size={18} />
          </Button>
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-xs text-muted-foreground">
            {t.hero.bullets.map((bullet) => (
              <span key={bullet}>
                <span className="text-primary">●</span> {bullet}{" "}
              </span>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -inset-4 rounded-[2rem] bg-primary/15 blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-[1.4rem] border border-primary/35 bg-card shadow-2xl shadow-primary/10">
            <img
              src="/images/hero-astrologer-BAuBbegH.jpg"
              alt="Professional Indian astrologer holding a glowing kundli chart"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-7 -left-7 hidden w-52 rounded-xl border border-border bg-card/90 p-4 backdrop-blur sm:block">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {t.hero.cardLabel}
            </p>
            <p className="display-serif mt-2 text-xl text-primary">{t.hero.cardTitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-card/40 py-24">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative mx-auto max-w-md">
          <div className="absolute -inset-3 rounded-2xl border border-primary/25" />
          <img
            src="/images/hero-astrologer1-e3vDAjDp.jpg"
            alt="Invitation for experienced astrologers to join Hindustani Jyotish, with WhatsApp and website contact details"
            className="relative aspect-[4/5] w-full rounded-xl object-cover opacity-90"
          />
        </div>
        <div id="about-copy" className="max-w-2xl lg:pl-8">
          <p className="eyebrow">{t.credibility.eyebrow}</p>
          <h2 className="display-serif mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
            {t.credibility.titlePrefix}{" "}
            <span className="text-primary">{t.credibility.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground">{t.credibility.p1}</p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{t.credibility.p2}</p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{t.credibility.p3}</p>
          <div className="gold-rule mt-8" />
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const { t } = useLanguage();
  return (
    <section id="trust" className="py-24">
      <div className="site-container">
        <div className="section-heading">
          <p className="eyebrow">{t.trust.eyebrow}</p>
          <h2 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
            {t.trust.titlePrefix} <span className="text-primary">{t.trust.titleHighlight}</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-5">
          {t.trust.features.map((feature, index) => (
            <div key={feature.title} className="bg-card p-6">
              <div className="mb-7 text-3xl text-primary">0{index + 1}</div>
              <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-2 gap-8 border-y border-border py-8 text-center sm:grid-cols-4">
          {t.trust.stats.map(({ value, label, note }) => (
            <div key={label}>
              <p className="display-serif text-3xl text-primary sm:text-4xl">{value}</p>
              <p className="mt-2 text-xs text-foreground">{label}</p>
              {note && <p className="mt-1 text-[10px] text-muted-foreground">{note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const { t } = useLanguage();
  return (
    <section id="benefits" className="border-y border-border/60 bg-card/40 py-24">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="eyebrow">{t.benefits.eyebrow}</p>
          <h2 className="display-serif mt-4 max-w-xl text-4xl leading-tight sm:text-5xl">
            {t.benefits.titlePrefix}{" "}
            <span className="text-primary">{t.benefits.titleHighlight}</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
            {t.benefits.subtitle}
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {t.benefits.items.map(({ title, text, icon }) => (
              <div key={title} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/40 bg-accent text-lg text-primary">
                  {icon}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl" />
          <img
            src="/images/spiritual-scene1-BiLDdiyU.jpg"
            alt="Experienced astrologer? Join Hindustani Jyotish — no binding, flexible hours, earn by consulting online"
            className="relative aspect-[4/5] w-full rounded-2xl border border-primary/30 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const { t } = useLanguage();
  const images = [
    "/images/consultation-scene-Bd8emxpy.jpg",
    "/images/kundli-chart-crrZzjKE.jpg",
    "/images/app-mockup-CovNOIci.jpg",
    "/images/spiritual-scene-Zf40DMDI.jpg",
  ];
  return (
    <section className="py-24">
      <div className="site-container">
        <div className="section-heading">
          <p className="eyebrow">{t.experience.eyebrow}</p>
          <h2 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
            {t.experience.titlePrefix}{" "}
            <span className="text-primary">{t.experience.titleHighlight}</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.experience.items.map((title, index) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-border"
            >
              <img
                src={images[index]}
                alt={title}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent px-5 pb-5 pt-14">
                <p className="text-sm font-medium text-foreground">{title}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-14 text-center text-sm text-muted-foreground">{t.experience.footer}</p>
      </div>
    </section>
  );
}

function Registration() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    experience: "",
    expertise: "",
    languages: "",
    bio: "",
  });
  const { t } = useLanguage();
  const update = (key: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <section id="register" className="border-y border-border/60 bg-card/40 py-24">
      <div className="site-container grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <p className="eyebrow">{t.registration.eyebrow}</p>
          <h2 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
            {t.registration.titlePrefix}{" "}
            <span className="text-primary">{t.registration.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            {t.registration.subtitle}
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-secondary-foreground">
            <Check size={18} className="text-primary" /> {t.registration.verified}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">{t.registration.hindiLabel}</p>
        </div>
        <div className="glass-panel rounded-2xl p-5 sm:p-8">
          {submitted ? (
            <div className="grid min-h-[520px] place-items-center text-center">
              <div>
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check size={30} />
                </span>
                <h3 className="display-serif mt-7 text-3xl text-foreground">
                  {t.registration.successTitle}
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                  {t.registration.successText}
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-7 border-border"
                >
                  {t.registration.resubmit}
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
              <Field label={t.registration.fields.name} required>
                <input
                  className="form-field"
                  required
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  placeholder={t.registration.placeholders.name}
                />
              </Field>
              <Field label={t.registration.fields.phone} required>
                <input
                  className="form-field"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  placeholder={t.registration.placeholders.phone}
                />
              </Field>
              <Field label={t.registration.fields.email} required>
                <input
                  className="form-field"
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  placeholder={t.registration.placeholders.email}
                />
              </Field>
              <Field label={t.registration.fields.location} required>
                <input
                  className="form-field"
                  required
                  value={form.location}
                  onChange={(event) => update("location", event.target.value)}
                  placeholder={t.registration.placeholders.location}
                />
              </Field>
              <Field label={t.registration.fields.experience} required>
                <select
                  className="form-field"
                  required
                  value={form.experience}
                  onChange={(event) => update("experience", event.target.value)}
                >
                  <option value="">{t.registration.placeholders.experience}</option>
                  {t.registration.experienceOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </Field>
              <Field label={t.registration.fields.expertise} required>
                <select
                  className="form-field"
                  required
                  value={form.expertise}
                  onChange={(event) => update("expertise", event.target.value)}
                >
                  <option value="">{t.registration.placeholders.expertise}</option>
                  {t.registration.expertiseOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </Field>
              <Field label={t.registration.fields.languages}>
                <input
                  className="form-field"
                  value={form.languages}
                  onChange={(event) => update("languages", event.target.value)}
                  placeholder={t.registration.placeholders.languages}
                />
              </Field>
              <Field label={t.registration.fields.consultationType}>
                <div className="grid grid-cols-3 gap-2">
                  {t.registration.consultationOptions.map((item) => (
                    <label className="choice-pill text-xs" key={item}>
                      <input type="checkbox" />
                      {item}
                    </label>
                  ))}
                </div>
              </Field>
              <Field label={t.registration.fields.availableTime}>
                <select className="form-field" defaultValue={t.registration.timeOptions[3]}>
                  {t.registration.timeOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </Field>
              <Field label={t.registration.fields.bio} className="sm:col-span-2">
                <textarea
                  className="form-field min-h-28 resize-y"
                  value={form.bio}
                  onChange={(event) => update("bio", event.target.value)}
                  placeholder={t.registration.placeholders.bio}
                />
              </Field>
              <Button
                type="submit"
                className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 sm:col-span-2"
              >
                {t.registration.submit} <ArrowRight size={18} />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={className}>
      <span className="field-label">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      {children}
    </label>
  );
}

function Support() {
  const { t } = useLanguage();
  const cards = t.support.cards.map((card, index) => ({
    ...card,
    href: ["tel:8693869869", "https://wa.me/918693869869", "mailto:Email@hindustanijyotish.com"][
      index
    ],
  }));
  return (
    <section id="contact" className="py-24">
      <div className="site-container">
        <div className="section-heading">
          <p className="eyebrow">{t.support.eyebrow}</p>
          <h2 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
            {t.support.titlePrefix} <span className="text-primary">{t.support.titleHighlight}</span>
          </h2>
          <p className="mt-5 text-muted-foreground">{t.support.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {cards.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              className="glass-panel rounded-xl p-6 transition hover:-translate-y-1 hover:border-primary/70"
            >
              <p className="eyebrow text-[10px]">{label}</p>
              <p className="mt-3 text-sm text-foreground">{value}</p>
            </a>
          ))}
        </div>
        <div className="mt-8 border-t border-border pt-7 text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {t.support.officeLabel}
          </p>
          <p className="mt-3 text-sm leading-6 text-secondary-foreground">
            {t.support.officeAddress[0]}
            <br />
            {t.support.officeAddress[1]}
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-primary/20 bg-card/50 py-16">
      <div className="site-container text-center">
        <p className="eyebrow">{t.footerCta.eyebrow}</p>
        <h2 className="display-serif mx-auto mt-5 max-w-2xl text-4xl leading-tight text-foreground sm:text-5xl">
          {t.footerCta.titlePrefix}{" "}
          <span className="text-primary">{t.footerCta.titleHighlight}</span>{" "}
          {t.footerCta.titleSuffix}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
          {t.footerCta.subtitle}
        </p>
        <Button
          onClick={() => scrollToSection("register")}
          className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {t.footerCta.cta} <ArrowRight size={18} />
        </Button>
        <p className="mt-14 text-xs text-muted-foreground">{t.footerCta.copyright}</p>
      </div>
    </footer>
  );
}

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="site-container grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <BrandMark />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
            {t.siteFooter.tagline}
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a href="https://jyotishionline.com" className="text-primary hover:underline">
              {t.siteFooter.product}
            </a>
            <p className="text-primary">{t.siteFooter.poweredBy}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">{t.siteFooter.company}</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <li>
              <button onClick={() => scrollToSection("about")} className="hover:text-primary">
                {t.siteFooter.aboutUs}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-primary">
                {t.siteFooter.contact}
              </button>
            </li>
            <li>
              <a href="/privacy" className="hover:text-primary">
                {t.siteFooter.privacy}
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-primary">
                {t.siteFooter.terms}
              </a>
            </li>
            <li>
              <a href="/astrologer-terms" className="hover:text-primary">
                {t.siteFooter.astrologerTerms}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">{t.siteFooter.support}</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <li>
              <a href="tel:8693869869" className="flex items-center gap-2 hover:text-primary">
                <Phone size={15} className="text-primary" /> 869-3-869-869
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/918693869869"
                className="flex items-center gap-2 hover:text-primary"
              >
                <MessageCircle size={15} className="text-primary" /> {t.siteFooter.whatsappSupport}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        {t.siteFooter.copyright}
      </div>
    </footer>
  );
}
