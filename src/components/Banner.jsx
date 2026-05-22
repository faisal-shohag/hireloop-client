"use client";

import React from "react";
import { Search, MapPin, BriefcaseBusiness, BarChart2, SearchCheck, Star } from "lucide-react";
import Image from "next/image";

const popularTags = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

const stats = [
  { icon: <BriefcaseBusiness size={20} />, value: "50K", label: "Active Jobs" },
  { icon: <BarChart2 size={20} />, value: "12K", label: "Companies" },
  { icon: <SearchCheck size={20} />, value: "2M", label: "Job Seekers" },
  { icon: <Star size={20} />, value: "97%", label: "Satisfication Rate" },
];

const Banner = () => {
  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen px-4 pb-12 overflow-hidden bg-white dark:bg-gray-950">
      {/* Globe background */}
      <Image
        src="/globe.png"
        alt="Globe"
        fill
        className="object-cover object-center opacity-30 dark:opacity-100"
        priority
      />

      {/* Top search content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 pt-20">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white text-sm font-semibold px-5 py-2 rounded-full">
          <span>💼</span>
          <span>
            50,000+{" "}
            <span className="text-gray-500 dark:text-gray-400 font-normal tracking-widest uppercase text-xs">
              New Jobs This Month
            </span>
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white max-w-3xl leading-tight">
          Find Your <span className="text-indigo-500">Dream Job</span> <br /> With HireLoop
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 dark:text-gray-400 max-w-xl text-base md:text-lg">
          Connect with top companies and discover opportunities that match your skills and aspirations.
        </p>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-2xl bg-gray-100 dark:bg-gray-900 rounded-full px-4 py-2 gap-2 border border-gray-200 dark:border-transparent">
          <Search className="text-gray-400 shrink-0" size={18} />
          <input
            type="text"
            placeholder="Job title, skill or company"
            className="bg-transparent text-gray-900 dark:text-white placeholder-gray-400 text-sm flex-1 outline-none"
          />
          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 shrink-0" />
          <MapPin className="text-gray-400 shrink-0" size={18} />
          <input
            type="text"
            placeholder="Location or Remote"
            className="bg-transparent text-gray-900 dark:text-white placeholder-gray-400 text-sm flex-1 outline-none"
          />
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full shrink-0 transition-colors">
            <Search size={18} />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-transparent text-sm px-4 py-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom stats content */}
      <div className="relative z-10 flex flex-col items-center gap-8 w-full">
        <p className="text-gray-700 dark:text-white text-lg md:text-xl text-center">
          Assisting over <span className="font-bold">15,000 job seekers</span>
          <br /> find their dream positions.
        </p>

        <div className="w-full max-w-4xl grid grid-cols-4 gap-3">
          {stats.map(({ icon, value, label }) => (
            <div
              key={label}
              className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-transparent rounded-2xl p-4 flex flex-col gap-4 text-gray-900 dark:text-white"
            >
              <span className="text-gray-400">{icon}</span>
              <div>
                <p className="text-3xl font-bold">{value}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
