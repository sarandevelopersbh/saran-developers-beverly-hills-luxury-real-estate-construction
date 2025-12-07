import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight, BookOpen, HardHat, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

export default function Insights() {
  const articles = [
    {
      title: "The Critical Phase: Post-Construction Cleaning",
      summary: "Why the final 1% of the build determines the longevity of the asset. A guide to particulate removal and detailing.",
      path: "InsightPostConstruction",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZHpVJiaii1xImHtYn-qVstFNfLW2HX_adTg2KY2PBjm-_-M4PY-jjT_z89nFVta0kh5mSDjKbIwDkzErf2P2Q9O4EpmCpMYqOMXoL8mbFAA9RI4993riUrRTtLWa4Ob8MzzDp67s_kvUdkgyia0UeGkeIxGlMW05thOXCCvZXoQdKGYFtEzOWjD8xl9Iy/w640-h350/imported-marble-flooring-beverly-hills-living-room-high-ceiling.png?q=80&w=2000&auto=format&fit=crop",
      icon: <HardHat size={20} className="text-amber-600" />
    },
    {
      title: "Preserving High-End Materials",
      summary: "The chemistry of care for marble, travertine, and hardwood. Understanding pH-neutral cleaning.",
      path: "InsightMaterials",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9VOlTqs8xdzrdp1Lm3vm0vIIXsSWM2Kh-T1fx6luU_5PiGUCbOz5ZU-qK0GFOxvUoY0XIRmlZyQM9IpodqV1XeTYs-l77EC5UPnJPDp26v-4W-GfbdYiaOF2IIvMS40HGa03yLqhXqXmGo_IdHntCVw26JTNPhYdd6Ie0V8gERx-91bWWAWCkhbvBBDjw/w640-h350/penthouse-interior-view-bay-bridge-floor-care.png?q=80&w=2000&auto=format&fit=crop",
      icon: <Sparkles size={20} className="text-neutral-600" />
    },
    {
      title: "The Modern Standard",
      summary: "Defining luxury beyond square footage. Maintaining smart-home assets and thermal glazing.",
      path: "InsightLuxurySystems",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk6Gpjgb2FEhuvsUrpn3HkvfK9QKlIeoeeaemi4qBHkylP7s3L2ylA-9pmBuUh665vRa0_ILf-PjqRAb5u7NxxQo4ZZaUX8A9Kln8CFCrqVR09f-2nlKNxnV308GsSPeQezSerz5B_KM2yoeY8GbjeqT4cDkv8_9NCMKtqdiXuD0LbSvH2wvAfdV65As5f/w640-h350/coastal-estate-pool-patio-maintenance-montecito.png?q=80&w=2000&auto=format&fit=crop",
      icon: <BookOpen size={20} className="text-stone-600" />
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      <SEO 
        title="Construction Insights & Expertise"
        description="Expert insights on luxury home construction, post-construction care, premium material preservation, and modern building standards from Saran Developers."
        keywords="luxury construction insights, post-construction cleaning, material care, marble preservation, smart home systems, building standards"
      />
      <div className="bg-neutral-900 text-white py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h4 className="text-amber-500 font-bold text-xs tracking-[0.2em] uppercase mb-6">Knowledge Base</h4>
          <h1 className="text-5xl md:text-6xl font-serif mb-8">Expert Insights & Standards</h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Architectural white papers on construction standards, material stewardship, and the science of luxury property maintenance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <Link to={createPageUrl(article.path)} key={idx} className="group">
              <div className="bg-white h-full shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-white p-2 shadow-sm z-20">
                    {article.icon}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4 group-hover:text-amber-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-grow">
                    {article.summary}
                  </p>
                  <div className="flex items-center text-amber-600 text-xs font-bold tracking-widest uppercase mt-auto">
                    Read White Paper <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}