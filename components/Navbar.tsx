
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { ViewType } from '../App';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', view: 'home' as ViewType },
    { name: 'About', href: '#about', view: 'about' as ViewType },
    { name: 'Portfolio', href: '#portfolio', view: 'gallery' as ViewType },
    { name: 'Contact', href: '#contact', view: 'contact' as ViewType },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    e.preventDefault();
    onNavigate(link.view);
    
    if (link.view === 'home') {
      const element = document.querySelector(link.href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled || currentView !== 'home' ? 'bg-brand-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => onNavigate('home')} className="flex items-center gap-1 group">
          <div className="w-8 h-8 bg-brand-black rounded-full transition-transform group-hover:scale-110" />
          <div className="w-4 h-8 bg-brand-black rounded-full transition-transform group-hover:scale-110" />
          <div className="w-8 h-8 border-2 border-brand-black rounded-full transition-transform group-hover:scale-110" />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`text-sm font-medium hover:text-brand-mustard transition-colors relative group ${
                currentView === link.view ? 'text-brand-mustard' : 'text-brand-black'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-brand-mustard transition-all duration-300 ${
                currentView === link.view ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          ))}
        </div>

        {/* Right Info */}
        <div className="hidden lg:flex items-center gap-4 text-[10px] tracking-widest uppercase text-brand-black/60 font-semibold">
          <span className="flex items-center gap-1">
            <Globe size={10} className="text-brand-mustard" /> Greater Noida, U.P.
          </span>
          <div className="w-6 h-6 rounded-full overflow-hidden border border-brand-black/20">
            <img src="https://picsum.photos/seed/profile/50/50" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-brand-black text-brand-cream z-[60] flex flex-col items-center justify-center transition-transform duration-500 ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <button 
          className="absolute top-8 right-8"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`text-4xl font-display font-bold hover:text-brand-mustard transition-colors ${
                currentView === link.view ? 'text-brand-mustard' : ''
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
