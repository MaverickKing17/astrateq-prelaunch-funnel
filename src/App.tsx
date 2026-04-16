/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Lock, 
  Snowflake, 
  ChevronRight, 
  CheckCircle2, 
  Plus,
  Globe,
  Clock,
  Menu,
  X,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              <button className="px-3 py-1 bg-white rounded-full shadow-sm text-brand-dark">EN</button>
              <button className="px-3 py-1 text-gray-400">FR</button>
            </div>
            <nav className="flex items-center gap-8 font-display text-sm text-brand-gray">
              <a href="#valuation" className="hover:text-brand-primary transition-colors">Engineering</a>
              <a href="#comparison" className="hover:text-brand-primary transition-colors">Reliability</a>
              <a href="#box" className="hover:text-brand-primary transition-colors">Safety Standards</a>
              <a href="#contact" className="hover:text-brand-primary transition-colors">Support</a>
            </nav>
            <a href="#reserve" className="bg-brand-primary text-white text-sm font-semibold px-6 py-2.5 rounded-apple-btn hover:opacity-90 active:scale-95 transition-all shadow-premium">Reserve Now</a>
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
            <div className="px-4 py-6 space-y-4">
              <a href="#contact" className="block text-lg font-medium text-gray-900">Contact</a>
              <a href="#reserve" className="block w-full text-center bg-brand-cyan text-white py-4 rounded-xl font-bold">Reserve for $25</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-[#d30000] text-xs font-bold uppercase tracking-wider">
              <span>🍁</span>
              <span>Designed & Tested in Ontario</span>
            </div>
            
            <h1 className="text-5xl md:text-[56px] font-bold leading-[1.05] tracking-tight">
              The next standard in <span className="text-brand-primary">automotive integrity.</span>
            </h1>
            
            <p className="text-[22px] text-brand-gray max-w-xl leading-[1.4]">
              Reserve your Sentinel unit today. Canadian-engineered safety for the modern family. Ships Spring 2025.
            </p>
            
            <div className="space-y-4 pt-4">
              <a href="#reserve" className="inline-flex items-center justify-center bg-brand-primary text-white text-base font-semibold px-8 py-4 rounded-apple-btn hover:opacity-90 active:scale-[0.98] transition-all shadow-premium group">
                Secure My Priority Spot — $25 (Fully Refundable)
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pl-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-green-500" />
                  <span>ISED Canada Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock size={16} className="text-brand-cyan" />
                  <span>100% Refundable Deposit</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
              <img 
                src="https://picsum.photos/seed/dashcam-main/1200/800" 
                alt="Astrateq Astra-Guard AI Dashcam" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white text-sm font-medium tracking-wide">ASTRA-GUARD: AI ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -left-8 bottom-12 bg-white p-5 rounded-2xl shadow-premium border border-gray-100 hidden sm:block w-64"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center text-brand-cyan">
                  <Snowflake size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Winter Ready</p>
                  <p className="text-sm font-semibold text-brand-dark">Tested at -30°C in Alberta winters.</p>
                </div>
              </div>
            </motion.div>
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
    <div className="bg-brand-bg/50 border-y border-brand-border py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-2 font-display font-bold text-sm tracking-widest uppercase">
             <ShieldCheck className="text-brand-dark" size={20} /> ISED CANADA COMPLIANT
           </div>
           <div className="flex items-center gap-2 font-display font-bold text-sm tracking-widest uppercase">
             <Globe className="text-brand-dark" size={20} /> DESIGNED IN TORONTO
           </div>
           <div className="flex items-center gap-2 font-display font-bold text-sm tracking-widest uppercase">
             <Lock className="text-brand-dark" size={20} /> AES-256 ENCRYPTION
           </div>
           <div className="flex items-center gap-2 font-display font-bold text-sm tracking-widest uppercase">
             <ShieldCheck className="text-brand-dark" size={20} /> CSA COMPLIANT STDS
           </div>
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
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-apple-card bg-brand-bg border border-brand-border hover:shadow-premium transition-shadow"
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
  <div className="group bg-white p-10 rounded-apple-card shadow-premium hover:shadow-2xl transition-all border border-brand-border flex flex-col h-full">
    <div className="w-14 h-14 bg-brand-bg rounded-xl flex items-center justify-center text-brand-dark mb-8 group-hover:scale-110 transition-transform">
      <Icon size={28} />
    </div>
    {badge && (
      <span className="self-start px-3 py-1 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
        {badge}
      </span>
    )}
    <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
    <p className="text-brand-gray leading-relaxed flex-grow">{description}</p>
  </div>
);

