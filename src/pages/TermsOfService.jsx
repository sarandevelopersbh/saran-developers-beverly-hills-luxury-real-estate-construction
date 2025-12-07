import React from 'react';
import SEO from '../components/SEO';

export default function TermsOfService() {
  return (
    <>
      <SEO 
        title="Terms of Service" 
        description="Terms of usage for the Saran Developers digital portfolio."
      />
      <div className="bg-stone-50 min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-3xl bg-white p-12 shadow-sm border border-stone-200">
          <h1 className="text-4xl font-serif mb-8 text-neutral-900">Terms of Service</h1>
          
          <div className="space-y-8 text-neutral-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-neutral-800 mb-4">Usage</h2>
              <p>This website is a digital portfolio for Saran Developers. All images, architectural renderings, and text are the intellectual property of Saran Developers.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-800 mb-4">Liability</h2>
              <p>Information provided regarding construction standards and material care is for educational purposes only. Saran Developers is not liable for damages resulting from improper application of these maintenance protocols.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-800 mb-4">Governing Law</h2>
              <p>These terms are governed by the laws of California, USA.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}