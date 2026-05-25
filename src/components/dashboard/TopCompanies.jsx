import Link from "next/link";
import { Building2 } from "lucide-react";

export default function TopCompanies({ companies }) {
    const localCompanies = companies || [
        { name: "Google Inc.", industry: "Technology", location: "Mountain View", activeJobs: 24 },
        { name: "Meta Platforms", industry: "Social Media", location: "Menlo Park", activeJobs: 18 },
        { name: "Stripe", industry: "Fintech", location: "San Francisco", activeJobs: 12 },
        { name: "Tesla", industry: "Automotive", location: "Austin", activeJobs: 31 },
    ];

    return (
        <div className="w-full lg:w-[380px] bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">My Top Companies</h2>
                    <Link href="/dashboard/company" className="text-xs font-semibold text-zinc-500 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                        View all
                    </Link>
                </div>

                <div className="space-y-4">
                    {localCompanies.map((comp, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors">
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="h-10 w-10 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/50 flex items-center justify-center text-zinc-500 dark:text-zinc-400 shrink-0">
                                    <Building2 size={18} />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">{comp.name}</h4>
                                    <p className="text-xs text-zinc-400 dark:text-zinc-500 truncate mt-0.5">
                                        {comp.industry} • {comp.location}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right shrink-0 pl-2">
                                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{comp.activeJobs}</span>
                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mt-0.5">Active Jobs</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="w-full mt-6 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-all outline-none">
                View All Companies
            </button>
        </div>
    );
}