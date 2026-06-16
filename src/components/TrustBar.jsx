import { TRUST } from "../data.js";

export default function TrustBar() {
  return (
    <section className="trust">
      <div className="wrap trust-row">
        {TRUST.map((t) => (
          <div className="trust-item" key={t}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m5 12 4 4L19 7" />
            </svg>
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}
