import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
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
          <CheckCircle size={20} className="text-[#2F5D50] shrink-0" />
          <span className="text-sm font-medium">{toast}</span>
          <button onClick={() => setToast(null)} className="ml-auto text-white/50 hover:text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      )}

      <section className="bg-[#2F5D50] pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label text-xs tracking-[0.14em] text-white/60 mb-4 block">CONTACT US</span>
            <h2 className="font-display text-[clamp(36px,5vw,80px)] text-white mb-4 leading-[1.1]">Get in Touch</h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto">Whether you are interested in our products, pipeline, investment opportunities, or research collaboration — we would love to hear from you.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="reveal">
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setToast('Thank you! We will get back to you within 24 hours.'); }}>
                <div>
                  <label className="font-label text-[10px] tracking-[0.14em] text-white/60 block mb-2">NAME</label>
                  <input type="text" className="w-full px-4 py-3.5 bg-white/10 border border-white/20 text-white text-sm rounded-sm placeholder:text-white/40" placeholder="Your name" required />
                </div>
                <div>
                  <label className="font-label text-[10px] tracking-[0.14em] text-white/60 block mb-2">EMAIL</label>
                  <input type="email" className="w-full px-4 py-3.5 bg-white/10 border border-white/20 text-white text-sm rounded-sm placeholder:text-white/40" placeholder="you@company.com" required />
                </div>
                <div>
                  <label className="font-label text-[10px] tracking-[0.14em] text-white/60 block mb-2">INTERESTED IN</label>
                  <select className="w-full px-4 py-3.5 bg-white/10 border border-white/20 text-white text-sm rounded-sm">
                    <option className="text-[#0B0B0B]">Product Inquiry</option>
                    <option className="text-[#0B0B0B]">Investment Opportunity</option>
                    <option className="text-[#0B0B0B]">Partnership</option>
                    <option className="text-[#0B0B0B]">Media</option>
                    <option className="text-[#0B0B0B]">Clinical Collaboration</option>
                    <option className="text-[#0B0B0B]">Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-label text-[10px] tracking-[0.14em] text-white/60 block mb-2">MESSAGE</label>
                  <textarea rows={4} className="w-full px-4 py-3.5 bg-white/10 border border-white/20 text-white text-sm resize-none rounded-sm placeholder:text-white/40" placeholder="Tell us about your inquiry..." required></textarea>
                </div>
                <button type="submit" className="px-8 py-3.5 bg-white text-[#2F5D50] text-sm font-medium rounded-full inline-flex items-center gap-2 hover:bg-[#F6F7F2] transition-colors">Send message<ArrowRight size={14} /></button>
              </form>
            </div>
            <div className="reveal space-y-10">
              <div>
                <h3 className="font-display text-xl text-white mb-5">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, text: 'hello@synbioera.com' },
                    { icon: MapPin, text: 'Shanghai, China' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><item.icon size={18} className="text-white/70" /></div>
                      <span className="text-white/80 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={18} className="text-white/70" />
                  <span className="font-semibold text-white text-sm">Response Time</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">We typically respond within 24 hours. For urgent inquiries, please contact us directly via email.</p>
              </div>
              <div className="pt-6 border-t border-white/20">
                <p className="text-[11px] text-white/50 leading-relaxed">Dietary supplement. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <img src="/images/synbioera_logo.png" alt="SynBioEra" className="h-20 w-auto object-contain" />
              <p className="text-xs text-white/50 mt-3 leading-relaxed">Using microbes as the key, reshaping health. Engineered probiotics from East China Normal University.</p>
            </div>
            <div>
              <div className="font-label text-[10px] tracking-wider text-white/50 mb-3">COMPANY</div>
              <div className="space-y-2">
                <Link to="/about" className="block text-sm text-white/70 hover:text-white transition-colors">About Us</Link>
                <Link to="/pipeline" className="block text-sm text-white/70 hover:text-white transition-colors">Pipeline</Link>
                <Link to="/investors" className="block text-sm text-white/70 hover:text-white transition-colors">Investors</Link>
              </div>
            </div>
            <div>
              <div className="font-label text-[10px] tracking-wider text-white/50 mb-3">RESEARCH</div>
              <div className="space-y-2">
                <Link to="/science" className="block text-sm text-white/70 hover:text-white transition-colors">Publications</Link>
                <Link to="/products" className="block text-sm text-white/70 hover:text-white transition-colors">Products</Link>
                <Link to="/pipeline" className="block text-sm text-white/70 hover:text-white transition-colors">Pipeline</Link>
              </div>
            </div>
            <div>
              <div className="font-label text-[10px] tracking-wider text-white/50 mb-3">CONTACT</div>
              <div className="space-y-2">
                <span className="block text-sm text-white/70">hello@synbioera.com</span>
                <span className="block text-sm text-white/70">Shanghai, China</span>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-label text-xs tracking-[0.18em] text-white/40">SYNBIOERA</span>
            <span className="text-xs text-white/40">&copy; 2025 Shanghai SynBioEra Biotechnology Co., Ltd. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
