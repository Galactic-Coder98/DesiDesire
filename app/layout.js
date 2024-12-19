import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Desi Desire",
  description: "Desi Desire is the future of buying and selling.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
          {/* Navbar is placed here */}
          <Navbar />
          
          {/* Main content */}
          <main className="flex-grow max-w-screen-xl mx-auto">
            {children}
          </main>
          
          {/* Footer is placed here */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
