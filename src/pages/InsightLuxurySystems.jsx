import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight, ArrowLeft, Lightbulb, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';
import { base44 } from '@/api/base44Client';

export default function InsightLuxurySystems() {
  const [keyTakeaways, setKeyTakeaways] = useState([]);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [caseStudy, setCaseStudy] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateAIContent = async () => {
      try {
        const [takeawaysRes, relatedRes, caseStudyRes] = await Promise.all([
          base44.integrations.Core.InvokeLLM({
            prompt: `Generate 4 concise key takeaways (one sentence each) for this article about modern luxury home systems and domotics. Focus on: Low-E glass technology, HVAC filtration standards, smart home integration, and preventative maintenance.`,
            response_json_schema: {
              type: "object",
              properties: {
                takeaways: { type: "array", items: { type: "string" } }
              }
            }
          }),
          base44.integrations.Core.InvokeLLM({
            prompt: `Suggest 2 related article topics for someone reading about modern luxury home systems and automation. Topics should relate to: building technology, energy efficiency, or smart home maintenance. Return title and brief description.`,
            response_json_schema: {
              type: "object",
              properties: {
                articles: { 
                  type: "array", 
                  items: { 
                    type: "object",
                    properties: {
                      title: { type: "string" },
                      description: { type: "string" }
                    }
                  }
                }
              }
            }
          }),
          base44.integrations.Core.InvokeLLM({
            prompt: `Write a brief 2-paragraph case study (150 words) about a San Francisco penthouse where neglected HVAC filters caused $50K in damage to artwork and fabrics, and how another property implemented preventative BMS monitoring to avoid system failures. Use professional, architectural tone.`
          })
        ]);

        setKeyTakeaways(takeawaysRes.takeaways || []);
        setRelatedArticles(relatedRes.articles || []);
        setCaseStudy(caseStudyRes);
      } catch (error) {
        console.error('AI content generation failed:', error);
      } finally {
        setLoading(false);
      }
    };

    generateAIContent();
  }, []);

  return (
    <>
      <SEO 
        title="Modern Luxury Systems" 
        description="Defining luxury beyond square footage - smart systems and domotics."
        keywords="smart home, home automation, luxury systems, HVAC, BMS, domotics"
      />
      <div className="bg-stone-50 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-neutral-900 text-white py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <Link to={createPageUrl('Home')} className="inline-flex items-center text-amber-500 text-xs tracking-widest uppercase mb-8 hover:text-white transition-colors">
              <ArrowLeft size={12} className="mr-2" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Defining Luxury: <br/>Beyond the Square Footage
            </h1>
            <p className="text-xl text-neutral-400 font-serif italic">
              The invisible systems and "Domotics" that power modern living.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 -mt-10">
          <div className="bg-white p-8 md:p-16 shadow-xl max-w-4xl mx-auto border-t-4 border-stone-800">
            <article className="prose prose-lg prose-stone font-serif max-w-none">
              <p className="lead text-2xl text-neutral-800 mb-10 leading-relaxed">
                True luxury is not merely about aesthetic finishes; it is about the operational efficiency of the home. From integrated smart-home sensors to floor-to-ceiling thermal <strong>fenestration</strong>, modern assets require a proactive, technically literate maintenance schedule.
              </p>
              
              <img 
                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2000&auto=format&fit=crop" 
                alt="Modern Smart Home" 
                className="w-full h-[400px] object-cover my-10 grayscale hover:grayscale-0 transition-all duration-700"
              />

              <h3 className="font-bold text-xl mt-8 mb-4">The Science of Glass & Light</h3>
              <p className="mb-6">
                Modern luxury homes utilize <strong>Low-E (Low Emissivity)</strong> glass with argon-filled chambers to control solar gain. These are not just windows; they are thermal barriers. Improper maintenance using abrasive tools can compromise the microscopic metallic coating, destroying the window's insulating <strong>R-value</strong>. Preserving these views requires a protocol that protects the seal against thermal stress.
              </p>

              <h3 className="font-bold text-xl mt-8 mb-4">Systemic Health: HVAC & BMS</h3>
              <p className="mb-8">
                Neglect leads to premature degradation of assets. The complex interplay of HVAC systems (requiring <strong>MERV-13</strong> filtration or higher), automated shading, and biometric security requires a holistic approach to property management. It is not merely about fixing what breaks, but preventing the breakdown through preventative remediation.
              </p>

              <div className="bg-stone-100 p-8 border-l-4 border-amber-600 my-10">
                <h4 className="font-bold text-neutral-900 uppercase tracking-widest text-sm mb-4">Saran Standard: Technical Proficiency</h4>
                <p className="mb-4">
                  We collaborate exclusively with service providers who are technically proficient in these advanced building systems. We rely on <a href="/#trusted-partners" className="text-amber-700 font-bold underline decoration-2 underline-offset-4 hover:text-amber-900">Technical Asset Preservation Partners</a> who understand the science of modern asset preservation, ensuring that the technological backbone of your home remains as pristine as the aesthetic finish.
                </p>
              </div>
              
              <p className="text-sm text-neutral-500 italic mt-8">
                Related Reading: <Link to={createPageUrl('InsightPostConstruction')} className="text-amber-600 hover:underline">The Critical Phase: Post-Construction Cleaning & Detailing</Link>
              </p>

              {/* AI-Generated Case Study */}
              {!loading && caseStudy && (
                <div className="my-12 bg-gradient-to-br from-stone-50 to-stone-100 border-l-4 border-amber-600 p-8 rounded-sm">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <BookOpen className="text-amber-600" size={20} />
                    Case Study: System Neglect & Prevention
                  </h3>
                  <p className="text-neutral-700 leading-relaxed whitespace-pre-line">{caseStudy}</p>
                </div>
              )}
            </article>

            {/* AI-Generated Key Takeaways */}
            {!loading && keyTakeaways.length > 0 && (
              <div className="mt-12 bg-amber-50 border border-amber-200 rounded-sm p-8">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-2 text-amber-900">
                  <Lightbulb className="text-amber-600" size={20} />
                  Key Takeaways
                </h3>
                <ul className="space-y-3">
                  {keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-amber-900">
                      <span className="text-amber-600 font-bold mt-1">•</span>
                      <span className="leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* AI-Generated Related Articles */}
            {!loading && relatedArticles.length > 0 && (
              <div className="mt-12 border-t border-stone-200 pt-12">
                <h3 className="font-bold text-xl mb-6">Related Reading</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticles.map((article, idx) => (
                    <div key={idx} className="bg-white border border-stone-200 p-6 hover:border-amber-400 transition-colors">
                      <h4 className="font-serif text-lg font-bold mb-2 text-neutral-900">{article.title}</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">{article.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}