import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Check, Menu, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  ["Work Anytime, Anywhere", "Total flexibility — your time, your terms.", "◌"],
  ["High Income Opportunity", "Premium pricing for verified experts.", "↗"],
  ["Direct Client Interaction", "Build your own loyal client base.", "◉"],
  ["Easy-to-Use Dashboard", "Manage everything in one place.", "▦"],
  ["No Middlemen", "Keep more of what you earn.", "◇"],
];

const features = [
  ["Verified & Growing User Base", "Real, paying clients seeking trusted astrologers."],
  ["Instant Chat, Voice & Video", "Multiple consultation modes — your choice."],
  ["Flexible Working Hours", "Work whenever it suits your schedule."],
  ["Secure & Private Platform", "End-to-end encrypted sessions for peace of mind."],
  ["Pan India Reach", "Connect with clients from every state."],
];

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

function BrandLogo({ className }: { className?: string }) {
  return (
    <span className={`flex flex-col items-center leading-none ${className ?? ""}`}>
      <PennantMark className="mb-1 h-4 w-4 text-primary" />
      <span className="display-serif text-sm italic text-primary">hindustani</span>
      <span className="text-lg font-bold tracking-[0.2em] text-primary">JYOTISH</span>
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
  const links: Array<[string, string]> = [
    ["About", "about"],
    ["Why Join", "trust"],
    ["Benefits", "benefits"],
    ["Register", "register"],
    ["Contact", "contact"],
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="site-container flex h-[88px] items-center justify-between">
        <button
          className="flex items-center text-left"
          onClick={() => scrollToSection("top")}
          aria-label="Go to top"
        >
          <BrandLogo />
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
          <div className="flex items-center gap-2 rounded-xl border border-border bg-card/70 px-3 py-2 text-xs">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-primary">
              文
            </span>
            <span>
              <span className="block text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                Translate
              </span>
              English⌄
            </span>
          </div>
          <Button
            onClick={() => scrollToSection("register")}
            className="h-10 bg-primary px-5 text-sm text-primary-foreground hover:bg-primary/90"
          >
            Apply Now
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
            Apply Now
          </Button>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="starfield relative min-h-[780px] border-b border-border/60 pt-28">
      <div className="pointer-events-none absolute left-1/2 top-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
      <div className="site-container relative grid items-center gap-12 pb-24 pt-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:pt-20">
        <div className="max-w-xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-accent/40 px-4 py-2 text-xs text-primary">
            <Sparkles size={14} /> India’s Next Big Astrology Platform
          </div>
          <h1 className="display-serif text-5xl leading-[0.97] text-foreground sm:text-7xl">
            India&apos;s Next Big <span className="text-primary">Astrology Platform</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">
            Join Hindustani Jyotish and connect with thousands of users across India.
          </p>
          <div className="mt-7 rounded-xl border border-primary/35 bg-accent/45 px-4 py-4 text-sm leading-6 text-secondary-foreground">
            👉 From the makers of Jyotishi Online — a successful astrology platform trusted by
            thousands in Kerala.
          </div>
          <Button
            onClick={() => scrollToSection("register")}
            className="mt-8 h-12 bg-primary px-7 text-base text-primary-foreground hover:bg-primary/90"
          >
            Apply as Astrologer <ArrowRight size={18} />
          </Button>
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-xs text-muted-foreground">
            <span className="text-primary">●</span> No Appointment System{" "}
            <span className="text-primary">●</span> Instant Client Access{" "}
            <span className="text-primary">●</span> High Earnings Potential
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
              A trusted beginning
            </p>
            <p className="display-serif mt-2 text-xl text-primary">Your gift. Your reach.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Credibility() {
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
          <p className="eyebrow">Credibility</p>
          <h2 className="display-serif mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
            Built by the Team Behind a <span className="text-primary">Proven Success</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            Hindustani Jyotish is developed by the same team behind Jyotishi Online, one of
            Kerala&apos;s fastest-growing astrology platforms.
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            With thousands of users, hundreds of astrologers, and a strong presence in South India,
            the platform has already proven its success.
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            We are now expanding across India to create a trusted, professional, and high-earning
            ecosystem for astrologers.
          </p>
          <div className="gold-rule mt-8" />
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section id="trust" className="py-24">
      <div className="site-container">
        <div className="section-heading">
          <p className="eyebrow">Trust</p>
          <h2 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
            Why Join <span className="text-primary">Hindustani Jyotish?</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-5">
          {features.map(([title, text], index) => (
            <div key={title} className="bg-card p-6">
              <div className="mb-7 text-3xl text-primary">0{index + 1}</div>
              <h3 className="text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-2 gap-8 border-y border-border py-8 text-center sm:grid-cols-4">
          {[
            ["500+", "Astrologers Onboard", "(Jyotishi Online)"],
            ["15,000+", "App Downloads", ""],
            ["1000s", "Trusted Users in Kerala", ""],
            ["Pan India", "Now Expanding", ""],
          ].map(([value, label, note]) => (
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
  return (
    <section id="benefits" className="border-y border-border/60 bg-card/40 py-24">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="eyebrow">Benefits</p>
          <h2 className="display-serif mt-4 max-w-xl text-4xl leading-tight sm:text-5xl">
            Everything You Need to <span className="text-primary">Grow Your Practice</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
            A modern platform built for serious astrologers who want freedom, fairness, and real
            income.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {benefits.map(([title, text, icon]) => (
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
  const items = [
    ["Phone & Video Consultations", "/images/consultation-scene-Bd8emxpy.jpg"],
    ["Vedic Kundli Tools", "/images/kundli-chart-crrZzjKE.jpg"],
    ["Modern Mobile App", "/images/app-mockup-CovNOIci.jpg"],
    ["Sacred Vedic Heritage", "/images/spiritual-scene-Zf40DMDI.jpg"],
  ];
  return (
    <section className="py-24">
      <div className="site-container">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
            A Platform Crafted with <span className="text-primary">Devotion</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([title, src]) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-border"
            >
              <img
                src={src}
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
        <p className="mt-14 text-center text-sm text-muted-foreground">
          👉 Join a platform built by the successful Jyotishi Online Kerala team
        </p>
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
          <p className="eyebrow">Astrologer Registration</p>
          <h2 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
            Your next chapter begins <span className="text-primary">here.</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            Share your details and our team will get in touch to verify your profile and help you
            get started.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-secondary-foreground">
            <Check size={18} className="text-primary" /> All astrologer profiles are verified before
            approval.
          </div>
          <p className="mt-5 text-sm text-muted-foreground">ज्योतिषी पंजीकरण</p>
        </div>
        <div className="glass-panel rounded-2xl p-5 sm:p-8">
          {submitted ? (
            <div className="grid min-h-[520px] place-items-center text-center">
              <div>
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check size={30} />
                </span>
                <h3 className="display-serif mt-7 text-3xl text-foreground">
                  Application received
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                  Thank you for applying. Our team will review your details and contact you soon.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-7 border-border"
                >
                  Submit another application
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" required>
                <input
                  className="form-field"
                  required
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  placeholder="Your full name"
                />
              </Field>
              <Field label="Mobile Number" required>
                <input
                  className="form-field"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  placeholder="+91 00000 00000"
                />
              </Field>
              <Field label="Email Address" required>
                <input
                  className="form-field"
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="City & State" required>
                <input
                  className="form-field"
                  required
                  value={form.location}
                  onChange={(event) => update("location", event.target.value)}
                  placeholder="City, State"
                />
              </Field>
              <Field label="Years of Experience" required>
                <select
                  className="form-field"
                  required
                  value={form.experience}
                  onChange={(event) => update("experience", event.target.value)}
                >
                  <option value="">Select experience</option>
                  {["0–1 years", "1–3 years", "3–5 years", "5–10 years", "10+ years"].map(
                    (item) => (
                      <option key={item}>{item}</option>
                    ),
                  )}
                </select>
              </Field>
              <Field label="Primary Expertise" required>
                <select
                  className="form-field"
                  required
                  value={form.expertise}
                  onChange={(event) => update("expertise", event.target.value)}
                >
                  <option value="">Select expertise</option>
                  {["Vedic Astrology", "Tarot", "Numerology", "Palmistry", "Vastu", "Others"].map(
                    (item) => (
                      <option key={item}>{item}</option>
                    ),
                  )}
                </select>
              </Field>
              <Field label="Languages">
                <input
                  className="form-field"
                  value={form.languages}
                  onChange={(event) => update("languages", event.target.value)}
                  placeholder="Hindi, English, Malayalam"
                />
              </Field>
              <Field label="Consultation Type">
                <div className="grid grid-cols-3 gap-2">
                  {["Chat", "Voice", "Video"].map((item) => (
                    <label className="choice-pill text-xs" key={item}>
                      <input type="checkbox" />
                      {item}
                    </label>
                  ))}
                </div>
              </Field>
              <Field label="Available Time">
                <select className="form-field" defaultValue="Flexible">
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                  <option>Flexible</option>
                </select>
              </Field>
              <Field label="Short Bio" className="sm:col-span-2">
                <textarea
                  className="form-field min-h-28 resize-y"
                  value={form.bio}
                  onChange={(event) => update("bio", event.target.value)}
                  placeholder="Tell us a little about your practice..."
                />
              </Field>
              <Button
                type="submit"
                className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 sm:col-span-2"
              >
                Apply Now <ArrowRight size={18} />
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
  return (
    <section id="contact" className="py-24">
      <div className="site-container">
        <div className="section-heading">
          <p className="eyebrow">Support</p>
          <h2 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
            Need Help? <span className="text-primary">Contact Us</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Our support team is available to assist you with registration and onboarding.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            ["Call Center", "869-3-869-869", "tel:8693869869"],
            ["WhatsApp", "869-3-869-869", "https://wa.me/918693869869"],
            ["Email", "Email@hindustanijyotish.com", "mailto:Email@hindustanijyotish.com"],
          ].map(([label, value, href]) => (
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
            Office Address
          </p>
          <p className="mt-3 text-sm leading-6 text-secondary-foreground">
            Ideal Enclave, Bhayander
            <br />
            Mumbai, Thane – 401105
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-card/50 py-16">
      <div className="site-container text-center">
        <p className="eyebrow">Completely Different</p>
        <h2 className="display-serif mx-auto mt-5 max-w-2xl text-4xl leading-tight text-foreground sm:text-5xl">
          Be Part of India&apos;s <span className="text-primary">Fastest Growing</span> Astrology
          Network
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
          Thousands of clients are waiting. Your practice deserves a platform built for trust and
          growth.
        </p>
        <Button
          onClick={() => scrollToSection("register")}
          className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Start Your Journey Today <ArrowRight size={18} />
        </Button>
        <p className="mt-14 text-xs text-muted-foreground">
          © 2026 Hindustani Jyotish. Built with devotion.
        </p>
      </div>
    </footer>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="site-container grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-card text-[9px] font-bold leading-none text-primary">
              JYOTISH
            </span>
            <span className="display-serif text-lg text-primary">Hindustani Jyotish</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
            India&apos;s next premium astrology platform — built by the team behind Jyotishi Online.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a href="https://jyotishionline.com" className="text-primary hover:underline">
              👉 A product by the creators of Jyotishi Online
            </a>
            <p className="text-primary">
              👉 Powered by Completely Different (Mumbai &amp; Bangkok)
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Company</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <li>
              <button onClick={() => scrollToSection("about")} className="hover:text-primary">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-primary">
                Contact
              </button>
            </li>
            <li>
              <a href="/privacy" className="hover:text-primary">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Support</p>
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
                <MessageCircle size={15} className="text-primary" /> WhatsApp Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © 2026 Hindustani Jyotish. All rights reserved.
      </div>
    </footer>
  );
}
