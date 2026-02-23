'use client';

import { motion } from 'framer-motion';
import { Wind, Shield, Activity, Map, MessageSquare, Navigation, School, AlertTriangle, User, Briefcase, Factory, RefreshCcw, Cpu } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import AnimatedCard from '@/components/AnimatedCard';
import AirParticles from '@/components/AirParticles';
import CountUp from 'react-countup';

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

const stats = [
  { label: 'Rural Data Gap', value: 70, suffix: '%', desc: 'of India lacks monitoring stations' },
  { label: 'Health Risk', value: 1.2, suffix: 'M', desc: 'Annual deaths attributed to air pollution' },
  { label: 'Economic Loss', value: 95, suffix: 'B', desc: 'Annual GDP loss due to health costs' },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-mesh">
      <div className="fixed top-0 left-0 z-[100] bg-red-500 text-white p-2">VayuNet Debug: App Loaded</div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <AirParticles />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-air-blue/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-air-emerald/20 blur-[120px] rounded-full animate-pulse delay-700" />
        
        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-air-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-air-emerald"></span>
            </span>
            <span className="text-sm font-medium">Live AQI Monitoring Active</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-tight"
          >
            AI-Powered Hyperlocal <br />
            <span className="text-gradient">Air Intelligence</span> for Every Region
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10"
          >
            Predicting air quality before it becomes a crisis. We bridge the data gap between urban centers and rural heartlands.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 bg-air-blue hover:bg-air-blue/90 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-air-blue/20 hover:scale-105"
            >
              View Live Demo
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/20 text-slate-900 dark:text-white rounded-2xl font-bold text-lg transition-all hover:scale-105"
            >
              Request Government Pilot
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex flex-col items-center"
          >
            <div className="text-6xl font-display font-bold text-air-teal">
              <CountUp end={142} duration={3} />
            </div>
            <div className="text-sm uppercase tracking-widest font-semibold opacity-60">Current Avg AQI (Delhi)</div>
          </motion.div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">The Invisible Crisis</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Air pollution is the world&apos;s largest environmental health risk, yet most regions remain data-blind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <AnimatedCard key={i} delay={i * 0.1} className="text-center">
                <div className="text-5xl font-display font-bold text-air-blue mb-2">
                  <CountUp end={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} duration={2} />{stat.suffix}
                </div>
                <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
                <p className="text-slate-600 dark:text-slate-400">{stat.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">How VayuNet Works</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                We combine multi-modal data streams with proprietary AI architectures to generate high-fidelity environmental intelligence.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Data Fusion', desc: 'Satellite imagery, weather APIs, and IoT sensors merged into a unified data lake.' },
                  { title: 'AI Processing', desc: 'LSTM and XGBoost models analyze temporal and spatial patterns.' },
                  { title: 'Predictive Insights', desc: '72-hour forecasts with 94% accuracy at 1km resolution.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-air-blue/10 flex items-center justify-center shrink-0">
                      <div className="w-4 h-4 rounded-full bg-air-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="aspect-square glass rounded-3xl p-8 flex items-center justify-center">
                {/* Visual Diagram Placeholder */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-64 h-64 border-2 border-dashed border-air-blue/30 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-48 h-48 border-2 border-dashed border-air-teal/30 rounded-full"
                  />
                  <div className="z-10 bg-gradient-to-br from-air-blue to-air-emerald p-6 rounded-2xl shadow-2xl">
                    <Cpu className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Floating Data Sources */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 glass px-4 py-2 rounded-full text-xs font-bold">Satellite Data</div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 glass px-4 py-2 rounded-full text-xs font-bold">IoT Sensors</div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 glass px-4 py-2 rounded-full text-xs font-bold">Weather APIs</div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 glass px-4 py-2 rounded-full text-xs font-bold">Historical Data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Intelligence Suite</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A comprehensive platform designed for governments, enterprises, and citizens.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimatedCard key={i} delay={i * 0.05}>
                <div className="w-12 h-12 rounded-xl bg-air-blue/10 flex items-center justify-center mb-6 group-hover:bg-air-blue group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-air-blue flex items-center justify-center">
                  <Wind className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-display font-bold tracking-tight">VayuNet</span>
              </Link>
              <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6">
                The world&apos;s first AI-native environmental intelligence platform dedicated to hyperlocal air quality forecasting and social impact.
              </p>
              <div className="flex gap-4">
                {/* Social Icons */}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                <li><Link href="/technology" className="hover:text-air-blue">Technology</Link></li>
                <li><Link href="/features" className="hover:text-air-blue">Features</Link></li>
                <li><Link href="/dashboard" className="hover:text-air-blue">Live Dashboard</Link></li>
                <li><Link href="/api-data" className="hover:text-air-blue">API Access</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                <li><Link href="/about" className="hover:text-air-blue">About Us</Link></li>
                <li><Link href="/use-cases" className="hover:text-air-blue">Use Cases</Link></li>
                <li><Link href="/contact" className="hover:text-air-blue">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-air-blue">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© 2026 VayuNet Intelligence. All rights reserved.</p>
            <div className="flex gap-8">
              <span>Built for a cleaner future.</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
