import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/ThemeProvider';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';
// import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import Services from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
          ) : (
            <div key="main">
              {/* <CustomCursor /> */}
              <ScrollProgress />
              <Navigation />
              <main>
                <section id="home">
                  <Hero />
                </section>
                <About />
                <Stats />
                <Timeline />
                <Services />
                <Projects />
                <Contact />
              </main>
              <Footer />
            </div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
