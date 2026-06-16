import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DIVISIONS, VALUES, WHY, IMG } from "../data.js";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- Panel content ---------------- */

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="m5 12 4 4L19 7" />
    </svg>
  );
}

function PillarsPanel() {
  return (
    <div className="panel panel--light" id="pillars">
      <div className="panel-head">
        <span className="eyebrow">
          <span className="dot" /> Two divisions, one partner
        </span>
        <h2>Strategic Service Pillars</h2>
        <p className="lede">
          Specialist practices under a single advisory relationship — so compliance
          and talent never work in silos.
        </p>
      </div>

      <div className="pillars-grid">
        {DIVISIONS.map((d) => (
          <article className="division" key={d.id}>
            <div className="division-media">
              <img src={d.image} alt="" loading="lazy" />
              <span className="division-tag">{d.eyebrow}</span>
            </div>
            <div className="division-body">
              <h3>{d.title}</h3>
              <p className="division-tagline">{d.tagline}</p>
              <ul className="division-list">
                {d.points.map((p) => (
                  <li key={p}>
                    <Check />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function MissionPanel() {
  return (
    <div className="panel panel--dark" id="mission">
      <div className="mv-grid">
        <div className="mv-copy">
          <span className="eyebrow eyebrow--light">
            <span className="dot" /> Purpose
          </span>
          <div className="mv-block">
            <h2>Our Mission</h2>
            <p>
              To be the trusted catalyst for organisational growth in the UAE —
              translating rigorous, data-driven counsel into compliance, resilience
              and lasting competitive advantage.
            </p>
          </div>
          <div className="mv-block">
            <h2>Our Vision</h2>
            <p>
              To be recognised as the strategic engine behind the Emirates' most
              impactful businesses, fostering a legacy of integrity and performance.
            </p>
          </div>
        </div>
        <div className="mv-media">
          <img src={IMG.mission} alt="Dubai corporate tower" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

function ValuesPanel() {
  return (
    <div className="panel panel--light" id="values">
      <div className="panel-head panel-head--center">
        <span className="eyebrow">
          <span className="dot" /> What defines us
        </span>
        <h2>The Values That Define Us</h2>
      </div>
      <div className="values-grid">
        {VALUES.map((v) => (
          <article className="value-card" key={v.title}>
            <div className="value-media">
              <img src={v.image} alt="" loading="lazy" />
            </div>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function WhyPanel() {
  return (
    <div className="panel panel--dark" id="why">
      <div className="why-grid">
        <div className="why-media">
          <img src={IMG.whyChoose} alt="Executive boardroom" loading="lazy" />
          <div className="why-badge">
            <strong>150+</strong>
            <span>Successful engagements</span>
          </div>
        </div>
        <div className="why-copy">
          <span className="eyebrow eyebrow--light">
            <span className="dot" /> The difference
          </span>
          <h2>Why UAE Visionaries Choose Nexus Hub</h2>
          <ul className="why-list">
            {WHY.map((w) => (
              <li key={w.title}>
                <span className="why-ic">
                  <Check />
                </span>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const PANELS = [PillarsPanel, MissionPanel, ValuesPanel, WhyPanel];

/* ---------------- Stacking animation ---------------- */

export default function StackSection() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".stack-card");

      // Desktop / motion-on: scale + dim the card as the next slides over it.
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1001px) and (prefers-reduced-motion: no-preference)", () => {
        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;
          const inner = card.querySelector(".stack-card__inner");
          const dim = card.querySelector(".stack-card__dim");
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top top",
              end: "+=100%",
              scrub: true,
            },
          });
          tl.to(inner, { scale: 0.92, yPercent: -3, ease: "none" }, 0);
          tl.to(dim, { opacity: 1, ease: "none" }, 0);
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="stack" ref={root}>
      {PANELS.map((Panel, i) => (
        <section className="stack-card" key={i}>
          <div className="stack-card__inner">
            <Panel />
            <div className="stack-card__dim" />
          </div>
        </section>
      ))}
    </div>
  );
}
