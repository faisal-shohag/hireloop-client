import Link from "next/link";

export default function RecentApplications({ applications }) {
    // Status style maps matching the UI colors precisely
    const statusStyles = {
        interviewing: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
        new: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50",
        reviewing: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
        rejected: "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20",
    };

    const localApps = applications || [
        { name: "Julianne Moore", role: "Senior Product Designer", date: "Oct 24, 2023", exp: "6 years", status: "interviewing" },
        { name: "Robert Downey", role: "Backend Engineer", date: "Oct 23, 2023", exp: "4 years", status: "new" },
        { name: "Emma Stone", role: "Marketing Lead", date: "Oct 22, 2023", exp: "8 years", status: "reviewing" },
        { name: "Chris Pratt", role: "Product Manager", date: "Oct 21, 2023", exp: "5 years", status: "rejected" },
    ];

    return (
        <div className="flex-1 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Recent Applications</h2>
                <Link href="/dashboard/applications" className="text-xs font-semibold text-zinc-500 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                    View all
                </Link>
            </div>

            <div className="overflow-x-auto select-none">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-zinc-100 dark:border-zinc-800/80 text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                            <th className="pb-3.5 font-medium">Candidate Name</th>
                            <th className="pb-3.5 font-medium">Role</th>
                            <th className="pb-3.5 font-medium">Date Applied</th>
                            <th className="pb-3.5 font-medium">Experience</th>
                            <th className="pb-3.5 font-medium text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/50 text-sm text-zinc-700 dark:text-zinc-300">
                        {localApps.map((app, idx) => (
                            <tr key={idx} className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors">
                                <td className="py-4 flex items-center gap-3 pr-4">
                                    <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-medium text-xs text-zinc-600 dark:text-zinc-400 shrink-0">
                                        {app.name.charAt(0)}
                                    </div>
                                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 truncate">{app.name}</span>
                                </td>
                                <td className="py-4 text-zinc-500 dark:text-zinc-400 pr-4 truncate max-w-[180px]">{app.role}</td>
                                <td className="py-4 text-zinc-500 dark:text-zinc-400 pr-4 whitespace-nowrap">{app.date}</td>
                                <td className="py-4 text-zinc-500 dark:text-zinc-400 pr-4 whitespace-nowrap">{app.exp}</td>
                                <td className="py-4 text-right whitespace-nowrap">
                                    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium capitalize tracking-wide ${statusStyles[app.status.toLowerCase()] || ""}`}>
                                        {app.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}