import React from "react"

export function FeaturesSection() {
  const benefits = [
    "Dejas de vivir en alerta, miedo y anticipación constante.",
    "Aprendes a poner límites sin culpa ni miedo al rechazo.",
    "Recuperas tu autoconfianza y seguridad interior profunda.",
    "Dejas de autosabotearte cuando estás a punto de dar el siguiente paso.",
    "Te respetas, te valores y tomes decisiones firmes y alineadas.",
    "Enfrentas conflictos sin bloquearte ni explotar emocionalmente.",
    "Te conviertes en tu propio punto de apoyo emocional incondicional."
  ]

  return (
    <section id="resultados" className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Background Vinotinto Glow */}
      <div className="absolute top-1/3 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-vinotinto/15 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-vinotinto/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: What you obtain (List with 4px gold squares) */}
          <div className="lg:col-span-7">
            <span className="font-hanken text-xs font-semibold uppercase tracking-[0.15em] text-cobalt mb-4 block">
              RESULTADOS CONCRETOS
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-on-surface mb-12">
              ¿Qué obtienes al completar estos 90 días?
            </h2>

            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  {/* Square bullet point as specified in DESIGN.md */}
                  <span className="w-2.5 h-2.5 bg-gold mt-2 shrink-0" />
                  <p className="font-hanken text-base md:text-lg text-on-surface-variant font-light leading-relaxed">
                    {benefit}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: What it is / What it is not */}
          <div className="lg:col-span-5 border border-gold/20 border-l-2 border-l-vinotinto/50 p-8 md:p-10 bg-surface-container-lowest relative">
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/40" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/40" />

            <span className="font-hanken text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-8 block">
              FILOSOFÍA DE TRABAJO
            </span>

            <div className="space-y-8 font-hanken">
              <div>
                <h4 className="text-xs uppercase tracking-[0.1em] text-vinotinto-foreground/60 mb-2 font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" /> NO ES
                </h4>
                <p className="text-on-surface-variant/90 text-sm md:text-base font-light">
                  Motivación barata o discursos temporales de &ldquo;tú puedes&rdquo;.
                </p>
              </div>

              <div className="border-t border-border/40 my-4" />

              <div>
                <h4 className="text-xs uppercase tracking-[0.1em] text-vinotinto-foreground/60 mb-2 font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" /> NO ES
                </h4>
                <p className="text-on-surface-variant/90 text-sm md:text-base font-light">
                  Terapia eterna que analiza el pasado sin ofrecer herramientas prácticas de cambio.
                </p>
              </div>

              <div className="border-t border-border/40 my-4" />

              <div>
                <h4 className="text-xs uppercase tracking-[0.1em] text-gold/80 mb-2 font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" /> SÍ ES
                </h4>
                <p className="text-on-surface text-sm md:text-base font-medium">
                  Reprogramación neuronal directa, basada en neurociencia, reestructuración cognitiva y cambios corporales somáticos integrados.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
