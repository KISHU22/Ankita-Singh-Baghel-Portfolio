"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[#121212] py-16 px-8 relative z-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-[2rem] bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Connect
            </h2>npm run build
            <p className="text-gray-300 mb-10 max-w-xl mx-auto">
              Actively seeking SEO / Digital Marketing opportunities. Reach out
              for collaborations or opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/ankita-singh-baghel/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white font-medium"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href="mailto:ankitasb26@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white font-medium"
              >
                <Mail size={20} /> Email Me
              </a>
              <a
                href="https://drive.google.com/file/d/1vWVqcy8Uecz7K7H_RI_7uwTj9-NfFRPE/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-full text-gray-300 font-medium"
              >
                <FileText size={20} /> Resume
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-12 flex items-center justify-center gap-2">
              📍 Open to SEO Specialist / Senior Digital Marketing roles
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
