import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { products } from '../data/companyData';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsPage() {
  const [toast, setToast] = useState<string | null>(null);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
        });
      });
      gsap.utils.toArray<HTMLElement>('.reveal-group').forEach((group) => {
        const children = group.querySelectorAll('.reveal-item');
        gsap.fromTo(children, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: group, start: 'top 85%', toggleActions: 'play none none none' }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => { if (toast) { const t = setTimeout(() => setToast(null), 3500); return () => clearTimeout(t); } }, [toast]);

  return (
    <div>
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-[#111] text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[320px] animate-fade-in-up">
          <CheckCircle size={20} className="text-[#2F5D50] shrink-0" />
          <span className="text-sm font-medium">{toast}</span>
          <button onClick={() => setToast(null)} className="ml-auto text-white/50 hover:text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      )}
      <section className="bg-white pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label text-xs tracking-[0.14em] text-[#2F5D50] mb-4 block">PRODUCTS</span>
            <h2 className="font-display text-[clamp(36px,5vw,80px)] text-[#0B0B0B] mb-4 leading-[1.1]">Our Products</h2>
            <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">Two product lines leveraging ECNU's proprietary probiotic strains for daily wellness support.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Common Food */}
            <div className="reveal bg-[#F6F7F2] overflow-hidden">
              <div className="aspect-[4/3] bg-white flex items-center justify-center p-8">
                <img src={products.commonFood.photo} alt="Common Food probiotic product" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-label text-xs tracking-wider text-white bg-[#2F5D50] px-4 py-1.5 rounded-full">{products.commonFood.badge}</span>
                </div>
                <p className="text-sm text-[#4a4a4a] leading-relaxed mb-3">{products.commonFood.description}</p>
                <p className="text-sm text-[#888] mb-4">{products.commonFood.strain}</p>
                <p className="text-sm text-[#0B0B0B] font-semibold mb-4">{products.commonFood.price}</p>
                <p className="text-xs text-[#888] mb-4">{products.commonFood.usage}</p>
                <button onClick={() => setExpandedProduct(expandedProduct === 'common' ? null : 'common')} className="flex items-center gap-2 text-sm font-medium text-[#2F5D50] hover:underline">
                  {expandedProduct === 'common' ? 'Show less' : 'Learn more — Daily Wellness Support'}
                  {expandedProduct === 'common' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {expandedProduct === 'common' && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-display text-lg text-[#0B0B0B] mb-1">{products.commonFood.learnMore.title}</h4>
                    <p className="text-xs text-[#888] mb-6">{products.commonFood.learnMore.subtitle}</p>
                    <div className="space-y-6">
                      {products.commonFood.learnMore.steps.map((step, i) => (
                        <div key={step.title} className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#2F5D50] flex items-center justify-center shrink-0"><span className="text-white font-display text-sm">{i + 1}</span></div>
                          <div>
                            <h5 className="font-semibold text-[#0B0B0B] text-sm mb-1">{step.title}</h5>
                            <p className="text-xs text-[#6E6E6E] leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-[#aaa] mt-6 italic">
                      These statements describe general wellness support. This product is a common food, not a dietary supplement or medical product.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Dietary Supplement */}
            <div className="reveal bg-[#F6F7F2] overflow-hidden">
              <div className="aspect-[4/3] bg-white flex items-center justify-center p-8">
                <img src={products.dietarySupplement.photo} alt="Dietary Supplement product" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-label text-xs tracking-wider text-white bg-[#2F5D50] px-4 py-1.5 rounded-full">{products.dietarySupplement.badge}</span>
                </div>
                <p className="text-sm text-[#4a4a4a] leading-relaxed mb-3">{products.dietarySupplement.description}</p>
                <p className="text-sm text-[#888] mb-4">{products.dietarySupplement.mechanism}</p>
                <p className="text-sm text-[#0B0B0B] font-semibold mb-4">{products.dietarySupplement.price}</p>
                <p className="text-xs text-[#888] mb-4">{products.dietarySupplement.usage}</p>
                <button onClick={() => setExpandedProduct(expandedProduct === 'dietary' ? null : 'dietary')} className="flex items-center gap-2 text-sm font-medium text-[#2F5D50] hover:underline">
                  {expandedProduct === 'dietary' ? 'Show less' : 'Learn more — Daily Gut Care'}
                  {expandedProduct === 'dietary' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {expandedProduct === 'dietary' && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-display text-lg text-[#0B0B0B] mb-1">{products.dietarySupplement.learnMore.title}</h4>
                    <p className="text-xs text-[#888] mb-6">{products.dietarySupplement.learnMore.subtitle}</p>
                    <div className="space-y-4">
                      {products.dietarySupplement.learnMore.benefits.map((benefit) => (
                        <div key={benefit.title} className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-[#2F5D50]/10 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle size={16} className="text-[#2F5D50]" /></div>
                          <div>
                            <h5 className="font-semibold text-[#0B0B0B] text-sm mb-1">{benefit.title}</h5>
                            <p className="text-xs text-[#6E6E6E] leading-relaxed">{benefit.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-[#aaa] mt-6 italic">
                      These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
