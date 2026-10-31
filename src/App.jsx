import { IconSprite, Icon } from './components/Icon.jsx';
import Topbar from './components/Topbar.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Products from './components/Products.jsx';
import Special from './components/Special.jsx';
import Footer from './components/Footer.jsx';
import { WHATSAPP_URL } from './data/site.js';

export default function App() {
  return (
    <>
      <IconSprite />
      <Topbar />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Special />
      </main>
      <Footer />
      <a className="wa-float" href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp"><Icon name="whatsapp" /></a>
    </>
  );
}
