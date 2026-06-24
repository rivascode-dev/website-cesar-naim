import React from "react"

export function MentorshipOverviewSection() {
  const phases = [
    {
      number: "01",
      title: "Desarticulación del Estado de Alerta",
      period: "Días 1 - 30",
      description:
        "Mapeamos los disparadores inconscientes y las respuestas automáticas de tu sistema nervioso. Identificamos exactamente dónde se originan el miedo al rechazo y la ansiedad crónica.",
      pillar: "Sistema Nervioso",
    },
    {
      number: "02",
      title: "Desprogramación de Creencias",
      period: "Días 31 - 60",
      description:
        "Reescribimos los patrones de autolimitación y procrastinación a nivel inconsciente. Liberamos la carga emocional acumulada que sabotea tus decisiones firmes.",
      pillar: "Mente Inconsciente",
    },
    {
      number: "03",
      title: "Reprogramación y Límites",
      period: "Días 61 - 90",
      description:
        "Consolidamos tu autoconfianza y la capacidad de poner límites sin sentir culpa. Aprendes a tomar el control emocional e integrar hábitos duraderos.",
      pillar: "Acción & Autonomía",
    },
  ]

  return (
    <section id="sobre-la-mentoria" className="relative py-16 md:py-24 bg-background">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-cobalt/5 rounded-full blur-[100px] pointer-events-none" />
      {/* Vinotinto flare — bottom right */}
      <div className="absolute bottom-0 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-vinotinto/12 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 max-w-7xl relative z-10">
        {/* Asymmetrical Layout Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 md:mb-20">
          <div className="lg:col-span-5">
            <span className="font-hanken text-xs font-semibold uppercase tracking-[0.15em] text-cobalt mb-4 block">
              LA METODOLOGÍA
            </span>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-bold text-on-surface leading-tight">
              Trabajo directo en tu mente, tu sistema nervioso y tus creencias inconscientes.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="font-hanken text-base md:text-lg text-on-surface-variant font-light leading-relaxed">
              No es motivación pasajera ni terapia interminable. Es un proceso de intervención directo de 90 días, estructurado y adaptado a tus dinámicas neuronales particulares.
            </p>
          </div>
        </div>

        {/* Transformation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.number}
            className="group relative border border-cobalt/40 bg-transparent p-8 transition-all duration-500 hover:border-vinotinto/70 hover:shadow-[inset_0_0_40px_rgba(92,18,18,0.25),0_0_20px_rgba(92,18,18,0.1)] rounded-none flex flex-col justify-between min-h-[350px]"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="font-playfair text-4xl md:text-5xl font-bold text-gold/80 group-hover:text-gold transition-colors duration-300">
                    {phase.number}
                  </span>
                  <span className="font-hanken text-[10px] uppercase tracking-[0.15em] border border-cobalt/30 px-3 py-1 text-cobalt group-hover:border-vinotinto/40 group-hover:text-vinotinto-foreground transition-colors duration-300">
                    {phase.pillar}
                  </span>
                </div>

                <h3 className="font-playfair text-xl md:text-2xl font-bold text-on-surface mb-4">
                  {phase.title}
                </h3>
                <p className="font-hanken text-sm text-on-surface-variant/90 font-light leading-relaxed">
                  {phase.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-cobalt/20 group-hover:border-vinotinto/20 transition-colors duration-300">
                <span className="font-hanken text-xs text-gold uppercase tracking-[0.05em] font-semibold">
                  {phase.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
