
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
      title: 'FIRE', 
      category: 'Photography', 
      image: 'https://i.ibb.co/sJqptJhx/IMG-20240201-WA0001.jpg', 
      size: 'large',
      client: 'Visual Narratives',
      year: '2024',
      description: 'Capturing the raw, untamed energy of light and heat in a single frame. A study of destructive beauty and warmth.'
    },
    { 
      id: 2, 
      title: 'Urban Solitude', 
      category: 'Film', 
      image: 'https://i.ibb.co/TMSqsFX5/IMG-20240118-WA0024.jpg', 
      size: 'small',
      client: 'NIGHTWALKERS',
      year: '2024',
      description: 'Capturing the quiet, reflective moments of city life when the world goes to sleep.'
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
      title: 'Modern Echoes', 
      category: 'Architecture', 
      image: 'https://picsum.photos/seed/p4/1000/800?grayscale', 
      size: 'medium',
      client: 'Studio Alpha',
      year: '2022',
      description: 'Documenting the brutalist influences in contemporary residential design.'
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
    },
    { 
      id: 6, 
      title: 'Fluid Motion', 
      category: 'Experimental', 
      image: 'https://picsum.photos/seed/p6/800/800?grayscale', 
      size: 'small',
      client: 'Dance Co.',
      year: '2023',
      description: 'Capturing the raw energy and dynamic flow of professional contemporary dancers.'
    },
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
