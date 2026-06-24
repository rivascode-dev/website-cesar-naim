import type { Metadata } from "next";
import { Playfair_Display, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "César Naim | Reprogramación Mental de 90 Días",
  description: "Mentoría 1 a 1 de reprogramación mental. Elimina la ansiedad, la procrastinación y el autosabotaje desde la raíz. Recupera tu seguridad y confianza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfairDisplay.variable} ${hankenGrotesk.variable} dark`}>
      <body className="bg-background text-foreground font-hanken antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
