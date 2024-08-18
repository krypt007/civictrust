'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold">CivicTrust</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">Dashboard</Link>
          <Link href="/projects" className="hover:text-gray-400">Projects</Link>
          <Link href="/about" className="hover:text-gray-400">About Us</Link>
          {/* <Link href="/contractors" className="hover:text-gray-400">Contractors</Link>
          <Link href="/engineers" className="hover:text-gray-400">Engineers</Link>
          <Link href="/profile" className="hover:text-gray-400">Profile</Link> */}
          <Link href="/admin" className="hover:text-gray-400">Submit Views</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 px-6 py-4">
          <Link href="/" className="block py-2 hover:text-gray-400">Dashboard</Link>
          <Link href="/projects" className="block py-2 hover:text-gray-400">Projects</Link>
          <Link href="/about" className="block py-2 hover:text-gray-400">About Us</Link>
          {/* <Link href="/contractors" className="block py-2 hover:text-gray-400">Contractors</Link>
          <Link href="/engineers" className="block py-2 hover:text-gray-400">Engineers</Link>
          <Link href="/profile" className="block py-2 hover:text-gray-400">Profile</Link> */}
          <Link href="/admin" className="block py-2 hover:text-gray-400">Submit Views</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