const ValuationZone = () => {
  return (
    <section className="py-24" id="valuation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Valuation Zone</h2>
          <p className="text-gray-500 text-lg">Simplicity by design. Built for Canadian families.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={Zap}
            title="Proactive Alerts"
            description="AI detection for icy roads, sudden braking, and potential hazards with gentle audio cues."
          />
          <FeatureCard 
            icon={Clock}
            title="5-Minute Setup"
            description="No professional installation required. Simple plug-and-play for any vehicle, any age."
          />
          <FeatureCard 
            icon={Lock}
            title="Privacy-First"
            description="All data processed locally. No cloud tracking. Your family's journeys stay your own."
            badge="Privacy Secured"
          />
          <FeatureCard 
            icon={Snowflake}
            title="Winter-Tested"
            description="Optimized for Alberta/Ontario conditions. Glare reduction for low-sun winter driving."
          />
        </div>
      </div>
    </section>
  );
};

const ComparisonSection = () => {
  const rows = [
    { label: "Subscription Fees", generic: "Monthly ($15-$30)", astrateq: "Zero" },
    { label: "Cloud Storage", generic: "Required", astrateq: "Local Only" },
    { label: "Setup Difficulty", generic: "Professional Needed", astrateq: "Plug-and-Play" },
    { label: "Design Focus", generic: "Generic/Mass Market", astrateq: "Built for Canada" },
    { label: "Aging Driver UX", generic: "Complex App-First", astrateq: "Audio/Awareness-First" },
  ];

  return (
    <section className="py-24 bg-brand-bg rounded-apple-card mx-4 sm:mx-8 mb-24 overflow-hidden relative border border-brand-border" id="comparison">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Not Just Another Dash Cam</h2>
          <p className="text-brand-gray">A purpose-built safety tool, not a tech toy.</p>
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl border border-brand-border shadow-premium">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-brand-border bg-brand-bg">
                <th className="p-8 text-sm font-bold uppercase tracking-widest text-brand-gray">Feature</th>
                <th className="p-8 text-sm font-bold uppercase tracking-widest text-brand-gray">Generic Dash Cam</th>
                <th className="p-8 text-sm font-bold uppercase tracking-widest text-brand-primary">Astrateq</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-brand-border last:border-0 hover:bg-brand-bg transition-colors">
                  <td className="p-8 font-medium text-brand-dark">{row.label}</td>
                  <td className="p-8 text-brand-gray">{row.generic}</td>
                  <td className="p-8 text-brand-primary font-bold flex items-center gap-2">
                    <CheckCircle2 size={18} />
                    {row.astrateq}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

const PreLaunchTransparency = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API/Stripe call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <section className="py-24 bg-[#fbfbfd]" id="reserve">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Reservation Details</h2>
              <p className="text-brand-gray text-lg">We're in the demand validation phase. Your support helps us finalize the production run for the Canadian market.</p>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "Pay $25 Today", desc: "This secure deposit locks in your Family Safety Bundle." },
                { title: "100% Refundable", desc: "Refund available any time before your unit ships. No questions." },
                { title: "Save $50 at Launch", desc: "Reservation holders get the exclusive pre-launch price (Est. $249 MSRP)." },
                { title: "Priority Delivery", desc: "Shipments start in ~90 days based on batch order." }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-premium border border-brand-border flex items-center justify-center font-display font-bold text-brand-primary shrink-0">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-brand-gray">{step.desc}</p>
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
                  <div className="bg-red-50 border border-red-100 p-3 rounded-lg flex justify-between items-center mb-6">
                    <span className="text-[13px] text-[#991b1b] font-bold">82% of Early Bird spots claimed</span>
                    <div className="w-24 h-1.5 bg-red-100 rounded-full overflow-hidden">
                      <div className="w-[82%] h-full bg-[#ef4444]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-[40px] font-bold leading-none">$25.00</span>
                      <span className="text-base font-medium text-brand-gray uppercase">CAD</span>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-[#008000] font-semibold">
                      <CheckCircle2 size={14} />
                      <span>Fully refundable deposit</span>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
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
                        "Secure My Priority Spot"
                      )}
                    </button>
                  </form>
                  
                  <div className="pt-6 border-t border-brand-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Transaction Security</span>
                      <div className="flex items-center gap-4 grayscale opacity-60">
                         <div className="font-bold text-[10px] border border-brand-dark px-1.5 py-0.5 rounded italic">STRIPE</div>
                         <div className="text-[10px] font-bold flex items-center gap-1"><ShieldCheck size={12} /> PCI-DSS</div>
                         <div className="text-[10px] font-bold flex items-center gap-1"><Lock size={12} /> SSL</div>
                      </div>
                    </div>
                    <p className="text-[11px] text-brand-gray leading-normal">
                      Reservations are processed via Stripe for 100% security. You retain full control: refunds are available 24/7 via our support portal until your order ships.
                    </p>
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
                    <h3 className="text-3xl font-bold tracking-tight">Reservation Secured</h3>
                    <p className="text-brand-gray leading-relaxed max-w-sm mx-auto">
                      Welcome to the batch order, Alex! We've sent a detailed confirmation and receipt to your email.
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
                        Shipping address request in Spring 2025.
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

const Footer = () => {
  return (
    <footer className="py-20 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="space-y-4 max-w-xs">
            <div className="flex items-center gap-2">
              <img 
                src="https://i.ibb.co/NdYZ7r7Z/Gemini-Generated-Image-pta8i9pta8i9pta8.png" 
                alt="SafeGuard Sentinel" 
                className="h-10 w-auto" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <p className="text-sm text-brand-gray leading-relaxed">
              Designed in Toronto. Built for the world's most beautiful, and most challenging, driving conditions.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h5 className="font-bold text-sm uppercase tracking-widest text-brand-gray">Legal</h5>
              <ul className="space-y-2 text-sm text-brand-gray">
                <li><a href="#privacy" className="hover:text-brand-primary">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-brand-primary">Terms of Service</a></li>
                <li><a href="#refund" className="hover:text-brand-primary">Refund Policy</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-sm uppercase tracking-widest text-brand-gray">Support</h5>
              <ul className="space-y-2 text-sm text-brand-gray">
                <li><a href="#contact" className="hover:text-brand-primary">Contact Us</a></li>
                <li><a href="#shipping" className="hover:text-brand-primary">Shipping FAQ</a></li>
              </ul>
            </div>
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h5 className="font-bold text-sm uppercase tracking-widest text-brand-gray">Status</h5>
              <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span>Pre-Launch Live</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-gray font-medium">
          <p>© 2026 Astrateq Gadgets. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1"><ShieldCheck size={12} /> Secure Stripe Payments</span>
            <span className="flex items-center gap-1"><Globe size={12} /> Canadian Founded</span>
          </div>
        </div>
      </div>
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
      <ValuationZone />
      <ComparisonSection />
      <Testimonials />
      <section className="py-24" id="box">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 tracking-tight text-center md:text-left">What's in the Box?</h2>
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1 space-y-6">
              {[
                { title: "Astra-Guard AI Unit", desc: "4K Road-facing sensor with local AI processor." },
                { title: "Easy-Mount System", desc: "Strong suction + static adhesive for Canadian winters." },
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
                  <img src="https://picsum.photos/seed/dash-front/600/600" alt="Dashcam Front" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="rounded-apple-card overflow-hidden shadow-premium aspect-square bg-gray-100 mt-8 transition-transform hover:-translate-y-2">
                  <img src="https://picsum.photos/seed/dash-side/600/600" alt="Dashcam Side" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="rounded-apple-card overflow-hidden shadow-premium aspect-square bg-gray-100 -mt-8 transition-transform hover:-translate-y-2">
                  <img src="https://picsum.photos/seed/dash-app/600/600" alt="App interface" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="rounded-apple-card overflow-hidden shadow-premium aspect-square bg-gray-100 transition-transform hover:-translate-y-2">
                  <img src="https://picsum.photos/seed/car-bundle/600/600" alt="Bundle" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
              answer="Yes, 100%. If you change your mind for any reason before we ship, just email our support team and you'll see a refund in 3-5 business days. No hoops to jump through."
            />
            <FAQItem 
              question="When will I receive my Astrateq unit?"
              answer="Currently, we are estimating a 90-day lead time as we finalize our first production run. You will receive monthly status updates via email about the batch progress."
            />
            <FAQItem 
              question="Do I need a monthly subscription?"
              answer="No. Unlike generic dash cams that charge monthly for 'premium cloud features', Astrateq processes everything locally. You own your data and your device with no hidden fees."
            />
            <FAQItem 
              question="Does it record audio inside the car?"
              answer="Privacy is our core pillar. The Astra-Guard does NOT record cabin audio or video by default. It is strictly a road-facing awareness tool designed for safety, not surveillance."
            />
            <FAQItem 
              question="Will it survive a Canadian winter?"
              answer="We've tested our mount and processor at Alberta temperatures (-30°C). Our static adhesive is specifically designed to stay bonded during extreme temperature fluctuations."
            />
          </div>
        </div>
      </section>
      
      <Footer />
      <ChatWidget />
      <ScrollToTop />
      
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a href="#reserve" className="flex items-center justify-center w-full bg-brand-primary text-white py-4 rounded-apple-btn font-bold shadow-2xl hover:bg-brand-primary/90 transition-colors">
           Reserve Your Spot — $25
        </a>
      </div>
    </div>
  );
}
