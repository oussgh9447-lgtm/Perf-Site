'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { media } from '@/lib/cloudinary';

export default function TopNav() {
  const pathname = usePathname();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path === '/products' && pathname.startsWith('/products')) return true;
    if (path === '/about' && pathname.startsWith('/about')) return true;
    return false;
  };

  const products = [
    { name: 'Data Perf', href: '/products/data-perf', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
        <rect x="3" y="12" width="4" height="9" rx="1" />
        <rect x="10" y="8" width="4" height="13" rx="1" />
        <rect x="17" y="3" width="4" height="18" rx="1" />
      </svg>
    )},
    { name: 'Coach Pad', href: '/products/coach-pad', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    )},
    { name: 'Profile', href: '/products/profile', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3DE0A1" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )},
    { name: 'Match View', href: '/products/match-view', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    )},
    { name: 'Work Space', href: '/products/workspace', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B6C4FF" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )},
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/60 glass border-b border-border-subtle shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src={media.logo}
            alt="Perf-analysis Consulting"
            width={180}
            height={55}
            className="h-10 md:h-12 w-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/" className={`relative text-[14px] font-extrabold uppercase transition-colors tracking-wide ${
            isActive('/') ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'
          }`}>
            <span className="relative">
              Home
              {isActive('/') && <span className="absolute bottom-[-8px] left-0 right-0 h-[2px] bg-[#2563EB]"></span>}
            </span>
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <Link href="/products" className={`relative text-[14px] font-extrabold uppercase transition-colors tracking-wide flex items-center gap-1 ${
              isActive('/products') ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'
            }`}>
              <span className="relative">
                Product Overview
                {isActive('/products') && <span className="absolute bottom-[-8px] left-0 right-0 h-[2px] bg-[#2563EB]"></span>}
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-3 w-[240px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-[12px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300 ${
                isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="p-2">
                {products.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-[8px] hover:bg-[#252525] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-[6px] bg-[#252525] flex items-center justify-center group-hover:bg-[#2a2a2a] transition-colors">
                      {product.icon}
                    </div>
                    <span className="text-[13px] font-bold text-[#A1A1AA] group-hover:text-white transition-colors">
                      {product.name}
                    </span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#52525B" strokeWidth="2" className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className={`relative text-[14px] font-extrabold uppercase transition-colors tracking-wide ${
            isActive('/about') ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'
          }`}>
            <span className="relative">
              About & Contact
              {isActive('/about') && <span className="absolute bottom-[-8px] left-0 right-0 h-[2px] bg-[#2563EB]"></span>}
            </span>
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link href="/about" className="bg-accent-blue text-white text-[12px] font-black px-5 py-2 rounded-[4px] hover:bg-accent-blue-light transition-colors uppercase tracking-wide whitespace-nowrap">
            Request Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-bg-primary/95 glass z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          <Link
            href="/"
            className={`text-[20px] font-extrabold uppercase tracking-wide ${
              isActive('/') ? 'text-text-primary' : 'text-text-muted'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Products - Mobile Accordion */}
          <div className="flex flex-col items-center w-full max-w-xs">
            <Link
              href="/products"
              className={`text-[20px] font-extrabold uppercase tracking-wide mb-4 ${
                isActive('/products') ? 'text-text-primary' : 'text-text-muted'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <div className="flex flex-col gap-3 w-full">
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-[8px] hover:bg-[#252525] transition-colors group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-8 h-8 rounded-[6px] bg-[#252525] flex items-center justify-center">
                    {product.icon}
                  </div>
                  <span className="text-[14px] font-bold text-[#A1A1AA] group-hover:text-white transition-colors">
                    {product.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            className={`text-[20px] font-extrabold uppercase tracking-wide ${
              isActive('/about') ? 'text-text-primary' : 'text-text-muted'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About & Contact
          </Link>

          <Link
            href="/about"
            className="bg-accent-blue text-white text-[16px] font-black px-8 py-3 rounded-[4px] hover:bg-accent-blue-light transition-colors uppercase tracking-wide mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
