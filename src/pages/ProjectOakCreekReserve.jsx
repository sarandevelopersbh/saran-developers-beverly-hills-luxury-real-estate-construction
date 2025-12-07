import React, { useState } from 'react';
import { createPageUrl } from '../utils';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Maximize, Calendar, PenTool, ChevronRight, X, Hammer, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function ProjectOakCreekReserve() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj94LT63KIR1bOYPhKCcrdHlc-ZEiEk_GJtvZFS7VuwQjdljhKNdUZfvjJIwyIy1OUckqnGFtN8HGiGp_riURLEuZx08pOv5Ck4fYYituhm1SlggYhqKz6DSdq2StwvEE2q3cqK3DOqCitlCkCchThm7jE97qUEFmTviXxOV0H_nmARMp4v1bWBDwfqNrT3/w640-h350/calabasas-luxury-home-exposed-wood-beams-cleaning.png',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_UDif0B41qPM_OPjg9-jL4jqLJAXBFyIguWPzqscXPy3k5LELVX6DJ4bI3WR6FTricxW4xm0SLFJSaziqjeVnLlPDoD9CoYmbm8fqfqxScOIYoLfo-dCW-YF025GsWfgLWK8_obtxv5EyR8pLfmVNDrwlx0KbOLXhHZQbo-wMn4KUruYE0dqOMLCKc-Rm/w640-h350/resort-style-backyard-stone-waterfall-calabasas.png'
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="h-screen relative w-full overflow-hidden">
        <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRszFBOc89eknG3uwQYYcfEk9CrALXAkpnu6wx7U08o9hR4SfQOsjuZzpNHeZbKRgV-DAVJ1MYnLQu9rgYrXJuDGfPRdAjXShCTzhPR21R5En1SvB5o670PnZgii1qT6xqMZsTMghXP4OGib33NKMDt9fUqPkeZqogjQuTANBChyphenhyphenFTqBfqKIfExtkna60q/w640-h350/modern-ranch-estate-calabasas-gated-community.png" alt="Oak Creek Reserve" className="w-full h-full object-cover" />
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
             <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
               <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-none">Oak Creek Reserve</h1>
               <div className="flex flex-wrap items-center text-white/90 gap-8 text-sm tracking-widest uppercase font-medium">
                 <span className="flex items-center gap-2"><MapPin size={16} className="text-amber-500" /> Calabasas, CA</span>
                 <span className="flex items-center gap-2"><Calendar size={16} className="text-amber-500" /> 2021</span>
               </div>
             </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-24">
          <div className="lg:col-span-8">
            <h3 className="text-amber-600 font-bold text-xs tracking-[0.2em] uppercase mb-8">Property Overview</h3>
            <div className="prose prose-lg prose-stone font-serif prose-p:text-neutral-600 prose-p:leading-loose max-w-none mb-16">
               <p>Located behind double gates, <strong>Oak Creek Reserve</strong> is the ultimate expression of privacy and security. The Mediterranean-inspired villa is centered around a massive courtyard featuring a 200-year-old olive tree, creating a sense of timelessness and permanence.</p><p>Designed for the collector and the entertainer, the estate includes a professional-grade screening room with seating for 20, a climate-controlled 6-car collector's garage, and a fully equipped detached guest house. The grounds are planted with drought-tolerant native species, blending the manicured gardens with the wild beauty of the Santa Monica Mountains.</p>
            </div>

            <div className="mb-16 border-l-2 border-amber-500 pl-8 py-2">
              <h3 className="text-amber-600 font-bold text-xs tracking-[0.2em] uppercase mb-4">Materials & Finishes</h3>
              <p className="text-neutral-600 text-lg leading-relaxed font-serif">
                Every element of this residence has been curated for permanence and beauty. The interiors feature <strong>imported marble flooring</strong> sourced from exclusive Italian quarries, matched with <strong>custom hardwood</strong> paneling that brings warmth to the expansive spaces. <strong>Floor-to-ceiling glazing</strong> dissolves the boundaries between indoors and outdoors, flooding the home with natural light while offering thermal efficiency.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-amber-600 font-bold text-xs tracking-[0.2em] uppercase">Visual Archive</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {galleryImages.map((img, idx) => (
                  <div key={idx} className={`relative overflow-hidden cursor-pointer group ${idx === 0 ? 'md:col-span-2 h-[500px]' : 'h-[300px]'}`} onClick={() => setSelectedImage(img)}>
                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                       <Maximize className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges Section */}
            <div className="mt-20 border-t border-stone-200 pt-16">
              <h3 className="text-amber-600 font-bold text-xs tracking-[0.2em] uppercase mb-8">Construction Challenges & Solutions</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                   <div className="flex items-start gap-4 mb-6">
                      <div className="bg-stone-100 p-3 rounded-full">
                        <Hammer className="text-amber-600 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-bold mb-2">Wildfire Mitigation</h4>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          <strong>Challenge:</strong> Located in a high-severity fire zone, the structure needed to be resilient against wildfires while maintaining the aesthetic of a Tuscan villa.
                          <br /><br />
                          <strong>Solution:</strong> We utilized non-combustible steel framing for the roof structure, ember-resistant vents, and a hidden exterior sprinkler system that can soak the property perimeter within minutes.
                        </p>
                      </div>
                   </div>
                </div>
                <div>
                   <div className="flex items-start gap-4 mb-6">
                      <div className="bg-stone-100 p-3 rounded-full">
                        <RefreshCcw className="text-amber-600 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-bold mb-2">Sustainable Water Systems</h4>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          <strong>Challenge:</strong> Maintaining 4 acres of lush gardens in a drought-prone region without relying on municipal water.
                          <br /><br />
                          <strong>Solution:</strong> We installed a 50,000-gallon underground cistern system that harvests rainwater and greywater, filtered through a bioswale system, to irrigate the entire estate sustainably.
                        </p>
                      </div>
                   </div>
                </div>
              </div>

              {/* Transformation Slider */}
              <div className="space-y-6">
                 <h4 className="font-serif text-xl mb-4">Site Transformation</h4>
                 <BeforeAfterSlider 
                    beforeImage="https://unsplash.com/photos/a-house-under-construction-with-a-staircase-going-up-7PAiFc4FoHk?q=80&w=2000&auto=format&fit=crop"
                    afterImage="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRszFBOc89eknG3uwQYYcfEk9CrALXAkpnu6wx7U08o9hR4SfQOsjuZzpNHeZbKRgV-DAVJ1MYnLQu9rgYrXJuDGfPRdAjXShCTzhPR21R5En1SvB5o670PnZgii1qT6xqMZsTMghXP4OGib33NKMDt9fUqPkeZqogjQuTANBChyphenhyphenFTqBfqKIfExtkna60q/w640-h350/modern-ranch-estate-calabasas-gated-community.png"
                    alt="Oak Creek Reserve Transformation"
                 />
                 <p className="text-neutral-500 text-xs italic text-center">Slide to see the development transformation.</p>
              </div>
            </div>

            <div className="mt-20 bg-stone-100 p-10 border-t border-stone-200 text-center md:text-left">
              <h3 className="font-serif text-2xl text-neutral-900 mb-4">Property Stewardship</h3>
              <p className="text-neutral-600 mb-8 max-w-2xl">
                This property adheres to our Gold-Standard Maintenance Protocols to ensure material longevity. We believe that true luxury is sustained through dedicated care.
              </p>
              <Link to={createPageUrl('Home')} className="inline-flex items-center px-6 py-3 bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-amber-600 transition-colors">
                View Maintenance Partners <ChevronRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              <div className="bg-stone-100 p-8 border border-stone-200">
                <h4 className="font-serif text-2xl mb-8 border-b border-stone-300 pb-4">Specifications</h4>
                <div className="space-y-6">
                  <div><p className="text-xs uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-2"><PenTool size={12} /> Architect</p><p className="font-medium text-lg">Marcus Thorne</p></div>
                  <div><p className="text-xs uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-2"><Maximize size={12} /> Living Area</p><p className="font-medium text-lg">16,000 sq ft</p></div>
                  <div><p className="text-xs uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-2"><Calendar size={12} /> Completed</p><p className="font-medium text-lg">2021</p></div>
                  <div><p className="text-xs uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-2"><MapPin size={12} /> Neighborhood</p><p className="font-medium text-lg">The Oaks</p></div>
                  <div><p className="text-xs uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-2"><PenTool size={12} /> Style</p><p className="font-medium text-lg">Mediterranean Villa</p></div>
                </div>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-6">Key Features</h4>
                <ul className="space-y-4">
                  {['Double Gated Entry', '6-Car Collector Garage', 'Screening Room', 'Detached Guest House', '200-Year-Old Olive Trees'].map((feature, i) => (
                    <li key={i} className="flex items-start text-neutral-600 text-sm leading-relaxed border-b border-stone-100 pb-3 last:border-0"><ChevronRight size={14} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors"><X size={32} /></button>
            <img src={selectedImage} alt="Full screen" className="max-h-[90vh] max-w-full object-contain shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}