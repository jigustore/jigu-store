import { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "jigustore",
  description: "Website of Jigustore",
  icons: {
    icon: [
      { url: '/icon.png' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col justify-between items-center">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
