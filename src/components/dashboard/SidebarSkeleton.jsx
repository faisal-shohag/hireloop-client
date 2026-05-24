// SidebarSkeleton.tsx
"use client";

import { Skeleton } from "@heroui/react";

const SidebarSkeleton = () => {
  const skeletonItems = Array.from({ length: 4 });

  return (
    <aside className="w-64 h-screen sticky top-0 overflow-y-auto border-r bg-background">
      <nav className="space-y-2">
        {/* Logo Placeholder */}
        <div className="px-3 border-b py-4.5">
          <Skeleton className="rounded-lg w-20 h-6" />
        </div>

        {/* Navigation Items Placeholders */}
        <div className="mt-5 space-y-3 px-3">
          {skeletonItems.map((_, index) => (
            <div key={index} className="flex items-center gap-3 w-full py-1">
              {/* Icon Circle Shape */}
              <Skeleton className="flex rounded-full w-6 h-6 shrink-0" />
              {/* Text Bar Line */}
              <Skeleton className="h-4 w-3/5 rounded-lg" />
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default SidebarSkeleton;