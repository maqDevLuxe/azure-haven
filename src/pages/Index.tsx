import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import { useCountUp } from "@/hooks/useCountUp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Globe, Plane, Anchor, TrendingUp, Lock, Eye, Award } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/* ── 1. Hero ─────────────────────────────────────────── */
const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=85')",
      }}
    />
    <div className="absolute inset-0 bg-ocean-deep/50" />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="relative z-10 text-center max-w-4xl px-6"
    >
      <span className="text-xs tracking-[0.4em] uppercase text-primary-foreground/60 font-light block mb-8">
        The World's Most Exclusive Properties
      </span>
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-[1.1] mb-8">
        Your Private
        <br />
        <em className="italic font-light">Paradise</em> Awaits
      </h1>
      <p className="text-sm md:text-base font-light text-primary-foreground/70 max-w-xl mx-auto mb-12 leading-relaxed">
        Curated private islands for the world's most discerning individuals.
        Complete confidentiality. Unparalleled exclusivity.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/islands"
          className="px-10 py-4 bg-primary-foreground text-ocean-deep text-xs tracking-[0.25em] uppercase font-medium hover:bg-primary-foreground/90 transition-all"
        >
          View Collection
        </Link>
        <Link
          to="/inquire"
          className="px-10 py-4 border border-primary-foreground/40 text-primary-foreground text-xs tracking-[0.25em] uppercase font-light hover:bg-primary-foreground/10 transition-all"
        >
          Private Inquiry
        </Link>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="w-px h-16 bg-primary-foreground/30 mx-auto mb-3" />
      <span className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40 font-light">
        Scroll
      </span>
    </motion.div>
  </section>
);

/* ── 2. Featured In ──────────────────────────────────── */
const FeaturedIn = () => (
  <AnimatedSection className="py-20 bg-background">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
      <SectionLabel>As Featured In</SectionLabel>
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mt-10 opacity-40">
        {["FORBES", "ROBB REPORT", "BLOOMBERG", "FINANCIAL TIMES", "YACHT WORLD"].map(
          (name) => (
            <span
              key={name}
              className="font-display text-lg md:text-xl tracking-[0.15em] text-foreground/60"
            >
              {name}
            </span>
          )
        )}
      </div>
    </div>
  </AnimatedSection>
);

/* ── 3. Ownership Benefits ───────────────────────────── */
const benefits = [
  {
    icon: Shield,
    title: "Absolute Privacy",
    desc: "Your own sovereign territory, shielded from the outside world with complete discretion guaranteed.",
  },
  {
    icon: TrendingUp,
    title: "Appreciating Asset",
    desc: "Private islands have seen 12-18% annual appreciation, outperforming traditional luxury real estate.",
  },
  {
    icon: Globe,
    title: "Global Citizenship",
    desc: "Select jurisdictions offer residency and tax advantages for island property owners.",
  },
];

