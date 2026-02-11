
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Exhibitions from './components/Exhibitions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import AboutView from './components/AboutView';
import ProjectView from './components/ProjectView';

export type ViewType = 'home' | 'gallery' | 'contact' | 'about' | 'project';

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  image: string;
  size?: string;
  accent?: boolean;
  description?: string;
  client?: string;
  year?: string;
}

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navigateTo = (view: ViewType, project?: ProjectData) => {
    if (project) setSelectedProject(project);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen font-sans selection:bg-brand-mustard selection:text-brand-black">
      <Navbar currentView={currentView} onNavigate={navigateTo} />
      
      <main className="transition-opacity duration-500">
        {currentView === 'home' && (
          <>
            <section id="home">
              <Hero onNavigate={navigateTo} />
            </section>
            
            <section id="about" className="bg-brand-black text-brand-cream overflow-hidden">
              <About />
            </section>

            <section id="portfolio" className="bg-brand-cream py-24">
              <Portfolio 
                onViewAll={() => navigateTo('gallery')} 
                onSelectProject={(project) => navigateTo('project', project)}
              />
            </section>

            <section id="exhibitions" className="bg-brand-cream border-t border-brand-black/5">
              <Exhibitions />
            </section>

            <section id="contact" className="bg-brand-black text-brand-cream">
              <Contact />
            </section>
          </>
        )}
        
        {currentView === 'gallery' && (
          <GalleryView 
            onBack={() => navigateTo('home')} 
            onSelectProject={(project) => navigateTo('project', project)}
          />
        )}

        {currentView === 'contact' && (
          <ContactView onBack={() => navigateTo('home')} />
        )}

        {currentView === 'about' && (
          <AboutView onBack={() => navigateTo('home')} />
        )}

        {currentView === 'project' && selectedProject && (
          <ProjectView 
            project={selectedProject} 
            onBack={() => navigateTo('gallery')} 
          />
        )}
      </main>
      
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
