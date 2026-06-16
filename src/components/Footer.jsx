import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>
            Building businesses. Empowering workforces. A premium Dubai advisory
            partner for tax, compliance, talent and HR.
          </p>
        </div>

        <div className="footer-col">
          <h5>Divisions</h5>
          <a href="#pillars">Tax, VAT &amp; Compliance</a>
          <a href="#pillars">Talent, HR &amp; Consulting</a>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <a href="#mission">About</a>
          <a href="#values">Values</a>
          <a href="#why">Why us</a>
        </div>
        <div className="footer-col">
          <h5>Get in touch</h5>
          <a href="#contact">Book consultation</a>
          <a href="#contact">advisory@nexushub.ae</a>
          <a href="#contact">Business Bay, Dubai</a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Nexus Hub Business Advisory · Licensed in the UAE</span>
        <span className="footer-legal">
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
          <a href="#top">Compliance</a>
        </span>
      </div>
    </footer>
  );
}
