'use client';

import { Menu, Search, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50 border-b">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <span className="text-lg font-bold text-gray-800">
              <span className="text-black">people</span>
              <span className="text-gray-500">per</span>
              <span className="text-black">hour</span>
            </span>
          </div>

          {/* Search Button (Desktop Only) */}
          <div className="hidden md:block">
            <button className="flex items-center gap-1 px-4 py-2 border border-blue-400 text-blue-500 rounded-md hover:bg-blue-50 transition">
              <Search size={16} />
              <span className="text-sm font-semibold">SEARCH</span>
              <span className="ml-1">&#9662;</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-700">
            <Link href="#">HOW IT WORKS</Link>
            <Link href="#">LOG IN</Link>
            <Link href="#">SIGN UP</Link>
            <Link href="#" className="text-orange-600 font-bold">FREELANCER?</Link>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col gap-3 px-4 pb-4 text-sm font-medium text-gray-700 animate-fade-in">
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>HOW IT WORKS</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>LOG IN</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>SIGN UP</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-orange-600 font-bold">FREELANCER?</Link>
          </div>
        )}
      </div>
    </header>
  );
}
