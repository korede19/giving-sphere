import type { Metadata } from "next";
import { Ubuntu, Montserrat } from "next/font/google";
import "./globals.css";

const rubik = Ubuntu({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Giving Sphere",
  description:
    "Giving Sphere is a platform that connects donors with charitable organizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
