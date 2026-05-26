"use client";

import { Bookmark, Briefcase, DollarSign, Flame, Zap } from "lucide-react";
import Link from "next/link";

export default function JobCard({ job }) {
  // Format currency display safely
  const formatSalary = (val) => {
    const num = parseInt(val, 10);
    return num >= 1000 ? `$${(num / 1000).toFixed(0)}k` : `$${num}`;
  };

  // Determine decorative badge configurations
  const isHotJob = parseInt(job.salaryMax, 10) >= 75000; 

  return (
    <Link href={`/browse-jobs/${job._id}`}><div className="group flex flex-col sm:flex-row items-start justify-between gap-4 p-5 sm:p-6 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl shadow-sm hover:shadow-md dark:hover:shadow-black/20 dark:hover:border-zinc-700/60 transition-all duration-200">
      <div className="flex items-start gap-4 min-w-0">
        {/* Placeholder Company Avatar Frame */}
        <div className="h-12 w-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/50 flex items-center justify-center text-zinc-400 dark:text-zinc-500 shrink-0">
          <Briefcase className="size-5" />
        </div>

        {/* Core Job Meta Fields */}
        <div className="min-w-0 space-y-1.5">
          <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {job.jobTitle}
          </h3>
          
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
             {job.location}
          </p>

          {/* Dynamic Render Badges Strip Container */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {/* Salary Range Badge */}
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/40 dark:border-zinc-700/30">
              <DollarSign className="size-3 text-zinc-400" />
              {formatSalary(job.salaryMin)} - {formatSalary(job.salaryMax)}
            </span>

            {/* Job Nature Type Badge */}
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/40 dark:border-zinc-700/30 capitalize">
              {job.jobType}
            </span>

            {/* Action Badges matching specific rules in layout */}
            {isHotJob ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <Flame className="size-3" />
                Hot Job
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <Zap className="size-3" />
                Easy Apply
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Interaction Side Node */}
      <button className="self-end sm:self-start p-2 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700/40 transition-all outline-none group/btn">
        <Bookmark className="size-4 group-hover/btn:scale-105 transition-transform" />
      </button>
    </div></Link>
  );
}