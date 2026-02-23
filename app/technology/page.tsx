'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Database, Cloud, LineChart as ChartIcon, 
  ArrowRight, Satellite, Wind, History, Globe, 
  Layers, Zap, ShieldCheck
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnimatedCard from '@/components/AnimatedCard';

const architecture = [
  {
    title: 'Data Sources',
    icon: Database,
    items: ['Satellite Imagery (Sentinel-5P)', 'Weather APIs (Wind, Temp, Humidity)', 'Historical AQI Archives', 'Geospatial Land Use Data'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Processing Engine',
    icon: Cpu,
    items: ['IDW Spatial Interpolation', 'LSTM Temporal Modeling', 'XGBoost Feature Ranking', 'Random Forest Classification'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Intelligence Output',
    icon: Zap,
    items: ['Hyperlocal Dashboard', 'SMS Alert Gateway', 'Enterprise API Endpoints', 'Public Health Advisories'],
    color: 'from-emerald-500 to-teal-500'
  }
];

const mlModels = [
  {
    name: 'Long Short-Term Memory (LSTM)',
    desc: 'Our primary time-series model. Unlike standard neural networks, LSTM has feedback connections that allow it to process entire sequences of data, making it perfect for predicting pollution trends based on historical cycles.',
    stats: '94.2% Accuracy'
  },
  {
    name: 'XGBoost Regressor',
    desc: 'Used for feature attribution. It helps us understand which factors (e.g., traffic density vs. wind speed) are contributing most to a local pollution spike in real-time.',
    stats: 'Low Latency'
  },
  {
    name: 'IDW Interpolation',
    desc: 'Inverse Distance Weighting allows us to estimate air quality in regions without physical sensors by intelligently weighting data from the nearest available stations and satellite proxies.',
    stats: '1km Resolution'
  }
];

export default function TechnologyPage() {
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
            The Intelligence <span className="text-gradient">Architecture</span>
          </motion.h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Fusing geospatial science with advanced deep learning to solve the environmental data gap.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative mb-32">
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {architecture.map((stage, i) => (
              <AnimatedCard key={i} delay={i * 0.2} className="relative overflow-hidden">
                <div className={stage.color + " absolute top-0 left-0 w-full h-1"} />
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                  <stage.icon className="w-6 h-6 text-air-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{stage.title}</h3>
                <ul className="space-y-3">
                  {stage.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-air-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            ))}
          </div>
          
          {/* Connecting Arrows (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 z-0">
            <motion.div 
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-12 h-12 text-air-blue/20" />
            </motion.div>
          </div>
          <div className="hidden md:block absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 z-0">
            <motion.div 
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <ArrowRight className="w-12 h-12 text-air-blue/20" />
            </motion.div>
          </div>
        </div>

        {/* ML Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl font-display font-bold mb-8">Proprietary ML Models</h2>
            <div className="space-y-6">
              {mlModels.map((model, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 glass rounded-2xl border-l-4 border-l-air-blue"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">{model.name}</h4>
                    <span className="text-xs font-bold px-2 py-1 bg-air-blue/10 text-air-blue rounded-md">{model.stats}</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {model.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square glass rounded-3xl p-12 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-full bg-air-blue/10 flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 rounded-full border-4 border-air-blue border-t-transparent animate-spin" />
                <ShieldCheck className="w-10 h-10 text-air-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">94.2% Validation Accuracy</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Our models are continuously validated against ground-truth data from 4,000+ global monitoring stations.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">1km</div>
                  <div className="text-[10px] uppercase font-bold opacity-50">Resolution</div>
                </div>
                <div className="w-[1px] h-10 bg-slate-200 dark:bg-slate-800" />
                <div className="text-center">
                  <div className="text-2xl font-bold">15m</div>
                  <div className="text-[10px] uppercase font-bold opacity-50">Latency</div>
                </div>
                <div className="w-[1px] h-10 bg-slate-200 dark:bg-slate-800" />
                <div className="text-center">
                  <div className="text-2xl font-bold">72h</div>
                  <div className="text-[10px] uppercase font-bold opacity-50">Horizon</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Sources Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Multi-Modal Data Fusion</h2>
          <p className="text-slate-600 dark:text-slate-400">We don&apos;t just rely on sensors. We look at the whole picture.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Satellite, label: 'Sentinel-5P' },
            { icon: Wind, label: 'Wind Dynamics' },
            { icon: History, label: 'Historical Trends' },
            { icon: Globe, label: 'Land Use Data' },
          ].map((item, i) => (
            <AnimatedCard key={i} className="flex flex-col items-center justify-center py-10">
              <item.icon className="w-10 h-10 text-air-blue mb-4" />
              <span className="font-bold">{item.label}</span>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </main>
  );
}
