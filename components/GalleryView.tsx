
import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { ProjectData } from '../App';

interface GalleryViewProps {
  onBack: () => void;
  onSelectProject: (project: ProjectData) => void;
}

const GalleryView: React.FC<GalleryViewProps> = ({ onBack, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Photography', 'FLYER', 'INFOGRAPHICS', 'THUMBNAILS'];

  const allWorks: ProjectData[] = [
    { 
      id: 1, 
      title: 'FIRE', 
      category: 'Photography', 
      image: 'https://i.ibb.co/sJqptJhx/IMG-20240201-WA0001.jpg', 
      client: 'Visual Narratives', 
      year: '2024', 
      description: 'Capturing the raw, untamed energy of light and heat in a single frame. A study of destructive beauty and warmth.' 
    },
    { 
      id: 2, 
      title: 'Urban Solitude', 
      category: 'Photography', 
      image: 'https://i.ibb.co/TMSqsFX5/IMG-20240118-WA0024.jpg', 
      client: 'Independent', 
      year: '2024', 
      description: 'Exploring city life through a lens of isolation.' 
    },
    { 
      id: 3, 
      title: 'GANESHA WORKSHOP FLYER', 
      category: 'FLYER', 
      image: 'https://i.ibb.co/ycTGBHVS/flyer-12.png', 
      client: 'Artisan Soul', 
      year: '2024', 
      description: 'A promotional flyer for a traditional hands-on Ganesha idol making workshop using sustainable materials.' 
    },
    { id: 4, title: 'Modern Echoes', category: 'INFOGRAPHICS', image: 'https://picsum.photos/seed/p4/800/1000?grayscale', client: 'Tech Weekly', year: '2022', description: 'Visualizing data with a cinematic edge.' },
    { id: 5, title: 'Golden Palm', category: 'THUMBNAILS', image: 'https://picsum.photos/seed/p5/800/1000', client: 'Traveler Mag', year: '2024', description: 'Saturated aesthetics for high engagement.' },
    { id: 6, title: 'Fluid Motion', category: 'Photography', image: 'https://picsum.photos/seed/p6/800/1000?grayscale', client: 'Motion Lab', year: '2023', description: 'High-frame rate experiments.' },
    { 
      id: 7, 
      title: 'NATURE', 
      category: 'Photography', 
      image: 'https://i.ibb.co/TMSqsFX5/IMG-20240118-WA0024.jpg', 
      client: 'Nature Collective', 
      year: '2024', 
      description: 'A deep dive into the serene and untamed world of the natural environment.' 
    },
    { id: 8, title: 'Neon Pulse', category: 'Photography', image: 'https://picsum.photos/seed/p8/800/1000?grayscale', client: 'Synth Records', year: '2024', description: 'Visualizers for ambient electronic music.' },
    { 
      id: 9, 
      title: 'CREATIVE EVENT FLYER', 
      category: 'FLYER', 
      image: 'https://i.ibb.co/BH4MHshj/flyer-2.png', 
      client: 'Global Events', 
      year: '2024', 
      description: 'An editorial style flyer designed for premium creative workshops and events.' 
    },
    { id: 10, title: 'Stone Silence', category: 'INFOGRAPHICS', image: 'https://picsum.photos/seed/p10/800/1000?grayscale', client: 'Architecture Now', year: '2022', description: 'The history of stone in modernism.' },
    { id: 11, title: 'Silk Shadows', category: 'THUMBNAILS', image: 'https://picsum.photos/seed/p11/800/1000', client: 'Beauty Edit', year: '2024', description: 'Soft focus product photography.' },
    { id: 12, title: 'Glitch Theory', category: 'Photography', image: 'https://picsum.photos/seed/p12/800/1000?grayscale', client: 'Digital Arts', year: '2023', description: 'Embracing errors in the digital workflow.' },
  ];

  const filteredWorks = activeFilter === 'All' 
    ? allWorks 
    : allWorks.filter(work => work.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="bg-brand-cream min-h-screen pt-32 pb-24 relative overflow-x-hidden">
      {/* Massive Background Title Decoration */}
      <div className="absolute top-20 left-10 opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[15rem] md:text-[25rem] font-display font-black leading-none uppercase">
          Gallery
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="flex flex-col items-start">
            <button 
              onClick={onBack}
              className="group flex items-center gap-2 text-brand-black/40 hover:text-brand-mustard transition-colors mb-6 text-sm font-bold uppercase tracking-widest"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
            <h1 className="text-8xl md:text-[10rem] font-display font-black uppercase tracking-tighter leading-[0.8]">
              Gallery
            </h1>
          </div>
          
          {/* Filters aligned to the right in desktop */}
          <div className="flex flex-wrap gap-2 md:gap-3 justify-start md:justify-end max-w-2xl">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                  activeFilter === filter 
                    ? 'bg-brand-black text-brand-cream border-brand-black shadow-lg' 
                    : 'border-brand-black/10 text-brand-black/40 hover:border-brand-mustard hover:text-brand-mustard'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8 animate-fade-in stagger-2">
          {filteredWorks.map((work) => (
            <div 
              key={work.id}
              onClick={() => onSelectProject(work)}
              className="break-inside-avoid group relative overflow-hidden rounded-[2.5rem] bg-brand-black shadow-lg cursor-pointer transform transition-transform duration-700 hover:-translate-y-2"
            >
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-50 grayscale group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 text-center bg-brand-black/20 backdrop-blur-[2px]">
                <span className="text-brand-mustard text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                  {work.category}
                </span>
                <h3 className="text-brand-cream text-2xl font-display font-bold leading-tight">
                  {work.title}
                </h3>
                <div className="mt-6 w-12 h-12 border border-brand-cream/20 rounded-full flex items-center justify-center group-hover:border-brand-mustard group-hover:bg-brand-mustard/10 transition-all">
                   <div className="w-2 h-2 bg-brand-mustard rounded-full animate-pulse shadow-[0_0_10px_#F4B740]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <div className="py-32 flex flex-col items-center text-center">
            <Search size={48} className="text-brand-black/10 mb-4" />
            <p className="text-brand-black/40 font-display text-xl">No works found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryView;
