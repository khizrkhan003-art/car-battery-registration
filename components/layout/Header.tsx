'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Reg Lookup' },
    { href: '/battery-size', label: 'Battery Sizes (096, 027...)' },
    { href: '/battery-health-checker', label: 'Health Diagnostic' },
    { href: '/car-battery', label: 'Buyer Guide' },
    { href: '/guides', label: 'Fitting & Tech Guides' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with UK Flag Accent */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="w-9 h-9 rounded-xl bg-amber-400 text-black flex items-center justify-center font-black text-xl shadow-sm border border-amber-500 group-hover:scale-105 transition-transform">
                ⚡
              </span>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-extrabold text-lg sm:text-xl text-gray-950 tracking-tight font-heading">
                    CarBattery<span className="text-primary-600">Finder</span>
                  </span>
                  <span className="bg-[#003399] text-white font-bold text-[9px] px-1.5 py-0.5 rounded tracking-wider">
                    UK
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 font-medium">
                  DVLA &amp; OE Battery Database
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-semibold text-sm transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 bg-[#FFD200] hover:bg-[#ffdb33] text-black font-bold text-xs uppercase px-3.5 py-2 rounded-lg border border-black/20 shadow-sm transition-colors"
            >
              <span>🔍</span> Reg Lookup
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="pt-3 pb-4 space-y-2 px-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 rounded-xl text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FFD200] text-black font-bold py-3 rounded-xl border border-black/20 text-sm shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>🔍</span> Look Up UK Registration Plate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
