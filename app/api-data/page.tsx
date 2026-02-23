'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Code, Terminal, Database, ShieldCheck, 
  Zap, Globe, Copy, Check, Lock, FileJson
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnimatedCard from '@/components/AnimatedCard';
import { cn } from '@/lib/utils';

const apiTiers = [
  { name: 'Community', price: 'Free', features: ['1km Resolution', '1,000 requests/mo', 'Public data only', 'Standard support'] },
  { name: 'Professional', price: '$49/mo', features: ['500m Resolution', '50,000 requests/mo', '72h Forecasts', 'Priority support'] },
  { name: 'Enterprise', price: 'Custom', features: ['100m Resolution', 'Unlimited requests', 'Custom ML models', '24/7 Dedicated support'] },
];

const sampleCode = `{
  "status": "success",
  "data": {
    "region": "New Delhi",
    "coordinates": [28.6139, 77.2090],
    "timestamp": "2026-02-23T10:30:00Z",
    "aqi": 142,
    "pollutants": {
      "pm25": 84.5,
      "pm10": 156.2,
      "no2": 32.1,
      "o3": 12.4
    },
    "forecast": [
      { "time": "+1h", "aqi": 145 },
      { "time": "+2h", "aqi": 148 }
    ]
  }
}`;

export default function ApiDataPage() {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            Developer <span className="text-gradient">API & Data</span>
          </motion.h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Integrate VayuNet&apos;s environmental intelligence into your own applications with our robust, low-latency API.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {/* API Documentation Preview */}
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold">Simple Integration</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Our RESTful API provides real-time and predictive air quality data in standard JSON format. Get started in minutes with our comprehensive documentation.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: Zap, title: 'Low Latency', desc: 'Average response time under 150ms globally.' },
                { icon: ShieldCheck, title: 'Secure', desc: 'OAuth2 and API Key authentication for all endpoints.' },
                { icon: Globe, title: 'Global Coverage', desc: 'Data available for every 1km&sup2; on Earth.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 glass rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-air-blue/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-air-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Code Block */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-air-blue to-air-emerald rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative glass-dark rounded-3xl overflow-hidden border border-slate-800">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                <div className="flex items-center gap-2">
                  <FileJson className="w-4 h-4 text-air-blue" />
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">GET /v1/current-aqi</span>
                </div>
                <button 
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-air-emerald" /> : <Copy className="w-4 h-4 text-slate-400" />}
                </button>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm text-air-blue leading-relaxed">
                  <code>{sampleCode}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">API Tiers</h2>
          <p className="text-slate-600 dark:text-slate-400">Choose the plan that fits your scale.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {apiTiers.map((tier, i) => (
            <AnimatedCard key={i} delay={i * 0.1} className={cn(
              "flex flex-col",
              i === 1 ? "border-air-blue border-2 scale-105 shadow-xl shadow-air-blue/10" : ""
            )}>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-display font-bold text-air-blue">{tier.price}</div>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-air-emerald" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={cn(
                "w-full py-3 rounded-xl font-bold transition-all",
                i === 1 ? "bg-air-blue text-white" : "glass hover:bg-white/10"
              )}>
                Get Started
              </button>
            </AnimatedCard>
          ))}
        </div>

        {/* Policy Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Lock className="w-6 h-6 text-air-blue" />
              Ethical Data Policy
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              We believe environmental data is a public good. Our ethical data policy ensures that while we monetize high-resolution enterprise data, baseline air quality information remains free for researchers and NGOs.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-air-blue" />
                GDPR & CCPA Compliant
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-air-blue" />
                No sale of personal user location data
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-air-blue" />
                Transparent data sourcing
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6">Ready to build?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Access our developer portal to get your API keys, read the full documentation, and explore sample projects.
            </p>
            <button className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold hover:scale-105 transition-all">
              Go to Developer Portal
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
