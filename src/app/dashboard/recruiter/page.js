"use client";
import RecentApplications from "@/components/dashboard/RecentApplications";
import StatsRow from "@/components/dashboard/StateRow";
import TopCompanies from "@/components/dashboard/TopCompanies";
export default function RecruiterDashboardOverviewPage({ adminName = "Alex Sterling" }) {
    return (
        <div className="min-h-screen w-full bg-zinc-50 dark:bg-zinc-950 px-6 py-8 space-y-8 transition-colors duration-300">
            
            {/* Header Greeting Segment */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
                    Welcome back, {adminName}
                </h1>
            </div>

            {/* Metrics Counter Section Row */}
            <StatsRow />

            {/* Lower Complex Data Layout Modules Section */}
            <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                <RecentApplications />
                <TopCompanies />
            </div>

        </div>
    );
}