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
  title: "Baby Shower de Dante 💙",
  description:
    "Acompañanos a celebrar la llegada de Dante. Invitación con detalles, ubicación y música especial 💫",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
