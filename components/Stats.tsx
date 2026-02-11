
import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-start gap-12 lg:gap-32">
      <div className="flex flex-col">
        <h3 className="text-6xl font-display font-bold text-brand-black">+250k</h3>
        <p className="text-xs uppercase tracking-widest font-bold text-brand-black/60 mt-2 max-w-[200px]">
          Videos that reaching a wide audience and give lasting impression
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-6xl font-display font-bold text-brand-black">+800k</h3>
        <p className="text-xs uppercase tracking-widest font-bold text-brand-black/60 mt-2 max-w-[200px]">
          Hours watched, engaging storytelling that captivates viewers
        </p>
      </div>
    </div>
  );
};

export default Stats;
