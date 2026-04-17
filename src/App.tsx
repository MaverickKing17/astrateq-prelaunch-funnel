/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode, FormEvent } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Lock, 
  Snowflake, 
  AlertTriangle,
  History,
  ChevronRight, 
  CheckCircle2, 
  Plus,
  Globe,
  Clock,
  Check,
  Menu,
  X,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowUp,
  FileText,
  Info,
  Truck,
  Heart,
  Car,
  Gift,
  Sparkles,
  Star,
  Crown,
  Shield,
  Gem
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'FR'>('EN');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img 
              src="https://i.ibb.co/NdYZ7r7Z/Gemini-Generated-Image-pta8i9pta8i9pta8.png" 
              alt="SafeGuard Sentinel" 
              className="h-10 w-auto" 
              referrerPolicy="no-referrer" 
            />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex bg-gray-100 rounded-full p-1 text-xs font-bold">
              <button 
                onClick={() => setLanguage('EN')}
                className={`px-3 py-1 rounded-full transition-all ${language === 'EN' ? 'bg-white shadow-sm text-brand-dark' : 'text-gray-400 hover:text-gray-600'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('FR')}
                className={`px-3 py-1 rounded-full transition-all ${language === 'FR' ? 'bg-white shadow-sm text-brand-dark' : 'text-gray-400 hover:text-gray-600'}`}
              >
                FR
              </button>
            </div>
            <nav className="flex items-center gap-8 font-display text-sm text-brand-gray">
              <a href="#valuation" className="hover:text-brand-primary transition-colors">Engineering</a>
              <a href="#comparison" className="hover:text-brand-primary transition-colors">Reliability</a>
              <a href="#box" className="hover:text-brand-primary transition-colors">Safety Standards</a>
              <a href="#contact" className="hover:text-brand-primary transition-colors">Support</a>
            </nav>
            <a href="#reserve" className="bg-brand-primary text-white text-[13px] font-bold uppercase tracking-wider px-7 py-3 rounded-full hover:shadow-xl hover:shadow-brand-primary/20 active:scale-95 transition-all shadow-lg">Reserve My Family's Spot</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6">
              <div className="flex bg-gray-100 rounded-xl p-1 text-sm font-bold w-fit">
                <button 
                  onClick={() => setLanguage('EN')}
                  className={`px-6 py-2 rounded-lg transition-all ${language === 'EN' ? 'bg-white shadow-sm text-brand-dark' : 'text-gray-400'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('FR')}
                  className={`px-6 py-2 rounded-lg transition-all ${language === 'FR' ? 'bg-white shadow-sm text-brand-dark' : 'text-gray-400'}`}
                >
                  FR
                </button>
              </div>
              <div className="space-y-4 pt-4 border-t border-gray-50">
                <a href="#valuation" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-900">Engineering</a>
                <a href="#comparison" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-900">Reliability</a>
                <a href="#box" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-900">Safety Standards</a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-900">Support</a>
              </div>
              <a href="#reserve" onClick={() => setIsOpen(false)} className="block w-full text-center bg-brand-primary text-white py-4 rounded-xl font-bold">Reserve My Family's Spot</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const hasSeenTooltip = localStorage.getItem('astrateq_onboarding_seen');
    if (!hasSeenTooltip) {
      // Small delay for better UX
      const timer = setTimeout(() => setShowTooltip(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeTooltip = () => {
    setShowTooltip(false);
    localStorage.setItem('astrateq_onboarding_seen', 'true');
  };

  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#fbfbfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-brand-gray/80 text-sm font-medium tracking-wide">
                <div className="w-5 h-[1px] bg-brand-primary/30" />
                <span>Designed & Tested in Canada</span>
              </div>
              
              <h1 className="text-5xl md:text-[64px] font-semibold leading-[1.1] tracking-tight text-brand-dark">
                Quiet protection for the people who <span className="text-brand-primary">once protected you.</span>
              </h1>
              
              <p className="text-xl md:text-[22px] text-brand-gray max-w-xl leading-relaxed font-normal">
                A Canadian-engineered safety system designed to protect independence — not monitor it. Reserve today with a fully refundable $25 deposit.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full sm:w-auto">
                  <AnimatePresence>
                    {showTooltip && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full left-0 mb-5 z-20 w-80 p-6 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-blue-50"
                      >
                        <div className="space-y-3">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                              <span className="text-brand-primary text-[10px] font-black uppercase tracking-widest leading-none">Onboarding</span>
                            </div>
                            <button 
                              onClick={closeTooltip}
                              className="text-brand-gray/40 hover:text-brand-dark transition-colors"
                            >
                              <X size={16} />
                            </button>
                          </div>
                          
                          <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-brand-dark text-base tracking-tight italic">"The quiet peace of mind..."</h4>
                            <p className="text-xs text-brand-gray leading-relaxed">
                              Protecting your family's independence with Canadian-engineered intelligence. Our reservation system ensures you're first in line for Batch 01—with <span className="text-brand-primary font-bold">100% refundable safety</span>.
                            </p>
                          </div>

                          <button 
                            onClick={closeTooltip}
                            className="w-full py-2 bg-gray-50 hover:bg-brand-primary/5 text-brand-primary text-[11px] font-bold uppercase tracking-widest rounded-lg transition-colors border border-brand-primary/10"
                          >
                            Got it, thank you
                          </button>
                        </div>
                        
                        {/* Tooltip Arrow */}
                        <div className="absolute top-full left-12 w-4 h-4 bg-white border-r border-b border-blue-50 rotate-45 -translate-y-2" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <a href="#reserve" className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-primary text-white text-lg font-bold px-10 py-5 rounded-full hover:bg-brand-primary/95 hover:shadow-2xl hover:shadow-brand-primary/20 active:scale-[0.98] transition-all shadow-xl">
                    Reserve My Family’s Spot — $25 Fully Refundable
                  </a>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-brand-gray font-medium pl-1">
                <div className="flex items-center gap-2">
                  <Check className="text-green-500" size={16} strokeWidth={3} />
                  <span>Fully refundable</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-green-500" size={16} strokeWidth={3} />
                  <span>Designed & tested in Canada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-green-500" size={16} strokeWidth={3} />
                  <span>Limited first production release</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative w-full"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-white aspect-[4/5] md:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1621243804936-775306a8f2e3?q=80&w=1920&auto=format&fit=crop" 
                alt="Confident senior driver enjoying the journey" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle Indication of Safety */}
              <div className="absolute top-8 left-8">
                <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark">Quiet Protection Active</span>
                </div>
              </div>

              {/* Emotional Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Subtle Decorative Elements */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px]" />
            <div className="absolute -z-10 -top-10 -left-10 w-48 h-48 bg-brand-cyan/5 rounded-full blur-[60px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const EmotionalNarrative = () => {
  return (
    <section className="py-24 bg-[#fbfbfd]">
      <div className="max-w-4xl mx-auto px-4 text-center border-y border-brand-border py-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="space-y-6"
        >
          <div className="text-brand-gray font-bold tracking-[0.2em] uppercase text-xs">The Integrity Narrative</div>
          <p className="text-3xl md:text-4xl font-display font-medium leading-[1.4] text-brand-dark">
            "It's about the quiet peace of mind knowing they're safe during a dark Calgary winter drive, without ever making them feel watched. We built this to help you be there, even when you can't be."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBanner = () => {
  return (
    <div className="bg-white border-y border-gray-100 py-10 overflow-hidden relative">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-24 bg-brand-primary/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-24 bg-brand-cyan/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-y-10 gap-x-12">
          <motion.div 
            whileHover={{ y: -2 }}
            className="flex items-center gap-4 group cursor-default"
          >
            <div className="p-3 rounded-2xl bg-blue-50 text-brand-primary transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-primary/20">
              <ShieldCheck size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/60 mb-0.5">Government Approved</span>
              <span className="font-display font-bold text-base text-brand-dark tracking-tight">ISED Canada Compliant</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -2 }}
            className="flex items-center gap-4 group cursor-default"
          >
            <div className="p-3 rounded-2xl bg-cyan-50 text-brand-cyan transition-all group-hover:bg-brand-cyan group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-cyan/20">
              <Snowflake size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-cyan/60 mb-0.5">Reliability Platform</span>
              <span className="font-display font-bold text-base text-brand-dark tracking-tight">Alberta Winter Tested</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -2 }}
            className="flex items-center gap-4 group cursor-default"
          >
            <div className="p-3 rounded-2xl bg-brand-bg text-brand-primary transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-primary/20">
              <Lock size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/60 mb-0.5">Financial Safety</span>
              <span className="font-display font-bold text-base text-brand-dark tracking-tight">100% Refundable Deposit</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -2 }}
            className="flex items-center gap-4 group cursor-default"
          >
            <div className="p-3 rounded-2xl bg-brand-dark/5 text-brand-dark transition-all group-hover:bg-brand-dark group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-dark/20">
              <ShieldCheck size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/40 mb-0.5">Safety Verified</span>
              <span className="font-display font-bold text-base text-brand-dark tracking-tight">CSA Design Standards</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Calgary, AB",
      quote: "Setting this up for my elderly father was the best thing I did this year. He feels independent, and I feel relieved knowing he has that extra set of 'eyes' on the road.",
      verified: true
    },
    {
      name: "David L.",
      location: "Oakville, ON",
      quote: "I've tried generic dash cams, but they're too complicated. Sentinel is different. It's subtle, privacy-focused, and actually speaks to you when it matters.",
      verified: true
    },
    {
      name: "Marcus T.",
      location: "Vancouver, BC",
      quote: "The winter-focus is what sold me. Those dark, rainy Pacific Northwest nights are treacherous. Astra-Guard's glare reduction is a game changer.",
      verified: true
    }
  ];

  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">The Peace of Mind Proof</h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">Joined by 840+ Canadian families committed to a safer 2025.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
              className="p-8 rounded-apple-card bg-brand-bg border border-brand-border hover:shadow-premium transition-shadow cursor-default"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Zap key={i} size={14} className="fill-brand-primary text-brand-primary" />)}
              </div>
              <p className="text-brand-dark font-medium leading-[1.6] mb-8 italic">"{rev.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm">{rev.name}</h4>
                  <p className="text-xs text-brand-gray">{rev.location}</p>
                </div>
                {rev.verified && (
                  <div className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full uppercase tracking-widest">
                    <CheckCircle2 size={10} /> Verified Tester
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
const FeatureCard = ({ icon: Icon, title, description, badge }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group bg-white p-10 rounded-apple-card shadow-premium hover:shadow-2xl transition-all border border-brand-border flex flex-col h-full"
  >
    <motion.div 
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      whileHover={{ 
        rotate: [0, -10, 10, 0],
        scale: 1.1,
        transition: { duration: 0.4 }
      }}
      className="w-14 h-14 bg-brand-bg rounded-xl flex items-center justify-center text-brand-dark mb-8"
    >
      <Icon size={28} />
    </motion.div>
    {badge && (
      <span className="self-start px-3 py-1 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
        {badge}
      </span>
    )}
    <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
    <p className="text-brand-gray leading-relaxed flex-grow">{description}</p>
  </motion.div>
);

const GuardianOfferSection = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="valuation">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.4em] shadow-sm ring-1 ring-brand-primary/20"
          >
            Limited Founder Invitation
          </motion.div>
          <div className="space-y-4">
            <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter text-brand-dark leading-[0.9]">
              The Guardian <br /> <span className="text-brand-primary italic">Founder's Bundle.</span>
            </h2>
            <p className="text-brand-gray text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              We stacked <span className="text-brand-dark font-medium underline decoration-brand-primary decoration-4 underline-offset-8">$2,380+ in real value</span> into Batch 01. This is the only time these bonuses will ever be bundled.
            </p>
          </div>
        </div>

        {/* Bento Grid Offer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-fr">
          
          {/* Main Product Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 md:row-span-2 bg-[#F8F9FF] rounded-[3rem] p-8 md:p-12 relative overflow-hidden group border-2 border-brand-primary/5 hover:border-brand-primary/20 transition-all duration-700 flex flex-col min-h-[450px]"
          >
            <div className="absolute top-0 right-0 p-6 md:p-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-brand-primary/5 text-brand-primary group-hover:rotate-6 transition-transform">
                <Crown size={32} />
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="space-y-6 md:space-y-8">
                <div className="inline-flex items-center gap-2 bg-brand-primary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-primary/20">
                  Core Asset 01
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-dark leading-none tracking-tight">Sentinel X <br /> <span className="opacity-40">Founder Edition</span></h3>
                <p className="text-brand-gray text-lg max-w-sm font-medium leading-relaxed">
                  Surgical 8K road-facing sensor with <span className="text-brand-dark">Exclusive Laser-Etched Founder ID</span> and Obsidian stealth finish.
                </p>
              </div>
              
              <div className="mt-auto pt-10 flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-lg shadow-brand-primary/5 border border-brand-primary/5">
                  <Gem size={18} className="text-brand-primary" />
                  <span className="text-brand-dark font-bold text-sm leading-none">MSRP: $699</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-blue-50/50 px-5 py-2.5 rounded-full border border-brand-primary/10">
                  <ShieldCheck size={16} className="text-brand-primary" />
                  <span className="text-brand-primary font-black text-[10px] uppercase tracking-wider">Industrial Spec</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bonus 1: Lifetime Software */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-brand-dark rounded-[3rem] p-8 md:p-10 relative overflow-hidden group border border-white/5 flex flex-col min-h-[300px]"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles size={20} className="text-brand-primary" />
                  <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.3em]">Founders Lifetime Access</span>
                </div>
                <h4 className="text-3xl font-display font-bold text-white leading-tight">Neural AI Updates <br /> <span className="text-brand-primary underline decoration-brand-primary/40 underline-offset-4 decoration-2">Free Forever.</span></h4>
                <p className="text-gray-400 text-sm md:text-base max-w-[320px] leading-relaxed">
                  Avoid the "Subscription Trap." Proactive AI road-scanning features stay free for your unit's life.
                </p>
              </div>
              
              <div className="mt-auto pt-8 flex items-center justify-between">
                <span className="text-white/20 font-black text-4xl md:text-5xl italic tracking-tighter">FREE</span>
                <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[10px] uppercase font-bold tracking-[0.2em] shadow-inner">Value: $1,200 (10yrs)</div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/10 blur-[80px] pointer-events-none" />
          </motion.div>

          {/* Bonus 2: Install Kit (The "Solve Next Problem") */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 lg:col-span-2 bg-[#F0F2FF] rounded-[3rem] p-8 md:p-10 relative overflow-hidden group border border-brand-primary/5 flex flex-col min-h-[250px]"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-brand-primary shadow-sm mb-2">
                  <Car size={24} />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-brand-dark font-display leading-tight">Universal <br /> Stealth Install Kit</h4>
                <p className="text-brand-gray text-xs md:text-sm font-medium leading-relaxed">No messy wires. Hardwire & invisible trim-routing toolkit included.</p>
              </div>
              <div className="mt-auto pt-6 flex items-end justify-between">
                <div>
                  <span className="text-brand-primary font-black text-2xl uppercase italic leading-none">Gift</span>
                  <div className="text-brand-gray text-[10px] font-bold uppercase tracking-widest mt-1">Value: $150</div>
                </div>
                <Truck className="text-brand-primary/20" size={40} />
              </div>
            </div>
          </motion.div>

          {/* Bonus 3: Arctic Warranty */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 lg:col-span-1 bg-white border-2 border-brand-primary/20 rounded-[3rem] p-8 relative overflow-hidden group hover:border-brand-primary transition-all duration-500 shadow-sm flex flex-col min-h-[250px]"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="space-y-4">
                <Shield size={24} className="text-brand-primary group-hover:scale-110 transition-transform" />
                <h4 className="text-sm md:text-base font-bold text-brand-dark font-display leading-tight uppercase tracking-tight">3-YR Arctic Warrior <br /> Protection</h4>
              </div>
              <div className="mt-auto pt-4">
                <div className="text-brand-primary font-black text-xl italic tracking-tighter leading-none">FREE</div>
                <div className="text-brand-gray text-[9px] font-bold uppercase tracking-widest mt-1 opacity-60">Value: $280</div>
              </div>
            </div>
          </motion.div>

          {/* Final Scarcity/Offer Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-6 lg:col-span-3 bg-gradient-to-br from-brand-primary to-brand-cyan rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden group flex flex-col min-h-[300px]"
          >
             <div className="relative z-10 flex flex-col h-full">
               <div className="space-y-6">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                     <Star size={24} fill="white" />
                   </div>
                   <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">Batch 01 Availability</div>
                 </div>
                 
                 <div className="space-y-1">
                   <div className="text-5xl md:text-6xl font-display font-black leading-none tracking-tighter">18 <span className="text-xl font-bold uppercase opacity-60 tracking-widest">Left</span></div>
                   <p className="font-bold text-white/90 text-sm md:text-lg">Spots remaining in the Founder Batch.</p>
                 </div>
               </div>

               <div className="mt-auto pt-10">
                 <div className="w-full bg-white/20 rounded-full h-3 mb-3 overflow-hidden border border-white/10 p-0.5">
                   <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "96.4%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-white rounded-full relative"
                   >
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                   </motion.div>
                 </div>
                 <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em]">
                   <span>482 Secured</span>
                   <span className="text-white/70 italic">Closing Soon</span>
                 </div>
               </div>
             </div>
             <Gift className="absolute -bottom-10 -right-10 text-white opacity-10 group-hover:rotate-12 transition-transform duration-700 pointer-events-none" size={200} />
          </motion.div>

        </div>

        {/* Hormozi Risk Reversal - The "Stupid if you don't" Close */}
        <div className="mt-28 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-bg/60 backdrop-blur-xl border-4 border-dashed border-brand-primary/20 rounded-[4rem] p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="bg-brand-dark text-white px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.4em] shadow-2xl flex items-center gap-3">
                <ShieldCheck size={16} className="text-brand-primary" />
                The Iron-Clad Sovereignty Guarantee
              </div>
            </div>
            
            <div className="space-y-10">
              <h5 className="text-5xl md:text-6xl font-display font-bold text-brand-dark tracking-tight leading-none pt-6">The Only <span className="text-brand-primary underline decoration-brand-primary/20 underline-offset-[12px]">Risk-Free</span> Way to 8K.</h5>
              
              <div className="grid md:grid-cols-2 gap-10 text-left py-4">
                <div className="bg-white/50 p-6 rounded-3xl border border-white/50">
                  <p className="text-base text-brand-gray leading-relaxed">
                    <span className="text-brand-dark font-black uppercase text-sm block mb-2 tracking-widest">01 — Full Refund</span>
                    Is your $25 safe? Yes. You can withdraw from the Founder Queue at any moment before mass-production with one click. <span className="font-bold text-brand-dark">Zero friction.</span>
                  </p>
                </div>
                <div className="bg-white/50 p-6 rounded-3xl border border-white/50">
                  <p className="text-base text-brand-gray leading-relaxed">
                    <span className="text-brand-dark font-black uppercase text-sm block mb-2 tracking-widest">02 — Price Anchor</span>
                    Mass production MSRP will be $849+. As a Founder, you are <span className="font-bold text-green-600 underline decoration-green-100 decoration-4">legally locked in</span> at the $699 Batch 01 rate.
                  </p>
                </div>
              </div>
              
              <div className="pt-10 flex flex-col items-center gap-6">
                <a href="#reserve" className="relative inline-flex items-center gap-5 bg-brand-primary text-white px-16 py-8 rounded-full font-black text-2xl hover:scale-105 hover:shadow-[0_25px_80px_rgba(37,99,235,0.5)] active:scale-95 transition-all group shadow-2xl overflow-hidden">
                  <span className="relative z-10 flex items-center gap-4">Claim My Founder Bundle <ChevronRight size={28} /></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
                <div className="flex items-center gap-3 opacity-60">
                  <Check size={14} className="text-brand-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] font-display">100% Safe Stripe® Encryption</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CompatibilityChecker = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState<'none' | 'checking' | 'compatible'>('none');

  const makes = ["Toyota", "Honda", "Ford", "Chevrolet", "Tesla", "BMW", "Audi", "Mercedes-Benz", "Hyundai", "Kia", "Subaru", "Volkswagen", "Lexus", "Mazda", "Volvo", "Dodge", "Ram", "Jeep", "Nissan"];
  
  const handleCheck = (e: FormEvent) => {
    e.preventDefault();
    setResult('checking');
    setTimeout(() => {
      setResult('compatible');
    }, 1500);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="compatibility">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/40 backdrop-blur-xl rounded-[40px] p-8 md:p-16 border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative overflow-hidden group"
        >
          {/* Internal Gradient Glow */}
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] group-hover:bg-brand-primary/30 transition-colors" />
          
          <div className="relative z-10">
            <div className="text-center mb-12 space-y-4">
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-cyan rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand-primary/20"
              >
                <Car className="text-white" size={36} />
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-dark via-brand-primary to-brand-dark">
                Vehicle Compatibility
              </h2>
              <p className="text-brand-gray max-w-lg mx-auto text-lg leading-relaxed">
                The Sentinel X is a universal AI safety companion. Verify integration with your specific primary vehicle in seconds.
              </p>
            </div>

            <form onSubmit={handleCheck} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-primary ml-1">Make</label>
                <div className="relative">
                  <select 
                    value={make} 
                    onChange={(e) => setMake(e.target.value)}
                    className="w-full h-14 bg-white/80 border border-brand-border rounded-2xl px-5 text-sm font-medium focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none appearance-none cursor-pointer transition-all hover:bg-white"
                    required
                  >
                    <option value="">Select Make</option>
                    {makes.sort().map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gray">
                    <ChevronRight size={16} className="rotate-90" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-primary ml-1">Model</label>
                <input 
                  type="text" 
                  placeholder="e.g. RAV4"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full h-14 bg-white/80 border border-brand-border rounded-2xl px-5 text-sm font-medium focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all hover:bg-white placeholder:text-gray-300"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-primary ml-1">Year</label>
                <input 
                  type="number" 
                  placeholder="YYYY"
                  min="1990"
                  max="2026"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full h-14 bg-white/80 border border-brand-border rounded-2xl px-5 text-sm font-medium focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all hover:bg-white placeholder:text-gray-300"
                  required
                />
              </div>
              <div className="flex items-end">
                <button 
                  type="submit"
                  disabled={result === 'checking'}
                  className="w-full h-14 bg-brand-primary text-white rounded-2xl font-bold text-sm hover:translate-y-[-2px] hover:shadow-xl hover:shadow-brand-primary/20 active:translate-y-0 transition-all flex items-center justify-center gap-3 group disabled:opacity-70"
                >
                  {result === 'checking' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Verify Compatibility <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <AnimatePresence mode="wait">
              {result === 'compatible' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-[28px] p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 shrink-0 shadow-sm border border-green-100">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="text-center md:text-left space-y-2">
                    <h4 className="text-xl font-bold text-brand-dark">Perfect Fit Found: {year} {make} {model}</h4>
                    <p className="text-brand-gray leading-relaxed">
                      Sentinel X integrates with your vehicle's architecture. Our universal adhesive mount is optimized for your windshield's incline.
                    </p>
                  </div>
                  <div className="md:ml-auto">
                    <a href="#reserve" className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full text-sm font-bold hover:scale-105 hover:shadow-xl hover:shadow-brand-primary/25 transition-all whitespace-nowrap shadow-lg">
                      Secure My Unit Now <ChevronRight size={16} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="mt-12 flex flex-wrap justify-center gap-10 opacity-50">
              {["Universal OBD-II", "USB-C Standard", "No-Trace Mounting"].map((feat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  <span className="text-[11px] font-bold tracking-widest uppercase text-brand-dark">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ComparisonSection = () => {
  const rows = [
    { 
      label: "Visual Intelligence", 
      generic: "Buffered 1080p", 
      astrateq: "Surgical 8K NPU", 
      detail: "Industry-first 8K road-facing architecture designed to read Ontario plates at 120km/h.",
      icon: Zap
    },
    { 
      label: "Data Ownership", 
      generic: "Cloud Subscriptions", 
      astrateq: "Local Pure-Storage", 
      detail: "Zero monthly fees. Your private family journeys are stored on device, never on a third-party server.",
      icon: Lock
    },
    { 
      label: "Winter Endurance", 
      generic: "Standard Li-ion", 
      astrateq: "Supercapacitor Build", 
      detail: "Specifically built for Alberta's -30°C mornings. No battery swelling or frozen sensor lag.",
      icon: Snowflake
    },
    { 
      label: "Hardware Integrity", 
      generic: "Generic Plastic", 
      astrateq: "Arctic-Grade Alloy", 
      detail: "Heat-dissipating magnesium shroud ensures the 8K sensor never throttles during humid GTA summers.",
      icon: ShieldCheck
    },
    { 
      label: "Safety Coaching", 
      generic: "Standard Beeps", 
      astrateq: "AI Audio-Guided", 
      detail: "Gentle, non-intrusive voice cues calibrated for icy road patterns and long-haul fatigue.",
      icon: MessageCircle
    },
    { 
      label: "Integration", 
      generic: "Professional Wiring", 
      astrateq: "5-Min Stealth DIY", 
      detail: "Universal no-trace mounting. Route the extra-long (4m) cable through your trim in minutes.",
      icon: Plus
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-white" id="comparison">
      {/* Visual Background Flourish */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-50 text-brand-primary text-[10px] font-black uppercase tracking-[0.4em]"
          >
            The Sovereignty Report
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter text-brand-dark leading-[0.9]">
            The New Standard in <br />
            <span className="text-brand-primary italic">Automotive Integrity.</span>
          </h2>
          
          <p className="text-brand-gray text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Standard dash cams are mass-market compromises. We built the <span className="text-brand-dark font-medium underline decoration-brand-primary decoration-4 underline-offset-8">Sentinel X</span> for the Canadian Reality.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[4rem] border border-gray-100 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.08)] overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-gray-50/30">
                  <th className="p-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 w-[35%]">Feature Logic</th>
                  <th className="p-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 w-[30%] text-center border-x border-gray-50/50">Market Status Quo</th>
                  <th className="p-12 text-[10px] font-black uppercase tracking-[0.4em] text-white w-[35%] text-center bg-brand-dark relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary" />
                    Sentinel X Standard
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {rows.map((row, i) => (
                  <motion.tr 
                    key={i} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="group"
                  >
                    <td className="p-12 transition-colors group-hover:bg-gray-50/30">
                      <div className="flex gap-8 items-start">
                        <div className="w-14 h-14 rounded-2xl bg-[#F8F9FF] flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-700 shrink-0 shadow-sm">
                          <row.icon size={26} />
                        </div>
                        <div className="space-y-2">
                          <p className="font-bold text-2xl text-brand-dark tracking-tight font-display">{row.label}</p>
                          <p className="text-sm text-brand-gray/80 tracking-wide font-medium leading-relaxed max-w-[320px]">{row.detail}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-12 text-center border-x border-gray-50 group-hover:bg-gray-50/30 transition-colors">
                      <div className="inline-flex flex-col items-center gap-3 grayscale opacity-40 group-hover:opacity-60 transition-all">
                        <span className="text-sm font-black text-gray-500 uppercase tracking-widest leading-none">{row.generic}</span>
                        <div className="flex gap-1.5 grayscale">
                           {[1,2,3].map(d => <div key={d} className="w-1.5 h-1.5 rounded-full bg-gray-200" />)}
                        </div>
                      </div>
                    </td>
                    <td className="p-12 text-center bg-brand-dark/95 relative group-hover:bg-brand-dark transition-colors">
                      <div className="flex flex-col items-center gap-6 relative z-10">
                        <div className="w-16 h-16 rounded-[1.5rem] bg-brand-primary/10 flex items-center justify-center text-brand-primary border border-brand-primary/20 backdrop-blur-md group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all duration-700">
                          <CheckCircle2 size={32} />
                        </div>
                        <div className="space-y-1">
                          <span className="font-black text-white text-xl tracking-tight uppercase block">{row.astrateq}</span>
                          <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
                        </div>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Hormozi High-Conversion Close */}
          <div className="p-16 bg-white border-t-2 border-dashed border-gray-100 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px]" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              <div className="flex items-start gap-10">
                <div className="w-24 h-24 bg-brand-primary rounded-[2.5rem] flex items-center justify-center text-white shadow-[0_25px_50px_-12px_rgba(37,99,235,0.3)] hover:rotate-6 transition-transform group">
                  <ShieldCheck size={48} />
                </div>
                <div className="space-y-3">
                  <div className="inline-block px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">Exclusive Lockdown Price</div>
                  <h4 className="text-4xl font-display font-medium text-brand-dark leading-none tracking-tight">Lock in <span className="text-brand-primary">$50 Savings</span> Now.</h4>
                  <p className="text-brand-gray font-medium max-w-md text-lg">Secure Batch 01 pricing for only $25. Your deposit is 100% refundable. You literally have nothing to lose.</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <a href="#reserve" className="px-16 py-8 bg-brand-dark text-white rounded-full font-black text-2xl hover:bg-brand-primary hover:shadow-[0_25px_60px_rgba(37,99,235,0.4)] active:scale-95 transition-all flex items-center gap-4 group shadow-2xl">
                  Secure My $50 Credit <ChevronRight className="group-hover:translate-x-2 transition-transform" size={28} />
                </a>
                <p className="text-brand-gray text-[10px] font-bold uppercase tracking-[0.2em]">Priority Shipping Guaranteed for Batch 01</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TheDifferenceOfCare = () => {
  const comparisons = [
    {
      title: "Vision Under Stress",
      icon: Zap,
      generic: {
        label: "Market 4K/1080p",
        desc: "Motion blur and sensor lag lose critical data at high speeds.",
        badge: "Reactive Tech",
        icon: History
      },
      sentinel: {
        label: "Surgical 8K Intelligence",
        desc: "AI NPU captures every plate, person, and detail in active motion.",
        badge: "Proactive Guard",
        icon: ShieldCheck
      }
    },
    {
      title: "Canadian Resilience",
      icon: Snowflake,
      generic: {
        label: "Standard Plastic Build",
        desc: "Components can become brittle or fail in deep Canadian winters.",
        badge: "Fragile Build",
        icon: AlertTriangle
      },
      sentinel: {
        label: "Arctic-Spec Alloy",
        desc: "Tested to hold high-precision focus even at Calgary-cold -30°C.",
        badge: "Canadian Resilient",
        icon: CheckCircle2
      }
    },
    {
      title: "Data Sovereignty",
      icon: Lock,
      generic: {
        label: "Cloud-First Storage",
        desc: "Requires monthly fees. Your private clips stored on external servers.",
        badge: "Monthly Fees",
        icon: History
      },
      sentinel: {
        label: "100% Local Guard",
        desc: "Zero fees. Military-grade encryption stays safely on your device.",
        badge: "Private & Free",
        icon: ShieldCheck
      }
    }
  ];

  return (
    <section className="py-32 bg-[#FAFBFF] relative overflow-hidden" id="duel">
      {/* Decorative Technical Grid */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-28 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-50 text-brand-primary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-sm"
          >
            The Integrity Gap
          </motion.div>
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-brand-dark leading-none">
              The <span className="text-brand-primary relative">Difference<span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-primary/10 rounded-full" /></span> of Care.
            </h2>
            <p className="text-brand-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Most dashcams record what happened. <span className="font-medium text-brand-dark underline decoration-brand-primary/30 underline-offset-4">Sentinel X</span> was engineered to protect the people who once protected you.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {comparisons.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="grid lg:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-0"
            >
              <div className="bg-white/40 backdrop-blur-xl border border-gray-100 p-12 rounded-[3rem] lg:rounded-r-none relative group grayscale opacity-50 hover:opacity-90 hover:grayscale-0 transition-all duration-700 shadow-sm border-r-0">
                 <div className="absolute top-0 left-0 px-8 py-3 bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-br-[2rem]">Standard Tech</div>
                 <div className="space-y-8">
                   <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300">
                     <item.generic.icon size={24} />
                   </div>
                   <div className="space-y-4">
                     <h4 className="text-2xl font-bold text-gray-400 font-display transition-colors group-hover:text-gray-600">{item.generic.label}</h4>
                     <p className="text-brand-gray text-sm leading-relaxed max-w-[280px]">{item.generic.desc}</p>
                     <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-widest italic border border-gray-100/50">{item.generic.badge}</div>
                   </div>
                 </div>
              </div>

              <div className="flex flex-col items-center justify-center z-20 relative px-6 lg:px-0">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-brand-primary/10 rounded-full blur-xl group-hover:bg-brand-primary/20 transition-all duration-700 animate-pulse" />
                  <div className="w-20 h-20 bg-white border-4 border-brand-primary/5 rounded-3xl flex items-center justify-center shadow-2xl relative z-10 rotate-3 group-hover:rotate-0 transition-all duration-500">
                    <item.icon size={32} className="text-brand-primary" />
                  </div>
                </div>
                <div className="h-40 w-px bg-gradient-to-b from-transparent via-brand-primary/20 to-transparent hidden lg:block mt-6" />
              </div>

              <div className="bg-white border-[3px] border-brand-primary/10 p-12 rounded-[3.5rem] lg:rounded-l-none relative shadow-[0_45px_100px_-20px_rgba(37,99,235,0.18)] z-10 group overflow-hidden hover:border-brand-primary/40 transition-all duration-700">
                 <div className="absolute top-0 right-0 px-8 py-3 bg-brand-primary text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-bl-[2rem] shadow-xl shadow-brand-primary/20 transition-transform group-hover:translate-x-1">SENTINEL X</div>
                 
                 <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-primary/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-brand-primary/10 transition-colors" />

                 <div className="space-y-8 relative">
                   <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-brand-primary shadow-sm group-hover:scale-110 transition-transform duration-500">
                     <item.sentinel.icon size={28} />
                   </div>
                   <div className="space-y-5">
                     <h4 className="text-3xl font-bold text-brand-dark font-display leading-tight">{item.sentinel.label}</h4>
                     <p className="text-brand-gray-dark text-base leading-relaxed font-medium opacity-80">{item.sentinel.desc}</p>
                     <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-primary/30 transform group-hover:translate-y-[-2px] transition-transform">
                       <CheckCircle2 size={16} />
                       {item.sentinel.badge}
                     </div>
                   </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
           <a href="#reserve" className="relative inline-flex items-center gap-4 bg-brand-primary text-white px-16 py-7 rounded-full font-black text-xl hover:shadow-[0_25px_60px_-10px_rgba(37,99,235,0.5)] active:scale-95 transition-all group overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
             Choose Peace of Mind <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
           </a>
           <p className="mt-8 text-brand-gray text-sm font-medium tracking-wide">Join 4,200+ Canadian families prioritizing safety.</p>
        </motion.div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-brand-border">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 flex justify-between items-center group"
      >
        <span className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{question}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <Plus size={20} className="text-brand-gray" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-gray leading-relaxed max-w-2xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target date to 48 hours from now for demo purposes, 
    // or a fixed date like Q3 2025.
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 47);
    targetDate.setMinutes(targetDate.getMinutes() + 52);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimerUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-brand-dark text-white w-12 h-14 md:w-16 md:h-20 rounded-xl flex items-center justify-center text-xl md:text-3xl font-bold shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        <motion.span 
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative z-10"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-gray mt-2">{label}</span>
    </div>
  );

  return (
    <div className="flex gap-2 md:gap-4 justify-center md:justify-start pt-2">
      <TimerUnit value={timeLeft.days} label="Days" />
      <TimerUnit value={timeLeft.hours} label="Hrs" />
      <TimerUnit value={timeLeft.minutes} label="Min" />
      <TimerUnit value={timeLeft.seconds} label="Sec" />
    </div>
  );
};

const PreLaunchTransparency = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user returned from Stripe after a successful payment
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setIsSubmitted(true);
      // Clean up the URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target.elements[0]?.value;
    setIsLoading(true);
    
    // Professional delay to show "Validation" before redirecting to Stripe
    setTimeout(() => {
      const stripeUrl = `https://buy.stripe.com/test_7sYfZigABbdo2aTe1V3ks00?prefilled_email=${encodeURIComponent(email || '')}`;
      window.location.href = stripeUrl;
    }, 1200);
  };

  return (
    <section className="py-24 bg-[#fbfbfd]" id="reserve">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight leading-tight">The Path to <span className="text-brand-primary">Priority Ownership</span></h2>
              <p className="text-brand-gray text-lg leading-relaxed mb-8">By placing a fully refundable $25 deposit, you join an exclusive group of early adopters helping Astrateq finalize the first production batch for the Canadian market. It’s a risk-free way to validate your interest and secure the absolute best launch price.</p>
              
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Early Bird Offer Expiring In:</p>
                <CountdownTimer />
              </div>
            </div>
            
            <div className="space-y-8">
              {[
                { title: "Priority Queue Position", desc: "Secure your spot in Batch 01. We fulfill in the order deposits are received." },
                { title: "Exclusive Bundle Pricing", desc: "Unlock the Pre-Launch price of $199 CAD—a full $50 savings off the estimated $249 MSRP." },
                { title: "Zero-Risk Flexibility", desc: "Your $25 is managed via Stripe. It is 100% refundable at any time, for any reason, before your unit ships." },
                { title: "Engineering Transparency", desc: "Get bi-monthly behind-the-scenes updates on our optimization for Canadian winter road conditions." }
              ].map((step, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-10 h-10 bg-brand-primary/5 rounded-full flex items-center justify-center text-brand-primary shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-brand-gray text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-apple-card border border-brand-border flex items-center gap-6">
               <div className="flex -space-x-3">
                 {[1, 2, 3, 4].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar" referrerPolicy="no-referrer" />
                 ))}
               </div>
               <div>
                 <p className="text-sm font-bold text-brand-dark">Joining 840+ Canadians</p>
                 <p className="text-xs text-brand-gray">Priority Batch 1 is fulfilling rapidly.</p>
               </div>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-apple-card shadow-premium border border-brand-border space-y-8 relative overflow-hidden min-h-[580px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-100 p-3 rounded-lg flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[13px] text-[#991b1b] font-bold">82% of Batch 01 spots claimed</span>
                      </div>
                      <div className="w-24 h-1.5 bg-red-100 rounded-full overflow-hidden">
                        <div className="w-[82%] h-full bg-[#ef4444]" />
                      </div>
                    </div>
                    
                    <div className="bg-brand-primary/5 border border-brand-primary/10 p-3 rounded-lg flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-primary">Early Bird Bonus</span>
                      <span className="text-[11px] text-brand-dark font-medium italic">Lifetime Premium App Access Included</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-[40px] font-bold leading-none">$25.00</span>
                      <span className="text-base font-medium text-brand-gray uppercase">CAD</span>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-[#008000] font-semibold">
                      <CheckCircle2 size={14} />
                      <span>Priority Rank #842</span>
                      <span className="text-brand-gray font-normal opacity-40">|</span>
                      <span>Secure Refundable Deposit</span>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 relative">
                    <div className="form-group">
                      <label className="block text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="name@email.com"
                        className="w-full h-12 border border-brand-border rounded-lg px-4 flex items-center text-brand-dark bg-white focus:ring-1 focus:ring-brand-primary outline-none"
                      />
                    </div>
                    <div className="form-group">
                      <label className="block text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">Reservation Type</label>
                      <div className="w-full h-12 border border-brand-border rounded-lg px-4 flex items-center text-brand-gray bg-gray-50/50">
                        Sentinel X (Early Bird Bundle)
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-brand-primary text-white py-5 rounded-apple-btn font-bold text-lg hover:opacity-90 active:scale-[0.99] transition-all shadow-premium disabled:opacity-70 flex items-center justify-center gap-3"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Secure My Priority Rank"
                      )}
                    </button>
                    
                    <p className="text-center text-[10px] text-brand-gray mt-4 font-medium uppercase tracking-widest">
                      Next production batch prices will increase by $50
                    </p>
                  </form>
                  
                  <div className="pt-6 border-t border-brand-border space-y-4">
                    <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3">
                      <div className="flex -space-x-1.5 font-bold">
                        <div className="w-6 h-6 rounded-full bg-brand-primary/10 border border-white flex items-center justify-center text-[8px] text-brand-primary">JM</div>
                        <div className="w-6 h-6 rounded-full bg-brand-primary/10 border border-white flex items-center justify-center text-[8px] text-brand-primary">SA</div>
                        <div className="w-6 h-6 rounded-full bg-brand-primary/10 border border-white flex items-center justify-center text-[8px] text-brand-primary">KL</div>
                      </div>
                      <p className="text-[11px] text-brand-dark font-semibold">3 reservations placed in the last hour from <span className="text-brand-primary">Vancouver, BC</span></p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Transaction Security</span>
                      <div className="flex items-center gap-4 grayscale opacity-60">
                         <div className="font-bold text-[10px] border border-brand-dark px-1.5 py-0.5 rounded italic">STRIPE</div>
                         <div className="text-[10px] font-bold flex items-center gap-1"><ShieldCheck size={12} /> PCI-DSS</div>
                         <div className="text-[10px] font-bold flex items-center gap-1"><Lock size={12} /> SSL</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-8"
                >
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold tracking-tight">Priority Position Secured</h3>
                    <p className="text-brand-gray leading-relaxed max-w-sm mx-auto">
                      Welcome to the Astrateq Inner Circle. We've sent a detailed confirmation and priority queue receipt to your email.
                    </p>
                  </div>
                  <div className="bg-brand-bg rounded-2xl p-6 text-left border border-brand-border">
                    <div className="flex items-center gap-4 mb-4">
                      <Clock size={20} className="text-brand-primary" />
                      <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">What's Next?</span>
                    </div>
                    <ul className="space-y-3 text-sm text-brand-gray">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                        Priority production queue position locked.
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                        Behind-the-scenes engineering updates monthly.
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                        Shipping address request once production commences.
                      </li>
                    </ul>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-bold text-brand-primary hover:underline"
                  >
                    Register another vehicle
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const LegalModal = ({ isOpen, onClose, content }: { isOpen: boolean, onClose: () => void, content: { title: string, body: ReactNode } }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12 animate-in fade-in zoom-in duration-300"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-bg transition-colors"
            >
              <X size={20} className="text-brand-gray" />
            </button>
            
            <div className="space-y-8">
              <div className="pb-6 border-b border-brand-border">
                <h2 className="text-3xl font-bold tracking-tight text-brand-dark">{content.title}</h2>
              </div>
              
              <div className="prose prose-slate max-w-none text-brand-gray leading-relaxed space-y-6">
                {content.body}
              </div>
              
              <div className="pt-8 flex justify-end">
                <button 
                  onClick={onClose}
                  className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  const [modalContent, setModalContent] = useState<{ title: string, body: ReactNode } | null>(null);

  const legalContent = {
    privacy: {
      title: "Privacy & Data Architecture",
      body: (
        <>
          <p className="font-bold text-brand-dark">Built for Personal Privacy, Designed for Canadian Sovereignty.</p>
          <p>At Astrateq, we believe your driving data is yours and yours alone. Our AI automotive safety systems are engineered with a "Privacy First" architecture that aligns with ISED Canada standards and PIPEDA requirements.</p>
          
          <h4 className="text-brand-dark font-bold mt-6 text-lg">1. On-Device AI Processing (Edge Computing)</h4>
          <p>Unlike traditional dash cams, the SafeGuard Sentinel processes 99.8% of visual data locally on the internal NPU (Neural Processing Unit). We do not stream your cabin or road footage to the cloud for training. Your journeys remain private and unlisted.</p>
          
          <h4 className="text-brand-dark font-bold mt-6 text-lg">2. AES-256 Military Grade Encryption</h4>
          <p>Any data that you choose to sync with the Astrateq companion app is encrypted using AES-256 bit protocols—the same standard used by Canadian financial institutions.</p>
          
          <h4 className="text-brand-dark font-bold mt-6 text-lg">3. Canadian Data Residency</h4>
          <p>All cloud-based user profiles and reservation data are stored on secure, encrypted servers physically located within Canadian borders, ensuring they are subject to Canadian privacy law protections.</p>
        </>
      )
    },
    terms: {
      title: "Terms of Reservation",
      body: (
        <>
          <p>This reservation deposit constitutes an agreement between the depositor's household and Astrateq Gadgets Inc.</p>
          
          <h4 className="text-brand-dark font-bold mt-6 text-lg">1. Priority Fulfillment</h4>
          <p>By placing a $25 deposit, you are assigned a Priority Rank in Batch 01. We fulfill pre-launch orders in strict chronological order based on the timestamp of the Stripe transaction.</p>
          
          <h4 className="text-brand-dark font-bold mt-6 text-lg">2. Pricing Guarantee</h4>
          <p>Your deposit locks in your Early Bird discount of $50 off the MSRP. This price is guaranteed for original reservation holders and is non-transferable.</p>
          
          <h4 className="text-brand-dark font-bold mt-6 text-lg">3. Product Evolution</h4>
          <p>As we finalize engineering for Canadian winter road conditions (Gravel spray resistance, -40°C battery optimization), final product specs may evolve slightly to ensure maximum safety and reliability on Northern roads.</p>
        </>
      )
    },
    refund: {
      title: "100% Refundable Policy",
      body: (
        <>
          <p className="font-bold text-brand-dark">Complete Flexibility. Zero Friction.</p>
          <p>We understand that vehicle safety is a major decision. That’s why your $25 deposit is 100% refundable at any time, for any reason, right until the moment your Sentinel X leaves our fulfillment center.</p>
          
          <h4 className="text-brand-dark font-bold mt-6 text-lg">Process:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Request a refund via our chat widget or email support@astrateq.com.</li>
            <li>Refunds are processed back to the original Stripe payment method.</li>
            <li>Processing time is typically 3-5 business days depending on your Canadian financial institution.</li>
          </ul>
        </>
      )
    },
    contact: {
      title: "Contact Astrateq Support",
      body: (
        <>
          <p>Our team is based in Toronto, Ontario. We pride ourselves on providing high-touch assistance during our pre-launch phase.</p>
          
          <div className="bg-brand-bg p-6 rounded-2xl border border-brand-border space-y-4">
            <div>
              <p className="font-bold text-brand-dark uppercase tracking-widest text-[10px]">General Inquiries</p>
              <p className="font-semibold">support@astrateq.com</p>
            </div>
            <div>
              <p className="font-bold text-brand-dark uppercase tracking-widest text-[10px]">Ontario Operations Hub</p>
              <p className="font-semibold">Bay St, Toronto, ON M5H 2Y4, Canada</p>
            </div>
            <div>
              <p className="font-bold text-brand-dark uppercase tracking-widest text-[10px]">Hours of Operation</p>
              <p className="font-semibold">Monday – Friday: 9:00 AM – 6:00 PM EST</p>
            </div>
          </div>
        </>
      )
    },
    shipping: {
      title: "Shipping & Logistics FAQ",
      body: (
        <>
          <h4 className="text-brand-dark font-bold text-xl mb-2">When will I receive my Sentinel?</h4>
          <p>Batch 01 production is scheduled to begin following final quality assurance for Canadian safety certifications (including cold-start testing in Northern Ontario). Shipping will commence in strict queue order once production is finalized.</p>
          
          <h4 className="text-brand-dark font-bold mt-6 text-xl mb-2">Where do you ship?</h4>
          <p>We ship Canada-wide, from Victoria, BC to St. John's, NL. We offer flat-rate expedited shipping for all Batch 01 reservation holders to ensure timely arrival once fulfillments begin.</p>
          
          <h4 className="text-brand-dark font-bold mt-6 text-xl mb-2">Winter-Ready Delivery</h4>
          <p>Our units are packaged with insulated, moisture-wicking materials to ensure the high-sensitivity AI sensors arrive in perfect calibration, regardless of the temperature during transit in the Canadian winter.</p>
        </>
      )
    }
  };

  return (
    <footer className="py-24 border-t border-white/5 bg-brand-dark relative overflow-hidden">
      {/* Decorative background pulse */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-2 rounded-xl">
                <img 
                  src="https://i.ibb.co/NdYZ7r7Z/Gemini-Generated-Image-pta8i9pta8i9pta8.png" 
                  alt="SafeGuard Sentinel" 
                  className="h-10 w-auto" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </div>
            <p className="text-[15px] text-white/60 leading-relaxed font-medium">
              Revolutionizing road safety through advanced, on-device AI. Designed and tested in Toronto to withstand the unique challenges of Canadian road conditions.
            </p>
            <div className="flex gap-4 pt-4">
              {[
                { icon: <Facebook size={18} />, label: "Facebook" },
                { icon: <Twitter size={18} />, label: "Twitter" },
                { icon: <Instagram size={18} />, label: "Instagram" },
                { icon: <Youtube size={18} />, label: "YouTube" }
              ].map((social, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-brand-primary hover:text-white hover:border-brand-primary hover:-translate-y-1 transition-all shadow-premium">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 md:gap-24">
            <div className="space-y-6">
              <h5 className="font-bold text-[12px] uppercase tracking-[0.2em] text-white flex items-center gap-2">
                <div className="w-1 h-4 bg-brand-primary rounded-full shadow-[0_0_10px_rgba(0,113,227,0.5)]" />
                Legal
              </h5>
              <ul className="space-y-3 text-sm font-medium">
                <li><button onClick={() => setModalContent(legalContent.privacy)} className="text-white/50 hover:text-brand-primary flex items-center gap-2 transition-colors group"><FileText size={14} className="group-hover:scale-110 transition-transform" /> Privacy Policy</button></li>
                <li><button onClick={() => setModalContent(legalContent.terms)} className="text-white/50 hover:text-brand-primary flex items-center gap-2 transition-colors group"><Info size={14} className="group-hover:scale-110 transition-transform" /> Terms of Service</button></li>
                <li><button onClick={() => setModalContent(legalContent.refund)} className="text-white/50 hover:text-brand-primary flex items-center gap-2 transition-colors group"><Heart size={14} className="group-hover:scale-110 transition-transform" /> Refund Policy</button></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h5 className="font-bold text-[12px] uppercase tracking-[0.2em] text-white flex items-center gap-2">
                <div className="w-1 h-4 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                Support
              </h5>
              <ul className="space-y-3 text-sm font-medium">
                <li><button onClick={() => setModalContent(legalContent.contact)} className="text-white/50 hover:text-brand-primary flex items-center gap-2 transition-colors group"><MessageCircle size={14} className="group-hover:scale-110 transition-transform" /> Contact Us</button></li>
                <li><button onClick={() => setModalContent(legalContent.shipping)} className="text-white/50 hover:text-brand-primary flex items-center gap-2 transition-colors group"><Truck size={14} className="group-hover:scale-110 transition-transform" /> Shipping FAQ</button></li>
              </ul>
            </div>

            <div className="space-y-6 col-span-2 sm:col-span-1">
              <h5 className="font-bold text-[12px] uppercase tracking-[0.2em] text-white flex items-center gap-2">
                <div className="w-1 h-4 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                Status
              </h5>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl relative group overflow-hidden">
                <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-3 text-sm text-green-400 font-bold mb-2">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping absolute inset-0" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 relative" />
                  </div>
                  <span>Pre-Launch Live</span>
                </div>
                <p className="text-[11px] text-white/50 font-medium leading-relaxed">
                  Now accepting priority reservations for the inaugural Batch 01 production run.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[13px] text-white/40 font-medium">
            © 2026 Astrateq Gadgets. Built with integrity in Toronto.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
            <span className="flex items-center gap-2 hover:text-white/60 transition-colors"><ShieldCheck size={14} className="text-brand-primary" /> Stripe Verified</span>
            <span className="flex items-center gap-2 hover:text-white/60 transition-colors"><Globe size={14} className="text-brand-primary" /> ISED Canada</span>
            <span className="flex items-center gap-2 hover:text-white/60 transition-colors"><Lock size={14} className="text-brand-primary" /> PIPEDA Compliant</span>
          </div>
        </div>
      </div>

      <LegalModal 
        isOpen={!!modalContent} 
        onClose={() => setModalContent(null)} 
        content={modalContent || { title: "", body: null }} 
      />
    </footer>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-44 md:bottom-24 right-6 z-[60] w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-brand-primary/90 hover:scale-110 active:scale-95 transition-all outline-none ring-4 ring-brand-primary/20"
          title="Back to Top"
        >
          <ArrowUp size={24} strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content }))
        }),
      });

      const data = await response.json();
      if (data.message) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
      } else {
        throw new Error('Invalid response');
      }
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting to support right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 md:bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] bg-white rounded-3xl shadow-2xl border border-brand-border overflow-hidden flex flex-col h-[500px]"
          >
            <div className="bg-brand-primary p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">Support Agent</h3>
                  <div className="flex items-center gap-2 text-xs opacity-80">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    Online
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-4 text-brand-primary">
                    <MessageCircle size={24} />
                  </div>
                  <p className="text-sm text-brand-gray font-medium">Hi! Have any questions about the Sentinel X bundle?</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.role === 'user' 
                      ? 'bg-brand-primary text-white rounded-tr-none' 
                      : 'bg-brand-bg text-brand-dark rounded-tl-none'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-brand-bg p-3 rounded-2xl rounded-tl-none flex gap-1">
                    <div className="w-1 h-1 bg-brand-gray rounded-full animate-bounce" />
                    <div className="w-1 h-1 bg-brand-gray rounded-full animate-bounce delay-100" />
                    <div className="w-1 h-1 bg-brand-gray rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-brand-border bg-brand-bg flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-white border border-brand-border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-brand-primary text-white rounded-xl flex items-center justify-center hover:opacity-90 active:scale-95 disabled:opacity-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all group"
      >
        <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-cyan/20">
      <Navbar />
      <Hero />
      <TrustBanner />
      <EmotionalNarrative />
      <GuardianOfferSection />
      <CompatibilityChecker />
      <ComparisonSection />
      <TheDifferenceOfCare />
      <Testimonials />
      <section className="py-24" id="box">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 tracking-tight text-center md:text-left">What's in the Box?</h2>
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1 space-y-6">
              {[
                { title: "Sentinel X 8K Unit", desc: "Surgical 8K Road-facing sensor with local AI NPU." },
                { title: "Arctic-Spec Mount", desc: "Bessemer-alloy suction + static adhesive for Canadian winters." },
                { title: "128GB High-Endurance Card", desc: "Pre-installed and optimized for 24/7 loop cycles." },
                { title: "Universal Power Cable", desc: "Extra-long (4m) designed for seamless, hidden routing." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-apple-card border border-brand-border shadow-premium hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center text-brand-primary shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              <p className="text-xs text-brand-gray">*Final branding and cable colors may vary based on manufacturing run.</p>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-4">
               <div className="rounded-apple-card overflow-hidden shadow-premium aspect-square bg-gray-100 transition-transform hover:-translate-y-2">
                  <img src="https://i.ibb.co/FqjR2nbr/gemini-3-1-flash-image-preview-nano-banana-2-b-Prompt-A-high-end-1.png" alt="Sentinel X AI Unit Close-up" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="rounded-apple-card overflow-hidden shadow-premium aspect-square bg-gray-100 mt-8 transition-transform hover:-translate-y-2">
                  <img src="https://i.ibb.co/Qj8CH51g/seedream-5-0-lite-a-Prompt-A-photoreali.jpg" alt="Sentinel X Packaging" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="rounded-apple-card overflow-hidden shadow-premium aspect-square bg-gray-100 -mt-8 transition-transform hover:-translate-y-2">
                  <img src="https://i.ibb.co/W4pj7w1y/gpt-image-1-5-high-fidelity-b-Prompt-A-high-end.png" alt="Sensor Lens Detail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="rounded-apple-card overflow-hidden shadow-premium aspect-square bg-gray-100 transition-transform hover:-translate-y-2">
                  <img src="https://i.ibb.co/Zzvc5wfT/gemini-3-1-flash-image-preview-nano-banana-2-a-Create-a-pristine-u.png" alt="Astra-Guard Bundle" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
            </div>
          </div>
        </div>
      </section>

      <PreLaunchTransparency />
      
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem 
              question="Is the $25 really refundable?"
              answer="Yes, 100%. If you change your mind for any reason before we ship, just email our support team and you'll see a refund via Stripe in 3-5 business days. No questions asked."
            />
            <FAQItem 
              question="What happens after I place my $25 deposit?"
              answer="You'll immediately be assigned a priority queue number for Batch 01. You'll receive bi-monthly 'Insider Logs' covering our final engineering optimizations and be the first to receive the official order link at the exclusive $199 launch price."
            />
            <FAQItem 
              question="Does the $25 count towards the final price?"
              answer="Yes. Your $25 deposit is applied directly to the $199 early-bird price. When Batch 01 is ready to ship, you'll only pay the remaining $174 (plus tax/shipping)."
            />
            <FAQItem 
              question="How is this different from a standard dash cam?"
              answer="Most dash cams are reactive—they provide evidence after a crash. Sentinel X is proactive. Using our Canadian-optimized AI models, it detects road hazards, icy patches, and distracted driving patterns to warn you before an incident occurs."
            />
            <FAQItem 
              question="Does it require a monthly subscription?"
              answer="No. We believe safety shouldn't be a subscription service. All AI processing happens locally on the Sentinel's NPU, so you get life-saving alerts with zero hidden monthly fees."
            />
            <FAQItem 
              question="Will it survive a Canadian winter (and summer)?"
              answer="Absolutely. We've tested the Sentinel X at -30°C in Alberta and +40°C in Ontario. Our industrial-grade battery-less design uses supercapacitors to ensure the unit never fails or swells due to extreme temperature fluctuations."
            />
            <FAQItem 
              question="Can I install it myself?"
              answer="Yes. We designed it for universal, 5-minute installation. It uses a no-trace static adhesive for the windshield and plugs into your car's USB port or 12V 'cigarette' outlet. No professional automotive electrician required."
            />
            <FAQItem 
              question="Does it record audio inside the car?"
              answer="Privacy is our core pillar. The Sentinel X does NOT record cabin audio or video by default. It is strictly a road-facing awareness tool designed for safety, not surveillance."
            />
          </div>
        </div>
      </section>
      
      <Footer />
      <ChatWidget />
      <ScrollToTop />
      
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a href="#reserve" className="flex items-center justify-center w-full bg-brand-primary text-white py-5 rounded-full font-bold shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:bg-brand-primary/95 active:scale-95 transition-all">
           Reserve My Family's Spot — $25
        </a>
      </div>
    </div>
  );
}