const OwnershipBenefits = () => (
  <AnimatedSection className="py-28 bg-secondary/30">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <SectionLabel>Why Own a Private Island</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          The Ultimate <em className="italic">Privilege</em>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {benefits.map((b) => (
          <div key={b.title} className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 border border-border rounded-full flex items-center justify-center group-hover:border-primary transition-colors duration-500">
              <b.icon size={24} strokeWidth={1} className="text-primary" />
            </div>
            <h3 className="font-display text-xl font-normal mb-3">{b.title}</h3>
            <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-xs mx-auto">
              {b.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

/* ── 4. Ultimate Lifestyle ───────────────────────────── */
const UltimateLifestyle = () => (
  <AnimatedSection className="py-0">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
      <div
        className="bg-cover bg-center min-h-[50vh] lg:min-h-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&q=80')",
        }}
      />
      <div className="flex items-center px-8 md:px-16 lg:px-20 py-20">
        <div className="max-w-lg">
          <SectionLabel>The Ultimate Lifestyle</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-8 leading-[1.15]">
            Where Luxury Meets
            <br />
            <em className="italic">Untouched Nature</em>
          </h2>
          <p className="text-sm font-light text-muted-foreground leading-[1.9] mb-8">
            Imagine waking to the sound of crystalline waves on your private
            shore. A horizon that belongs only to you. Pristine coral reefs,
            lush tropical canopies, and a residence crafted by the world's
            finest architects — this is not a vacation. This is ownership of
            paradise itself.
          </p>
          <Link
            to="/lifestyle"
            className="inline-block px-8 py-3 border border-primary text-primary text-xs tracking-[0.2em] uppercase font-light hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Explore the Lifestyle
          </Link>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

/* ── 5. Investment Metrics ───────────────────────────── */
const metrics = [
  { value: "12-18%", label: "Annual Appreciation" },
  { value: "$5M+", label: "Average Entry Point" },
  { value: "78%", label: "Repeat Buyers" },
  { value: "100%", label: "Portfolio Diversification" },
];

const InvestmentMetrics = () => (
  <AnimatedSection className="py-28 bg-ocean-deep text-primary-foreground">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <SectionLabel>Investment Performance</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-light">
          Numbers That <em className="italic">Speak</em>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <span className="font-display text-4xl md:text-5xl font-light text-gold block mb-3">
              {m.value}
            </span>
            <span className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 font-light">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

/* ── 6. Aviation & Yacht ─────────────────────────────── */
const conciergeServices = [
  {
    icon: Plane,
    title: "Private Aviation",
    desc: "Seamless jet charter arrangements to your island with dedicated landing strips and helipad services.",
  },
  {
    icon: Anchor,
    title: "Yacht Concierge",
    desc: "Full marina facilities, crewed yacht charters, and deepwater docking for superyachts up to 100m.",
  },
];

const ConciergeServices = () => (
  <AnimatedSection className="py-28 bg-background">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <SectionLabel>Concierge Services</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-light">
          Arrive in <em className="italic">Grandeur</em>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {conciergeServices.map((s) => (
          <div
            key={s.title}
            className="group border border-border p-10 md:p-14 hover:border-primary/30 transition-all duration-500"
          >
            <s.icon
              size={32}
              strokeWidth={1}
              className="text-primary mb-6"
            />
            <h3 className="font-display text-2xl font-light mb-4">{s.title}</h3>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

/* ── 7. Featured Islands ─────────────────────────────── */
const islands = [
  {
    name: "Azure Cay",
    location: "Bahamas",
    price: "$38M",
    acres: "45 Acres",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    name: "Coral Haven",
    location: "Fiji",
    price: "$24M",
    acres: "32 Acres",
    img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
  },
  {
    name: "Emerald Isle",
    location: "Seychelles",
    price: "$55M",
    acres: "78 Acres",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
];

const FeaturedIslands = () => (
  <AnimatedSection className="py-28 bg-secondary/30">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <SectionLabel>Featured Collection</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Private Islands <em className="italic">For Sale</em>
          </h2>
        </div>
        <Link
          to="/islands"
          className="mt-4 md:mt-0 text-xs tracking-[0.2em] uppercase text-primary font-light hover:text-primary/70 transition-colors"
        >
          View All →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {islands.map((island) => (
          <Link
            to="/islands"
            key={island.name}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden mb-5">
              <img
                src={island.img}
                alt={island.name}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-xl font-normal">{island.name}</h3>
                <p className="text-xs tracking-wider text-muted-foreground font-light mt-1">
                  {island.location} · {island.acres}
                </p>
              </div>
              <span className="font-display text-lg text-primary">{island.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

/* ── 8. Video Promo ──────────────────────────────────── */
const VideoPromo = () => (
  <AnimatedSection className="relative h-[70vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505881502353-a1986add3762?w=1920&q=80')",
      }}
    />
    <div className="absolute inset-0 bg-ocean-deep/60" />
    <div className="relative z-10 text-center">
      <div className="w-20 h-20 border-2 border-primary-foreground/50 rounded-full flex items-center justify-center mx-auto mb-8 hover:bg-primary-foreground/10 transition-all cursor-pointer">
        <div className="w-0 h-0 border-l-[14px] border-l-primary-foreground/80 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-light text-primary-foreground mb-4">
        Experience the <em className="italic">Extraordinary</em>
      </h2>
      <p className="text-sm text-primary-foreground/60 font-light tracking-wider">
        A cinematic journey through the world's finest private islands
      </p>
    </div>
  </AnimatedSection>
);

/* ── 9. Elite Counters ───────────────────────────────── */
const counters = [
  { end: 127, suffix: "+", label: "Islands Sold" },
  { end: 42, suffix: "", label: "Countries" },
  { end: 8, suffix: "B+", label: "Total Value (USD)" },
  { end: 25, suffix: "+", label: "Years of Excellence" },
];

const CounterItem = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-5xl md:text-6xl font-light text-primary block mb-2">
        {count}
        {suffix}
      </span>
      <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-light">
        {label}
      </span>
    </div>
  );
};

const EliteCounters = () => (
  <AnimatedSection className="py-28 bg-background">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {counters.map((c) => (
          <CounterItem key={c.label} {...c} />
        ))}
      </div>
    </div>
  </AnimatedSection>
);

/* ── 10. Insights ────────────────────────────────────── */
const insights = [
  {
    title: "The Rise of Climate-Resilient Island Investments",
    date: "March 2026",
    img: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=600&q=80",
  },
  {
    title: "Why Ultra-Wealthy Buyers Are Moving Offshore",
    date: "February 2026",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
  },
  {
    title: "Private Island Architecture: 2026 Trends",
    date: "January 2026",
    img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&q=80",
  },
];

const Insights = () => (
  <AnimatedSection className="py-28 bg-secondary/30">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <SectionLabel>Luxury Real Estate Insights</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-light">
          Market <em className="italic">Intelligence</em>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insights.map((a) => (
          <article key={a.title} className="group cursor-pointer">
            <div className="overflow-hidden mb-5">
              <img
                src={a.img}
                alt={a.title}
                className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-light">
              {a.date}
            </span>
            <h3 className="font-display text-lg font-normal mt-2 group-hover:text-primary transition-colors">
              {a.title}
            </h3>
          </article>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

/* ── 11. Discretion ──────────────────────────────────── */
const Discretion = () => (
  <AnimatedSection className="py-28 bg-ocean-deep text-primary-foreground">
    <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
      <Lock size={36} strokeWidth={1} className="mx-auto mb-8 text-gold" />
      <SectionLabel>Discretion & Privacy</SectionLabel>
      <h2 className="font-display text-4xl md:text-5xl font-light mb-8">
        Your Confidentiality Is <em className="italic">Sacred</em>
      </h2>
      <p className="text-sm font-light text-primary-foreground/60 leading-[2] max-w-2xl mx-auto">
        Every transaction is protected by Swiss-grade confidentiality protocols.
        NDA-backed processes, encrypted communications, and anonymous viewings
        ensure your identity and investment remain completely private. Our
        client list has never been disclosed — and never will be.
      </p>
    </div>
  </AnimatedSection>
);

/* ── 12. Testimonials ────────────────────────────────── */
const testimonials = [
  {
    initials: "R.K.",
    quote:
      "Sovereign made the impossible effortless. From first inquiry to handing me the keys to my Fijian island — impeccable discretion, unmatched service.",
    role: "Family Office Principal",
  },
  {
    initials: "A.S.",
    quote:
      "The level of confidentiality and professionalism is unparalleled. They understood exactly what I needed before I said it.",
    role: "Tech Founder",
  },
  {
    initials: "M.L.",
    quote:
      "Three islands purchased over seven years. Each transaction handled with the same extraordinary care and attention to detail.",
    role: "Investment Fund Chairman",
  },
];

const Testimonials = () => (
  <AnimatedSection className="py-28 bg-background">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <SectionLabel>Client Testimonials</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-light">
          Words of <em className="italic">Trust</em>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.initials} className="border border-border p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <span className="font-display text-lg text-primary">{t.initials}</span>
            </div>
            <p className="text-sm font-light text-muted-foreground leading-[1.9] mb-6 italic">
              "{t.quote}"
            </p>
            <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60 font-light">
              {t.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

/* ── 13. Inquiry Form ────────────────────────────────── */
const InquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <AnimatedSection className="py-28 bg-secondary/30">
      <div className="max-w-[700px] mx-auto px-6 md:px-12 text-center">
        <Eye size={32} strokeWidth={1} className="mx-auto mb-6 text-primary" />
        <SectionLabel>Confidential Inquiry</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
          Begin Your <em className="italic">Journey</em>
        </h2>
        <p className="text-sm font-light text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed">
          All inquiries are handled under strict NDA. Your information will
          never be shared with third parties.
        </p>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-10"
          >
            <Award size={40} strokeWidth={1} className="mx-auto mb-4 text-gold" />
            <p className="font-display text-2xl font-light">Thank you.</p>
            <p className="text-sm text-muted-foreground font-light mt-2">
              A senior advisor will contact you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <form
            className="space-y-5 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input
                placeholder="Full Name"
                required
                className="bg-background border-border text-sm font-light h-12"
              />
              <Input
                placeholder="Email"
                type="email"
                required
                className="bg-background border-border text-sm font-light h-12"
              />
            </div>
            <Input
              placeholder="Preferred Region (e.g., Caribbean, Pacific)"
              className="bg-background border-border text-sm font-light h-12"
            />
            <Input
              placeholder="Budget Range"
              className="bg-background border-border text-sm font-light h-12"
            />
            <Textarea
              placeholder="Additional Details (Optional)"
              rows={4}
              className="bg-background border-border text-sm font-light resize-none"
            />
            <Button
              type="submit"
              className="w-full h-12 bg-primary text-primary-foreground text-xs tracking-[0.25em] uppercase font-light hover:bg-primary/90 rounded-none"
            >
              Submit Confidential Inquiry
            </Button>
          </form>
        )}
      </div>
    </AnimatedSection>
  );
};

/* ── Page ─────────────────────────────────────────────── */
const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <Hero />
      <FeaturedIn />
      <OwnershipBenefits />
      <UltimateLifestyle />
      <InvestmentMetrics />
      <ConciergeServices />
      <FeaturedIslands />
      <VideoPromo />
      <EliteCounters />
      <Insights />
      <Discretion />
      <Testimonials />
      <InquiryForm />
    </main>
    <Footer />
  </div>
);

export default Index;
