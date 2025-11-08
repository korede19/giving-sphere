import type { Metadata } from "next";
import { Ubuntu, Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
  title: "Givingsphere",
  description:
    "Givingsphere is a platform that connects donors with charitable organizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${poppins.variable}`}>
      <body>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            success: {
              style: {
                background: "#10b981",
                color: "#fff",
              },
              duration: 5000,
            },
            error: {
              style: {
                background: "#ef4444",
                color: "#fff",
              },
              duration: 6000,
            },
            loading: {
              style: {
                background: "#3b82f6",
                color: "#fff",
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
