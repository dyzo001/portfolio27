import React from 'react';
import { Target, Plus } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="relative py-24 bg-brand-black text-brand-cream overflow-hidden">
      {/* Marquee Background */}
      <div className="absolute top-0 w-full overflow-hidden whitespace-nowrap py-4 border-b border-brand-cream/10">
        <div className="inline-block animate-marquee text-9xl font-display font-black text-outline-white opacity-20 select-none">
          ABOUT . ABOUT . ABOUT . ABOUT . ABOUT . ABOUT . ABOUT . ABOUT . ABOUT . 
        </div>
      </div>

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative group">
            {/* Artistic Border Elements */}
            <div className="absolute -top-10 -left-10 text-brand-cream/40"><Target size={40} /></div>
            <div className="absolute -top-10 -right-10 text-brand-cream/40"><Target size={40} /></div>
            <div className="absolute -bottom-10 -left-10 text-brand-cream/40"><Target size={40} /></div>
            <div className="absolute -bottom-10 -right-10 text-brand-cream/40"><Target size={40} /></div>
            <div className="absolute top-1/2 -left-10 text-brand-cream/40"><Plus size={40} /></div>
            <div className="absolute top-1/2 -right-10 text-brand-cream/40"><Plus size={40} /></div>

            {/* Portrait Image */}
            <div className="rounded-[4rem] overflow-hidden bg-brand-mustard aspect-[3/4] shadow-2xl">
              <img 
                src="https://i.ibb.co/DD0k580M/harsha.jpg" 
                alt="Harsh Chaudhary Portrait" 
                className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <h2 className="text-5xl md:text-8xl font-display font-bold leading-none">
              Building <br />
              <span className="text-brand-mustard">Practical</span> <br />
              Digital Solutions.
            </h2>
            <p className="text-xl text-brand-cream/60 leading-relaxed font-light max-w-xl">
              A freelancer focused on building practical, clean, and reliable digital solutions. I believe in quality, clarity, and on-time delivery.
            </p>
            
            {/* Stats Box with Blue Border from Screenshot */}
            <div className="mt-8 p-8 border-2 border-brand-blue rounded-xl flex flex-col md:flex-row justify-between items-center gap-8 bg-brand-black/40 backdrop-blur-sm">
              <div className="text-center md:text-left">
                <span className="block text-brand-mustard font-display font-bold text-5xl">01+</span>
                <span className="text-[10px] uppercase tracking-widest font-black text-brand-cream/40">Years Experience</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-brand-mustard font-display font-bold text-5xl">50+</span>
                <span className="text-[10px] uppercase tracking-widest font-black text-brand-cream/40">Projects Delivered</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-brand-mustard font-display font-bold text-5xl">100%</span>
                <span className="text-[10px] uppercase tracking-widest font-black text-brand-cream/40">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;