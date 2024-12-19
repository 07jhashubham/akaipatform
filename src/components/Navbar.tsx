'use client'
import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative">
      {/* Main Navbar */}
      <div className="flex items-center lg:justify-between  px-6 gap-16 w-full h-20 shadow-md bg-white">
        {/* Left: Menu Button for Small Screens */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={28} className="text-black" />
        </button>

        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="h-10 lg:pl-20" />

        {/* Center and Right: Links and Search */}
        <div className="hidden lg:flex mr-10 items-center gap-14">
          <Link href='/' className={clsx('font-helvetica-medium', pathname === "/" && 'underline')}>Home</Link>
          <Link href='/label-data/input' className={clsx('font-helvetica-medium', pathname.startsWith("/label-data") && 'underline')}>Label Data</Link>
          <div className="relative">
            <input
              type="text"
              className="px-3 py-1 pr-10 bg-white border border-black shadow-[4px_4px_0px_0px_rgba(207,11,3,1)]"
              placeholder="Search in site"
            />
            <Search
              size={20}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-600"
            />
          </div>
        </div>
      </div>

      {/* Responsive Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-[70%] bg-white shadow-lg z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-end p-4">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-6 px-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search in site"
              className="w-full px-3 py-2 pr-10 bg-white border border-black rounded-md shadow-[4px_4px_0px_0px_rgba(207,11,3,1)]"
            />
            <Search
              size={20}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-600"
            />
          </div>
          <Link
            href="#"
            className="text-lg font-helvetica-medium font-medium text-black hover:text-red-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-lg font-helvetica-medium font-medium text-black hover:text-red-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Label Data
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;