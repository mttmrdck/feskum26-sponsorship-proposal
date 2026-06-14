/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Maximize } from 'lucide-react';
import slides from './slides';

const slideNames = [
  "The Cover",
  "Exec Summary",
  "The Event",
  "The Reach",
  "Marketing Engine",
  "Sponsorship Tiers",
  "Sponsor Value",
  "Creative Activation",
  "The Exclusive Collection",
  "The Vision",
  "Trackside Exposure",
  "Participant Engagement",
  "Investment Transparency",
  "Logistics",
  "Contact"
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="h-[100dvh] w-full bg-[#0A0A0A] text-white flex overflow-hidden font-sans select-none selection:bg-[#FF007F] selection:text-white">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-[#FF007F20] bg-[#0D0D0D] flex flex-col p-6 hidden md:flex shrink-0">
        <div className="mb-12">
          <div className="text-[#FF007F] font-black text-2xl tracking-tighter uppercase italic underline underline-offset-8 decoration-2">FESKUM26</div>
          <div className="text-[10px] text-gray-500 mt-2 uppercase tracking-[0.3em]">Sponsorship Deck</div>
        </div>
        
        <nav className="flex-1 space-y-4">
          {slideNames.map((name, idx) => (
            <div 
              key={idx} 
              onClick={() => setCurrentSlide(idx)}
              className={`group cursor-pointer flex items-center justify-between transition-opacity ${currentSlide === idx ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
            >
              <div>
                <span className={`text-xs font-mono mr-3 ${currentSlide === idx ? 'text-[#FF007F]' : 'text-white'}`}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className={`text-xs uppercase tracking-widest ${currentSlide === idx ? 'font-semibold' : ''}`}>{name}</span>
              </div>
              {currentSlide === idx && <div className="w-1 h-1 bg-[#FF007F] rounded-full"></div>}
            </div>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="p-4 bg-[#FF007F10] border border-[#FF007F30] rounded-sm">
            <div className="text-[10px] text-gray-400 uppercase tracking-tighter">Next Step</div>
            <div className="text-xs font-bold text-[#FF007F] mt-1 italic">OWN THE NIGHT &rarr;</div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative bg-[#0D0D0D] overflow-hidden">
        {/* Top Bar Status */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 md:px-10 shrink-0">
          <div className="flex space-x-4 md:space-x-8 text-[10px] uppercase tracking-[0.2em] text-gray-500">
            <span className="hidden sm:inline">Universiti Malaya</span>
            <span>27.12.2026</span>
            <span className="hidden lg:inline">Phase: Recruitment</span>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="w-2 h-2 bg-[#FF007F] rounded-full shadow-[0_0_8px_#FF007F]"></div>
            <div className="w-2 h-2 bg-white/20 rounded-full"></div>
            <div className="w-2 h-2 bg-white/20 rounded-full"></div>
            <button 
               onClick={toggleFullscreen} 
               className="ml-4 p-2 hover:text-white text-gray-500 transition-colors focus:outline-none hidden sm:block"
               title="Toggle Fullscreen"
            >
               <Maximize size={16} />
            </button>
          </div>
        </header>

        {/* The Active Slide */}
        <section className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full p-8 md:p-16 flex flex-col relative"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[700px] border-l border-white/5 pointer-events-none z-0"></div>
              <div className="absolute top-32 right-32 w-48 h-[1px] bg-[#FF007F] pointer-events-none z-0"></div>
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Bottom UI Footer */}
        <footer className="h-20 border-t border-white/5 bg-[#0A0A0A] flex items-center px-4 md:px-10 justify-between shrink-0">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 border border-[#FF007F] items-center justify-center rounded-full hidden sm:flex">
              <span className="text-[#FF007F] text-[10px]">↘</span>
            </div>
            <div className="text-[10px] uppercase tracking-widest hidden sm:block">
              <div className="text-white font-bold">UM Creative Division</div>
              <div className="text-gray-500">sponsorship@feskum.um.edu.my</div>
            </div>
          </div>

          <div className="flex space-x-6 md:space-x-12">
            <div className="text-center hidden lg:block">
              <div className="text-lg font-mono font-bold leading-none text-white">42.4K</div>
              <div className="text-[8px] uppercase tracking-widest text-gray-500 mt-1">Students</div>
            </div>
            <div className="text-center hidden md:block">
              <div className="text-lg font-mono font-bold leading-none text-[#FF007F]">5.5K</div>
              <div className="text-[8px] uppercase tracking-widest text-gray-500 mt-1">Visitors</div>
            </div>
          </div>

          <div className="flex space-x-2">
            <button onClick={prevSlide} className="px-6 py-2 border border-white/20 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors focus:outline-none">Prev</button>
            <button onClick={nextSlide} className="px-6 py-2 bg-[#FF007F] text-black text-[10px] font-bold uppercase tracking-widest hover:brightness-110 focus:outline-none">Next Slide</button>
          </div>
        </footer>
      </main>
    </div>
  );
}
