"use client";

import { useSession } from "@/lib/auth-client";

export default function AdminDashboard() {
  const { data: session } = useSession();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Welcome back, {session?.user?.name}!</h2>
        <p className="text-muted-foreground">Admin dashboard - manage the platform</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold">0</p>
          <p className="text-sm text-muted-foreground">Registered users</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Companies</h3>
          <p className="text-3xl font-bold">0</p>
          <p className="text-sm text-muted-foreground">Registered companies</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Jobs Posted</h3>
          <p className="text-3xl font-bold">0</p>
          <p className="text-sm text-muted-foreground">Total job postings</p>
        </div>
      </div>
    </div>
  );
}