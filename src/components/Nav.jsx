import { useEffect, useRef, useState } from "react";
import Logo from "./Logo.jsx";
import { NAV_LINKS } from "../data.js";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the popup on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onPointer = (e) => {
      if (
        !menuRef.current?.contains(e.target) &&
        !burgerRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}
      >
        <div className="nav-bar wrap">
          <a href="#top" aria-label="Nexus Hub home" onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <a href="#contact" className="btn btn-primary">
              Book consultation
            </a>
            <button
              ref={burgerRef}
              className={`nav-burger ${open ? "is-open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Sibling overlay (NOT a child of the filtered header) so fixed
          positioning is relative to the viewport, not the 74px bar. */}
      {open && (
        <div className="nav-mobile" ref={menuRef}>
          <div className="nav-mobile-inner">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
              Book consultation
            </a>
          </div>
        </div>
      )}
    </>
  );
}
