
import React from 'react';
import { ArrowLeft, Target, Plus, Zap, Heart, Camera } from 'lucide-react';

interface AboutViewProps {
  onBack: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onBack }) => {
  const skills = [
    'Adobe Premiere Pro',
    'Adobe Photoshop',
    'Adobe Lightroom',
    'CapCut',
    'Final Cut Pro',
    'Canva'
  ];

  return (
    <div className="bg-brand-cream min-h-screen pt-32 pb-24 text-brand-black overflow-x-hidden">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-brand-black/40 hover:text-brand-mustard transition-colors mb-12 text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="flex flex-col gap-24">
          {/* Hero Section of About */}
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <h1 className="text-7xl md:text-9xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-8">
                Harsh <br /> 
                <span className="text-outline">Chaudhary</span>
              </h1>
              <div className="w-32 h-1 bg-brand-mustard mb-12" />
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-brand-black/70 mb-8 italic">
                "I help bring ideas to life through engaging video edits. From reels to full-length videos, I create content that looks polished and keeps viewers hooked"
              </p>
            </div>
            <div className="w-full lg:w-1/2 relative">
               <div className="rounded-[4rem] overflow-hidden bg-brand-black aspect-[4/5] relative">
                <img 
                  src="https://i.ibb.co/8L6yZ321/harsha.jpg" 
                  alt="Harsh Chaudhary Portrait" 
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute top-8 right-8 text-brand-mustard animate-pulse">
                  <Camera size={32} />
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-mustard rounded-full flex items-center justify-center p-8 -rotate-12 shadow-xl">
                 <p className="text-brand-black font-black text-center text-xs leading-tight uppercase tracking-tighter">
                   Based in Noida. Working Worldwide.
                 </p>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-brand-black/10 pt-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-display font-black uppercase mb-8">My Philosophy</h2>
              <div className="space-y-6 text-xl leading-relaxed text-brand-black/60 font-medium">
                <p>
                  I believe great visuals are created where creativity meets clarity. My philosophy is to understand the purpose behind every project and deliver video edits and graphics that communicate ideas effectively, look professional, and leave a lasting impression.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-mustard rounded-full flex items-center justify-center shrink-0">
                  <Zap size={24} className="text-brand-black" />
                </div>
                <div>
                  <h4 className="font-display font-black uppercase text-lg mb-2">Efficient</h4>
                  <p className="text-brand-black/40 text-sm">Building fast, optimized, and performant solutions without compromise.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-black rounded-full flex items-center justify-center shrink-0">
                  <Heart size={24} className="text-brand-cream" />
                </div>
                <div>
                  <h4 className="font-display font-black uppercase text-lg mb-2">Passionate</h4>
                  <p className="text-brand-black/40 text-sm">Deeply committed to the craft of visual excellence and user experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-brand-black rounded-full flex items-center justify-center shrink-0">
                  <Plus size={24} className="text-brand-black" />
                </div>
                <div>
                  <h4 className="font-display font-black uppercase text-lg mb-2">Collaborative</h4>
                  <p className="text-brand-black/40 text-sm">Your vision combined with my expertise creates something truly unique.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="border-t border-brand-black/10 pt-16">
            <h2 className="text-7xl md:text-[12rem] font-display font-black uppercase mb-16 tracking-tighter leading-none">Skills</h2>
            <div className="flex flex-wrap gap-x-12 gap-y-8">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-4 group cursor-default">
                  <div className="w-2 h-2 bg-brand-mustard rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-2xl md:text-5xl font-display font-black uppercase tracking-tighter text-brand-black/80 hover:text-brand-black hover:tracking-normal transition-all duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="bg-brand-black rounded-[3rem] p-12 md:p-20 text-brand-cream flex flex-col md:flex-row justify-between items-center gap-12 overflow-hidden relative">
             <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
               <Target size={300} strokeWidth={0.5} />
             </div>
             
             <div className="text-center md:text-left relative z-10">
               <span className="text-brand-mustard font-black text-6xl md:text-8xl block mb-2">01+</span>
               <span className="uppercase tracking-[0.3em] font-bold text-xs opacity-40">Years of Craft</span>
             </div>
             <div className="text-center md:text-left relative z-10">
               <span className="text-brand-mustard font-black text-6xl md:text-8xl block mb-2">50+</span>
               <span className="uppercase tracking-[0.3em] font-bold text-xs opacity-40">Projects Completed</span>
             </div>
             <div className="text-center md:text-left relative z-10">
               <span className="text-brand-mustard font-black text-6xl md:text-8xl block mb-2">100%</span>
               <span className="uppercase tracking-[0.3em] font-bold text-xs opacity-40">Happy Clients</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
