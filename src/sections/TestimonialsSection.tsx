import React from "react"
import { Play } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      client: "Director de Operaciones",
      quote:
        "Llegué con niveles de ansiedad que me paralizaban a la hora de tomar decisiones ejecutivas y un miedo constante a defraudar. En menos de 60 días, mi relación con el estrés cambió por completo. Aprendí a poner límites y a liderar desde la seguridad interna, no desde la alerta.",
      change: "De ansiedad crónica a liderazgo enfocado",
    },
    {
      client: "Fundador de Startup",
      quote:
        "El autosabotaje y la procrastinación me hacían posponer los lanzamientos más importantes de mi negocio por miedo a la crítica. Con César desarticulamos la creencia inconsciente de raíz. Logré lanzar mi proyecto y facturar con total claridad mental.",
      change: "De procrastinación a acción disciplinada",
    },
  ]

  return (
    <section id="historias" className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Background Cobalt Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cobalt/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      {/* Vinotinto flare — top right */}
      <div className="absolute top-0 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-vinotinto/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-hanken text-xs font-semibold uppercase tracking-[0.15em] text-cobalt mb-4 block">
            HISTORIAS DE ÉXITO
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-bold text-on-surface mb-6">
            Casos de estudio y testimonios reales
          </h2>
          <p className="font-hanken text-base md:text-lg text-on-surface-variant font-light">
            Empresarios y profesionales que decidieron desmantelar sus patrones limitantes para operar desde su máximo potencial mental.
          </p>
        </div>

        {/* Video Placeholder & Text Testimonials Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text Testimonials (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="border-l border-gold/40 pl-6 py-4 bg-surface-container-lowest/40 hover:bg-surface-container-lowest/80 transition-colors duration-300"
              >
                <span className="font-hanken text-[10px] uppercase tracking-[0.1em] text-gold font-semibold block mb-2">
                  {t.change}
                </span>
                <p className="font-hanken text-base text-on-surface-variant font-light italic leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <span className="font-hanken text-xs text-on-surface uppercase tracking-[0.05em] font-medium">
                  — {t.client}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Premium Video Testimonial Placeholder (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="relative group border border-gold/20 p-2 bg-surface-container-lowest overflow-hidden aspect-video flex items-center justify-center cursor-pointer">
              {/* Fake thumbnail image style with glowing neural background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-vinotinto/40 via-black to-cobalt/20 opacity-95 transition-opacity duration-500 group-hover:opacity-80" />
              
              {/* Sound waves or neural line visual decoration */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="absolute w-24 h-24 border border-cobalt/40 rounded-full animate-ping" />
              </div>

              {/* Play Button */}
              <div className="relative z-10 w-20 h-20 bg-background border border-gold flex items-center justify-center text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-black group-hover:scale-110 active:scale-95">
                <Play className="fill-current w-8 h-8 translate-x-0.5" />
              </div>

              <div className="absolute bottom-6 left-6 z-10 font-hanken">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-1">
                  VIDEO TESTIMONIO
                </span>
                <h4 className="text-on-surface font-semibold text-sm md:text-base">
                  &ldquo;Cómo recuperé mi tranquilidad ejecutiva en menos de 90 días&rdquo;
                </h4>
              </div>

              {/* Borders decor */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
