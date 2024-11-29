import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import Link from './Link';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src={logo} alt="IVF Pulse logo" className="w-[120px]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/donor">Donor Programme</Link>
            <Link href="/preservation">Fertility Preservation</Link>
            <Link href="/treatments">Advanced Treatments</Link>
            <Link href="/infertility">Infertility Treatments</Link>
            <Link href="/testing">IVF Testing</Link>
            <Link href="/about">About Us</Link>
          </nav>

          {/* Actions Section */}
          <div className="flex items-center">
            <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Talk to Us →
            </button>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
};

export default Header;
