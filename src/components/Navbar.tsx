import React from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed left-1/2 top-4 z-50 flex w-full max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-background/60 py-2.5 px-4 shadow-lg shadow-purple-900/20 backdrop-blur-xl transition-all duration-300">
      <Link
        href="/"
        className="flex items-center justify-center gap-2 tracking-tight text-lg md:text-xl font-medium"
      >
        <div className="size-8 rounded-full bg-gradient-to-br from-primary via-purple-500 to-indigo-600 shadow-inner shadow-white/20"></div>
        ResearchAI
      </Link>
      <div className="flex items-center justify-center gap-2 px-2">
        <ThemeToggle />
        <a
          href="https://github.com/AmjadIbrahim1/ResearchAI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="rounded-full">Github</Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
