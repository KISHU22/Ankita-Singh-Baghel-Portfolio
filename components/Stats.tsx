"use client";

import { motion } from "framer-motion";

const stats = [
  { id: 1, label: "Facebook Views", value: "27.8M+" },
  { id: 2, label: "Instagram Views", value: "18.6M+" },
  { id: 3, label: "YouTube Views", value: "5.6M+" },
  { id: 4, label: "Subscribers", value: "10,000+" },
];

export default function Stats() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            Proven Impact
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Driving massive reach and engagement across digital platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-center hover:bg-white/[0.06] hover:scale-[1.02] transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-400 mb-3">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
