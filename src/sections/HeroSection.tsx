import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className='relative min-h-[90vh] flex items-center justify-center pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden bg-background'>
      {/* Background Neural Glow */}
      <div className='absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cobalt/8 rounded-full blur-[80px] md:blur-[120px] pointer-events-none' />
      <div className='absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-vinotinto/15 rounded-full blur-[60px] md:blur-[100px] pointer-events-none' />
      {/* Secondary vinotinto flare — bottom-left corner */}
      <div className='absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-vinotinto/10 rounded-full blur-[80px] pointer-events-none' />

      <div className='container mx-auto px-6 md:px-20 max-w-7xl relative z-10'>
        {/* Hero Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
          {/* Text Content: 7 Columns on Desktop */}
          <div className='lg:col-span-7 flex flex-col justify-center'>
            <span className='font-hanken text-xs md:text-sm font-semibold uppercase tracking-[0.15em] text-cobalt mb-6 block'>
              MÉTODO DE REPROGRAMACIÓN MENTAL
            </span>
            <h1 className='font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-on-surface mb-8 tracking-tight'>
              IMAGINA TU VIDA SIN ANSIEDAD, SIN MIEDO AL RECHAZO, SIN DUDAR DE TI.
            </h1>

            <p className='font-hanken text-lg md:text-2xl font-light text-on-surface-variant/90 mb-12 max-w-2xl border-l-2 border-gold/40 pl-6 py-2'>
              En <strong className='font-bold text-gold'>90 días</strong> te
              ayudo a eliminar todos esos patrones limitantes desde la raíz.
            </p>

            {/* Scientific/Neurological statements */}
            <div className='space-y-4 mb-12 max-w-xl font-hanken'>
              <div className='flex items-start gap-3'>
                <span className='w-2 h-2 bg-gold mt-2 shrink-0' />
                <p className='text-on-surface-variant text-base'>
                  La{' '}
                  <strong className='font-medium text-on-surface'>
                    ANSIEDAD
                  </strong>{' '}
                  no aparece porque seas débil.
                </p>
              </div>
              <div className='flex items-start gap-3'>
                <span className='w-2 h-2 bg-gold mt-2 shrink-0' />
                <p className='text-on-surface-variant text-base'>
                  La{' '}
                  <strong className='font-medium text-on-surface'>
                    PROCRASTINACIÓN
                  </strong>{' '}
                  no existe porque &ldquo;algo esté mal en ti&rdquo;.
                </p>
              </div>
              <div className='flex items-start gap-3'>
                <span className='w-2 h-2 bg-gold mt-2 shrink-0' />
                <p className='text-on-surface-variant text-base'>
                  La falta de{' '}
                  <strong className='font-medium text-on-surface'>
                    AUTOESTIMA
                  </strong>{' '}
                  es un patrón mental aprendido y todo patrón puede
                  reprogramarse.
                </p>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                onClick={onCtaClick}
                className='h-14 px-8 bg-transparent text-gold border border-gold hover:bg-gold hover:text-black font-hanken font-bold uppercase tracking-[0.1em] text-sm transition-all duration-300 active:scale-95 cursor-pointer rounded-none'
              >
                Comenzar Mi Transformación
              </Button>
              <a
                href='#sobre-la-mentoria'
                className='inline-flex items-center justify-center h-14 px-8 bg-transparent text-on-surface hover:text-gold font-hanken text-sm uppercase tracking-[0.1em] transition-colors duration-300'
              >
                Conocer la metodología →
              </a>
            </div>
          </div>

          {/* Profile Image Column: 5 Columns on Desktop */}
          <div className='lg:col-span-5 relative flex justify-center lg:justify-end mt-10 lg:mt-0'>
            <div className='relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-[4/5] border border-gold/20 p-2 bg-surface-container-lowest'>
              {/* Vinotinto ambient glow behind the portrait */}
              <div className='absolute -inset-6 bg-vinotinto/10 rounded-full blur-[40px] pointer-events-none -z-10' />
              <div className='relative w-full h-full border border-gold/40 overflow-hidden'>
                <Image
                  src='/assets/perfil/cesar-naim-mentor-coach-02.jpeg'
                  alt='César Naim - Mentor de Transformación'
                  fill
                  sizes='(max-width: 768px) 100vw, 380px'
                  className='object-cover transition-transform duration-700 hover:scale-105'
                  priority
                />
              </div>
              {/* Metallic frame decor */}
              <div className='absolute top-0 right-0 w-8 h-8 border-t border-r border-gold' />
              <div className='absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold' />
              {/* Vinotinto corner accents */}
              <div className='absolute top-0 left-0 w-8 h-8 border-t border-l border-vinotinto/40' />
              <div className='absolute bottom-0 right-0 w-8 h-8 border-b border-r border-vinotinto/40' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
