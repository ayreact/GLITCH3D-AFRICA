
import { Button } from './ui/button';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';

const Register = () => {
  return (
    <section id="register" className="py-20 bg-gradient-to-b from-background to-black relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron mb-6 text-white">
              JOIN <span className="gradient-text">GLITCH3D</span> NOW
            </h2>
            
            <p className="text-white/70 font-space mb-8 text-lg">
              Be part of the revolution that's transforming Web3 beyond the ordinary. Register now to secure your spot at this groundbreaking event.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-glitch-blue/20 p-3 rounded-full">
                  <Calendar className="h-5 w-5 text-glitch-blue" />
                </div>
                <div>
                  <h3 className="text-white font-orbitron mb-1">Event Date</h3>
                  <p className="text-white/70 font-space">Coming Soon - July, 2025</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-glitch-purple/20 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-glitch-purple" />
                </div>
                <div>
                  <h3 className="text-white font-orbitron mb-1">Location</h3>
                  <p className="text-white/70 font-space">Virtual & Physical Locations TBA</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-glitch-blue/20 p-3 rounded-full">
                  <Users className="h-5 w-5 text-glitch-blue" />
                </div>
                <div>
                  <h3 className="text-white font-orbitron mb-1">Participants</h3>
                  <p className="text-white/70 font-space">Limited to 500 attendees</p>
                </div>
              </div>
            </div>
            
            <Button asChild className="bg-gradient-to-r from-glitch-blue via-glitch-purple to-glitch-blue hover:opacity-90 text-white font-orbitron text-lg px-8 py-6 shadow-lg shadow-glitch-purple/20 group">
              <a href="#" target="_blank" rel="noopener noreferrer">
                REGISTER FOR GLITCH3D
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-glitch-blue via-glitch-purple to-glitch-blue rounded-lg opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute inset-4 bg-black rounded-lg flex items-center justify-center">
                <div className="relative p-6 w-full h-full flex flex-col items-center justify-center">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-glitch-blue/30 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-glitch-purple/30 rounded-full blur-xl"></div>
                  
                  <img 
                    src="/img/logo.png" 
                    alt="GLITCH3D Logo" 
                    className="w-32 h-32 object-contain mb-6 animate-float"
                  />
                  
                  <h3 className="text-2xl font-orbitron text-white mb-4 text-center">Limited Registration</h3>
                  <p className="text-white/70 font-space text-center mb-6">
                    Registrations are limited to ensure quality experience for all attendees
                  </p>
                  
                  <div className="text-glitch-blue font-orbitron text-xl">
                    REGISTER SOON
                  </div>
                  
                  <div className="w-full bg-black/50 h-2 rounded-full mt-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-glitch-blue to-glitch-purple h-full rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
