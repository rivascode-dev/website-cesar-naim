"use client"

import React, { useState } from "react"
import { FloatingInput } from "@/components/ui/floating-input"
import { Button } from "@/components/ui/button"
import { submitContactAction } from "@/actions/contactAction"
import { Check, Mail, Phone, Share2 } from "lucide-react"

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    situation: "",
  })
  
  const [isPending, setIsPending] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)
    setResult(null)

    const response = await submitContactAction(form)
    setIsPending(false)
    
    if (response.success) {
      setResult({ success: true, message: response.message })
      setForm({ name: "", email: "", phone: "", situation: "" })
    } else {
      setResult({
        success: false,
        message: response.error || response.message,
      })
    }
  }

  return (
    <section id="contacto" className="relative py-16 md:py-24 bg-background overflow-hidden border-t border-border/20">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-vinotinto/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-vinotinto/8 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-cobalt/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact details (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-hanken text-xs font-semibold uppercase tracking-[0.15em] text-cobalt mb-4 block">
              ADMISIÓN Y CONTACTO
            </span>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-bold text-on-surface mb-8">
              Inicia tu proceso de postulación
            </h2>
            <p className="font-hanken text-base text-on-surface-variant font-light leading-relaxed mb-12 max-w-md">
              Dado que es una mentoría 1 a 1 exclusiva y de alta implicación, las plazas mensuales son estrictamente limitadas. Cuéntame brevemente tu situación actual para coordinar una llamada de valoración.
            </p>

            <div className="space-y-6 font-hanken">
              <div className="flex items-center gap-4 text-on-surface-variant">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.1em] text-on-surface-variant/60 block">
                    Correo Directo
                  </span>
                  <a href="mailto:cesar@cesarnaim.com" className="text-sm font-medium hover:text-gold transition-colors">
                    contacto@cesarnaim.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-on-surface-variant">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.1em] text-on-surface-variant/60 block">
                    Atención Inmediata
                  </span>
                  <a href="tel:+58412000000" className="text-sm font-medium hover:text-gold transition-colors">
                    +58 (412) 000-0000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-on-surface-variant">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.1em] text-on-surface-variant/60 block">
                    Redes Sociales
                  </span>
                  <div className="flex gap-4 mt-1">
                    <a href="https://instagram.com/cesarnaim" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-gold transition-colors">
                      Instagram
                    </a>
                    <span className="text-border/60">/</span>
                    <a href="https://linkedin.com/in/cesarnaim" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-gold transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form (7 Columns) */}
          <div className="lg:col-span-7 border border-gold/20 border-t-2 border-t-vinotinto/50 p-6 md:p-10 lg:p-12 bg-surface-container-lowest relative">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/50" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/50" />

            {result?.success ? (
              <div className="flex flex-col items-center justify-center py-16 text-center font-hanken">
                <div className="w-16 h-16 bg-gold/10 border border-gold flex items-center justify-center text-gold mb-6 rounded-full animate-pulse">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-on-surface mb-4">
                  Solicitud Enviada
                </h3>
                <p className="text-on-surface-variant/90 max-w-md font-light leading-relaxed">
                  {result.message}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-8">
                  <FloatingInput
                    type="text"
                    name="name"
                    label="Nombre Completo *"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={isPending}
                  />

                  <FloatingInput
                    type="email"
                    name="email"
                    label="Correo Electrónico *"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={isPending}
                  />

                  <FloatingInput
                    type="tel"
                    name="phone"
                    label="Teléfono / WhatsApp *"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    disabled={isPending}
                  />

                  {/* Textarea style for situation */}
                  <div className="relative z-0 w-full group">
                    <textarea
                      name="situation"
                      placeholder=" "
                      value={form.situation}
                      onChange={handleChange}
                      rows={4}
                      disabled={isPending}
                      className="block py-3 px-0 w-full text-base bg-transparent border-t-0 border-l-0 border-r-0 border-b border-border appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors duration-300 font-hanken text-on-surface placeholder:text-transparent resize-none"
                    />
                    <label className="absolute text-sm text-on-surface-variant duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 select-none font-hanken">
                      Describe tu situación actual (ansiedad, procrastinación, autoestima)
                    </label>
                  </div>
                </div>

                {result && !result.success && (
                  <div className="p-4 border border-destructive/30 bg-destructive/5 text-destructive text-sm font-hanken">
                    {result.message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full h-14 bg-transparent text-gold border border-gold hover:bg-gold hover:text-black font-hanken font-bold uppercase tracking-[0.1em] text-sm transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none rounded-none"
                >
                  {isPending ? "Procesando Solicitud..." : "Postularme a la Mentoría"}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
