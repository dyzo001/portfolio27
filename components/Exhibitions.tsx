
import React from 'react';

const Exhibitions: React.FC = () => {
  const events = [
    { id: '01', title: 'Cinematic Visions Unveiled', location: 'Madrid Gallery, Spain', date: '21 Nov 2023' },
    { id: '02', title: 'Frames in Motion', location: 'Manchester Museum, UK', date: '20 Nov 2023' },
    { id: '03', title: 'Journey Through Time', location: 'Milan Gallery, Italy', date: '19 Nov 2023' },
    { id: '04', title: 'Experimental Narratives', location: 'Paris Museum, France', date: '18 Nov 2023' },
  ];

  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <div className="overflow-hidden mb-16">
          <div className="inline-block animate-marquee whitespace-nowrap text-[6rem] md:text-[10rem] font-display font-black text-brand-black leading-none opacity-10">
            exhibitions . exhibitions . exhibitions . exhibitions . exhibitions . 
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {events.map((event) => (
            <div 
              key={event.id}
              className="group flex flex-col md:flex-row items-center justify-between py-12 border-b border-brand-black/5 transition-all duration-300 hover:bg-white px-8 rounded-2xl"
            >
              <div className="flex items-center gap-10 md:gap-20 w-full md:w-1/2">
                <span className="text-xs font-bold text-brand-black/30 font-display">{event.id}</span>
                <h3 className="text-3xl md:text-5xl font-display font-bold group-hover:translate-x-4 transition-transform duration-500">
                  {event.title}
                </h3>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-8 md:mt-0 w-full md:w-auto justify-end">
                <div className="text-right">
                  <p className="text-xs font-bold text-brand-black/50 uppercase tracking-widest">{event.location}</p>
                  <p className="text-sm font-medium">{event.date}</p>
                </div>
                <button className="px-8 py-3 border border-brand-black rounded-full font-bold text-sm hover:bg-brand-black hover:text-brand-cream transition-all duration-300">
                  Buy Ticket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
