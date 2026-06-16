import { useEffect, useRef, useState } from "react";
import { STATS } from "../data.js";

const PREFERS_REDUCED =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Counter({ num, suffix }) {
  const ref = useRef(null);
  // When motion is reduced, start at the final value and skip the animation.
  const [val, setVal] = useState(() => (PREFERS_REDUCED ? num : 0));

  useEffect(() => {
    if (PREFERS_REDUCED) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(el);
          const dur = 1400;
          let start = null;
          const step = (t) => {
            if (start === null) start = t;
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * num));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [num]);

  return (
    <span ref={ref}>
      {val}
      <span className="stat-u">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="section stats-section">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">
            <span className="dot" /> By the numbers
          </span>
          <h2>A track record UAE businesses build on</h2>
        </div>
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-num">
                <Counter num={s.num} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
