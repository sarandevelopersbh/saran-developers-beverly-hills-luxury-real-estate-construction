import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Saran Developers for luxury real estate inquiries."
      />
      <div className="bg-stone-50 min-h-screen py-20">
        {/* Header */}
        <div className="bg-neutral-900 text-white py-20 px-6 mb-[-80px] pb-40">
          <div className="container mx-auto max-w-4xl text-center">
            <h4 className="text-amber-500 font-bold text-xs tracking-[0.2em] uppercase mb-6">Get in Touch</h4>
            <h1 className="text-4xl md:text-6xl font-serif mb-8">Start Your Journey</h1>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto">
              We invite you to discuss your vision with our team. Private consultations are available by appointment.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info Card */}
            <div className="bg-neutral-800 text-white p-12 shadow-xl">
              <h3 className="text-2xl font-serif mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-neutral-700 p-3 rounded-sm">
                    <MapPin className="text-amber-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-400 mb-2">Headquarters</h4>
                    <p className="font-serif text-lg leading-relaxed">
                      9000 Wilshire Blvd<br/>
                      Beverly Hills, CA 90211
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-neutral-700 p-3 rounded-sm">
                    <Mail className="text-amber-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-400 mb-2">Email Inquiries</h4>
                    <a href="mailto:inquiries@sarandevelopers.com" className="font-serif text-lg hover:text-amber-500 transition-colors">
                      inquiries@sarandevelopers.com
                    </a>
                  </div>
                </div>

    

                <div className="flex items-start gap-6">
                  <div className="bg-neutral-700 p-3 rounded-sm">
                    <Clock className="text-amber-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-400 mb-2">Hours</h4>
                    <p className="font-serif text-lg">
                      Mon - Fri: 9:00 AM - 6:00 PM<br/>
                      Sat - Sun: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-12 shadow-xl border-t-4 border-amber-600">
              <h3 className="text-2xl font-serif mb-2 text-neutral-900">Send a Message</h3>
              <p className="text-neutral-500 mb-8 text-sm">Fill out the form below and our team will respond within 24 hours.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">First Name</label>
                    <Input placeholder="John" className="bg-stone-50 border-stone-200 focus:border-amber-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Last Name</label>
                    <Input placeholder="Doe" className="bg-stone-50 border-stone-200 focus:border-amber-500" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-stone-50 border-stone-200 focus:border-amber-500" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Subject</label>
                  <Input placeholder="Project Inquiry" className="bg-stone-50 border-stone-200 focus:border-amber-500" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Message</label>
                  <Textarea placeholder="Tell us about your project..." className="min-h-[150px] bg-stone-50 border-stone-200 focus:border-amber-500" />
                </div>

                <Button type="submit" className="w-full bg-neutral-900 hover:bg-amber-700 text-white uppercase tracking-widest text-xs py-6 transition-colors">
                  SendMessage
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}