import React, { useState } from 'react';
// The following two imports are temporarily unused but kept for the final fix
// import { base44 } from '@/api/base44Client'; 
// import { useQuery } from '@tanstack/react-query'; 
import ProjectCard from '../components/ProjectCard';
import { Search, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

// 🛑 IMPORTANT: Replace useQuery imports with these temporary placeholders 🛑
const useQuery = () => {}; 
const base44 = {}; 

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
    "Mulberry Woods": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7AGgxc533qiWHWkRvrWBD8Nd5hvDQ0-pCcaySCehbN2bhQkeO6a-ymw4MFIhaezxyemBzGkABdh1WbgnrwvCuqIk0psju8Z7c1ROOhe9Cf8uOvWt3q48D6r.../luxury-estate-construction-beverly-hills-mulberry-woods-exterior.png",
    "The Aspen Estate": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8ovGbwlrSfoogJpLPLCItRl5JnvDtJ_rauAM7O3pF7y6VFbDaxbcq3oHAYm2khx2h9oRd9EENzca0vJyxLhx9d6d.../malibu-carbon-beach-modern-glass-architecture-oceanfront.png",
    "Azure Heights": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBB-wztcJ9vt9DhaHgZaw0D9ZZaXdJnH21yqWQuF8b3rrlDoCgkYgTJLtHLoW-XwQeEVeQ7Zznhjuu036QmHTnulQNfuAsvXg4EJM6imHpRDIryYoZ1pDZj0a1nCquQ0p9jXXGgAexoxtSb1s0iS2ELNlpb4wz.../high-rise-luxury-tower-development-san-francisco-skyline.png",
    "Casa de la Costa": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeVyfXHmN626XFR47zOGIc_T0lNr9ilcODJ9COiTiY4O9fwEgd026SD3xc5zNv5iHQHsMg8-D6tQUKkhRYX-DcTetFYjtCDzL5a808IPHOq8t-9ENtWJZOAE9ZkKZ_iwHapXIWcEl7XvOYkUcktipkRXn8VkQ7ErQ87ZN.../spanish-colonial-revival-architecture-montecito-estate.png",
    "Oak Creek Reserve": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRszFBOc89eknG3uwQYYcfEk9CrALXAkpnu6wx7U08o9hR4SfQOsjuZzpNHeZbKRgV-DAVJ1MYnLQu9rgYrXJuDGfPRdAjXShCTzhPR21R5En1SvB5o670PnZgii1qT6xqMZsTMghXP4OGib33NKMDt9fUqPkeZqogjQu.../modern-ranch-estate-calabasas-gated-community.png",
    "The Water's Edge": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFenV0jPVYm4z0RrqiZzxP-8AWTIhZP7NRnj82gfmLsQGgWlYgNfhBqhg8M9Ow_BPZYZT0mvCJeipHFJy-akhyd4X-lpDeHPRka_95N7w9mujdcwWwJl9zI7abhHi7NhleO-nooB5-3EFT6guzzXvcdnHciYzzfWUmpvxFD6ZWx4_tA5BoEHx90OeR7joC/w640-h350/lake-sherwood-waterfront-contemporary-estate-architecture.png"
  };

  // 🛑 START MOCK DATA BLOCK 🛑
  // This array ensures projects display even if the base44 client crashes.
  const MOCK_PROJECTS = [
    {
      id: "mock-1",
      title: "Mulberry Woods",
      location: "Beverly Hills, CA",
      architectural_style: "Modern",
      square_footage: "12,000 sq ft",
      completion_year: 2024,
      description: "A breathtaking contemporary estate designed with integrated smart home technology.",
      features: ["Smart Home", "Infinity Pool", "Gated Access"]
    },
    {
      id: "mock-2",
      title: "The Aspen Estate",
      location: "Malibu, CA",
      architectural_style: "Contemporary",
      square_footage: "9,500 sq ft",
      completion_year: 2023,
      description: "Oceanfront minimalist architecture with floor-to-ceiling glass and panoramic views.",
      features: ["Ocean Views", "Private Beach Access", "Sustainable Materials"]
    },
    {
      id: "mock-3",
      title: "Casa de la Costa",
      location: "Montecito, CA",
      architectural_style: "Spanish Colonial",
      square_footage: "7,000 sq ft",
      completion_year: 2019,
      description: "Timeless Spanish Revival with lush courtyards and authentic terracotta roofing.",
      features: ["Courtyard", "Terracotta Roof", "Historic Charm"]
    },
    {
      id: "mock-4",
      title: "The Water's Edge",
      location: "Lake Sherwood, CA",
      architectural_style: "Modern Contemporary",
      square_footage: "8,500 sq ft",
      completion_year: 2023,
      description: "Lakefront masterpiece featuring cantilevered decks and a private dock.",
      features: ["Lakefront", "Private Dock", "Cantilevered Deck"]
    }
  ];

  // 🛑 OVERRIDE: Skip the useQuery hook and inject the mock data 🛑
  const projects = MOCK_PROJECTS;
  const isLoading = false;

  /*
  // 💾 ORIGINAL CODE TO REVERT TO AFTER FIXING THE CRASH:
  const { data: projects, isLoading } = useQuery({
    queryKey: ['all-projects'],
    queryFn: () => base44.entities.Project.list()
  });
  */
  // 🛑 END MOCK DATA BLOCK 🛑


  // Unique values for dropdowns (now derived from MOCK_PROJECTS)
  const locations = [...new Set(projects?.map(p => p.location).filter(Boolean))];
  const styles = [...new Set(projects?.map(p => p.architectural_style).filter(Boolean))];

  // 🛑 FILTER LOGIC RE-ENABLED (Using mock data, this should work) 🛑
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
  // 🛑 END FILTER LOGIC 🛑


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
                    className="w-full p-2 border border-neutral-300 rounded-sm bg-stone-50 text-sm focus:outline-none focus:border-
