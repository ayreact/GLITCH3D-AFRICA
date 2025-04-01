
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'} fixed top-0 left-0 w-full z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/img/nav-logo.png" alt="GLITCH3D" className="h-8 md:h-10" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#overview" className="text-white hover:text-glitch-blue font-orbitron transition-colors">OVERVIEW</a>
          <a href="#target" className="text-white hover:text-glitch-purple font-orbitron transition-colors">TARGET</a>
          <a href="#team" className="text-white hover:text-glitch-blue font-orbitron transition-colors">TEAM</a>
          <a href="#sponsors" className="text-white hover:text-glitch-blue font-orbitron transition-colors">SPONSORS</a>
          <Button asChild className="bg-glitch-blue hover:bg-glitch-blue/80 text-white font-orbitron">
            <a href="#register">REGISTER NOW</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'max-h-screen py-4' : 'max-h-0'} overflow-hidden transition-all duration-300 bg-black/95`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#overview" className="text-white py-2 font-orbitron" onClick={() => setIsOpen(false)}>OVERVIEW</a>
          <a href="#target" className="text-white py-2 font-orbitron" onClick={() => setIsOpen(false)}>TARGET</a>
          <a href="#team" className="text-white py-2 font-orbitron" onClick={() => setIsOpen(false)}>TEAM</a>
          <a href="#sponsors" className="text-white py-2 font-orbitron" onClick={() => setIsOpen(false)}>SPONSORS</a>
          <Button asChild className="bg-glitch-blue hover:bg-glitch-blue/80 text-white font-orbitron w-full">
            <a href="#register" onClick={() => setIsOpen(false)}>REGISTER NOW</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
