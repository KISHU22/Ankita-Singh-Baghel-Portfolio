"use client";

import { motion } from "framer-motion";
import { Search, Facebook, Instagram, BarChart3, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section className="bg-[#121212] py-24 px-8 border-t border-white/5 relative z-20">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Professional Summary header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter"
          >
            Data-Driven SEO & Social Strategies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto"
          >
            Experienced digital marketer with a strong track record in SEO performance optimization and social media growth. Proven ability to scale organic traffic, impressions, Discover visibility, reach, and link clicks using analytics-led decision making.
          </motion.p>
        </div>

        {/* Sections */}
        <div className="space-y-32">
          
          {/* SEO SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
          >
            <div className="md:col-span-5 relative">
              <div className="sticky top-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                    <Search size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">SEO Performance (Google Search Console)</h3>
                </div>
                <div className="mb-6 flex flex-wrap gap-2 text-sm">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">SEO Specialist</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">6–12 months</span>
                </div>
                <div className="text-gray-400 space-y-4 font-light">
                  <p><strong>Impact:</strong> Improved organic visibility and sustained traffic growth, demonstrating strong keyword coverage, content relevance, and long-term SEO stability.</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7 space-y-8">
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-semibold mb-6 flex items-center gap-2"><BarChart3 size={18} className="text-blue-400"/> Key Results</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-green-400 mt-1 shrink-0"/> <span><strong>245K+</strong> organic clicks</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-green-400 mt-1 shrink-0"/> <span><strong>18.1M+</strong> total impressions</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-green-400 mt-1 shrink-0"/> <span>Consistent daily and monthly traffic growth</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-green-400 mt-1 shrink-0"/> <span>Strong visibility across high-volume search queries</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-green-400 mt-1 shrink-0"/> <span>Stable long-term SEO performance (non-seasonal growth)</span></li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-semibold mb-6">Strategy & Execution</h4>
                <ul className="space-y-3 text-gray-400 text-sm list-disc pl-5">
                  <li>Search intent–based content optimization</li>
                  <li>On-page SEO improvements (titles, meta descriptions, internal linking)</li>
                  <li>CTR optimization using query-level performance analysis</li>
                  <li>Continuous monitoring and optimization via GSC data</li>
                  <li>Performance tracking and reporting using Excel</li>
                </ul>
              </div>
            </div>
          </motion.div>


          {/* FACEBOOK SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
          >
            <div className="md:col-span-5 md:order-2 relative">
              <div className="sticky top-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-600/10 rounded-xl text-blue-500">
                    <Facebook size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Facebook Performance</h3>
                </div>
                <div className="text-gray-400 space-y-4 font-light">
                  <p><strong>Impact:</strong> Significant growth in reach and link clicks, contributing to increased website traffic from social platforms.</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7 md:order-1 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">27.8M</div>
                  <div className="text-sm text-gray-400">Total Views <br/><span className="text-green-400 text-xs">+191%</span></div>
                </div>
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">59.5K</div>
                  <div className="text-sm text-gray-400">Link Clicks <br/><span className="text-green-400 text-xs">+34.7%</span></div>
                </div>
                <div className="col-span-2 p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">12.5K</div>
                  <div className="text-sm text-gray-400">Content Interactions <span className="text-green-400 text-xs ml-1">+74%</span></div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-semibold mb-6">Strategy</h4>
                <ul className="space-y-3 text-gray-400 text-sm list-disc pl-5">
                  <li>Content calendar planning and execution</li>
                  <li>Engagement-focused content formats</li>
                  <li>Caption and CTA optimization</li>
                  <li>Performance analysis using Meta Business Suite</li>
                </ul>
              </div>
            </div>
          </motion.div>


          {/* INSTAGRAM SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
          >
            <div className="md:col-span-5 relative">
              <div className="sticky top-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400">
                    <Instagram size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Instagram Growth</h3>
                </div>
                <div className="text-gray-400 space-y-4 font-light">
                  <p><strong>Impact:</strong> Dramatic increase in reach, engagement, and link clicks, successfully converting social visibility into measurable traffic and follower growth.</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7 space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">18.6M</div>
                  <div className="text-xs text-gray-400">Views <span className="text-green-400 block">+30,000%</span></div>
                </div>
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">16.9M</div>
                  <div className="text-xs text-gray-400">Reach <span className="text-green-400 block">+498.9%</span></div>
                </div>
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">157.5K</div>
                  <div className="text-xs text-gray-400">Link Clicks <span className="text-green-400 block">+457%</span></div>
                </div>
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">14.8K</div>
                  <div className="text-xs text-gray-400">New Followers <span className="text-green-400 block">+131.6%</span></div>
                </div>
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">104K</div>
                  <div className="text-xs text-gray-400">Interactions</div>
                </div>
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">184.4K</div>
                  <div className="text-xs text-gray-400">Profile Visits</div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-semibold mb-6">Strategy</h4>
                <ul className="space-y-3 text-gray-400 text-sm list-disc pl-5">
                  <li>Reel-focused content strategy</li>
                  <li>Hook-based captions and CTA optimization</li>
                  <li>Consistent posting and performance tracking</li>
                  <li>Scaling high-performing content formats</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>


        {/* Skills & Tools Grid */}
        <div className="mt-32 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h3 className="text-2xl font-bold text-white mb-6">Core Skills</h3>
             <ul className="grid grid-cols-1 gap-4 text-gray-400">
               <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/50" /> SEO Strategy & Execution</li>
               <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/50" /> On-Page SEO & Content Optimization</li>
               <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/50" /> Search Console & GA4 Analysis</li>
               <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/50" /> Keyword & Query Performance Analysis</li>
               <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/50" /> Social Media Strategy & Management</li>
               <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/50" /> Performance Reporting & Data Analysis</li>
             </ul>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
           >
             <h3 className="text-2xl font-bold text-white mb-6">Tools & Platforms</h3>
             <div className="flex flex-wrap gap-3">
               {["Google Search Console", "Google Analytics (GA4)", "Meta Business Suite", "Excel / Google Sheets", "CMS Platforms", "Social Media Analytics"].map((tool) => (
                 <span key={tool} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-gray-300 text-sm">
                   {tool}
                 </span>
               ))}
             </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
