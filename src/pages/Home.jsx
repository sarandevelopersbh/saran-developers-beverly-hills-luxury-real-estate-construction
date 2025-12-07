import React, { useState } from 'react';
import { createPageUrl } from '../utils';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FeaturedCarousel from '../components/FeaturedCarousel';
import ProjectCard from '../components/ProjectCard';
import SEO from '../components/SEO';

// Static Data for "Hardcoded" requirements
const STATIC_PROJECTS = [
  {
    id: 'p1',
    title: "Mulberry Woods",
    description: "An enclave of 12 custom estates surrounded by protected woodlands.",
    location: "Beverly Hills",
    image_url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9P0K16eTd3L-zsxGYXX0_AKzY0MMnTuZIXvjI43ugz2NilmF3wqq_INBr6wPOPPc0aWB-QmosWjdxPmpxPIE4KZ05JdzmqfHjx4M-q8hGNRyRc3z0PYgTUNbHbSP5E5pfhvzFe1z39T9b-eb6_udN5ZfxoXMabuHS4NtV_KxfLPy2s22fZwOfQZKRNKcy/w640-h350/beverly-hills-luxury-pool-maintenance-outdoor-living.png&auto=format&fit=crop",
    page_name: "ProjectMulberryWoods",
    featured: true
  },
  {
    id: 'p2',
    title: "Azure Heights",
    description: "Modern architectural masterpieces with panoramic ocean views.",
    location: "San Francisco",
    image_url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX5DDUKFG_AT53IaOBCR-1waz6LvoRoNGrKBmQ3X9sx5fy1Y2Sl5t-MuU7YxtY5OO5ly4WT3QGXCGN8pv7wbiRpWV9CZqTbxZMre3e_79_mcrK1S4aOpytsn_BWcYwBSAkYoUhApvWsCNedOgdfvZSNF7yp54G1ZAejPXWmDbuhHqT1jINz5IQMxsvYamv/w640-h350/luxury-rooftop-amenity-deck-san-francisco-firepit.png?q=80&w=2000&auto=format&fit=crop",
    page_name: "ProjectAzureHeights",
    featured: true
  },
  {
    id: 'p3',
    title: "Casa de la Costa",
    description: "Spanish revival grandeur meeting contemporary luxury.",
    location: "Montecito",
    image_url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeVyfXHmN626XFR47zOGIc_T0lNr9ilcODJ9COiTiY4O9fwEgd026SD3xc5zNv5iHQHsMg8-D6tQUKkhRYX-DcTetFYjtCDzL5a808IPHOq8t-9ENtWJZOAE9ZkKZ_iwHapXIWcEl7XvOYkUcktipkRXn8VkQ7ErQ87ZNhdwFpVJg3oK37_GEd33-JJ-lX/w640-h350/spanish-colonial-revival-architecture-montecito-estate.png?q=80&w=2000&auto=format&fit=crop",
    page_name: "ProjectCasaDeLaCosta",
    featured: true
  },
  {
    id: 'p4',
    title: "The Water's Edge",
    description: "Ultra-modern waterfront living with private dock access.",
    location: "Lake Sherwood",
    image_url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtL04TcuR581hMu3w5n6KidbBF0k5LCBBMOpVMXzYsMrR5e-ki2YFtlj37VaQi14IPtDe863KYyNtxfy7IuU2lKiMx9vcngm6-ULfTRWkmDs1rNakKlTEXJGMIOG-MLDRJ-f_h0YAo_mJ0Z3A2_M40a9b2DrBdbx7h0vp6Y_chbLZXJ1Atvkb-9JvfHr8X/w640-h350/lakefront-infinity-pool-maintenance-lake-sherwood.png?q=80&w=2000&auto=format&fit=crop",
    page_name: "ProjectTheWatersEdge",
    featured: false
  },
  {
    id: 'p5',
    title: "Oak Creek Reserve",
    description: "Sustainable luxury in the heart of wine country.",
    location: "Calabasas",
    image_url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_UDif0B41qPM_OPjg9-jL4jqLJAXBFyIguWPzqscXPy3k5LELVX6DJ4bI3WR6FTricxW4xm0SLFJSaziqjeVnLlPDoD9CoYmbm8fqfqxScOIYoLfo-dCW-YF025GsWfgLWK8_obtxv5EyR8pLfmVNDrwlx0KbOLXhHZQbo-wMn4KUruYE0dqOMLCKc-Rm/w640-h350/resort-style-backyard-stone-waterfall-calabasas.png?q=80&w=2000&auto=format&fit=crop",
    page_name: "ProjectOakCreekReserve",
    featured: false
  },
  {
    id: 'p6',
    title: "The Aspen Estate",
    description: "Winter retreat redefined with warm minimalist design.",
    location: "Malibu",
    image_url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8ovGbwlrSfoogJpLPLCItRl5JnvDtJ_rauAM7O3pF7y6VFbDaxbcq3oHAYm2khx2h9oRd9EENzca0vJyxLhx9d6dcx4NQ2TFPGa9J73-_3JCmeQtbgGuqBwEJcEDciFEMV_JTyGGNiOpP6uo4lLiuI5tTQWrR4jXgtxpTb5x_lPwzQ5NJXAn5b0dHTuxr/w640-h350/malibu-carbon-beach-modern-glass-architecture-oceanfront.png?q=80&w=2000&auto=format&fit=crop",
    page_name: "ProjectTheAspenEstate",
    featured: false
  }
];

