import "./globals.css";
import { Poppins, Playfair_Display } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export const metadata = {
  title: " Baby Shower de Dante | Invitación especial 💙",
  description:
    "Acompañanos a celebrar la llegada de Dante 👶💫. Encontrá aquí toda la información: fecha, hora, ubicación y una canción para compartir este hermoso momento.",
  keywords: [
    "Baby Shower",
    "Dante",
    "Invitación digital",
    "Evento familiar",
    "Fiesta",
    "Casa Quinta Los Aromos",
    "Celebración",
    "Nacimiento",
  ],
  authors: [{ name: "Familia de Dante", url: "https://babyshower-dante.vercel.app" }],
  openGraph: {
    title: "💙 Baby Shower de Dante | Invitación especial 💙",
    description:
      "Un día muy especial para celebrar la llegada de Dante 💫. Mirá la invitación completa, escuchá la música y descubrí todos los detalles del evento.",
    url: "https://babyshower-dante.vercel.app",
    siteName: "Baby Shower de Dante",
    images: [
      {
        url: "/dante.png",
        width: 800,
        height: 600,
        alt: "Foto de Dante 💙",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "💙 Baby Shower de Dante 💙",
    description: "Mirá todos los detalles del evento y acompañanos en este día tan especial 💫",
    images: ["/dante.png"],
    creator: "@familiaDante",
  },
  themeColor: "#A7E3F4",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Baby Shower de Dante" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#A7E3F4" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${poppins.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
