import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const allIslands = [
  {
    name: "Azure Cay",
    location: "Exuma, Bahamas",
    price: "$38M",
    acres: "45 Acres",
    beds: 8,
    features: "Private airstrip, reef system",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    name: "Coral Haven",
    location: "Lau Group, Fiji",
    price: "$24M",
    acres: "32 Acres",
    beds: 6,
    features: "Coconut plantation, lagoon",
    img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
  },
  {
    name: "Emerald Isle",
    location: "Mahé, Seychelles",
    price: "$55M",
    acres: "78 Acres",
    beds: 12,
    features: "Helipad, deepwater marina",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
  {
    name: "Sapphire Atoll",
    location: "Maldives",
    price: "$42M",
    acres: "28 Acres",
    beds: 10,
    features: "Overwater villas, spa complex",
    img: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=800&q=80",
  },
  {
    name: "Golden Reef",
    location: "Turks & Caicos",
    price: "$31M",
    acres: "52 Acres",
    beds: 7,
    features: "Championship golf, marina",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
  },
  {
    name: "Paradiso Isla",
    location: "Belize",
    price: "$19M",
    acres: "18 Acres",
    beds: 5,
    features: "Barrier reef access, eco-lodge",
    img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
  },
];

const Islands = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505881502353-a1986add3762?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-ocean-deep/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-16 w-full"
        >
          <SectionLabel>Our Portfolio</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl font-light text-primary-foreground">
            Private Islands
          </h1>
        </motion.div>
      </section>

      {/* Grid */}
      <AnimatedSection className="py-28 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allIslands.map((island, i) => (
              <motion.div
                key={island.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="overflow-hidden mb-5">
                  <img
                    src={island.img}
                    alt={island.name}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl font-normal">{island.name}</h3>
                  <span className="font-display text-lg text-primary">{island.price}</span>
                </div>
                <p className="text-xs tracking-wider text-muted-foreground font-light">
                  {island.location} · {island.acres} · {island.beds} Bedrooms
                </p>
                <p className="text-xs text-muted-foreground/60 font-light mt-1">
                  {island.features}
                </p>
                <Link
                  to="/inquire"
                  className="inline-block mt-4 text-xs tracking-[0.2em] uppercase text-primary font-light hover:text-primary/70 transition-colors"
                >
                  Request Details →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </main>
    <Footer />
  </div>
);

export default Islands;
