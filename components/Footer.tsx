
import React from 'react';
import { ViewType } from '../App';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-black text-brand-cream pt-20 pb-12">
      <div className="container mx-auto px-6">
        
        {/* Giant Logo/Text */}
        <div className="overflow-hidden mb-20 pointer-events-none">
          <h1 className="text-[12rem] md:text-[22rem] lg:text-[28rem] font-display font-black text-brand-cream opacity-[0.03] leading-none -mb-20 uppercase">
            CHAUDHARY
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-brand-cream/10 pt-12">
          {/* Logo Brand */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-1 mb-8 md:mb-0 group">
            <div className="w-8 h-8 bg-brand-cream rounded-full transition-transform group-hover:scale-110" />
            <div className="w-4 h-8 bg-brand-cream rounded-full transition-transform group-hover:scale-110" />
            <div className="w-8 h-8 border-2 border-brand-cream rounded-full transition-transform group-hover:scale-110" />
          </button>

          {/* Navigation */}
          <div className="flex gap-8 mb-8 md:mb-0">
            {[
              { name: 'Home', view: 'home' as ViewType },
              { name: 'About', view: 'home' as ViewType },
              { name: 'Portfolio', view: 'gallery' as ViewType },
              { name: 'Contact', view: 'contact' as ViewType }
            ].map((item) => (
              <button 
                key={item.name} 
                onClick={() => onNavigate(item.view)}
                className="text-xs uppercase tracking-widest font-bold hover:text-brand-mustard transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-[10px] uppercase tracking-widest font-bold text-brand-cream/40">
            © 2024 Harsh Chaudhary. Built for Cinematic Minds.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
