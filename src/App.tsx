import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteRequest from './pages/QuoteRequest';

function App() {
  const [showQuote, setShowQuote] = React.useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setShowQuote(true)} />
      {showQuote ? (
        <QuoteRequest />
      ) : (
        <div>
          <Hero onQuoteClick={() => setShowQuote(true)} />
          <About />
          <Services />
          <Contact />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;