
import React from 'react';

const Sponsors = () => {
  // Sample logos - replace with actual sponsor logos
  const single_sponsor = [{ name: "Ethereum", url: "#" }]
  const sponsors = [
    
  ];

  return (
    <section id="sponsors" className="py-20 bg-black relative">
      <div className="circuit-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron mb-4 gradient-text-secondary inline-block">
            OUR SPONSORS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-glitch-pink via-glitch-purple to-glitch-green mx-auto my-6"></div>
          <p className="text-white/70 max-w-3xl mx-auto text-lg font-space">
            Backed by leading organizations driving the future of Web3
          </p>
        </div>

        {sponsors.length === 0 ?
          <div className="mt-0 text-center mb-0">
            <p className='text-white/80 max-w-3xl mx-auto text-5xl font-bold font-orbitron mt-0'>TBA</p>
          </div>
        :
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              className="flex items-center justify-center bg-black/50 border hover:border-2 border-white/10 rounded-lg p-6 h-32 hover:border-glitch-green/50 transition-all duration-200 overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center scale-100 hover:scale-125 transition-all duration-300">
                {/* To be replaced with actual sponsor logos */}
                <div className="text-white/80 font-orbitron text-lg">{sponsor.name}</div>
              </div>
            </a>
          ))}
        </div>
        }

        <div className="mt-10 text-center">
          <p className="text-white/80 max-w-3xl mx-auto text-lg font-space mb-8">
            Interested in sponsoring GLITCH3D? Contact our team for partnership opportunities
          </p>
          <button className="bg-transparent hover:bg-glitch-green/10 text-glitch-green border-2 border-glitch-green font-orbitron py-3 px-8 rounded-lg transition-colors">
            BECOME A SPONSOR
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