const STATIC_INSIGHTS = [
  {
    title: "The Critical Phase",
    description: "Why the final 1% of the build determines the longevity of the asset.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZHpVJiaii1xImHtYn-qVstFNfLW2HX_adTg2KY2PBjm-_-M4PY-jjT_z89nFVta0kh5mSDjKbIwDkzErf2P2Q9O4EpmCpMYqOMXoL8mbFAA9RI4993riUrRTtLWa4Ob8MzzDp67s_kvUdkgyia0UeGkeIxGlMW05thOXCCvZXoQdKGYFtEzOWjD8xl9Iy/w640-h350/imported-marble-flooring-beverly-hills-living-room-high-ceiling.png?q=80&w=800&auto=format&fit=crop",
    link: "InsightPostConstruction",
    label: "Post-Construction"
  },
  {
    title: "Preserving High-End Materials",
    description: "The chemistry of care for natural stone and engineered hardwood.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9VOlTqs8xdzrdp1Lm3vm0vIIXsSWM2Kh-T1fx6luU_5PiGUCbOz5ZU-qK0GFOxvUoY0XIRmlZyQM9IpodqV1XeTYs-l77EC5UPnJPDp26v-4W-GfbdYiaOF2IIvMS40HGa03yLqhXqXmGo_IdHntCVw26JTNPhYdd6Ie0V8gERx-91bWWAWCkhbvBBDjw/w640-h350/penthouse-interior-view-bay-bridge-floor-care.png?q=80&w=800&auto=format&fit=crop",
    link: "InsightMaterials",
    label: "Material Care"
  },
  {
    title: "Defining Luxury",
    description: "The invisible systems and domotics that power modern living.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk6Gpjgb2FEhuvsUrpn3HkvfK9QKlIeoeeaemi4qBHkylP7s3L2ylA-9pmBuUh665vRa0_ILf-PjqRAb5u7NxxQo4ZZaUX8A9Kln8CFCrqVR09f-2nlKNxnV308GsSPeQezSerz5B_KM2yoeY8GbjeqT4cDkv8_9NCMKtqdiXuD0LbSvH2wvAfdV65As5f/w640-h350/coastal-estate-pool-patio-maintenance-montecito.png&auto=format&fit=crop",
    link: "InsightLuxurySystems",
    label: "Modern Systems"
  }
];

