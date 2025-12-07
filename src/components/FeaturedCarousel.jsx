import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export default function FeaturedCarousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  if (!projects || projects.length === 0) return null;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-neutral-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={projects[currentIndex].image_url}
            alt={projects[currentIndex].title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-20">
            <div className="container mx-auto">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-4xl"
              >
                <div className="flex items-center gap-3 text-amber-400 text-sm tracking-[0.2em] uppercase font-bold mb-6">
                  <span className="w-12 h-[1px] bg-amber-400"></span>
                  Featured Collection
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
                  {projects[currentIndex].title}
                </h1>
                <p className="text-white/90 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10 border-l-2 border-amber-500 pl-6">
                  {projects[currentIndex].neighborhood && <span className="block font-medium mb-2">{projects[currentIndex].neighborhood}</span>}
                  {projects[currentIndex].description}
                </p>
                <Link
                  to={
                    projects[currentIndex].title === "The Water's Edge" ? createPageUrl('ProjectTheWatersEdge') :
                    projects[currentIndex].title === "Mulberry Woods" ? createPageUrl('ProjectMulberryWoods') :
                    projects[currentIndex].title === "Azure Heights" ? createPageUrl('ProjectAzureHeights') :
                    projects[currentIndex].title === "Casa de la Costa" ? createPageUrl('ProjectCasaDeLaCosta') :
                    projects[currentIndex].title === "Oak Creek Reserve" ? createPageUrl('ProjectOakCreekReserve') :
                    projects[currentIndex].title === "The Aspen Estate" ? createPageUrl('ProjectTheAspenEstate') :
                    `${createPageUrl('ProjectDetail')}?id=${projects[currentIndex].id}`
                  }
                  className="inline-flex items-center px-8 py-4 border border-white text-white text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-neutral-900 transition-all duration-300 group"
                >
                  View Residence <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-6 md:right-20 z-30 flex items-center gap-4">
        <button onClick={prevSlide} className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-neutral-900 transition-all">
          <ChevronLeft size={20} />
        </button>
        <div className="text-white font-mono text-sm">
          {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </div>
        <button onClick={nextSlide} className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-neutral-900 transition-all">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}