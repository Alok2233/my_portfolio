import React from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen bg-[#0F172A] text-white px-4 py-16">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 text-orange-500">Contact Me</h2>
        <p className="mb-8 text-gray-300">
          Let's connect! Drop a message and I’ll get back to you shortly.
        </p>

        <form
          className="relative bg-[#1e1b3a]/70 rounded-xl p-6 border border-orange-400/30 shadow-xl backdrop-blur-md hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! I’ll get back to you soon.");
          }}
        >
          <div>
            <label className="block text-left text-sm font-medium text-gray-200 mb-1">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 border border-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 border border-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-gray-200 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              required
              placeholder="Your message..."
              className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 border border-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
