import React from 'react';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="el-mentor" className='relative py-16 md:py-24 bg-background overflow-hidden'>
      {/* Background Neural Glow */}
      <div className='absolute top-1/2 right-0 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-vinotinto/18 rounded-full blur-[80px] md:blur-[120px] pointer-events-none' />
      {/* Secondary vinotinto — bottom left */}
      <div className='absolute bottom-0 left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-vinotinto/10 rounded-full blur-[80px] pointer-events-none' />

      <div className='container mx-auto px-6 md:px-20 max-w-7xl relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center'>
          {/* Left Column: Image (5 Columns) */}
          <div className='lg:col-span-5 relative flex justify-center lg:justify-start order-2 lg:order-1'>
            <div className='relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[380px] aspect-[4/5] border border-gold/20 p-2 bg-surface-container-lowest'>
              {/* Vinotinto ambient glow */}
              <div className='absolute -inset-8 bg-vinotinto/12 rounded-full blur-[50px] pointer-events-none -z-10' />
              <div className='relative w-full h-full border border-gold/40 overflow-hidden'>
                <Image
                  src='/assets/perfil/cesar-naim-mentor-coach-01.jpeg'
                  alt='César Naim - Mentor y Coach de Reprogramación Mental'
                  fill
                  sizes='(max-width: 768px) 100vw, 380px'
                  className='object-cover transition-transform duration-700 hover:scale-105'
                />
              </div>
              <div className='absolute top-0 right-0 w-8 h-8 border-t border-r border-gold' />
              <div className='absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold' />
              {/* Vinotinto corner accents */}
              <div className='absolute top-0 left-0 w-8 h-8 border-t border-l border-vinotinto/50' />
              <div className='absolute bottom-0 right-0 w-8 h-8 border-b border-r border-vinotinto/50' />
            </div>
          </div>

          {/* Right Column: Bio (7 Columns) */}
          <div className='lg:col-span-7 flex flex-col justify-center order-1 lg:order-2'>
            <span className='font-hanken text-xs font-semibold uppercase tracking-[0.15em] text-cobalt mb-4 block'>
              EL MENTOR
            </span>
            <h2 className='font-playfair text-3xl md:text-5xl font-bold text-on-surface mb-8'>
              César Naim
            </h2>

            <div className='font-hanken text-base md:text-lg text-on-surface-variant font-light space-y-6 leading-relaxed'>
              <p>
                He dedicado años al estudio y la práctica de la{' '}
                <strong className='font-medium text-gold'>
                  neuroreprogramación y el entrenamiento somático
                </strong>
                . Mi enfoque se aleja de los clichés del desarrollo personal y
                se centra en la biología y la psicología profunda.
              </p>
              <p>
                Entiendo la mente humana no como una máquina abstracta, sino
                como un sistema indisolublemente ligado a tu sistema nervioso
                físico. Por eso, mis intervenciones abordan directamente los
                núcleos de alerta de tu cerebro inconsciente, donde se almacenan
                el pánico al rechazo y la autolimitación constante.
              </p>
              <p>
                A través de esta mentoría 1 a 1, te acompaño de forma
                personalizada para desarmar la estructura de tu mente reactiva y
                ayudarte a operar con una firmeza emocional de alto rendimiento.
              </p>
            </div>

            {/* Scientific Credentials / Key points */}
            <div className='grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-border/40 font-hanken'>
              <div>
                <span className='font-playfair text-2xl md:text-3xl font-bold text-gold block mb-1'>
                  100%
                </span>
                <span className='text-xs uppercase tracking-[0.1em] text-on-surface-variant font-medium'>
                  Acompañamiento 1 a 1
                </span>
              </div>
              <div>
                <span className='font-playfair text-2xl md:text-3xl font-bold text-gold block mb-1'>
                  Somático
                </span>
                <span className='text-xs uppercase tracking-[0.1em] text-on-surface-variant font-medium'>
                  Enfoque en Sistema Nervioso
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
