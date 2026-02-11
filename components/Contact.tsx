import React from 'react';
import { Send, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const socialIconClass = "w-14 h-14 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-mustard hover:text-brand-black hover:border-brand-mustard hover:shadow-[0_0_20px_#F4B740] transition-all group";

  return (
    <div className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <h2 className="text-6xl md:text-8xl font-display font-black leading-none">
              Let's <br />
              Collaborate.
            </h2>
            <p className="text-xl text-brand-cream/50 max-w-md font-light">
              Available for selected freelance projects, gallery exhibitions, and creative consultations worldwide.
            </p>
            
            <div className="flex flex-col gap-6 mt-8">
              <a href="mailto:harshchaudhary2701@gmail.com" className="group flex items-center gap-4 text-2xl font-display hover:text-brand-mustard transition-colors">
                <div className="w-12 h-12 rounded-full border border-brand-cream/20 flex items-center justify-center group-hover:bg-brand-mustard group-hover:border-brand-mustard group-hover:text-brand-black group-hover:shadow-[0_0_15px_#F4B740] transition-all">
                  <Mail size={20} />
                </div>
                harshchaudhary2701@gmail.com
              </a>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/__.harshhhh.hhaaa/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={socialIconClass}
                >
                  <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className={socialIconClass}>
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className={socialIconClass}>
                  <Send size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 group">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cream/40 mb-2 block group-focus-within:text-brand-mustard transition-colors">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-brand-cream/10 py-4 outline-none focus:border-brand-mustard transition-colors text-xl"
                  />
                </div>
                <div className="flex-1 group">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cream/40 mb-2 block group-focus-within:text-brand-mustard transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-brand-cream/10 py-4 outline-none focus:border-brand-mustard transition-colors text-xl"
                  />
                </div>
              </div>
              <div className="group">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cream/40 mb-2 block group-focus-within:text-brand-mustard transition-colors">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-brand-cream/10 py-4 outline-none focus:border-brand-mustard transition-colors text-xl resize-none"
                />
              </div>
              <button className="group mt-4 flex items-center justify-between px-10 py-6 bg-brand-mustard text-brand-black rounded-full font-display font-black text-xl hover:bg-brand-cream hover:shadow-[0_0_25px_rgba(244,183,64,0.4)] transition-all duration-500 overflow-hidden relative">
                <span className="relative z-10">Send Message</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;