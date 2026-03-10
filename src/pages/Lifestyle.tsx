import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import { motion } from "framer-motion";
import { Plane, Anchor, UtensilsCrossed, Waves } from "lucide-react";

const experiences = [
  {
    icon: Plane,
    title: "Private Aviation",
    desc: "Direct jet service to your island with customs clearance handled privately.",
    img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
  },
  {
    icon: Anchor,
    title: "Superyacht Living",
    desc: "Deepwater berths, crewed charters, and bespoke ocean expeditions.",
    img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
  },
  {
    icon: UtensilsCrossed,
    title: "Private Chef & Dining",
    desc: "Michelin-starred chefs, rare vintages, and farm-to-table island cuisine.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    icon: Waves,
    title: "Wellness & Spa",
    desc: "Open-air spas, holistic retreats, and personal wellness programs.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&q=80",
  },
];

const Lifestyle = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-ocean-deep/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-16 w-full"
        >
          <SectionLabel>The Sovereign Life</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl font-light text-primary-foreground">
            Luxury <em className="italic">Redefined</em>
          </h1>
        </motion.div>
      </section>

      {/* Intro */}
      <AnimatedSection className="py-28 bg-background">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light mb-8 leading-[1.3]">
            Ownership is only the beginning. The true privilege lies in the life you create.
          </h2>
          <p className="text-sm font-light text-muted-foreground leading-[2]">
            From private aviation to personal chefs, from wellness retreats to underwater explorations — every moment on your island is curated to perfection. This isn't hospitality. This is your world, your rules.
          </p>
        </div>
      </AnimatedSection>

      {/* Experiences */}
      {experiences.map((exp, i) => (
        <AnimatedSection key={exp.title} className="py-0">
          <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
            <div
              className={`bg-cover bg-center min-h-[40vh] lg:min-h-full ${i % 2 === 1 ? "lg:order-2" : ""}`}
              style={{ backgroundImage: `url('${exp.img}')` }}
            />
            <div className={`flex items-center px-8 md:px-16 lg:px-20 py-20 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="max-w-lg">
                <exp.icon size={36} strokeWidth={1} className="text-primary mb-6" />
                <h3 className="font-display text-3xl md:text-4xl font-light mb-6">{exp.title}</h3>
                <p className="text-sm font-light text-muted-foreground leading-[2]">{exp.desc}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}

      {/* CTA */}
      <AnimatedSection className="py-28 bg-ocean-deep text-primary-foreground text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
            Ready to Begin?
          </h2>
          <p className="text-sm font-light text-primary-foreground/60 mb-10 leading-relaxed">
            Your private island lifestyle starts with a single, confidential conversation.
          </p>
          <a
            href="/inquire"
            className="inline-block px-10 py-4 border border-primary-foreground/40 text-primary-foreground text-xs tracking-[0.25em] uppercase font-light hover:bg-primary-foreground/10 transition-all"
          >
            Schedule a Consultation
          </a>
        </div>
      </AnimatedSection>
    </main>
    <Footer />
  </div>
);

export default Lifestyle;
