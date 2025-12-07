import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

export default function ArticleCard({ post }) {
  return (
    <Link to={`${createPageUrl('InsightDetail')}?id=${post.id}`} className="group block h-full">
      <article className="bg-white h-full flex flex-col border border-neutral-200 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
        <div className="h-64 overflow-hidden relative">
          <img 
            src={post.image_url} 
            alt={post.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium tracking-wider uppercase text-neutral-900">
            Insights
          </div>
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center text-xs text-neutral-500 mb-4 space-x-2">
            <Calendar size={12} />
            <span>{post.published_date ? format(new Date(post.published_date), 'MMMM d, yyyy') : 'Recent'}</span>
          </div>
          <h3 className="text-xl font-serif font-medium text-neutral-900 mb-3 group-hover:text-amber-700 transition-colors">
            {post.title}
          </h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
            {post.summary}
          </p>
          <div className="flex items-center text-amber-600 text-xs font-bold tracking-widest uppercase mt-auto group-hover:translate-x-2 transition-transform duration-300">
            Read Article <ArrowRight size={14} className="ml-2" />
          </div>
        </div>
      </article>
    </Link>
  );
}