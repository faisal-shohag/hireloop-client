"use client";

import { useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsBuildings } from "react-icons/bs";
import {
  MdDashboard,
  MdWork,
  MdBusinessCenter,
  MdPeople,
  MdSettings,
  MdBarChart,
  MdDescription,
  MdBookmark,
} from "react-icons/md";
import SidebarSkeleton from "./SidebarSkeleton";

const menuConfig = {
  seeker: [
    { href: "/dashboard/seeker", icon: MdDashboard, label: "Dashboard" },
    { href: "/dashboard/seeker/jobs", icon: MdWork, label: "Browse Jobs" },
    { href: "/dashboard/seeker/saved", icon: MdBookmark, label: "Saved Jobs" },
    {
      href: "/dashboard/seeker/applications",
      icon: MdDescription,
      label: "My Applications",
    },
  ],
  recruiter: [
    { href: "/dashboard/recruiter", icon: MdDashboard, label: "Dashboard" },
    { href: "/dashboard/recruiter/jobs", icon: MdWork, label: "My Jobs" },
    {
      href: "/dashboard/recruiter/company",
      icon: BsBuildings,
      label: "My Company",
    },
    {
      href: "/dashboard/recruiter/applications",
      icon: MdPeople,
      label: "Applications",
    },
  ],
  admin: [
    { href: "/dashboard/admin", icon: MdDashboard, label: "Dashboard" },
    { href: "/dashboard/admin/users", icon: MdPeople, label: "Users" },
    {
      href: "/dashboard/admin/companies",
      icon: MdBusinessCenter,
      label: "Companies",
    },
    { href: "/dashboard/admin/settings", icon: MdSettings, label: "Settings" },
    {
      href: "/dashboard/admin/analytics",
      icon: MdBarChart,
      label: "Analytics",
    },
  ],
};

const DashboardSidebar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const userRole = session?.user?.role;
  if(!userRole) {
    return <SidebarSkeleton/>
  }
  const menuItems = menuConfig[userRole];
  

  return (
    <aside className="w-64 h-screen sticky top-0 overflow-y-auto border-r bg-background ">
      <nav className="space-y-2">
        <Link href={"/"}>
          <div className="relative px-3 border-b py-3">
            <Image
              loading="eager"
              className="object-cover h-auto w-auto"
              width={80}
              height={30}
              style={{ width: "auto", height: "auto" }}
              alt="logo"
              src={"/logo.png"}
            />
          </div>
        </Link>
        <div className="mt-5 space-y-1 px-2">
          {menuItems.map((item) =>{ 
            const isActive = pathname === item.href;
            return <div key={item.href}>
              <Link href={item.href}>
                <Button
                  size="sm"
                  variant="ghost"
                  className={`w-full justify-start ${isActive && "bg-zinc-200"}`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Button>
              </Link>
            </div>
            }
          )}
        </div>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
