
import { ExternalLink, Zap, Cpu, Code } from 'lucide-react';
import { Button } from './ui/button';
import { XIcon, TGIcon, WAIcon } from './ui/Icons'

const Overview = () => {
  return (
    <section id="overview" className="relative py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron mb-4 gradient-text inline-block">
            EVENT OVERVIEW
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-glitch-blue via-glitch-purple to-glitch-blue mx-auto my-6"></div>
          <p className="text-white/70 max-w-3xl mx-auto text-lg font-space">
            GLITCH3D is more than an event; it's a paradigm shift in the Web3 space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="gradient-border h-full">
            <div className="gradient-border-inner p-6 md:p-8 h-full">
              <div className="bg-glitch-blue/20 p-4 rounded-full w-fit mb-6">
                <Zap className="h-6 w-6 text-glitch-blue" />
              </div>
              <h3 className="text-xl md:text-2xl font-orbitron mb-4 text-white">Disruptive Innovation</h3>
              <p className="text-white/70 font-space">
                Breaking free from conventional "GM" culture, GLITCH3D introduces radical new approaches to Web3 technology and community building.
              </p>
            </div>
          </div>

          <div className="gradient-border h-full">
            <div className="gradient-border-inner p-6 md:p-8 h-full">
              <div className="bg-glitch-purple/20 p-4 rounded-full w-fit mb-6">
                <Cpu className="h-6 w-6 text-glitch-purple" />
              </div>
              <h3 className="text-xl md:text-2xl font-orbitron mb-4 text-white">Advanced Technology</h3>
              <p className="text-white/70 font-space">
                Showcasing cutting-edge blockchain innovations, decentralized applications, and next-generation Web3 infrastructure that pushes boundaries.
              </p>
            </div>
          </div>

          <div className="gradient-border h-full">
            <div className="gradient-border-inner p-6 md:p-8 h-full">
              <div className="bg-glitch-blue/20 p-4 rounded-full w-fit mb-6">
                <Code className="h-6 w-6 text-glitch-blue" />
              </div>
              <h3 className="text-xl md:text-2xl font-orbitron mb-4 text-white">Collaborative Future</h3>
              <p className="text-white/70 font-space">
                Bringing together visionaries, developers, artists, and entrepreneurs to forge unexpected alliances and build the future of Web3.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-glitch-blue/10 via-glitch-purple/10 to-glitch-blue/10 rounded-lg p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-orbitron mb-4 text-white">A Glitch in the System</h3>
              <p className="text-white/70 font-space mb-6">
                GLITCH3D represents a deliberate disruption in the blockchain ecosystem—challenging norms, breaking through the "GM" culture by bringing the tech to people that makes their DeFi interactions easier and unlocking real world value. 
              </p>
              <p className="text-white/70 font-space mb-6">
                Join us for a transformative experience where technology meets creativity, and the unexpected becomes the catalyst for change.
              </p>
              <div className="flex gap-4 mt-4">
                <Button asChild variant="outline" size="icon" className="rounded-full border-white hover:bg-white/20 transition-colors">
                  <a href="https://x.com/GLITCH3_D" target="_blank" rel="noopener noreferrer" className="text-white">
                    <XIcon />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full border-glitch-blue hover:bg-glitch-blue/20 transition-colors">
                  <a href="coming-soon/" rel="noopener noreferrer" className="text-glitch-blue">
                    <TGIcon />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full border-glitch-green hover:bg-glitch-green/20 transition-colors">
                  <a href="coming-soon/" rel="noopener noreferrer" className="text-glitch-green">
                    <WAIcon />
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-glitch-blue via-glitch-purple to-glitch-blue rounded-lg opacity-20 animate-pulse"></div>
                <div className="absolute inset-2 bg-black rounded-lg flex items-center justify-center">
                  <img 
                    src="/img/logo.png" 
                    alt="GLITCH3D Logo" 
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
