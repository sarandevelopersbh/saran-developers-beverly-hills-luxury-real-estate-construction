import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import ProjectCard from '../components/ProjectCard';
import { Search, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

export default function Portfolio() {
  const [filters, setFilters] = useState({
    location: '',
    minSquareFootage: '',
    architecturalStyle: '',
    yearRange: 'all'
  });
  
  const [showFilters, setShowFilters] = useState(false);

  // Hardcoded image overrides requested by user
  const PROJECT_IMAGES = {
    "Mulberry Woods": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7AGgxc533qiWHWkRvrWBD8Nd5hvDQ0-pCcaySCehbN2bhQkeO6a-ymw4MFIhaezxyemBzGkABdh1WbgnrwvCuqIk0psju8Z7c1ROOhe9Cf8uOvWt3q48D8ruVomO9lvna6J0bYhUETZjq3bjm1tcVKzepS5VhL4Lh5_pH2iTzvPJsbZNW3bFUsT18thXH/w640-h350/luxury-estate-construction-beverly-hills-mulberry-woods-exterior.png",
    "The Aspen Estate": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8ovGbwlrSfoogJpLPLCItRl5JnvDtJ_rauAM7O3pF7y6VFbDaxbcq3oHAYm2khx2h9oRd9EENzca0vJyxLhx9d6dcx4NQ2TFPGa9J73-_3JCmeQtbgGuqBwEJcEDciFEMV_JTyGGNiOpP6uo4lLiuI5tTQWrR4jXgtxpTb5x_lPwzQ5NJXAn5b0dHTuxr/s2816/malibu-carbon-beach-modern-glass-architecture-oceanfront.png",
    "Azure Heights": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBB-wztcJ9vt9DhaHgZaw0D9ZZaXdJnH21yqWQuF8b3rrlDoCgkYgTJLtHLoW-XwQeEVeQ7Zznhjuu036QmHTnulQNfuAsvXg4EJM6imHpRDIryYoZ1pDZj0aQ1nCquQ0p9jXXGgAexoxtSb1s0iS2ELNlpb4wzvWv4E7_0oSiYMH05h3ydRb6uYgmE5mP/w640-h350/high-rise-luxury-tower-development-san-francisco-skyline.png",
    "Casa de la Costa": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeVyfXHmN626XFR47zOGIc_T0lNr9ilcODJ9COiTiY4O9fwEgd026SD3xc5zNv5iHQHsMg8-D6tQUKkhRYX-DcTetFYjtCDzL5a808IPHOq8t-9ENtWJZOAE9ZkKZ_iwHapXIWcEl7XvOYkUcktipkRXn8VkQ7ErQ87ZNhdwFpVJg3oK37_GEd33-JJ-lX/w640-h350/spanish-colonial-revival-architecture-montecito-estate.png",
    "Oak Creek Reserve": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRszFBOc89eknG3uwQYYcfEk9CrALXAkpnu6wx7U08o9hR4SfQOsjuZzpNHeZbKRgV-DAVJ1MYnLQu9rgYrXJuDGfPRdAjXShCTzhPR21R5En1SvB5o670PnZgii1qT6xqMZsTMghXP4OGib33NKMDt9fUqPkeZqogjQuTANBChyphenhyphenFTqBfqKIfExtkna60q/w640-h350/modern-ranch-estate-calabasas-gated-community.png",
    "The Water's Edge": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFenV0jPVYm4z0RrqiZzxP-8AWTIhZP7NRnj82gfmLsQGgWlYgNfhBqhg8M9Ow_BPZYZT0mvCJeipHFJy-akhyd4X-lpDeHPRka_95N7w9mujdcwWwJl9zI7abhHi7NhleO-nooB5-3EFT6guzzXvcdnHciYzzfWUmpvxFD6ZWx4_tA5BoEHx90OeR7joC/w640-h350/lake-sherwood-waterfront-contemporary-estate-architecture.png"
  };

  const { data: projects, isLoading } = useQuery({
    queryKey: ['all-projects'],
    queryFn: () => base44.entities.Project.list()
  });

  // Unique values for dropdowns
  const locations = [...new Set(projects?.map(p => p.location).filter(Boolean))];
  const styles = [...new Set(projects?.map(p => p.architectural_style).filter(Boolean))];

  const filteredProjects = projects?.map(p => ({
    ...p,
    image_url: PROJECT_IMAGES[p.title] || p.image_url
  })).filter(project => {
    const matchLocation = !filters.location || project.location === filters.location;
    const matchStyle = !filters.architecturalStyle || project.architectural_style === filters.architecturalStyle;
    
    // Simple parsing for sq ft comparison (assuming format "5,000 sq ft" or similar)
    const sqFt = parseInt(project.square_footage?.replace(/[^0-9]/g, '') || 0);
    const matchSqFt = !filters.minSquareFootage || sqFt >= parseInt(filters.minSquareFootage);
    
    // Year range
    const year = project.year_built || parseInt(project.completion_year) || 0;
    let matchYear = true;
    if (filters.yearRange === 'new') matchYear = year >= 2023;
    if (filters.yearRange === 'classic') matchYear = year < 2020;

    return matchLocation && matchStyle && matchSqFt && matchYear;
  });

  const clearFilters = () => {
    setFilters({
      location: '',
      minSquareFootage: '',
      architecturalStyle: '',
      yearRange: 'all'
    });
  };

  return (
    <div className="pt-20 bg-stone-50 min-h-screen">
      <SEO 
        title="Portfolio - Luxury Estate Collection"
        description="Explore Saran Developers' portfolio of luxury residential estates in Beverly Hills, Malibu, San Francisco, and beyond. Custom homes featuring modern architecture and premium materials."
        keywords="luxury real estate portfolio, custom estates, Beverly Hills homes, Malibu properties, high-end residential, architectural masterpieces"
      />
      <div className="bg-neutral-900 text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h4 className="text-amber-500 font-bold text-xs tracking-[0.2em] uppercase mb-6">Our Masterpieces</h4>
          <h1 className="text-5xl md:text-6xl font-serif mb-8">The Legacy Collection</h1>
          <p className="text-neutral-400 text-lg leading-relaxed mb-10">
            Explore our portfolio of landmark residential developments. Each property represents our unyielding commitment to quality, innovation, and timeless design.
          </p>
          
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border border-white/30 px-6 py-3 hover:bg-white hover:text-neutral-900 transition-all"
          >
            <Filter size={14} /> {showFilters ? 'Hide Filters' : 'Filter Collection'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-white border-b border-neutral-200 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Location</label>
                  <select 
                    className="w-full p-2 border border-neutral-300 rounded-sm bg-stone-50 text-sm focus:outline-none focus:border-amber-500"
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                  >
                    <option value="">All Locations</option>
                    {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Architectural Style</label>
                  <select 
                    className="w-full p-2 border border-neutral-300 rounded-sm bg-stone-50 text-sm focus:outline-none focus:border-amber-500"
                    value={filters.architecturalStyle}
                    onChange={(e) => setFilters({...filters, architecturalStyle: e.target.value})}
                  >
                    <option value="">All Styles</option>
                    {styles.map(style => <option key={style} value={style}>{style}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Min Sq Footage</label>
                  <select 
                    className="w-full p-2 border border-neutral-300 rounded-sm bg-stone-50 text-sm focus:outline-none focus:border-amber-500"
                    value={filters.minSquareFootage}
                    onChange={(e) => setFilters({...filters, minSquareFootage: e.target.value})}
                  >
                    <option value="">Any Size</option>
                    <option value="5000">5,000+ sq ft</option>
                    <option value="10000">10,000+ sq ft</option>
                    <option value="15000">15,000+ sq ft</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Era</label>
                  <select 
                    className="w-full p-2 border border-neutral-300 rounded-sm bg-stone-50 text-sm focus:outline-none focus:border-amber-500"
                    value={filters.yearRange}
                    onChange={(e) => setFilters({...filters, yearRange: e.target.value})}
                  >
                    <option value="all">All Years</option>
                    <option value="new">New Construction (2023+)</option>
                    <option value="classic">Established (Pre-2020)</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button onClick={clearFilters} className="text-xs text-neutral-500 hover:text-amber-600 flex items-center gap-1">
                  <X size={12} /> Clear Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 md:px-12 py-20">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
          </div>
        ) : (
          <>
            <div className="mb-8 text-neutral-500 text-sm">
              Showing {filteredProjects?.length} properties
            </div>
            
            {filteredProjects?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white border border-dashed border-neutral-300">
                <p className="text-neutral-500 mb-4">No properties match your specific criteria.</p>
                <button onClick={clearFilters} className="text-amber-600 font-medium hover:underline">Clear all filters</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}