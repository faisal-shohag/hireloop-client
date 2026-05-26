import { ApiServer } from "@/lib/api-server";
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  Calendar,
  Bookmark, 
  ExternalLink, 
  Building2, 
  CheckCircle2 
} from "lucide-react";

const JobDetailsPage = async ({ params }) => {
  const { id } = await params;
  
  // Fetching the job object matching your exact backend array format
  const { data: job } = await ApiServer(`/jobs/${id}`, "GET");

  if (!job) {
    return (
      <div className="min-h-[60vh] max-w-7xl mx-auto flex items-center justify-center text-zinc-500 dark:text-zinc-400">
        <p className="text-sm font-medium">Job position details could not be found.</p>
      </div>
    );
  }

  // Exact data property mapping: accessing the lookup array safe fallback
  const company = job.companyInfo?.[0] || {};

  // Formatter for structural currency handling using job.currency directly
  const formatSalary = (val, currencySymbol = "USD") => {
    const num = parseInt(val, 10);
    const formattedNum = num >= 1000 ? `${(num / 1000).toFixed(0)}k` : `${num}`;
    return `${formattedNum} ${currencySymbol}`;
  };

  // Formatter for the deadline property string (e.g., "2026-05-30")
  const formatDate = (dateStr) => {
    if (!dateStr) return "Open";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto  dark:bg-zinc-950 p-4 sm:p-6 md:p-8 space-y-6 transition-colors duration-300">
      
      {/* 1. HERO HEADER BANNER BLOCK */}
      <div className="w-full bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex items-start sm:items-center gap-4 min-w-0">
            
            {/* Logo box mapping company.logo property */}
            <div className="h-14 w-14 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/50 p-2 flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
              {company.logo ? (
                <img 
                  src={company.logo} 
                  alt={`${company.companyName} logo`} 
                  className="h-full w-full object-contain"
                />
              ) : (
                <Briefcase className="size-6 text-zinc-400" />
              )}
            </div>

            {/* job.jobTitle & company.companyName properties usage */}
            <div className="min-w-0 space-y-1">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 truncate">
                {job.jobTitle}
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold truncate">
                  {company.companyName || "Unknown Employer"}
                </span>
                {company.status === "approved" && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md font-bold select-none">
                    <CheckCircle2 className="size-3" /> Verified Employer
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Action Interaction Buttons */}
          <div className="flex items-center gap-3 self-end sm:self-center shrink-0 w-full sm:w-auto">
            <button className="p-3 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all outline-none">
              <Bookmark className="size-4" />
            </button>
            <button className="flex-1 sm:flex-initial h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-all outline-none active:scale-[0.98]">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* 2. SPECIFICATION METRICS OVERVIEW CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { 
            label: "Salary Range", 
            val: `${formatSalary(job.salaryMin, job.currency)} - ${formatSalary(job.salaryMax, job.currency)}`, 
            icon: DollarSign 
          },
          { 
            label: "Location", 
            val: job.location, 
            icon: MapPin 
          },
          { 
            label: "Job Type", 
            val: job.jobType, 
            icon: Clock 
          },
          { 
            label: "Application Deadline", 
            val: formatDate(job.deadline), 
            icon: Calendar 
          }
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-4 flex flex-col justify-between min-h-[95px] shadow-sm">
              <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                <Icon className="size-3.5 text-zinc-400/80" />
                <span>{item.label}</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-100 truncate capitalize mt-2">
                {item.val}
              </p>
            </div>
          );
        })}
      </div>

      {/* 3. DUAL GRID MAIN FRAME */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Left column: job.description & dynamic tags mapping */}
        <div className="flex-1 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Job Description
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
              {job.description}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Job Category Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-semibold px-3 py-1 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200/40 dark:border-zinc-700/40 rounded-lg capitalize">
                {job.jobCategory}
              </span>
              <span className="text-xs font-semibold px-3 py-1 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200/40 dark:border-zinc-700/40 rounded-lg capitalize">
                {job.jobType}
              </span>
            </div>
          </div>

        </div>

        {/* Right column: Company Overview Sidebar using companyInfo properties */}
        <div className="w-full lg:w-[360px] bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm space-y-5 shrink-0">
          <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight border-b border-zinc-100 dark:border-zinc-800/60 pb-3">
            Company Overview
          </h2>

          {/* Decorative Media Frame Container */}
          <div className="relative w-full h-36 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/60 p-4 flex items-center justify-center overflow-hidden">
            <Building2 className="size-10 text-zinc-200 dark:text-zinc-800 z-0 absolute" />
            {company.logo && (
              <img 
                src={company.logo} 
                alt={company.companyName} 
                className="max-w-full max-h-full object-contain z-10 relative" 
              />
            )}
          </div>

          {/* Table Specs representing company lookup details */}
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-0.5">
              <span className="font-medium text-zinc-400 uppercase text-[10px] tracking-wider">Size Range</span>
              <span className="font-bold text-zinc-800 dark:text-zinc-200">{company.employeeCount || "N/A"} Employees</span>
            </div>
            <div className="flex justify-between items-center py-0.5 border-t border-zinc-100 dark:border-zinc-800/50 pt-3">
              <span className="font-medium text-zinc-400 uppercase text-[10px] tracking-wider">Industry</span>
              <span className="font-bold text-zinc-800 dark:text-zinc-200 capitalize">{company.category || "N/A"}</span>
            </div>
            <div className="flex justify-between items-center py-0.5 border-t border-zinc-100 dark:border-zinc-800/50 pt-3">
              <span className="font-medium text-zinc-400 uppercase text-[10px] tracking-wider">Headquarters</span>
              <span className="font-bold text-zinc-800 dark:text-zinc-200 truncate max-w-[180px] text-right block">{company.location || "N/A"}</span>
            </div>
          </div>

          {/* Website Link using company.website */}
          {company.website && (
            <a 
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 flex items-center justify-center gap-2 transition-all group outline-none"
            >
              <span>Visit Website</span>
              <ExternalLink className="size-3.5 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>

      </div>

    </div>
  );
};

export default JobDetailsPage;