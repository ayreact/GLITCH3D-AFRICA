
import { useState } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { XIcon, TGIcon } from './ui/Icons'

// This is just sample data - replace with actual team members
const teamMembers = [
  {
    name: "Rocster",
    role: "Founder",
    image: "/team/ROC.jpg",
    socials: {
      twitter: "https://x.com/Rocster_krypt",
      telegram: "https://t.me/rocster_solos",
    }
  },
  {
    name: "Cutexiaruby",
    role: "Content (Lead)",
    image: "/team/RUBY.jpg",
    socials: {
      twitter: "https://x.com/cutexiaruby_j",
      telegram: "https://t.me/cutexiaruby_j",
    }
  },
  {
    name: "AY REACT",
    role: "Developer & Design (Lead)",
    image: "/team/AY.jpg",
    socials: {
      twitter: "https://x.com/ay_react",
      telegram: "https://t.me/ay_react",
    }
  },
  {
    name: "Rukiz Cukiz",
    role: "Content",
    image: "/team/RUKIZ.jpg",
    socials: {
      twitter: "https://x.com/rukizcukiz ",
      telegram: "https://t.me/Rukiz_2",
    }
  },
  {
    name: "KC",
    role: "Content",
    image: "/team/KC.jpg",
    socials: {
      twitter: "https://x.com/kcweb_3",
      telegram: "https://t.me/KC_web3",
    }
  },
  {
    name: "RJ",
    role: "Design",
    image: "/team/RJ.jpg",
    socials: {
      twitter: "https://x.com/RejoiceOny",
      telegram: "https://t.me/Onyinyechirj",
    }
  },
  {
    name: "Kunms",
    role: "Outreach",
    image: "team/KUNMS.jpg",
    socials: {
      twitter: "https://x.com/InvestorKunms",
      telegram: "https://t.me/InvestorKunms",
    }
  },
  {
    name: "Saxmanuel",
    role: "Design",
    image: "/team/SAX.jpg",
    socials: {
      twitter: "https://x.com/Saxmanuel_Web3?t=ckSkuU9pEz-dan-zJWSFKQ&s=09",
      telegram: "https://t.me/Saxmuel",
    }
  },
  {
    name: "SwatB2K",
    role: "Outreach (Team Lead)",
    image: "/team/SWAT.jpg",
    socials: {
      twitter: "https://x.com/swatb2k?s=21",
      telegram: "https://t.me/B2K_Swat",
    }
  },
  {
    name: "Vic.web3",
    role: "Content",
    image: "/team/VIC.jpg",
    socials: {
      twitter: "https://x.com/vicissol",
      telegram: "https://t.me/Ottivic",
    }
  },
  {
    name: "Evato",
    role: "Logistics",
    image: "/team/EVATO.jpg",
    socials: {
      twitter: "https://x.com/evatocrypt?s=21",
      telegram: "https://t.me/E_VATO",
    }
  },
  {
    name: "AyTee",
    role: "Outreach",
    image: "/team/AYTEE.jpg",
    socials: {
      twitter: "https://x.com/Ayteex?t=myI1AtWoHaLkSTEauQJuBA&s=09",
      telegram: "https://t.me/ayteex",
    }
  },
  {
    name: "King Cathereum",
    role: "Outreach",
    image: "/team/CAT.jpg",
    socials: {
      twitter: "https://x.com/kingcathereum?s=21",
      telegram: "https://t.me/KingCather3um",
    }
  },
  {
    name: "Unbothered",
    role: "Media (Lead)",
    image: "/team/UNB.png",
    socials: {
      twitter: "https://x.com/unbothered9000?t=Hz4Xm9jsQU9tB_-KIgVYzg&s=09",
      telegram: "https://t.me/bothered4",
    }
  },
  {
    name: "Wonder Cruise",
    role: "Logistics (Lead)",
    image: "/team/WONDER.jpg",
    socials: {
      twitter: "https://x.com/wondercruise_?t=v57G-EHfQNhJkdpaZBCQ9g&s=09",
      telegram: "https://t.me/wondercruise",
    }
  },
  {
    name: "Emmanuel Tega",
    role: "Design",
    image: "/team/TEGA.jpg",
    socials: {
      twitter: "https://x.com/emmanuelforty10?s=21",
      telegram: "https://t.me/emmanuelep55",
    }
  },
];

const Team = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const displayedMembers = teamMembers.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="team" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron mb-4 gradient-text inline-block">
            THE TEAM
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-glitch-blue via-glitch-purple to-glitch-pink mx-auto my-6"></div>
          <p className="text-white/70 max-w-3xl mx-auto text-lg font-space">
            Meet the visionaries behind GLITCH3D
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {displayedMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-glitch-purple/50 group-hover:shadow-lg group-hover:shadow-glitch-purple/20">
                  <div className="relative aspect-square overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-orbitron mb-2 text-white">{member.name}</h3>
                    <p className="text-glitch-pink font-space mb-4">{member.role}</p>
                    <div className="flex space-x-3">
                      <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                        <XIcon />
                      </a>
                      <a href={member.socials.telegram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-glitch-blue transition-colors">
                        <TGIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-10 space-x-4">
              <Button
                onClick={prevPage}
                variant="outline"
                className="border-glitch-purple hover:bg-glitch-purple/20 text-white"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <div className="flex items-center text-white/70 space-x-1">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentPage === i ? "bg-glitch-pink w-4" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <Button
                onClick={nextPage}
                variant="outline"
                className="border-glitch-purple hover:bg-glitch-purple/20 text-white"
              >
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
