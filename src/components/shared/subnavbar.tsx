'use client';

import { useState } from 'react';
import Link from 'next/link';

const subNavItems = [
  {
    label: 'AI Services',
    subItems: ['AI Chatbot', 'Machine Learning', 'Data Labeling'],
  },
  {
    label: 'Technology & Programming',
    subItems: ['Web Development', 'App Development', 'Game Dev'],
  },
  {
    label: 'Writing & Translation',
    subItems: ['Content Writing', 'Translation', 'Proofreading'],
  },
  {
    label: 'Design',
    subItems: ['Logo Design', 'UI/UX Design', 'Illustration'],
  },
  {
    label: 'Digital Marketing',
    subItems: ['SEO', 'Email Marketing', 'Affiliate Marketing'],
  },
  {
    label: 'Video, Photo & Image',
    subItems: ['Video Editing', 'Photography', 'Image Editing'],
  },
  {
    label: 'Business',
    subItems: ['Consulting', 'Presentations'],
  },
  {
    label: 'Music & Audio',
    subItems: ['Voice Over', 'Music Production'],
  },
  {
    label: 'Marketing, Branding & Sales',
    subItems: ['Lead Generation', 'Brand Strategy'],
  },
  {
    label: 'Social Media',
    subItems: ['Instagram Ads', 'Facebook Marketing'],
  },
];

export default function SubNavbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 whitespace-nowrap">
        <ul className="flex gap-6 py-3 text-sm font-medium text-gray-700">
          {subNavItems.map((item, idx) => (
            <li key={idx} className="relative group">
              <button className="hover:text-blue-600 transition relative no-underline heartbeat-underline cursor-pointer ">
                {item.label}
              </button>

              {/* Dropdown */}
              {item.subItems && (
                <ul className="absolute z-50 left-0 top-full mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                  {item.subItems.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
