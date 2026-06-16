import { useState } from "react";
import { RECIPIENTS } from "../data.js";

// Tax & Compliance is the first / default option → routes to person 1.
const OPTIONS = [
  { value: "tax", label: "Tax, VAT & Compliance", recipient: RECIPIENTS.tax },
  { value: "talent", label: "Talent, HR & Consulting", recipient: RECIPIENTS.talent },
];

const EMPTY = { name: "", company: "", email: "", phone: "", message: "" };

export default function Consultation() {
  const [division, setDivision] = useState("tax"); // Tax preselected
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null); // holds the routed division label

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = true;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = true;
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const opt = OPTIONS.find((o) => o.value === division);

    // Route to the correct inbox based on the selected division.
    const subject = `Consultation request — ${opt.label}`;
    const body = [
      `Division: ${opt.label}`,
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      form.message,
    ].join("\n");
    const mailto = `mailto:${opt.recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's mail client addressed to the routed recipient.
    window.location.href = mailto;

    setSent(opt.label);
    setForm(EMPTY);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">
            <span className="dot" /> Book a consultation
          </span>
          <h2>Tell us where you want to grow</h2>
          <p className="lede">
            Choose a division and an advisor responds within one business day. Every
            conversation is confidential.
          </p>
        </div>

        <div className="contact-grid">
          <div className="form-card">
            {sent ? (
              <div className="form-success">
                <div className="form-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </div>
                <h3>Request routed</h3>
                <p>
                  Thanks — your enquiry has been directed to our{" "}
                  <strong>{sent}</strong> team. An advisor will be in touch within one
                  business day.
                </p>
                <button className="btn btn-ghost" onClick={() => setSent(null)}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="field">
                  <label>Which division do you need?</label>
                  <div className="seg">
                    {OPTIONS.map((o) => (
                      <button
                        type="button"
                        key={o.value}
                        className={`seg-btn ${division === o.value ? "is-active" : ""}`}
                        onClick={() => setDivision(o.value)}
                        aria-pressed={division === o.value}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="f-row">
                  <div className="field">
                    <label htmlFor="name">Full name</label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your name"
                      className={errors.name ? "is-error" : ""}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={update("company")}
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="f-row">
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@company.com"
                      className={errors.email ? "is-error" : ""}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+971 50 000 0000"
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={update("message")}
                    placeholder="What are you trying to achieve?"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Request consultation
                </button>
                <p className="form-note">
                  By submitting you agree to be contacted about your enquiry. We never
                  share your details.
                </p>
              </form>
            )}
          </div>

          <aside className="contact-aside">
            <div className="info-card">
              <h4>UAE office</h4>
              <ul>
                <li>Business Bay, Dubai, United Arab Emirates</li>
                <li>+971 4 000 0000</li>
                <li>advisory@nexushub.ae</li>
                <li>Sun–Thu, 9:00–18:00 GST</li>
              </ul>
            </div>
            <a className="wa-card" href="#contact">
              <span className="wa-ic">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-2.8.7.7-2.7-.2-.3A8 8 0 0 1 12 4z" />
                </svg>
              </span>
              <span>
                <strong>Chat on WhatsApp</strong>
                <small>Fastest way to reach an advisor</small>
              </span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
