import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function ProjectCard({ project, index }) {
  const getStaticLink = (title) => {
    const map = {
      "Mulberry Woods": "ProjectMulberryWoods",
      "Azure Heights": "ProjectAzureHeights",
      "Casa de la Costa": "ProjectCasaDeLaCosta",
      "The Water's Edge": "ProjectTheWatersEdge",
      "Oak Creek Reserve": "ProjectOakCreekReserve",
      "The Aspen Estate": "ProjectTheAspenEstate"
    };
    return map[title] ? createPageUrl(map[title]) : `${createPageUrl('ProjectDetail')}?id=${project.id}`;
  };

  return (
    <Link to={getStaticLink(project.title)}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group cursor-pointer h-full"
      >
        <div className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700 z-10" />
          <img 
            src={project.image_url} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute bottom-0 left-0 p-8 z-20 text-white w-full">
             <div className="overflow-hidden mb-2">
               <p className="text-xs tracking-[0.2em] uppercase font-medium text-amber-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100 flex items-center gap-2">
                 <MapPin size={12} /> {project.location}
               </p>
             </div>
             <h3 className="text-3xl font-serif mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
             <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
               <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 line-clamp-3">
                 {project.description}
               </p>
               <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                  {project.features?.slice(0, 3).map((feature, i) => (
                    <span key={i} className="text-xs border border-white/30 px-3 py-1 rounded-full">{feature}</span>
                  ))}
               </div>
               <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-400 flex items-center text-xs tracking-widest uppercase font-bold text-amber-400">
                 View Property <ArrowRight size={14} className="ml-2" />
               </div>
             </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}