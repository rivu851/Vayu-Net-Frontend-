'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Wind, Activity, Shield, Map, 
  Navigation, School, AlertTriangle, 
  MessageSquare, User, Briefcase, 
  Factory, RefreshCcw, Cpu, Zap,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnimatedCard from '@/components/AnimatedCard';

const features = [
  { icon: Wind, title: 'Real-Time AQI Estimation', desc: 'Hyperlocal air quality data updated every minute using satellite and sensor fusion.' },
  { icon: Activity, title: '24–72 Hour Forecasting', desc: 'Advanced LSTM models predicting pollution spikes before they happen.' },
  { icon: Map, title: 'Pollution Flow Modeling', desc: 'Visualize how pollutants travel across regions with wind-flow simulation.' },
  { icon: Shield, title: 'Health Risk Intelligence', desc: 'Personalized health advice based on your respiratory profile and current air.' },
  { icon: MessageSquare, title: 'SMS Alert System', desc: 'Critical alerts delivered to low-connectivity rural areas without needing an app.' },
  { icon: Navigation, title: 'Clean Air Route Navigation', desc: 'GPS routing that prioritizes paths with the lowest pollution exposure.' },
  { icon: School, title: 'School Safety Mode', desc: 'Automated triggers for indoor activities when outdoor air exceeds safety limits.' },
  { icon: AlertTriangle, title: 'Emergency Health Trigger', desc: 'Direct integration with hospital systems for surge capacity planning.' },
  { icon: User, title: 'Personal Exposure Tracker', desc: 'Monitor your cumulative daily intake of PM2.5 and other pollutants.' },
  { icon: Briefcase, title: 'Work Productivity Insights', desc: 'Correlation data between air quality and cognitive performance for HR.' },
  { icon: Factory, title: 'Pollution Source Attribution', desc: 'AI-driven identification of primary pollution contributors in your area.' },
  { icon: RefreshCcw, title: 'Recovery Forecasting', desc: 'Predicting when air will clear after major events like crop burning or festivals.' },
  { icon: Cpu, title: 'Rural IoT Integration', desc: 'Low-cost sensor network deployment for data-starved rural districts.' },
];

export default function FeaturesPage() {
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
            Core <span className="text-gradient">Features</span>
          </motion.h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            A comprehensive environmental intelligence suite designed for a cleaner, safer future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <AnimatedCard key={i} delay={i * 0.05}>
              <div className="w-14 h-14 rounded-2xl bg-air-blue/10 flex items-center justify-center mb-6 group-hover:bg-air-blue group-hover:text-white transition-all duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {feature.desc}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-air-blue uppercase tracking-widest">
                <Zap className="w-4 h-4" />
                AI-Powered
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Integration Section */}
        <div className="mt-32 glass rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-display font-bold mb-8">Seamless Integration</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-air-blue/10 flex items-center justify-center mx-auto">
                   <CheckCircle2 className="w-6 h-6 text-air-blue" />
                </div>
                <h4 className="font-bold">Mobile App</h4>
                <p className="text-sm opacity-60">Native iOS and Android apps for individual citizens.</p>
             </div>
             <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-air-blue/10 flex items-center justify-center mx-auto">
                   <CheckCircle2 className="w-6 h-6 text-air-blue" />
                </div>
                <h4 className="font-bold">Enterprise API</h4>
                <p className="text-sm opacity-60">Robust REST API for corporate and government systems.</p>
             </div>
             <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-air-blue/10 flex items-center justify-center mx-auto">
                   <CheckCircle2 className="w-6 h-6 text-air-blue" />
                </div>
                <h4 className="font-bold">SMS Gateway</h4>
                <p className="text-sm opacity-60">Direct SMS delivery for low-connectivity rural areas.</p>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
