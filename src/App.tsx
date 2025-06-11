import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "FlowgenArc - Revolutionizing Customer Service with AI Call Agents";
  }, []);

// ✅ Define the HomePage component to group the homepage content
function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    document.title = "FlowgenArc - Revolutionizing Customer Service with AI Call Agents";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
