import { ApiServer } from "@/lib/api-server";
import { ChevronDown } from "lucide-react";
import FilterSidebar from "@/components/jobs/FilterSidebar";
import JobCard from "@/components/jobs/JobCard";
import JobSearchBar from "@/components/jobs/JobSearchbar";

const BrowseJobsPage = async ({ searchParams }) => {
  // Resolve search parameters safely
  const currentParams = await searchParams;
  const jobTitle = currentParams?.jobTitle || "";
  const jobType = currentParams?.jobType || "";

  const { data: jobs } = await ApiServer(`/jobs?jobTitle=${jobTitle}&type=${jobType}`, "GET");

  return (
    <div className="min-h-screen max-w-7xl mx-auto w-full dark:bg-zinc-950 p-4 sm:p-6 md:p-8 space-y-6 transition-colors duration-300">
      {/* Decoupled Client Search Bar Component Container */}
      <JobSearchBar />

      {/* Responsive Two-Column Grid Setup */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Hand: Filter Sidebar Element */}
        <FilterSidebar />

        {/* Right Hand: Dynamic Jobs List Feed Display Area */}
        <div className="flex-1 w-full space-y-4">
          {/* List Title Row with Context Counter */}
          <div className="flex items-center justify-between px-1">
            <h1 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              {jobTitle
                ? `Search results for "${jobTitle}" (${jobs?.length || 0})`
                : `Found ${jobs?.length || 0} Professional Jobs`}
            </h1>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 cursor-pointer select-none hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
              <span>
                Sort by:{" "}
                <span className="text-zinc-800 dark:text-zinc-100">
                  Most Recent
                </span>
              </span>
              <ChevronDown size={14} className="mt-0.5" />
            </div>
          </div>

          {/* Jobs Main Container Interloop Map Grid */}
          {!jobs || jobs.length === 0 ? (
            <div className="w-full text-center py-16 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white/50 dark:bg-zinc-900/10">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                No open job positions match your criteria at this moment.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseJobsPage;
