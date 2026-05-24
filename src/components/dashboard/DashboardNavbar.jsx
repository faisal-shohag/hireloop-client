"use client";

import { useSession } from "@/lib/auth-client";
import { Avatar, Dropdown } from "@heroui/react";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";

const DashboardNavbar = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/signin");
  };

  return (
    <header className="bg-background px-6 py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Hireloop Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <Dropdown>
            <Dropdown.Trigger className="rounded-full">
              <Avatar size="sm" aria-label="Menu">
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt={user?.name}
                  src={user?.image}
                />
                <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
              </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Popover>
              <div className="px-3 pt-3 pb-1">
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <Avatar.Image alt={user?.name} src={user?.image} />
                    <Avatar.Fallback delayMs={600}>
                      {user?.name?.charAt(0) || "U"}
                    </Avatar.Fallback>
                  </Avatar>
                  <div className="flex flex-col gap-0">
                    <p className="text-sm leading-5 font-medium">{user?.name}</p>
                    <p className="text-xs leading-none text-muted">
                      {user?.email}
                    </p>
                    <p className="text-xs leading-none text-muted capitalize">
                      {user?.role}
                    </p>
                  </div>
                </div>
              </div>
              <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                <Dropdown.Item id="profile" textValue="Profile">
                  <Link className="flex items-center gap-2" href="/">
                    <MdDashboard />
                    Home
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="settings" textValue="Settings">
                  <Link className="flex items-center gap-2" href="/profile">
                    <CgProfile />
                    Profile
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  id="logout"
                  textValue="Logout"
                  variant="danger"
                  onClick={handleSignOut}
                >
                  <BiLogOut />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;