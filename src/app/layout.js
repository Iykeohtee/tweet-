import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import { SearchProvider } from "@/contexts/SearchContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = { 
  title: "Twitter clone",   
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SearchProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
        >
        {children}   
      </body>
          </SearchProvider> 
    </html>
  );
}
