import React from 'react';
import SEO from '../components/SEO';

export default function Accessibility() {
  return (
    <>
      <SEO 
        title="Accessibility Statement" 
        description="Saran Developers commitment to digital accessibility."
      />
      <div className="bg-stone-50 min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-3xl bg-white p-12 shadow-sm border border-stone-200">
          <h1 className="text-4xl font-serif mb-8 text-neutral-900">Accessibility Statement</h1>
          
          <div className="space-y-8 text-neutral-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-neutral-800 mb-4">Commitment</h2>
              <p>Saran Developers is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-800 mb-4">Standards</h2>
              <p>We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-800 mb-4">Feedback</h2>
              <p>If you encounter accessibility barriers on this site, please contact us immediately at <a href="mailto:inquiries@sarandevelopers.com" className="text-amber-600 hover:underline">inquiries@sarandevelopers.com</a> so we can address the issue.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}