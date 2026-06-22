// @ts-nocheck
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight, Sparkles, ChevronDown, ChevronUp,
  FlaskConical, Heart, Brain, Microscope, Target, Globe, Activity
} from 'lucide-react';
import { images, pipelinePrograms } from '../data/companyData';
import type { ReactNode } from 'react';

gsap.registerPlugin(ScrollTrigger);

/* ────────── detail modal ────────── */
function DetailModal({ title, body, onClose }: { title: string; body: ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm flex items-center justify-center p-6" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-2xl text-[#0B0B0B]">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className="text-[#4a4a4a] text-sm leading-relaxed">{body}</div>
      </div>
    </div>
  );
}

/* ────────── section wrapper ────────── */
function Section({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return <div id={id} className={`reveal bg-white p-6 lg:p-10 mb-8 ${className}`}>{children}</div>;
}

/* ────────── image helper ────────── */
function Img({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="my-4">
      <img src={src} alt={alt} className="w-full max-w-3xl mx-auto rounded-lg border border-gray-100" />
      {caption && <p className="text-xs text-[#888] text-center mt-2 italic">{caption}</p>}
    </div>
  );
}

export default function PipelinePage() {
  const [modal, setModal] = useState<{ title: string; body: ReactNode } | null>(null);

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

  const programDetails: Record<string, { title: string; body: ReactNode }> = {
    'PULSE': {
      title: 'PULSE — Intelligent Uric Acid Sensor Platform',
      body: (
        <div className="space-y-4">
          <p><strong>Type:</strong> Engineered Smart Probiotic — Serious Medicine Platform</p>
          <p><strong>Indication:</strong> Hyperuricemia</p>
          <p><strong>Stage:</strong> Early Development</p>
          <p>PULSE is an engineered probiotic with a smart uric acid sensor. It uses directed evolution of urate oxidase with uric acid-responsive expression. The system is non-hematogenous, non-colonizing, and free of immune rejection — a whole-cell therapeutic with a mature and straightforward industrial-scale manufacturing process.</p>
          <p><strong>Background — The Evolutionary Root of Hyperuricemia:</strong></p>
          <p>During evolution, the gene encoding urate oxidase (uricase) underwent a loss-of-function mutation in humans. Unlike most mammals, we cannot progressively break down uric acid into harmless compounds. This fundamental metabolic deficiency sets the stage for uric acid accumulation and hyperuricemia.</p>
          <p><strong>Current Clinical Limitations:</strong></p>
          <ul className="ml-4 space-y-1">
            <li>Dietary Restriction: Limited efficacy, requires long-term adherence</li>
            <li>Synthesis Inhibitors (e.g., allopurinol): Cardiovascular risks, liver/kidney damage</li>
            <li>Excretion Promoters (e.g., benzbromarone): Hepatotoxicity risk</li>
            <li>Exogenous Uricases (e.g., pegloticase): Highly immunogenic, prohibitively expensive</li>
          </ul>
          <p><strong>PULSE Advantages:</strong></p>
          <ul className="ml-4 space-y-1">
            <li>Directed evolution of urate oxidase</li>
            <li>Uric acid-responsive expression system</li>
            <li>Rapid and efficient uric acid degradation, efficacy comparable to allopurinol</li>
            <li>Non-hematogenous, non-colonizing, no immune rejection</li>
            <li>Whole-cell therapeutic; mature industrial-scale manufacturing</li>
          </ul>
        </div>
      )
    },
    'GIFT': {
      title: 'GIFT/GLP-1 — Smart Glucose Sensor for Diabetes',
      body: (
        <div className="space-y-4">
          <p><strong>Type:</strong> Engineered Smart Probiotic — Serious Medicine Platform</p>
          <p><strong>Indication:</strong> Diabetes</p>
          <p><strong>Stage:</strong> Early Development</p>
          <p>GIFT is an engineered probiotic with real-time glucose sensing and automatic on-demand GLP-1 delivery. These islet-mimetic probiotics sense blood glucose fluctuations and smartly release therapeutic peptides, reducing side effects associated with sustained high-dose administration.</p>
          <p><strong>Key Advantages:</strong></p>
          <ul className="ml-4 space-y-1">
            <li>Oral administration — improved patient compliance</li>
            <li>Real-time glucose sensing with automatic on-demand delivery</li>
            <li>Lower incidence of hypoglycemia compared to semaglutide</li>
            <li>Reduced gastrointestinal discomfort</li>
            <li>Comparable efficacy to existing GLP-1 therapies</li>
          </ul>
        </div>
      )
    },
    'BM1': {
      title: 'BM1 — Anti-Aging Probiotic',
      body: (
        <div className="space-y-4">
          <p><strong>Type:</strong> Natural Probiotic — Consumer Medicine Platform</p>
          <p><strong>Indication:</strong> Anti-Aging</p>
          <p><strong>Stage:</strong> IIT (Investigator-Initiated Trial)</p>
          <p>Our anti-aging probiotic library is sourced from over 6,000 gut microbiota samples collected from Chinese centenarians aged 100+. Over 20,000 single-strain cultures have been isolated, with 47 species (136 strains) extending C. elegans lifespan by &gt;10%, and 21 species (32 strains) extending mouse lifespan by &gt;5%.</p>
          <p><strong>I. Whole-Animal Level — Lifespan Extension:</strong></p>
          <p>A 12-month continuous dosing study in aged mice showed:</p>
          <ul className="ml-4 space-y-1">
            <li>Mean lifespan extension of 25.53% in males and 26.94% in females</li>
            <li>Efficacy matching the classic anti-aging drug combination rapamycin plus acarbose</li>
            <li>Significantly improved behavioral performance (reduced anxiety, enhanced exploratory behavior)</li>
            <li>Superior grip strength, bone strength, and motor coordination vs. controls</li>
          </ul>
          <p><strong>II. Cellular Level — Stem Cell &amp; Mitochondrial Protection:</strong></p>
          <ul className="ml-4 space-y-1">
            <li>Compound 4 repairs damaged intestinal stem cells and restores proliferative capacity</li>
            <li>Ameliorates mitochondrial fragmentation and promotes mitochondrial fusion</li>
            <li>Preserves normal mitochondrial morphology and function</li>
          </ul>
          <p><strong>III. Molecular Level — Key Transport Pathway:</strong></p>
          <ul className="ml-4 space-y-1">
            <li>Compound 4 specifically accumulates within mitochondria</li>
            <li>SCL7A1 is the key transporter mediating mitochondrial entry</li>
            <li>Confirmed by fluorescence co-localization and RNAi knockdown experiments</li>
          </ul>
        </div>
      )
    },
    'BM-H': {
      title: 'BM-H — Anti-hair Loss, Hair Care',
      body: (
        <div className="space-y-4">
          <p><strong>Type:</strong> Functional Cosmetic Ingredients</p>
          <p><strong>Indication:</strong> Anti-hair Loss, Hair Care</p>
          <p><strong>Stage:</strong> Medium Test</p>
          <p>Our natural probiotic hair growth pipeline demonstrates a complete chain of validation data from model construction to safety evaluation.</p>
          <p><strong>I. Experimental Model:</strong></p>
          <p>8-week-old C57BL/6J mice with androgenetic alopecia (AGA) model established by dorsal shaving combined with testosterone propionate injection. Four groups: untreated control, model group, positive control (minoxidil), and probiotic BM1 lysate topical application. 21-day experimental period.</p>
          <p><strong>II. Hair Growth Efficacy:</strong></p>
          <ul className="ml-4 space-y-1">
            <li>Follicular Level: Markedly superior regenerative status by Day 9 vs. untreated control</li>
            <li>Whole-Animal Level: Significantly faster hair growth, greater density, better coverage — efficacy comparable to minoxidil</li>
            <li>Hair growth scores significantly higher than model group from Day 7, sustained improvement through Day 21</li>
          </ul>
          <p><strong>III. Safety Evaluation:</strong></p>
          <ul className="ml-4 space-y-1">
            <li>No significant differences in body weight among groups</li>
            <li>No hepatotoxicity (ALT, AST normal)</li>
            <li>No nephrotoxicity (serum creatinine normal)</li>
            <li>Favorable safety profile confirmed</li>
          </ul>
        </div>
      )
    },
    'BM-S': {
      title: 'BM-S — Anti-wrinkle, Repair',
      body: (
        <div className="space-y-4">
          <p><strong>Type:</strong> Functional Cosmetic Ingredients</p>
          <p><strong>Indication:</strong> Anti-wrinkle, Repair</p>
          <p><strong>Stage:</strong> Medium Test</p>
          <p>Natural probiotic-derived active compound for anti-wrinkle and skin repair applications. Under development as a functional cosmetic raw material for the skincare industry.</p>
          <p><strong>Development Status:</strong></p>
          <ul className="ml-4 space-y-1">
            <li>Probiotic-derived active compounds with skin repair properties</li>
            <li>Positioned as functional cosmetic raw material</li>
            <li>Currently under medium-scale testing</li>
          </ul>
        </div>
      )
    },
  };

  return (
    <div>
      {modal && <DetailModal title={modal.title} body={modal.body} onClose={() => setModal(null)} />}
      <section className="bg-[#F6F7F2] pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <span className="font-label text-xs tracking-[0.14em] text-[#2F5D50] mb-4 block">RESEARCH PIPELINE</span>
            <h2 className="font-display text-[clamp(36px,5vw,80px)] text-[#0B0B0B] mb-4 leading-[1.1]">Our Pipeline</h2>
            <p className="text-[#4a4a4a] text-lg max-w-3xl mx-auto">
              Dual-Stage Probiotic Synergy — Delivering a One-Stop Solution for Metabolic Sub-Health Issues
            </p>
          </div>

          {/* PIPELINE DIAGRAM */}
          <Section className="!p-4 lg:!p-6">
            <h3 className="font-display text-2xl text-[#0B0B0B] mb-2">Pipeline Overview</h3>
            <p className="text-sm text-[#6E6E6E] mb-4">Hover over PIPELINE in the navigation menu to jump to any program section.</p>
            <img src={images.pipelineDiagram} alt="Pipeline Overview" className="w-full" />
          </Section>

          {/* PLATFORM CARDS */}
          <div className="reveal-group grid md:grid-cols-3 gap-4 mb-12">
            <div className="reveal-item bg-white p-6 border-l-4 border-[#2F5D50]">
              <h4 className="font-display text-lg text-[#0B0B0B] mb-2">Engineered Smart Probiotic</h4>
              <p className="text-xs text-[#6E6E6E] mb-3">Serious Medicine Platform</p>
              <p className="text-xs text-[#4a4a4a]">GIFT/GLP-1 (Diabetes) &middot; PULSE (Hyperuricemia)</p>
            </div>
            <div className="reveal-item bg-white p-6 border-l-4 border-emerald-500">
              <h4 className="font-display text-lg text-[#0B0B0B] mb-2">Natural Probiotic</h4>
              <p className="text-xs text-[#6E6E6E] mb-3">Consumer Medicine Platform</p>
              <p className="text-xs text-[#4a4a4a]">BM1 (Anti-Aging)</p>
            </div>
            <div className="reveal-item bg-white p-6 border-l-4 border-purple-500">
              <h4 className="font-display text-lg text-[#0B0B0B] mb-2">Functional Cosmetic</h4>
              <p className="text-xs text-[#6E6E6E] mb-3">Raw Materials Platform</p>
              <p className="text-xs text-[#4a4a4a]">BM-H (Anti-hair Loss, Hair Care) &middot; BM-S (Anti-wrinkle, Repair)</p>
            </div>
          </div>

          {/* ═══════ DIABETES EPIDEMIOLOGY ═══════ */}
          <Section>
            <div className="flex items-center gap-3 mb-4">
              <Activity size={24} className="text-[#2F5D50]" />
              <h3 className="font-display text-2xl text-[#0B0B0B]">Diabetes — A Global Health Crisis</h3>
            </div>
            <p className="text-sm text-[#6E6E6E] mb-4">Diabetes is one of the most serious epidemic diseases worldwide (International Diabetes Federation, 2021)</p>
            <div className="flex flex-wrap gap-6 my-6 justify-center">
              {[
                { label: 'Global diabetes patients', value: '537M' },
                { label: 'China diabetes patients', value: '114M' },
                { label: 'Annual deaths in China', value: '1.3M' },
                { label: 'Annual medical cost (China)', value: '¥190B' },
              ].map(s => (
                <div key={s.label} className="text-center bg-[#F6F7F2] px-6 py-4 rounded-lg min-w-[160px]">
                  <div className="font-display text-3xl text-[#2F5D50]">{s.value}</div>
                  <div className="text-xs text-[#6E6E6E] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#4a4a4a] leading-relaxed text-center">
              <strong>1 in 10 people globally is affected.</strong> Diabetes imposes an enormous burden on patients and healthcare systems, creating an urgent need for safer, more effective, and accessible treatment solutions.
            </p>
          </Section>

          {/* ═══════ HYPERURICEMIA BACKGROUND ═══════ */}
          <Section id="hyperuricemia">
            <div className="flex items-center gap-3 mb-4">
              <Globe size={24} className="text-[#2F5D50]" />
              <h3 className="font-display text-2xl text-[#0B0B0B]">The Evolutionary Root of Hyperuricemia</h3>
            </div>
            <p className="text-sm text-[#6E6E6E] mb-4">Targeting the Evolutionary Root of Hyperuricemia &middot; Beyond Symptom Management: Correcting a Genetic Defect Millions of Years in the Making</p>
            <Img src={images.pipelineGlobalPrevalence} alt="Global hyperuricemia prevalence map" caption="Global distribution of hyperuricemia prevalence rates" />
            <div className="flex flex-wrap gap-6 my-6 justify-center">
              {[
                { label: 'Global hyperuricemia', value: '480M' },
                { label: 'Global gout', value: '62M' },
                { label: 'China hyperuricemia', value: '196M' },
                { label: 'China gout', value: '18M' },
              ].map(s => (
                <div key={s.label} className="text-center bg-[#F6F7F2] px-6 py-4 rounded-lg min-w-[140px]">
                  <div className="font-display text-3xl text-[#2F5D50]">{s.value}</div>
                  <div className="text-xs text-[#6E6E6E] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#4a4a4a] leading-relaxed mb-4">
              <strong>A relic of evolution in the human genome is the fundamental biological cause of hyperuricemia and gout.</strong>
              During the course of evolution, the gene encoding urate oxidase (uricase)—the key enzyme responsible for degrading uric acid—underwent a loss-of-function mutation in humans. Unlike most other mammals and certain microorganisms, we can neither progressively break down uric acid into harmless carbon dioxide and ammonium ions, nor exploit alternative microbial metabolic pathways that convert uric acid into pyruvate and ammonium ions. Instead, we must excrete uric acid unchanged. This fundamental metabolic deficiency inevitably sets the stage for uric acid accumulation, crystallization, and the subsequent onset of hyperuricemia and gout.
            </p>
            <p className="text-sm text-[#0B0B0B] font-semibold mb-3">All current clinical strategies for controlling uric acid are workarounds that bypass, rather than fix, this core defect:</p>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {[
                { title: 'Dietary Restriction', desc: 'Relies heavily on long-term patient adherence and offers very limited efficacy on its own.' },
                { title: 'Synthesis Inhibitors (e.g., allopurinol)', desc: 'May induce cardiovascular disease, with risks of liver and kidney damage from long-term use.' },
                { title: 'Excretion Promoters (e.g., benzbromarone)', desc: 'Carry a clear risk of hepatotoxicity and may impair mitochondrial function.' },
                { title: 'Exogenous Uricases (e.g., pegloticase)', desc: 'Highly immunogenic, prone to triggering allergic reactions, and prohibitively expensive for widespread use.' },
              ].map(item => (
                <div key={item.title} className="bg-[#F6F7F2] p-4 rounded-lg">
                  <p className="text-sm font-semibold text-[#0B0B0B] mb-1">{item.title}</p>
                  <p className="text-xs text-[#6E6E6E]">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#4a4a4a] leading-relaxed">
              This is precisely why hundreds of millions of patients worldwide urgently need a <strong>new kind of uric acid-degrading solution</strong>—one that is safer, more efficient, and capable of fundamentally remedying this innate human deficiency.
            </p>
          </Section>

          {/* ═══════ PULSE ═══════ */}
          <Section id="program-PULSE">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#2F5D50]/10 flex items-center justify-center text-[#2F5D50]"><Heart size={20} /></div>
              <div>
                <span className="font-label text-[10px] tracking-wider text-[#6E6E6E]">ENGINEERED SMART PROBIOTIC</span>
                <h3 className="font-display text-2xl text-[#0B0B0B]">PULSE — Intelligent Uric Acid Sensor Platform</h3>
              </div>
              <span className="ml-auto font-label text-[9px] tracking-wider text-[#2F5D50] bg-[#2F5D50]/10 px-2 py-0.5 rounded-full shrink-0">EARLY DEVELOPMENT</span>
            </div>
            <Img src={images.pulseMechanism} alt="PULSE mechanism" caption="PULSE engineered probiotic — uric acid sensor mechanism" />
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#F6F7F2] p-4 rounded-lg">
                <p className="text-sm font-semibold text-[#0B0B0B] mb-2">Key Features</p>
                <ul className="text-sm text-[#4a4a4a] space-y-1">
                  <li className="flex items-start gap-2"><span className="text-[#2F5D50] mt-1">&#8226;</span>Directed evolution of urate oxidase</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5D50] mt-1">&#8226;</span>Uric acid-responsive expression of urate oxidase</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5D50] mt-1">&#8226;</span>Non-hematogenous, non-colonizing, free of immune rejection</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5D50] mt-1">&#8226;</span>Whole-cell therapeutic; mature industrial-scale manufacturing</li>
                </ul>
              </div>
              <div className="bg-[#F6F7F2] p-4 rounded-lg">
                <p className="text-sm font-semibold text-[#0B0B0B] mb-2">Advantages Over Current Treatments</p>
                <ul className="text-sm text-[#4a4a4a] space-y-1">
                  <li className="flex items-start gap-2"><span className="text-[#2F5D50] mt-1">&#8226;</span>No cardiovascular risk (unlike allopurinol)</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5D50] mt-1">&#8226;</span>No hepatotoxicity (unlike benzbromarone)</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5D50] mt-1">&#8226;</span>No immunogenicity (unlike pegloticase)</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5D50] mt-1">&#8226;</span>Cost-effective for widespread use</li>
                </ul>
              </div>
            </div>
            <Img src={images.pulseUaReduction} alt="PULSE UA reduction data" caption="Rapid and efficient uric acid degradation — PULSE vs. Allopurinol" />
            <button onClick={() => setModal(programDetails['PULSE'])} className="text-sm font-medium text-[#2F5D50] inline-flex items-center gap-1 hover:underline mt-2">
              <Target size={14} /> View full PULSE details
            </button>
          </Section>

          {/* ═══════ GIFT ═══════ */}
          <Section id="program-GIFT">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#2F5D50]/10 flex items-center justify-center text-[#2F5D50]"><FlaskConical size={20} /></div>
              <div>
                <span className="font-label text-[10px] tracking-wider text-[#6E6E6E]">ENGINEERED SMART PROBIOTIC</span>
                <h3 className="font-display text-2xl text-[#0B0B0B]">GIFT/GLP-1 — Intelligent Glucose Sensor</h3>
              </div>
              <span className="ml-auto font-label text-[9px] tracking-wider text-[#2F5D50] bg-[#2F5D50]/10 px-2 py-0.5 rounded-full shrink-0">EARLY DEVELOPMENT</span>
            </div>
            <Img src={images.giftMechanism} alt="GIFT mechanism" caption="GIFT engineered probiotic — glucose-responsive GLP-1 delivery system" />
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#F6F7F2] p-4 rounded-lg">
                <p className="text-sm font-semibold text-[#0B0B0B] mb-2">Key Features</p>
                <ul className="text-sm text-[#4a4a4a] space-y-1">
                  <li className="flex items-start gap-2"><span className="text-[#2F5D50] mt-1">&#8226;</span>Oral administration — improved patient compliance</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5D50] mt-1">&#8226;</span>Islet-mimetic probiotics with real-time glucose sensing</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5D50] mt-1">&#8226;</span>Automatic on-demand GLP-1 delivery</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5D50] mt-1">&#8226;</span>Reduces side effects from sustained high-dose administration</li>
                </ul>
              </div>
              <div className="bg-[#F6F7F2] p-4 rounded-lg">
                <p className="text-sm font-semibold text-[#0B0B0B] mb-2">Lower Side Effects vs. Semaglutide</p>
                <p className="text-sm text-[#4a4a4a] mb-2">With comparable efficacy:</p>
                <ul className="text-sm text-[#4a4a4a] space-y-1">
                  <li className="flex items-start gap-2"><span className="text-emerald-600 mt-1">&#10003;</span>Lower incidence of hypoglycemia</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600 mt-1">&#10003;</span>Reduced gastrointestinal discomfort</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#2F5D50]/5 p-4 rounded-lg mb-4">
              <p className="text-sm text-[#0B0B0B]">
                <strong>Background:</strong> Diabetes affects 537 million people globally (114 million in China). GIFT/GLP-1 uses engineered probiotics with real-time glucose sensing and on-demand GLP-1 delivery, offering oral administration with lower hypoglycemia risk and reduced GI side effects compared to injectable semaglutide.
              </p>
            </div>
            <button onClick={() => setModal(programDetails['GIFT'])} className="text-sm font-medium text-[#2F5D50] inline-flex items-center gap-1 hover:underline mt-2">
              <Target size={14} /> View full GIFT details
            </button>
          </Section>

          {/* ═══════ BM1 — ANTI-AGING ═══════ */}
          <Section id="program-BM1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600"><Brain size={20} /></div>
              <div>
                <span className="font-label text-[10px] tracking-wider text-[#6E6E6E]">NATURAL PROBIOTIC — CONSUMER MEDICINE</span>
                <h3 className="font-display text-2xl text-[#0B0B0B]">BM1 — Anti-Aging Probiotic</h3>
              </div>
              <span className="ml-auto font-label text-[9px] tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full shrink-0">IIT</span>
            </div>
            <div className="reveal-group grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="reveal-item bg-[#F6F7F2] p-4 text-center rounded-lg">
                <div className="font-display text-2xl text-[#2F5D50]">6,000+</div>
                <div className="text-xs text-[#6E6E6E] mt-1">Gut microbiota samples from centenarians aged 100+</div>
              </div>
              <div className="reveal-item bg-[#F6F7F2] p-4 text-center rounded-lg">
                <div className="font-display text-2xl text-[#2F5D50]">20,000+</div>
                <div className="text-xs text-[#6E6E6E] mt-1">Isolated single-strain cultures</div>
              </div>
              <div className="reveal-item bg-[#F6F7F2] p-4 text-center rounded-lg">
                <div className="font-display text-2xl text-[#2F5D50]">47 species</div>
                <div className="text-xs text-[#6E6E6E] mt-1">(136 strains) extending C. elegans lifespan by &gt;10%</div>
              </div>
              <div className="reveal-item bg-[#F6F7F2] p-4 text-center rounded-lg">
                <div className="font-display text-2xl text-[#2F5D50]">21 species</div>
                <div className="text-xs text-[#6E6E6E] mt-1">(32 strains) extending mouse lifespan by &gt;5%</div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-display text-lg text-[#0B0B0B] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#2F5D50] text-white text-xs flex items-center justify-center">I</span>
                Cellular Level: Stem Cell Protection &amp; Mitochondrial Repair
              </h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Img src={images.antiagingMitochondria} alt="Mitochondrial protection" caption="Active Compound 4 promotes mitochondrial fusion (TEM imaging)" />
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-[#F6F7F2] p-4 rounded-lg">
                  <p className="text-sm font-semibold text-[#0B0B0B] mb-1">Stem Cell Repair</p>
                  <p className="text-xs text-[#4a4a4a]">Compound 4 repaired damaged intestinal stem cells, restored proliferative capacity and stemness.</p>
                </div>
                <div className="bg-[#F6F7F2] p-4 rounded-lg">
                  <p className="text-sm font-semibold text-[#0B0B0B] mb-1">Mitochondrial Integrity</p>
                  <p className="text-xs text-[#4a4a4a]">Compound 4 ameliorated mitochondrial fragmentation, promoted fusion, and maintained normal morphology.</p>
                </div>
                <div className="bg-[#F6F7F2] p-4 rounded-lg">
                  <p className="text-sm font-semibold text-[#0B0B0B] mb-1">Target Validation</p>
                  <p className="text-xs text-[#4a4a4a]">Proteomic pull-down confirmed targets enriched in mitochondrial pathways.</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-display text-lg text-[#0B0B0B] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#2F5D50] text-white text-xs flex items-center justify-center">II</span>
                Molecular Level: SCL7A1-Mediated Mitochondrial Transport
              </h4>
              <p className="text-sm text-[#4a4a4a] leading-relaxed mb-3">
                Fluorescence co-localization showed that Compound 4 specifically accumulates within mitochondria. RNAi knockdown validated the essential role of transporter <strong>SCL7A1</strong>: upon Scl7a1 knockdown, Compound 4 could no longer enter mitochondria, confirming SCL7A1 as the key transporter mediating mitochondrial entry.
              </p>
            </div>
            <div className="bg-[#2F5D50]/5 p-6 rounded-lg mb-4">
              <p className="text-sm text-[#0B0B0B] leading-relaxed">
                <strong>Background:</strong> Our anti-aging probiotic library is sourced from over 6,000 gut microbiota samples collected from Chinese centenarians aged 100+. Over 20,000 single-strain cultures have been isolated. Key active compounds (Compound 4) target mitochondria via SCL7A1-mediated transport, preserving mitochondrial function and protecting stem cells for integrated anti-aging effects.
              </p>
            </div>
            <button onClick={() => setModal(programDetails['BM1'])} className="text-sm font-medium text-[#2F5D50] inline-flex items-center gap-1 hover:underline">
              <Target size={14} /> View full BM1 details
            </button>
          </Section>

          {/* ═══════ BM-H — HAIR GROWTH ═══════ */}
          <Section id="program-BM-H">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600"><Sparkles size={20} /></div>
              <div>
                <span className="font-label text-[10px] tracking-wider text-[#6E6E6E]">FUNCTIONAL COSMETIC RAW MATERIAL</span>
                <h3 className="font-display text-2xl text-[#0B0B0B]">BM-H — Anti-hair Loss, Hair Care</h3>
              </div>
              <span className="ml-auto font-label text-[9px] tracking-wider text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full shrink-0">MEDIUM TEST</span>
            </div>
            <div className="mb-6">
              <h4 className="font-display text-lg text-[#0B0B0B] mb-3">I. Experimental Model &amp; Evaluation System</h4>
              <p className="text-sm text-[#4a4a4a] leading-relaxed mb-4">
                8-week-old C57BL/6J mice. An androgenetic alopecia (AGA) model was established by dorsal shaving combined with subcutaneous injection of testosterone propionate (5 mg/kg). Four groups: untreated control, model group, positive control (minoxidil), and probiotic BM1 lysate topical application group. Experimental period: 21 days.
              </p>
            </div>
            <div className="mb-6">
              <h4 className="font-display text-lg text-[#0B0B0B] mb-3">II. Hair Growth Efficacy Validation</h4>
              <Img src={images.hairgrowthScoring} alt="Hair growth scoring" caption="Hair growth scoring — BM1 lysate vs. Minoxidil vs. Control" />
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-[#F6F7F2] p-4 rounded-lg">
                  <p className="text-sm font-semibold text-[#0B0B0B] mb-2">Follicular Level</p>
                  <p className="text-sm text-[#4a4a4a]">By Day 9, the probiotic-treated group exhibited markedly superior regenerative status and heightened follicular activity, directly demonstrating hair follicle regeneration-promoting effects of the BM1 lysate.</p>
                </div>
                <div className="bg-[#F6F7F2] p-4 rounded-lg">
                  <p className="text-sm font-semibold text-[#0B0B0B] mb-2">Whole-Animal Level</p>
                  <p className="text-sm text-[#4a4a4a]">21-day observation showed the BM1 lysate group exhibited significantly faster hair growth, greater hair density, and better coverage, achieving efficacy comparable to minoxidil.</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-display text-lg text-[#0B0B0B] mb-3">III. Safety Evaluation: Favorable Safety Profile</h4>
              <Img src={images.hairgrowthOrgans} alt="Organ toxicity evaluation" caption="Organ toxicity evaluation — Liver and kidney morphology across all groups" />
              <div className="grid md:grid-cols-3 gap-3 mb-4">
                <div className="bg-emerald-50 p-4 rounded-lg text-center">
                  <p className="text-sm font-semibold text-emerald-800 mb-1">Body Weight</p>
                  <p className="text-xs text-[#4a4a4a]">No significant differences — normal growth unaffected</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg text-center">
                  <p className="text-sm font-semibold text-emerald-800 mb-1">Liver Function</p>
                  <p className="text-xs text-[#4a4a4a]">ALT, AST normal — no hepatotoxicity</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg text-center">
                  <p className="text-sm font-semibold text-emerald-800 mb-1">Kidney Function</p>
                  <p className="text-xs text-[#4a4a4a]">Serum creatinine normal — no nephrotoxicity</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-[#0B0B0B]">
                <strong>Background:</strong> Engineered probiotic platform targeting androgenetic alopecia (AGA) through topical application of probiotic lysate. Preclinical data demonstrates efficacy comparable to minoxidil with a favorable safety profile.
              </p>
            </div>
            <button onClick={() => setModal(programDetails['BM-H'])} className="text-sm font-medium text-[#2F5D50] inline-flex items-center gap-1 hover:underline">
              <Target size={14} /> View full BM-H details
            </button>
          </Section>

          {/* ═══════ BM-S — ANTI-WRINKLE ═══════ */}
          <Section id="program-BM-S">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600"><Microscope size={20} /></div>
              <div>
                <span className="font-label text-[10px] tracking-wider text-[#6E6E6E]">FUNCTIONAL COSMETIC RAW MATERIAL</span>
                <h3 className="font-display text-2xl text-[#0B0B0B]">BM-S — Anti-wrinkle, Repair</h3>
              </div>
              <span className="ml-auto font-label text-[9px] tracking-wider text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full shrink-0">MEDIUM TEST</span>
            </div>
            <p className="text-sm text-[#4a4a4a] leading-relaxed mb-4">
              Natural probiotic-derived active compound for anti-wrinkle and skin repair applications. Under development as a functional cosmetic raw material for the skincare industry.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-[#0B0B0B] mb-1">Active Compounds</p>
                <p className="text-xs text-[#4a4a4a]">Probiotic-derived active compounds with demonstrated skin repair properties</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-[#0B0B0B] mb-1">Positioning</p>
                <p className="text-xs text-[#4a4a4a]">Functional cosmetic raw material for the skincare industry</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-[#0B0B0B] mb-1">Status</p>
                <p className="text-xs text-[#4a4a4a]">Currently under medium-scale testing and validation</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-[#0B0B0B]">
                <strong>Background:</strong> Probiotic-derived active compounds with demonstrated skin repair properties, positioned as functional cosmetic raw materials for the anti-wrinkle and skin repair market.
              </p>
            </div>
            <button onClick={() => setModal(programDetails['BM-S'])} className="text-sm font-medium text-[#2F5D50] inline-flex items-center gap-1 hover:underline mt-2">
              <Target size={14} /> View full BM-S details
            </button>
          </Section>

        </div>
      </section>
    </div>
  );
}
