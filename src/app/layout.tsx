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
  metadataBase: new URL("https://cesarnaim.vercel.app"),
  title: "César Naim | Reprogramación Mental de 90 Días",
  description: "Mentoría 1 a 1 de reprogramación mental. Elimina la ansiedad, la procrastinación y el autosabotaje desde la raíz. Recupera tu seguridad y confianza.",
  keywords: [
    "Reprogramación Mental",
    "Mentoría 1 a 1",
    "César Naim",
    "Desarrollo Personal",
    "Superar Ansiedad",
    "Superar Procrastinación",
    "Coaching Ejecutivo",
    "Mentalidad de Éxito"
  ],
  openGraph: {
    title: "César Naim | Reprogramación Mental de 90 Días",
    description: "Mentoría 1 a 1 de reprogramación mental. Elimina la ansiedad, la procrastinación y el autosabotaje desde la raíz.",
    url: "https://cesarnaim.vercel.app",
    siteName: "César Naim",
    images: [
      {
        url: "/assets/logo/logo-cesar-naim.jpeg",
        width: 800,
        height: 600,
        alt: "Logo César Naim",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "César Naim | Reprogramación Mental de 90 Días",
    description: "Mentoría 1 a 1 de reprogramación mental. Elimina la ansiedad y el autosabotaje desde la raíz.",
    images: ["/assets/logo/logo-cesar-naim.jpeg"],
  },
  icons: {
    icon: [
      { url: "/assets/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/assets/favicons/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/assets/favicons/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/assets/favicons/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/assets/favicons/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/assets/favicons/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/assets/favicons/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/assets/favicons/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/assets/favicons/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/assets/favicons/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/assets/favicons/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/favicons/apple-icon-precomposed.png",
      },
    ],
  },
  manifest: "/assets/favicons/manifest.json",
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
