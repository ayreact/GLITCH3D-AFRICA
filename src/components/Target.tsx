
import React from 'react';
import { TargetIcon, Users, Lightbulb, Rocket, Globe, Shield } from 'lucide-react';
import { Button } from './ui/button';

const Target = () => {
  const targets = [
    {
      icon: <Users className="h-6 w-6 text-glitch-blue" />,
      title: "Community Building",
      description: "Creating meaningful connections beyond superficial 'GM' interactions to foster a resilient ecosystem"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-glitch-purple" />,
      title: "Innovation Acceleration",
      description: "Fast-tracking revolutionary Web3 projects and concepts that challenge current limitations"
    },
    {
      icon: <Rocket className="h-6 w-6 text-glitch-blue" />,
      title: "Talent Incubation",
      description: "Nurturing the next generation of developers, creators, and thought leaders in the Web3 space"
    },
    {
      icon: <Globe className="h-6 w-6 text-glitch-purple" />,
      title: "Global Accessibility",
      description: "Breaking down geographic and knowledge barriers to make Web3 accessible to diverse audiences"
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Trust Building",
      description: "Establishing stronger trust mechanisms and ethical standards for a more sustainable Web3 ecosystem"
    },
    {
      icon: <TargetIcon className="h-6 w-6 text-glitch-blue" />,
      title: "Practical Applications",
      description: "Focusing on real-world utility and applications that extend Web3 beyond speculative investment"
    }
  ];

  return (
    <section id="target" className="py-20 relative bg-gradient-to-b from-black to-background">
      <div className="circuit-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron mb-4 gradient-text-secondary inline-block">
            OUR TARGET
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-glitch-purple via-glitch-purple to-glitch-blue mx-auto my-6"></div>
          <p className="text-white/70 max-w-3xl mx-auto text-lg font-space">
            GLITCH3D aims to transform the Web3 landscape through these strategic objectives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {targets.map((item, index) => (
            <div key={index} className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-glitch-purple/50 transition-all duration-300">
              <div className="bg-black/50 p-4 rounded-full w-fit mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-orbitron mb-3 text-white">{item.title}</h3>
              <p className="text-white/70 font-space">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/80 max-w-3xl mx-auto mb-8 text-lg font-space">
            Join us on this mission to redefine Web3 and transform the digital landscape for generations to come
          </p>
          <Button asChild className="bg-glitch-blue hover:bg-glitch-blue/80 text-white font-bold font-orbitron text-lg px-8 py-6">
            <a href="#register">BE PART OF THE CHANGE</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Target;
