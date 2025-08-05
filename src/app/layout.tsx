import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Permian Turf Solutions - Commercial Artificial Turf Installation | Midland-Odessa",
  description: "The Permian Basin's premier commercial turf specialist. Save 70% on water bills with artificial turf installation for RV parks, man camps, and properties. Serving Midland, Odessa, and West Texas.",
  keywords: "artificial turf Midland, commercial turf installation Odessa, RV park landscaping, man camp turf, water-saving landscaping Permian Basin",
  openGraph: {
    title: "Permian Turf Solutions - Water-Smart Landscapes for West Texas",
    description: "Save water and money with commercial-grade artificial turf. Specializing in workforce housing, property management, and residential installations.",
    type: "website",
    locale: "en_US",
    siteName: "Permian Turf Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}