export default function Home() {
  // Use manual static data for reliability as requested
  const featuredProjects = STATIC_PROJECTS.filter(p => p.featured);
  const allProjects = STATIC_PROJECTS;

  return (
    <div className="bg-stone-50">
      <SEO title="Home" description="Saran Developers - Legacy Portfolio of Luxury Real Estate" />
      
      {/* Hero Carousel */}
      <FeaturedCarousel projects={featuredProjects} />

      {/* Introduction / Philosophy */}
      <section className="py-32 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h4 className="text-amber-600 font-bold text-xs tracking-[0.2em] uppercase mb-6">Our Philosophy</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8 leading-tight">
              Building Beyond <br />
              <span className="text-neutral-400">Expectation</span>
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              We believe that a home is more than just a structure; it is a sanctuary. Our commitment to excellence ensures that every detail, from the foundation to the final polish, meets the highest global standards of luxury and durability.
            </p>
            <Link to={createPageUrl('Portfolio')} className="text-neutral-900 font-bold text-xs tracking-[0.2em] uppercase border-b border-neutral-900 pb-2 hover:text-amber-600 hover:border-amber-600 transition-colors">
              Explore Our Developments
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-neutral-200 overflow-hidden">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeVyfXHmN626XFR47zOGIc_T0lNr9ilcODJ9COiTiY4O9fwEgd026SD3xc5zNv5iHQHsMg8-D6tQUKkhRYX-DcTetFYjtCDzL5a808IPHOq8t-9ENtWJZOAE9ZkKZ_iwHapXIWcEl7XvOYkUcktipkRXn8VkQ7ErQ87ZNhdwFpVJg3oK37_GEd33-JJ-lX/w640-h350/spanish-colonial-revival-architecture-montecito-estate.png?q=80&w=2000&auto=format&fit=crop" 
                alt="Architectural Detail" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-1/2 aspect-square bg-white p-4 hidden md:block shadow-2xl">
              <img 
                 src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj94LT63KIR1bOYPhKCcrdHlc-ZEiEk_GJtvZFS7VuwQjdljhKNdUZfvjJIwyIy1OUckqnGFtN8HGiGp_riURLEuZx08pOv5Ck4fYYituhm1SlggYhqKz6DSdq2StwvEE2q3cqK3DOqCitlCkCchThm7jE97qUEFmTviXxOV0H_nmARMp4v1bWBDwfqNrT3/w640-h350/calabasas-luxury-home-exposed-wood-beams-cleaning.png?q=80&w=1000&auto=format&fit=crop" 
                 alt="Interior Detail" 
                 className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Selected Portfolio - 6 Project Grid */}
      <section className="py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h4 className="text-amber-500 font-bold text-xs tracking-[0.2em] uppercase mb-4">The Collection</h4>
              <h2 className="text-4xl md:text-5xl font-serif">Featured Developments</h2>
            </div>
            <Link to={createPageUrl('Portfolio')} className="hidden md:flex items-center text-xs tracking-[0.2em] uppercase hover:text-amber-500 transition-colors">
              View Full Portfolio <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Link to={createPageUrl(project.page_name)} key={project.id} className="group block">
                <div className="relative h-[400px] overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img 
                    src={project.image_url} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1">
                    <p className="text-xs uppercase tracking-widest text-white flex items-center gap-1">
                      <MapPin size={10} /> {project.location}
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-amber-400 transition-colors">{project.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                <span className="text-xs tracking-[0.2em] uppercase text-white/80 group-hover:text-white border-b border-white/30 group-hover:border-white pb-1 transition-all">View Property</span>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 md:hidden text-center">
             <Link to={createPageUrl('Portfolio')} className="inline-flex items-center text-xs tracking-[0.2em] uppercase hover:text-amber-500 transition-colors border border-white/30 px-6 py-3">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-stone-100 border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h4 className="text-amber-600 font-bold text-xs tracking-[0.2em] uppercase mb-4">Client Experience</h4>
            <h2 className="text-4xl font-serif text-neutral-900">Enduring Relationships</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hardcoded Testimonials as fallback/static */}
            <div className="bg-white p-8 shadow-sm">
              <Quote className="text-amber-200 w-8 h-8 mb-4" />
              <p className="text-neutral-600 italic mb-6 leading-relaxed">
                "Saran Developers transformed our vision into a masterpiece. The attention to detail is unmatched."
              </p>
              <div>
                <p className="font-serif font-bold text-neutral-900">Jonathan & Sarah M.</p>
                <p className="text-xs uppercase tracking-widest text-neutral-400">Beverly Hills</p>
              </div>
            </div>
            <div className="bg-white p-8 shadow-sm">
              <Quote className="text-amber-200 w-8 h-8 mb-4" />
              <p className="text-neutral-600 italic mb-6 leading-relaxed">
                "Their stewardship of materials and post-construction care is what sets them apart in the luxury market."
              </p>
              <div>
                <p className="font-serif font-bold text-neutral-900">The Thompson Estate</p>
                <p className="text-xs uppercase tracking-widest text-neutral-400">Malibu</p>
              </div>
            </div>
            <div className="bg-white p-8 shadow-sm">
              <Quote className="text-amber-200 w-8 h-8 mb-4" />
              <p className="text-neutral-600 italic mb-6 leading-relaxed">
                "A seamless process from ground-breaking to the final handover. True professionals."
              </p>
              <div>
                <p className="font-serif font-bold text-neutral-900">Robert Chen</p>
                <p className="text-xs uppercase tracking-widest text-neutral-400">Newport Beach</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to={createPageUrl('Testimonials')} className="text-amber-700 font-bold text-xs tracking-[0.2em] uppercase border-b border-amber-700 pb-1 hover:text-neutral-900 hover:border-neutral-900 transition-colors">
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Construction Insights - Manual 3 Column Grid */}
      <section className="py-32 container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-amber-600 font-bold text-xs tracking-[0.2em] uppercase mb-4">Expertise & Knowledge</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">Construction Insights</h2>
          <p className="text-neutral-500">
            Sharing our expertise on building standards, material care, and the future of luxury living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATIC_INSIGHTS.map((insight, idx) => (
            <div key={idx} className="flex flex-col h-full bg-white border border-stone-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={insight.image} 
                  alt={insight.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-neutral-900">
                  {insight.label}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-neutral-900 mb-3">{insight.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">
                  {insight.description}
                </p>
                <div className="mt-auto">
                  <Link 
                    to={createPageUrl(insight.link)}
                    className="inline-flex items-center px-6 py-3 bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-amber-600 transition-colors w-full justify-center"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Anchor for Partners */}
      <div id="partners"></div>
    </div>
  );
}