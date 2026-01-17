import { useState, useEffect } from 'react';
import './index.css';

// Components (Placeholders for now)
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Offerings from './components/Offerings';
import QuoteSection from './components/QuoteSection';
import ProductsSection from './components/ProductsSection';
import Testimonials from './components/Testimonials';
import Promo from './components/Promo';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'white' | 'green'>('white');

  useEffect(() => {
    // Apply theme class to body
    if (theme === 'green') {
      document.body.classList.add('theme-green');
    } else {
      document.body.classList.remove('theme-green');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'white' ? 'green' : 'white'));
  };

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Offerings />
        <QuoteSection />
        <ProductsSection />
        <Testimonials />
        <Promo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
