import "./globals.css";
import { Poppins, Playfair_Display } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "💚 Baby Shower de Dante | Invitación Especial 💚",
  description:
    "Acompañanos a celebrar la llegada de Dante 👶✨. Encontrá aquí toda la información: fecha, hora, ubicación y música para compartir este momento tan especial.",
  keywords: [
    "Baby Shower",
    "Dante",
    "Invitación digital",
    "Evento familiar",
    "Fiesta",
    "Celebración",
    "Nacimiento",
    "Invitación interactiva",
    "Baby Shower online",
  ],
  authors: [
    {
      name: "Familia de Dante",
      url: "https://babyshower-dante.vercel.app",
    },
  ],
  openGraph: {
    title: "💚 Baby Shower de Dante 💚 | Invitación Especial",
    description:
      "Un día muy especial para celebrar la llegada de Dante 💫. Descubrí todos los detalles del evento y disfrutá esta invitación digital.",
    url: "https://babyshower-dante.vercel.app",
    siteName: "Baby Shower de Dante",
    images: [
      {
        url: "/dante.png",
        width: 800,
        height: 600,
        alt: "Invitación al Baby Shower de Dante 💚",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "💚 Baby Shower de Dante 💚",
    description:
      "Mirá todos los detalles del evento y acompañanos a celebrar la llegada de Dante 👶💫",
    images: ["/dante.png"],
    creator: "@familiaDante",
  },
  themeColor: "#CCEBD8",
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
        {/* Metadatos PWA y mobile-friendly */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Baby Shower de Dante" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#CCEBD8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon.png" />
      </head>

      <body
        className={`${poppins.variable} ${playfair.variable} bg-[#FEFDF9] text-[#5a5a5a]`}
      >
        <main>{children}</main>

        {/* Footer simple (opcional, combina con el diseño general) */}
        <footer
          style={{
            background: "#CCEBD8",
            color: "#8EBF9D",
            textAlign: "center",
            padding: "1rem 0",
            marginTop: "3rem",
            fontFamily: "var(--font-poppins)",
            fontSize: "0.9rem",
          }}
        >
          💚 Con amor, la familia de Dante 💚
        </footer>
      </body>
    </html>
  );
}
