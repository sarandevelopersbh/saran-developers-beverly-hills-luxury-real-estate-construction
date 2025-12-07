import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { createPageUrl } from '../utils';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Maximize, Calendar, PenTool, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const [selectedImage, setSelectedImage] = useState(null);

  const { data: project, isLoading } = useQuery({
    queryKey: ['project', id],
    queryFn: async () => {
      if (!id) return null;
      const results = await base44.entities.Project.list({ id }, {}, 1);
      return results[0];
    },
    enabled: !!id
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50">
        <h2 className="text-2xl font-serif mb-4">Project not found</h2>
        <Link to={createPageUrl('Portfolio')} className="text-amber-600 hover:underline">Return to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Full Screen Hero */}
      <div className="h-screen relative w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={project.image_url} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="absolute top-0 left-0 w-full p-6 md:p-12 z-10">
           <div className="container mx-auto">
             <Link to={createPageUrl('Portfolio')} className="text-white hover:text-amber-200 inline-flex items-center text-xs tracking-[0.2em] uppercase transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
                <ArrowLeft size={14} className="mr-2" /> Back to Collection
             </Link>
           </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
          <div className="container mx-auto">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
             >
               <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-none">
                 {project.title}
               </h1>
               <div className="flex flex-wrap items-center text-white/90 gap-8 text-sm tracking-widest uppercase font-medium">
                 <span className="flex items-center gap-2"><MapPin size={16} className="text-amber-500" /> {project.location}</span>
                 {project.completion_year && <span className="flex items-center gap-2"><Calendar size={16} className="text-amber-500" /> {project.completion_year}</span>}
               </div>
             </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-24">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <h3 className="text-amber-600 font-bold text-xs tracking-[0.2em] uppercase mb-8">Property Overview</h3>
            <div className="prose prose-lg prose-stone font-serif prose-p:text-neutral-600 prose-p:leading-loose max-w-none mb-16">
               <div dangerouslySetInnerHTML={{ __html: project.long_description || `<p>${project.description}</p>` }} />
            </div>

            {/* Materials & Finishes (SEO) */}
            <div className="mb-16 border-l-2 border-amber-500 pl-8 py-2">
              <h3 className="text-amber-600 font-bold text-xs tracking-[0.2em] uppercase mb-4">Materials & Finishes</h3>
              <p className="text-neutral-600 text-lg leading-relaxed font-serif">
                Every element of this residence has been curated for permanence and beauty. The interiors feature <strong>imported marble flooring</strong> sourced from exclusive Italian quarries, matched with <strong>custom hardwood</strong> paneling that brings warmth to the expansive spaces. <strong>Floor-to-ceiling glazing</strong> dissolves the boundaries between indoors and outdoors, flooding the home with natural light while offering thermal efficiency.
              </p>
            </div>

            {/* Gallery Grid */}
            {project.gallery_images && project.gallery_images.length > 0 && (
              <div className="space-y-8">
                <h3 className="text-amber-600 font-bold text-xs tracking-[0.2em] uppercase">Visual Archive</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery_images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`relative overflow-hidden cursor-pointer group ${idx === 0 ? 'md:col-span-2 h-[500px]' : 'h-[300px]'}`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                         <Maximize className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Property Stewardship (Interlink) */}
            <div className="mt-20 bg-stone-100 p-10 border-t border-stone-200 text-center md:text-left">
              <h3 className="font-serif text-2xl text-neutral-900 mb-4">Property Stewardship</h3>
              <p className="text-neutral-600 mb-8 max-w-2xl">
                This property adheres to our Gold-Standard Maintenance Protocols to ensure material longevity. We believe that true luxury is sustained through dedicated care.
              </p>
              <a 
                href="/#trusted-partners"
                className="inline-flex items-center px-6 py-3 bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-amber-600 transition-colors"
              >
                View Our Maintenance Partners & Standards <ChevronRight size={14} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Sidebar Details */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              
              {/* Specs Box */}
              <div className="bg-stone-100 p-8 border border-stone-200">
                <h4 className="font-serif text-2xl mb-8 border-b border-stone-300 pb-4">Specifications</h4>
                <div className="space-y-6">
                  {project.architect && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-2"><PenTool size={12} /> Architect</p>
                      <p className="font-medium text-lg">{project.architect}</p>
                    </div>
                  )}
                  {project.square_footage && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-2"><Maximize size={12} /> Living Area</p>
                      <p className="font-medium text-lg">{project.square_footage}</p>
                    </div>
                  )}
                  {project.completion_year && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-2"><Calendar size={12} /> Completed</p>
                      <p className="font-medium text-lg">{project.completion_year}</p>
                    </div>
                  )}
                  {project.neighborhood && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-2"><MapPin size={12} /> Neighborhood</p>
                      <p className="font-medium text-lg">{project.neighborhood}</p>
                    </div>
                  )}
                  {project.architectural_style && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-2"><PenTool size={12} /> Style</p>
                      <p className="font-medium text-lg">{project.architectural_style}</p>
                    </div>
                  )}
                  {project.views && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-2"><Maximize size={12} /> Views</p>
                      <p className="font-medium text-lg">{project.views}</p>
                    </div>
                  )}
                  {project.price_range && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-2"><span className="font-serif italic">$$</span> Price Range</p>
                      <p className="font-medium text-lg">{project.price_range}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Features List */}
              <div>
                <h4 className="font-serif text-xl mb-6">Key Features</h4>
                <ul className="space-y-4">
                  {project.features?.map((feature, i) => (
                    <li key={i} className="flex items-start text-neutral-600 text-sm leading-relaxed border-b border-stone-100 pb-3 last:border-0">
                      <ChevronRight size={14} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-neutral-900 text-white p-8 text-center">
                <h4 className="font-serif text-xl mb-4">Interested in this Property?</h4>
                <p className="text-neutral-400 text-sm mb-6">Contact our sales team for a private viewing or detailed floor plans.</p>
                <button className="w-full border border-white/30 py-3 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-neutral-900 transition-all duration-300">
                  Request Information
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors">
              <X size={32} />
            </button>
            <img src={selectedImage} alt="Full screen" className="max-h-[90vh] max-w-full object-contain shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}