import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { cn, constructMetadata } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "800", "900"],
  subsets: ["latin"],
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          poppins.className
        )}
      >
        <main className="relative flex flex-col min-h-screen">
          <Providers>
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
            <Footer />
          </Providers>
        </main>

        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
