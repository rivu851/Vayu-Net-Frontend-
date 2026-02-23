'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Users, Award, 
  ArrowRight, Globe, Heart, Shield
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnimatedCard from '@/components/AnimatedCard';

import Image from 'next/image';

const values = [
  { icon: Globe, title: 'Global Inclusion', desc: 'Ensuring rural and underserved regions have the same environmental data as urban centers.' },
  { icon: Heart, title: 'Public Health First', desc: 'Our metrics are designed to save lives, not just track numbers.' },
  { icon: Shield, title: 'Data Integrity', desc: 'Unbiased, high-fidelity environmental intelligence you can trust for policy making.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      <Navbar />
      
      <div className="container mx-auto px-4">
        {/* Mission/Vision */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Our Mission is <br />
              <span className="text-gradient">Clean Air for All</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              VayuNet was founded on a simple premise: you cannot manage what you cannot measure. While major cities have monitoring stations, 70% of the world&apos;s population lives in data-blind regions.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              We leverage the power of AI and satellite fusion to bridge this gap, providing hyperlocal intelligence that empowers governments, hospitals, and citizens to take proactive action.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-air-blue">2024</span>
                <span className="text-xs font-bold uppercase opacity-50">Founded</span>
              </div>
              <div className="w-[1px] h-12 bg-slate-200 dark:bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-air-blue">12+</span>
                <span className="text-xs font-bold uppercase opacity-50">Regions Active</span>
              </div>
              <div className="w-[1px] h-12 bg-slate-200 dark:bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-air-blue">1M+</span>
                <span className="text-xs font-bold uppercase opacity-50">Lives Impacted</span>
              </div>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="aspect-square glass rounded-3xl overflow-hidden relative">
              <Image 
                src="https://picsum.photos/800/800?nature=1" 
                alt="Clean Air" 
                fill
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="glass p-6 rounded-2xl">
                    <p className="italic text-lg mb-4">&quot;VayuNet isn&apos;t just a tech platform; it&apos;s a public health infrastructure for the 21st century.&quot;</p>
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-air-blue" />
                       <div>
                          <div className="font-bold">Dr. Sarah Chen</div>
                          <div className="text-xs opacity-60">Chief Environmental Scientist</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">Our Core Values</h2>
          <p className="text-slate-600 dark:text-slate-400">The principles that guide our environmental intelligence.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {values.map((value, i) => (
            <AnimatedCard key={i} delay={i * 0.1} className="text-center">
              <div className="w-16 h-16 rounded-full bg-air-blue/10 flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-air-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {value.desc}
              </p>
            </AnimatedCard>
          ))}
        </div>

        {/* Team Section (Simplified) */}
        <div className="glass rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-display font-bold mb-8">Join the Movement</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
            We are a team of scientists, engineers, and policy experts dedicated to solving the air pollution crisis. Interested in working with us?
          </p>
          <button className="px-8 py-4 bg-air-blue text-white rounded-2xl font-bold hover:scale-105 transition-all">
            View Open Positions
          </button>
        </div>
      </div>
    </main>
  );
}
