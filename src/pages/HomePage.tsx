import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.set('.hero-bg-img', { opacity: 0, scale: 1.04 });
      gsap.set('.hero-headline span', { y: 60, opacity: 0 });
      gsap.set('.hero-sub', { y: 30, opacity: 0 });
      gsap.set('.hero-cta', { y: 30, opacity: 0 });
      const tl = gsap.timeline({ delay: 0.3 });
      tl.to('.hero-bg-img', { opacity: 1, scale: 1, duration: 1.6, ease: 'power2.out' })
        .to('.hero-headline span', { y: 0, opacity: 1, duration: 1, stagger: 0.04, ease: 'power3.out' }, '-=1.2')
        .to('.hero-sub', { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.6')
        .to('.hero-cta', { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.6');
      gsap.to('.hero-bg-img', { yPercent: 20, scale: 1.06, ease: 'none',
        scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 0.5 }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section className="hero-section relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero_portrait.jpg" alt="" className="hero-bg-img w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="hero-headline font-display text-[clamp(28px,5vw,80px)] leading-[1.1] text-white mb-8 drop-shadow-lg">
            <span className="inline-block">INVISIBLE</span>{' '}<span className="inline-block">CARE,</span>{' '}<span className="inline-block">VISIBLE</span>{' '}<span className="inline-block">HEALTH</span>
          </h1>
          <div className="hero-cta flex flex-wrap gap-4 justify-center">
            <Link to="/about" className="px-8 py-3.5 bg-[#2F5D50] text-white text-sm font-medium rounded-full inline-flex items-center gap-2 hover:bg-[#244a40] transition-colors">
              Discover More<ArrowRight size={16} />
            </Link>
            <Link to="/pipeline" className="px-8 py-3.5 border-2 border-white text-white text-sm font-medium rounded-full hover:bg-white hover:text-[#0B0B0B] transition-all duration-300">
              View Pipeline
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
