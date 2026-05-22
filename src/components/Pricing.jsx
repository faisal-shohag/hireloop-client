import React from 'react';
import { motion } from 'framer-motion';

export default function PricingSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.3, staggerChildren: 0.12, delayChildren: 0.15 },
  };

  return (
    <motion.div
      className="w-full  py-16 px-4 transition-colors duration-300 bg-slate-50 dark:bg-[#0c0c0e] text-slate-900 dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Toggle Switch */}
        <motion.div
          className="inline-flex items-center gap-1 p-1 mb-12 rounded-full border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#16161a] shadow-sm"
          {...fadeInUp}
        >
          <div className="px-5 py-2 text-sm font-medium rounded-full bg-slate-900 text-white dark:bg-white dark:text-black shadow">
            Monthly
          </div>
          <div className="relative flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full text-slate-500 dark:text-zinc-400">
            Yearly
            <span className="bg-fuchsia-600 text-white text-[11px] font-bold px-1.5 py-0.5 rounded-full">
              25%
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Card 1: Starter */}
          <motion.div
            className="flex flex-col justify-between p-8 rounded-3xl border bg-white dark:bg-[#0a0a0c] border-slate-200 dark:border-zinc-800/80 shadow-sm"
            variants={fadeInUp}
            whileHover={{ y: -6, boxShadow: "0px 12px 30px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800">
                    <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">Starter</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold tracking-tight">$0</span>
                  <span className="text-sm font-medium text-slate-400 dark:text-zinc-500 ml-1">/month</span>
                </div>
              </div>

              <p className="text-sm font-medium text-slate-800 dark:text-zinc-200 mb-5">
                Start building your insights hub:
              </p>

              <ul className="space-y-4 mb-8">
                {['Daily AI match brief (top 5)', 'Verified salary bands', 'Company insight dashboards', '1-click apply, unlimited'].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-400">
                    <div className="flex-shrink-0 mt-0.5 p-0.5 rounded-md bg-slate-100 dark:bg-zinc-900 text-slate-400 dark:text-zinc-500">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              className="w-full group flex items-center justify-between px-5 py-3.5 rounded-xl font-medium transition-all text-sm bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:bg-zinc-800"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span>Choose This Plan</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Card 2: Growth */}
          <motion.div
            className="flex flex-col justify-between p-8 rounded-3xl border bg-white dark:bg-[#161618] border-slate-300 dark:border-zinc-700 shadow-xl ring-2 ring-slate-400/20 dark:ring-zinc-700/50 scale-100 md:scale-[1.02]"
            variants={fadeInUp}
            whileHover={{ y: -6, boxShadow: "0px 12px 40px rgba(0,0,0,0.15)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">Growth</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold tracking-tight">$17</span>
                  <span className="text-sm font-medium text-slate-400 dark:text-zinc-500 ml-1">/month</span>
                </div>
              </div>

              <p className="text-sm font-medium text-slate-800 dark:text-zinc-200 mb-5">
                Start building your insights hub:
              </p>

              <ul className="space-y-4 mb-8">
                {['Daily AI match brief (top 5)', 'Verified salary bands', 'Company insight dashboards', '1-click apply, unlimited'].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-400">
                    <div className="flex-shrink-0 mt-0.5 p-0.5 rounded-md bg-slate-100 dark:bg-zinc-900 text-slate-400 dark:text-zinc-500">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              className="w-full group flex items-center justify-between px-5 py-3.5 rounded-xl font-medium transition-all text-sm bg-slate-900 text-white dark:bg-white dark:text-black hover:bg-slate-800 dark:hover:bg-zinc-100"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span>Choose This Plan</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Card 3: Premium */}
          <motion.div
            className="flex flex-col justify-between p-8 rounded-3xl border bg-white dark:bg-[#0a0a0c] border-slate-200 dark:border-zinc-800/80 shadow-sm"
            variants={fadeInUp}
            whileHover={{ y: -6, boxShadow: "0px 12px 30px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018.2 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">Premium</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold tracking-tight">$99</span>
                  <span className="text-sm font-medium text-slate-400 dark:text-zinc-500 ml-1">/month</span>
                </div>
              </div>

              <p className="text-sm font-medium text-slate-800 dark:text-zinc-200 mb-5">
                Start building your insights hub:
              </p>

              <ul className="space-y-4 mb-8">
                {['Everything in Growth', 'Multi-profile career portfolios', 'Shared talent rooms', 'Recruiter view (read-only)'].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-400">
                    <div className="flex-shrink-0 mt-0.5 p-0.5 rounded-md bg-slate-100 dark:bg-zinc-900 text-slate-400 dark:text-zinc-500">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              className="w-full group flex items-center justify-between px-5 py-3.5 rounded-xl font-medium transition-all text-sm bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:bg-zinc-800"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span>Choose This Plan</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
