import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Award } from "lucide-react";
import { useState } from "react";

const Inquire = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] flex items-end overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-ocean-deep/60" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-16 w-full"
          >
            <SectionLabel>Contact</SectionLabel>
            <h1 className="font-display text-5xl md:text-7xl font-light text-primary-foreground">
              Confidential <em className="italic">Inquiry</em>
            </h1>
          </motion.div>
        </section>

        {/* Form */}
        <AnimatedSection className="py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left info */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-light mb-8 leading-[1.3]">
                  Every conversation begins with absolute discretion.
                </h2>
                <p className="text-sm font-light text-muted-foreground leading-[2] mb-10">
                  Your inquiry will be handled by a senior advisor under strict NDA protocols.
                  We never share client information, and all communications are end-to-end encrypted.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Shield size={24} strokeWidth={1} className="text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-display text-lg mb-1">NDA Protected</h4>
                      <p className="text-xs font-light text-muted-foreground leading-relaxed">
                        All inquiries are covered by our standard non-disclosure agreement.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award size={24} strokeWidth={1} className="text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-display text-lg mb-1">24-Hour Response</h4>
                      <p className="text-xs font-light text-muted-foreground leading-relaxed">
                        A senior advisor will reach out within one business day.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-light mb-3">
                    Global Offices
                  </p>
                  <p className="text-sm font-light text-muted-foreground">
                    Geneva · Monaco · Dubai · Singapore · New York
                  </p>
                </div>
              </div>

              {/* Right form */}
              <div>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-20"
                  >
                    <Award size={48} strokeWidth={1} className="text-gold mb-6" />
                    <h3 className="font-display text-3xl font-light mb-3">
                      Thank You
                    </h3>
                    <p className="text-sm font-light text-muted-foreground max-w-sm">
                      Your confidential inquiry has been received. A senior advisor will contact you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-light block mb-2">
                          Full Name *
                        </label>
                        <Input
                          required
                          className="bg-background border-border text-sm font-light h-12 rounded-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-light block mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          required
                          className="bg-background border-border text-sm font-light h-12 rounded-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-light block mb-2">
                        Phone
                      </label>
                      <Input className="bg-background border-border text-sm font-light h-12 rounded-none" />
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-light block mb-2">
                        Preferred Region
                      </label>
                      <Input
                        placeholder="e.g., Caribbean, South Pacific, Indian Ocean"
                        className="bg-background border-border text-sm font-light h-12 rounded-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-light block mb-2">
                        Budget Range
                      </label>
                      <Input
                        placeholder="e.g., $10M - $50M"
                        className="bg-background border-border text-sm font-light h-12 rounded-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-light block mb-2">
                        Additional Details
                      </label>
                      <Textarea
                        rows={5}
                        placeholder="Tell us about your ideal island, timeline, and any special requirements..."
                        className="bg-background border-border text-sm font-light resize-none rounded-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-primary text-primary-foreground text-xs tracking-[0.25em] uppercase font-light hover:bg-primary/90 rounded-none"
                    >
                      Submit Confidential Inquiry
                    </Button>
                    <p className="text-[10px] text-muted-foreground/50 font-light text-center leading-relaxed">
                      By submitting, you agree to our privacy policy and NDA terms.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Inquire;
