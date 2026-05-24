"use client";

import { useSession } from "@/lib/auth-client";

export default function RecruiterDashboard() {
  const { data: session } = useSession();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Welcome back, {session?.user?.name}!</h2>
        <p className="text-muted-foreground">Find the best candidates for your open positions</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Active Jobs</h3>
          <p className="text-3xl font-bold">0</p>
          <p className="text-sm text-muted-foreground">Jobs currently posting</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Applications</h3>
          <p className="text-3xl font-bold">0</p>
          <p className="text-sm text-muted-foreground">Total applications received</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Profile Views</h3>
          <p className="text-3xl font-bold">0</p>
          <p className="text-sm text-muted-foreground">Company profile views</p>
        </div>
      </div>
    </div>
  );
}