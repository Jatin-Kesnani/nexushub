import "./App.css";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import TrustBar from "./components/TrustBar.jsx";
import Stats from "./components/Stats.jsx";
import StackSection from "./components/StackSection.jsx";
import Consultation from "./components/Consultation.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <StackSection />
        <Consultation />
      </main>
      <Footer />
    </>
  );
}
