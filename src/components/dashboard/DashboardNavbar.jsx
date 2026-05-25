"use client";

import { useState } from "react";
import { Search, Bell, ChevronDown, Sparkles } from "lucide-react";
import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function AdminTopNavbar() {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [searchFocused, setSearchFocused] = useState(false);
    const [hasNotifications, setHasNotifications] = useState(true);

    return (
        <header className="w-full px-6 pt-4 pb-2 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
            {/* Main Navbar Container with Theme-Adaptive Backdrops & Borders */}
            <div className="flex h-16 w-full items-center justify-between border border-zinc-200/80 bg-white/70 dark:border-zinc-800/80 dark:bg-zinc-900/40 px-6 backdrop-blur-md rounded-2xl shadow-sm dark:shadow-2xl dark:shadow-black/40 transition-all duration-300">
                
                {/* LEFT SECTION: Command Search Bar */}
                <div className="flex flex-1 max-w-xl items-center">
                    <div className={`relative w-full group transition-all duration-300 rounded-xl ${
                        searchFocused 
                            ? "bg-white dark:bg-zinc-900/90 ring-1 ring-blue-500/50 shadow-md dark:shadow-lg dark:shadow-blue-500/5" 
                            : "bg-zinc-100/60 border border-zinc-200 dark:bg-zinc-950/40 dark:border-zinc-800/60 hover:bg-zinc-200/40 dark:hover:bg-zinc-900/50"
                    }`}>
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                            <Search className={`h-4 w-4 transition-colors duration-200 ${
                                searchFocused ? "text-blue-500" : "text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-500 dark:group-hover:text-zinc-400"
                            }`} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search applications, jobs, or talent..."
                            onFocus={() => setSearchFocused(true)}
                            onBlur={() => setSearchFocused(false)}
                            className="h-10 w-full rounded-xl bg-transparent pl-10 pr-4 text-sm text-zinc-800 placeholder-zinc-400 dark:text-zinc-100 dark:placeholder-zinc-500 outline-none transition-all"
                        />
                        {/* K-Shortcut Badge */}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none select-none">
                            <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-0.5 rounded border border-zinc-200 bg-zinc-50 px-1.5 font-mono text-[10px] font-medium text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-500">
                                <span className="text-xs">⌘</span>K
                            </kbd>
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION: Notification Bell & Profile Controls */}
                <div className="flex items-center gap-4 ml-4">
                    
                    {/* Operational Cluster Tag */}
                    <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                        <Sparkles className="h-3 w-3 text-amber-500 animate-pulse" />
                        <span>Live Ops Panel</span>
                    </div>

                    {/* Notification Bell */}
                    <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-500 dark:border-zinc-800/60 dark:bg-zinc-950/40 dark:text-zinc-400 transition-all hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-900/80 dark:hover:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700 outline-none">
                        <Bell className="h-[18px] w-[18px]" />
                        {hasNotifications && (
                            <span className="absolute top-2.5 right-2.5 flex h-2 w-2 rounded-full bg-blue-500 ring-4 ring-white dark:ring-zinc-900" />
                        )}
                    </button>

                    {/* Gradient Layout Divider */}
                    <div className="h-6 w-px bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

                    {/* User Profile Trigger / Loading Skeleton */}
                    {isPending ? (
                        <div className="flex items-center gap-3 p-1.5 animate-pulse">
                            <div className="w-9 h-9 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
                            <div className="hidden md:block space-y-1.5">
                                <div className="h-3.5 w-24 bg-zinc-200 dark:bg-zinc-800 rounded" />
                                <div className="h-2.5 w-16 bg-zinc-200 dark:bg-zinc-800 rounded" />
                            </div>
                        </div>
                    ) : user ? (
                        <button className="group flex items-center gap-3 rounded-xl border border-transparent p-1.5 text-left outline-none transition-all hover:bg-zinc-100/80 dark:hover:bg-zinc-900/50 hover:border-zinc-200/40 dark:hover:border-zinc-800/40">
                            
                            {/* Hero UI Avatar Wrapper */}
                            <div className="relative">
                                <Avatar className="w-9 h-9 text-xs font-semibold bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg">
                                    {user.image ? (
                                        <Avatar.Image src={user.image} alt={user.name || "User"} />
                                    ) : (
                                        <Avatar.Fallback>
                                            {user.name ? user.name.split(" ").map(n => n[0]).join("").toUpperCase() : "U"}
                                        </Avatar.Fallback>
                                    )}
                                </Avatar>
                                {/* Presence Status Badge */}
                                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-950 translate-x-0.5 translate-y-0.5" />
                            </div>

                            {/* Profile Meta Info */}
                            <div className="hidden md:block min-w-0">
                                <p className="truncate text-sm font-medium text-zinc-700 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                                    {user.name || "Anonymous User"}
                                </p>
                                <p className="truncate text-xs text-zinc-400 dark:text-zinc-500 font-normal leading-none mt-0.5">
                                    {/* Fallback to role description if company property doesn't exist explicitly inside user session */}
                                    {user.company || user.role || "Portal Partner"}
                                </p>
                            </div>

                            <ChevronDown className="hidden md:block h-4 w-4 text-zinc-400 dark:text-zinc-500 transition-transform duration-200 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 group-hover:translate-y-0.5" />
                        </button>
                    ) : (
                        <div className="text-xs text-zinc-400 dark:text-zinc-500 font-medium px-2 py-1 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
                            No Session
                        </div>
                    )}

                </div>
            </div>
        </header>
    );
}