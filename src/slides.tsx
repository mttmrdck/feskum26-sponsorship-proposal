import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Target, Crown, Activity, Radio, ArrowRight, TrendingUp, Users, Eye, Mail, Globe, MapPin, Calendar, Music, Shirt, Building2, GraduationCap, Layers, BookOpen, Network, Laptop, FileText } from 'lucide-react';
import stageAsset from './assets/images/industrial_stage_mockup_1780923797609.png';
import archAsset from './assets/images/photorealistic_truss_arch_1780932893778.png';
import jerseyAsset from './assets/images/premium_gradient_jersey_1780925263529.png';
import medalAsset from './assets/images/elite_marathon_medal_1780925279206.png';
import bagAsset from './assets/images/tonal_drawstring_bag_1780925294636.png';
import runnerAsset from './assets/images/neon_runner_1780924844534.png';
import runnerVectorAsset from './assets/images/vector_runner_1780925042670.png';
import horizontalBannerAsset from './assets/images/horizontal_banner_mockup_1781336399234.jpg';
import verticalBannerAsset from './assets/images/vertical_banner_mockup_1781336415079.jpg';
import eventBackdropAsset from './assets/images/event_backdrop_mockup_1781336429059.jpg';
import flyerAsset from './assets/images/clean_flyer_mockup_1781336705792.jpg';
import posterAsset from './assets/images/clean_poster_mockup_1781336722271.jpg';
import ledBillboardAsset from './assets/images/led_billboard_mockup_1781336458507.jpg';
import beachFlagAsset from './assets/images/beach_flag_mockup_1781351656359.jpg';
import barricadeCoverAsset from './assets/images/barricade_cover_1781410264151.jpg';
import startFinishArchAsset from './assets/images/start_finish_arch_1781410280186.jpg';
import legacyWallAsset from './assets/images/legacy_wall_1781410296942.jpg';
import floatingJerseyAsset from './assets/images/floating_pink_jersey_1781410760129.jpg';
import floatingMedalAsset from './assets/images/floating_elite_medal_1781410780575.jpg';
import floatingBagAsset from './assets/images/floating_drawstring_bag_1781410793682.jpg';

