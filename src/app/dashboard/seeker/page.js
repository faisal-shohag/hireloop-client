"use client";

import { useSession } from "@/lib/auth-client";

export default function SeekerDashboard() {
  const { data: session } = useSession();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Welcome back, {session?.user?.name}!</h2>
        <p className="text-muted-foreground">Ready to find your next opportunity?</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Applications</h3>
          <p className="text-3xl font-bold">0</p>
          <p className="text-sm text-muted-foreground">Total applications</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Saved Jobs</h3>
          <p className="text-3xl font-bold">0</p>
          <p className="text-sm text-muted-foreground">Jobs saved for later</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Profile Views</h3>
          <p className="text-3xl font-bold">0</p>
          <p className="text-sm text-muted-foreground">Times your profile was viewed</p>
        </div>
      </div>
    </div>
  );
}