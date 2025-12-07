import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { createPageUrl } from '../utils';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { format } from 'date-fns';

export default function InsightDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  const { data: post, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: async () => {
      if (!id) return null;
      const results = await base44.entities.Post.list({ id }, {}, 1);
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

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50">
        <h2 className="text-2xl font-serif mb-4">Article not found</h2>
        <Link to={createPageUrl('Insights')} className="text-amber-600 hover:underline">Return to Insights</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Image */}
      <div className="h-[60vh] relative w-full overflow-hidden">
        <img 
          src={post.image_url} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
          <div className="container mx-auto">
             <Link to={createPageUrl('Insights')} className="text-white/80 hover:text-white mb-6 inline-flex items-center text-sm tracking-widest uppercase transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Insights
             </Link>
             <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 max-w-4xl leading-tight">
               {post.title}
             </h1>
             <div className="flex items-center text-white/80 text-sm space-x-6">
               <span className="flex items-center gap-2"><Calendar size={16} /> {post.published_date ? format(new Date(post.published_date), 'MMMM d, yyyy') : ''}</span>
               <span className="flex items-center gap-2 cursor-pointer hover:text-white"><Share2 size={16} /> Share</span>
             </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-6 md:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="font-serif text-neutral-700 text-lg leading-relaxed space-y-6 [&>p]:mb-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>a]:text-amber-600 [&>a]:font-medium [&>a]:underline hover:[&>a]:text-amber-700 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          <div className="mt-16 pt-10 border-t border-neutral-200">
            <div className="bg-stone-50 p-8 border-l-4 border-amber-500">
              <h4 className="font-bold text-neutral-900 uppercase tracking-widest text-sm mb-2">Expert Tip</h4>
              <p className="text-neutral-600 italic">
                "Maintaining a luxury home is an ongoing commitment to excellence. Regular professional care ensures that your investment appreciates in both value and beauty."
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}