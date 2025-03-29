"use client"

import Link from "next/link"
import { Search, Moon, Sun, Shield, User } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-8 left-0 right-0 z-50 px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20 bg-black/70 backdrop-blur-md rounded-lg px-6">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            SoraNusa
          </Link>

          {/* Search Bar */}
          <div className="relative max-w-md w-full mx-4">
            <div className="flex items-center bg-[#1e1e1e] rounded-md border border-gray-700">
              <Search className="ml-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Shows"
                className="w-full bg-transparent py-2.5 px-3 text-sm focus:outline-none text-gray-200"
              />
              <button className="px-3 py-2.5 border-l border-gray-700">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M15 3v4" />
                  <path d="M19 3v4" />
                  <path d="M15 7h4" />
                  <path d="M18 14v-3" />
                  <path d="M14 18h-3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1e1e1e] hover:bg-gray-800 transition-colors"
            >
              {mounted &&
                (theme === "dark" ? (
                  <Moon className="w-5 h-5 text-gray-300" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-300" />
                ))}
            </button>

            {/* Legal Button (Shield) */}
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1e1e1e] hover:bg-gray-800 transition-colors">
              <Shield className="w-5 h-5 text-gray-300" />
            </button>

            {/* Profile Button */}
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1e1e1e] hover:bg-gray-800 transition-colors">
              <User className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

