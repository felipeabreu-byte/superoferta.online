import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | SuperOferta",
    default: "SuperOferta | As melhores oportunidades, em um só lugar.",
  },
  description: "Descubra produtos, serviços e soluções selecionados para facilitar sua vida e ajudar você a encontrar exatamente o que procura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-brand-500/30">
        {children}
      </body>
    </html>
  );
}
