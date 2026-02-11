import React from 'react';
import { ArrowUpRight, Instagram, Facebook } from 'lucide-react';
import { ViewType } from '../App';

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="transition-transform group-hover:scale-110"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="transition-transform group-hover:scale-110"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
  </svg>
);

interface HeroProps {
  onNavigate: (view: ViewType) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const iconClass = "w-12 h-12 border border-brand-black/10 rounded-full flex items-center justify-center hover:bg-brand-mustard hover:border-brand-mustard hover:text-brand-black hover:shadow-[0_0_20px_#F4B740] transition-all duration-300 group";

  return (
    <section className="pt-32 pb-12 lg:pt-48 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Content Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-start opacity-0 animate-slide-up">
          <div className="relative inline-block mb-12">
            <h1 className="text-6xl md:text-7xl xl:text-[9rem] font-display font-black leading-[0.85] uppercase tracking-tighter text-left">
              <span className="text-outline">HARSH</span> <br />
              <span className="text-brand-black">CHAUDHARY</span>
            </h1>
          </div>
          
          <div className="max-w-xl opacity-0 animate-slide-up stagger-1 mb-12">
            <p className="text-brand-black/40 leading-relaxed font-medium text-xl md:text-2xl">
              A freelancer focused on building practical, clean, and reliable digital solutions. I believe in quality, clarity, and on-time delivery.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 opacity-0 animate-slide-up stagger-2">
            <a href="https://wa.me/919220488696" target="_blank" rel="noopener noreferrer" className={iconClass}>
              <WhatsAppIcon size={18} />
            </a>
            <a href="https://www.instagram.com/__.harshhhh.hhaaa/" target="_blank" rel="noopener noreferrer" className={iconClass}>
              <Instagram size={18} className="group-hover:scale-110" />
            </a>
            <a href="#" className={iconClass}>
              <Facebook size={18} className="group-hover:scale-110" />
            </a>
            <a href="#" className={iconClass}>
              <XIcon size={16} />
            </a>
          </div>
        </div>

        {/* Right Side: Visual Column */}
        <div className="w-full lg:w-1/2 relative opacity-0 animate-fade-in stagger-3">
          <div className="relative group overflow-hidden rounded-bl-[4rem] rounded-br-[4rem] rounded-tl-[1rem] rounded-tr-[1rem] shadow-2xl bg-brand-black aspect-[4/5] md:aspect-[16/9] lg:aspect-[4/5] xl:aspect-[5/6]">
            <img 
              src="https://i.ibb.co/DD0k580M/harsha.jpg" 
              alt="Harsh Chaudhary - Professional Portrait" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
            />
            
            {/* Call to Action Button - Now Navigates to About */}
            <div className="absolute bottom-10 right-10">
              <button 
                onClick={() => onNavigate('about')}
                className="w-20 h-20 bg-brand-mustard text-brand-black rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-xl group/btn hover:shadow-[0_0_30px_#F4B740]"
              >
                <ArrowUpRight size={32} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;