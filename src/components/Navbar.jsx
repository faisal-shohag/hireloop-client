"use client"

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <nav className="flex max-w-7xl border rounded-xl px-2 my-2 mx-auto justify-between items-center">
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

      <ul className="flex gap-10 py-2 text-sm items-center">
        <li>
          <Link href={"/brows-jobs"}>Browse Jobs</Link>
        </li>
        <li>
          <Link href={"/company"}>Company</Link>
        </li>
        <li>
          <Link href={"/company"}>Pricing</Link>
        </li>

        {user ? (
          <>
            <li>
              <Avatar>
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt="John Doe"
                  src={user?.image}
                />
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
            </li>
            <li>
              <Button
                size="sm"
                onClick={handleSignOut}
                variant="danger"
              >
                Logout
              </Button>
            </li>
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
