"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const reviewImages = [
  "/reviews/review_1.jpeg",
  "/reviews/review_2.jpeg",
  "/reviews/review_3.jpeg",
  "/reviews/review_4.jpeg",
  "/reviews/review_5.jpeg",
  "/reviews/review_6.jpeg",
  "/reviews/review_7.jpeg",
  "/reviews/review_8.jpeg",
  "/reviews/review_9.jpeg",
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal when Escape key is pressed
  if (typeof window !== "undefined") {
    window.onkeydown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
  }

  return (
    <>
      <section className="relative z-20 bg-[#121212] min-h-screen py-32 px-8 overflow-hidden border-t border-white/5">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter text-center">
            Work Reviews & Analytics
          </h2>
          <p className="text-gray-400 text-center text-xl font-light mb-16 max-w-2xl mx-auto">
            Real dashboard metrics and performance evidence showcasing the impact of strategic digital marketing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                onClick={() => setSelectedImage(src)}
                className="group relative rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md overflow-hidden hover:bg-white/[0.05] transition-colors duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                <div className="aspect-[4/3] w-full bg-black/50 overflow-hidden relative">
                   <img 
                      src={src} 
                      alt={`Analytics Review ${i + 1}`} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                   />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Full size review"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
