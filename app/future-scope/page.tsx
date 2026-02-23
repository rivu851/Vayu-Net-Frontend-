'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, Map, Zap, Globe, 
  ArrowRight, Rocket, Cpu, Watch, 
  CloudLightning, Wind
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnimatedCard from '@/components/AnimatedCard';
import { cn } from '@/lib/utils';

const roadmap = [
  {
    year: 'Q3 2024',
    title: 'Platform Genesis',
    desc: 'Launch of core AI engine and satellite fusion pilot in 3 major cities.',
    icon: Rocket,
    status: 'Completed'
  },
  {
    year: 'Q1 2025',
    title: 'Rural Expansion',
    desc: 'Deployment of 500+ low-cost IoT sensors in agricultural heartlands.',
    icon: Globe,
    status: 'In Progress'
  },
  {
    year: 'Q4 2025',
    title: 'Heatwave Intelligence',
    desc: 'Integration of thermal stress modeling for urban heat island prediction.',
    icon: CloudLightning,
    status: 'Upcoming'
  },
  {
    year: 'Q2 2026',
    title: 'Wearable Integration',
    desc: 'Direct API sync with smartwatches for personalized exposure alerts.',
    icon: Watch,
    status: 'Upcoming'
  },
  {
    year: '2027+',
    title: 'Global Risk Platform',
    desc: 'Expansion to 50+ countries as the primary environmental risk layer.',
    icon: Zap,
    status: 'Upcoming'
  }
];

export default function FutureScopePage() {
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
            The <span className="text-gradient">Future</span> of Intelligence
          </motion.h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Our roadmap towards building a comprehensive environmental resilience platform for the planet.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-32">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 hidden md:block" />
          
          <div className="space-y-12">
            {roadmap.map((item, i) => (
              <div key={i} className={cn(
                "flex flex-col md:flex-row items-center gap-8 md:gap-0",
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              )}>
                <div className="md:w-1/2 flex justify-center md:justify-start px-8">
                  <AnimatedCard className={cn(
                    "max-w-md w-full",
                    i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  )}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-air-blue uppercase tracking-widest">{item.year}</span>
                      <span className={cn(
                        "text-[10px] font-bold px-2 py-1 rounded-md uppercase",
                        item.status === 'Completed' ? "bg-air-emerald/10 text-air-emerald" : 
                        item.status === 'In Progress' ? "bg-air-blue/10 text-air-blue" : "bg-slate-100 dark:bg-slate-800 opacity-50"
                      )}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </AnimatedCard>
                </div>
                
                {/* Timeline Node */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center shadow-xl">
                    <item.icon className="w-6 h-6 text-white dark:text-slate-900" />
                  </div>
                </div>
                
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square glass rounded-3xl p-12 flex items-center justify-center">
               <div className="relative w-full h-full">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-air-blue/10 rounded-full blur-3xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Globe className="w-48 h-48 text-air-blue/20" />
                  </div>
                  <div className="absolute top-1/4 left-1/4 glass p-4 rounded-2xl">
                     <Wind className="w-6 h-6 text-air-blue" />
                  </div>
                  <div className="absolute bottom-1/4 right-1/4 glass p-4 rounded-2xl">
                     <Cpu className="w-6 h-6 text-air-teal" />
                  </div>
               </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold mb-8">Beyond Air Quality</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              VayuNet is evolving from an air quality platform into a comprehensive Environmental Risk Layer. Our future involves predicting all climate-related health risks.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Dust Storm Intelligence', desc: 'Predicting trans-boundary dust events 5 days in advance.' },
                { title: 'Pollen & Allergy Forecasts', desc: 'Hyperlocal biological risk tracking for sensitive populations.' },
                { title: 'Urban Heat Island Mapping', desc: 'Real-time thermal stress alerts for street-level safety.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-air-blue/10 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-5 h-5 text-air-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
