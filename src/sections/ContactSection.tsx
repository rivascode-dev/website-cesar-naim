import React from 'react';
import { Mail, MessageCircle, Calendar } from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
    <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
  </svg>
);

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5' />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z' />
    <polygon points='10 15 15 12 10 9' />
  </svg>
);

export function ContactSection() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Correo Directo',
      value: 'cesarnaimb@gmail.com',
      href: 'mailto:cesarnaimb@gmail.com',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+34 641 710 296',
      href: 'https://wa.me/34641710296',
    },
    {
      icon: Calendar,
      label: 'Agendar Sesión (Calendly)',
      value: 'Reservar llamada',
      href: 'https://calendly.com/cesarnaimb/informacion-sesiones',
    },
    {
      icon: InstagramIcon,
      label: 'Instagram',
      value: '@yosoycesarcoach',
      href: 'https://instagram.com/yosoycesarcoach',
    },
    {
      icon: TiktokIcon,
      label: 'TikTok',
      value: '@yosoycesarcoach',
      href: 'https://tiktok.com/@yosoycesarcoach',
    },
    {
      icon: YoutubeIcon,
      label: 'YouTube',
      value: '@yosoycesarcoach',
      href: 'https://youtube.com/@yosoycesarcoach',
    },
  ];

  return (
    <section
      id='contacto'
      className='relative py-16 md:py-24 bg-background overflow-hidden border-t border-border/20'
    >
      {/* Background Glow */}
      <div className='absolute top-1/2 right-0 -translate-y-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-vinotinto/12 rounded-full blur-[100px] pointer-events-none' />
      <div className='absolute bottom-0 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-vinotinto/8 rounded-full blur-[80px] pointer-events-none' />
      <div className='absolute top-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-cobalt/5 rounded-full blur-[80px] pointer-events-none' />

      <div className='container mx-auto px-6 md:px-20 max-w-7xl relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center'>
          {/* Left Column: Contact details (5 Columns) */}
          <div className='lg:col-span-5 flex flex-col justify-center'>
            <span className='font-hanken text-xs font-semibold uppercase tracking-[0.15em] text-cobalt mb-4 block'>
              ADMISIÓN Y CONTACTO
            </span>
            <h2 className='font-playfair text-2xl sm:text-3xl md:text-5xl font-bold text-on-surface mb-8'>
              Inicia tu proceso de postulación
            </h2>
            <p className='font-hanken text-base text-on-surface-variant font-light leading-relaxed mb-6 max-w-md'>
              Dado que es una mentoría 1 a 1 exclusiva y de alta implicación,
              las plazas mensuales son estrictamente limitadas.
            </p>
            <p className='font-hanken text-base text-on-surface-variant font-light leading-relaxed max-w-md'>
              Ponte en contacto conmigo directamente a través de cualquiera de
              mis canales oficiales para evaluar tu caso y coordinar una sesión
              de valoración.
            </p>
          </div>

          {/* Right Column: Contact Cards Grid (7 Columns) */}
          <div className='lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
            {contactItems.map((item, idx) => {
              const Icon = item.icon;
              const isExternal = item.href.startsWith('http');
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className='group block border border-gold/15 bg-surface-container-lowest p-6 transition-all duration-300 hover:border-gold/60 hover:bg-vinotinto/5 relative overflow-hidden'
                >
                  <div className='absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/30 group-hover:border-gold transition-colors duration-300' />
                  <div className='absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/30 group-hover:border-gold transition-colors duration-300' />

                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 border border-gold/30 flex items-center justify-center text-gold bg-background/50 group-hover:bg-gold group-hover:text-black transition-all duration-300 shrink-0'>
                      <Icon className='w-5 h-5' />
                    </div>
                    <div className='min-w-0 flex-1'>
                      <span className='text-[10px] uppercase tracking-[0.12em] text-on-surface-variant/60 block font-hanken mb-1'>
                        {item.label}
                      </span>
                      <span className='text-sm font-medium text-on-surface group-hover:text-gold transition-colors duration-300 font-hanken block truncate'>
                        {item.value}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
