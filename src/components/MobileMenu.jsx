import React from 'react';
import { X } from 'lucide-react';
import Link from './Link';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white">
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="p-4 flex flex-col space-y-4">
          <Link href="/donor">Donor Programme</Link>
          <Link href="/preservation">Fertility Preservation</Link>
          <Link href="/treatments">Advanced Treatments</Link>
          <Link href="/infertility">Infertility Treatments</Link>
          <Link href="/testing">IVF Testing</Link>
          <Link href="/about">About Us</Link>
          
          <button className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Talk to Us →
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
