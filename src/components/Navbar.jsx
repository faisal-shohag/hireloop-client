"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  
  const pathname = usePathname();

  if (pathname?.startsWith("/dashboard")) {
    return null;
  }

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <nav className="flex max-w-7xl border rounded-2xl px-2 my-2 mx-auto justify-between items-center bg-accent-foreground">
      <Link href={"/"}>
        <div className="relative">
          <Image
            loading="eager"
            className="object-cover h-auto w-auto"
            width={100}
            height={40}
            style={{ width: "auto", height: "auto" }}
            alt="logo"
            src={"/logo.png"}
          />
        </div>
      </Link>

      <ul className="flex gap-10 py-2 text-sm items-center">
        <li>
          <Link href={"/browse-jobs"}>Browse Jobs</Link>
        </li>
        <li>
          <Link href={"/browse-company"}>Company</Link>
        </li>
        <li>
          <Link href={"/pricing"}>Pricing</Link>
        </li>

        {user ? (
          <>
            <li>
              <Dropdown>
                <Dropdown.Trigger className="rounded-full">
                  <Avatar size="sm" aria-label="Menu">
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt="John Doe"
                      src={user?.image}
                    />
                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </Dropdown.Trigger>
                <Dropdown.Popover>
                  <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                      <Avatar size="sm">
                        <Avatar.Image alt={user?.name} src={user?.image} />
                        <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                      </Avatar>
                      <div className="flex flex-col gap-0">
                        <p className="text-sm leading-5 font-medium">
                          {user?.name}
                        </p>
                        <p className="text-xs leading-none text-muted">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Dropdown.Menu
                    onAction={(key) => console.log(`Selected: ${key}`)}
                  >
                   
                    <Dropdown.Item id="new-file" textValue="New file">
                       <Link className="flex items-center gap-2" href={`/dashboard/${user?.role}`}>
                      <MdDashboard />
                      <Label>Dashboard</Label>
                        </Link>
                    </Dropdown.Item>
                  
                    <Dropdown.Item id="copy-link" textValue="Copy link">
                      <CgProfile />
                      <Label>Profile</Label>
                    </Dropdown.Item>

                    <Dropdown.Item
                      id="delete-file"
                      textValue="Delete file"
                      variant="danger"
                      onClick={handleSignOut}
                    >
                      <BiLogOut />
                      <Label>Logout</Label>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </li>

            {/* add user.plan "free"/"pro" badge here */}
            <li className="text-xs font-semibold px-2.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/40 rounded-lg">
              {user?.plan || "free"}
            </li>
            {/* <li>
              <Button size="sm" onClick={handleSignOut} variant="danger">
                Logout
              </Button>
            </li> */}
          </>
        ) : (
          <>
            <li>
              <Link href={"/signin"}>
                <Button variant="ghost" size="sm" className={"text-indigo-700"}>
                  Sign In
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"/signup"}>
                <Button size="sm" className={"rounded-lg bg-indigo-600"}>
                  Get Started
                </Button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
