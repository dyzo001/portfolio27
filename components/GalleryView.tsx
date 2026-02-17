
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
      title: 'EMAIL MARKETING STRATEGY', 
      category: 'INFOGRAPHICS', 
      image: 'https://i.ibb.co/7dy6xdLT/Untitled-design.png', 
      client: 'Growth Dynamics', 
      year: '2024', 
      description: 'A comprehensive infographic breakdown of modern email marketing techniques designed to strengthen brand approach and conversion rates.' 
    },
    { 
      id: 2, 
      title: 'DIGITAL MARKETING AGENCY', 
      category: 'FLYER', 
      image: 'https://i.ibb.co/bjs6ty2c/44.png', 
      client: 'Creative Minds', 
      year: '2024', 
      description: 'A professional and clean digital marketing agency flyer designed for high conversion and brand authority.' 
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
    { 
      id: 4, 
      title: 'MINIMALIST SEMINAR', 
      category: 'FLYER', 
      image: 'https://i.ibb.co/hFC7GNXj/55.png', 
      client: 'Design Hub', 
      year: '2024', 
      description: 'A striking minimalist flyer for a creative seminar, focusing on bold typography and structured layout.' 
    },
    { 
      id: 18, 
      title: 'KINETIC DATA VIZ', 
      category: 'INFOGRAPHICS', 
      image: 'https://picsum.photos/seed/kdata/800/1000?grayscale', 
      client: 'Tech Insights', 
      year: '2024', 
      description: 'A visual analysis of motion and flow within digital ecosystems, translated into a bold infographic format.' 
    },
    { 
      id: 19, 
      title: 'PROCESS FLOW DESIGN', 
      category: 'INFOGRAPHICS', 
      image: 'https://picsum.photos/seed/pflow/800/1000?grayscale', 
      client: 'Systems Corp', 
      year: '2024', 
      description: 'Breaking down complex industrial processes into elegant, digestible visual narratives.' 
    },
    { 
      id: 20, 
      title: 'USER JOURNEY MAP', 
      category: 'INFOGRAPHICS', 
      image: 'https://picsum.photos/seed/journey/800/1000?grayscale', 
      client: 'UX Collective', 
      year: '2024', 
      description: 'Mapping the digital footprint and interaction patterns of modern users in a clean, editorial layout.' 
    },
    { 
      id: 21, 
      title: 'REVENUE ARCHITECTURE', 
      category: 'INFOGRAPHICS', 
      image: 'https://picsum.photos/seed/revenue/800/1000?grayscale', 
      client: 'Growth Ops', 
      year: '2024', 
      description: 'A high-level visual breakdown of complex fiscal structures and growth projections.' 
    },
    { 
      id: 16, 
      title: 'AURA CREATIVE SUMMIT', 
      category: 'FLYER', 
      image: 'https://picsum.photos/seed/aura/800/1000', 
      client: 'Horizon Events', 
      year: '2024', 
      description: 'A premium branding concept for a global creative summit, focusing on high-end typography and spatial balance.' 
    },
    { 
      id: 17, 
      title: 'URBAN NOIR', 
      category: 'Photography', 
      image: 'https://picsum.photos/seed/noir/800/1000?grayscale', 
      client: 'City Stories', 
      year: '2023', 
      description: 'A cinematic exploration of light and shadow in the modern metropolis at night.' 
    },
    { id: 5, title: 'Golden Palm', category: 'THUMBNAILS', image: 'https://picsum.photos/seed/p5/800/1000', client: 'Traveler Mag', year: '2024', description: 'Saturated aesthetics for high engagement.' },
    { 
      id: 9, 
      title: 'TEAM MEETING', 
      category: 'FLYER', 
      image: 'https://i.ibb.co/BH4MHshj/flyer-2.png', 
      client: 'Corporate Pulse', 
      year: '2024', 
      description: 'A sleek, modern editorial flyer designed for professional team collaborations and corporate gatherings.' 
    },
    { id: 10, title: 'Stone Silence', category: 'INFOGRAPHICS', image: 'https://picsum.photos/seed/p10/800/1000?grayscale', client: 'Architecture Now', year: '2022', description: 'The history of stone in modernism.' },
    { id: 11, title: 'Silk Shadows', category: 'THUMBNAILS', image: 'https://picsum.photos/seed/p11/800/1000', client: 'Beauty Edit', year: '2024', description: 'Soft focus product photography.' },
    { id: 12, title: 'Glitch Theory', category: 'Photography', image: 'https://picsum.photos/seed/p12/800/1000?grayscale', client: 'Digital Arts', year: '2023', description: 'Embracing errors in the digital workflow.' },
    { 
      id: 13, 
      title: 'VIBE MUSIC FEST', 
      category: 'FLYER', 
      image: 'https://picsum.photos/seed/musicfest/800/1000', 
      client: 'Underground Beats', 
      year: '2024', 
      description: 'Dynamic and high-energy promotional design for a boutique electronic music festival.' 
    },
    { 
      id: 15, 
      title: 'YOGA RETREAT', 
      category: 'FLYER', 
      image: 'https://picsum.photos/seed/yoga/800/1000', 
      client: 'Zen Spaces', 
      year: '2024', 
      description: 'Calm and earthy visual design for a high-end wellness and yoga retreat advertisement.' 
    }
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
            <h1 className="text-8xl md:text-[10rem] font-display font-black uppercase tracking-tighter leading-[0.85]">
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
