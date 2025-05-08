import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Technology from './components/Technology';
import Impact from './components/Impact';
import SDG from './components/SDG';
import AppPreview from './components/AppPreview';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Technology />
        <AppPreview />
        <SDG />
        <Impact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;