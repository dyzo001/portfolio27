
import React from 'react';
import { ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import { ProjectData } from '../App';

interface ProjectViewProps {
  project: ProjectData;
  onBack: () => void;
}

const ProjectView: React.FC<ProjectViewProps> = ({ project, onBack }) => {
  return (
    <div className="bg-brand-cream min-h-screen pt-32 pb-24 text-brand-black relative overflow-x-hidden">
      {/* Dynamic Background Title */}
      <div className="absolute top-20 left-10 opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[15rem] md:text-[25rem] font-display font-black leading-none uppercase">
          {project.title.split(' ').pop()}
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Navigation / Header */}
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-brand-black/40 hover:text-brand-mustard transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Gallery
          </button>
          <div className="flex gap-4">
             <button className="w-10 h-10 rounded-full border border-brand-black/10 flex items-center justify-center hover:bg-brand-mustard hover:border-brand-mustard transition-colors">
               <Share2 size={16} />
             </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col gap-12 mb-24">
          <div className="max-w-4xl">
            <span className="text-brand-mustard text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
              {project.category}
            </span>
            <h1 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-8 animate-slide-up text-brand-black">
              {project.title}
            </h1>
          </div>

          <div className="rounded-[4rem] overflow-hidden bg-brand-black aspect-video shadow-2xl relative animate-fade-in stagger-1">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale-0 brightness-100"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="max-w-4xl mb-24">
          <h2 className="text-2xl md:text-4xl font-display font-black uppercase border-b border-brand-black/5 pb-6 mb-8 tracking-tight">
            PROJECT OVERVIEW
          </h2>
          <p className="text-2xl md:text-3xl leading-relaxed text-brand-black/70 font-light">
            {project.description || "Every project is a unique blend of visual storytelling and technical precision. In this particular work, we aimed to redefine the traditional boundaries of the medium, focusing on the subtle nuances that often go unnoticed."}
          </p>
        </div>

        {/* Cinematic Gallery Section */}
        <div className="space-y-12 mb-32">
          <h2 className="text-3xl font-display font-black uppercase text-center tracking-tighter">Selected Stills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[3rem] overflow-hidden bg-brand-black aspect-[4/3]">
              <img src={`https://picsum.photos/seed/${project.id}-1/1200/900?grayscale`} alt="Still 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[3rem] overflow-hidden bg-brand-black aspect-[4/3]">
              <img src={`https://picsum.photos/seed/${project.id}-2/1200/900?grayscale`} alt="Still 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[3rem] overflow-hidden bg-brand-black aspect-[16/9] md:col-span-2">
              <img src={`https://picsum.photos/seed/${project.id}-3/1600/900?grayscale`} alt="Widescreen Still" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-brand-black/10 pt-16 flex justify-between items-center group cursor-pointer" onClick={onBack}>
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-black/40 mb-2">Next Project</span>
            <h3 className="text-4xl md:text-6xl font-display font-black uppercase group-hover:text-brand-mustard transition-colors">Urban Shadows</h3>
          </div>
          <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-black rounded-full flex items-center justify-center text-brand-cream group-hover:bg-brand-mustard group-hover:text-brand-black transition-all">
             <ArrowRight size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
