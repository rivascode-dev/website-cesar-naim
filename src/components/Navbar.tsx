'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const menuItems = [
    { label: 'METODOLOGÍA', href: '#sobre-la-mentoria' },
    { label: 'RESULTADOS', href: '#resultados' },
    { label: 'HISTORIAS', href: '#historias' },
    { label: 'EL MENTOR', href: '#el-mentor' },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'sobre-la-mentoria',
        'resultados',
        'historias',
        'el-mentor',
        'contacto',
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust offset for sticky header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-md'>
      <div className='container mx-auto px-6 md:px-20 max-w-7xl h-22 md:h-28 flex items-center justify-between'>
        {/* Left: Logo and Name */}
        <a
          href='#'
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className='flex items-center gap-3 group'
        >
          <div className='relative w-15 h-15 md:w-20 md:h-20'>
            <Image
              src='/assets/logo/logo-cesar-naim.jpeg'
              alt='César Naim Logo'
              fill
              className='object-cover'
            />
          </div>
          {/* <span className='font-hanken text-xs uppercase tracking-[0.25em] text-gold font-bold transition-opacity group-hover:opacity-85'>
            César Naim
          </span> */}
        </a>

        {/* Center/Right: Desktop Menu */}
        <nav className='hidden lg:flex items-center gap-8'>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`font-hanken text-[11px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                activeSection === item.href.replace('#', '')
                  ? 'text-gold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Admission / Contact Button (Stands out in Gold) */}
          <Button
            asChild
            className='h-10 px-6 bg-transparent text-gold border border-gold hover:bg-gold hover:text-black font-hanken font-bold uppercase tracking-[0.1em] text-[10px] transition-all duration-300 rounded-none cursor-pointer'
          >
            <a
              href='#contacto'
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contacto');
                if (element) {
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }}
            >
              ADMISIÓN Y CONTACTO
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='lg:hidden text-on-surface-variant hover:text-on-surface focus:outline-none'
          aria-label='Toggle menu'
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {/* Mobile Drawer (Sharp edges, pure black void) */}
      {isOpen && (
        <div className='lg:hidden absolute inset-x-0 top-full bg-background border-b border-border/20 px-6 py-8 space-y-6 flex flex-col z-40'>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`font-hanken text-xs uppercase tracking-[0.15em] font-medium py-2 border-b border-border/10 ${
                activeSection === item.href.replace('#', '')
                  ? 'text-gold'
                  : 'text-on-surface-variant'
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button
            asChild
            className='w-full h-12 bg-transparent text-gold border border-gold hover:bg-gold hover:text-black font-hanken font-bold uppercase tracking-[0.1em] text-xs transition-all duration-300 rounded-none cursor-pointer'
          >
            <a
              href='#contacto'
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                const element = document.getElementById('contacto');
                if (element) {
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }}
            >
              ADMISIÓN Y CONTACTO
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