const Slide1 = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    // Target: Dec 27, 2026, 00:00:00 Malaysia Time
    const targetDate = new Date('2026-12-27T00:00:00+08:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: Math.max(0, Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center relative -m-8 md:-m-16 p-8 md:p-16 h-full min-h-full w-auto min-w-full overflow-hidden bg-black text-white font-sans">
      {/* Header Info */}
      <div className="absolute top-10 uppercase tracking-[0.3em] text-gray-500 text-sm hidden md:block">
        Universiti Malaya • 27.12.2026
      </div>

      {/* Main Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight">FESKUM RUN</h1>
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tight text-[#FF007F]">2026</h2>
        <p className="text-xl md:text-2xl mt-4 font-light">Own the Night.</p>
        <p className="text-xs md:text-sm mt-2 text-gray-400 max-w-lg mx-auto">
          WHERE HIGH-PERFORMANCE FITNESS MEETS THE ELECTRIC ENERGY OF FESTIVAL CULTURE.
        </p>
      </div>

      {/* Digital Pink Countdown */}
      <div className="flex gap-6 md:gap-10 font-['Share_Tech_Mono'] mt-4 border-t border-b border-gray-800 py-6">
        {[
          { val: timeLeft.days, label: 'DAYS' },
          { val: timeLeft.hours, label: 'HOURS' },
          { val: timeLeft.minutes, label: 'MINUTES' },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            {/* The Digital Glow Effect */}
            <div className="text-5xl md:text-7xl font-bold text-[#FF007F] drop-shadow-[0_0_10px_rgba(255,0,127,0.8)]">
              {String(item.val).padStart(2, '0')}
            </div>
            <div className="text-[8px] md:text-[10px] tracking-[0.3em] text-gray-500 mt-2">{item.label}</div>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-10 w-full px-8 md:px-20 flex justify-between text-[10px] md:text-xs text-gray-600 uppercase tracking-widest">
        <span>UM CREATIVE DIVISION</span>
        <span className="hidden md:inline">30,000+ CAMPUS COMMUNITY</span>
      </div>
    </div>
  );
};

const Slide2 = () => (
  <div className="flex-1 flex flex-col justify-center max-w-4xl relative z-10">
    <div className="w-12 h-1 bg-[#FF007F] mb-12" />
    <h2 className="text-[#FF007F] font-mono mb-4 tracking-widest text-sm uppercase">01 / Executive Summary</h2>
    <h3 className="text-4xl md:text-6xl font-display leading-tight font-medium max-w-3xl">
      We are merging the <span className="text-white">discipline of a midnight run</span> with an <span className="text-[#FF007F] italic">electric festival finale</span>.
    </h3>
    <div className="mt-12 text-2xl text-white/50 font-light border-l-2 border-[#FF007F]/50 pl-8 bg-gradient-to-r from-[#FF007F]/5 to-transparent py-4">
      This is the 'Elite Professional Athleticism' of Universiti Malaya.
    </div>
  </div>
);

const Slide3 = () => (
  <div className="flex-1 flex flex-col justify-center relative z-10 w-full max-w-4xl">
    <div className="w-12 h-1 bg-[#FF007F] mb-8" />
    <h2 className="text-[#FF007F] font-mono mb-4 tracking-widest text-sm uppercase">02 / The Event</h2>
    <h3 className="text-3xl md:text-4xl font-display font-medium mb-8 leading-snug">
      The physical discipline of a <span className="text-[#FF007F]">5-7km fun run</span>, culminating in a high-energy live concert at Dewan Tunku Canselor.
    </h3>
    
    <div className="mt-4 border-t-2 border-[#FF007F] divide-y divide-white/10 w-full bg-[#000000] sm:px-6 relative backdrop-blur-sm z-10">
      {[
        { time: "7:30–8:00 AM", activity: "Arrival of participants and VIPs" },
        { time: "8:00–8:15 AM", activity: "Running briefing" },
        { time: "8:15–8:30 AM", activity: "Warm-up and aerobics session" },
        { time: "8:30–11:30 AM", activity: "Flag off and run begins" },
        { time: "11:30–12:00 PM", activity: "Prize giving and photo session" },
        { time: "12:00 PM", activity: "End of event" },
      ].map((row, idx) => (
        <div key={idx} className="flex flex-col sm:flex-row py-4 group hover:bg-[#FF007F]/10 transition-colors px-4 -mx-4 rounded-sm sm:items-center">
          <div className="w-full sm:w-2/5 text-[#FF69B4] font-mono text-sm sm:text-base mb-1 sm:mb-0 tracking-wide font-medium group-hover:text-white transition-colors flex items-center">
             <div className="w-1.5 h-1.5 rounded-full bg-[#FF007F] mr-4 opacity-40 group-hover:opacity-100" />
             {row.time}
          </div>
          <div className="w-full sm:w-3/5 text-white/90 font-light sm:pl-6 sm:border-l border-white/10 text-lg group-hover:text-white transition-colors">
             {row.activity}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Slide4 = () => (
  <div className="flex-1 flex flex-col justify-center">
    <div className="w-12 h-1 bg-[#FF007F] mb-12" />
    <h2 className="text-[#FF007F] font-mono mb-4 tracking-widest text-sm uppercase">03 / Direct Market Access</h2>
    <h3 className="text-5xl font-display font-medium mb-16">The Reach</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="border border-white/10 p-8 relative overflow-hidden group hover:border-[#FF007F] transition-colors bg-[#000000]">
        
        <h4 className="text-white/50 font-mono text-sm mb-4 tracking-widest uppercase truncate border-b border-white/5 pb-4">Students Enrolled</h4>
        <div className="text-5xl lg:text-6xl font-mono text-white font-light">42,444</div>
      </div>
      <div className="border border-white/10 p-8 relative overflow-hidden group hover:border-[#FF007F] transition-colors bg-[#000000]">
        
        <h4 className="text-white/50 font-mono text-sm mb-4 tracking-widest uppercase truncate border-b border-white/5 pb-4">Academic Staff</h4>
        <div className="text-5xl lg:text-6xl font-mono text-white font-light">12,656</div>
      </div>
      <div className="border border-[#FF007F] p-8 relative overflow-hidden bg-[#000000]">
        
        <h4 className="text-[#FF007F] font-mono text-sm mb-4 tracking-widest uppercase flex items-center gap-2 border-b border-[#FF007F]/20 pb-4">
          <Target size={16} /> Target Visitors
        </h4>
        <div className="text-6xl lg:text-7xl font-mono text-[#FF007F] font-bold">5,500</div>
      </div>
    </div>
  </div>
);

const socialAccounts = [
  { account: "@unimalaya", category: "Central", followers: "95.3K" },
  { account: "@feskum", category: "Event Hub", followers: "8.1K" },
  { account: "@royal12th", category: "Residential College", followers: "7.1K" },
  { account: "@kk13um", category: "Residential College", followers: "4.2K" },
  { account: "@kk3kurshiah", category: "Residential College", followers: "3.4K" },
  { account: "@astar_um", category: "Residential College", followers: "3.4K" },
  { account: "@officialkuaz", category: "Residential College", followers: "3.3K" },
  { account: "@bestari4th", category: "Residential College", followers: "3.2K" },
  { account: "@kk9um", category: "Residential College", followers: "3.2K" },
  { account: "@kolejkeduaum", category: "Residential College", followers: "3.5K" },
  { account: "@tazmanian10th", category: "Residential College", followers: "2.0K" },
  { account: "@kinabalu8th", category: "Residential College", followers: "1.9K" },
  { account: "@dayasari5th", category: "Residential College", followers: "1.5K" },
];

const Slide5 = () => (
  <div className="flex-1 flex flex-col justify-center relative w-full h-full max-w-4xl mx-auto py-12">
    <div className="w-12 h-1 bg-[#FF007F] mb-6" />
    <h2 className="text-[#FF007F] font-mono mb-4 tracking-widest text-sm uppercase">04 / Marketing Engine</h2>
    <h3 className="text-4xl font-display font-medium mb-6">Campus-Wide Dominance</h3>
    <p className="text-xl text-white/60 font-light mb-8 max-w-3xl leading-relaxed">
      Strategic amplification network. A multi-channel surge across 13+ touchpoints, ensuring your brand permeates every level of the university ecosystem.
    </p>

    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-start">
      <div className="w-full bg-[#000000] border border-white/10 overflow-hidden text-xs md:text-sm">
        <div className="grid grid-cols-[3fr_3fr_2fr] border-b border-white/20 px-4 py-3 bg-[#050505] font-sans font-bold text-white tracking-widest uppercase">
          <div>Account</div>
          <div>Category</div>
          <div className="text-right">Followers</div>
        </div>
        <div className="divide-y divide-white/5 bg-[#000000]">
          {socialAccounts.slice(0, 7).map((item, index) => (
            <div key={index} className="grid grid-cols-[3fr_3fr_2fr] px-4 py-2 md:py-3 hover:bg-[#0A0A0A] transition-colors items-center group">
              <div className="font-mono text-white/90 group-hover:text-white transition-colors truncate pr-2">{item.account}</div>
              <div className="font-sans text-white/60 font-light group-hover:text-white/80 transition-colors truncate pr-2">{item.category}</div>
              <div className="font-mono text-[#FF69B4] text-right font-medium">{item.followers}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#000000] border border-white/10 overflow-hidden text-xs md:text-sm">
        <div className="grid grid-cols-[3fr_3fr_2fr] border-b border-white/20 px-4 py-3 bg-[#050505] font-sans font-bold text-white tracking-widest uppercase">
          <div>Account</div>
          <div>Category</div>
          <div className="text-right">Followers</div>
        </div>
        <div className="divide-y divide-white/5 bg-[#000000]">
          {socialAccounts.slice(7).map((item, index) => (
            <div key={index} className="grid grid-cols-[3fr_3fr_2fr] px-4 py-2 md:py-3 hover:bg-[#0A0A0A] transition-colors items-center group">
              <div className="font-mono text-white/90 group-hover:text-white transition-colors truncate pr-2">{item.account}</div>
              <div className="font-sans text-white/60 font-light group-hover:text-white/80 transition-colors truncate pr-2">{item.category}</div>
              <div className="font-mono text-[#FF69B4] text-right font-medium">{item.followers}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Slide6 = () => (
  <div className="flex-1 flex flex-col justify-center">
    <div className="w-12 h-1 bg-[#FF007F] mb-8" />
    <h2 className="text-[#FF007F] font-mono mb-4 tracking-widest text-sm uppercase">05 / Sponsorship Tiers</h2>
    <h3 className="text-4xl font-display font-medium mb-12">The Roster</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border border-[#FF007F] p-8 relative bg-[#050505]">
        <div className="absolute top-0 right-0 p-4"><Crown className="text-[#FF007F]" /></div>
        <h4 className="text-2xl lg:text-3xl font-display text-white mb-2">Headliners</h4>
        <p className="text-[#FF007F] font-mono text-[10px] lg:text-xs mb-8 tracking-widest uppercase">Official Festival Sponsors</p>
        <ul className="space-y-4 text-white/70 font-light text-sm lg:text-base">
          <li className="flex items-start gap-3"><ArrowRight size={16} className="text-[#FF007F] mt-1 shrink-0"/> Maximum Brand Visibility</li>
          <li className="flex items-start gap-3"><ArrowRight size={16} className="text-[#FF007F] mt-1 shrink-0"/> Stage LED Branding</li>
          <li className="flex items-start gap-3"><ArrowRight size={16} className="text-[#FF007F] mt-1 shrink-0"/> Official Program Sponsorship</li>
        </ul>
      </div>

      <div className="border border-white/10 p-8 hover:border-[#FF007F]/40 transition-colors bg-[#0A0A0A]/50">
        <div className="absolute top-0 right-0 p-4"><Activity className="text-white/30" /></div>
        <h4 className="text-2xl lg:text-3xl font-display text-white mb-2">Experience Partners</h4>
        <p className="text-white/50 font-mono text-[10px] lg:text-xs mb-8 tracking-widest uppercase">In-Kind Sponsors</p>
        <ul className="space-y-4 text-white/70 font-light text-sm lg:text-base">
          <li className="flex items-start gap-3"><ArrowRight size={16} className="text-white/50 mt-1 shrink-0"/> Product Integration</li>
          <li className="flex items-start gap-3"><ArrowRight size={16} className="text-white/50 mt-1 shrink-0"/> On-Site Activation Kiosks</li>
          <li className="flex items-start gap-3"><ArrowRight size={16} className="text-white/50 mt-1 shrink-0"/> Participant Race Kits</li>
        </ul>
      </div>

      <div className="border border-white/10 p-8 hover:border-[#FF007F]/40 transition-colors bg-[#0A0A0A]/50">
        <div className="absolute top-0 right-0 p-4"><Radio className="text-white/30" /></div>
        <h4 className="text-2xl lg:text-3xl font-display text-white mb-2">Media Partners</h4>
        <p className="text-white/50 font-mono text-[10px] lg:text-xs mb-8 tracking-widest uppercase">Amplification Network</p>
        <ul className="space-y-4 text-white/70 font-light text-sm lg:text-base">
          <li className="flex items-start gap-3"><ArrowRight size={16} className="text-white/50 mt-1 shrink-0"/> Cross-Platform Promotion</li>
          <li className="flex items-start gap-3"><ArrowRight size={16} className="text-white/50 mt-1 shrink-0"/> Dedicated Press Coverage</li>
          <li className="flex items-start gap-3"><ArrowRight size={16} className="text-white/50 mt-1 shrink-0"/> VIP Event Access</li>
        </ul>
      </div>
    </div>
  </div>
);

const Slide7 = () => (
  <div className="flex-1 flex flex-col justify-center">
    <div className="w-12 h-1 bg-[#FF007F] mb-12" />
    <h2 className="text-[#FF007F] font-mono mb-4 tracking-widest text-sm uppercase">06 / Collaboration Opportunities</h2>
    <h3 className="text-5xl font-display font-medium mb-12">The Partnership</h3>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl mx-auto">
      <div className="flex flex-col group p-6">
        <Users className="text-[#FF007F] mb-6 group-hover:scale-110 transition-transform" size={40} strokeWidth={1.5} />
        <h4 className="text-2xl font-sans font-medium text-white mb-4">Be a Part of Us</h4>
        <p className="text-white/60 text-base font-light leading-relaxed">
          Join the largest community-driven event in Universiti Malaya and align your brand with the pinnacle of campus celebration.
        </p>
      </div>

      <div className="flex flex-col group p-6">
        <Radio className="text-[#FF007F] mb-6 group-hover:scale-110 transition-transform" size={40} strokeWidth={1.5} />
        <h4 className="text-2xl font-sans font-medium text-white mb-4">Expand Your Brand</h4>
        <p className="text-white/60 text-base font-light leading-relaxed">
          Actively feature your services across our media networks, high-impact event posters, banners, and dedicated press statements.
        </p>
      </div>

      <div className="flex flex-col group p-6">
        <FileText className="text-[#FF007F] mb-6 group-hover:scale-110 transition-transform" size={40} strokeWidth={1.5} />
        <h4 className="text-2xl font-sans font-medium text-white mb-4">Tax Exemption</h4>
        <p className="text-white/60 text-base font-light leading-relaxed">
          Contributions towards FESKUM 2026 may be eligible for tax deductions, offering valuable incentives for your support.
        </p>
      </div>

      <div className="flex flex-col group p-6">
        <Network className="text-[#FF007F] mb-6 group-hover:scale-110 transition-transform" size={40} strokeWidth={1.5} />
        <h4 className="text-2xl font-sans font-medium text-white mb-4">Build Connections</h4>
        <p className="text-white/60 text-base font-light leading-relaxed">
          Establish direct relationships with student leaders, corporate partners, and the broader public community.
        </p>
      </div>
    </div>
  </div>
);

const Slide8 = () => (
  <div className="flex-1 flex flex-col justify-center">
    <div className="w-12 h-1 bg-[#FF007F] mb-8" />
    <h2 className="text-[#FF007F] font-mono mb-4 tracking-widest text-sm uppercase">07 / Creative Activation</h2>
    <h3 className="text-4xl font-display font-medium mb-12">Immersive Brand Integration</h3>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
      <div>
        <h4 className="text-3xl text-white font-display mb-6">Visual Zones</h4>
        <p className="text-white/60 font-light leading-relaxed mb-8 text-lg">
          We are replacing traditional banners with elegant environmental branding. The route will feature distinct running paths and a dramatic finish line.
        </p>
        <div className="border-l-2 border-[#FF007F] pl-6 py-4">
          <p className="text-white text-xl font-medium leading-snug">
            Your brand logo featured in <span className="text-[#FF007F]">high-contrast</span> on the concert stage LED backdrop.
          </p>
        </div>
      </div>
      
      <div className="relative aspect-square lg:aspect-auto">
        <div className="absolute inset-0 border border-white/10 flex items-center justify-center overflow-hidden bg-[#050505]">
           <div className="w-1/2 h-1/2 flex items-center justify-center border border-white/10 rounded-full">
             <div className="font-display font-medium text-white tracking-widest text-sm uppercase">Your Brand</div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

const SlideExclusive = () => (
  <div className="flex-1 flex flex-col w-full h-full bg-[#000000] pt-12 md:pt-16 px-8 md:px-16">
    <div className="shrink-0 flex flex-col items-start w-full max-w-[1600px] mx-auto pb-8">
      <div className="w-12 h-1 bg-[#FF007F] mb-6" />
      <h2 className="text-[#FF007F] font-mono mb-2 tracking-widest text-xs lg:text-sm uppercase">08 / The Exclusive Collection</h2>
      <h3 className="text-3xl lg:text-4xl font-sans font-medium mb-6 text-white">Elite Marathon Gear</h3>
      <p className="text-white/80 font-light text-base lg:text-lg max-w-4xl border-l-2 border-[#FF007F] pl-4">
        Every participant receives a curated, high-end merchandise kit designed for performance and everyday style, turning every runner into a <span className="text-white font-medium">mobile brand ambassador.</span>
      </p>
    </div>
    
    <div className="flex-1 w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pb-12 min-h-0">
      
      {/* Jersey Column */}
      <div className="flex flex-col h-full group bg-transparent">
         <div className="flex-1 relative overflow-hidden mb-6">
           <img src={jerseyAsset} alt="Performance Jersey" className="w-full h-full object-cover object-top opacity-90 transition-transform duration-1000 group-hover:scale-105" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80 pointer-events-none" />
         </div>
         <div className="shrink-0 flex flex-col justify-end">
           <h4 className="text-xl font-sans font-medium text-white mb-2">Premium Gradient Jersey</h4>
           <div className="flex items-center gap-3 text-xs text-white/50 font-mono tracking-widest uppercase">
             <div className="w-4 h-px bg-[#FF007F] shrink-0" />
             <span>Sponsor Logo on Sleeve</span>
           </div>
         </div>
      </div>

      {/* Medal Column */}
      <div className="flex flex-col h-full group bg-transparent">
         <div className="flex-1 relative overflow-hidden mb-6">
           <img src={medalAsset} alt="Finisher Medal" className="w-full h-full object-cover object-center opacity-90 transition-transform duration-1000 group-hover:scale-105" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80 pointer-events-none" />
         </div>
         <div className="shrink-0 flex flex-col justify-end">
           <h4 className="text-xl font-sans font-medium text-white mb-2">Industrial Matte Medal</h4>
           <div className="flex items-center gap-3 text-xs text-white/50 font-mono tracking-widest uppercase">
             <div className="w-4 h-px bg-[#FF007F] shrink-0" />
             <span>Laser-Etched Details</span>
           </div>
         </div>
      </div>

      {/* Bag Column */}
      <div className="flex flex-col h-full group bg-transparent">
         <div className="flex-1 relative overflow-hidden mb-6">
           <img src={bagAsset} alt="Drawstring Bag" className="w-full h-full object-cover object-center opacity-90 transition-transform duration-1000 group-hover:scale-105" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80 pointer-events-none" />
         </div>
         <div className="shrink-0 flex flex-col justify-end">
           <h4 className="text-xl font-sans font-medium text-white mb-2">Tonal Canvas Bag</h4>
           <div className="flex items-center gap-3 text-xs text-white/50 font-mono tracking-widest uppercase">
             <div className="w-4 h-px bg-[#FF007F] shrink-0" />
             <span>Matte Logo Placement</span>
           </div>
         </div>
      </div>

    </div>
  </div>
);

const Slide9 = () => (
  <div className="flex-1 flex flex-col justify-center">
    <div className="w-12 h-1 bg-[#FF007F] mb-8" />
    <h2 className="text-[#FF007F] font-mono mb-4 tracking-widest text-sm uppercase">09 / The Vision</h2>
    <h3 className="text-4xl font-sans font-medium mb-10">Gate of Ambition</h3>
    
    <div className="relative w-full aspect-[21/9] border border-white/10 bg-[#000000] overflow-hidden group mb-8">
       <img src={archAsset} alt="Start/Finish Arch Truss" className="w-full h-full object-cover opacity-90 transition-all duration-700" />
       <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent pointer-events-none" />
    </div>

    <div>
       <h4 className="text-2xl font-sans font-medium text-white mb-2">Premium Event Real Estate</h4>
       <p className="text-white/60 font-light max-w-4xl leading-relaxed">
         The FESKUM 2026 Finish Line Arch is the focal point of the entire event. Constructed as a professional-grade aluminum truss system, it serves as the ultimate visual landmark for finishers and the primary hub for spectator photography. 
         <br/><br/>
         We have engineered this structure specifically for high-impact sponsor integration. With dedicated banner zones on the main face, your brand will occupy the most photographed and shared moment of the entire festival—the precise second where exertion meets celebration.
       </p>
    </div>
  </div>
);

const SlideInvestment = () => (
  <div className="flex-1 flex flex-col justify-center w-full mx-auto relative px-8 py-12 md:py-16">
    <div className="max-w-7xl mx-auto w-full shrink-0">
      <div className="w-12 h-1 bg-[#FF007F] mb-6" />
      <h2 className="text-[#FF007F] font-mono mb-3 tracking-widest text-sm uppercase">13 / Budget Allocation</h2>
      <h3 className="text-4xl md:text-5xl font-sans font-light tracking-wide text-white mb-8">Investment Transparency</h3>
    </div>
    
    <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 mt-4">
      
      {/* Donut Chart */}
      <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] shrink-0">
         <svg viewBox="0 0 600 600" className="w-full h-full overflow-visible drop-shadow-2xl">
           {/* Callouts */}
           {/* 40% */}
           <polyline points="462,248 490,238 560,238" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
           <text x="568" y="243" fill="white" fontSize="18" fontFamily="monospace" fillOpacity="0.9">40%</text>

           {/* 30% */}
           <polyline points="248,462 238,490 140,490" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
           <text x="130" y="495" fill="white" fontSize="18" fontFamily="monospace" fillOpacity="0.7" textAnchor="end">30%</text>

           {/* 20% */}
           <polyline points="138,248 110,238 40,238" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
           <text x="30" y="243" fill="white" fontSize="18" fontFamily="monospace" fillOpacity="0.6" textAnchor="end">20%</text>

           {/* 10% */}
           <polyline points="248,138 238,110 140,110" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
           <text x="130" y="115" fill="white" fontSize="18" fontFamily="monospace" fillOpacity="0.5" textAnchor="end">10%</text>

           <g transform="rotate(-90 300 300)">
             {/* Base empty ring (optional visual depth) */}
             <circle r="160" cx="300" cy="300" fill="transparent" stroke="#111" strokeWidth="16" />
             
             {/* 40% Event */}
             <circle r="160" cx="300" cy="300" fill="transparent" stroke="#FF007F" strokeWidth="16" strokeDasharray="396.12 1005.3" strokeDashoffset="0" className="drop-shadow-[0_0_15px_rgba(255,0,127,0.4)] transition-all duration-1000" />
             
             {/* 30% Race */}
             <circle r="160" cx="300" cy="300" fill="transparent" stroke="#333" strokeWidth="14" strokeDasharray="295.59 1005.3" strokeDashoffset="-402.12" className="transition-all duration-1000 delay-100" />
             
             {/* 20% Marketing */}
             <circle r="160" cx="300" cy="300" fill="transparent" stroke="#222" strokeWidth="14" strokeDasharray="195.06 1005.3" strokeDashoffset="-703.71" className="transition-all duration-1000 delay-200" />
             
             {/* 10% Ops */}
             <circle r="160" cx="300" cy="300" fill="transparent" stroke="#151515" strokeWidth="14" strokeDasharray="94.53 1005.3" strokeDashoffset="-904.77" className="transition-all duration-1000 delay-300" />
           </g>
         </svg>
         
         {/* Center Typography */}
         <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <h4 className="text-white font-sans font-light tracking-[0.2em] text-xl md:text-2xl uppercase">Feskum</h4>
            <span className="text-[#FF007F] font-mono tracking-widest text-base mt-2">2026</span>
         </div>
      </div>

      {/* Legend / Counter List */}
      <div className="flex-1 flex flex-col gap-10 lg:gap-12 w-full">
        <div className="flex items-start gap-6 group">
          <span className="text-5xl lg:text-6xl font-mono text-[#FF007F] font-light tracking-tighter w-24 shrink-0">40<span className="text-2xl lg:text-3xl text-[#FF007F]/60 ml-1">%</span></span>
          <div className="flex flex-col pt-1">
            <h4 className="text-xl md:text-2xl font-sans font-medium text-white mb-2 uppercase tracking-wide">Event Production</h4>
            <p className="text-white/50 font-light text-sm md:text-base max-w-sm leading-relaxed">Infrastructure, stage build, sound and lighting, and the 'Sonic Climax' concert setup.</p>
          </div>
        </div>

        <div className="flex items-start gap-6 group opacity-90">
          <span className="text-5xl lg:text-6xl font-mono text-white font-light tracking-tighter w-24 shrink-0">30<span className="text-2xl lg:text-3xl text-white/40 ml-1">%</span></span>
          <div className="flex flex-col pt-1">
            <h4 className="text-lg md:text-xl font-sans font-medium text-white/90 mb-2 uppercase tracking-wide">Race Experience</h4>
            <p className="text-white/40 font-light text-sm md:text-base max-w-sm leading-relaxed">High-end finisher medals, race kits, and premium runner logistics.</p>
          </div>
        </div>

        <div className="flex items-start gap-6 group opacity-70">
          <span className="text-5xl lg:text-6xl font-mono text-white/80 font-light tracking-tighter w-24 shrink-0">20<span className="text-2xl lg:text-3xl text-white/30 ml-1">%</span></span>
          <div className="flex flex-col pt-1">
            <h4 className="text-lg md:text-xl font-sans font-medium text-white/80 mb-2 uppercase tracking-wide">Marketing & Media</h4>
            <p className="text-white/30 font-light text-sm md:text-base max-w-sm leading-relaxed">Targeted digital advertising, campus-wide branding, and multi-channel promotion.</p>
          </div>
        </div>

        <div className="flex items-start gap-6 group opacity-50">
          <span className="text-5xl lg:text-6xl font-mono text-white/60 font-light tracking-tighter w-24 shrink-0">10<span className="text-2xl lg:text-3xl text-white/20 ml-1">%</span></span>
          <div className="flex flex-col pt-1">
            <h4 className="text-lg md:text-xl font-sans font-medium text-white/60 mb-2 uppercase tracking-wide">Operations & Safety</h4>
            <p className="text-white/20 font-light text-sm md:text-base max-w-sm leading-relaxed">Paramedic deployment, city route permits, and on-site participant security.</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
);

const Slide10 = () => (
  <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full relative px-6 lg:px-8 py-10">
    <div className="w-12 h-1 bg-[#FF007F] mb-4" />
    <h2 className="text-[#FF007F] font-mono mb-2 tracking-widest text-[10px] md:text-sm uppercase">14 / Logistics</h2>
    <h3 className="text-3xl md:text-4xl font-sans font-medium mb-6 text-white tracking-tight">The Floorplan</h3>
    
    <div className="relative w-full bg-[#000000] overflow-hidden rounded-xl border border-white/10 shadow-[0_0_50px_rgba(255,0,127,0.05)]">
      <img src="/floorplanrun.png" alt="Nighttime Event Floorplan Blueprint" className="w-full h-auto object-contain object-center block" />
    </div>
    
    <p className="mt-6 text-xs md:text-sm text-white/50 font-sans font-light tracking-wide max-w-3xl leading-relaxed">
      Strategic spatial organization of the FESKUM 2026 event hub, detailing key activation zones, runner transit paths, and sponsor checkpoints. Aerial perspective captured for physical boundary verification.
    </p>
  </div>
);

const Slide11 = () => (
  <div className="flex-1 flex flex-col items-center justify-center text-center">
    
    <div className="z-10 bg-[#050505] p-16 border border-white/10 w-full max-w-3xl">
      <h3 className="text-4xl md:text-6xl font-display font-medium mb-4 text-white uppercase tracking-tight">
        Let's Own The <br/><span className="text-[#FF007F] block mt-2">Night Together.</span>
      </h3>
      <div className="w-16 h-1 bg-white/20 mx-auto my-8" />
      <p className="text-xl text-white/50 font-light mb-12">
        Become part of the Elite Performance.
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white/80">
         <div className="flex items-center gap-3 bg-[#000000] px-6 py-3 border border-white/5 hover:border-[#FF007F]/50 transition-colors cursor-pointer group">
           <Mail className="text-[#FF007F] group-hover:scale-110 transition-transform" size={20} />
           <span className="font-mono text-sm tracking-wide">feskum@um.edu.my</span>
         </div>
         <div className="flex items-center gap-3 bg-[#000000] px-6 py-3 border border-white/5">
           <MapPin className="text-[#FF007F]" size={20} />
           <span className="font-mono text-sm tracking-wide">Universiti Malaya</span>
         </div>
      </div>
    </div>
  </div>
);

const LogoOverlay = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
    <div className="px-5 py-2.5 border border-white/80 bg-black/60 shadow-xl shadow-black/50 backdrop-blur-sm flex items-center justify-center">
      <span className="text-white font-sans font-bold tracking-[0.2em] uppercase text-[10px] whitespace-nowrap">YOUR LOGO</span>
    </div>
  </div>
);

const AssetLabel = ({ text }: { text: string }) => (
  <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-[#050505]/95 border border-white/10 px-2.5 py-1 z-20">
    <span className="font-sans font-light text-[8px] md:text-[9px] text-white/90 uppercase tracking-widest">{text}</span>
  </div>
);

const SlideTrackside = () => (
  <div className="flex-1 flex flex-col h-full w-full bg-[#000000] relative">
    {/* Minimal Header */}
    <div className="shrink-0 flex flex-col items-center justify-center pt-8 md:pt-10 pb-4 md:pb-6 z-10">
      <h3 className="text-xl md:text-2xl font-sans font-medium tracking-wide text-white uppercase">Trackside & Route Exposure</h3>
      <div className="w-6 h-[1px] bg-[#FF007F] mt-3" />
    </div>

    {/* 4x1 Grid for Physical Assets */}
    <div className="flex-1 min-h-0 w-full max-w-[1800px] mx-auto px-6 md:px-12 pb-8 md:pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 h-full gap-4 md:gap-6 lg:gap-8">
        
        {/* Start/Finish Arch */}
        <div className="relative group overflow-hidden bg-[#0A0A0A]">
          <img src={startFinishArchAsset} alt="Start/Finish Arch" className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
          <LogoOverlay />
          <AssetLabel text="Start / Finish Arch" />
        </div>

        {/* Barricade Cover */}
        <div className="relative group overflow-hidden bg-[#0A0A0A]">
          <img src={barricadeCoverAsset} alt="Barricade Covers" className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
          <LogoOverlay />
          <AssetLabel text="Barrier Jackets" />
        </div>

        {/* Beach Flags 2M */}
        <div className="relative group overflow-hidden bg-[#0A0A0A]">
          <img src={beachFlagAsset} alt="Beach Flag" className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
          <LogoOverlay />
          <AssetLabel text="2M Anchor Flag" />
        </div>

        {/* Beach Flags 3M */}
        <div className="relative group overflow-hidden bg-[#0A0A0A]">
          <img src={beachFlagAsset} alt="Beach Flag Large" className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
          <LogoOverlay />
          <AssetLabel text="3M Anchor Flag" />
        </div>

      </div>
    </div>
  </div>
);

const SlideEngagement = () => (
  <div className="flex-1 flex flex-col h-full w-full bg-[#000000] relative">
    {/* Minimal Header */}
    <div className="shrink-0 flex flex-col items-center justify-center pt-8 md:pt-10 pb-4 md:pb-6 z-10">
      <h3 className="text-xl md:text-2xl font-sans font-medium tracking-wide text-white uppercase">Engagement & Participant Experience</h3>
      <div className="w-6 h-[1px] bg-[#FF007F] mt-3" />
    </div>

    <div className="flex-1 min-h-0 w-full max-w-[1800px] mx-auto px-6 md:px-12 pb-8 md:pb-12">
      <div className="flex flex-col h-full gap-4 md:gap-6 lg:gap-8">
        
        {/* Top Row: Backdrops (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 flex-[1.5] gap-4 md:gap-6 lg:gap-8 min-h-0">
           {/* Impact Backdrop */}
           <div className="relative group overflow-hidden bg-[#0A0A0A]">
             <img src={eventBackdropAsset} alt="Impact Backdrop" className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
             <LogoOverlay />
             <AssetLabel text="The 'Impact' Backdrop" />
           </div>

           {/* Legacy Wall */}
           <div className="relative group overflow-hidden bg-[#0A0A0A]">
             <img src={legacyWallAsset} alt="Legacy Wall" className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
             <LogoOverlay />
             <AssetLabel text="The 'Legacy' Participant Wall" />
           </div>
        </div>

        {/* Bottom Row: Collateral (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 flex-1 min-h-0 gap-4 md:gap-6 lg:gap-8">
           {/* Flyer */}
           <div className="relative group overflow-hidden bg-[#0A0A0A]">
             <img src={flyerAsset} alt="A4 Flyer" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
             <LogoOverlay />
             <AssetLabel text="Collateral: A4 Flyer" />
           </div>

           {/* Poster */}
           <div className="relative group overflow-hidden bg-[#0A0A0A]">
             <img src={posterAsset} alt="A4 Poster" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
             <LogoOverlay />
             <AssetLabel text="Collateral: A4 Poster" />
           </div>

           {/* LED Billboard */}
           <div className="relative group overflow-hidden bg-[#0A0A0A]">
             <img src={ledBillboardAsset} alt="LED Billboard" className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
             <LogoOverlay />
             <AssetLabel text="Digital LED Billboard" />
           </div>
        </div>

      </div>
    </div>
  </div>
);

export default [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, SlideExclusive, Slide9, SlideTrackside, SlideEngagement, SlideInvestment, Slide10, Slide11];
