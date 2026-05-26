"use client";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function JobSearchBar() {
  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(window.location.search);

    params.set("jobTitle", e.target.search.value);

    router.push(`/browse-jobs?${params.toString()}`);
  };

  return (
    <div className="w-full bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-4 shadow-sm">
      <form
        onSubmit={handleSearchSubmit}
        className="flex flex-col sm:flex-row items-center gap-3 w-full"
      >
        <div className="relative w-full flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
            <Search className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
          </div>
          <input
            type="text"
            name="search"
            placeholder="Search by job title..."
            className="h-11 w-full rounded-xl bg-zinc-100/60 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/60 pl-10 pr-4 text-sm text-zinc-800 placeholder-zinc-400 dark:text-zinc-100 dark:placeholder-zinc-500 outline-none focus:border-blue-500/50 dark:focus:border-blue-500/40 transition-all"
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-sm shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.98] transition-all outline-none whitespace-nowrap"
        >
          Search Jobs
        </button>
      </form>
    </div>
  );
}
