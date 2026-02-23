'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Phone, MapPin, Send, 
  CheckCircle2, Building2, Globe, 
  Hospital, School, Briefcase
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnimatedCard from '@/components/AnimatedCard';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
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
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Ready to deploy VayuNet in your region? Our team is here to help you get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl font-display font-bold">Contact Information</h2>
            <p className="text-slate-600 dark:text-slate-400">
              For government pilots, enterprise partnerships, or media inquiries, please reach out via the form or our direct channels.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-air-blue/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-air-blue" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-50">Email</div>
                  <div className="font-bold">partnerships@vayunet.ai</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-air-blue/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-air-blue" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-50">Phone</div>
                  <div className="font-bold">+91 (11) 4050-XXXX</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-air-blue/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-air-blue" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-50">Headquarters</div>
                  <div className="font-bold">Cyber City, Gurugram, India</div>
                </div>
              </div>
            </div>

            <div className="p-8 glass rounded-3xl border-l-4 border-l-air-emerald">
              <h4 className="font-bold mb-2">Government Pilot Program</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                We offer subsidized deployments for state governments and municipal corporations under our &quot;Clean Air Districts&quot; initiative.
              </p>
              <button className="text-sm font-bold text-air-emerald flex items-center gap-2">
                Learn about Pilot Grants <Globe className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <AnimatedCard className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold opacity-60">Full Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl glass border-none focus:ring-2 focus:ring-air-blue outline-none" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold opacity-60">Email Address</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl glass border-none focus:ring-2 focus:ring-air-blue outline-none" placeholder="john@organization.com" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold opacity-60">Organization Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl glass border-none focus:ring-2 focus:ring-air-blue outline-none" placeholder="Global Health Corp" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold opacity-60">Organization Type</label>
                        <select className="w-full px-4 py-3 rounded-xl glass border-none focus:ring-2 focus:ring-air-blue outline-none appearance-none">
                          <option>Government</option>
                          <option>Hospital</option>
                          <option>School</option>
                          <option>Corporate</option>
                          <option>NGO / Research</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold opacity-60">Region of Interest</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl glass border-none focus:ring-2 focus:ring-air-blue outline-none" placeholder="e.g. Mumbai, Maharashtra" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold opacity-60">Message</label>
                      <textarea required rows={4} className="w-full px-4 py-3 rounded-xl glass border-none focus:ring-2 focus:ring-air-blue outline-none resize-none" placeholder="Tell us about your requirements..." />
                    </div>
                    
                    <button 
                      disabled={isLoading}
                      type="submit" 
                      className="w-full py-4 bg-air-blue text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-all disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Request Pilot Deployment <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-air-emerald/10 flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-12 h-12 text-air-emerald" />
                    </div>
                    <h2 className="text-3xl font-display font-bold mb-4">Request Received!</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm mx-auto">
                      Thank you for your interest in VayuNet. Our regional partnership manager will contact you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-air-blue font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </main>
  );
}
