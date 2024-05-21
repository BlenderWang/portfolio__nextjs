"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navItems } from "@/data";
import { cn } from "@/lib/utils";

const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <div>
      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative flex items-center  space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          {/* add !cursor-pointer */}
          {/* remove hidden sm:block for the mobile responsive */}
          <span className=" !cursor-pointer text-sm">{navItem.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default FloatingNavbar;
