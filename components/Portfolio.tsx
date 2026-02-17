
import React from 'react';
import { ProjectData } from '../App';

interface PortfolioProps {
  onViewAll: () => void;
  onSelectProject: (project: ProjectData) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onViewAll, onSelectProject }) => {
  const projects: ProjectData[] = [
    { 
      id: 1, 
      title: 'EMAIL MARKETING STRATEGY', 
      category: 'INFOGRAPHICS', 
      image: 'https://i.ibb.co/7dy6xdLT/Untitled-design.png', 
      size: 'large',
      client: 'Growth Dynamics',
      year: '2024',
      description: 'A comprehensive infographic breakdown of modern email marketing techniques designed to strengthen brand approach and conversion rates.'
    },
    { 
      id: 20, 
      title: 'USER JOURNEY MAP', 
      category: 'INFOGRAPHICS', 
      image: 'https://picsum.photos/seed/journey/800/1000?grayscale', 
      size: 'small',
      client: 'UX Collective',
      year: '2024',
      description: 'Mapping the digital footprint and interaction patterns of modern users in a clean, editorial layout.'
    },
    { 
      id: 3, 
      title: 'GANESHA WORKSHOP FLYER', 
      category: 'FLYER', 
      image: 'https://i.ibb.co/ycTGBHVS/flyer-12.png', 
      size: 'medium',
      client: 'Artisan Soul',
      year: '2024',
      description: 'A custom designed flyer for an eco-friendly clay Ganesha workshop, blending traditional art with modern marketing aesthetics.'
    },
    { 
      id: 4, 
      title: 'MINIMALIST SEMINAR', 
      category: 'FLYER', 
      image: 'https://i.ibb.co/hFC7GNXj/55.png', 
      size: 'medium',
      client: 'Design Hub',
      year: '2024',
      description: 'A striking minimalist flyer for a creative seminar, focusing on bold typography and structured layout.'
    },
    { 
      id: 5, 
      title: 'Golden Palm', 
      category: 'Editorial', 
      image: 'https://picsum.photos/seed/p5/1200/800', 
      size: 'large', 
      accent: true,
      client: 'VOGUE India',
      year: '2024',
      description: 'A vibrant editorial showcase blending natural landscapes with high-fashion textures.'
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="relative mb-24 flex items-center justify-center">
        <h2 className="text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] font-display font-black text-brand-black leading-none pointer-events-none uppercase">
          portfolio
        </h2>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[120%] border-t border-brand-black/5 rotate-[-5deg]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, idx) => (
          <div 
            key={project.id} 
            onClick={() => onSelectProject(project)}
            className={`group relative overflow-hidden rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
              project.size === 'large' ? 'lg:col-span-2 aspect-video' : 'aspect-square'
            } ${idx % 2 === 0 ? 'mt-0' : 'md:mt-12'}`}
          >
            <div className={`absolute inset-0 z-10 bg-gradient-to-t from-brand-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            <img 
              src={project.image} 
              alt={project.title} 
              className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${project.accent ? '' : 'brightness-110'}`}
            />

            <div className="absolute bottom-8 left-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-brand-mustard text-xs font-bold tracking-[0.2em] uppercase">{project.category}</span>
              <h4 className="text-brand-cream text-3xl font-display font-bold mt-1">{project.title}</h4>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-24 flex justify-center">
        <button 
          onClick={onViewAll}
          className="px-12 py-5 bg-brand-black text-brand-cream rounded-full font-display font-bold text-lg hover:bg-brand-mustard hover:text-brand-black transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          View All Works
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
