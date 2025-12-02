"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Brain, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const menuItems = [
  {
    title: "Product",
    dropdown: [
      "AI Meeting Summarizer",
      "Action Tracker",
      "Email Agent",
      "Dashboard Analytics",
      "AI Templates",
    ],
  },
  {
    title: "Integrations",
    dropdown: [
      "Slack",
      "Zoom",
      "Google Meet",
      "Calendar Sync",
      "Gmail / Outlook",
      "Zapier + Webhooks",
    ],
  },
  {
    title: "Solutions",
    dropdown: [
      "For Founders & CEOs",
      "For Teams",
      "For Educators",
      "For Agencies",
      "For Healthcare",
    ],
  },
  {
    title: "Resources",
    dropdown: ["Blog", "Documentation", "Case Studies", "Demo Videos", "Product Tour"],
  },
  {
    title: "About",
    dropdown: [
      "Read",
      "Resources",
      "Account & Privacy Center",
      "Privacy",
      "Blog",
      "Careers",
      "Support",
    ],
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
         <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/memohome.png" alt="Logo" width={250} height={200} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-700 font-medium transition">
                {item.title}
                <ChevronDown className="h-4 w-4" />
              </button>

              {activeDropdown === item.title && (
                <div className="absolute left-0 top-8 w-56 rounded-xl border border-gray-100 bg-white shadow-xl p-3 space-y-2 animate-fadeIn">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub}
                      href="#"
                      className="block text-sm text-gray-600 hover:text-blue-700 px-3 py-1.5 rounded-md hover:bg-gray-50 transition"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Pricing Link */}
          <Link
            href="/pricing"
            className="text-gray-700 hover:text-blue-700 font-medium transition"
          >
            Pricing
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login"  className="text-gray-700">
            Login
          </Link>
          <Link href="/signup" className=" px-4 py-2 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white shadow-lg shadow-blue-500/25 hover:from-[#1d4ed8] hover:to-[#6d28d9]">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      </nav>
     

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white px-6 py-4 animate-slideDown">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <details key={item.title} className="group">
                <summary className="cursor-pointer text-gray-800 font-medium flex justify-between items-center">
                  {item.title}
                  <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>
                <div className="pl-4 mt-2 space-y-1">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub}
                      href="#"
                      className="block text-sm text-gray-600 hover:text-blue-700 transition"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              </details>
            ))}

            <Link href="#pricing" className="text-gray-800 font-medium">
              Pricing
            </Link>

            <div className="flex flex-col gap-2 pt-3">
              <Button variant="outline" asChild className="w-full">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild className="w-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
