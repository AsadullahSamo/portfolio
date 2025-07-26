import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/ThemeProvider';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';
// import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
        <SEOHead />
        <div className="min-h-screen bg-background text-foreground">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
            ) : (
              <div key="main">
                {/* Skip to main content for accessibility */}
                <a href="#main-content" className="skip-to-main">
                  Skip to main content
                </a>
                {/* <CustomCursor /> */}
                <ScrollProgress />
                <Navigation />
                <main id="main-content">
                  <section id="home">
                    <Hero />
                  </section>
                  <About />
                  <section id="skills">
                    <Skills />
                  </section>
                  <Projects />
                  <Contact />
                </main>
                <Footer />
              </div>
            )}
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
