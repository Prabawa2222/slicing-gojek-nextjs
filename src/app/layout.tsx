import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const maisonNeueBold = localFont({
  src: "./fonts/MaisonNeueBold.woff",
  variable: "--font-maison-neue-bold",
});

const maisonNeueBook = localFont({
  src: "./fonts/MaisonNeue-Book.woff",
  variable: "--font-maison-neue-book",
});

const maisonNeueDemi = localFont({
  src: "./fonts/MaisonNeueDemi.woff",
  variable: "--font-maison-neue-demi",
});

const maisonNeueExtBold = localFont({
  src: "./fonts/MaisonNeueExtendedBold.woff",
  variable: "--font-maison-neue-extended-bold",
});

const maisonNeueXtraBold = localFont({
  src: "./fonts/MaisonNeueExtendedExtraBold.woff",
  variable: "--font-maison-neue-extended-extra-bold",
});

export const metadata: Metadata = {
  title: "Gojek Super App",
  description:
    "Lebih dari 1 juta driver Gojek siap melayani ojek online, taksi online, pesan antar makanan, kirim barang, belanja & pembayaran. Download Gojek Super App.",
  icons:
    "https://d1j87w3j7cc3a6.cloudfront.net/prime/static/prime/images/gojek_favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${maisonNeueBold.variable} ${maisonNeueBook.variable} ${maisonNeueDemi.variable} ${maisonNeueExtBold.variable} ${maisonNeueXtraBold.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
