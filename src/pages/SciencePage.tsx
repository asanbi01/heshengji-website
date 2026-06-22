// @ts-nocheck
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FlaskConical, Microscope, GraduationCap, ExternalLink, BookOpen, Award
} from 'lucide-react';
import {
  outstandingPublications, researchGrants, patentInfo, coreTechnology
} from '../data/companyData';

gsap.registerPlugin(ScrollTrigger);

export default function SciencePage() {
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

  return (
    <div>
      <section className="bg-[#F6F7F2] pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-label text-xs tracking-[0.14em] text-[#2F5D50] mb-4 block">OUR SCIENCE</span>
            <h2 className="font-display text-[clamp(36px,5vw,80px)] text-[#0B0B0B] mb-4 leading-[1.1]">Research &amp; Publications</h2>
            <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">
              Professor Ye Haifeng's team has published extensively in top-tier journals and secured substantial national research funding.
            </p>
          </div>

          {/* Stats */}
          <div className="reveal-group grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[
              { label: 'Representative Papers', sub: 'In leading journals' },
              { label: 'Cover Stories', sub: 'Science Translational Medicine' },
              { label: 'Patent Portfolio', sub: 'Over 30 applied, 20+ granted' },
              { label: 'Research Grants', sub: 'National-level programs' },
            ].map((s) => (
              <div key={s.label} className="reveal-item bg-white p-6 text-center shadow-card">
                <div className="font-label text-[10px] tracking-[0.14em] text-[#6E6E6E] mt-1">{s.label}</div>
                <div className="text-xs text-[#999] mt-2">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Outstanding Publications — 5 papers with real links */}
          <div className="reveal mb-10">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen size={24} className="text-[#2F5D50]" />
              <h3 className="font-display text-2xl text-[#0B0B0B]">Outstanding Publications</h3>
            </div>
            <p className="text-[#6E6E6E] mb-6">Selected landmark papers from the founder team — verified with direct DOI links</p>
          </div>

          <div className="reveal mb-20 space-y-4">
            {outstandingPublications.map((pub, i) => (
              <div key={pub.doi} className={`bg-white p-6 shadow-sm border-l-4 border-[#2F5D50] ${i % 2 === 1 ? 'bg-[#FAFAFA]' : ''}`}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className="font-semibold text-[#0B0B0B] text-sm">{pub.journal}</span>
                      <span className="text-[#6E6E6E] text-xs">({pub.year})</span>
                      {pub.note && (
                        <span className="font-label text-[10px] tracking-wider text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
                          {pub.note}
                        </span>
                      )}
                      <span className="font-label text-[10px] tracking-wider text-[#2F5D50] bg-[#2F5D50]/10 px-2 py-0.5 rounded-full">
                        IF: {pub.if}
                      </span>
                    </div>
                    <p className="text-[#0B0B0B] text-sm leading-relaxed mb-3">{pub.title}</p>
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#2F5D50] hover:underline font-medium"
                    >
                      <ExternalLink size={14} /> View Paper (DOI: {pub.doi})
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Core Technology */}
          <div className="reveal bg-white p-8 mb-20">
            <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">Core Technology</h3>
            <p className="text-sm text-[#4a4a4a] leading-relaxed">{coreTechnology}</p>
          </div>

          {/* Patents */}
          <div className="reveal bg-white p-8 mb-20">
            <div className="flex items-center gap-3 mb-4">
              <Award size={24} className="text-[#2F5D50]" />
              <h3 className="font-display text-2xl text-[#0B0B0B]">Patents</h3>
            </div>
            <p className="text-sm text-[#4a4a4a] leading-relaxed mb-2"><strong>{patentInfo.summary}</strong></p>
            <p className="text-sm text-[#6E6E6E] leading-relaxed">{patentInfo.detail}</p>
          </div>

          {/* Research Grants */}
          <div className="reveal mb-20">
            <h3 className="font-display text-2xl text-[#0B0B0B] mb-2">Research Grants</h3>
            <p className="text-[#6E6E6E] mb-6">National-level research programs (funding amounts in 10K RMB)</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#0B0B0B]">
                    <th className="text-left py-3 px-4 font-label text-[10px] tracking-wider text-[#6E6E6E]">PROGRAM</th>
                    <th className="text-right py-3 px-4 font-label text-[10px] tracking-wider text-[#6E6E6E]">AMOUNT (10K RMB)</th>
                  </tr>
                </thead>
                <tbody>
                  {researchGrants.map((grant, i) => (
                    <tr key={grant.program} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F6F7F2]/50'}`}>
                      <td className="py-3 px-4 font-medium text-[#0B0B0B]">{grant.program}</td>
                      <td className="py-3 px-4 text-right font-display text-[#2F5D50]">{grant.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Research Platform */}
          <div className="reveal text-center mb-16">
            <h3 className="font-display text-3xl text-[#0B0B0B] mb-4">Research Platform</h3>
            <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">East China Normal University — Medical Synthetic Biology Research Center</p>
          </div>
          <div className="reveal-group grid md:grid-cols-3 gap-6">
            {[
              { icon: FlaskConical, title: 'Synthetic Biology Center', desc: 'ECNU Medical Synthetic Biology Research Center — core R&D engine for probiotic and smart cell platforms.' },
              { icon: GraduationCap, title: 'ECNU Platform', desc: 'East China Normal University School of Life Sciences, Shanghai Key Laboratory of Regulatory Biology.' },
              { icon: Microscope, title: 'Clinical Research', desc: 'Clinical validation through collaboration with leading Shanghai hospitals for safety and efficacy assessment.' },
            ].map((item) => (
              <div key={item.title} className="reveal-item bg-white p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[#2F5D50]/10 flex items-center justify-center mx-auto mb-5"><item.icon size={24} className="text-[#2F5D50]" /></div>
                <h4 className="font-display text-lg text-[#0B0B0B] mb-3">{item.title}</h4>
                <p className="text-sm text-[#6E6E6E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
