"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

// Single-source icon imports from lucide-react
import { 
    LayoutDashboard, 
    Bookmark, 
    Briefcase, 
    FolderClosed, 
    CreditCard, 
    Settings, 
    Users, 
    LogOut,
    Building2,
    PlusCircle,
    HelpCircle,
    Home
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function DashboardSidebar() {
    const pathname = usePathname();
    const router = useRouter();
     const { data: session } = authClient.useSession();
      const user = session?.user;
      if(!user) {
        return null; // or a loading state
      }

    const handleLogout = () => {
        console.log("Logging out context session...");
        router.push("/");
    };

    // Role-Based Menu Architecture Configuration
    const navigationMenus = {
        seeker: [
            { label: "Dashboard", href: "/dashboard/seeker", icon: LayoutDashboard },
            { label: "Browse & Apply", href: "/dashboard/jobs", icon: Briefcase },
            { label: "Saved Jobs", href: "/dashboard/saved", icon: Bookmark },
            { label: "My Applications", href: "/dashboard/applications", icon: FolderClosed },
            { label: "Subscription & Billing", href: "/dashboard/billing", icon: CreditCard },
            { label: "Settings", href: "/dashboard/settings", icon: Settings },
        ],
        recruiter: [
            { label: "Dashboard", href: "/dashboard/recruiter", icon: LayoutDashboard },
            { label: "My Company", href: "/dashboard/recruiter/company", icon: Building2 },
            { label: "Manage Jobs", href: "/dashboard/recruiter/jobs", icon: FolderClosed },
            { label: "Applications", href: "/dashboard/applications", icon: Settings },
        ],
        admin: [
            { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
            { label: "Manage Users", href: "/admin/users", icon: Users },
            { label: "Manage Companies", href: "/admin/companies", icon: Building2 },
            { label: "Manage Jobs", href: "/admin/jobs", icon: Briefcase },
            { label: "Payments & Subs", href: "/admin/payments", icon: CreditCard },
            { label: "Settings", href: "/admin/settings", icon: Settings },
        ]
    };

    // Global Public Routes visible to all dashboard users
    const publicLinks = [
        { label: "Home", href: "/", icon: Home },
        { label: "Browse Jobs", href: "/jobs", icon: Briefcase },
        { label: "Companies", href: "/companies", icon: Building2 },
        { label: "Pricing", href: "/pricing", icon: HelpCircle },
    ];

    const currentRoleMenu = navigationMenus[user.role.toLowerCase()] || [];

    return (
        <aside className="sticky top-0 left-0 hidden md:flex h-screen w-64 flex-col border-r border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            
            {/* Logo Wrapper Container */}
            <div className="mb-6 flex items-center gap-2.5 px-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-lg shadow-sm shadow-blue-500/20">
                    H
                </div>
                <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Hire<span className="text-blue-600">Loop</span>
                </span>
            </div>

            {/* User Profile Summary Card */}
            <div className="mb-6 flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50/50 p-3 dark:border-zinc-900 dark:bg-zinc-900/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm overflow-hidden">
                    {user.avatarUrl ? (
                        <img src={user.avatarUrl} alt={user.name} className="h-full w-full object-cover" />
                    ) : (
                        user.name.charAt(0).toUpperCase()
                    )}
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-50">{user.name}</p>
                    <p className="truncate text-xs text-zinc-500 dark:text-zinc-400 mb-0.5">{user.email}</p>
                    <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-950/40 px-1.5 py-0.5 text-[10px] font-medium text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30 uppercase tracking-wider">
                        {user.role}
                    </span>
                </div>
            </div>

            {/* Scrollable Nav Items Links area */}
            <div className="flex flex-1 flex-col gap-6 overflow-y-auto pr-1 select-none scrollbar-thin">
                
                {/* Core Role Specific Dashboard Routes Links */}
                <div>
                    <p className="px-2.5 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                        Management
                    </p>
                    <nav className="space-y-1">
                        {currentRoleMenu.map((item, index) => {
                            const IconComponent = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                                        isActive
                                            ? "bg-blue-600 text-white shadow-sm shadow-blue-500/10"
                                            : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                                    }`}
                                >
                                    <IconComponent size={18} className={isActive ? "text-white" : "text-zinc-400 dark:text-zinc-500"} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Shared Platform Links */}
                <div>
                    <p className="px-2.5 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                        Marketplace
                    </p>
                    <nav className="space-y-1">
                        {publicLinks.map((item, index) => {
                            const IconComponent = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                                        isActive
                                            ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50"
                                            : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                                    }`}
                                >
                                    <IconComponent size={18} className="text-zinc-400 dark:text-zinc-500" />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Fixed Action Bottom Section */}
            <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-900">
                <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/30 transition-all outline-none"
                >
                    <LogOut size={18} className="text-red-500" />
                    Logout
                </button>
            </div>

        </aside>
    );
}