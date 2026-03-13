"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Urban Platter",
    url: "https://urbanplatter.com/",
    role: "SEO & Digital Strategy",
    description: "Driving organic growth and optimizing e-commerce performance for a leading food brand.",
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400"
  },
  {
    id: 2,
    title: "Ocean Enterprises",
    url: "https://oceanenterprises.com/",
    role: "SEO Optimization",
    description: "Enhancing search visibility and online presence for specialized diving equipment and training.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400"
  },
  {
    id: 3,
    title: "Infertility and IVF Indore",
    url: "https://infertilityandivfindore.com/",
    role: "Digital Marketing & SEO",
    description: "Strategic search optimization to improve local visibility and patient acquisition in healthcare.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400"
  },
  {
    id: 4,
    title: "AMG24x7 Blog",
    url: "https://blog.amg24x7.com/",
    role: "Content Writer",
    description: "Authored engaging and SEO-optimized content to drive inbound traffic and reader engagement.",
    color: "from-green-500/20 to-teal-500/20",
    iconColor: "text-green-400"
  },
  {
    id: 5,
    title: "Youth Ki Awaaz",
    url: "https://www.youthkiawaaz.com/author/pr24into7gmail-com/",
    role: "Contributing Author",
    description: "Published articles and content on prominent platforms to build authority and reach broader audiences.",
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400"
  },
  {
    id: 6,
    title: "Bigul",
    url: "https://bigul.co/",
    role: "SEO & SMM",
    description: "Managed end-to-end SEO and Social Media Marketing strategies to boost brand visibility, online engagement, and audience growth.",
    color: "from-indigo-500/20 to-cyan-500/20",
    iconColor: "text-indigo-400"
  }
];

export default function RealProjects() {
  return (
    <section className="relative z-20 bg-[#121212] py-32 px-8 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto">
            A selection of live websites demonstrating successful implementations of data-driven SEO and digital marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm overflow-hidden hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex justify-between items-start">
                  <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${project.iconColor}`}>
                    <Globe size={28} />
                  </div>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-200 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
                    {project.role}
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 relative z-20">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-blue-300 transition-colors"
                  >
                    Visit Website <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
