import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-ocean-deep text-primary-foreground">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="py-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-1">
          <h3 className="font-display text-2xl font-light tracking-[0.15em] mb-4">
            SOVEREIGN
          </h3>
          <p className="text-sm font-light leading-relaxed text-primary-foreground/60 max-w-xs">
            The world's most exclusive private island brokerage, serving
            ultra-high-net-worth individuals since 1998.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase mb-6 text-primary-foreground/40">
            Navigation
          </h4>
          <div className="flex flex-col gap-3">
            {["Home", "Islands", "Lifestyle", "Inquire"].map((l) => (
              <Link
                key={l}
                to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                className="text-sm font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase mb-6 text-primary-foreground/40">
            Services
          </h4>
          <div className="flex flex-col gap-3 text-sm font-light text-primary-foreground/60">
            <span>Private Sales</span>
            <span>Aviation Concierge</span>
            <span>Yacht Services</span>
            <span>Legal & Trust</span>
          </div>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase mb-6 text-primary-foreground/40">
            Contact
          </h4>
          <div className="flex flex-col gap-3 text-sm font-light text-primary-foreground/60">
            <span>Geneva · Monaco · Dubai</span>
            <span>+41 22 000 0000</span>
            <span>inquiries@sovereign.com</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-light text-primary-foreground/30 tracking-wider">
          © 2026 Sovereign Private Islands. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "NDA Policy"].map((t) => (
            <span
              key={t}
              className="text-xs font-light text-primary-foreground/30 hover:text-primary-foreground/60 cursor-pointer transition-colors tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
