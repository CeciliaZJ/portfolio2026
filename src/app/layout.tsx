import type { Metadata } from "next";
import { Caveat, Fredoka, Nunito, Silkscreen, Special_Elite } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const pixel = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
});

const script = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const display = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const receipt = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-special-elite",
});

export const metadata: Metadata = {
  title: "Cece's Cafe",
  description:
    "Portfolio of Cecilia, a designer and software engineer studying computer science at Barnard College.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${pixel.variable} ${script.variable} ${display.variable} ${receipt.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-wall font-sans text-neutral-900">{children}</body>
    </html>
  );
}
