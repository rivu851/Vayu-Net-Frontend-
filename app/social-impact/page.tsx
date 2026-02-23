'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, Users, School, Hospital, 
  Globe, ShieldCheck, TrendingDown, 
  ArrowRight, Award
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnimatedCard from '@/components/AnimatedCard';
import CountUp from 'react-countup';

import Image from 'next/image';

const metrics = [
  { label: 'Hospital Overload Reduced', value: 18, suffix: '%', icon: Hospital },
  { label: 'Safer School Days', value: 42, suffix: '', icon: School },
  { label: 'Rural Districts Covered', value: 124, suffix: '', icon: Globe },
  { label: 'Lives Impacted', value: 1.2, suffix: 'M', icon: Heart },
];

export default function SocialImpactPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      <Navbar />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Measuring <span className="text-gradient">Social Impact</span>
          </motion.h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Beyond data and revenue, our success is measured by the lives we protect and the communities we empower.
          </p>
        </div>

        {/* Impact Counters */}
        <div className="grid md:grid-cols-4 gap-6 mb-32">
          {metrics.map((metric, i) => (
            <AnimatedCard key={i} delay={i * 0.1} className="text-center">
              <div className="w-12 h-12 rounded-full bg-air-blue/10 flex items-center justify-center mx-auto mb-6">
                <metric.icon className="w-6 h-6 text-air-blue" />
              </div>
              <div className="text-4xl font-display font-bold text-air-blue mb-2">
                <CountUp end={metric.value} decimals={metric.value % 1 !== 0 ? 1 : 0} duration={3} />{metric.suffix}
              </div>
              <p className="text-sm font-bold opacity-60 uppercase tracking-widest">{metric.label}</p>
            </AnimatedCard>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold">Rural Inclusion Program</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our &quot;Data for the Unseen&quot; initiative deploys low-cost IoT sensors in rural districts where government monitoring is non-existent.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Hyperlocal Alerts', desc: 'SMS alerts sent to 50,000+ farmers during crop-burning seasons.' },
                { title: 'School Health Kits', desc: 'Environmental education and air filters provided to 200+ rural schools.' },
                { title: 'Governance Support', desc: 'Empowering local panchayats with data to request state-level health support.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-air-emerald/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-air-emerald" />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video glass rounded-3xl overflow-hidden relative">
               <Image 
                src="https://picsum.photos/800/450?nature=2" 
                alt="Rural Impact" 
                fill
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="glass p-8 rounded-2xl text-center max-w-sm">
                    <Award className="w-12 h-12 text-air-blue mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">UN Climate Action Award</h4>
                    <p className="text-xs opacity-60">Recognized for excellence in environmental data democratization.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics Detail */}
        <div className="glass rounded-3xl p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingDown className="w-6 h-6 text-air-emerald" />
                Reduced Health Burden
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                By providing 36-hour warnings, we&apos;ve seen a measurable decrease in emergency room visits for asthma and COPD in our pilot regions.
              </p>
              <div className="p-4 bg-air-emerald/10 rounded-xl border border-air-emerald/20">
                <div className="text-sm font-bold">Estimated Public Health Savings</div>
                <div className="text-2xl font-display font-bold text-air-emerald">$4.2M in 2025</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-air-blue" />
                Community Empowerment
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Data is power. We provide community leaders with the evidence they need to advocate for cleaner transportation and industrial regulations.
              </p>
              <button className="flex items-center gap-2 font-bold text-air-blue hover:gap-4 transition-all">
                Read our 2025 Impact Report <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
