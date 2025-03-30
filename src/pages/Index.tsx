
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Target from '../components/Target';
import Team from '../components/Team';
import Sponsors from '../components/Sponsors';
import Register from '../components/Register';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Add glitch effect to texts
    const glitchInterval = setInterval(() => {
      const elements = document.querySelectorAll('.glitch-effect');
      elements.forEach(el => {
        el.classList.add('animate-glitch');
        setTimeout(() => {
          el.classList.remove('animate-glitch');
        }, 200);
      });
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white overflow-hidden">
      <div className="noise-overlay"></div>
      <Navbar />
      <Hero />
      <Overview />
      <Target />
      <Team />
      <Sponsors />
      <Register />
      <Footer />
    </div>
  );
};

export default Index;
