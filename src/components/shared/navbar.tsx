'use client';

import { useState } from 'react';
import Container from './Container';
import { BadgeInfo, ChevronDown, Folder, Globe, HeartCrack, House,MessageCircle,Rocket,X  } from 'lucide-react';
const navItems2 = [
  { name: 'Fiver Pro', icon: <ChevronDown size={24} /> },
  { name: 'Explors', icon: <ChevronDown size={24} />},
];
const navItems = [
  { name: 'EN', icon: <Globe size={24} /> },
  { name: 'Become a Seller'},
  { name: 'Sign In' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
   
   <div className="bg-[#0a0a0a] text-gray-300">
     <Container>
      <div>
        <nav className="px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <div className="w-7 h-7 flex items-center justify-center rounded-full border border-white">
            <span className="text-xl">✔</span>
          </div>
        </div>

        <div className='flex gap-9'>
           <ul className="hidden md:flex items-center space-x-9 mr-6">
          {navItems2.map((item) => (
            <li key={item.name} className="flex items-center gap-1 pb-2 text-[#999999]  hover:text-white">
              <span className='text-[20px] font-normal'>{item.name}</span>
              <span className=''>{item.icon}</span>
            </li>
          ))}
        </ul>
        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center space-x-9">
          {navItems.map((item) => (
            <li key={item.name} className="flex gap-1 pb-2 link-hover-line text-[#999999] text-sm uppercase cursor-pointer hover:text-white">
              <span className=''>{item.icon}</span>
              <span className='text-[20px] font-normal'>{item.name}</span>
            </li>
          ))}
        </ul>

        {/* Start Project Button */}
        <div className="hidden md:block">
          <button className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-md hover:scale-105 transition">
          <Rocket size={24} /> Join
          </button>
        </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <House size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <div key={item.name} className="flex gap-1 pb-2 link-hover-line text-[#999999] text-sm uppercase cursor-pointer hover:text-white">
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
          <button className="mt-3 w-full flex items-center justify-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-md">
           <Rocket size={24} /> Start Project
          </button>
        </div>
      )}
      </div>
      </Container>
    </div>
    
 
  );
}
