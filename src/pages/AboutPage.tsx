import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle } from 'lucide-react';
import { founder, teamMembers, companyIntro, images } from '../data/companyData';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
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
      <section className="bg-white pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label text-xs tracking-[0.14em] text-[#2F5D50] mb-4 block">ABOUT US</span>
            <h2 className="font-display text-[clamp(36px,5vw,80px)] text-[#0B0B0B] mb-4 leading-[1.1]">About SynBioEra</h2>
            <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">{companyIntro.slogan}</p>
          </div>

          <div className="reveal grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h3 className="font-display text-[clamp(28px,3vw,48px)] text-[#0B0B0B] mb-6 leading-[1.1]">Company Profile</h3>
              <div className="space-y-4 text-sm text-[#4a4a4a] leading-relaxed">
                <p><strong className="text-[#0B0B0B]">{companyIntro.name}</strong> ({companyIntro.chineseName}) is a biotechnology enterprise focused on medical synthetic biology technology innovation, dedicated to becoming a pioneer in intelligent gene and living cell therapy.</p>
                <p>The company's core technology originates from the research team of Prof. Haifeng Ye at ECNU, undertaking the National Key R&amp;D Program &quot;Synthetic Biology&quot; and other major national research initiatives. The team has published <strong>over 50 papers</strong> in top journals with <strong>20+ granted patents</strong>.</p>
                <p>SynBioEra holds proprietary IP over a library of smart biosensors and a living cell drug development system, focusing on <strong>uric acid reduction, blood lipid reduction, alcohol metabolism support, anti-hair loss, anti-obesity, anti-aging and anti-wrinkle</strong>. Committed to developing <strong>&quot;First-in-Class&quot;</strong> innovative drugs with on-demand precise drug release.</p>
              </div>
            </div>
            <div className="reveal">
              <div className="bg-[#F6F7F2] p-8 space-y-6">
                <h3 className="font-display text-xl text-[#0B0B0B]">Company Information</h3>
                {[
                  { label: 'Full Name', value: companyIntro.name },
                  { label: 'Chinese Name', value: companyIntro.chineseName },
                  { label: 'Location', value: companyIntro.location },
                  { label: 'Focus', value: companyIntro.focus },
                  { label: 'Mission', value: companyIntro.mission },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-xs text-[#888] font-label tracking-wider">{item.label}</span>
                    <span className="text-sm text-[#0B0B0B] text-right max-w-[60%]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Event Photos */}
          <div className="reveal mb-20">
            <h3 className="font-display text-2xl text-[#0B0B0B] mb-8 text-center">Events &amp; Conferences</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img src={images.aboutEvent1} alt="Product launch event" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src={images.aboutEvent2} alt="Synthetic Biology Innovation Forum" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src={images.aboutEvent3} alt="Tech-Matching Fair presentation" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>

          <div className="reveal mb-20">
            <h3 className="font-display text-2xl text-[#0B0B0B] mb-8 text-center">Core Advantages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {companyIntro.advantages.map((adv) => (
                <div key={adv} className="bg-[#F6F7F2] p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#2F5D50]/10 flex items-center justify-center mx-auto mb-3"><CheckCircle size={18} className="text-[#2F5D50]" /></div>
                  <p className="text-sm text-[#4a4a4a] leading-relaxed">{adv}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal mb-10">
            <span className="font-label text-xs tracking-[0.14em] text-[#2F5D50] mb-4 block">LEADERSHIP</span>
            <h3 className="font-display text-3xl text-[#0B0B0B]">Our Team</h3>
          </div>

          <div className="reveal bg-[#F6F7F2] p-8 lg:p-10 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <img src={founder.photo} alt={founder.name} className="w-28 h-28 rounded-full object-cover shrink-0 shadow-sm" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h4 className="font-display text-2xl text-[#0B0B0B]">{founder.name} <span className="text-[#6E6E6E] text-lg">{founder.nameChinese}</span></h4>
                  <span className="font-label text-[10px] tracking-wider text-white bg-[#2F5D50] px-3 py-1 rounded-full">{founder.role.toUpperCase()}</span>
                </div>
                <p className="text-sm text-[#4a4a4a] leading-relaxed mb-4">{founder.bio}</p>
                <p className="text-sm text-[#4a4a4a] leading-relaxed mb-4">{founder.research}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {founder.awards.slice(0, 3).map((a) => (
                    <span key={a.year} className="px-3 py-1 bg-white text-xs text-[#6E6E6E] font-medium rounded-sm">{a.year} — {a.title}</span>
                  ))}
                </div>
                <p className="text-xs text-[#888] leading-relaxed">{founder.grants}</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h5 className="text-xs font-label tracking-wider text-[#888] mb-4">EDUCATION &amp; EXPERIENCE</h5>
              <div className="space-y-3">
                {founder.educationExperience.map((e) => (
                  <div key={e.period} className="flex gap-3">
                    <span className="text-xs text-[#2F5D50] font-medium whitespace-nowrap">{e.period}</span>
                    <span className="text-sm text-[#4a4a4a] leading-relaxed">{e.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 mt-8">
              <h5 className="text-xs font-label tracking-wider text-[#888] mb-4">SELECTED AWARDS &amp; HONORS</h5>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                {founder.awards.map((a) => (
                  <div key={a.year} className="flex gap-3">
                    <span className="text-xs text-[#2F5D50] font-medium whitespace-nowrap">{a.year}</span>
                    <span className="text-sm text-[#4a4a4a]">{a.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal-group grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {teamMembers.map((person) => (
              <div key={person.name} className="reveal-item bg-[#F6F7F2] p-6 flex gap-4 items-start">
                {person.photo ? (
                  <img src={person.photo} alt={person.name} className="w-16 h-16 rounded-full object-cover shrink-0 shadow-sm" />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[#2F5D50] flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-white font-display text-sm">{person.name.charAt(0)}</span>
                  </div>
                )}
                <div className="min-w-0">
                  <div className="font-semibold text-[#0B0B0B] text-sm">{person.name} <span className="text-[#888] font-normal">{person.nameChinese}</span></div>
                  <div className="text-xs text-[#2F5D50] font-medium mb-2">{person.role}</div>
                  <div className="text-xs text-[#4a4a4a] leading-relaxed">{person.bio}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
