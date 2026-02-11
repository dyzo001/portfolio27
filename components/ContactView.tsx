import React from 'react';
import { ArrowLeft, Send, Mail, Phone, MapPin, Instagram, Linkedin, ArrowRight } from 'lucide-react';

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

interface ContactViewProps {
  onBack: () => void;
}

const ContactView: React.FC<ContactViewProps> = ({ onBack }) => {
  return (
    <div className="bg-brand-black min-h-screen pt-32 pb-24 text-brand-cream overflow-x-hidden">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-brand-cream/40 hover:text-brand-mustard transition-colors mb-12 text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="flex flex-col lg:flex-row gap-24">
          {/* Left Column: Editorial Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="text-7xl md:text-9xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-12">
              Get <br /> 
              <span className="text-outline-white">In Touch</span>
            </h1>
            
            <div className="flex flex-col gap-10 mb-16">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-mustard">Email Me</span>
                <a href="mailto:harshchaudhary2701@gmail.com" className="text-xl font-display hover:text-brand-mustard hover:drop-shadow-[0_0_10px_#F4B740] transition-all">harshchaudhary2701@gmail.com</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-mustard">Call Me</span>
                <a 
                  href="https://wa.me/919220488696" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl font-display hover:text-brand-mustard hover:drop-shadow-[0_0_10px_#F4B740] transition-all"
                >
                  +91 9220488696 (Whatsapp only)
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-mustard">Location</span>
                <span className="text-xl font-display">Greater Noida, U.P.</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-mustard">Socials</span>
                <div className="flex gap-4 mt-2">
                  <a 
                    href="https://www.instagram.com/__.harshhhh.hhaaa/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-brand-cream/40 hover:text-brand-mustard hover:drop-shadow-[0_0_12px_#F4B740] transition-all group"
                  >
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-brand-cream/40 hover:text-brand-mustard hover:drop-shadow-[0_0_12px_#F4B740] transition-all group">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://wa.me/919220488696" target="_blank" rel="noopener noreferrer" className="text-brand-cream/40 hover:text-brand-mustard hover:drop-shadow-[0_0_12px_#F4B740] transition-all group">
                    <WhatsAppIcon size={20} />
                  </a>
                  <a href="#" className="text-brand-cream/40 hover:text-brand-mustard hover:drop-shadow-[0_0_12px_#F4B740] transition-all group">
                    <XIcon size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="mt-auto hidden lg:block">
              <div className="w-32 h-[1px] bg-brand-mustard mb-8" />
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-cream/20">
                HARSH CHAUDHARY
              </p>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-sm">
              <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
                <div className="group">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cream/40 mb-4 block group-focus-within:text-brand-mustard transition-colors">
                    What's your name?
                  </label>
                  <input 
                    type="text" 
                    placeholder="Type your name here"
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-brand-mustard transition-all text-2xl font-display placeholder:text-white/10"
                  />
                </div>

                <div className="group">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cream/40 mb-4 block group-focus-within:text-brand-mustard transition-colors">
                    Your email address
                  </label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-brand-mustard transition-all text-2xl font-display placeholder:text-white/10"
                  />
                </div>

                <div className="group">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cream/40 mb-4 block group-focus-within:text-brand-mustard transition-colors">
                    Project details
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your vision..."
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-brand-mustard transition-all text-2xl font-display placeholder:text-white/10 resize-none"
                  />
                </div>

                <button className="group relative mt-8 w-full overflow-hidden rounded-full bg-brand-mustard py-8 px-12 text-center text-xl font-black text-brand-black transition-all hover:bg-brand-cream hover:shadow-[0_0_30px_#F4B740]">
                  <div className="relative z-10 flex items-center justify-center gap-4">
                    SEND INQUIRY
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;