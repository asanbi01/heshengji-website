import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import { Outlet, useLocation, Link } from 'react-router-dom';

const navItems = [
  { label: 'ABOUT US', href: '/about' },
  {
    label: 'PIPELINE',
    href: '/pipeline',
    dropdown: [
      { label: 'Overview', href: '/pipeline' },
      { label: 'Hyperuricemia', href: '/pipeline#hyperuricemia' },
      { label: 'Diabetes', href: '/pipeline#program-GIFT' },
      { label: 'Anti-Aging Probiotic', href: '/pipeline#program-BM1' },
      { label: 'Anti-hair Loss, Hair Care', href: '/pipeline#program-BM-H' },
      { label: 'Anti-wrinkle, Repair', href: '/pipeline#program-BM-S' },
    ],
  },
  { label: 'PRODUCTS', href: '/products' },
  { label: 'SCIENCE', href: '/science' },
  { label: 'INVESTORS', href: '/investors' },
  { label: 'CONTACT', href: '/contact' },
];

/* ─── Scroll to top button ─── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-8 z-50 w-12 h-12 rounded-full bg-[#2F5D50] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#1a3d34] hover:scale-110 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={22} />
    </button>
  );
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [ddTimer, setDdTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setDdOpen(false);
  }, [location.pathname]);

  /* Handle anchor scroll after navigate */
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const isActive = (href: string) => {
    if (href.includes('#')) return false;
    return location.pathname === href;
  };

  const openDropdown = () => {
    if (ddTimer) clearTimeout(ddTimer);
    setDdOpen(true);
  };

  const closeDropdown = () => {
    const timer = setTimeout(() => setDdOpen(false), 150);
    setDdTimer(timer);
  };

  return (
    <div className="min-h-screen bg-[#F6F7F2]">
      <div className="grain-overlay" />

      {/* TOP NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-22">
            <Link
              to="/"
              className="shrink-0 flex items-center"
            >
              <img src="/images/synbioera_logo.png" alt="SynBioEra" className="h-16 w-auto object-contain" />
            </Link>

            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && openDropdown()}
                  onMouseLeave={() => item.dropdown && closeDropdown()}
                >
                  <Link
                    to={item.href}
                    className={`font-label text-[12px] tracking-[0.14em] transition-colors relative group py-2 inline-block ${
                      isActive(item.href) ? 'text-[#2F5D50]' : 'text-[#0B0B0B] hover:text-[#2F5D50]'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#2F5D50] transition-all duration-300 ${
                      isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && ddOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[220px] overflow-hidden">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="block px-4 py-2.5 text-sm text-[#4a4a4a] hover:bg-[#2F5D50] hover:text-white transition-colors whitespace-nowrap"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:block shrink-0">
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-[#2F5D50] text-white text-[12px] font-medium rounded-full inline-flex items-center font-label tracking-wider hover:bg-[#244a40] transition-colors"
              >
                GET IN TOUCH
              </Link>
            </div>

            <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 overflow-hidden transition-all duration-400 ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 px-6">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  onClick={() => { if (!item.dropdown) setMenuOpen(false); }}
                  className={`block w-full text-left py-4 font-label text-sm tracking-[0.14em] border-b border-gray-100 ${isActive(item.href) ? 'text-[#2F5D50]' : 'text-[#0B0B0B]'}`}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 border-l-2 border-[#2F5D50]/20 ml-2 mb-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 text-xs text-[#6E6E6E] hover:text-[#2F5D50] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block w-full text-center px-6 py-3 bg-[#2F5D50] text-white text-sm font-medium rounded-full font-label tracking-wider"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20 lg:pt-22">
        <Outlet />
      </main>

      <ScrollToTop />
    </div>
  );
}
