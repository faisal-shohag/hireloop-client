import React from 'react';

const CallToAction = () => {
  return (
    <section className="relative w-full  bg-gray-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 py-32 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center">
      {/* Background Image & Grid Overlay */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-20 dark:opacity-80 pointer-events-none"
        style={{ backgroundImage: `url('/cta-bg.png')` }}
      />
      
      {/* Optional radial gradient to mimic the soft illumination effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.15] mb-6 max-w-2xl text-gray-900 dark:text-white">
          Your next role is <br /> already looking for you
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-normal max-w-xl mb-10 leading-relaxed tracking-wide">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        {/* Interactive CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Action */}
          <button 
            type="button"
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer bg-white text-gray-900 hover:bg-zinc-100 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-sm"
          >
            Create a free account
          </button>

          {/* Secondary Action */}
          <button 
            type="button"
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer bg-gray-900 text-white hover:bg-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 dark:border dark:border-zinc-700"
          >
            View pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;