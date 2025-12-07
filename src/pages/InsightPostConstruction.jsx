import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight, ArrowLeft, ShieldCheck, Lightbulb, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';
import { base44 } from '@/api/base44Client';

export default function InsightPostConstruction() {
  const [keyTakeaways, setKeyTakeaways] = useState([]);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [caseStudy, setCaseStudy] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateAIContent = async () => {
      try {
        const [takeawaysRes, relatedRes, caseStudyRes] = await Promise.all([
          base44.integrations.Core.InvokeLLM({
            prompt: `Generate 4 concise key takeaways (one sentence each) for this article about post-construction cleaning in luxury real estate. Focus on: HEPA filtration, 3-stage cleaning protocol, protecting high-end finishes, and why specialized cleaning matters.`,
            response_json_schema: {
              type: "object",
              properties: {
                takeaways: { type: "array", items: { type: "string" } }
              }
            }
          }),
          base44.integrations.Core.InvokeLLM({
            prompt: `Suggest 2 related article topics for someone reading about post-construction cleaning in luxury homes. Topics should relate to: material preservation, maintenance standards, or building systems. Return title and brief description.`,
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
            prompt: `Write a brief 2-paragraph case study (150 words) about a luxury Beverly Hills estate where improper post-construction cleaning damaged marble flooring, and how proper HEPA filtration and specialized cleaning saved a similar property. Use professional, architectural tone.`
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
        title="Post-Construction Cleaning" 
        description="The critical phase of post-construction cleaning and detailing."
        keywords="post-construction cleaning, luxury detailing, HEPA filtration, particulate removal"
      />
      <div className="bg-stone-50 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-neutral-900 text-white py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <Link to={createPageUrl('Home')} className="inline-flex items-center text-amber-500 text-xs tracking-widest uppercase mb-8 hover:text-white transition-colors">
              <ArrowLeft size={12} className="mr-2" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              The Critical Phase: <br/>Post-Construction Cleaning & Detailing
            </h1>
            <p className="text-xl text-neutral-400 font-serif italic">
              Why the final 1% of the build determines the longevity of the asset.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 -mt-10">
          <div className="bg-white p-8 md:p-16 shadow-xl max-w-4xl mx-auto border-t-4 border-amber-600">
            <article className="prose prose-lg prose-stone font-serif max-w-none">
              <p className="lead text-2xl text-neutral-800 mb-10 leading-relaxed">
                In luxury development, the project isn't finished when the hammers stop. The final 1% of the project—removing airborne particulate matter, polishing tempered glass, and treating imported limestone—is what defines the property's value.
              </p>
              
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
                alt="Post-Construction Detailing" 
                className="w-full h-[400px] object-cover my-10 grayscale hover:grayscale-0 transition-all duration-700"
              />

              <p className="mb-8">
                Construction dust is abrasive; improper removal can scratch custom glazing and dull high-gloss finishes. Standard janitorial protocols are insufficient for the delicate nature of post-construction debris, which often contains silicates, drywall dust, and micro-abrasives that can permanently damage surfaces if wiped incorrectly.
              </p>
              
              <h3 className="font-bold text-xl mt-8 mb-4">The Saran Protocol: 3-Stage Filtration</h3>
              <p>To protect the asset, we mandate a rigorous cleanup schedule:</p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li><strong>Rough Clean:</strong> Removal of heavy debris and stickers from fixtures.</li>
                <li><strong>Deep Detail:</strong> Top-down removal of dust using HEPA-filter vacuums to capture 99.97% of particulates.</li>
                <li><strong>Final Polish:</strong> A white-glove inspection of all reflective surfaces and flooring.</li>
              </ul>

              {/* Pro Tip Box */}
              <div className="my-12 bg-amber-50 border border-amber-200 p-8 rounded-sm flex items-start gap-6 not-prose">
                <div className="bg-amber-100 p-3 rounded-full shrink-0">
                  <ShieldCheck className="text-amber-700 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-amber-900 font-bold uppercase tracking-widest text-sm mb-2">Saran Standard: Pro Tip</h4>
                  <p className="text-amber-900/80 mb-4">
                    We strictly prohibit general labor from performing final detailing. We recommend <a href="https://maidvip.com/services/post-construction-cleaning" target="_blank" rel="noopener noreferrer" className="text-amber-700 font-bold underline decoration-2 underline-offset-4 hover:text-amber-900">professional post-construction cleaning services</a> for this delicate phase. Specialized equipment and training are required to remove particulate matter without surface abrasion.
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-xl mt-8 mb-4">Achieving the Showroom Finish</h3>
              <p>
                Achieving a showroom-ready finish requires a microscopic level of attention. From HVAC air duct sanitization to remove VOCs (Volatile Organic Compounds) to the gentle polishing of brass fixtures, every step must be executed with precision to ensure the handover is flawless.
              </p>

              {/* AI-Generated Case Study */}
              {!loading && caseStudy && (
                <div className="my-12 bg-gradient-to-br from-stone-50 to-stone-100 border-l-4 border-amber-600 p-8 rounded-sm">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <BookOpen className="text-amber-600" size={20} />
                    Case Study: The Cost of Cutting Corners
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

            <div className="mt-20 pt-10 border-t border-neutral-200">
              <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">Next in Series</p>
              <Link to={createPageUrl('InsightMaterials')} className="group block">
                <h3 className="text-2xl font-serif text-neutral-900 group-hover:text-amber-600 transition-colors flex items-center justify-between">
                  Preserving High-End Materials <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}