'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Hospital, School, Sprout, Heart, 
  Users, Globe, Briefcase, ArrowRight, CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnimatedCard from '@/components/AnimatedCard';
import { cn } from '@/lib/utils';

const useCases = [
  {
    id: 'government',
    title: 'Governments & Municipalities',
    icon: Building2,
    desc: 'Data-driven governance for urban planning and public health policy.',
    benefits: ['District-wide AQI monitoring', 'Emergency response triggers', 'Pollution source attribution', 'Policy impact assessment'],
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'hospitals',
    title: 'Healthcare Systems',
    icon: Hospital,
    desc: 'Predictive surge capacity planning for respiratory emergencies.',
    benefits: ['36-hour admission forecasting', 'Vulnerable patient alerts', 'Facility air filtration optimization', 'Research data access'],
    color: 'from-red-500/20 to-pink-500/20'
  },
  {
    id: 'schools',
    title: 'Educational Institutions',
    icon: School,
    desc: 'Protecting the next generation with automated safety protocols.',
    benefits: ['Outdoor activity advisors', 'Smart ventilation triggers', 'Parental notification system', 'Environmental education tools'],
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 'agriculture',
    title: 'Agricultural Sector',
    icon: Sprout,
    desc: 'Monitoring crop-burning impact and rural air health.',
    benefits: ['Burn-flow prediction', 'Rural health inclusion', 'Sustainable practice tracking', 'Climate resilience data'],
    color: 'from-amber-500/20 to-orange-500/20'
  },
  {
    id: 'corporate',
    title: 'Corporate & Real Estate',
    icon: Briefcase,
    desc: 'Optimizing workplace productivity and asset value.',
    benefits: ['Employee wellness tracking', 'ESG compliance reporting', 'Premium property certification', 'Productivity correlation'],
    color: 'from-slate-500/20 to-slate-800/20'
  },
  {
    id: 'ngos',
    title: 'NGOs & Researchers',
    icon: Globe,
    desc: 'Empowering advocacy with high-fidelity environmental data.',
    benefits: ['Open data access', 'Impact measurement', 'Community health studies', 'Global baseline comparisons'],
    color: 'from-indigo-500/20 to-violet-500/20'
  }
];

export default function UseCasesPage() {
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
            Intelligence for <span className="text-gradient">Every Sector</span>
          </motion.h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            VayuNet provides tailored environmental intelligence to solve specific challenges across the ecosystem.
          </p>
        </div>

        <div className="space-y-24">
          {useCases.map((useCase, i) => (
            <motion.div 
              key={useCase.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col lg:flex-row gap-12 items-center",
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              )}
            >
              <div className="lg:w-1/2">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br", useCase.color)}>
                  <useCase.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">{useCase.title}</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                  {useCase.desc}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {useCase.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-air-emerald shrink-0" />
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-2 font-bold text-air-blue hover:gap-4 transition-all">
                  Explore Case Study <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <div className={cn("aspect-video rounded-3xl p-1 bg-gradient-to-br", useCase.color)}>
                  <div className="w-full h-full glass rounded-[22px] flex items-center justify-center overflow-hidden relative">
                    {/* Mock UI Preview */}
                    <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900/50 flex flex-col p-6">
                       <div className="w-full h-8 glass rounded-lg mb-4 flex items-center px-3 gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500" />
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                       </div>
                       <div className="flex-1 grid grid-cols-3 gap-4">
                          <div className="col-span-2 glass rounded-xl" />
                          <div className="space-y-4">
                             <div className="h-1/3 glass rounded-xl" />
                             <div className="h-1/3 glass rounded-xl" />
                          </div>
                       </div>
                    </div>
                    <div className="z-10 text-center">
                       <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">UI Preview</p>
                       <h4 className="text-xl font-bold">{useCase.title} Portal</h4>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
