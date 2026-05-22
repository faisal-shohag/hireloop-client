"use client";

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.3, staggerChildren: 0.12, delayChildren: 0.1 },
};

const CallToAction = () => {
  return (
    <motion.section
      className="relative w-full  bg-gray-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 py-32 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image & Grid Overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-20 dark:opacity-80 pointer-events-none"
        style={{ backgroundImage: `url('/cta-bg.png')` }}
      />

      {/* Optional radial gradient to mimic the soft illumination effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Main Headline */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.15] mb-6 max-w-2xl text-gray-900 dark:text-white"
          variants={fadeInUp}
        >
          Your next role is <br /> already looking for you
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-normal max-w-xl mb-10 leading-relaxed tracking-wide"
          variants={fadeInUp}
        >
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </motion.p>

        {/* Interactive CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Primary Action */}
          <motion.button
            type="button"
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer bg-white text-gray-900 hover:bg-zinc-100 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            Create a free account
          </motion.button>

          {/* Secondary Action */}
          <motion.button
            type="button"
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer bg-gray-900 text-white hover:bg-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 dark:border dark:border-zinc-700"
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            View pricing
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CallToAction;
