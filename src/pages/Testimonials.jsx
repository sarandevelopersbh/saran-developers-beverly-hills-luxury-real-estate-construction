import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ['all-testimonials'],
    queryFn: () => base44.entities.Testimonial.list()
  });

  return (
    <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-3xl mx-auto text-center">
          <h4 className="text-amber-600 font-bold text-xs tracking-[0.2em] uppercase mb-6">Client Stories</h4>
          <h1 className="text-5xl md:text-6xl font-serif text-neutral-900 mb-8">Voices of Trust</h1>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Our reputation is built on the satisfaction of our distinguished clientele. Hear what they have to say about their journey with Saran Developers.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-10 border border-neutral-100 hover:shadow-xl transition-all duration-300 relative group">
                <Quote className="absolute top-8 right-8 text-neutral-100 w-16 h-16 group-hover:text-amber-50 transition-colors" />
                <div className="relative z-10">
                  <p className="text-neutral-600 italic leading-relaxed mb-8 text-lg">"{testimonial.client_quote}"</p>
                  <div className="border-t border-neutral-100 pt-6">
                    <h4 className="font-serif text-neutral-900 font-bold text-lg">{testimonial.client_name}</h4>
                    {testimonial.location && (
                      <p className="text-amber-600 text-xs uppercase tracking-widest mt-1">{testimonial.location}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}