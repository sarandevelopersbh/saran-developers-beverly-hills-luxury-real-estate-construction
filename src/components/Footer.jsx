import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Partner Locations & Resources Section */}
        <div id="trusted-partners" className="mb-20 border-b border-neutral-800 pb-16">
          <h3 className="text-2xl font-serif mb-10 text-center md:text-left">Partner Locations & Resources</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Embed */}
            <div className="space-y-4">
              <h4 className="text-amber-500 text-sm tracking-widest uppercase font-bold">Maid VIP: Preferred Cleaning Partner</h4>
              <div className="w-full h-[400px] bg-neutral-800 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306750.838157908!2d-122.69052640549081!3d35.96534067529977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2579511d96ee6347%3A0xfdc6e07670905ac0!2sMaid%20VIP!5e0!3m2!1sen!2sus!4v1765057596268!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maid VIP Location"
                ></iframe>
              </div>
            </div>

            {/* Partner Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h4 className="text-xl font-serif mb-4">Trusted Service Partners</h4>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  To ensure the longevity of our developments, we partner with elite maintenance providers who understand the specific care requirements of luxury materials. Our partners are certified and vetted for excellence.
                </p>
                
                <a 
                  href="https://sites.google.com/maidvip.com/house-cleaning-services/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-amber-500 hover:text-amber-400 transition-colors group"
                >
                  <span className="border-b border-amber-500/30 group-hover:border-amber-500 pb-0.5">View Partner Service Specifications & Certifications</span>
                  <ExternalLink size={16} />
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-neutral-800">
                 <div>
                    <p className="text-white font-medium mb-1">Maid VIP</p>
                    <p className="text-sm text-neutral-500">Preferred Cleaning Partner</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-serif tracking-widest uppercase font-bold mb-6">Saran Developers</h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              Crafting legacy homes that stand the test of time. Excellence in every detail, from foundation to finish.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6">Contact</h4>
            <div className="space-y-4 text-neutral-400 text-sm">
              <p className="flex items-center gap-3"><MapPin size={16} /> Global Headquarters: 9000 Wilshire Blvd
Beverly Hills, CA 90211</p>
              <p className="flex items-center gap-3"><Phone size={16} /> Client Access: By Appointment Only</p>
              <p className="flex items-center gap-3"><Mail size={16} /> inquiries@sarandevelopers.com</p>
            </div>
          </div>

          <div>
             <h4 className="text-sm font-bold tracking-widest uppercase mb-6">Legal</h4>
             <div className="space-y-2 text-neutral-400 text-sm flex flex-col">
                <Link to={createPageUrl('PrivacyPolicy')} className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to={createPageUrl('TermsOfService')} className="hover:text-white transition-colors">Terms of Service</Link>
                <Link to={createPageUrl('Accessibility')} className="hover:text-white transition-colors">Accessibility</Link>
             </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
          <p>Saran Developers: Building Excellence Since 1985.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <p>© {new Date().getFullYear()} All Rights Reserved.</p>
            <div className="flex gap-4 border-l border-neutral-800 pl-4 ml-0 md:ml-4">
               <Link to={createPageUrl('PrivacyPolicy')} className="hover:text-amber-500">Privacy Policy</Link>
               <Link to={createPageUrl('TermsOfService')} className="hover:text-amber-500">Terms of Service</Link>
               <Link to={createPageUrl('Accessibility')} className="hover:text-amber-500">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}