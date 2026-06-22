import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FlaskConical, Dna, TrendingUp,
  Shield, Zap, Users, Clock,
  Award, BookOpen, FileText
} from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

export default function InvestorsPage() {
  const [toast, setToast] = useState<string | null>(null);

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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F5D50" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
          <span className="text-sm font-medium">{toast}</span>
          <button onClick={() => setToast(null)} className="ml-auto text-white/50 hover:text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      )}
      <section className="bg-white pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label text-xs tracking-[0.14em] text-[#2F5D50] mb-4 block">INVESTOR RELATIONS</span>
            <h2 className="font-display text-[clamp(36px,5vw,80px)] text-[#0B0B0B] mb-4 leading-[1.1]">Invest in the Future of Health</h2>
            <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">SynBioEra represents a unique opportunity to invest in cutting-edge synthetic biology with immediate product-market fit.</p>
          </div>

          <div className="reveal-group grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: FlaskConical, title: 'Product Pipeline', desc: 'Two-track strategy: Natural probiotics for near-term commercialization + Engineered smart cells for long-term therapeutics.' },
              { icon: Dna, title: 'Clinical Validation', desc: 'Clinical research collaboration with leading Shanghai hospitals.' },
              { icon: TrendingUp, title: 'Market Opportunity', desc: 'Growing demand for probiotic wellness products in China and globally.' },
            ].map((item) => (
              <div key={item.title} className="reveal-item bg-[#F6F7F2] p-8 hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-[#2F5D50]/10 flex items-center justify-center mb-5"><item.icon size={24} className="text-[#2F5D50]" /></div>
                <h3 className="font-display text-lg text-[#0B0B0B] mb-3">{item.title}</h3>
                <p className="text-[#6E6E6E] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal mb-16">
            <h3 className="font-display text-3xl text-[#0B0B0B] mb-8 text-center">Key Investment Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { num: '9', label: 'Representative Papers', sub: 'Science, Nature, PNAS', icon: BookOpen },
                { num: '2', label: 'Cover Stories', sub: 'Science Translational Medicine', icon: Award },
                { num: '11', label: 'Journals Published', sub: 'Top-tier venues', icon: FileText },
                { num: '50-100M', label: 'RMB Fundraising', sub: 'Target Series A', icon: TrendingUp },
              ].map((m) => (
                <div key={m.label} className="bg-[#F6F7F2] p-6 text-center">
                  <m.icon size={20} className="text-[#2F5D50] mx-auto mb-2" />
                  <div className="font-display text-3xl text-[#2F5D50]">{m.num}</div>
                  <div className="text-xs text-[#0B0B0B] mt-1 font-medium">{m.label}</div>
                  <div className="text-[10px] text-[#888] mt-0.5">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-2xl text-[#0B0B0B] mb-6">Fundraising Strategy</h3>
              <div className="space-y-4">
                <div className="bg-[#F6F7F2] p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-[#0B0B0B]">SynBioEra</span>
                    <span className="font-label text-[10px] tracking-wider text-[#2F5D50] bg-[#2F5D50]/10 px-2 py-0.5 rounded-full">PARENT</span>
                  </div>
                  <p className="text-sm text-[#6E6E6E]">Houses all IP, technology, and long-term assets. Investors receive equity in the parent company with full exposure to all pipeline programs.</p>
                </div>
                <div className="bg-white border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-[#0B0B0B]">Hesheng Jikang</span>
                    <span className="font-label text-[10px] tracking-wider text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">SPIN-OFF</span>
                  </div>
                  <p className="text-sm text-[#6E6E6E]">Focused probiotic commercialization entity. Fundraising for rapid product commercialization and market entry.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl text-[#0B0B0B] mb-6">Competitive Advantages</h3>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: 'IP Protection', desc: 'Technology platform protected by invention patent portfolio.' },
                  { icon: Zap, title: 'Academic Credibility', desc: 'Papers in Science, Nature Biotechnology, Nature Cancer, and other top-tier journals. ECNU platform.' },
                  { icon: Users, title: 'Expert Team', desc: 'ETH Zurich Ph.D-led team with industry veterans in pharma and biotech.' },
                  { icon: Clock, title: 'Speed to Market', desc: 'Natural probiotics already on market generating revenue while R&D continues.' },
                ].map((adv) => (
                  <div key={adv.title} className="bg-[#F6F7F2] p-5 flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2F5D50]/10 flex items-center justify-center shrink-0"><adv.icon size={18} className="text-[#2F5D50]" /></div>
                    <div><div className="font-semibold text-[#0B0B0B] text-sm mb-1">{adv.title}</div><div className="text-xs text-[#888] leading-relaxed">{adv.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
