
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 hexagon-pattern"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-background z-10"></div>
      
      <div className="container mx-auto px-4 pt-20 z-20 text-center h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/img/logo.png" 
            alt="GLITCH3D" 
            className={`w-40 md:w-60 mb-6 ${glitchActive ? 'animate-glitch' : 'animate-float'}`}
          />
          
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-orbitron font-black mt-4 mb-4 tracking-tight">
            <span className="glitch-effect font-orbitron" data-text="GLITCH3D">GLITCH3D</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-space text-white/90 mb-8 max-w-2xl mx-auto">
            <span className="gradient-text font-semibold">Web 3 Beyond The GM's</span>
          </p>
          
          <p className="text-lg md:text-xl font-space text-white/70 mb-10 max-w-2xl mx-auto">
            Redefining the future of Web3 with cutting-edge innovation and collaborative disruption
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild className="bg-glitch-blue hover:bg-glitch-blue/80 text-white font-orbitron text-lg px-8 py-6 animate-pulse-glow">
              <a href="#register">REGISTER NOW</a>
            </Button>
            <Button asChild className="bg-transparent border-2 border-glitch-purple hover:bg-glitch-purple/20 text-white font-orbitron text-lg px-8 py-6">
              <a href="#overview">LEARN MORE</a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown className="text-white/50 h-8 w-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
