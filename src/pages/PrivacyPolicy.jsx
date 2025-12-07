import React from 'react';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy" 
        description="Saran Developers Privacy Commitment and Data Usage Policy."
      />
      <div className="bg-stone-50 min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-3xl bg-white p-12 shadow-sm border border-stone-200">
          <h1 className="text-4xl font-serif mb-8 text-neutral-900">Privacy Policy</h1>
          
          <div className="space-y-8 text-neutral-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-neutral-800 mb-4">Saran Developers Privacy Commitment</h2>
              <p>We respect the privacy of our clients and partners. We collect basic information (name, email) solely for the purpose of facilitating project inquiries and service requests.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-800 mb-4">Data Usage</h2>
              <p>We do not sell user data. Information may be shared with our verified maintenance partners (such as Maid VIP) only when you explicitly request a service referral.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-800 mb-4">Cookies</h2>
              <p>This site uses essential cookies to ensure site functionality and performance.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-800 mb-4">Contact</h2>
              <p>For privacy concerns, please contact: <a href="mailto:inquiries@sarandevelopers.com" className="text-amber-600 hover:underline">inquiries@sarandevelopers.com</a></p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}