import { IMG } from "../data.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <img src={IMG.hero} alt="Dubai skyline at dusk" loading="eager" />
        <div className="hero-scrim" />
      </div>

      <div className="wrap hero-inner">
        <span className="eyebrow eyebrow--light">
          <span className="dot" /> UAE Business Advisory · Dubai
        </span>
        <h1 className="hero-title">
          Building future-ready businesses &amp;{" "}
          <span className="hl">high-performing teams</span> across the UAE
        </h1>
        <p className="hero-sub">
          One trusted Dubai partner for tax &amp; compliance and executive talent,
          HR and business consulting.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary btn-lg">
            Book a consultation
            <Arrow />
          </a>
          <a href="#pillars" className="btn btn-ghost-light btn-lg">
            Explore divisions
          </a>
        </div>
        <div className="hero-rating">
          <span className="stars">★★★★★</span>
          Trusted by 100+ UAE founders, CEOs &amp; HR directors
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
