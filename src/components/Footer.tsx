
import { ArrowUp } from 'lucide-react';
import { XIcon, TGIcon, WAIcon } from './ui/Icons'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black py-12 relative">
      <div className="circuit-overlay"></div>
      <div className="noise-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-10">
          <button
            onClick={scrollToTop}
            className="bg-glitch-blue/20 hover:bg-glitch-blue/30 p-4 rounded-full transition-colors"
          >
            <ArrowUp className="h-6 w-6 text-glitch-blue" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/img/GLITCHED.png" 
              alt="GLITCH3D" 
              className="h-8 mb-4" 
            />
            <p className="text-white/70 font-space mb-4 max-w-md">
              <span className='text-white/95 font-bold'>GLITCH3D</span> is reshaping Web3 culture beyond the GMs, creating a space for innovation, collaboration, and disruption.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/GLITCH3_D" className="text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <XIcon />
              </a>
              <a href="coming-soon/" className="text-white/60 hover:text-glitch-blue transition-colors" rel="noopener noreferrer">
                <TGIcon />
              </a>
              <a href="coming-soon/" className="text-white/60 hover:text-glitch-green transition-colors" rel="noopener noreferrer">
                <WAIcon />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-orbitron mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#overview" className="text-white/70 hover:text-glitch-blue transition-colors font-space">Overview</a></li>
              <li><a href="#target" className="text-white/70 hover:text-glitch-blue transition-colors font-space">Our Target</a></li>
              <li><a href="#team" className="text-white/70 hover:text-glitch-blue transition-colors font-space">Team</a></li>
              <li><a href="#sponsors" className="text-white/70 hover:text-glitch-blue transition-colors font-space">Sponsors</a></li>
              <li><a href="#register" className="text-white/70 hover:text-glitch-blue transition-colors font-space">Register</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-orbitron mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70 font-space">glitch3dafrica@gmail.com</li>
              <li><a href="#team" className="text-glitch-pink hover:text-glitch-pink/80 transition-colors font-space">Media Inquiries</a></li>
              <li><a href="#sponsors" className="text-glitch-pink hover:text-glitch-pink/80 transition-colors font-space">Partnership Opportunities</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 font-space text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GLITCH3D. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="privacy-policy/" className="text-white/50 hover:text-white transition-colors text-sm font-space" target="_blank">Privacy Policy</a>
            <a href="terms-of-service/" className="text-white/50 hover:text-white transition-colors text-sm font-space" target="_blank">Terms of Service</a>
            <a href="cookie-policy/" className="text-white/50 hover:text-white transition-colors text-sm font-space" target="_blank">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
