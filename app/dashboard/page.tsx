'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area,
  BarChart, Bar, Cell
} from 'recharts';
import { 
  Activity, Map as MapIcon, Wind, AlertCircle, Hospital, School, Navigation, 
  ChevronRight, Info, Bell, Settings, Search, User
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnimatedCard from '@/components/AnimatedCard';
import { cn } from '@/lib/utils';

// Mock Data
const forecastData = [
  { time: '00:00', aqi: 145 },
  { time: '04:00', aqi: 152 },
  { time: '08:00', aqi: 185 },
  { time: '12:00', aqi: 160 },
  { time: '16:00', aqi: 140 },
  { time: '20:00', aqi: 155 },
  { time: '24:00', aqi: 170 },
  { time: '28:00', aqi: 195 },
  { time: '32:00', aqi: 210 },
  { time: '36:00', aqi: 230 },
  { time: '40:00', aqi: 190 },
  { time: '44:00', aqi: 165 },
];

const aqiLevels = [
  { name: 'Good', range: '0-50', color: '#10b981' },
  { name: 'Moderate', range: '51-100', color: '#f59e0b' },
  { name: 'Unhealthy for Sensitive', range: '101-150', color: '#f97316' },
  { name: 'Unhealthy', range: '151-200', color: '#ef4444' },
  { name: 'Very Unhealthy', range: '201-300', color: '#a855f7' },
  { name: 'Hazardous', range: '301+', color: '#7f1d1d' },
];

interface FlowArrow {
  id: number;
  y: string;
  duration: number;
  delay: number;
}

export default function DashboardPage() {
  const [flowArrows, setFlowArrows] = React.useState<FlowArrow[]>([]);

  React.useEffect(() => {
    const generated = [...Array(10)].map((_, i) => ({
      id: i,
      y: Math.random() * 100 + '%',
      duration: 5 + Math.random() * 5,
      delay: i * 0.5
    }));
    requestAnimationFrame(() => {
      setFlowArrows(generated);
    });
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold">Regional Intelligence Dashboard</h1>
            <p className="text-slate-600 dark:text-slate-400">Monitoring: New Delhi, India • Last updated 2 mins ago</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="glass px-4 py-2 rounded-xl flex items-center gap-2">
              <Search className="w-4 h-4 opacity-50" />
              <input type="text" placeholder="Search region..." className="bg-transparent border-none outline-none text-sm w-32" />
            </div>
            <button className="p-2 glass rounded-xl hover:bg-white/20 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 glass rounded-xl hover:bg-white/20 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Left Column: Map & Flow */}
          <div className="lg:col-span-8 space-y-6">
            {/* Map Section */}
            <AnimatedCard className="p-0 overflow-hidden h-[500px] relative">
              <div className="absolute top-6 left-6 z-10 space-y-2">
                <div className="glass px-4 py-2 rounded-xl flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-sm font-bold">Live Heatmap: Severe Pollution</span>
                </div>
                <div className="glass p-3 rounded-xl">
                  <div className="text-xs font-semibold opacity-60 uppercase mb-2">Legend</div>
                  <div className="flex gap-1">
                    {aqiLevels.map((level) => (
                      <div key={level.name} className="w-6 h-2 rounded-full" style={{ backgroundColor: level.color }} title={level.name} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Mock Map Background */}
              <div className="w-full h-full bg-slate-200 dark:bg-slate-900 flex items-center justify-center relative">
                <MapIcon className="w-32 h-32 opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/10 to-transparent mix-blend-overlay" />
                
                {/* Animated Flow Arrows */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {flowArrows.map((arrow) => (
                    <motion.div
                      key={arrow.id}
                      initial={{ x: -100, y: arrow.y }}
                      animate={{ x: '120%' }}
                      transition={{ duration: arrow.duration, repeat: Infinity, ease: 'linear', delay: arrow.delay }}
                      className="absolute flex items-center gap-1 opacity-40"
                    >
                      <div className="w-8 h-[1px] bg-white" />
                      <ChevronRight className="w-3 h-3 text-white" />
                    </motion.div>
                  ))}
                </div>

                {/* Region Tooltip Mock */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass p-4 rounded-2xl shadow-2xl border-air-blue/30"
                >
                  <div className="text-xs font-bold opacity-60 mb-1">CENTRAL DELHI</div>
                  <div className="text-2xl font-display font-bold text-red-500">AQI 182</div>
                  <div className="text-[10px] text-red-500/70 font-bold">UNHEALTHY</div>
                </motion.div>
              </div>
            </AnimatedCard>

            {/* Forecast Chart */}
            <AnimatedCard className="h-[350px]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Activity className="w-5 h-5 text-air-blue" />
                  72-Hour AQI Forecast
                </h3>
                <div className="flex gap-2">
                  <button className="text-xs font-bold px-3 py-1 rounded-lg bg-air-blue text-white">PM2.5</button>
                  <button className="text-xs font-bold px-3 py-1 rounded-lg glass">NO2</button>
                  <button className="text-xs font-bold px-3 py-1 rounded-lg glass">O3</button>
                </div>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={forecastData}>
                    <defs>
                      <linearGradient id="colorAqi" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                    <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 12, opacity: 0.5}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, opacity: 0.5}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: 'none', borderRadius: '12px', color: '#fff' }}
                      itemStyle={{ color: '#ef4444' }}
                    />
                    <Area type="monotone" dataKey="aqi" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorAqi)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </AnimatedCard>
          </div>

          {/* Right Column: Alerts & Panels */}
          <div className="lg:col-span-4 space-y-6">
            {/* Health Risk Panel */}
            <AnimatedCard className="border-l-4 border-l-red-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg">Health Risk: High</h3>
                  <p className="text-sm opacity-60">Severe AQI Expected in 36 Hours</p>
                </div>
                <AlertCircle className="text-red-500 w-6 h-6" />
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-red-500/10 rounded-xl text-sm border border-red-500/20">
                  <span className="font-bold">Vulnerable Groups:</span> Avoid all outdoor physical activity. Keep windows closed.
                </div>
                <div className="p-3 bg-orange-500/10 rounded-xl text-sm border border-orange-500/20">
                  <span className="font-bold">General Public:</span> Use N95 masks if going outdoors. Reduce prolonged exertion.
                </div>
              </div>
            </AnimatedCard>

            {/* Hospital Alert Panel */}
            <AnimatedCard>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Hospital className="w-5 h-5 text-air-blue" />
                Hospital Surge Alert
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Respiratory Admissions</span>
                  <span className="text-sm font-bold text-red-500">+24% Expected</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    className="h-full bg-red-500"
                  />
                </div>
                <button className="w-full py-2 glass rounded-xl text-xs font-bold hover:bg-white/10 transition-colors">
                  Notify Emergency Response Team
                </button>
              </div>
            </AnimatedCard>

            {/* School Safety Panel */}
            <AnimatedCard>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <School className="w-5 h-5 text-air-teal" />
                School Safety Advisor
              </h3>
              <div className="p-4 bg-air-teal/10 rounded-2xl border border-air-teal/20">
                <div className="text-xs font-bold uppercase opacity-60 mb-2">Recommended Outdoor Hours</div>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-lg font-bold">06:00 - 08:00</div>
                    <div className="text-[10px] opacity-60">SAFE</div>
                  </div>
                  <div className="w-[1px] h-8 bg-air-teal/20" />
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-500">09:00 - 18:00</div>
                    <div className="text-[10px] opacity-60">STAY INDOORS</div>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Clean Air Route */}
            <AnimatedCard className="bg-gradient-to-br from-air-blue/10 to-air-emerald/10">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-air-blue" />
                Clean Air Routing
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 glass rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-air-emerald/20 flex items-center justify-center">
                    <Wind className="w-4 h-4 text-air-emerald" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Route A (Optimized)</div>
                    <div className="text-[10px] opacity-60">Exposure: 42µg/m³ • 12 mins</div>
                  </div>
                  <div className="ml-auto text-air-emerald font-bold text-xs">Best</div>
                </div>
                <div className="flex items-center gap-3 p-3 glass rounded-xl opacity-60">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Route B (Fastest)</div>
                    <div className="text-[10px] opacity-60">Exposure: 115µg/m³ • 9 mins</div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>

        </div>
      </div>
    </main>
  );
}
