import { FileText, Users2, Zap, CheckCircle2 } from "lucide-react";

export default function StatsRow({ stats }) {
    const cardData = [
        { label: "Total Job Posts", value: stats?.totalPosts || "48", icon: FileText },
        { label: "Total Applicants", value: stats?.totalApplicants || "1,284", icon: Users2 },
        { label: "Active Jobs", value: stats?.activeJobs || "18", icon: Zap },
        { label: "Jobs Closed", value: stats?.jobsClosed || "32", icon: CheckCircle2 },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cardData.map((card, idx) => {
                const Icon = card.icon;
                return (
                    <div 
                        key={idx} 
                        className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between min-h-[140px] shadow-sm transition-all"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400">
                            <Icon size={20} />
                        </div>
                        <div className="mt-4 space-y-1">
                            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                                {card.label}
                            </p>
                            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                                {card.value}
                            </h3>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}