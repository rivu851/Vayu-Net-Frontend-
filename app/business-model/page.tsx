'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, TrendingUp, PieChart, 
  DollarSign, Briefcase, Globe, 
  ArrowUpRight, CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnimatedCard from '@/components/AnimatedCard';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const revenueData = [
  { year: '2024', revenue: 1.2 },
  { year: '2025', revenue: 4.5 },
  { year: '2026', revenue: 12.8 },
  { year: '2027', revenue: 28.4 },
  { year: '2028', revenue: 64.2 },
];

const models = [
  {
    title: 'B2G (Govt) Model',
    icon: Globe,
    desc: 'District-wide monitoring subscriptions for municipal governments and environmental agencies.',
    price: 'Annual Licensing'
  },
  {
    title: 'B2B (Enterprise)',
    icon: Briefcase,
    desc: 'API access and dashboard licenses for hospitals, real estate, and logistics companies.',
    price: 'SaaS Subscription'
  },
  {
    title: 'API Monetization',
    icon: DollarSign,
    desc: 'Usage-based billing for developers and third-party app integrations.',
    price: 'Pay-per-request'
  }
];

export default function BusinessModelPage() {
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
            Business <span className="text-gradient">Scalability</span>
          </motion.h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            A sustainable model built for long-term environmental impact and financial growth.
          </p>
        </div>

        {/* Revenue Graph */}
        <AnimatedCard className="mb-32 p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h2 className="text-2xl font-bold">Revenue Scalability</h2>
              <p className="text-sm opacity-60">Projected growth in USD Millions</p>
            </div>
            <div className="flex items-center gap-2 text-air-emerald font-bold">
              <TrendingUp className="w-5 h-5" />
              <span>5.2x YoY Growth</span>
            </div>
          </div>
          
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fontSize: 14, opacity: 0.5}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 14, opacity: 0.5}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: 'none', borderRadius: '12px', color: '#fff' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#0ea5e9" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </AnimatedCard>

        {/* Models Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {models.map((model, i) => (
            <AnimatedCard key={i} delay={i * 0.1} className="flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-air-blue/10 flex items-center justify-center mb-6">
                <model.icon className="w-7 h-7 text-air-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">{model.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 flex-1">
                {model.desc}
              </p>
              <div className="pt-6 border-t dark:border-slate-800 flex items-center justify-between">
                <span className="text-sm font-bold opacity-60 uppercase tracking-widest">{model.price}</span>
                <ArrowUpRight className="w-5 h-5 text-air-blue" />
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Additional Streams */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold">Diversified Revenue</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Beyond our core SaaS models, we leverage our unique data position for high-value consulting and impact grants.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'District Subscriptions', desc: 'Tiered access for local govts.' },
                { title: 'Consulting & Reports', desc: 'Custom environmental audits.' },
                { title: 'CSR & Grants', desc: 'Partnerships for rural inclusion.' },
                { title: 'Licensing Model', desc: 'Hardware partner integrations.' },
              ].map((item, i) => (
                <div key={i} className="p-4 glass rounded-2xl">
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass rounded-3xl p-10 flex flex-col justify-center">
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-air-emerald/10 flex items-center justify-center">
                     <CheckCircle2 className="w-6 h-6 text-air-emerald" />
                  </div>
                  <div>
                     <h4 className="font-bold">Scalable Infrastructure</h4>
                     <p className="text-sm opacity-60">Cloud-native architecture with low marginal cost per region.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-air-emerald/10 flex items-center justify-center">
                     <CheckCircle2 className="w-6 h-6 text-air-emerald" />
                  </div>
                  <div>
                     <h4 className="font-bold">Network Effects</h4>
                     <p className="text-sm opacity-60">Data accuracy improves as more sensors and regions join the platform.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-air-emerald/10 flex items-center justify-center">
                     <CheckCircle2 className="w-6 h-6 text-air-emerald" />
                  </div>
                  <div>
                     <h4 className="font-bold">High Retention</h4>
                     <p className="text-sm opacity-60">Critical infrastructure status ensures long-term contract stability.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
